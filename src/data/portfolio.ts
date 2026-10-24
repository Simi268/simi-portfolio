export type FeaturedProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  built: string[];
  stack: string[];
  accent: "coral" | "lavender" | "sage";
  image?: string;
  github: string;
  live?: string;
};
import beliefgraphImage from "../assets/projects/beliefgraph.png";
import medintelImage from "../assets/projects/medintel.png";
import learningCompanionImage from "../assets/projects/learning-companion.png";

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    title: "BeliefGraph",
    category: "AI Systems · Dependency Graphs · Backend",
    description:
      "A dependency-aware recovery system for AI-agent workflows. It tracks how beliefs, conclusions, plans, and actions depend on one another so changed assumptions can trigger targeted recovery rather than a full restart.",
    built: [
      "Dependency graph and downstream impact analysis",
      "Selective invalidation and recovery of affected nodes",
      "FastAPI REST endpoints with Pydantic models",
      "Automated tests and controlled benchmark evaluation",
    ],
    stack: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "Docker", "Pytest", "React", "TypeScript"],
    accent: "coral",
    image: beliefgraphImage,
    github: "https://github.com/Simi268/belief-graph",
    live: "https://beliefgraph-frontend.onrender.com/",
  },
  {
    number: "02",
    title: "MedIntel AI",
    category: "Full-Stack AI · RAG · Healthcare",
    description:
      "A healthcare intelligence application combining medical document processing, retrieval-augmented generation, conversational AI, and backend services.",
    built: [
      "Medical report interpretation and document extraction",
      "RAG pipeline for context-aware responses from uploaded documents",
      "OCR processing with Tesseract and PyMuPDF",
      "FastAPI services, database persistence, and conversation history",
    ],
    stack: ["React", "TypeScript", "FastAPI", "LangChain", "PostgreSQL", "Groq API", "Tesseract OCR", "PyMuPDF"],
    accent: "lavender",
    image: medintelImage,
    github: "https://github.com/Simi268/Medintel-AI",
    live: "https://medintel-ai-f9gv.vercel.app/",
  },
  {
    number: "03",
    title: "AI Learning Companion",
    category: "LLM · RAG · Semantic Retrieval",
    description:
      "A document-aware learning assistant that retrieves relevant context from uploaded PDFs before generating grounded answers.",
    built: [
      "PDF ingestion, document chunking, and embedding generation",
      "ChromaDB vector storage and semantic similarity search",
      "Sentence Transformers embeddings",
      "Groq LLM response generation grounded in retrieved content",
    ],
    stack: ["Python", "LangChain", "ChromaDB", "Sentence Transformers", "Groq API", "Streamlit"],
    accent: "sage",
    image: learningCompanionImage,
    github: "https://github.com/Simi268/ai-learning-companion-rag",
    live: "https://ai-learning-companion-rag-bgbu6sdwaaixj59evf7t2u.streamlit.app/",
  },
];

/* =========================================================
   MORE PROJECTS
   ========================================================= */

