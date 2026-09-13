const { Card, Badge, SectionHeading, IconTile, Icon } = window.AriumDesignSystem_4c6a30 || {};

const ariumModules = [
  { n: '01', file: 'fundamentos.tsx', icon: 'sparkles', title: 'Fundamentos de vibe-coding', body: 'Como conversar com a IA para obter código que funciona: contexto, prompts de arquitetura, revisão e correção de erro sem travar.', out: 'Ambiente montado e o primeiro app rodando local.' },
  { n: '02', file: 'escopo.tsx', icon: 'target', title: 'Ideia e escopo do SaaS', body: 'Escolher um problema pequeno o bastante para caber em um mês e caro o bastante para alguém pagar. Recorte de escopo e definição do MVP.', out: 'Escopo de uma página com telas e funcionalidades.' },
  { n: '03', file: 'base-tecnica.tsx', icon: 'database', title: 'Base técnica', body: 'Next.js para a aplicação, Supabase para banco e autenticação, Vercel para hospedagem. Como as três peças se encaixam e por que essa escolha.', out: 'Projeto com login funcionando e banco conectado.' },
  { n: '04', file: 'funcionalidades.tsx', icon: 'layout-dashboard', title: 'Construindo as funcionalidades', body: 'Do CRUD ao painel do usuário: modelagem de dados, telas, estados vazios e as permissões que separam um cliente do outro.', out: 'Produto navegável com dados reais.' },
  { n: '05', file: 'pagamentos.tsx', icon: 'credit-card', title: 'Pagamentos e assinaturas', body: 'Checkout, assinatura recorrente, webhook de confirmação e o que fazer quando o pagamento falha — com Stripe, Mercado Pago ou o gateway que você escolher. É aqui que o projeto vira negócio.', out: 'Primeiro pagamento de teste aprovado ponta a ponta.' },
  { n: '06', file: 'deploy.tsx', icon: 'rocket', title: 'Publicando no ar', body: 'Domínio próprio, variáveis de ambiente, checklist de segurança e o deploy. Depois: como acompanhar erros e receber os primeiros usuários.', out: 'SaaS público, no seu domínio, aceitando pagamento.' },
];

function ModuleIcon({ name, accent, size = 40 }) {
  return (
    <span style={{ position: 'relative', width: size, height: size, flex: `0 0 ${size}px` }}>
      <span aria-hidden="true" className="ar-pulse-ring" style={{ animationDelay: '0s', borderColor: accent ? 'var(--text-accent)' : 'rgba(254,253,255,.35)' }} />
      <span aria-hidden="true" className="ar-pulse-ring" style={{ animationDelay: '.9s', borderColor: accent ? 'var(--text-accent)' : 'rgba(254,253,255,.35)' }} />
      <IconTile tone={accent ? 'accent' : 'default'} style={{ position: 'relative' }}><Icon name={name} /></IconTile>
    </span>
  );
}

function Modules() {
  const gridRef = React.useRef(null);
  return (
    <section id="modulos" className="ar-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--glow-soft)', opacity: .5, pointerEvents: 'none' }} />
      {/* Ambient radar pulse centered behind the grid — slow, large, barely-there. */}
      <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '54%', width: 640, height: 640, transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
        <span className="ar-pulse-ring" style={{ animationDuration: '4.2s', animationDelay: '0s', borderColor: 'rgba(160,144,255,.25)' }} />
        <span className="ar-pulse-ring" style={{ animationDuration: '4.2s', animationDelay: '1.4s', borderColor: 'rgba(160,144,255,.25)' }} />
        <span className="ar-pulse-ring" style={{ animationDuration: '4.2s', animationDelay: '2.8s', borderColor: 'rgba(160,144,255,.25)' }} />
      </span>
      <div className="ar-container" style={{ position: 'relative' }}>
        <SectionHeading
          eyebrow={<Badge tone="glass">Conteúdo</Badge>}
          title="Da ideia ao primeiro pagamento, passo a passo"
          highlight="primeiro pagamento"
          subtitle="Nenhum módulo acaba em teoria. Cada um fecha com uma entrega que você consegue abrir no navegador."
        />
        <div style={{ position: 'relative', marginTop: 56 }}>
          <div ref={gridRef} data-stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))', gap: 18 }}>
            {ariumModules.map((m, i) => (
              <Card key={m.n} interactive padding="none" radius="xl" tone={i === 4 ? 'glow' : 'default'} style={{ display: 'flex', flexDirection: 'column' }}>
                <window.WindowTitlebar file={m.file} highlight={i === 4} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 'var(--space-6, 24px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <ModuleIcon name={m.icon} accent={i === 4} />
                    <span style={{ fontSize: 28, fontWeight: 'var(--weight-light)', color: 'var(--text-faint)', letterSpacing: '-0.03em' }}>{m.n}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-h4)' }}>{m.title}</h3>
                  <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{m.body}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--text-accent)', marginTop: 1 }}><Icon name="corner-down-right" size={15} /></span>
                    <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{m.out}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <window.GridBeamOverlay gridRef={gridRef} />
        </div>
      </div>
    </section>
  );
}
window.Modules = Modules;
