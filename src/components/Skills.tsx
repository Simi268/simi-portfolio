import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">

        <header className="section-heading skills-heading">
          <span className="section-number coral">04</span>

          <div>
            <p className="section-kicker">HOW I BUILD</p>
            <h2>Technical Toolkit</h2>

            <p className="section-intro">
              Technologies I use to build intelligent systems,
              from models and retrieval to APIs and deployment.
            </p>
          </div>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                className={`skill-group skill-${group.accent}`}
                key={group.title}
              >
                {/* Decorative ghost number */}
                <span className="skill-ghost-number" aria-hidden="true">
                  {number}
                </span>

                {/* Top */}
                <div className="skill-card-top">
                  <span className="skill-index">{number}</span>

                  <div className="skill-decoration" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                {/* Content */}
                <div className="skill-card-content">
                  <h3>{group.title}</h3>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="skill-card-line" aria-hidden="true">
                  <span />
                  <i />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}