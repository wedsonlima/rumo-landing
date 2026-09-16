<template>
  <RArticle slug="metas-de-vendas-por-vendedor" :sections="sections">
    <template #lead>
      Uma meta por vendedor nasce do histórico, da sazonalidade e do objetivo da empresa. Veja o
      método em seis passos, um exemplo com cinco vendedores e a rotina de acompanhamento diário.
    </template>

    <template #intro>
      <p>
        A meta mais comum no varejo é a meta da loja dividida pelo número de vendedores. Ela é
        rápida de fazer e injusta desde o primeiro dia. O vendedor que fez R$ 60 mil no mês passado
        recebe a mesma meta de quem fez R$ 25 mil. O primeiro bate no dia 15 e desacelera. O segundo
        desiste no dia 10.
      </p>
      <p>
        Definir metas de vendas por vendedor leva mais tempo do que dividir por cabeça. Em troca, a
        meta passa a ser um alvo que cada pessoa acredita que consegue alcançar. Este artigo mostra o
        método em seis passos, aplica em um time de cinco vendedores e descreve a rotina de
        acompanhamento que faz a meta valer durante o mês inteiro.
      </p>
    </template>

    <h2 id="passo-1">1. Parta do objetivo da empresa</h2>
    <p>
      A soma das metas individuais precisa fechar com a meta da empresa. Comece pelo número que a
      empresa precisa vender no mês e desça até o vendedor. Se a empresa precisa de R$ 500 mil e as
      metas individuais somam R$ 380 mil, alguém vai descobrir o buraco no dia 31.
    </p>
    <p>
      Uma margem de segurança ajuda. Se o objetivo é crescer 15% sobre o mesmo mês do ano anterior,
      distribua 18% a 20% nas metas individuais. Nem todos batem. A folga cobre quem fica abaixo.
    </p>

    <h2 id="passo-2">2. Levante o histórico de cada vendedor</h2>
    <p>
      Pegue os últimos três a seis meses de venda de cada pessoa. Três meses mostram o ritmo
      recente. Seis meses diluem um mês atípico. Descarte o mês de férias e o mês de admissão, se
      houver.
    </p>
    <p>
      Calcule a média de cada vendedor. Esse número é a base da meta. Ele diz o que a pessoa entrega
      hoje, sem esforço extra.
    </p>

    <h2 id="passo-3">3. Ajuste pela sazonalidade</h2>
    <p>
      Um mês fraco com meta de mês forte gera frustração. Um mês forte com meta de mês fraco gera
      prêmio sem esforço. Olhe o mesmo mês do ano anterior e calcule o quanto ele ficou acima ou
      abaixo da média anual.
    </p>
    <p>
      Se outubro do ano passado ficou 8% abaixo da média anual, aplique um fator de 0,92 sobre a
      base. Se dezembro ficou 30% acima, aplique 1,30. O fator vale para todo o time, porque a
      sazonalidade afeta a loja inteira.
    </p>

    <h2 id="passo-4">4. Aplique um crescimento que a pessoa alcança</h2>
    <p>
      A meta precisa ficar acima da base para gerar esforço e abaixo do impossível para gerar
      confiança. Um crescimento entre 10% e 20% sobre a base ajustada é um ponto de partida comum. Ajuste pelo
      histórico da própria loja: se ninguém bateu a meta nos últimos três meses, o número está alto.
    </p>
    <p>
      O crescimento pode variar por pessoa. Vendedor novo, com três meses de casa, cresce mais rápido
      do que o veterano. Vendedor que já vende muito acima dos outros tem menos espaço para
      crescer. Use faixas: 20% para quem está abaixo da média da loja, 12% para quem está na média e
      8% para quem está acima.
    </p>

    <h2 id="passo-5">5. Feche a soma e corrija</h2>
    <p>
      Some as metas individuais e compare com o objetivo da empresa do passo 1. Se sobrou, reduza o
      crescimento de quem recebeu a maior faixa. Se faltou, a diferença entra como meta de
      contratação ou de crescimento de ticket médio. Um aumento igual para todos só empurra o
      buraco para o vendedor.
    </p>

    <h2 id="passo-6">6. Apresente a meta com o caminho</h2>
    <p>
      Apresente cada meta junto com o que ela significa por dia e por semana. R$ 42 mil no mês com 26 dias úteis são R$ 1.615 por dia. Se o ticket médio da loja é R$ 320,
      são 132 vendas no mês, pouco mais de cinco por dia. Esse é o número que o vendedor consegue
      carregar na cabeça.
    </p>

    <h2 id="exemplo">Exemplo: uma loja com cinco vendedores</h2>
    <p>
      Outubro do ano anterior ficou 5% abaixo da média anual, então o fator sazonal é 0,95. A base
      sazonal da loja soma R$ 185 mil. O objetivo da empresa é crescer 10% sobre essa base, o que dá
      R$ 204 mil. A folga de segurança leva as metas individuais a somar 13% acima da base, ou
      R$ 210 mil.
    </p>
    <div class="r-table">
      <table>
        <thead>
          <tr><th>Vendedor</th><th>Média 3 meses</th><th>Base sazonal (×0,95)</th><th>Crescimento</th><th>Meta outubro</th><th>Por dia (26 d.u.)</th></tr>
        </thead>
        <tbody>
          <tr><td>Ana</td><td>R$ 58.000</td><td>R$ 55.100</td><td>8%</td><td>R$ 59.500</td><td>R$ 2.290</td></tr>
          <tr><td>Bruno</td><td>R$ 44.000</td><td>R$ 41.800</td><td>12%</td><td>R$ 46.800</td><td>R$ 1.800</td></tr>
          <tr><td>Carla</td><td>R$ 40.000</td><td>R$ 38.000</td><td>12%</td><td>R$ 42.600</td><td>R$ 1.640</td></tr>
          <tr><td>Diego</td><td>R$ 31.000</td><td>R$ 29.450</td><td>20%</td><td>R$ 35.300</td><td>R$ 1.360</td></tr>
          <tr><td>Elisa (3 meses de casa)</td><td>R$ 22.000</td><td>R$ 20.900</td><td>25%</td><td>R$ 26.100</td><td>R$ 1.000</td></tr>
          <tr><td><strong>Total</strong></td><td>R$ 195.000</td><td>R$ 185.250</td><td></td><td><strong>R$ 210.300</strong></td><td></td></tr>
        </tbody>
      </table>
    </div>
    <p>
      A soma passa do objetivo com 3% de folga. Ana, que já vende muito, cresce 8%. Elisa, que está começando,
      cresce 25% sobre uma base pequena. Cada pessoa tem um alvo diferente e um número por dia que
      cabe na rotina.
    </p>

    <h2 id="acompanhamento">A rotina de acompanhamento que faz a meta valer</h2>
    <p>
      A meta definida em 1º de outubro só vale se alguém olhar para ela em 8, 15 e 22 de outubro. A
      rotina abaixo cabe em qualquer loja.
    </p>
    <ul>
      <li>
        Todo dia, o vendedor vê o próprio número: realizado, meta do dia e quanto falta no mês. Se
        ele só vê isso na reunião de segunda, a meta continua sendo do gestor.
      </li>
      <li>
        Toda semana, o gestor compara ritmo e meta. Quem realizou a mesma proporção da meta que a
        proporção de dias úteis já passados está no ritmo. Quem está bem abaixo disso precisa de
        uma conversa nessa semana, enquanto ainda dá tempo.
      </li>
      <li>
        No dia 20, o gestor decide a ação: uma missão curta para quem está atrás, uma faixa extra
        para quem já bateu. A meta fica como está e a ação muda.
      </li>
    </ul>
    <p>
      Uma planilha resolve a definição da meta. Ela resolve mal o acompanhamento diário, porque
      alguém precisa digitar as vendas todo dia e mandar o resultado para o time. O modelo de
      planilha e o ponto em que ela deixa de dar conta estão em
      <NuxtLink to="/blog/planilha-de-metas-de-vendas">planilha de metas de vendas: modelo grátis por vendedor</NuxtLink>.
      Para transformar a meta em uma disputa que motiva quem está atrás, veja
      <NuxtLink to="/blog/ranking-de-vendedores">ranking de vendedores: critérios para uma disputa justa</NuxtLink>.
    </p>
  </RArticle>
</template>

<script setup lang="ts">
const sections = [
  { id: 'passo-1', title: '1. Parta do objetivo da empresa' },
  { id: 'passo-2', title: '2. Levante o histórico de cada vendedor' },
  { id: 'passo-3', title: '3. Ajuste pela sazonalidade' },
  { id: 'passo-4', title: '4. Aplique um crescimento que a pessoa alcança' },
  { id: 'passo-5', title: '5. Feche a soma e corrija' },
  { id: 'passo-6', title: '6. Apresente a meta com o caminho' },
  { id: 'exemplo', title: 'Exemplo: uma loja com cinco vendedores' },
  { id: 'acompanhamento', title: 'A rotina de acompanhamento que faz a meta valer' },
  { id: 'como-o-rumo-faz', title: 'Como o Rumo faz' },
]
</script>
