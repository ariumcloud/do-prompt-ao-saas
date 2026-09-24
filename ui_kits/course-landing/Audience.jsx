const { Card, Badge, SectionHeading, Icon } = window.AriumDesignSystem_4c6a30 || {};

const ariumAudienceFor = [
  'Você conhece um problema do seu nicho e quer transformá-lo em um sistema que as pessoas paguem para usar.',
  'Você já usa IA para escrever textos e quer usá-la para criar um produto.',
  'Você é freelancer ou agência e quer parar de vender horas.',
  'Você tem uma ideia parada e quer testá-la antes de gastar com uma equipe.',
];

const ariumAudienceNot = [
  'Quem procura dinheiro fácil sem trabalhar nas primeiras semanas.',
  'Quem quer virar programador de carreira — isto não é uma faculdade.',
  'Quem espera um modelo pronto para revender sem entender nada.',
  'Quem não vai abrir o computador para fazer as atividades.',
];

function AudienceList({ tone, title, items }) {
  const positive = tone === 'for';
  return (
    <Card padding="md" radius="xl" tone={positive ? 'glow' : 'default'} style={{ height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
        <Badge tone={positive ? 'accent' : 'neutral'}>{positive ? 'É para você' : 'Não é para você'}</Badge>
      </div>
      <h3 style={{ fontSize: 'var(--text-h3)', marginBottom: 20 }}>{title}</h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map((t) => (
          <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>
            <span style={{ color: positive ? 'var(--signal-positive)' : 'var(--text-faint)', marginTop: 2 }}>
              <Icon name={positive ? 'check' : 'x'} size={16} />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Audience() {
  return (
    <section id="quem" className="ar-section">
      <div className="ar-container">
        <SectionHeading
          eyebrow={<Badge tone="neutral">Qualificação</Badge>}
          title={<window.ColorSweepHeading text="Antes do preço, uma pergunta honesta: isso é para você?" highlight="isso é para você?" />}
          subtitle="Prefiro que você feche esta página agora a pedir reembolso daqui a uma semana."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20, marginTop: 56 }}>
          <AudienceList tone="for" title="Feito para quem quer publicar, não estudar." items={ariumAudienceFor} />
          <AudienceList tone="not" title="Deixe para depois se você se reconhece aqui." items={ariumAudienceNot} />
        </div>
      </div>
    </section>
  );
}
window.Audience = Audience;
