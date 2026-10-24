import { featuredProjects } from "../data/portfolio";

export default function FeaturedProjects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <header className="section-heading">
          <div className="section-heading-meta">
            <span className="section-number sage">03</span>
            <p className="section-kicker">SELECTED WORK</p>
          </div>
          <div className="project-heading-content">
            <h2>Featured Projects<span className="heading-accent">.</span></h2>
            <p className="section-intro">
              A selection of systems I have built across backend engineering,
              AI applications, retrieval, and intelligent workflows.
            </p>
          </div>
        </header>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <article
              className={`featured-project ${index % 2 === 1 ? "project-reverse" : ""}`}
              data-project={project.number}
              key={project.title}
            >
              <div className={`project-media project-media-${project.accent}`}>
                {project.image ? (
                  <a
                    className="project-image-link"
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <div className="project-frame">
                      <img src={project.image} alt={`${project.title} application preview`} loading="lazy" />
                      <span className="project-frame-shine" />
                      <span className="project-view"><span>EXPLORE PROJECT</span><span>↗</span></span>
                    </div>
                  </a>
                ) : (
                  <div className="project-placeholder">
                    <span className="placeholder-number">{project.number} / SELECTED PROJECT</span>
                    <div className="placeholder-center">
                      <span className="placeholder-ring ring-a" />
                      <span className="placeholder-ring ring-b" />
                      <span className="placeholder-core" />
                    </div>
                    <span className="placeholder-label">DEPENDENCIES · RECOVERY · SYSTEMS</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-built">
                  <span className="project-small-title">WHAT I BUILT</span>
                  <ul>
                    {project.built.map((item) => (
                      <li key={item}><span className="project-detail-mark">↗</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="project-stack">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <div className="project-links">
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    GitHub <span>↗</span>
                  </a>
                  {project.live && (
                    <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
                      Live Demo <span>↗</span>
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
