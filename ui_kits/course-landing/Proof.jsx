const { Card, Badge, SectionHeading, Stat, Icon } = window.AriumDesignSystem_4c6a30 || {};

function Proof() {
  return (
    <section id="prova" className="ar-section">
      <div className="ar-container">
        <SectionHeading
          align="left"
          eyebrow={<Badge tone="neutral">Autoridade</Badge>}
          title="Eu não ensino o que li. Ensino o que está rodando."
          highlight="o que está rodando"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)', gap: 20, marginTop: 48, alignItems: 'stretch' }}>
          <Card padding="lg" radius="xl" tone="raised" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Badge tone="accent" dot>cabin · em produção</Badge>
            <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>
              O cabin é um SaaS multi-tenant que eu construí com o mesmo método deste curso: IA escrevendo o código, eu dirigindo as decisões. Hoje ele atende clientes pagantes, com login, cobrança recorrente e dados isolados por conta.
            </p>
            <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
              Cada decisão que você vai ver nos módulos foi tomada duas vezes: uma dentro do cabin, outra na aula.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 12 }}>
              <Stat label="Contas ativas" value="Multi-tenant" />
              <Stat label="Cobrança" value="Recorrente" />
              <Stat label="Stack" value="Next · Supabase" />
            </div>
          </Card>
          <Card padding="none" radius="xl" tone="glow" style={{ display: 'grid', placeItems: 'center', minHeight: 320, padding: 28 }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: 'users', k: 'Clientes reais', v: 'contas separadas, dados isolados' },
                { icon: 'credit-card', k: 'Mercado Pago', v: 'assinatura + webhook em produção' },
                { icon: 'shield-check', k: 'Auth e permissões', v: 'Supabase RLS por tenant' },
                { icon: 'globe', k: 'Deploy', v: 'domínio próprio na Vercel' },
              ].map((r) => (
                <div key={r.k} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 16px', borderRadius: 'var(--radius-md)', background: 'var(--ar-alpha-4)', border: '1px solid var(--border-subtle)', backdropFilter: 'var(--blur-glass)' }}>
                  <span style={{ color: 'var(--text-accent)' }}><Icon name={r.icon} size={18} /></span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)' }}>{r.k}</span>
                    <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{r.v}</span>
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;
