export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />

      <div className="section-container contact-container">

        <span className="contact-label">
          06 / LET'S CONNECT
        </span>

        <h2>
          Let&apos;s  build  something
          <br />
          <span>useful.</span>
        </h2>

        <p>
          Open to opportunities across AI/ML, Generative AI,
          LLM systems and AI Backend Engineering.
        </p>

        <a
          href="mailto:simikumar571@gmail.com"
          className="contact-email"
        >
          simikumar571@gmail.com <span>↗</span>
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/Simi268"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
  href="https://www.linkedin.com/in/simi-kumari-46865b37b"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn ↗
</a>

          <a href="/resume.pdf" target="_blank">
            Resume ↗
          </a>
        </div>

      </div>
    </section>
  );
}