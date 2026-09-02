
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Raja<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Raja
              <br />
              <span>Full Stack Developer</span>
            </h1>

            <p className="hero-text">
              I build modern, responsive and user-friendly web applications
              using React, Node.js, MongoDB and JavaScript.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>{`const developer = {
  name: "Raja",
  role: "Full Stack Developer",
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript"
  ],
  passion: "Building Web Apps"
};`}</pre>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Turning Ideas Into Digital Experiences</h2>
          </div>

          <div className="about-content">
            <div className="about-number">01</div>

            <div>
              <p>
                I am a B.Sc Computer Science student at Madura College with
                a strong interest in Full Stack Development and modern web
                technologies.
              </p>

              <p>
                I enjoy creating complete web applications, working with
                APIs, managing databases and building clean user interfaces.
              </p>

              <p>
                My goal is to continuously improve my technical skills and
                build useful products that solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p>MY SKILLS</p>
            <h2>Technologies I Work With</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">01</div>
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React.js</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">02</div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">03</div>
              <h3>Database</h3>
              <p>MongoDB and database management</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">04</div>
              <h3>Programming</h3>
              <p>JavaScript and Python</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="section-heading">
            <p>MY PROJECTS</p>
            <h2>Things I've Built</h2>
          </div>

          <div className="projects-grid">
            {/* PROJECT 01 */}
            <div className="project-card">
              <div className="project-info">
                <span className="project-label">
                  FULL STACK PROJECT
                </span>

                <h3>Raja E-Commerce</h3>

                <p>
                  A full stack e-commerce web application developed to
                  provide a modern and user-friendly online shopping
                  experience. The project includes frontend development,
                  backend APIs, product management and database integration.
                </p>

                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

                <a href="#" className="project-link">
                  View Project →
                </a>
              </div>

              <div className="project-visual">
                <div className="project-logo">R</div>

                <h4>Raja E-Commerce</h4>

                <p>Online Shopping Web Application</p>
              </div>
            </div>

            {/* PROJECT 02 */}
            <div className="project-card">
              <div className="project-info">
                <span className="project-label">
                  SOCIAL MEDIA PROJECT
                </span>

                <h3>Connectly</h3>

                <p>
                  An Instagram-inspired social media web application
                  designed with a modern social platform interface. The
                  project includes frontend UI, backend APIs and database
                  management.
                </p>

                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </div>

                <a href="#" className="project-link">
                  View Project →
                </a>
              </div>

              <div className="project-visual">
                <div className="project-logo">C✦</div>

                <h4>Connectly</h4>

                <p>Instagram-Inspired Social Media App</p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section education">
          <div className="section-heading">
            <p>EDUCATION</p>
            <h2>My Academic Journey</h2>
          </div>

          <div className="education-card">
            <div className="education-year">CURRENT</div>

            <div>
              <div className="degree-title">
                <div className="barcode"></div>


              <h3>B.Sc Computer Science </h3>

                <div className="barcode"></div>
              </div>

              <h4>Madura College</h4>

              <p>
                Building a strong foundation in computer science,
                programming and software development.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section certifications">
          <div className="section-heading">
            <p>CERTIFICATIONS</p>
            <h2>My Certificates</h2>
          </div>

          <div className="certificates-grid">
            {/* CERTIFICATE 01 */}
            <div
              className="certificate-card certificate-clickable"
              onClick={() =>
                setSelectedCertificate("/certificates/certificate1.jpg")
              }
            >
              <div className="certificate-image">
                <img
                  src="/certificates/certificate1.jpg"
                  alt="GUVI Certificate 1"
                />
              </div>

              <div className="certificate-content">
                <span>GUVI</span>

                <h3>Full Stack Development Certificate</h3>

                <p>
                  Certificate earned through GUVI for successfully
                  completing the course.
                </p>

                <button
                  className="certificate-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(
                      "/certificates/certificate1.jpg"
                    );
                  }}
                >
                  View Certificate →
                </button>
              </div>
            </div>

            {/*
            CERTIFICATE 02

            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="/certificates/certificate2.jpg"
                  alt="GUVI Certificate 2"
                />
              </div>

              <div className="certificate-content">
                <span>GUVI</span>
                <h3>Web Development Certificate</h3>

                <p>
                  Certificate earned through GUVI for successfully
                  completing the course.
                </p>
              </div>
            </div>
            */}

            {/*
            CERTIFICATE 03

            <div className="certificate-card">
              <div className="certificate-image">
                <img
                  src="/certificates/certificate3.jpg"
                  alt="GUVI Certificate 3"
                />
              </div>

              <div className="certificate-content">
                <span>GUVI</span>
                <h3>Programming Certificate</h3>

                <p>
                  Certificate earned through GUVI for successfully
                  completing the course.
                </p>
              </div>
            </div>
            */}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services">
          <div className="section-heading">
            <p>WHAT I DO</p>
            <h2>My Development Services</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span>01</span>

              <h3>Web Development</h3>

              <p>
                Responsive and modern websites using HTML, CSS,
                JavaScript and React.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>

              <h3>Full Stack Applications</h3>

              <p>
                Complete web applications with frontend, backend,
                APIs and databases.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>

              <h3>UI Development</h3>

              <p>
                Clean, responsive and user-friendly interfaces for
                web applications.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="contact-box">
            <p>GET IN TOUCH</p>

            <h2>
              Let's Build Something
              <br />
              <span>Great Together.</span>
            </h2>

            <p className="contact-text">
              Have a project idea or want to connect? Feel free to reach out.
            </p>

            <div className="contact-details">
              <p>
                <strong>Mobile:</strong>{" "}
                <a href="tel:6383397302">6383397302</a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:rajar2992638@gmail.com">
                  rajar2992638@gmail.com
                </a>
              </p>

              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/rajar2992638-gif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/rajar2992638-gif
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>
            Raja<span>.</span>
          </strong>

          <p>Full Stack Developer</p>
        </div>

        <p>© 2026 Raja. All rights reserved.</p>
      </footer>

      {/* CERTIFICATE FULLSCREEN MODAL */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            className="certificate-close"
            onClick={() => setSelectedCertificate(null)}
          >
            ✕
          </button>

          <img
            src={selectedCertificate}
            alt="Certificate Fullscreen"
            className="certificate-fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;

