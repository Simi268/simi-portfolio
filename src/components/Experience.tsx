export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-container">

        {/* HEADER */}
        <header className="section-heading experience-heading">
          <span className="section-number lavender">02</span>

          <div>
            <p className="section-kicker">PROFESSIONAL JOURNEY</p>
            <h2>Experience</h2>

            <p className="section-intro">
              My learning journey and professional experience, building
              towards scalable, intelligent and impactful solutions.
            </p>
          </div>
        </header>

        {/* JOURNEY TIMELINE */}
        <div className="journey-timeline">

          {/* ================================
              INTERNSHALA — TRAINING
          ================================= */}

          <article className="journey-item journey-training">

            <div className="journey-card training-card">

              <div className="journey-card-header">
                <span className="journey-type training-type">
                  TRAINING
                </span>

                <span className="journey-period">
                  Jun 2025 — Aug 2025
                </span>
              </div>

              <h3>Data Science with AI Trainee</h3>

              <div className="journey-organization">
                <span>Internshala Trainings</span>
                <span className="journey-dot">•</span>
                <span>Online</span>
              </div>

              <div className="journey-divider" />

              <p className="journey-summary">
                Completed an 8-week structured training program in Data
                Science and AI, covering data analysis, visualization,
                machine learning, predictive analytics and a capstone
                project.
              </p>

              <div className="journey-work">
                <ul>
                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Worked with data analysis and visualization techniques
                      to explore and interpret datasets.
                    </p>
                  </li>

                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Applied machine learning concepts to predictive
                      analytics problems.
                    </p>
                  </li>

                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Completed a capstone project integrating concepts
                      covered throughout the training program.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="journey-stack">
                <span>Python</span>
                <span>Data Analysis</span>
                <span>Machine Learning</span>
                <span>Data Visualization</span>
                <span>Predictive Analytics</span>
              </div>

            </div>

            {/* TIMELINE NODE */}
            <div className="journey-node">
              <span className="node-core" />
            </div>

            {/* MILESTONE */}
            <div className="journey-milestone">
              FOUNDATION &amp; LEARNING
            </div>

          </article>


          {/* ================================
              FLYRANK AI — INTERNSHIP
          ================================= */}

          <article className="journey-item journey-internship">

            {/* MILESTONE */}
            <div className="journey-milestone">
              BUILDING &amp; DELIVERING
            </div>

            {/* TIMELINE NODE */}
            <div className="journey-node">
              <span className="node-core" />
            </div>

            <div className="journey-card internship-card">

              <div className="journey-card-header">

                <span className="journey-type internship-type">
                  INTERNSHIP
                </span>

                <div className="journey-current-wrap">
                  <span className="journey-period">
                    Jul 2026 — Present
                  </span>

                  <span className="journey-current">
                    <span className="current-dot" />
                    CURRENT
                  </span>
                </div>

              </div>

              <h3>AI Backend Engineer Intern</h3>

              <div className="journey-organization">
                <span>FLYRANK AI</span>
                <span className="journey-dot">•</span>
                <span>Remote</span>
              </div>

              <div className="journey-divider" />

              <p className="journey-summary">
                Building backend systems for AI-powered applications using
                Python and FastAPI, with a focus on API-driven workflows,
                database integration and LLM-enabled services.
              </p>

              <div className="journey-work">
                <ul>

                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Developing backend services and REST APIs for
                      AI application workflows.
                    </p>
                  </li>

                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Integrating LLM-powered functionality with application
                      services and backend architecture.
                    </p>
                  </li>

                  <li>
                    <span className="journey-bullet" />

                    <p>
                      Working across databases, debugging, integrations and
                      production-oriented backend development.
                    </p>
                  </li>

                </ul>
              </div>

              <div className="journey-stack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>REST APIs</span>
                <span>LLMs</span>
                <span>Databases</span>
              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}