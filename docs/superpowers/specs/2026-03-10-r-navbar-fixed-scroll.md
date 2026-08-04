# RNavbar — Fixed + Scroll Behavior Design

**Data:** 2026-03-10
**Escopo:** Refactor do `RNavbar.vue` para navbar fixa com hide-on-scroll-down, show-on-scroll-up, backdrop blur e smooth scroll para âncoras.

---

## Objetivo

Tornar a `RNavbar` fixa no topo da página com:
1. **Hide on scroll down** — navbar desliza para fora da tela (translateY(-100%))
2. **Show on scroll up** — navbar reaparece (translateY(0))
3. **Backdrop blur ao rolar** — fundo com blur + opacidade quando fora do topo
4. **Smooth scroll** — links de âncora rolam suavemente até a seção correspondente
5. **Scroll offset** — seção não fica escondida atrás da navbar fixa

---

## Arquitetura

### Componentes modificados

| Arquivo | Mudança |
|---|---|
| `app/components/RNavbar.vue` | `position: fixed`, scroll listener, refs `isHidden`/`isScrolled`, classes dinâmicas |
| `app/assets/css/main.css` | `scroll-behavior: smooth` e `scroll-padding-top` no `html` |
| `app/components/SHero.vue` | `id="o-rumo"` na tag `<section>` |
| `app/components/SManagers.vue` | `id="funcionalidades"` na tag `<section>` |
| `app/components/SSystem.vue` | `id="performance"` na tag `<section>` |
| `app/components/STestimonials.vue` | `id="depoimentos"` na tag `<section>` |
| `app/components/SPlans.vue` | `id="planos"` na tag `<section>` |

Nenhuma dependência nova necessária.

---

## Comportamento de Scroll

### Hide/Show

```
lastScrollY = 0
threshold = 10px  (evita micro-movimentos)

onScroll:
  delta = scrollY - lastScrollY
  if delta > threshold  → isHidden = true   (translateY(-100%))
  if delta < -threshold → isHidden = false  (translateY(0))
  lastScrollY = scrollY
  isScrolled = scrollY > 10
```

### Transição CSS

```css
.r-navbar {
  position: fixed;
  top: 0;
  transition: transform 300ms ease, background-color 300ms ease, backdrop-filter 300ms ease;
}

/* scroll para baixo */
.r-navbar--hidden {
  transform: translateY(-100%);
}

/* ao rolar (não no topo) */
.r-navbar--scrolled {
  background-color: rgba(var(--color-page-bg-rgb), 0.8);
  backdrop-filter: blur(12px);
}
```

> **Nota sobre tokens:** `bg-page-bg` = `#111111`. Para opacidade, usar `bg-page-bg/80` via Tailwind (requer que o token defina RGB channel).

### Alternativa mais simples (recomendada)

Usar classe Tailwind diretamente via `:class` binding:
```vue
:class="{
  '-translate-y-full': isHidden,
  'bg-page-bg/80 backdrop-blur-md': isScrolled,
  'bg-page-bg': !isScrolled
}"
```

---

## Smooth Scroll + Offset

No `app/assets/css/main.css`, adicionar ao bloco `html`:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* altura da navbar (~73px) + margem */
}
```

---

## Mapeamento de Âncoras

| Link navbar | `href` | Seção | `id` |
|---|---|---|---|
| O Rumo | `#o-rumo` | `SHero.vue` | `id="o-rumo"` |
| Funcionalidades | `#funcionalidades` | `SManagers.vue` | `id="funcionalidades"` |
| Performance | `#performance` | `SSystem.vue` | `id="performance"` |
| Depoimentos | `#depoimentos` | `STestimonials.vue` | `id="depoimentos"` |
| Ver Planos | `#planos` | `SPlans.vue` | `id="planos"` |

---

## Compensação de Layout (body offset)

A navbar fixa sai do fluxo normal do documento. Para evitar que o conteúdo fique escondido atrás dela, adicionar padding-top ao wrapper da página.

Verificar se `app/pages/[...slug].vue` ou `app/app.vue` tem um wrapper principal e adicionar `pt-[73px]` (altura da navbar).

---

## Critérios de Sucesso

- [ ] Navbar visível e fixa ao topo em todas as seções
- [ ] Navbar desaparece ao rolar para baixo (translateY + transition)
- [ ] Navbar reaparece ao rolar para cima
- [ ] Backdrop blur ativo ao sair do topo, removido ao voltar ao topo
- [ ] Clicar em "O Rumo" rola suavemente até `#o-rumo`
- [ ] Clicar em "Funcionalidades" rola até `#funcionalidades`
- [ ] Clicar em "Performance" rola até `#performance`
- [ ] Clicar em "Depoimentos" rola até `#depoimentos`
- [ ] Clicar em "Ver Planos" rola até `#planos`
- [ ] Topo da seção não fica escondido atrás da navbar ao navegar
