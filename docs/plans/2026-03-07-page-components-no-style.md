# Page Components (No Style) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Criar 11 componentes Vue sem estilo (apenas tags HTML e texto) para todas as seções da homepage, e compô-los no `content/index.md` via MDC.

**Architecture:** Cada seção do Figma vira um componente `.vue` em `app/components/` com HTML semântico e texto real extraído do Figma — zero CSS, zero Tailwind, zero classes. O `content/index.md` usa a sintaxe MDC do Nuxt Content v3 (`::component-name::`) para montar a página na ordem correta.

**Tech Stack:** Nuxt 4, Vue 3, @nuxt/content v3 (MDC syntax)

---

### Task 1: RNavbar.vue

**Files:**
- Create: `app/components/RNavbar.vue`

**Step 1: Criar o componente**

```vue
<template>
  <nav>
    <div>
      <span>rumo</span>
    </div>
    <ul>
      <li><a href="#">O Rumo</a></li>
      <li><a href="#">Funcionalidades</a></li>
      <li><a href="#">Performance</a></li>
      <li><a href="#">Depoimentos</a></li>
      <li><a href="#">Ver Planos</a></li>
    </ul>
    <button>Solicitar demonstração</button>
  </nav>
</template>
```

**Step 2: Verificar que o Nuxt auto-importa**

```bash
bun run dev
```

Expected: Servidor sobe sem erros.

**Step 3: Commit**

```bash
git add app/components/RNavbar.vue
git commit -m "feat: add RNavbar component (no style)"
```

---

### Task 2: RFooter.vue

**Files:**
- Create: `app/components/RFooter.vue`

**Step 1: Criar o componente**

```vue
<template>
  <footer>
    <div>
      <span>rumo</span>
    </div>
    <p>Direitos reservados</p>
  </footer>
</template>
```

**Step 2: Commit**

```bash
git add app/components/RFooter.vue
git commit -m "feat: add RFooter component (no style)"
```

---

### Task 3: SHero.vue

**Files:**
- Create: `app/components/SHero.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// DE CAOS PARA MÁQUINA DE VENDAS</p>
    <h1>Pare de torcer para o time vender e comece a governar o resultado!</h1>
    <p>
      Somos a camada de inteligência que transforma o caos do time comercial
      em uma máquina de vendas previsível, engajada e de alta performance.
    </p>
    <button>Solicitar demonstração</button>
    <div>
      <span>Plataformas disponíveis:</span>
      <span>iOS</span>
      <span>Web</span>
      <span>Android</span>
    </div>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SHero.vue
git commit -m "feat: add SHero component (no style)"
```

---

### Task 4: SPartners.vue

**Files:**
- Create: `app/components/SPartners.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>Parceiros</p>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SPartners.vue
git commit -m "feat: add SPartners component (no style)"
```

---

### Task 5: SEcosystem.vue

**Files:**
- Create: `app/components/SEcosystem.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// NÃO SOMOS UM SISTEMA DE COMISSÕES</p>
    <h2>Somos um /ecossistema/ de performance em vendas e metas</h2>

    <div>
      <h3>MODELO ANTIGO</h3>
      <h4>Onde os sistemas comuns param</h4>
      <p>
        ERP e CRM organizam processos e relacionamentos, mas deixam uma lacuna
        crítica: o foco real na performance comercial. Nenhum impulsiona a
        ponta final da venda.
      </p>
    </div>

    <div>
      <h3>MODELO ATUAL</h3>
      <h4>A peça que faltava para sua performance</h4>
      <p>
        O Rumo é a camada que faltava para unir planejamento e execução. É onde
        o incentivo se transforma em comportamento e o comportamento gera
        resultados previsíveis para o seu negócio.
      </p>
    </div>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SEcosystem.vue
git commit -m "feat: add SEcosystem component (no style)"
```

---

### Task 6: SEcosystemAction.vue

