<template>
  <RArticle slug="campanha-de-incentivo-de-vendas" :sections="sections">
    <template #lead>
      Objetivo, orçamento, regras, regulamento, divulgação, apuração e pagamento. Os sete passos que
      separam uma campanha que muda o comportamento do time de uma que só gera custo.
    </template>

    <template #intro>
      <p>
        Toda empresa que já fez uma campanha de incentivo conhece a cena: o prêmio foi anunciado, o
        time se animou na primeira semana, e no fechamento ninguém sabia ao certo quem tinha ganhado.
        A apuração levou dez dias. O regulamento tinha uma regra que ninguém tinha lido. O prêmio saiu
        atrasado e a campanha seguinte começou com o time desconfiado.
      </p>
      <p>
        Uma campanha de incentivo de vendas é um contrato entre a empresa e o time. Ela precisa de
        regra clara, placar visível e pagamento no prazo. Quando um dos três falta, o time percebe. Este artigo mostra como montar esse
        contrato em sete passos, com um exemplo numérico e um modelo de regulamento para copiar.
      </p>
    </template>

    <h2 id="passo-1">1. Escolha um objetivo que caiba em uma frase</h2>
    <p>
      A campanha existe para mudar um comportamento específico. "Vender mais" não é um objetivo.
      "Vender 400 unidades da linha nova em três semanas" é. Um objetivo que cabe em uma frase gera
      uma regra que cabe em uma página.
    </p>
    <p>Objetivos que costumam funcionar em campanhas de incentivo:</p>
    <ul>
      <li>Girar um produto ou uma categoria parada no estoque.</li>
      <li>Lançar uma linha nova e garantir que o time a ofereça.</li>
      <li>Aumentar o ticket médio com itens adicionais.</li>
      <li>Reativar clientes que não compram há mais de 90 dias.</li>
      <li>Manter o ritmo de vendas em um mês fraco.</li>
    </ul>
    <p>Escolha um. Com dois objetivos, o vendedor precisa decidir qual perseguir, a regra dobra de
      tamanho e a apuração precisa de duas contas.</p>

    <h2 id="passo-2">2. Defina o orçamento pelo pior caso</h2>
    <p>
      O orçamento de uma campanha é o valor que a empresa paga se todo mundo bater a faixa mais alta.
      Esse é o teto. Calcule o teto antes de definir o valor do prêmio.
    </p>
    <p>
      Há dois modelos de orçamento. O <strong>orçamento fixo</strong> define um valor total, por
      exemplo R$ 10.000, e o distribui entre os vencedores. O <strong>orçamento variável</strong>
      define um valor por resultado, por exemplo R$ 5 por unidade vendida acima da meta, e cresce com
      a venda. O modelo fixo protege o caixa. O modelo variável só paga se a venda existir, e protege a margem
      enquanto o prêmio por unidade ficar abaixo da margem da unidade.
    </p>
    <div class="r-box">
      <p class="r-box__label">Exemplo de teto</p>
      <p>
        Time de 20 vendedores. Faixa 1 paga R$ 150 e faixa 2 paga R$ 400. Teto da campanha: 20 × R$
        400 = R$ 8.000. Se a margem extra que a campanha gera for menor do que isso, a regra precisa
        mudar antes de começar.
      </p>
    </div>

    <h2 id="passo-3">3. Escreva as regras com número, prazo e elegibilidade</h2>
    <p>
      A regra responde três perguntas: o que vale, quanto vale e quem participa. Cada resposta precisa
      de um número ou uma data. Palavras como "bom desempenho" ou "a critério da gestão" viram
      disputa no fechamento.
    </p>
    <ul>
      <li><strong>O que vale:</strong> venda registrada no sistema, com nota emitida, dentro do período.</li>
      <li><strong>Quanto vale:</strong> 10 pontos por unidade. Referência esperada: 200 pontos, a venda média do período anterior. Faixa 1 a partir de 300 pontos. Faixa 2 a partir de 500. Só a maior faixa é paga.</li>
      <li><strong>Quem participa:</strong> vendedores admitidos até o primeiro dia da campanha, ativos até o último.</li>
      <li><strong>O que não vale:</strong> venda cancelada ou devolvida até 7 dias após o fim da campanha.</li>
      <li><strong>Empate:</strong> vence quem atingiu a pontuação primeiro.</li>
    </ul>
    <p>
      Se a campanha usa ranking, defina também o recorte. Ranking por loja ou por rede? Por
      vendedor ou por equipe? Um ranking único para lojas com fluxos muito diferentes desmotiva
      metade do time na segunda semana. Os critérios de um ranking justo estão em
      <NuxtLink to="/blog/ranking-de-vendedores">ranking de vendedores: critérios para uma disputa justa</NuxtLink>.
    </p>

    <h2 id="passo-4">4. Formalize em um regulamento de uma página</h2>
    <p>
      O regulamento protege o time e a empresa. Ele evita a disputa no fechamento e documenta qual
      desempenho a empresa considera acima do esperado, que é a referência do prêmio no art. 457 da
      CLT. Uma página que todo mundo lê protege
      mais do que dez que ninguém abre.
    </p>
    <div class="r-box">
      <p class="r-box__label">Modelo de regulamento</p>
      <ol>
        <li><strong>Nome e objetivo.</strong> Campanha Linha Nova. Vender a linha X entre 1 e 21 de outubro.</li>
        <li><strong>Participantes.</strong> Vendedores das lojas A, B e C, admitidos até 30 de setembro.</li>
        <li><strong>Pontuação.</strong> 10 pontos por unidade da linha X com nota emitida no período.</li>
        <li><strong>Referência.</strong> 200 pontos, a venda média da linha anterior no mesmo período. Prêmio só acima dela.</li>
        <li><strong>Premiação.</strong> A partir de 300 pontos: R$ 150. A partir de 500 pontos: R$ 400. Só a maior faixa é paga. Top 3 da rede, entre quem passou de 300 pontos: R$ 600 adicionais.</li>
        <li><strong>Apuração.</strong> Relatório do sistema em 22 de outubro. Devoluções até 28 de outubro descontam pontos.</li>
        <li><strong>Pagamento.</strong> Até 10 de novembro, junto com o salário, discriminado como prêmio.</li>
        <li><strong>Dúvidas.</strong> Gerente comercial, por escrito, até 25 de outubro.</li>
      </ol>
    </div>

    <h2 id="passo-5">5. Divulgue e mantenha o placar aberto</h2>
    <p>
      A divulgação acontece uma vez. O placar acontece todo dia. Uma campanha que o time só ouve
      falar no lançamento e no encerramento não muda comportamento. O vendedor precisa saber, hoje,
      quantos pontos tem e quanto falta.
    </p>
    <p>
      Sem ferramenta, o mínimo é uma foto da planilha no grupo da loja às 18h. Com ferramenta, o
      placar atualiza a cada venda. A diferença aparece na primeira semana: quem vê o placar
      atualizado oferece o produto no atendimento seguinte.
    </p>

    <h2 id="passo-6">6. Apure com o dado do sistema</h2>
    <p>
      A apuração precisa sair do mesmo lugar onde a venda foi registrada. Se a fonte for uma
      planilha preenchida à mão pelo gerente da loja, cada número vira uma discussão. Se a fonte for
      o sistema de vendas, a apuração é uma consulta.
    </p>
    <p>Três cuidados na apuração:</p>
    <ul>
      <li>Descontar devoluções e cancelamentos dentro do prazo escrito no regulamento.</li>
      <li>Mostrar ao vendedor o extrato dele, com as vendas que contaram e as que não contaram.</li>
      <li>Fechar a apuração em uma data fixa. Uma apuração que se arrasta por duas semanas destrói a próxima campanha.</li>
    </ul>

    <h2 id="passo-7">7. Pague no prazo e do jeito certo</h2>
    <p>
      O pagamento é a parte da campanha que o time mais lembra. Pagar na data escrita no regulamento
      constrói a confiança que a campanha seguinte vai usar. Pagar com atraso, ou pagar valor
      diferente do prometido, custa mais do que o prêmio inteiro.
    </p>
    <p>
      Prêmio de campanha e comissão são coisas diferentes na folha. A comissão integra o salário. O prêmio, no §4º do art. 457 da CLT, é a liberalidade paga por desempenho superior ao
      ordinariamente esperado, e não integra a remuneração. Como montar a premiação para que ela seja de fato um prêmio está em
      <NuxtLink to="/blog/premiacao-de-vendedores">premiação de vendedores: critérios e exemplos</NuxtLink>.
      Valide o enquadramento com a contabilidade ou com um advogado trabalhista antes da primeira
      campanha.
    </p>

    <h2 id="checklist">Checklist antes de lançar</h2>
    <ul>
      <li>O objetivo cabe em uma frase e tem número e prazo.</li>
      <li>O teto do orçamento está calculado para o pior caso.</li>
      <li>Toda regra tem número, data ou lista de nomes.</li>
      <li>O regulamento cabe em uma página e o time recebeu antes do início.</li>
      <li>O placar tem dono e horário de atualização.</li>
      <li>A apuração sai do sistema e tem data de fechamento.</li>
      <li>A data de pagamento está no regulamento.</li>
    </ul>
    <p>
      Cada item que falta tira uma parte do efeito: sem teto, o prêmio pode custar mais do que a
      venda extra; sem placar, ninguém muda de comportamento; sem data de pagamento, a campanha
      seguinte começa com o time desconfiado.
    </p>
  </RArticle>
</template>

<script setup lang="ts">
const sections = [
  { id: 'passo-1', title: '1. Escolha um objetivo que caiba em uma frase' },
  { id: 'passo-2', title: '2. Defina o orçamento pelo pior caso' },
  { id: 'passo-3', title: '3. Escreva as regras com número, prazo e elegibilidade' },
  { id: 'passo-4', title: '4. Formalize em um regulamento de uma página' },
  { id: 'passo-5', title: '5. Divulgue e mantenha o placar aberto' },
  { id: 'passo-6', title: '6. Apure com o dado do sistema' },
  { id: 'passo-7', title: '7. Pague no prazo e do jeito certo' },
  { id: 'checklist', title: 'Checklist antes de lançar' },
  { id: 'como-o-rumo-faz', title: 'Como o Rumo faz' },
]
</script>
