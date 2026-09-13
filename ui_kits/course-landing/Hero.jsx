const { Button, Badge, Icon } = window.AriumDesignSystem_4c6a30 || {};

function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 168,
        paddingBottom: 120,
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
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 55% at 50% 0%, rgba(6,6,7,0) 30%, rgba(6,6,7,.7) 100%)' }} />
      <div className="ar-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26 }}>
        <Badge tone="glass" dot>Turma 2026 · vagas abertas</Badge>
        <window.TerminalType
          as="h1"
          lines={['Você não precisa virar programador', 'para colocar um SaaS no ar.']}
          style={{
            margin: 0,
            maxWidth: 940,
            fontSize: 'var(--text-display-1)',
            lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--tracking-display)',
            fontWeight: 'var(--weight-semibold)',
            textShadow: '0 4px 28px rgba(0,0,0,.65), 0 1px 4px rgba(0,0,0,.85)',
          }}
        />
        <p style={{ maxWidth: 620, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body)', color: 'rgba(254,253,255,.82)' }}>
          Do Prompt ao SaaS é o curso que te leva da ideia ao primeiro pagamento aprovado usando IA generativa como par de programação. Seis módulos, um produto publicado no fim.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
          <window.BeamWrap>
            <Button size="lg" href="#preco">Quero acesso por R$197</Button>
          </window.BeamWrap>
          <Button size="lg" variant="secondary" href="#modulos" iconLeft={<Icon name="list" size={16} />}>Ver os 6 módulos</Button>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', fontSize: 'var(--text-caption)', color: 'rgba(254,253,255,.66)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="infinity" size={14} />Acesso vitalício</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="shield-check" size={14} />7 dias de garantia</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="refresh-cw" size={14} />Atualizações incluídas</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
