<script setup lang="ts">
useSeoPage({
  title: 'Política de Privacidade e Termos de Uso — Rumo',
  description: 'Política de Privacidade e Termos de Uso do Rumo: como coletamos, usamos e protegemos seus dados, conforme a LGPD.',
  path: '/politica-de-privacidade',
})
</script>

<template>
  <div class="policy-page">
    <RNavbar />

    <main class="policy-page__main">
      <div class="policy-page__container">

        <!-- Header -->
        <header class="policy-page__header">
          <p class="policy-page__label">Rumo · Documentos Legais</p>
          <h1 class="policy-page__title">Política de Privacidade<br>e Termos de Uso</h1>
          <p class="policy-page__subtitle">
            Última atualização: 21 de março de 2026
          </p>
        </header>

        <!-- Navegação interna -->
        <nav class="policy-toc">
          <p class="policy-toc__title">Nesta página</p>
          <ol class="policy-toc__list">
            <li><a href="#politica-de-privacidade" class="policy-toc__link">1. Política de Privacidade</a></li>
            <li><a href="#dados-coletados" class="policy-toc__link">2. Dados Coletados</a></li>
            <li><a href="#uso-dos-dados" class="policy-toc__link">3. Uso dos Dados</a></li>
            <li><a href="#compartilhamento" class="policy-toc__link">4. Compartilhamento</a></li>
            <li><a href="#retencao" class="policy-toc__link">5. Retenção e Exclusão</a></li>
            <li><a href="#seus-direitos" class="policy-toc__link">6. Seus Direitos (LGPD)</a></li>
            <li><a href="#seguranca" class="policy-toc__link">7. Segurança</a></li>
            <li><a href="#menores" class="policy-toc__link">8. Menores de Idade</a></li>
            <li><a href="#termos-de-uso" class="policy-toc__link">9. Termos de Uso</a></li>
            <li><a href="#contato" class="policy-toc__link">10. Contato</a></li>
          </ol>
        </nav>

        <!-- Conteúdo -->
        <div class="policy-content">

          <!-- Seção 1 — Política de Privacidade -->
          <section id="politica-de-privacidade" class="policy-section">
            <h2 class="policy-section__title">1. Política de Privacidade</h2>
            <p class="policy-section__text">
              A <strong class="policy-section__strong">Rumo</strong> ("nós", "nosso" ou "Empresa") é responsável pela
              plataforma de gestão de performance em vendas disponível no endereço <em>rumo.com.br</em> e nos
              aplicativos móveis distribuídos pela Google Play Store e Apple App Store (coletivamente, "Plataforma" ou
              "App").
            </p>
            <p class="policy-section__text">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos os
              dados pessoais dos usuários da Plataforma, em conformidade com a <strong
                class="policy-section__strong">Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e as
              diretrizes das lojas de aplicativos Google Play e Apple App Store.
            </p>
            <p class="policy-section__text">
              Ao utilizar a Plataforma, você concorda com os termos desta Política. Caso não concorde, por favor, não
              utilize nossos serviços.
            </p>
          </section>

          <!-- Seção 2 — Dados Coletados -->
          <section id="dados-coletados" class="policy-section">
            <h2 class="policy-section__title">2. Dados Coletados</h2>
            <p class="policy-section__text">
              Coletamos dados necessários para a operação da Plataforma, divididos nas seguintes categorias:
            </p>

            <h3 class="policy-section__subtitle">2.1 Dados fornecidos pelo usuário</h3>
            <ul class="policy-section__list">
              <li>Nome completo e endereço de e-mail (cadastro e autenticação)</li>
              <li>Número de telefone (opcional, para notificações)</li>
              <li>Cargo, equipe e empresa empregadora (configuração de perfil)</li>
              <li>Dados de desempenho comercial inseridos pelo usuário ou sincronizados via integração</li>
            </ul>

            <h3 class="policy-section__subtitle">2.2 Dados coletados automaticamente</h3>
            <ul class="policy-section__list">
              <li>Identificadores de dispositivo (Android ID, IDFA/IDFV)</li>
              <li>Sistema operacional, versão do app e tipo de dispositivo</li>
              <li>Endereço IP e dados de conexão</li>
              <li>Logs de uso: telas acessadas, ações realizadas, timestamps</li>
              <li>Tokens de push notification (para envio de alertas)</li>
            </ul>

            <h3 class="policy-section__subtitle">2.3 Dados de terceiros e integrações</h3>
            <ul class="policy-section__list">
              <li>Dados de vendas sincronizados via ERP ou sistemas legados (mediante autorização da empresa
                contratante)</li>
              <li>Dados de folha de pagamento para cálculo de premiações (mediante contrato específico)</li>
            </ul>

            <div class="policy-notice">
              <strong>Importante:</strong> não coletamos dados de pagamento diretamente. Transações financeiras são
              processadas por parceiros certificados (PCI-DSS).
            </div>
          </section>

          <!-- Seção 3 — Uso dos Dados -->
          <section id="uso-dos-dados" class="policy-section">
            <h2 class="policy-section__title">3. Uso dos Dados</h2>
            <p class="policy-section__text">Utilizamos seus dados para as seguintes finalidades:</p>
            <ul class="policy-section__list">
              <li><strong class="policy-section__strong">Prestação do serviço:</strong> criar e gerenciar sua conta,
                calcular pontuação, exibir rankings e campanhas.</li>
              <li><strong class="policy-section__strong">Notificações:</strong> enviar alertas de performance, ofensivas
                semanais, conquistas e comunicados da empresa.</li>
              <li><strong class="policy-section__strong">Gamificação:</strong> calcular posições em rankings, distribuir
                recompensas e gerar métricas de engajamento.</li>
              <li><strong class="policy-section__strong">Relatórios:</strong> fornecer à empresa contratante dados
                analíticos sobre performance do time comercial.</li>
              <li><strong class="policy-section__strong">Segurança:</strong> detectar fraudes, acessos não autorizados e
                comportamentos anômalos.</li>
              <li><strong class="policy-section__strong">Melhoria do produto:</strong> analisar padrões de uso de forma
                agregada e anonimizada.</li>
              <li><strong class="policy-section__strong">Obrigações legais:</strong> cumprir exigências regulatórias e
                responder a solicitações de autoridades competentes.</li>
            </ul>
          </section>

          <!-- Seção 4 — Compartilhamento -->
          <section id="compartilhamento" class="policy-section">
            <h2 class="policy-section__title">4. Compartilhamento de Dados</h2>
            <p class="policy-section__text">
              Não vendemos dados pessoais. Compartilhamos informações apenas nas situações abaixo:
            </p>
            <ul class="policy-section__list">
              <li><strong class="policy-section__strong">Empresa contratante:</strong> gestores e administradores da
                empresa onde você trabalha têm acesso aos seus dados de performance conforme configurado na Plataforma.
              </li>
              <li><strong class="policy-section__strong">Prestadores de serviço:</strong> parceiros técnicos
                (infraestrutura em nuvem, push notifications, analytics) que operam sob contratos de confidencialidade e
                processam dados apenas em nosso nome.</li>
              <li><strong class="policy-section__strong">Parceiros de pagamento:</strong> para processamento de
                premiações e antecipações, com uso restrito à finalidade da transação.</li>
              <li><strong class="policy-section__strong">Autoridades legais:</strong> quando exigido por lei, ordem
                judicial ou órgão regulador competente.</li>
              <li><strong class="policy-section__strong">Transferências corporativas:</strong> em caso de fusão,
                aquisição ou reorganização societária, com notificação prévia aos usuários.</li>
            </ul>
          </section>

          <!-- Seção 5 — Retenção -->
          <section id="retencao" class="policy-section">
            <h2 class="policy-section__title">5. Retenção e Exclusão de Dados</h2>
            <p class="policy-section__text">
              Mantemos seus dados pelo período necessário para a prestação dos serviços contratados ou cumprimento de
              obrigações legais. Após o encerramento da conta:
            </p>
            <ul class="policy-section__list">
              <li>Dados de identificação e contato: excluídos em até <strong class="policy-section__strong">90
                  dias</strong> após solicitação.</li>
              <li>Dados de performance e histórico de campanhas: retidos por até <strong
                  class="policy-section__strong">5 anos</strong> para fins de auditoria e obrigações fiscais.</li>
              <li>Logs de segurança: retidos por até <strong class="policy-section__strong">12 meses</strong>.</li>
            </ul>
            <p class="policy-section__text">
              Para solicitar a exclusão da sua conta e dos seus dados, acesse as configurações do App ou entre em
              contato pelo e-mail <a href="mailto:contato@braduca.com.br"
                class="policy-section__link">contato@braduca.com.br</a>.
            </p>
          </section>

          <!-- Seção 6 — Direitos LGPD -->
          <section id="seus-direitos" class="policy-section">
            <h2 class="policy-section__title">6. Seus Direitos (LGPD)</h2>
            <p class="policy-section__text">
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul class="policy-section__list">
              <li><strong class="policy-section__strong">Confirmação e acesso:</strong> saber se processamos seus dados
                e obter cópia.</li>
              <li><strong class="policy-section__strong">Correção:</strong> solicitar atualização de dados incompletos
                ou desatualizados.</li>
              <li><strong class="policy-section__strong">Anonimização, bloqueio ou eliminação:</strong> de dados
                desnecessários ou tratados em desconformidade.</li>
              <li><strong class="policy-section__strong">Portabilidade:</strong> receber seus dados em formato
                estruturado e interoperável.</li>
              <li><strong class="policy-section__strong">Eliminação:</strong> solicitar a exclusão dos dados tratados
                com base em seu consentimento.</li>
              <li><strong class="policy-section__strong">Revogação do consentimento:</strong> a qualquer tempo, sem
                prejuízo do tratamento realizado anteriormente.</li>
              <li><strong class="policy-section__strong">Oposição:</strong> contestar tratamento realizado em desacordo
                com a legislação.</li>
            </ul>
            <p class="policy-section__text">
              Para exercer seus direitos, envie uma solicitação para <a href="mailto:contato@braduca.com.br"
                class="policy-section__link">contato@braduca.com.br</a>. Responderemos em até <strong
                class="policy-section__strong">15 dias úteis</strong>.
            </p>
          </section>

          <!-- Seção 7 — Segurança -->
          <section id="seguranca" class="policy-section">
            <h2 class="policy-section__title">7. Segurança dos Dados</h2>
            <p class="policy-section__text">
              Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
            </p>
            <ul class="policy-section__list">
              <li>Criptografia em trânsito (TLS 1.2+) e em repouso (AES-256)</li>
              <li>Autenticação multifator para acesso administrativo</li>
              <li>Controle de acesso baseado em funções (RBAC)</li>
              <li>Monitoramento contínuo de ameaças e logs de auditoria</li>
              <li>Backups regulares com retenção segura</li>
            </ul>
            <p class="policy-section__text">
              Em caso de incidente de segurança que possa afetar seus dados, notificaremos a Autoridade Nacional de
              Proteção de Dados (ANPD) e os usuários afetados nos prazos legais.
            </p>
          </section>

          <!-- Seção 8 — Menores -->
          <section id="menores" class="policy-section">
            <h2 class="policy-section__title">8. Menores de Idade</h2>
            <p class="policy-section__text">
              A Plataforma Rumo é destinada exclusivamente a pessoas com <strong class="policy-section__strong">18 anos
                ou mais</strong>, em contexto profissional e empresarial. Não coletamos intencionalmente dados de
              menores de idade.
            </p>
            <p class="policy-section__text">
              Caso tomemos conhecimento de que um menor forneceu dados pessoais, tomaremos medidas para excluí-los
              imediatamente. Se você acredita que um menor cadastrou-se na Plataforma, entre em contato conosco.
            </p>
          </section>

          <!-- Seção 9 — Termos de Uso -->
          <section id="termos-de-uso" class="policy-section">
            <h2 class="policy-section__title">9. Termos de Uso</h2>

            <h3 class="policy-section__subtitle">9.1 Aceitação dos Termos</h3>
            <p class="policy-section__text">
              Ao criar uma conta ou utilizar a Plataforma Rumo, você declara ter lido, compreendido e concordado
              integralmente com estes Termos de Uso. O uso continuado da Plataforma após alterações constitui aceitação
              dos termos revisados.
            </p>

            <h3 class="policy-section__subtitle">9.2 Descrição do Serviço</h3>
            <p class="policy-section__text">
              O Rumo é uma plataforma SaaS (Software as a Service) de gestão de performance comercial que oferece:
            </p>
            <ul class="policy-section__list">
              <li>Engine de pontuação baseada em metas e campanhas</li>
              <li>Rankings individuais e por equipe em tempo real</li>
              <li>Sistema de ofensivas semanais e incentivos diários</li>
              <li>Central de notificações e feed social</li>
              <li>Relatórios de performance e governança financeira</li>
              <li>Integrações com ERP, folha de pagamento e sistemas de frente de loja</li>
            </ul>

            <h3 class="policy-section__subtitle">9.3 Cadastro e Conta</h3>
            <p class="policy-section__text">
              O acesso à Plataforma é concedido mediante convite da empresa contratante. Você é responsável por:
            </p>
            <ul class="policy-section__list">
              <li>Manter a confidencialidade de suas credenciais de acesso</li>
              <li>Notificar a Rumo imediatamente sobre qualquer uso não autorizado</li>
              <li>Fornecer informações precisas e mantê-las atualizadas</li>
            </ul>

            <h3 class="policy-section__subtitle">9.4 Uso Permitido</h3>
            <p class="policy-section__text">Você pode utilizar a Plataforma para:</p>
            <ul class="policy-section__list">
              <li>Acompanhar suas metas e performance comercial</li>
              <li>Participar de campanhas e rankings autorizados pela sua empresa</li>
              <li>Interagir com o feed social no contexto profissional</li>
              <li>Receber e gerenciar recompensas conforme as regras das campanhas</li>
            </ul>

            <h3 class="policy-section__subtitle">9.5 Uso Proibido</h3>
            <p class="policy-section__text">É vedado ao usuário:</p>
            <ul class="policy-section__list">
              <li>Inserir dados falsos ou manipular resultados de campanhas</li>
              <li>Tentar acessar contas de outros usuários ou áreas restritas do sistema</li>
              <li>Realizar engenharia reversa, descompilar ou modificar o App</li>
              <li>Usar scripts, bots ou qualquer mecanismo automatizado não autorizado</li>
              <li>Publicar conteúdo ilegal, ofensivo, discriminatório ou que viole direitos de terceiros no feed social
              </li>
              <li>Compartilhar credenciais de acesso com terceiros</li>
            </ul>

            <h3 class="policy-section__subtitle">9.6 Propriedade Intelectual</h3>
            <p class="policy-section__text">
              Todo o conteúdo, design, código-fonte, marcas, logos e funcionalidades da Plataforma são propriedade
              exclusiva da Rumo ou de seus licenciadores, protegidos pelas leis de propriedade intelectual aplicáveis. O
              uso da Plataforma não transfere nenhum direito de propriedade ao usuário.
            </p>

            <h3 class="policy-section__subtitle">9.7 Disponibilidade e Manutenção</h3>
            <p class="policy-section__text">
              A Rumo envidarão esforços razoáveis para manter a Plataforma disponível 24/7, mas não garante
              disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência quando possível.
              A Rumo não se responsabiliza por indisponibilidades causadas por fatores externos (infraestrutura de
              terceiros, força maior, etc.).
            </p>

            <h3 class="policy-section__subtitle">9.8 Limitação de Responsabilidade</h3>
            <p class="policy-section__text">
              Na máxima extensão permitida pela lei brasileira, a Rumo não será responsável por danos indiretos,
              incidentais, consequenciais ou punitivos decorrentes do uso ou impossibilidade de uso da Plataforma. A
              responsabilidade total da Rumo, em qualquer hipótese, fica limitada ao valor pago pelo usuário ou pela
              empresa contratante no mês em que ocorreu o evento.
            </p>

            <h3 class="policy-section__subtitle">9.9 Rescisão</h3>
            <p class="policy-section__text">
              A Rumo pode suspender ou encerrar sua conta mediante violação destes Termos, solicitação da empresa
              contratante ou determinação legal. Você pode encerrar sua conta a qualquer momento pelas configurações do
              App.
            </p>

            <h3 class="policy-section__subtitle">9.10 Alterações nos Termos</h3>
            <p class="policy-section__text">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações substanciais serão
              comunicadas via notificação no App ou e-mail com antecedência mínima de 30 dias. O uso continuado após o
              prazo constitui aceitação.
            </p>

            <h3 class="policy-section__subtitle">9.11 Lei Aplicável e Foro</h3>
            <p class="policy-section__text">
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de <strong
                class="policy-section__strong">São Paulo – SP</strong> para dirimir quaisquer controvérsias, com
              renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <!-- Seção 10 — Contato -->
          <section id="contato" class="policy-section">
            <h2 class="policy-section__title">10. Contato e Encarregado de Dados (DPO)</h2>
            <p class="policy-section__text">
              Para questões sobre privacidade, exercício de direitos ou dúvidas sobre estes documentos, entre em contato
              com nosso Encarregado de Proteção de Dados:
            </p>
            <div class="policy-contact">
              <p class="policy-contact__item"><span class="policy-contact__label">E-mail</span> <a
                  href="mailto:contato@braduca.com.br" class="policy-section__link">contato@braduca.com.br</a></p>
              <p class="policy-contact__item"><span class="policy-contact__label">Site</span> <a
                  href="https://rumo.com.br" class="policy-section__link">rumo.com.br</a></p>
              <p class="policy-contact__item"><span class="policy-contact__label">ANPD</span> <span
                  class="policy-contact__value">Autoridade Nacional de Proteção de Dados — <a
                    href="https://www.gov.br/anpd" class="policy-section__link" target="_blank"
                    rel="noopener">gov.br/anpd</a></span></p>
            </div>
          </section>

        </div>
      </div>
    </main>

    <RFooter />
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Layout ───────────────────────────────────────────────── */
.policy-page {
  @apply bg-page-bg min-h-screen;
}

