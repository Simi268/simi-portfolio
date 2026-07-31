export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-status"><span className="status-dot" />Open to AI/ML & Backend AI opportunities</div>
          <p className="eyebrow"><strong className="role-ai">AI/ML ENGINEER</strong><span /><strong className="role-backend">AI BACKEND ENGINEER</strong></p>
          <h1>Hi , I'm </h1>
          <h1>Simi <span className="name"> Kumari.</span></h1>
          <h2>Building intelligent systems<br />from <span className="highlight">models to products.</span></h2>
          <p className="hero-description">I build AI applications across machine learning, LLMs, RAG and backend engineering — connecting intelligent models with retrieval, APIs and reliable software systems.</p>
          <div className="hero-actions"><a href="#projects" className="primary-btn">Explore my work <span>↘</span></a><a href="/resume.pdf" target="_blank" className="secondary-btn">View resume <span>↗</span></a></div>
          <div className="hero-socials"><a href="https://github.com/Simi268" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/simi-kumari-46865b37b/">LinkedIn ↗</a></div>
        </div>

        <div className="system-visual" aria-hidden="true">
          <div className="system-aura aura-one" /><div className="system-aura aura-two" />
          <svg className="system-lines" viewBox="0 0 520 420" preserveAspectRatio="none">
            <path d="M92 112 C170 112 180 202 260 202" /><path d="M92 300 C170 300 180 218 260 218" />
            <path d="M304 210 C365 210 360 122 430 122" /><path d="M304 210 C365 210 360 306 430 306" />
          </svg>
          <div className="system-node node-data"><small>01</small><span>DATA</span></div>
          <div className="system-node node-retrieval"><small>02</small><span>RETRIEVAL</span></div>
          <div className="system-node node-llm"><small>03</small><span>LLM</span><b>INTELLIGENCE</b></div>
          <div className="system-node node-api"><small>04</small><span>API</span></div>
          <div className="system-node node-product"><small>05</small><span>PRODUCT</span></div>
          <span className="flow-dot flow-one" /><span className="flow-dot flow-two" /><span className="flow-dot flow-three" />
          <div className="system-caption"><span>AI SYSTEM / 2026</span><span>RETRIEVAL → INTELLIGENCE → PRODUCT</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>PYTHON</span><span>LLMs</span><span>RAG</span><span>LANGCHAIN</span><span>FASTAPI</span><span>POSTGRESQL</span></div>
    </section>
  );
}
