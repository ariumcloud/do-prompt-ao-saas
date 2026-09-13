const { Card, Badge, Button, SectionHeading, Accordion, Icon, Wordmark, Input } = window.AriumDesignSystem_4c6a30 || {};

function Guarantee() {
  return (
    <section className="ar-section" style={{ paddingBlock: 'clamp(48px,6vw,90px)' }}>
      <div className="ar-container">
        <Card tone="raised" padding="lg" radius="2xl" style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ display: 'grid', placeItems: 'center', width: 84, height: 84, borderRadius: 'var(--radius-lg)', background: 'var(--accent-quiet)', border: '1px solid var(--border-accent)', color: 'var(--text-accent)', flex: '0 0 84px' }}>
            <Icon name="shield-check" size={34} />
          </span>
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h3 style={{ fontSize: 'var(--text-h3)' }}>7 dias para testar. O risco é meu.</h3>
            <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', maxWidth: 620 }}>
              Assista aos módulos, baixe o repositório, faça o primeiro deploy. Se em uma semana você achar que não era isso, responde o e-mail de compra e eu devolvo os R$197. Sem formulário, sem pergunta de retenção.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

const ariumFaq = [
  { question: 'Preciso saber programar?', answer: 'Não. O curso parte do zero em código. Você aprende a descrever o que quer, revisar o que a IA escreve e corrigir quando quebra — que é o trabalho real de quem publica software hoje.' },
  { question: 'Quanto tempo até ter algo no ar?', answer: 'O módulo 6 termina com o deploy. Dedicando cerca de 5 horas por semana, a maior parte dos alunos publica em um mês.' },
  { question: 'Quanto custa manter o SaaS rodando?', answer: 'Os planos gratuitos de Supabase e Vercel cobrem o início. O primeiro custo real aparece quando você já tem clientes pagando — e o módulo de precificação trata exatamente disso.' },
  { question: 'Serve para vender projeto para cliente?', answer: 'Sim. O bônus de contratos e proposta existe para isso. Vários alunos usam o método para entregar sistemas sob medida em vez de vender hora.' },
  { question: 'Funciona no Windows?', answer: 'Sim. Todo o stack roda no navegador e no terminal, igual no Mac e no Linux.' },
  { question: 'Tem certificado?', answer: 'Não. O que você mostra no fim é o produto no ar com um domínio, que vale mais que um PDF.' },
];

function Faq() {
  return (
    <section id="faq" className="ar-section">
      <div className="ar-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.85fr) minmax(0,1.15fr)', gap: 48, alignItems: 'start' }}>
        <SectionHeading
          align="left"
          size="sm"
          eyebrow={<Badge tone="neutral">Dúvidas</Badge>}
          title="O que as pessoas perguntam antes de comprar"
          highlight="antes de comprar"
          subtitle="Se a sua não estiver aqui, responda o e-mail de contato — eu leio todas."
        />
        <Accordion items={ariumFaq} />
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="mentoria" style={{ position: 'relative', paddingTop: 140, paddingBottom: 160, overflow: 'hidden', background: '#060607' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, transform: 'scaleY(-1)' }}>
        {window.FibreArc && (
          <window.FibreArc
            background="#060607"
            baseColor="#4A38C8"
            accentColor="#8C7AFF"
            highlight="#FEFDFF"
          />
        )}
      </div>
      <div className="ar-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
        <Badge tone="glass" dot>Últimas vagas da turma 2026</Badge>
        <window.TerminalType
          as="h2"
          lines={['A ideia continua na sua cabeça', 'ou entra no ar este mês.']}
          style={{ margin: 0, maxWidth: 900, fontFamily: 'var(--font-serif)', fontSize: 'var(--text-display-1)', lineHeight: 'var(--lh-display)', letterSpacing: '-0.01em', fontWeight: '600', textShadow: '0 4px 28px rgba(0,0,0,.65), 0 1px 4px rgba(0,0,0,.85)' }}
        />
        <p style={{ maxWidth: 560, fontSize: 'var(--text-body-lg)', color: 'rgba(254,253,255,.82)', lineHeight: 'var(--lh-body)' }}>
          R$197, acesso vitalício, 7 dias de garantia. O único jeito de descobrir se funciona é abrir o primeiro módulo.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <window.BeamWrap>
            <Button size="lg" href="#preco" iconRight={<Icon name="arrow-right" size={16} />}>Começar por R$197</Button>
          </window.BeamWrap>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-page)', paddingBlock: 56 }}>
      <div className="ar-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 36 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 320 }}>
          <Wordmark size={22} />
          <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Receba um aviso quando a próxima turma abrir. Sem spam, só o essencial.
          </p>
          <Input placeholder="seu@email.com" trailing={<Button size="sm">Avise-me</Button>} />
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>Curso</span>
          {['Módulos', 'Para quem é', 'Preço', 'Garantia'].map((l) => (
            <a key={l} href="#modulos" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{l}</a>
          ))}
        </nav>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>Suporte</span>
          {['Dúvidas frequentes', 'Contato', 'Política de reembolso', 'Termos de uso'].map((l) => (
            <a key={l} href="#faq" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{l}</a>
          ))}
        </nav>
      </div>
      <div className="ar-container" style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontSize: 'var(--text-caption)', color: 'var(--text-faint)' }}>
        <span>© 2026 Do Prompt ao SaaS. Todos os direitos reservados.</span>
        <span>Feito com vibe-coding.</span>
      </div>
    </footer>
  );
}

window.Guarantee = Guarantee;
window.Faq = Faq;
window.Closing = Closing;
window.SiteFooter = SiteFooter;
