const { NavBar, Button, Badge, Wordmark } = window.AriumDesignSystem_4c6a30 || {};

function Header() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: solid ? 'rgba(6,6,7,.72)' : 'transparent',
        backdropFilter: solid ? 'var(--blur-glass)' : 'none',
        borderBottom: `1px solid ${solid ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      }}
    >
      <div className="ar-container" style={{ paddingInline: 0 }}>
        <NavBar
          brand={<Wordmark size={21} />}
          activeHref="#modulos"
          links={[
            { label: 'Módulos', href: '#modulos' },
            { label: 'Para quem é', href: '#quem' },
            { label: 'Prova', href: '#prova' },
            { label: 'Preço', href: '#preco' },
            { label: 'Mentoria', href: '#mentoria', badge: <Badge size="sm" tone="glass">EM BREVE</Badge> },
          ]}
          actions={
            <React.Fragment>
              <Button variant="ghost" size="sm" href="#faq" className="ar-hide-sm">Dúvidas</Button>
              <window.BeamWrap>
                <Button size="sm" href="#preco">Garantir vaga</Button>
              </window.BeamWrap>
            </React.Fragment>
          }
        />
      </div>
    </header>
  );
}
window.Header = Header;
