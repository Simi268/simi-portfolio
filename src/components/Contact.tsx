export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow" aria-hidden="true" />

      <div className="section-container contact-container">

        {/* =====================================================
            LABEL
        ====================================================== */}

        <div className="contact-heading-meta">

          <span className="contact-number">
            06
          </span>

          <span className="contact-label">
            LET&apos;S CONNECT
          </span>

        </div>


        {/* =====================================================
            MAIN MESSAGE
        ====================================================== */}

        <div className="contact-main">

          <h2>
            Let&apos;s build
            <br />
            something <span>useful.</span>
          </h2>

          <p>
            Open to opportunities across AI/ML, Generative AI,
            LLM systems and AI Backend Engineering.
          </p>

        </div>


        {/* =====================================================
            EMAIL
        ====================================================== */}

        <a
          href="mailto:simikumar571@gmail.com"
          className="contact-email"
        >
          <span>
            simikumar571@gmail.com
          </span>

          <span aria-hidden="true">
            ↗
          </span>
        </a>


        {/* =====================================================
            EXTERNAL LINKS
        ====================================================== */}

        <div className="contact-links">

          <a
            href="https://github.com/Simi268"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/simi-kumari-46865b37b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>

          <a
            href="/SIMI_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
            <span>↗</span>
          </a>

        </div>


        {/* =====================================================
            CLOSING LINE
        ====================================================== */}

        <div className="contact-footer-line">
          <span />
          <p>BUILD • LEARN • CREATE</p>
          <span />
        </div>

      </div>
    </section>
  );
}