**Files:**
- Create: `app/components/SEcosystemAction.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// NOSSO ECOSSISTEMA</p>
    <h2>Veja o Rumo em ação</h2>

    <div>
      <!-- placeholder de vídeo -->
      <p>[Vídeo]</p>
    </div>

    <p>Do planejamento ao pagamento, tudo conectado.</p>

    <ol>
      <li>
        <span>//01</span>
        <h3>A empresa define</h3>
        <p>
          Metas, orçamento fixo ou variável e regras de campanha. Tudo pela
          aplicação, com total controle do gestor.
        </p>
      </li>
      <li>
        <span>//02</span>
        <h3>O time executa</h3>
        <p>
          Vendas, frequência, consistência. O vendedor acompanha seu progresso
          em tempo real pelo aplicativo.
        </p>
      </li>
      <li>
        <span>//03</span>
        <h3>O sistema converte</h3>
        <p>
          Ações viram pontos, engajamento vira métricas, performance vira valor
          tangível. Tudo automático.
        </p>
      </li>
      <li>
        <span>//04</span>
        <h3>O Rumo distribui</h3>
        <p>
          Bonificações e reconhecimento de forma auditável, rastreável e
          previsível. Sem planilha, sem erro.
        </p>
      </li>
    </ol>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SEcosystemAction.vue
git commit -m "feat: add SEcosystemAction component (no style)"
```

---

### Task 7: SManagers.vue

**Files:**
- Create: `app/components/SManagers.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// PERFORMANCE PARA GESTORES</p>
    <h2>Da estratégia à execução em minutos</h2>
    <p>
      Descubra como transformar suas metas comerciais em ações práticas sem a
      burocracia de planilhas ou a dependência de suporte técnico.
    </p>

    <ul>
      <li>
        <h3>Gestão por campanhas</h3>
        <p>
          Através do painel, o gestor detém autonomia total para definir o
          objetivo e o período da campanha, estabelecer o orçamento (seja ele
          de valor fixo ou variável), selecionar as equipes, regras e métricas
          específicas de performance.
        </p>
      </li>
      <li>
        <h3>Controle total em tempo real</h3>
      </li>
    </ul>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SManagers.vue
git commit -m "feat: add SManagers component (no style)"
```

---

### Task 8: SSellers.vue

**Files:**
- Create: `app/components/SSellers.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// PERFORMANCE PARA VENDEDORES</p>
    <h2>Tudo que seu time precisa para performar nas vendas</h2>

    <ul>
      <li>
        <h3>Ranking Competitivo</h3>
        <p>
          Visibilidade do desempenho para estimular competitividade saudável e
          senso de urgência. Todos sabem quem lidera, quem está atrás e quem
          precisa reagir agora.
        </p>
      </li>
      <li>
        <h3>Meta Individual</h3>
        <p>
          Acompanhamento em tempo real do progresso e gaps. Sem ambiguidade ou
          desculpas: o vendedor sabe exatamente o que falta para bater a meta
          antes do fim do mês.
        </p>
      </li>
      <li>
        <h3>Ofensiva Semanal</h3>
        <p>
          Micro-metas semanais que criam ritmo e constância comercial. O time
          age no presente, garantindo presença diária sem esperar o fechamento
          do mês para reagir.
        </p>
      </li>
      <li>
        <h3>Conteúdo dinâmico (CMS)</h3>
        <p>
          Centralize a comunicação estratégica. Distribua informações de
          produtos, treinamentos e atualizações comerciais para quem precisa
          vender melhor, no momento certo.
        </p>
      </li>
      <li>
        <h3>Central de Notificações</h3>
        <p>
          Alertas de inatividade e estímulos de performance via push.
          Notificações diretas, sem ruído ou distrações, focadas em manter o
          ritmo de execução da equipe.
        </p>
      </li>
      <li>
        <h3>Feed Social</h3>
        <p>
          Reconhecimento público baseado em conquistas reais. Um feed focado em
          motivação social e performance, onde cada post celebra o alcance de
          objetivos comerciais.
        </p>
      </li>
      <li>
        <h3>Produtos financeiros</h3>
        <p>
          Conecte performance a dinheiro com pagamentos automáticos,
          antecipação e microcrédito. Gestão de premiações integrada, sem
          planilhas, retrabalho ou risco.
        </p>
      </li>
    </ul>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SSellers.vue
git commit -m "feat: add SSellers component (no style)"
```

