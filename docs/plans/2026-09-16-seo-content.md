# Plano — conteúdo para SEO e captação (2026-09-16)

## Objetivo

Atrair gestores comerciais que buscam no Google por metas, campanhas de
incentivo, ranking, gamificação e premiação de vendedores. Cada artigo leva o
leitor para a demonstração.

Os perfis de leitor estão em [`docs/marketing/icps.md`](../marketing/icps.md).

## O que a pesquisa mostrou

- As buscas em pt-BR sobre o tema são dominadas por blogs de CRM (Agendor,
  Zendesk, Meetime) e por plataformas de incentivo (Incentivar, Incentive.me,
  Gamefic, Cashin, Play2sell).
- Os artigos que ranqueiam têm entre 1.200 e 2.500 palavras, título com
  "como", "passo a passo" ou "o que é", e H2 que repetem a palavra-chave.
- Quem busca "planilha de metas de vendas" quer baixar uma planilha. Sites que
  entregam o arquivo ranqueiam. O artigo 6 entrega um modelo real em `.xlsx`.
- Sem dados de volume de busca nesta rodada. As escolhas de tema seguem a
  aderência ao produto e aos ICPs. Volume e CTR entram depois, pelo Search
  Console.

## Artigos

| # | Rota | Título | ICP | Palavra-chave principal |
|---|---|---|---|---|
| 1 | `/blog/gamificacao-de-vendas` | Gamificação de vendas: exemplos para o varejo | 1, 3 | gamificação de vendas |
| 2 | `/blog/campanha-de-incentivo-de-vendas` | Campanha de incentivo de vendas: 7 passos para criar | 1, 2 | campanha de incentivo de vendas |
| 3 | `/blog/premiacao-de-vendedores` | Premiação de vendedores: critérios e exemplos | 1, 2 | premiação de vendedores |
| 4 | `/blog/metas-de-vendas-por-vendedor` | Metas de vendas por vendedor: como definir e acompanhar | 1, 3 | metas de vendas por vendedor |
| 5 | `/blog/ranking-de-vendedores` | Ranking de vendedores: critérios para uma disputa justa | 1, 3 | ranking de vendedores |
| 6 | `/blog/planilha-de-metas-de-vendas` | Planilha de metas de vendas: modelo grátis por vendedor | 3 | planilha de metas de vendas |

O artigo 3 substituiu "Comissão, premiação ou bônus" após a revisão do Codex.
O comparativo jurídico virou uma seção dentro do artigo de premiação. O artigo
6 entrega a planilha em `public/downloads/`.

Cada artigo:

- Cobre a tarefa do leitor por inteiro. Sem cota de palavras.
- H1 com a palavra-chave. H2 descrevem o passo ou o critério, sem repetir a
  palavra-chave à força.
- Pelo menos um exemplo calculado ou um modelo pronto para copiar.
- Introdução que nomeia a dor do ICP nos dois primeiros parágrafos.
- Um bloco "Como o Rumo faz" perto do fim. Sem propaganda antes disso.
- CTA final para `/contato`.
- Links internos para dois outros artigos.
- Título ≤ 60 caracteres e descrição ≤ 155 caracteres nas meta tags.

## Arquitetura

- `app/data/articles.ts` — registro tipado de todos os artigos: slug, título,
  descrição, datas, tempo de leitura, categoria e artigos relacionados. É a
  fonte única para a listagem, o sitemap, o prerender e os links relacionados.
- `app/components/RArticle.vue` — casca do artigo: navbar, cabeçalho, corpo,
  bloco de CTA, artigos relacionados, footer. Emite `useSeoPage`, JSON-LD
  `BlogPosting` e `BreadcrumbList`.
- `app/pages/blog/index.vue` — listagem.
- `app/pages/blog/<slug>.vue` — um arquivo por artigo. O texto mora no
  template, como nas páginas atuais.
- `nuxt.config.ts` importa o registro e gera `sitemap.urls` e
  `nitro.prerender.routes` a partir dele.
- `useSeoPage` ganha `type: 'article'`, `publishedTime` e `modifiedTime`.

## SEO e OG