.policy-page__main {
  @apply pt-28 pb-24;
}

.policy-page__container {
  @apply max-w-3xl mx-auto px-6;
}

/* ── Header ───────────────────────────────────────────────── */
.policy-page__header {
  @apply mb-12 pb-10 border-b border-page-border;
}

.policy-page__label {
  @apply font-mono text-xs text-text-subtle uppercase tracking-widest mb-4;
}

.policy-page__title {
  @apply font-tight font-semibold text-4xl text-text-primary leading-tight mb-4;
}

.policy-page__subtitle {
  @apply font-sans text-sm text-text-muted;
}

/* ── Índice ───────────────────────────────────────────────── */
.policy-toc {
  @apply bg-surface border border-page-border rounded-xl p-6 mb-12;
}

.policy-toc__title {
  @apply font-tight font-semibold text-sm text-text-muted uppercase tracking-widest mb-4;
}

.policy-toc__list {
  @apply space-y-2 list-none;
}

.policy-toc__link {
  @apply font-sans text-sm text-text-body hover:text-text-primary transition-colors duration-150;
}

/* ── Seções ───────────────────────────────────────────────── */
.policy-content {
  @apply space-y-12;
}

.policy-section {
  @apply pb-10 border-b border-page-border last:border-0;
}

.policy-section__title {
  @apply font-tight font-semibold text-2xl text-text-primary mb-5;
}

