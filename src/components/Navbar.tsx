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

        {/* Brand */}

        <a
          href="#home"
          className="brand"
          aria-label="Simi Kumari — Home"
        >
          Simi<span>.</span>
        </a>


        {/* Navigation */}

        <div className="nav-links">

          {navLinks.map(([name, href]) => (
            <a
              key={name}
              href={href}
            >
              {name}
            </a>
          ))}

        </div>


        {/* Resume */}

        <a
          href="/SIMI_RESUME.pdf"
          className="resume-link"
          target="_blank"
          rel="noreferrer"
        >
          <span>Resume</span>
          <span aria-hidden="true">↗</span>
        </a>

      </nav>

    </header>
  );
}