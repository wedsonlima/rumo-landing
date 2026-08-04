# Página /contato — Formulário de Demonstração

**Data:** 2026-04-26  
**Status:** Aprovado

---

## Objetivo

Criar a página `/contato` com um formulário de solicitação de demonstração do Rumo, integrado à API interna, com validação client-side via vee-validate + zod e feedback visual ao usuário.

---

## Arquitetura

### Arquivos a criar

```
app/pages/contato.vue                  # Página principal
server/api/contato.post.ts             # API route POST
```

### Arquivos a modificar

```
app/components/RNavbar.vue             # Adicionar prop minimal
```

### Componentes shadcn a instalar

```
bunx shadcn-nuxt@latest add input label select checkbox toast
```

### Dependências a instalar

```
bun add vee-validate @vee-validate/zod zod
```

---

## RNavbar — prop `minimal`

Adicionar prop `minimal?: boolean` ao RNavbar. Quando `true`:
- Oculta os links de navegação e o botão CTA
- Mantém apenas o logo/símbolo, que linka para `/`
- Mantém o mesmo visual (border, background, altura)

---

## Página `contato.vue`

### Layout

- Usa `RNavbar :minimal="true"` no topo
- Container centralizado `max-w-304`, padding vertical `py-20`
- Layout em duas colunas no desktop (`lg:flex gap-20`):
  - **Coluna esquerda** (`lg:w-96`): título, descrição e badge de confiança
  - **Coluna direita** (`flex-1`): o formulário
- No mobile: coluna única, esquerda acima da direita

### Coluna esquerda

- Label `// FALE COM A GENTE` (estilo `font-mono text-primary`)
- Título h1: `"Solicite uma demonstração"`
- Subtítulo: `"Veja como o Rumo transforma a gestão comercial da sua empresa em menos de 48h."`

### Formulário — campos

| Campo | Tipo | Obrigatório | Observação |
|---|---|---|---|
| Nome | Input text | ✓ | |
| E-mail | Input email | ✓ | |
| Celular (WhatsApp) | Input text | ✓ | Hint: "Apenas celular com DDD (9 dígitos)" |
| Nome da empresa | Input text | — | Label: "Nome da empresa (opcional)" |
| Qual seu segmento? | Select | ✓ | Opções abaixo |
| Quanto você investe em premiações? | Select | ✓ | Opções abaixo |
| Aceito receber novidades no WhatsApp | Checkbox | — | |
| Aceito os Termos e Políticas | Checkbox | ✓ | Link para `/politica-de-privacidade` |

**Opções — Qual seu segmento?**
- Varejo
- Atacado / Distribuição
- Serviços
- Indústria
- Tecnologia
- Outro

**Opções — Quanto você investe em premiações?**
- Menos de R$ 5.000/mês
- R$ 5.000 – R$ 20.000/mês
- R$ 20.000 – R$ 100.000/mês
- Acima de R$ 100.000/mês
- Ainda não tenho orçamento definido

### Botão de envio

- Texto: "Solicitar demonstração"
- Alinhado à direita
- Variante `cta` (já existente no projeto)
- Estado `disabled` + spinner enquanto `isSubmitting` for verdadeiro

### Estado de sucesso

Quando a API retornar `{ success: true }`, substituir o formulário inteiro por:

```
✓ Ícone de check (text-support, ~48px)
Título: "Recebemos sua solicitação!"
Texto: "Nossa equipe vai entrar em contato em breve pelo e-mail ou WhatsApp informados."
```

---

## Validação (vee-validate + zod)

```ts
const schema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  celular: z.string().regex(/^\d{11}$/, 'Celular deve ter 11 dígitos com DDD'),
  empresa: z.string().optional(),
  segmento: z.string().min(1, 'Selecione um segmento'),
  investimento: z.string().min(1, 'Selecione uma opção'),
  aceitaWhatsapp: z.boolean().optional(),
  aceitaTermos: z.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os termos' }),
  }),
})
```

- Erros exibidos inline abaixo de cada campo usando `ErrorMessage` do vee-validate
- Validação no submit (não on-blur para não incomodar o usuário preenchendo)

---

## API — `server/api/contato.post.ts`

```ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // TODO: integrar com CRM / e-mail quando definido
  return { success: true }
})
```

- Retorna HTTP 200 com `{ success: true }`
- Em caso de erro inesperado, retorna HTTP 500

---

## Feedback de erro

Se a API retornar status ≠ 200, exibir toast (shadcn `useToast`):
- Variant: `destructive`
- Título: `"Erro ao enviar"`
- Descrição: `"Tente novamente ou entre em contato pelo e-mail admin@userumo.com.br"`

---

## Estilização

- Segue BEM + `@apply` com `@reference "~/assets/css/main.css"` (padrão do projeto)
- Sem hexadecimais hardcoded — usar tokens do projeto
- Fundo da página: `bg-page-bg`
- Cards/form container: `bg-gray-3 border border-page-border rounded-xl`
- Inputs shadcn customizados via CSS vars para seguir o tema dark do projeto
