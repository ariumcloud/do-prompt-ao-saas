const { Card, Badge, SectionHeading, IconTile, Icon } = window.AriumDesignSystem_4c6a30 || {};

const ariumModules = [
  { n: '01', icon: 'sparkles', title: 'Fundamentos de vibe-coding', body: 'Como conversar com a IA para obter código que funciona: contexto, prompts de arquitetura, revisão e correção de erro sem travar.', out: 'Ambiente montado e o primeiro app rodando local.' },
  { n: '02', icon: 'target', title: 'Ideia e escopo do SaaS', body: 'Escolher um problema pequeno o bastante para caber em um mês e caro o bastante para alguém pagar. Recorte de escopo e definição do MVP.', out: 'Escopo de uma página com telas e funcionalidades.' },
  { n: '03', icon: 'database', title: 'Base técnica', body: 'Next.js para a aplicação, Supabase para banco e autenticação, Vercel para hospedagem. Como as três peças se encaixam e por que essa escolha.', out: 'Projeto com login funcionando e banco conectado.' },
  { n: '04', icon: 'layout-dashboard', title: 'Construindo as funcionalidades', body: 'Do CRUD ao painel do usuário: modelagem de dados, telas, estados vazios e as permissões que separam um cliente do outro.', out: 'Produto navegável com dados reais.' },
  { n: '05', icon: 'credit-card', title: 'Pagamentos com Mercado Pago', body: 'Checkout, assinatura recorrente, webhook de confirmação e o que fazer quando o pagamento falha. É aqui que o projeto vira negócio.', out: 'Primeiro pagamento de teste aprovado ponta a ponta.' },
  { n: '06', icon: 'rocket', title: 'Publicando no ar', body: 'Domínio próprio, variáveis de ambiente, checklist de segurança e o deploy. Depois: como acompanhar erros e receber os primeiros usuários.', out: 'SaaS público, no seu domínio, aceitando pagamento.' },
];

function Modules() {
  return (
    <section id="modulos" className="ar-section" style={{ position: 'relative' }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--glow-soft)', opacity: .5, pointerEvents: 'none' }} />
      <div className="ar-container" style={{ position: 'relative' }}>
        <SectionHeading
          eyebrow={<Badge tone="glass">Conteúdo</Badge>}
          title="Seis módulos que terminam com algo publicado"
          highlight="terminam com algo publicado"
          subtitle="Nenhum módulo acaba em teoria. Cada um fecha com uma entrega que você consegue abrir no navegador."
        />
        <div data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 18, marginTop: 56 }}>
          {ariumModules.map((m, i) => (
            <Card key={m.n} interactive padding="lg" radius="xl" tone={i === 4 ? 'glow' : 'default'} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <IconTile tone={i === 4 ? 'accent' : 'default'}><Icon name={m.icon} /></IconTile>
                <span style={{ fontSize: 28, fontWeight: 'var(--weight-light)', color: 'var(--text-faint)', letterSpacing: '-0.03em' }}>{m.n}</span>
              </div>
              <h3 style={{ fontSize: 'var(--text-h4)' }}>{m.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{m.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--text-accent)', marginTop: 1 }}><Icon name="corner-down-right" size={15} /></span>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{m.out}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Modules = Modules;
