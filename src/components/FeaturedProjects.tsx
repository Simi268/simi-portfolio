import { featuredProjects } from "../data/portfolio";

export default function FeaturedProjects() {
  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="section-container">

        {/* SECTION HEADER */}
        <header className="section-heading project-heading">
          <span className="section-number sage">
            03
          </span>

          <div>
            <p className="section-kicker">
              SELECTED WORK
            </p>

            <h2>Featured Projects</h2>

            <p className="section-intro">
              Selected systems demonstrating depth across AI,
              retrieval, NLP and backend engineering.
            </p>
          </div>
        </header>

        {/* FEATURED PROJECTS */}
        <div className="featured-projects">

          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              data-project={project.number}
              className={`featured-project ${
                index % 2 !== 0 ? "project-reverse" : ""
              }`}
            >

              {/* =========================
                  PROJECT SCREENSHOT
              ========================== */}

              <div
                className={`project-media accent-${project.accent}`}
              >
                {project.image ? (

                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-link"
                    aria-label={
                      project.live
                        ? `View live demo of ${project.title}`
                        : `View ${project.title} on GitHub`
                    }
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} application preview`}
                      loading="lazy"
                    />

                    <div className="project-image-overlay">
                      <span>
                        {project.live
                          ? "View Live Project ↗"
                          : "View on GitHub ↗"}
                      </span>
                    </div>
                  </a>

                ) : (

                  /* FALLBACK IF SCREENSHOT IS NOT ADDED */

                  <div className="project-placeholder">

                    <div className="placeholder-top">
                      <span>{project.number}</span>
                      <span>PROJECT PREVIEW</span>
                    </div>

                    <div className="placeholder-art">

                      <span className="placeholder-orb" />

                      <span className="placeholder-line line-one" />

                      <span className="placeholder-line line-two" />

                      <strong>
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </strong>

                    </div>

                    <p>Project preview</p>

                  </div>
                )}
              </div>


              {/* =========================
                  PROJECT CONTENT
              ========================== */}

              <div className="project-content">

                {/* PROJECT META */}

                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>


                {/* PROJECT TITLE */}

                <h3>
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>


                {/* WHAT I BUILT */}

                <div className="project-built">

                  <span className="project-small-title">
                    WHAT I BUILT
                  </span>

                  <ul>
                    {project.built.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>


                {/* TECH STACK */}

                <div className="project-stack">

                  {project.stack.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>


                {/* =========================
                    PROJECT ACTIONS
                ========================== */}

                <div className="project-links">

                  {/* LIVE DEMO */}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-live"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <span>
                        Live Demo
                      </span>

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}


                  {/* GITHUB */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-github"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <span>
                        GitHub
                      </span>

                      <span aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}