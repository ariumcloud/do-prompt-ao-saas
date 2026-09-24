const { Button, Badge, Icon } = window.AriumDesignSystem_4c6a30 || {};

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'clamp(140px,26vw,240px)',
        paddingBottom: 'clamp(64px,12vw,120px)',
        background: '#060607',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
        {window.FibreArc && (
          <window.FibreArc
            background="#060607"
            baseColor="#4A38C8"
            accentColor="#8C7AFF"
            highlight="#FEFDFF"
          />
        )}
      </div>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 55% at 50% 0%, rgba(6,6,7,0) 30%, rgba(6,6,7,.7) 100%)', pointerEvents: 'none' }} />
      <div className="ar-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
        <Badge tone="glass" dot>Turma 2026 · vagas abertas</Badge>
        <window.TerminalType
          as="h1"
          lines={['Crie seu próprio SaaS', 'sem saber programar.']}
          style={{
            margin: 0,
            maxWidth: 1100,
            fontSize: 'clamp(29px,7.8vw,80px)',
            lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--tracking-display)',
            fontWeight: 'var(--weight-semibold)',
            textShadow: '0 4px 28px rgba(0,0,0,.65), 0 1px 4px rgba(0,0,0,.85)',
          }}
        />
        <p style={{ maxWidth: 620, fontSize: 'clamp(14px,2vw + 8px,17px)', lineHeight: 'var(--lh-body)', color: 'rgba(254,253,255,.82)' }}>
          Use IA para criar e publicar um sistema online, como um app de agendamento ou um painel de clientes, e cobre por ele do jeito que quiser.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
          <window.BeamWrap>
            <Button size="lg" href="#preco">Quero acesso por R$147</Button>
          </window.BeamWrap>
          <Button size="lg" variant="secondary" href="#modulos" iconLeft={<Icon name="list" size={16} />}>Ver o que você vai construir</Button>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', fontSize: 'var(--text-caption)', color: 'rgba(254,253,255,.66)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="credit-card" size={14} />Pagamento único</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="shield-check" size={14} />7 dias de garantia</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="refresh-cw" size={14} />1 ano de atualizações</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
