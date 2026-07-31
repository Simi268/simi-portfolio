const navLinks = [
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <a href="#home" className="brand">
          Simi<span>.</span>
        </a>

        <div className="nav-links">
          {navLinks.map(([name, href]) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </div>

        <a href="/resume.pdf" className="resume-link" target="_blank">
          Resume <span>↗</span>
        </a>
      </nav>
    </header>
  );
}