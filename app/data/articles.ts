// Registro de todos os artigos do blog. Fonte única para a listagem, o
// sitemap, o prerender e os links relacionados.
//
// Só dados puros aqui: nuxt.config.ts importa este arquivo em tempo de build,
// fora do contexto do app, então nada de composables ou aliases `~/`.
//
// Cada slug precisa de uma página em app/pages/blog/<slug>.vue. O prerender
// falha com 404 se faltar uma.

export type ArticleCategory =
  | 'Gamificação'
  | 'Campanhas'
  | 'Premiação'
  | 'Metas'
  | 'Ranking'
  | 'Planilha'

export interface Article {
  slug: string
  /** Título da página e do <h1>. Até 60 caracteres. */
  title: string
  /** Meta description e resumo na listagem. Até 155 caracteres. */
  description: string
  category: ArticleCategory
  /** ISO 8601, só a data. Vira article:published_time e datePublished. */
  publishedAt: string
  /** Só muda em revisão editorial real. Vira lastmod do sitemap. */
  updatedAt: string
  readingMinutes: number
  /** Slugs dos artigos sugeridos ao fim. */
  related: string[]
  /** Bloco "Como o Rumo faz" que fecha o artigo. */
  rumo: {
    title: string
    body: string
  }
}

export const articles: Article[] = [
  {
    slug: 'gamificacao-de-vendas',
    title: 'Gamificação de vendas: exemplos para o varejo',
    description:
      'O que é gamificação de vendas, quais mecânicas funcionam em loja e como montar a primeira campanha gamificada do seu time em duas semanas.',
    category: 'Gamificação',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 6,
    related: ['ranking-de-vendedores', 'campanha-de-incentivo-de-vendas'],
    rumo: {
      title: 'Pontos, ranking e prêmio no mesmo app',
      body: 'O gestor cria a campanha na aplicação web e define as regras. O vendedor acompanha pontos, ranking e quanto falta para o prêmio pelo celular. O gestor vê o ritmo do time em tempo real.',
    },
  },
  {
    slug: 'campanha-de-incentivo-de-vendas',
    title: 'Campanha de incentivo de vendas: 7 passos para criar',
    description:
      'Passo a passo para criar uma campanha de incentivo de vendas: objetivo, orçamento, regras, regulamento, divulgação, apuração e pagamento do prêmio.',
    category: 'Campanhas',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 6,
    related: ['premiacao-de-vendedores', 'metas-de-vendas-por-vendedor'],
    rumo: {
      title: 'A campanha inteira sem planilha',
      body: 'Objetivo, período, orçamento fixo ou variável, equipes e regras entram pelo painel. A apuração é automática e o vendedor vê o resultado parcial todo dia. Distribuição auditável no fechamento.',
    },
  },
  {
    slug: 'premiacao-de-vendedores',
    title: 'Premiação de vendedores: critérios e exemplos',
    description:
      'Como montar uma premiação de vendedores que o time entende e confia: critérios, orçamento, apuração, o que diz a CLT e três exemplos prontos.',
    category: 'Premiação',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 6,
    related: ['campanha-de-incentivo-de-vendas', 'ranking-de-vendedores'],
    rumo: {
      title: 'Regra clara, apuração automática, prêmio rastreável',
      body: 'Critérios de elegibilidade e mecânica do prêmio ficam configurados na aplicação. O vendedor acompanha o progresso. No plano com infraestrutura financeira, o Rumo também processa o pagamento das premiações.',
    },
  },
  {
    slug: 'metas-de-vendas-por-vendedor',
    title: 'Metas de vendas por vendedor: como definir e acompanhar',
    description:
      'Método em 6 passos para definir metas de vendas por vendedor pelo histórico e pela sazonalidade, com exemplo numérico e rotina de acompanhamento.',
    category: 'Metas',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 6,
    related: ['planilha-de-metas-de-vendas', 'ranking-de-vendedores'],
    rumo: {
      title: 'A meta que o vendedor vê todo dia',
      body: 'O gestor define a meta por equipe e por vendedor. O app mostra quanto já foi, quanto falta e o ritmo necessário até o fim do período. O gestor identifica desvios no meio do mês, com tempo para agir.',
    },
  },
  {
    slug: 'ranking-de-vendedores',
    title: 'Ranking de vendedores: critérios para uma disputa justa',
    description:
      'Como montar um ranking de vendedores que motiva o time inteiro: critérios, faixas, ofensivas, frequência de atualização e os erros que desmotivam.',
    category: 'Ranking',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 5,
    related: ['gamificacao-de-vendas', 'premiacao-de-vendedores'],
    rumo: {
      title: 'Ranking em tempo real, no bolso do time',
      body: 'Cada venda atualiza a posição no app. O vendedor sabe quem lidera, quem está atrás e o que precisa fazer hoje. Ofensivas premiam a consistência de quem ainda não chegou ao topo.',
    },
  },
  {
    slug: 'planilha-de-metas-de-vendas',
    title: 'Planilha de metas de vendas: modelo grátis por vendedor',
    description:
      'Baixe uma planilha de metas de vendas por vendedor com realizado, percentual e ranking automáticos. E saiba quando a planilha deixa de dar conta.',
    category: 'Planilha',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
    readingMinutes: 4,
    related: ['metas-de-vendas-por-vendedor', 'gamificacao-de-vendas'],
    rumo: {
      title: 'Quando a planilha não acompanha o time',
      body: 'A planilha mostra o que aconteceu. O Rumo mostra ao vendedor o que fazer hoje. Metas, ranking e prêmio atualizados em tempo real, sem ninguém digitar nada no fechamento.',
    },
  },
]

export const articlePath = (slug: string) => `/blog/${slug}`

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug)
