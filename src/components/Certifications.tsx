import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      className="section certifications-section"
      id="certifications"
    >
      <div className="section-container">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="section-heading certifications-heading">

          <div className="section-heading-meta">

            <span className="section-number lavender">
              05
            </span>

            <p className="section-kicker">
              CONTINUOUS LEARNING
            </p>

          </div>


          <div className="certifications-heading-content">

            <h2>
              Certifications
              <span className="heading-accent">.</span>
            </h2>

            <p className="section-intro">
              Structured learning across data science,
              machine learning and generative AI.
            </p>

          </div>

        </header>


        {/* =====================================================
            CERTIFICATION LIST
        ====================================================== */}

        <div className="certifications-list">

          {certifications.map((cert, index) => {

            const number = String(index + 1).padStart(2, "0");

            return (

              <article
                className={`certification-item cert-${index + 1}`}
                key={cert.title}
              >

                {/* Number */}

                <div className="cert-number">
                  {number}
                </div>


                {/* Main information */}

                <div className="cert-content">

                  <div className="cert-top">

                    <span className="cert-label">
                      {index === 1
                        ? "COURSEWORK"
                        : "CERTIFICATION"}
                    </span>

                    <span className="cert-dot" />

                  </div>


                  <h3>
                    {cert.title}
                  </h3>


                  <div className="cert-meta">

                    <span>
                      {cert.issuer}
                    </span>

                    <span className="cert-divider" />

                    <span>
                      {index === 1
                        ? "Independent Learning"
                        : "Credential Earned"}
                    </span>

                  </div>

                </div>


                {/* Action */}

                <div className="cert-action">

                  {cert.link ? (

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        View Certificate
                      </span>

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>

                  ) : (

                    <span className="cert-completed">
                      Completed
                    </span>

                  )}

                </div>


                {/* Accent */}

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