.policy-section__subtitle {
  @apply font-tight font-semibold text-base text-text-primary mt-6 mb-3;
}

.policy-section__text {
  @apply font-sans text-sm leading-relaxed text-text-body mb-4;
}

.policy-section__list {
  @apply space-y-2 mb-4 pl-5;
}

.policy-section__list li {
  @apply font-sans text-sm leading-relaxed text-text-body list-disc;
}

.policy-section__strong {
  @apply text-text-primary font-semibold;
}

.policy-section__link {
  @apply text-primary hover:text-primary-light underline underline-offset-2 transition-colors duration-150;
}

/* ── Aviso ────────────────────────────────────────────────── */
.policy-notice {
  @apply bg-surface border border-page-border rounded-lg px-5 py-4 font-sans text-sm text-text-body leading-relaxed mt-4;
}

/* ── Contato ──────────────────────────────────────────────── */
.policy-contact {
  @apply bg-surface border border-page-border rounded-xl p-6 space-y-3 mt-4;
}

.policy-contact__item {
  @apply flex items-start gap-3 font-sans text-sm text-text-body;
}

.policy-contact__label {
  @apply font-mono text-xs text-text-subtle uppercase tracking-widest min-w-[60px] pt-0.5;
}

.policy-contact__value {
  @apply text-text-body;
}
</style>