export const moreProjects = [
  {
    title: "AI News Classifier",
    category: "NLP · Transformer Classification",
    description:
      "A BERT-based news classification application that predicts news categories from text, with preprocessing, tokenization, inference, and a deployed interactive demo.",
    stack: ["Python", "PyTorch", "BERT", "Hugging Face Transformers", "Streamlit"],
    github: "https://github.com/Simi268/News-classifier",
    live: "https://huggingface.co/spaces/Simi26/news-classifier-app",
  },

  {
    title: "Next Word Prediction",
    category: "Deep Learning · NLP",
    description:
      "An LSTM-based language modelling project that predicts the next likely word from a given text sequence.",
    stack: [
      "LSTM",
      "TensorFlow",
      "Keras",
      "NLP",
    ],
    github:
      "https://github.com/Simi268/next-word-prediction",
  },

  {
    title: "Movie Sentiment Analyzer",
    category: "NLP · Deep Learning",
    description:
      "A natural-language processing application for analysing movie reviews and predicting their sentiment.",
    stack: [
      "Python",
      "NLP",
      "Deep Learning",
      "Streamlit",
    ],
    github:
      "https://github.com/Simi268/Movie-sentiment-analyzer",
  },

  {
    title: "Sentiment Analysis",
    category: "Natural Language Processing",
    description:
      "A sentiment analysis project focused on extracting and classifying sentiment from textual data.",
    stack: [
      "Python",
      "NLP",
      "Machine Learning",
      "Pandas",
    ],
    github:
      "https://github.com/Simi268/Sentiment-analysis",
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "A predictive machine learning application for identifying customers at risk of churn from customer behaviour and account data.",
    stack: [
      "Python",
      "TensorFlow",
      "Pandas",
      "Streamlit",
    ],
    github:
      "https://github.com/Simi268/Customer-churn-prediction",
  },
  {
    title: "Student Performance Predictor",
    category: "Machine Learning",
    description:
      "A production-ready end-to-end Machine Learning application that predicts a student’s Maths score based on demographic and academic features. The project covers the entire ML lifecycle — from data ingestion and model training to Dockerized deployment",
    stack: [
      "Python",
      "Scikit-learn",
      "Docker",
      "Flask",
    ],
    github:
      "https://github.com/Simi268/MLproject",
  },
  {
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    description:
      "A classification-based application for estimating heart disease risk using patient health attributes.",
    stack: [
      "Python",
      "Scikit-learn",
      "Flask",
      "SQLite",
    ],
    github:
      "https://github.com/Simi268/heart-disease-prediction",
  },



  {
    title: "Bitcoin Sentiment Trader Analysis",
    category: "Data Analysis",
    description:
      "A data analysis project exploring relationships between Bitcoin market behaviour, trader activity, and sentiment data.",
    stack: [
      "Python",
      "Pandas",
      "Data Analysis",
      "Visualization",
    ],
    github:
      "https://github.com/Simi268/bitcoin-sentiment-trader-analysis",
  },
];

/* =========================================================
   SKILLS
   ========================================================= */

export const skillGroups = [
  {
    title: "Programming & Core CS",
    accent: "coral",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "C++",
      "OOP",
      "Data Structures & Algorithms",
      "Problem Solving",
      "DBMS"
    ]
  },

  {
    title: "Frontend Development",
    accent: "lavender",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "REST API Integration"
    ]
  },

  {
    title: "Backend & APIs",
    accent: "blue",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "RESTful APIs",
      "API Integration",
      "Backend Development",
      "Authentication",
      "Application Architecture"
    ]
  },

  {
    title: "Databases & Data",
    accent: "green",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Database Design",
      "CRUD Operations",
      "Data Modeling"
    ]
  },

  {
    title: "AI & Machine Learning",
    accent: "orange",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "BERT",
      "Hugging Face Transformers",
      "Pandas",
      "NumPy"
    ]
  },

  {
    title: "Generative AI & LLMs",
    accent: "pink",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "Groq API",
      "SentenceTransformers",
      "Vector Embeddings",
      "Semantic Search",
      "ChromaDB",
      "Prompt Engineering"
    ]
  },

  {
    title: "Development & Deployment",
    accent: "yellow",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Streamlit",
      "Hugging Face Spaces",
      "Vercel",
      "API Testing",
      "Debugging"
    ]
  }
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */
export const certifications = [
  {
    title: "Generative AI with LangChain and Hugging Face",
    issuer: "Udemy · Jun 2026",
    type: "Certification",
    status: "Completed",
    link: null,
    accent: "coral",
  },
  {
    title: "Data Science and Machine Learning",
    issuer: "Independent Learning · Dec 2025",
    type: "Coursework",
    status: "Completed",
    link: null,
    accent: "lavender",
  },
  {
    title: "Data Science with AI",
    issuer: "Internshala Trainings · Jul 2025",
    type: "Certification",
    status: "Completed",
    link: null,
    accent: "sage",
  },
];
