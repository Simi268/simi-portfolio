import { moreProjects } from "../data/portfolio";

export default function MoreProjects() {
  return (
    <section className="more-projects" id="more-projects">
      <div className="section-container">

        <div className="more-projects-header">
          <div>
            <p className="section-kicker">MORE WORK</p>
            <h2>More Projects</h2>
          </div>

          <a
            href="https://github.com/Simi268"
            target="_blank"
            rel="noreferrer"
          >
            View all on GitHub ↗
          </a>
        </div>

        <div className="project-grid">
          {moreProjects.map((project, index) => (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="small-project"
              key={project.title}
              aria-label={`View ${project.title} on GitHub`}
            >
              <article>
                <div className="small-project-top">
                  <span>{String(index + 4).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="small-project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="small-project-arrow" aria-hidden="true">
                  ↗
                </div>
              </article>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}