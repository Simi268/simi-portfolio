export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-wallpaper" aria-hidden="true">
        <div className="wallpaper-grid" />
        <div className="wallpaper-orb wallpaper-orb-one" />
        <div className="wallpaper-orb wallpaper-orb-two" />
        <div className="wallpaper-orb-three" />
        <div className="wallpaper-orbit wallpaper-orbit-one" />
        <div className="wallpaper-orbit wallpaper-orbit-two" />
        <div className="wallpaper-line wallpaper-line-one" />
        <div className="wallpaper-line wallpaper-line-two" />
        <span className="wallpaper-index">AI SYSTEMS · 01</span>
        <span className="wallpaper-caption">FROM REASONING TO RELIABLE SOFTWARE</span>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            <span>Open to software development &amp; AI/ML opportunities</span>
          </div>

          <div className="hero-role">
            <span>AGENTIC AI SYSTEMS</span><i /><span>BACKEND ENGINEERING</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-intro">Hi, I&apos;m</span>
            <span className="hero-title-name">Simi <em>Kumari.</em></span>
          </h1>

          <h2 className="hero-headline">
            I build <span>agentic AI systems</span> and intelligent backends.
          </h2>

          <p className="hero-description">
            From <strong>BeliefGraph&apos;s dependency-aware agent recovery</strong> to
            retrieval-grounded RAG applications, I turn LLM capabilities into
            reliable software—with Python, FastAPI, evaluation, and production-minded
            engineering at the core.
          </p>

          <div className="hero-proof-points" aria-label="Core focus areas">
            <span><i /> Agent systems</span>
            <span><i /> RAG &amp; retrieval</span>
            <span><i /> Production AI</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary"><span>Explore my work</span><b>↗</b></a>
            <a href="/SIMI_RESUME.pdf" target="_blank" rel="noreferrer" className="hero-secondary"><span>View resume</span><b>↗</b></a>
          </div>

          <div className="hero-socials">
            <span className="social-intro">Find me on</span>
            <a href="https://github.com/Simi268" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/in/simi-kumari-46865b37b/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>

        <div className="hero-agent-visual" aria-label="Abstract agentic AI system visualization">
          <div className="agent-visual-label agent-label-top"><span className="agent-live-dot" /> SYSTEM STATUS / ACTIVE</div>
          <div className="agent-orbit agent-orbit-a" />
          <div className="agent-orbit agent-orbit-b" />
          <div className="agent-orbit agent-orbit-c" />
          <div className="agent-connection agent-connection-one" />
          <div className="agent-connection agent-connection-two" />
          <div className="agent-connection agent-connection-three" />
          <div className="agent-node agent-node-one"><span>PLAN</span><b>01</b></div>
          <div className="agent-node agent-node-two"><span>RETRIEVE</span><b>02</b></div>
          <div className="agent-node agent-node-three"><span>REASON</span><b>03</b></div>
          <div className="agent-node agent-node-four"><span>EXECUTE</span><b>04</b></div>
          <div className="agent-prism-halo" />
          <div className="agent-prism">
            <div className="agent-prism-inner">
              <div className="prism-glyph" aria-hidden="true"><span /><span /><span /><i /></div>
              <div className="prism-wordmark">AGENT <b>CORE</b></div>
              <div className="prism-caption">ORCHESTRATE · OBSERVE · IMPROVE</div>
            </div>
          </div>
          <div className="agent-float-card agent-card-memory"><span className="agent-card-icon">⌘</span><span><b>Memory graph</b><small>Context connected</small></span><i /></div>
          <div className="agent-float-card agent-card-eval"><span className="agent-card-icon">✓</span><span><b>Evaluation</b><small>Outputs verified</small></span><i /></div>
          <div className="agent-float-card agent-card-tools"><span className="agent-card-icon">↗</span><span><b>Tool execution</b><small>Actions orchestrated</small></span><i /></div>
          <div className="agent-visual-label agent-label-bottom">INTELLIGENCE, WITH ENGINEERING AT ITS CORE <span>✳</span></div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-title">TOOLS &amp; IDEAS</div>
        <span>Python</span><span>FastAPI</span><span>LLMs</span><span>RAG</span>
        <span>React / TypeScript</span><span>PostgreSQL</span><span>Vector Search</span><span>Pytest</span>
        <div className="hero-bottom-end"><i /> FROM PROTOTYPE TO PRODUCT</div>
      </div>
    </section>
  );
}
