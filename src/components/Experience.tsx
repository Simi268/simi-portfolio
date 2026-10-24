export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-container">
        <header className="section-heading">
          <div className="section-heading-meta">
            <span className="section-number lavender">02</span>
            <p className="section-kicker">PROFESSIONAL EXPERIENCE</p>
          </div>
          <div className="experience-heading-content">
            <h2>Experience<span className="heading-accent">.</span></h2>
            <p className="section-intro">
              Backend engineering work focused on API development, integration,
              debugging, and reliable application workflows.
            </p>
          </div>
        </header>

        <div className="experience-timeline">
          <article className="experience-entry experience-entry-featured">
            <div className="experience-marker" aria-hidden="true">
              <span className="experience-index">01</span>
              <span className="experience-line" />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <span className="experience-label featured-label">INTERNSHIP · REMOTE</span>
                  <h3>AI Backend Engineer Intern</h3>
                  <p className="experience-company">FLYRANK AI</p>
                </div>
                <span className="experience-date">JUL 2026 — AUG 2026</span>
              </div>

              <div className="experience-divider" />

              <p className="experience-summary">
                Built and shipped RESTful AI backend services with Python and FastAPI,
                connecting frontend features to AI models and databases to support
                production data-driven workflows.
              </p>

              <div className="experience-details">
                <div className="experience-detail">
                  <span className="project-detail-mark">↗</span>
                  <p>Built and shipped RESTful AI backend services with Python and FastAPI that connected frontend features to AI models and databases, enabling production data-driven workflows.</p>
                </div>
                <div className="experience-detail">
                  <span className="project-detail-mark">↗</span>
                  <p>Owned end-to-end integration across API, database, and AI layers — resolved critical integration issues and delivered reliable, production-oriented backend components.</p>
                </div>
                <div className="experience-detail">
                  <span className="project-detail-mark">↗</span>
                  <p>Collaborated on debugging and hardening backend systems to support stable AI application behavior under real usage.</p>
                </div>
              </div>

              <div className="project-stack">
                {["Python", "FastAPI", "REST APIs", "Database Integration", "AI Integration"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
