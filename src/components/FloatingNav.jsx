const links = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];

function FloatingNav() {
  return (
    <header className="fixed left-1/2 top-4 z-40 w-[95%] max-w-5xl -translate-x-1/2">
      <nav className="glass-card flex flex-wrap items-center justify-center gap-2 px-4 py-3 md:gap-4">
        {links.map((link) => (
          <a key={link} href={`#${link}`} className="nav-link">
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default FloatingNav;