---

### Task 9: SSystem.vue

**Files:**
- Create: `app/components/SSystem.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// SISTEMA DE PERFORMANCE</p>
    <h2>Uma engine que treina comportamento</h2>

    <ul>
      <li>
        <h3>Regras claras</h3>
        <p>
          Metas, critérios de elegibilidade e mecânicas de campanha configuradas
          com precisão pela aplicação web, sem depender de TI. O que vale,
          quando vale e quanto vale.
        </p>
      </li>
      <li>
        <h3>Execução diária</h3>
        <p>
          O vendedor abre o app e sabe exatamente onde está, o que falta e o
          que precisa fazer hoje. A consistência vira hábito, não urgência de
          última hora.
        </p>
      </li>
      <li>
        <h3>Comportamento medido</h3>
        <p>
          Frequência, engajamento, evolução no ranking, ofensivas concluídas.
          O gestor enxerga em tempo real quem está no ritmo, quem está em risco
          e onde intervir.
        </p>
      </li>
      <li>
        <h3>Comissão ou Premiação?</h3>
        <p>
          Com o Rumo, não importa o modelo. O Rumo adapta o incentivo à sua
          estratégia. Com transparência, controle e responsabilidade.
        </p>
      </li>
    </ul>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SSystem.vue
git commit -m "feat: add SSystem component (no style)"
```

---

### Task 10: STestimonials.vue

**Files:**
- Create: `app/components/STestimonials.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// DEPOIMENTOS</p>
    <h2>Quem usa não volta para as planilhas</h2>

    <blockquote>
      <p>
        Tínhamos um volume alto de bônus sendo pagos, mas sem correlação clara
        com resultado. Com o Rumo, finalmente conseguimos ver o que estava
        gerando retorno e o que era só custo disfarçado.
      </p>
    </blockquote>

    <div>
      <div>
        <strong>-27%</strong>
        <span>Custo de incentivo</span>
      </div>
      <div>
        <strong>+18%</strong>
        <span>Produtividade da equipe</span>
      </div>
    </div>

    <div>
      <button>←</button>
      <button>→</button>
      <span>// 01 / 04</span>
    </div>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/STestimonials.vue
git commit -m "feat: add STestimonials component (no style)"
```

---

### Task 11: SPlans.vue

**Files:**
- Create: `app/components/SPlans.vue`

**Step 1: Criar o componente**

```vue
<template>
  <section>
    <p>// PLANOS</p>
    <h2>Sob medida para a sua operação</h2>
    <p>
      O Rumo se adapta ao seu tamanho, maturidade comercial e estratégia de
      incentivo. Escolha o modelo que faz sentido agora e evolua conforme
      crescer.
    </p>

    <div>
      <!-- card de plano 1 -->
      <div>
        <p>[Plano 1]</p>
      </div>
      <!-- card de plano 2 -->
      <div>
        <p>[Plano 2]</p>
      </div>
    </div>

    <p>
      Todos os planos são sob consulta. Nossos especialistas constroem o modelo
      ideal para o seu contexto.
    </p>
  </section>
</template>
```

**Step 2: Commit**

```bash
git add app/components/SPlans.vue
git commit -m "feat: add SPlans component (no style)"
```

---

### Task 12: Compor content/index.md com MDC

**Files:**
- Modify: `content/index.md`

**Step 1: Substituir o conteúdo do arquivo**

```md
::r-navbar
::

::s-hero
::

::s-partners
::

::s-ecosystem
::

::s-ecosystem-action
::

::s-managers
::

::s-sellers
::

::s-system
::

::s-testimonials
::

::s-plans
::

::r-footer
::
```

> **Nota:** Nuxt Content v3 converte PascalCase para kebab-case automaticamente.
> `RNavbar` → `r-navbar`, `SEcosystemAction` → `s-ecosystem-action`.

**Step 2: Verificar no browser**

```bash
bun run dev
```

Abrir `http://localhost:8000` e confirmar que todos os componentes renderizam em sequência com o texto correto.

**Step 3: Commit final**

```bash
git add content/index.md
git commit -m "feat: compor homepage com componentes MDC no index.md"
```
