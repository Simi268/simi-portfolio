export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-container">

        <header className="section-heading education-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-kicker">FOUNDATION</p>
            <h2>Education</h2>
          </div>
        </header>

        <div className="education-record">

          {/* LEFT — DEGREE */}
          <div className="education-main">
            <span className="record-label">DEGREE</span>

            <h3>
              B.Tech in Computer Science
              <br />
              & Engineering
            </h3>

            <p className="education-description">
              Building a foundation across computer science,
              artificial intelligence and software engineering.
            </p>

            <div className="education-focus">
              <span>DSA</span>
              <span>OOPs</span>
              <span>Computer Network</span>
              <span>DBMS</span>
            </div>
          </div>

          {/* RIGHT — ACADEMIC PROFILE */}
          <div className="education-profile">

            <span className="education-ghost" aria-hidden="true">
              27
            </span>

            <div className="education-profile-top">
              <span className="record-label">
                ACADEMIC PROFILE
              </span>

              <span className="education-status">
                <i />
                IN PROGRESS
              </span>
            </div>

            <div className="education-university">
              <span className="record-label">UNIVERSITY</span>

              <p>
                IKG Punjab Technical
                <br />
                University
              </p>
            </div>

            <div className="education-profile-grid">

              <div className="education-detail">
                <span className="record-label">DURATION</span>
                <p>July 2023 — June 2027</p>
              </div>

              <div className="education-detail education-cgpa">
                <span className="record-label">CGPA</span>

                <p>
                  <strong>8.56</strong>
                  <span>/ 10</span>
                </p>
              </div>

            </div>

            {/* TIMELINE */}
            <div className="education-timeline">

              <div className="timeline-labels">
                <span>2023</span>
                <span>2027</span>
              </div>

              <div className="timeline-track">
                <span className="timeline-progress" />
                <span className="timeline-start" />
                <span className="timeline-current" />
                <span className="timeline-end" />
              </div>

              <div className="timeline-caption">
                <span>START</span>
                <span>EXPECTED GRADUATION</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}