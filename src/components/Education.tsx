export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-container">
        <header className="section-heading">
          <div className="section-heading-meta">
            <span className="section-number coral">01</span>
            <p className="section-kicker">FOUNDATION</p>
          </div>

          <div>
            <h2>Education<span className="heading-accent">.</span></h2>
            <p className="section-intro">
              Building a strong foundation in computer science, software
              engineering and intelligent systems.
            </p>
          </div>
        </header>

        <div className="education-record">
          <div className="education-main">
            <span className="record-label">DEGREE</span>

            <h3>
              B.Tech in Computer Science
              <br />
              &amp; Engineering
            </h3>

            <p>
              Building a foundation across computer science, artificial
              intelligence and software engineering.
            </p>

            <div className="education-focus">
              <span>DSA</span>
              <span>OOP</span>
              <span>Computer Networks</span>
              <span>DBMS</span>
            </div>
          </div>

          <aside className="education-profile">
            <div className="education-profile-top">
              <span className="education-status">
                <i />
                ACADEMIC PROFILE
              </span>
              <span>IN PROGRESS</span>
            </div>

            <div className="education-university">
              <small>UNIVERSITY</small>
              <p>IKG Punjab Technical University</p>
            </div>

            <div className="education-profile-grid">
              <div className="education-detail">
                <span>DURATION</span>
                <p>July 2023 — June 2027</p>
              </div>

              <div className="education-detail education-cgpa">
                <span>CGPA</span>
                <p>
                  <strong>8.6</strong>
                  <span>/ 10</span>
                </p>
              </div>
            </div>

            <div className="education-timeline">
              <div className="timeline-labels">
                <span>2023</span>
                <span>2026</span>
                <span>2027</span>
              </div>

              <div className="timeline-track">
                <span className="timeline-progress" />
                <i className="timeline-start" />
                <i className="timeline-current" />
                <i className="timeline-end" />
              </div>

              <div className="timeline-caption">
                <span>START</span>
                <span>CURRENT</span>
                <span>EXPECTED GRADUATION</span>
              </div>
            </div>

            <strong className="education-ghost" aria-hidden="true">27</strong>
          </aside>
        </div>
      </div>
    </section>
  );
}
