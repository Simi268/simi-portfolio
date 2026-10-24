import * as portfolioData from "../data/portfolio";

type Project = {
title: string;
category?: string;
description: string;
stack?: string[];
github?: string;
live?: string;
};

/**

* Fallback projects are displayed only when portfolio.ts
* does not export a populated project list.
  */
  const fallbackProjects: Project[] = [
  {
  title: "AI News Classifier",
  category: "NLP / TRANSFORMER CLASSIFICATION",
  description:
  "A BERT-based news classification application with text preprocessing, tokenization, transformer inference, and an interactive deployed demo.",
  stack: [
  "Python",
  "PyTorch",
  "BERT",
  "Hugging Face Transformers",
  "Streamlit",
  ],
  github: "https://github.com/Simi268/News-classifier",
  live: "https://huggingface.co/spaces/Simi26/news-classifier-app",
  },
  {
  title: "Next Word Prediction",
  category: "NLP / DEEP LEARNING",
  description:
  "An LSTM-based language modeling project that learns sequential text patterns to predict the next word from an input sequence.",
  stack: ["Python", "TensorFlow", "Keras", "NLP"],
  github: "https://github.com/Simi268/next-word-prediction",
  },
  {
  title: "Movie Sentiment Analyzer",
  category: "NLP / TEXT CLASSIFICATION",
  description:
  "A natural language processing application that classifies movie reviews by sentiment using text-based machine learning techniques.",
  stack: ["Python", "NLP", "Machine Learning"],
  github: "https://github.com/Simi268/Movie-sentiment-analyzer",
  },
  {
  title: "Sentiment Analysis",
  category: "NLP / MACHINE LEARNING",
  description:
  "An end-to-end sentiment classification project using text preprocessing and feature extraction to prepare text for model inference.",
  stack: ["Python", "TF-IDF", "Flask", "Scikit-learn"],
  github: "https://github.com/Simi268/Sentiment-analysis",
  },
  {
  title: "Customer Churn Prediction",
  category: "PREDICTIVE ANALYTICS",
  description:
  "A predictive machine learning application that estimates customer churn from structured customer data through an interactive interface.",
  stack: ["Python", "TensorFlow", "Keras", "Streamlit"],
  github: "https://github.com/Simi268/Customer-churn-prediction",
  },
  {
  title: "Student Performance Prediction",
  category: "MACHINE LEARNING",
  description:
  "A supervised learning project that explores student-related features to predict academic performance.",
  stack: ["Python", "Scikit-learn", "Pandas"],
  },
  {
  title: "Heart Disease Prediction",
  category: "HEALTHCARE / MACHINE LEARNING",
  description:
  "A machine learning classification project that estimates heart disease risk from structured medical features.",
  stack: ["Python", "Scikit-learn", "Pandas"],
  github: "https://github.com/Simi268/heart-disease-prediction",
  },
  {
  title: "Bitcoin Sentiment Trader Analysis",
  category: "NLP / DATA ANALYSIS",
  description:
  "An exploratory project applying sentiment analysis and data analysis techniques to market-related text.",
  stack: ["Python", "NLP", "Pandas"],
  },
  ];

/**

* Safely retrieves an optional project-array export.
* The module itself is never cast to a project-only record.
  */
  function getProjectList(key: string): Project[] | undefined {
  const moduleExports: Record<string, unknown> = {
  ...portfolioData,
  };

const value = moduleExports[key];

if (!Array.isArray(value) || value.length === 0) {
return undefined;
}

return value as Project[];
}

const projects: Project[] =
getProjectList("moreProjects") ??
getProjectList("additionalProjects") ??
getProjectList("otherProjects") ??
fallbackProjects;

export default function MoreProjects() {
return ( <section className="more-projects" id="more-projects"> <div className="section-container"> <header className="more-projects-header"> <div> <p className="section-kicker">MORE WORK</p>

```
        <h2>
          More Projects<span className="heading-accent">.</span>
        </h2>
      </div>

      <a
        href="https://github.com/Simi268?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="more-projects-link"
        aria-label="View all projects on GitHub"
      >
        <span>View all on GitHub</span>
        <span aria-hidden="true">↗</span>
      </a>
    </header>

    <div className="project-grid">
      {projects.map((project, index) => {
        const github = project.github?.trim();
        const live = project.live?.trim();
        const link = live || github;

        return (
          <article
            className="small-project"
            key={`${project.title}-${index}`}
          >
            <div className="small-project-top">
              <span>{String(index + 1).padStart(2, "0")}</span>

              <span>{project.category || "PROJECT"}</span>
            </div>

            <div
              className="small-project-visual"
              aria-hidden="true"
            />

            <div className="small-project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="small-project-footer">
              <div className="small-project-stack">
                {(project.stack || []).slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small-project-arrow"
                  aria-label={`View ${project.title} ${
                    live ? "live demo" : "GitHub repository"
                  }`}
                  title={
                    live ? "View live demo" : "View GitHub repository"
                  }
                >
                  ↗
                </a>
              ) : (
                <span
                  className="small-project-arrow is-disabled"
                  aria-hidden="true"
                >
                  ↗
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>

);
}
