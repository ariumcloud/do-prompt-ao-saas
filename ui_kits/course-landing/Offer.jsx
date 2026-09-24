const { Card, Badge, Button, SectionHeading, Icon, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const ariumIncluded = [
  'Aulas gravadas, da ideia até o site no ar',
  'Projeto-base pronto para copiar e adaptar',
  'Biblioteca de prompts para pedir e corrigir código',
  'Checklist de lançamento e de segurança',
  'Comunidade no Discord com revisão de projeto',
  'Acesso vitalício e todas as atualizações',
];

function Offer() {
  return (
    <section id="preco" className="ar-section" style={{ position: 'relative' }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--glow-soft)', opacity: .7, pointerEvents: 'none' }} />
      <div className="ar-container" style={{ position: 'relative' }}>
        <SectionHeading
          eyebrow={<Badge tone="glass">Oferta</Badge>}
          title={<window.TerminalType lines={['Um pagamento. O curso inteiro. Para sempre.']} style={{ display: 'block', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em', fontWeight: '600' }} />}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20, marginTop: 56, alignItems: 'stretch' }}>
          <Card padding="none" radius="xl" style={{ display: 'flex', flexDirection: 'column' }}>
            <window.WindowTitlebar file="incluso.tsx" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 'var(--space-6, 24px)' }}>
              <h3 style={{ fontSize: 'var(--text-h3)' }}>O que está incluso</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
                {ariumIncluded.map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-body)' }}>
                    <span style={{ color: 'var(--signal-positive)', marginTop: 2 }}><Icon name="check" size={16} /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card tone="accent" padding="none" radius="xl" style={{ display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-accent-strong)' }}>
            <window.WindowTitlebar file="checkout.tsx" variant="accent" highlight />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 'var(--space-6, 24px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Wordmark size={18} />
                <Badge tone="glass" size="sm">ACESSO IMEDIATO</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 18, color: 'rgba(254,253,255,.72)' }}>R$</span>
                <span style={{ fontSize: 76, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.045em', lineHeight: .9 }}>147</span>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(254,253,255,.72)' }}>à vista</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: -8 }}>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(254,253,255,.6)', textDecoration: 'line-through' }}>de R$197</span>
                <Badge tone="glass" size="sm">25% OFF · lançamento</Badge>
              </div>
              <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'rgba(254,253,255,.86)' }}>
                ou 12× de R$14,85 no cartão. Sem mensalidade, sem venda extra obrigatória, sem curso avançado escondido.
              </p>
              <Button size="lg" variant="secondary" fullWidth style={{ background: 'var(--ar-chalk-0)', color: 'var(--ar-ink-0)', border: '1px solid transparent', boxShadow: 'none', fontWeight: 'var(--weight-semibold)' }}>
                Comprar agora
              </Button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 'var(--text-caption)', color: 'rgba(254,253,255,.78)' }}>
                <span style={{ display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="lock" size={14} />Pagamento processado com segurança</span>
                <span style={{ display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="zap" size={14} />Acesso liberado em minutos</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Offer = Offer;
