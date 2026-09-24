const { Card, Badge, SectionHeading, Stat, Icon } = window.AriumDesignSystem_4c6a30 || {};

function Proof() {
  return (
    <section id="prova" className="ar-section">
      <div className="ar-container">
        <SectionHeading
          align="left"
          eyebrow={<Badge tone="neutral">Prova real</Badge>}
          title="Eu não ensino o que li. Ensino o que está rodando."
          highlight="o que está rodando"
        />
        <div className="ar-grid-2col" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,.9fr)', gap: 20, marginTop: 48, alignItems: 'stretch' }}>
          <Card padding="lg" radius="xl" tone="raised" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Badge tone="accent" dot>Meu SaaS de hospedagem · no ar</Badge>
            <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>
              Criei um sistema de hospedagem online com o mesmo método deste curso: a IA escreve o código e eu decido o que construir. Hoje meus clientes já movimentaram mais de R$100 mil por ele.
            </p>
            <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
              Tudo o que você vai ver nas aulas eu usei nesse produto primeiro.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 12 }}>
              <Stat label="Movimentado" value="+R$100 mil" />
              <Stat label="Cobrança" value="Assinatura" />
              <Stat label="Clientes" value="Cada um na sua conta" />
            </div>
          </Card>
          <Card padding="none" radius="xl" tone="glow" style={{ display: 'grid', placeItems: 'center', minHeight: 320, padding: 28 }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: 'users', k: 'Clientes reais', v: 'cada um com login e dados separados' },
                { icon: 'credit-card', k: 'Pagamento online', v: 'assinatura cobrada automaticamente' },
                { icon: 'shield-check', k: 'Login e permissões', v: 'cada cliente só vê o que é dele' },
                { icon: 'globe', k: 'No ar de verdade', v: 'endereço próprio, aberto ao público' },
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
