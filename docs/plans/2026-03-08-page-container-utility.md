# Page Container Utility Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Criar a utility `page-container` no Tailwind v4 para centralizar `max-w-[1216px] w-full px-8` e eliminar o valor hardcoded de todos os componentes.

**Architecture:** Adicionar um `@utility page-container` em `main.css` com as propriedades de largura máxima e padding horizontal. Cada componente substitui o bloco `max-w-[1216px] px-8` (e variações) pelo `@apply page-container`, mantendo bordas e padding vertical como classes explícitas.

**Tech Stack:** Tailwind CSS v4 (`@tailwindcss/vite`), Vue 3 / Nuxt 4, BEM + `@apply` scoped styles.

---

### Task 1: Definir a utility em `main.css`

**Files:**
- Modify: `app/assets/css/main.css`

**Step 1: Adicionar o bloco `@utility` após o bloco `@theme`**

Inserir logo após o fechamento do `@theme { ... }`, antes do bloco `@theme inline`:

```css
@utility page-container {
  max-width: 1216px;
  width: 100%;
  padding-inline: 2rem; /* equivale a px-8 */
}
```

**Step 2: Verificar no browser**

Acesse `http://localhost:8000` e confirme que a página não quebrou (hot reload do Vite deve aplicar automaticamente).

---

### Task 2: Refatorar `RNavbar.vue`

**Files:**
- Modify: `app/components/RNavbar.vue`

**Step 1: Substituir no bloco `<style scoped>`**

De:
```css
.r-navbar__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-page-border;
}
```

Para:
```css
.r-navbar__container {
  @apply page-container relative flex flex-1 items-center justify-between
         py-6 border-l border-r border-page-border;
}
```

**Step 2: Verificar no browser**

Navbar deve manter o mesmo visual.

---

### Task 3: Refatorar `RFooter.vue`

**Files:**
- Modify: `app/components/RFooter.vue`

**Step 1: Substituir no bloco `<style scoped>`**

De:
```css
.r-footer__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-page-border;
}
```

Para:
```css
.r-footer__container {
  @apply page-container relative flex flex-1 items-center justify-between
         py-6 border-l border-r border-page-border;
}
```

**Step 2: Verificar no browser**

Footer deve manter o mesmo visual.

---

### Task 4: Refatorar `SHero.vue`

**Files:**
- Modify: `app/components/SHero.vue`

**Step 1: Localizar o container no `<style scoped>`**

Buscar por `max-w-[1216px]` no arquivo e substituir:

De:
```css
.s-hero__container {
  @apply ... max-w-[1216px] px-8 pb-8 pt-[280px]
         border-l border-r border-page-border;
}
```

Para:
```css
.s-hero__container {
  @apply page-container ... pb-8 pt-[280px]
         border-l border-r border-page-border;
}
```

> Preserve todas as outras classes (`relative`, `flex`, etc.) — apenas remova `max-w-[1216px]` e `px-8`.

**Step 2: Verificar no browser**

Seção hero deve manter o mesmo visual.

---

### Task 5: Refatorar `SEcosystem.vue`

**Files:**
- Modify: `app/components/SEcosystem.vue`

**Step 1: Substituir no `<style scoped>`**

De:
```css
.s-ecosystem__container {
  @apply ... max-w-[1216px] px-8 pt-[140px] pb-20
         border-l border-r border-page-border;
}
```

Para:
```css
.s-ecosystem__container {
  @apply page-container ... pt-[140px] pb-20
         border-l border-r border-page-border;
}
```

**Step 2: Verificar no browser**

---

### Task 6: Refatorar `SFAQ.vue`

**Files:**
- Modify: `app/components/SFAQ.vue`

**Step 1: Substituir no `<style scoped>`**

De:
```css
.s-faq__container {
  @apply flex items-start justify-between
         max-w-[1216px] w-full;
}
```

Para:
```css
.s-faq__container {
  @apply page-container flex items-start justify-between;
}
```

> `w-full` e `max-w-[1216px]` já estão embutidos na utility. O `px-8` passa a ser aplicado também (consistência com os demais).

**Step 2: Verificar no browser**

---

### Task 7: Atualizar `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Adicionar convenção de container**

Na seção **Convenções de Código > Estilização de Componentes**, adicionar após o item 2 (BEM com `@apply`):

```markdown
3. **`page-container` para largura máxima** — todo container interno de seção ou componente de layout que precise de `max-width: 1216px` e `padding-inline: 2rem` deve usar `@apply page-container`. Bordas, flex e padding vertical são adicionados por cima como classes normais.

   ```css
   .s-exemplo__container {
     @apply page-container flex items-center justify-between
            py-20 border-l border-r border-page-border;
   }
   ```
```

**Step 2: Commit final**

```bash
git add app/assets/css/main.css \
        app/components/RNavbar.vue \
        app/components/RFooter.vue \
        app/components/SHero.vue \
        app/components/SEcosystem.vue \
        app/components/SFAQ.vue \
        CLAUDE.md \
        docs/plans/2026-03-08-page-container-utility.md
git commit -m "refactor: criar utility page-container e refatorar containers"
```
