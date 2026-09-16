<template>
  <RArticle slug="planilha-de-metas-de-vendas" :sections="sections">
    <template #lead>
      Baixe a planilha de metas de vendas por vendedor, com meta, realizado, percentual, ritmo
      necessário e ranking calculados automaticamente. E saiba em que ponto ela deixa de dar conta.
    </template>

    <template #intro>
      <p>
        Toda operação comercial começa com uma planilha de metas. Ela é grátis, todo mundo sabe usar e
        resolve o primeiro problema: colocar a meta de cada vendedor em um lugar só. O problema
        aparece depois, quando alguém precisa digitar as vendas todo dia e o time só vê o resultado
        na foto que o gerente manda no grupo.
      </p>
      <p>
        Esta página entrega uma planilha de metas de vendas por vendedor pronta para usar, explica
        cada coluna e mostra o ponto exato em que a planilha vira gargalo.
      </p>
    </template>

    <h2 id="download">Baixe a planilha</h2>
    <p>
      O arquivo abre no Excel, no Google Planilhas e no LibreOffice. Ele tem uma aba de metas com
      até 30 vendedores e uma aba de lançamento diário. Todas as fórmulas estão abertas para você
      ajustar.
    </p>
    <a :href="downloadUrl" class="r-download" download>
      Baixar planilha (.xlsx)
    </a>
    <p>Sem cadastro e sem e-mail. Se quiser adaptar, copie a aba e mude as fórmulas.</p>

    <h2 id="colunas">O que cada coluna faz</h2>
    <div class="r-table">
      <table>
        <thead>
          <tr><th>Coluna</th><th>Preenche quem</th><th>O que mostra</th></tr>
        </thead>
        <tbody>
          <tr><td>Vendedor</td><td>Gestor</td><td>Nome ou apelido</td></tr>
          <tr><td>Loja</td><td>Gestor</td><td>Recorte do ranking</td></tr>
          <tr><td>Meta do mês</td><td>Gestor</td><td>Valor definido pelo histórico e pela sazonalidade</td></tr>
          <tr><td>Realizado</td><td>Fórmula</td><td>Soma dos lançamentos diários do vendedor</td></tr>
          <tr><td>% da meta</td><td>Fórmula</td><td>Realizado dividido pela meta</td></tr>
          <tr><td>Falta</td><td>Fórmula</td><td>Meta menos realizado, nunca negativo</td></tr>
          <tr><td>Ritmo necessário por dia</td><td>Fórmula</td><td>Falta dividida pelos dias úteis restantes</td></tr>
          <tr><td>Faixa</td><td>Fórmula</td><td>Bronze a partir de 100%, prata de 110%, ouro de 120%. Os limites ficam em células editáveis</td></tr>
          <tr><td>Posição</td><td>Fórmula</td><td>Ranking pelo % da meta, dentro da mesma loja</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      A coluna que mais muda o comportamento é o ritmo necessário por dia. Ela transforma "faltam R$
      12 mil" em "preciso vender R$ 1.090 por dia até o dia 30". O vendedor consegue carregar esse
      número na cabeça.
    </p>

    <h2 id="como-usar">Como usar no dia a dia</h2>
    <ol>
      <li>Na aba <strong>Metas</strong>, preencha nome, loja e meta de cada vendedor no dia 1.</li>
      <li>Informe o início e o fim do período e quantos dias úteis o mês tem. Só os lançamentos dentro do período contam.</li>
      <li>Na aba <strong>Lançamentos</strong>, registre cada venda: data, vendedor, valor. Uma linha por venda ou o total do dia.</li>
      <li>Atualize a célula de dias úteis restantes uma vez por dia. As colunas de ritmo e faixa recalculam sozinhas.</li>
      <li>Mande a foto ou o PDF da aba Metas para o grupo do time em horário fixo. Todo dia.</li>
    </ol>
    <p>
      O passo 5 é o que faz a planilha funcionar e o que a torna insustentável. O gerente que manda
      a foto todo dia às 18h durante três meses seguidos é raro. Quando ele para, a meta volta a ser
      um número do dia 1.
    </p>

    <h2 id="limite">Onde a planilha para de dar conta</h2>
    <p>
      A planilha resolve a definição da meta. Ela resolve mal o acompanhamento e não resolve a
      campanha. Os sinais abaixo dizem que o time cresceu além dela.
    </p>
    <ul>
      <li>
        Alguém digita venda todo dia. Com 5 vendedores em uma loja, é rápido. Com 30 vendedores em 3
        lojas, alguém passa boa parte do dia nisso, e as três planilhas não conversam.
      </li>
      <li>
        O vendedor não vê o próprio número sem pedir. Ele depende da foto no grupo e, se a foto
        atrasa, ele não sabe onde está.
      </li>
      <li>
        A apuração da campanha leva dias. Devolução, cancelamento e venda de outro vendedor entram
        na mão, e cada número vira discussão.
      </li>
      <li>A regra mora na cabeça do gestor. Se ele sai de férias, a campanha para.</li>
      <li>
        Existem duas versões do arquivo. A do gerente e a do financeiro têm números diferentes e
        ninguém sabe qual vale.
      </li>
    </ul>
    <p>
      Nenhum desses sinais aparece com cinco vendedores em uma loja. Todos aparecem com trinta
      vendedores em quatro lojas. Entre um ponto e outro, a planilha vai custando mais tempo do
      que economiza.
    </p>

    <h2 id="o-que-vem-depois">O que colocar no lugar</h2>
    <p>
      O que substitui a planilha é o placar que o vendedor abre sozinho, atualizado pela venda
      registrada no sistema. As colunas continuam as mesmas: meta, realizado, percentual, ritmo,
      faixa, posição. A diferença é que ninguém precisa preencher.
    </p>
    <p>
      Antes de trocar a ferramenta, vale acertar o método. Como calcular a meta de cada vendedor
      está em
      <NuxtLink to="/blog/metas-de-vendas-por-vendedor">metas de vendas por vendedor: como definir e acompanhar</NuxtLink>.
      Como transformar o acompanhamento em uma disputa que o time gosta de olhar está em
      <NuxtLink to="/blog/gamificacao-de-vendas">gamificação de vendas: exemplos para o varejo</NuxtLink>.
    </p>
  </RArticle>
</template>

<script setup lang="ts">
import { joinURL } from 'ufo'

// Caminho relativo ao baseURL: no build para o github.io o site vive em
// /rumo-landing/, e um href absoluto apontaria para fora dele.
const downloadUrl = joinURL(useRuntimeConfig().app.baseURL, '/downloads/planilha-metas-de-vendas-rumo.xlsx')

const sections = [
  { id: 'download', title: 'Baixe a planilha' },
  { id: 'colunas', title: 'O que cada coluna faz' },
  { id: 'como-usar', title: 'Como usar no dia a dia' },
  { id: 'limite', title: 'Onde a planilha para de dar conta' },
  { id: 'o-que-vem-depois', title: 'O que colocar no lugar' },
  { id: 'como-o-rumo-faz', title: 'Como o Rumo faz' },
]
</script>
