const { Card, Badge, Button, SectionHeading, Icon, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

const ariumIncluded = [
  'Aulas gravadas, do primeiro prompt ao deploy',
  'Repositório-base do projeto do curso',
  'Biblioteca de prompts de arquitetura e correção',
  'Checklist de lançamento e de segurança',
  'Comunidade no Discord com revisão de projeto',
  'Acesso vitalício e todas as atualizações',
];

const ariumBonus = [
  { icon: 'file-text', t: 'Bônus 1 — Kit de contratos', d: 'Proposta e contrato para vender o SaaS como projeto fechado.' },
  { icon: 'wallet', t: 'Bônus 2 — Precificação', d: 'Planilha de planos, custos de infra e ponto de equilíbrio.' },
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
          <Card padding="lg" radius="xl" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ fontSize: 'var(--text-h3)' }}>O que está incluso</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13 }}>
              {ariumIncluded.map((t) => (
                <li key={t} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-body)' }}>
                  <span style={{ color: 'var(--signal-positive)', marginTop: 2 }}><Icon name="check" size={16} /></span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ariumBonus.map((b) => (
                <div key={b.t} style={{ display: 'flex', gap: 12 }}>
                  <span style={{ color: 'var(--text-accent)', marginTop: 2 }}><Icon name={b.icon} size={16} /></span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)' }}>{b.t}</span>
                    <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{b.d}</span>
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card tone="accent" padding="lg" radius="xl" style={{ display: 'flex', flexDirection: 'column', gap: 20, boxShadow: 'var(--shadow-accent-strong)' }}>
            <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 20% 0%, rgba(254,253,255,.14) 0%, rgba(254,253,255,0) 85%)', pointerEvents: 'none' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Wordmark size={18} />
              <Badge tone="glass" size="sm">ACESSO IMEDIATO</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 18, color: 'rgba(254,253,255,.72)' }}>R$</span>
              <span style={{ fontSize: 76, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.045em', lineHeight: .9 }}>197</span>
              <span style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(254,253,255,.72)' }}>à vista</span>
            </div>
            <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'rgba(254,253,255,.86)' }}>
              ou 12× de R$19,90 no cartão. Sem mensalidade, sem upsell obrigatório, sem curso avançado escondido.
            </p>
            <Button size="lg" variant="secondary" fullWidth style={{ background: 'var(--ar-chalk-0)', color: 'var(--ar-ink-0)', border: '1px solid transparent', boxShadow: 'none', fontWeight: 'var(--weight-semibold)' }}>
              Comprar agora
            </Button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 'var(--text-caption)', color: 'rgba(254,253,255,.78)' }}>
              <span style={{ display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="lock" size={14} />Pagamento processado com segurança</span>
              <span style={{ display: 'inline-flex', gap: 7, alignItems: 'center' }}><Icon name="zap" size={14} />Acesso liberado em minutos</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Offer = Offer;
