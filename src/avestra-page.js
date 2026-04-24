import { LitElement, html, css } from 'lit';

/**
 * Avestra PV1 - Traffic Diagnosis (Low Ticket R$37)
 * Built with Lit
 */
export class AvestraPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    /* --- UTILS --- */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s var(--ease);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* --- NAVBAR --- */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 72px;
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
      display: flex;
      align-items: center;
    }

    /* --- HERO --- */
    .hero {
      padding: 160px 0 80px;
      background: radial-gradient(ellipse at 50% -20%, rgba(108, 92, 231, 0.15) 0%, transparent 70%);
      text-align: center;
    }

    .hero-badge {
      display: inline-block;
      padding: 6px 12px;
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      border-radius: 99px;
      color: var(--accent-light);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.04em;
      margin-bottom: 1.5rem;
      color: var(--fg);
    }

    h1 span {
      color: var(--mint);
    }

    .hero-sub {
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      color: var(--fg-secondary);
      max-width: 700px;
      margin: 0 auto 2.5rem;
      line-height: 1.6;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 18px 36px;
      background: var(--accent);
      color: white;
      text-decoration: none;
      font-weight: 700;
      border-radius: 12px;
      transition: all 0.3s var(--ease);
      box-shadow: 0 0 30px rgba(108, 92, 231, 0.3);
      cursor: pointer;
      border: none;
    }

    .btn:hover {
      background: var(--accent-light);
      transform: translateY(-2px);
      box-shadow: 0 0 50px rgba(108, 92, 231, 0.5);
    }

    /* --- SECTIONS --- */
    section {
      padding: 100px 0;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      text-align: center;
      letter-spacing: -0.02em;
    }

    .section-tag {
      display: block;
      text-align: center;
      color: var(--accent-light);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }

    /* --- CARDS --- */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 2.5rem;
      transition: all 0.4s var(--ease);
    }

    .card:hover {
      border-color: var(--border-accent);
      transform: translateY(-4px);
      background: var(--elevated);
    }

    /* --- TABLE --- */
    .table-wrap {
      overflow-x: auto;
      margin-top: 3rem;
      border-radius: 16px;
      border: 1px solid var(--border);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--surface);
      text-align: left;
    }

    th, td {
      padding: 1.5rem;
      border-bottom: 1px solid var(--border);
    }

    th {
      background: var(--elevated);
      font-weight: 800;
      color: var(--white);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .td-bad { color: #EF4444; }
    .td-good { color: var(--mint); font-weight: 700; }

    /* --- OFFER CARD --- */
    .offer-box {
      max-width: 540px;
      margin: 4rem auto 0;
      background: linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%);
      border: 1px solid var(--border-accent);
      border-radius: 24px;
      padding: 4rem 3rem;
      text-align: center;
      position: relative;
      box-shadow: 0 0 80px rgba(108, 92, 231, 0.1);
    }

    .price-value {
      font-size: 5rem;
      font-weight: 900;
      line-height: 1;
      margin: 1rem 0;
    }

    .price-currency {
      font-size: 1.5rem;
      vertical-align: top;
      margin-right: 4px;
    }

    /* --- FAQ --- */
    .faq-item {
      margin-bottom: 1rem;
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
    }

    .faq-trigger {
      padding: 1.5rem;
      background: var(--surface);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }

    .faq-content {
      padding: 0 1.5rem 1.5rem;
      background: var(--surface);
      color: var(--fg-secondary);
      font-size: 0.95rem;
      display: none;
    }

    .faq-item.open .faq-content {
      display: block;
    }

    /* --- FOOTER --- */
    footer {
      padding: 60px 0;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--fg-faint);
      font-size: 0.85rem;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div style="font-weight: 800; font-size: 1.2rem; letter-spacing: -1px;">AVESTRA</div>
          <a href="#oferta" class="btn" style="padding: 10px 20px; font-size: 0.8rem;">ACESSAR DIAGNÓSTICO</a>
        </div>
      </nav>

      <header class="hero">
        <div class="container">
          <div class="hero-badge">DIAGNÓSTICO TÉCNICO DE RASTREAMENTO</div>
          <h1>Seu tráfego está caro porque o Meta <span>não enxerga</span> suas vendas reais.</h1>
          <p class="hero-sub">Em 15 minutos você descobre exatamente onde o rastreamento está quebrando — e quanto isso está te custando por mês.</p>
          <a href="#oferta" class="btn">QUERO MEU DIAGNÓSTICO POR R$37 →</a>
        </div>
      </header>

      <section>
        <div class="container">
          <span class="section-tag">AUDITORIA</span>
          <h2 class="section-title">Por que as soluções óbvias falham?</h2>
          
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>O que você tentou</th>
                  <th>Por que não funcionou</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trocar criativo</td>
                  <td class="td-bad">Melhora por 3 dias e volta ao normal. A causa raiz é sistêmica.</td>
                </tr>
                <tr>
                  <td>Aumentar verba</td>
                  <td class="td-bad">O custo sobe proporcionalmente. O algoritmo escala o erro.</td>
                </tr>
                <tr>
                  <td>Contratar agência</td>
                  <td class="td-good">Eles otimizam o que vêem. O diagnóstico entrega o que está oculto.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style="background: var(--surface);">
        <div class="container">
          <span class="section-tag">CONTEÚDO</span>
          <h2 class="section-title">O que o relatório revela</h2>
          
          <div class="grid">
            <div class="card">
              <h3 style="margin-bottom: 1rem; color: var(--accent-light);">Saúde do Pixel & API</h3>
              <p style="font-size: 0.95rem; color: var(--fg-secondary);">Verificação profunda do sinal que você envia para o Meta Ads. Identificamos latência e perda de pacotes.</p>
            </div>
            <div class="card">
              <h3 style="margin-bottom: 1rem; color: var(--mint);">Impacto Financeiro</h3>
              <p style="font-size: 0.95rem; color: var(--fg-secondary);">Cálculo exato de quanto orçamento está sendo "jogado fora" tentando otimizar dados cegos.</p>
            </div>
            <div class="card">
              <h3 style="margin-bottom: 1rem; color: var(--orange);">Plano de Correção</h3>
              <p style="font-size: 0.95rem; color: var(--fg-secondary);">Lista técnica priorizada para seu gestor ou desenvolvedor corrigir o fluxo de dados em 48h.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta">
        <div class="container">
          <div class="offer-box">
            <div class="hero-badge" style="background: var(--brand-glow); margin-bottom: 1rem;">OFERTA DE LANÇAMENTO</div>
            <h2 style="margin-bottom: 0.5rem;">Diagnóstico de Tráfego</h2>
            <div class="price-value"><span class="price-currency">R$</span>37</div>
            <p style="color: var(--fg-secondary); margin-bottom: 2.5rem;">Pagamento único. Acesso imediato ao relatório após preenchimento.</p>
            <a href="#" class="btn" style="width: 100%;">ACESSAR AGORA →</a>
            
            <div style="margin-top: 2rem; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.8rem; color: var(--fg-faint);">
              <span>🛡️ 7 dias de garantia</span>
              <span>🔒 Pagamento seguro</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container" style="max-width: 800px;">
          <h2 class="section-title">FAQ</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-trigger" @click=${this._toggleFaq}>
                <span>Preciso dar acesso ao meu Gerenciador?</span>
                <span>+</span>
              </div>
              <div class="faq-content">
                Não. O diagnóstico é gerado a partir dos dados que você fornece sobre o comportamento do seu Pixel. Não pedimos senhas.
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-trigger" @click=${this._toggleFaq}>
                <span>Em quanto tempo recebo o relatório?</span>
                <span>+</span>
              </div>
              <div class="faq-content">
                O processamento é instântaneo. Após o checkout e preenchimento das métricas, seu plano de correção é liberado.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <p>AVESTRA © 2026 | Jonas Guvito</p>
          <p style="margin-top: 10px;">Diagnóstico de Tráfego e Auditoria de Dados</p>
        </div>
      </footer>
    `;
  }

  _toggleFaq(e) {
    const item = e.currentTarget.parentElement;
    item.classList.toggle('open');
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', () => this._handleScroll());
  }

  _handleScroll() {
    // Simple reveal logic
    const reveals = this.shadowRoot.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}

customElements.define('avestra-page', AvestraPage);
