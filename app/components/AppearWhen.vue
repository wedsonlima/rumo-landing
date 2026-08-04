<template>
  <div ref="el" class="appear-when">
    <slot />
  </div>
</template>

<script setup lang="ts">
// gsap + SplitText are the heaviest dependency on the page and only ever run in
// the browser, so they are imported on mount instead of shipping in the initial
// bundle. Everything below is type-only and erased at build time.
type Gsap = typeof import('gsap')['gsap']
type TweenVars = Parameters<Gsap['set']>[1]
type SplitTextInstance = InstanceType<typeof import('gsap/SplitText')['SplitText']>

type Animation = 'fade-in' | 'slide-up' | 'slide-down' | 'zoom-in'
type Mode      = 'once' | 'every'
type Split     = 'chars' | 'words' | 'lines'

const props = withDefaults(defineProps<{
  threshold?: number
  animation?: Animation
  delay?:     number
  mode?:      Mode
  split?:     Split
}>(), {
  threshold: 0.9,
  animation: 'fade-in',
  delay:     0,
  mode:      'once',
})

const el = ref<HTMLElement | null>(null)

const animVars: Record<Animation, { from: TweenVars; to: TweenVars }> = {
  'fade-in':    { from: { opacity: 0 },              to: { opacity: 1 } },
  'slide-up':   { from: { opacity: 0, y: 24 },       to: { opacity: 1, y: 0, clearProps: 'transform' } },
  'slide-down': { from: { opacity: 0, y: -24 },      to: { opacity: 1, y: 0, clearProps: 'transform' } },
  'zoom-in':    { from: { opacity: 0, scale: 0.95 }, to: { opacity: 1, scale: 1, clearProps: 'transform' } },
}

const staggerMap: Record<Split, number> = {
  chars: 0.025,
  words: 0.065,
  lines: 0.12,
}

let gsap: Gsap | null = null
let splitInstance: SplitTextInstance | null = null
let observer: IntersectionObserver | null = null
let disposed = false

function getTarget(): HTMLElement | null {
  return (el.value?.firstElementChild as HTMLElement) ?? null
}

function getSplitEls(): Element[] {
  if (!splitInstance || !props.split) return []
  return { chars: splitInstance.chars, words: splitInstance.words, lines: splitInstance.lines }[props.split]
}

function animate() {
  if (!gsap) return
  if (props.split) {
    const els = getSplitEls()
    if (!els.length) return
    gsap.fromTo(els,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.7, delay: props.delay / 1000, ease: 'power3.out', stagger: staggerMap[props.split] },
    )
  } else {
    const target = getTarget()
    if (!target) return
    const { from, to } = animVars[props.animation]
    gsap.fromTo(target, from, { ...to, duration: 0.6, delay: props.delay / 1000, ease: 'power2.out' })
  }
}

function reset() {
  if (!gsap) return
  if (props.split) {
    const els = getSplitEls()
    if (els.length) {
      gsap.killTweensOf(els)
      gsap.set(els, { yPercent: 110 })
    }
  } else {
    const target = getTarget()
    if (!target) return
    gsap.killTweensOf(target)
    gsap.set(target, animVars[props.animation].from)
  }
}

onMounted(async () => {
  const target = getTarget()
  if (!target) return

  // Sem movimento: sair antes de qualquer coisa deixa o conteúdo no estado
  // natural, já visível. Animar é opcional; esconder para depois revelar não é
  // — se o reset rodasse aqui, o texto ficaria em opacity 0 para sempre.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const [gsapModule, splitModule] = await Promise.all([
    import('gsap'),
    import('gsap/SplitText'),
  ])

  // The component can unmount while the chunks are still in flight.
  if (disposed) return

  gsap = gsapModule.gsap
  gsap.registerPlugin(splitModule.SplitText)

  if (props.split) {
    splitInstance = splitModule.SplitText.create(target, { type: props.split, mask: props.split })
  }

  reset()

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        animate()
        if (props.mode === 'once') observer?.disconnect()
      } else if (props.mode === 'every') {
        reset()
      }
    },
    { threshold: props.threshold },
  )

  observer.observe(target)
})

onUnmounted(() => {
  disposed = true
  observer?.disconnect()
  splitInstance?.revert()
})
</script>

<style scoped>
.appear-when {
  display: contents; /* invisível ao layout — não gera caixa CSS */
}
</style>
