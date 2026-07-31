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
import medintelImage from "../assets/projects/medintel.png";
import learningCompanionImage from "../assets/projects/learning-companion.png";
import newsClassifierImage from "../assets/projects/news-classifier.png";

export const featuredProjects: FeaturedProject[] = [
  {
  number: "01",
  title: "MedIntel AI",
  category: "Full-Stack AI · RAG · Healthcare",

  description:
    "An AI-powered healthcare assistant combining medical report analysis, retrieval-augmented generation, conversational AI, and backend services in one intelligent platform.",

  built: [
    "RAG-powered medical knowledge retrieval",
    "Medical report analysis and OCR workflows",
    "Conversational AI with LLM integration",
    "FastAPI backend with persistent application data",
  ],

  stack: [
    "React",
    "TypeScript",
    "FastAPI",
    "LangChain",
    "RAG",
    "PostgreSQL",
    "Groq",
    "OCR",
  ],

  accent: "coral",

  image: medintelImage,

  github: "https://github.com/Simi268/Medintel-AI",
  live: "https://medintel-ai-f9gv.vercel.app/",
},

  {
  number: "02",
  title: "AI Learning Companion",
  category: "LLM · RAG · Semantic Retrieval",

  description:
    "A document-aware AI learning assistant that retrieves relevant context from uploaded material before generating grounded, context-aware responses.",

  built: [
    "Document ingestion and chunking pipeline",
    "Vector embeddings and semantic retrieval",
    "ChromaDB-backed vector storage",
    "LLM orchestration and contextual response generation",
  ],

  stack: [
    "LangChain",
    "RAG",
    "ChromaDB",
    "SentenceTransformers",
    "Groq",
    "Streamlit",
  ],

  accent: "lavender",

  image: learningCompanionImage,

  github:
    "https://github.com/Simi268/ai-learning-companion-rag",

  live:
    "https://ai-learning-companion-rag-bgbu6sdwaaixj59evf7t2u.streamlit.app/",
},

  {
  number: "03",
  title: "News Classifier",
  category: "NLP · Transformers · BERT",

  description:
    "A transformer-based NLP application that classifies news articles into categories using a fine-tuned BERT model.",

  built: [
    "News text preprocessing and tokenization",
    "Fine-tuned BERT classification model",
    "Training and evaluation pipeline",
    "Interactive inference workflow",
  ],

  stack: [
    "BERT",
    "Transformers",
    "PyTorch",
    "Hugging Face",
    "NLP",
    "Python",
  ],

  accent: "sage",

  image: newsClassifierImage,

  github: "https://github.com/Simi268/News-classifier",

  live:
    "https://huggingface.co/spaces/Simik26/news-classifier-app",
},
];

/* =========================================================
   MORE PROJECTS
   ========================================================= */

export const moreProjects = [
  {
    title: "KORVIX",
    category: "AI Systems",
    description:
      "An AI execution system designed to transform meetings, decisions, and commitments into structured, accountable workflows.",
    stack: ["AI", "LLMs", "FastAPI", "React"],
    github: "https://github.com/Simi268/KORVIX",
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
    title: "Languages",
    skills: ["Python", "SQL"],
    accent: "coral",
  },

  {
    title: "AI / Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Transformers",
      "BERT",
    ],
    accent: "lavender",
  },

  {
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "Vector Embeddings",
      "Semantic Search",
      "SentenceTransformers",
    ],
    accent: "sage",
  },

  {
    title: "ML & Data Stack",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Pandas",
      "NumPy",
    ],
    accent: "peach",
  },

  {
    title: "Backend & Data",
    skills: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQLite",
      "ChromaDB",
    ],
    accent: "coral",
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      
      "Streamlit",
      "Render",
      "Vercel",
      "Hugging Face Spaces",
    ],
    accent: "lavender",
  },
];

/* =========================================================
   CERTIFICATIONS
   ========================================================= */
export const certifications = [
  {
    title: "Data Science with Python",
    issuer: "Internshala",
    type: "Certification",
    status: "Credential Earned",
    link: null, // we'll add the certificate later
    accent: "coral",
  },

  {
    title: "Complete Data Science and Machine Learning",
    issuer: "Independent Learning",
    type: "Coursework",
    status: "Course Completed",
    link: null,
    accent: "lavender",
  },

  {
    title: "Complete Generative AI",
    issuer: "Udemy",
    type: "Certification",
    status: "Credential Earned",
    link: null, // we'll add certificate later
    accent: "sage",
  },
];