- Canonical e OG absolutos via `useSeoPage`, como hoje.
- `og:type=article` e `article:published_time` nos artigos.
- JSON-LD `BlogPosting` com `author`/`publisher` Organization e `BreadcrumbList`.
- Sitemap com `lastmod` por artigo.
- Link "Blog" na navbar e no footer. Os âncoras da navbar e do footer viram
  `<NuxtLink :to="{ path: '/', hash: '#secao' }">`. Um `href="/#secao"` sairia
  do base path no build para o github.io.
- `nitro.prerender.failOnError` ligado: slug no registro sem página derruba o
  build.

## Depois de publicar (fora do repositório)

- Cadastrar o domínio no Google Search Console e enviar o sitemap.
- Acompanhar consultas, indexação e CTR. Ajustar títulos e descrições à
  intenção observada.
- Medir artigo → `/contato` no GA4.
- Divulgar o caso Braduca e a planilha a clientes, parceiros e entidades do
  setor para conquistar links.

## Validação

Todas as decisões passam pelo Codex (`gpt-6-astra`, effort `high`):

1. ICPs, plano editorial e arquitetura. Antes de escrever. **Feita em
   2026-09-16.** Resultado: trocar o artigo jurídico por premiação operacional,
   entregar planilha real, corrigir promessas de "48h" e "sem treinamento",
   âncoras via `NuxtLink`, `failOnError` no prerender.
2. Escolha da variação de layout entre as artboards do `/design`. **Feita em
   2026-09-16.** Canvas: https://claude.ai/artifact/PjoappJAJTGHwwLqErdJxo.
   Escolhido: Artigo A (coluna única de 720px) e Listagem A (grade de cards).
   Ajustes aplicados: corpo 17/28 no mobile e 18/30 no desktop, H1 32/37 e
   40/46, sumário após a introdução, breadcrumb, "Continue lendo" como H2,
   CTA de 44px com largura total no mobile, cards em uma coluna abaixo de
   640px, sem card em destaque na listagem, sem CTA lateral.
3. Revisão final do código, das meta tags e dos artigos. **Feita em
   2026-09-16.** Sem achados de correção no código Vue/Nuxt. Dois bloqueios de
   conteúdo, corrigidos: a explicação do art. 457 da CLT dizia que a regra
   documentada determina o enquadramento (o texto agora segue o §4º:
   liberalidade por desempenho superior ao ordinariamente esperado, e o §2º:
   não integra a remuneração ainda que habitual); e os modelos de premiação
   pagavam a 90% ou 100% da meta (agora toda faixa em dinheiro começa acima da
   meta, que é o desempenho esperado). Também aplicados: `BlogPosting` sem
   `image` até existir ilustração editorial, `article:author` removido,
   aritmética do exemplo de metas corrigida, ritmo comparado com a proporção
   de dias úteis, tetos com "só a maior faixa é paga", planilha com ranking por
   loja e filtro por período.
4. Recheque dos bloqueios, em duas rodadas curtas. O Codex confirmou a
   explicação do art. 457 e pediu referência de desempenho esperado explícita
   em toda regra de pontos (200 pontos no exemplo, a média do período
   anterior), faixas "a partir de" com limites inclusivos iguais aos da
   planilha, ofensiva contada só acima da referência e top 3 restrito a quem
   passou da faixa 1. Aplicado. Os dois últimos apontamentos (ofensiva na
   tabela de gamificação e "chega a 105%" no modelo 3) foram corrigidos
   conforme a instrução do Codex, sem nova rodada.

## Validação no browser (2026-09-16)

- `/blog` e `/blog/metas-de-vendas-por-vendedor` em 390×844: sem rolagem
  horizontal (`scrollWidth` = 390), tabela rola dentro de `.r-table`, CTA com
  44px de altura.
- Desktop 1440: sumário, breadcrumb e cabeçalho conforme o canvas.
- "Ver Planos" na navbar de um artigo leva a `/#planos` com a seção no topo.
- `bun run generate` com `baseURL` `/` e com `/rumo-landing/`: 61 rotas, 10
  URLs no sitemap com `lastmod`, link da planilha e canonical com o prefixo.

## Fora de escopo

- Imagem OG por artigo. Todos usam `og-cover.jpg` por enquanto. O Codex
  sugere imagem representativa por artigo no `BlogPosting.image`. Fica para
  quando houver ilustrações.
- RSS.
- Comentários, newsletter ou qualquer coisa que precise de servidor.
