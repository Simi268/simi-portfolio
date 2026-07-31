import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      className="section certifications-section"
      id="certifications"
    >
      <div className="section-container">

        <header className="section-heading certifications-heading">
          <span className="section-number lavender">05</span>

          <div>
            <p className="section-kicker">CONTINUOUS LEARNING</p>
            <h2>Certifications</h2>

            <p className="section-intro">
              Structured learning across data science,
              machine learning and generative AI.
            </p>
          </div>
        </header>

        <div className="certifications-list">
          {certifications.map((cert, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                className={`certification-item cert-${index + 1}`}
                key={cert.title}
              >
                {/* giant background number */}
                <span
                  className="cert-ghost-number"
                  aria-hidden="true"
                >
                  {number}
                </span>

                <div className="cert-number">
                  {number}
                </div>

                <div className="cert-content">
                  <div className="cert-top">
                    <span className="cert-label">
                      {index === 1
                        ? "COURSEWORK"
                        : "CERTIFICATION"}
                    </span>

                    <span className="cert-dot" />
                  </div>

                  <h3>{cert.title}</h3>

                  <div className="cert-meta">
                    <span>{cert.issuer}</span>

                    <span className="cert-divider" />

                    <span>
                      {index === 1
                        ? "Independent Learning"
                        : "Credential Earned"}
                    </span>
                  </div>
                </div>

                <div className="cert-action">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                      <span>↗</span>
                    </a>
                  ) : (
                    <span className="cert-completed">
                      Completed
                    </span>
                  )}
                </div>

                <div
                  className="cert-accent-line"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}