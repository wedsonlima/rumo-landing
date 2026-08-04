# SSellers — Design Spec

**Figma:** https://www.figma.com/design/i857NtD652l3slSGH0lZUZ/Rumo?node-id=1615-341

## Visão Geral

Seção dark-themed com grid de 7 cards mostrando funcionalidades para vendedores.

## Layout

- Seção: `border-t border-page-border`, container `max-w-[1216px] px-8 pt-[140px] pb-20 border-l border-r`
- Header row: label + h2 à esquerda, 3 linhas decorativas à direita
- Grid: 3 colunas, gap-8, 7 cards

## Card Padrão

- `bg-gray-3 border border-gray-6 rounded-[8px]` — 384×462px
- Área texto (p-8, gap-6): linha `bg-primary h-[2px] w-[40px]` + título 24px Inter Tight + descrição 14px gray-11
- Área imagem: 384×240px, overflow-hidden — PNG estático do Figma

## Card 7 (Produtos financeiros)

- Largo: `col-span-2` ou `w-[800px]` — texto 384px + imagem 384px lado a lado
- `rounded-tl-[8px] rounded-tr-[8px]`

## Cards

| # | Título | Imagem node |
|---|---|---|
| 1 | Ranking Competitivo | 1615:356 |
| 2 | Meta Individual | 1615:425 |
| 3 | Ofensiva Semanal | 1615:494 |
| 4 | Conteúdo dinâmico (CMS) | 1615:568 |
| 5 | Central de Notificações | 1615:600 |
| 6 | Feed Social | 1615:1033 |
| 7 | Produtos financeiros | 1615:1119 |

## Tokens

- Card bg: `gray-3` (#E4E4E4)
- Card border: `gray-6` (#CBCBCB)
- Accent line: `primary` (#E55A37)
- Card title: `gray-12` (#111111)
- Card body: `gray-11` (#565656)
