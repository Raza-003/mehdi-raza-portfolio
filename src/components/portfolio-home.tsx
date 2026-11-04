"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Menu,
  Moon,
  Smartphone,
  Sparkles,
  Sun,
  X,
  Zap,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { projects, skills } from "@/data/portfolio";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export function PortfolioHome() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const goTo = (item: string) => {
    setActive(item);
    setMenuOpen(false);
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const theme = dark ? "theme-dark" : "theme-light";

  return (
    <main className={`portfolio-shell ${theme}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setActive("Home")}>
          <span className="brand-mark">
            MR<span>.</span>
          </span>
          <span className="brand-copy">
            MEHNDI RAZA<small>FLUTTER DEVELOPER</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item}
              className={active === item ? "nav-link active" : "nav-link"}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="top-contact" href="mailto:mehdiraza019mr@gmail.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button mobile-menu-button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)}>
                {item}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="main-layout">
        <aside className="side-rail">
          <span className="rail-label">PORTFOLIO / 2026</span>
          <div className="rail-line" />
          <span className="rail-vertical">DESIGNING · BUILDING · SHIPPING</span>
          <div className="rail-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <ExternalLink size={17} />
            </a>
          </div>
        </aside>

        <div className="content-column">
          <section id="home" className="hero-section section-anchor">
            <div className="hero-copy">
              <motion.div
                className="eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="status-dot" /> OPEN TO FLUTTER OPPORTUNITIES
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
              >
                I build mobile
                <br />
                experiences that
                <br />
                <span className="gradient-text">move people.</span>
              </motion.h1>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                Hey, I&apos;m <strong>Mehndi Raza</strong> — a Flutter Developer
                focused on building thoughtful, reliable and scalable
                cross-platform applications.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <a
                  className="primary-button"
                  href="/Mehndi_Raza_Resume.pdf"
                  download="Mehndi_Raza_Resume.pdf"
                >
                  Download Resume <Download size={17} />
                </a>
                <a
                  className="secondary-button"
                  href="mailto:mehdiraza019mr@gmail.com"
                >
                  Get in touch <ArrowRight size={16} />
                </a>
              </motion.div>
              <motion.div
                className="hero-footnote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span>BASED IN INDIA</span>
                <span className="footnote-divider" />
                <span>AVAILABLE FOR NEW ROLES</span>
              </motion.div>
            </div>

            <motion.div
              className="device-stage"
              initial={{ opacity: 0, scale: 0.9, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                type: "spring",
                stiffness: 75,
              }}
            >
              <div className="device-orbit orbit-a" />
              <div className="device-orbit orbit-b" />
              <motion.div
                className="floating-chip chip-top"
                animate={{ y: [0, -9, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="chip-icon">
                  <Code2 size={15} />
                </span>
                <span>
                  <b>Clean code</b>
                  <small>Built to scale</small>
                </span>
              </motion.div>
              <motion.div
                className="floating-chip chip-bottom"
                animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="chip-icon blue">
                  <Zap size={15} />
                </span>
                <span>
                  <b>Flutter first</b>
                  <small>Pixel-perfect UI</small>
                </span>
              </motion.div>
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span className="phone-island" />
                    <span>••• ◖</span>
                  </div>
                  <div className="phone-content">
                    <div className="phone-topline">
                      <span>YOUR NEXT DEVELOPER</span>
                      <Sparkles size={15} />
                    </div>
                    <div className="avatar-wrap">
                      <div className="avatar">
                        MR<span>.</span>
                      </div>
                      <span className="avatar-ring" />
                    </div>
                    <h3>Mehndi Raza</h3>
                    <p className="phone-role">Flutter Developer</p>
                    <p className="phone-bio">
                      Turning complex ideas into simple, delightful mobile
                      experiences.
                    </p>
                    <div className="phone-stats">
                      <div>
                        <b>3+</b>
                        <span>Years</span>
                      </div>
                      <div>
                        <b>20+</b>
                        <span>APIs</span>
                      </div>
                      <div>
                        <b>10+</b>
                        <span>Modules</span>
                      </div>
                    </div>
                    <div className="phone-divider" />
                    <div className="phone-section-title">
                      WHAT I DO <span>01 — 04</span>
                    </div>
                    <div className="phone-service">
                      <span>
                        <Smartphone size={16} />
                      </span>
                      <div>
                        <b>Mobile apps</b>
                        <small>Flutter · iOS · Android</small>
                      </div>
                      <ArrowUpRight size={14} />
                    </div>
                    <div className="phone-service">
                      <span>
                        <Layers3 size={16} />
                      </span>
                      <div>
                        <b>App architecture</b>
                        <small>MVVM · Riverpod · APIs</small>
                      </div>
                      <ArrowUpRight size={14} />
                    </div>
                    <div className="phone-cta">
                      LET&apos;S BUILD SOMETHING <ArrowUpRight size={13} />
                    </div>
                  </div>
                  <div className="phone-home-indicator" />
                </div>
              </div>
              <div className="device-caption">
                <span className="caption-dot" /> A LITTLE WINDOW INTO MY WORLD
              </div>
            </motion.div>
          </section>

          <section className="stats-strip" aria-label="Experience highlights">
            {[
              { value: "3+", label: "YEARS IN DEVELOPMENT" },
              { value: "3+", label: "PRODUCTION APPS" },
              { value: "25+", label: "API INTEGRATIONS" },
              { value: "10+", label: "APP MODULES" },
            ].map((item, i) => (
              <motion.div
                className="stat-item"
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </section>

          <section
            id="about"
            className="about-section section-anchor section-block"
          >
            {/* Section heading */}
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  01 / THE PERSON BEHIND THE CODE
                </span>

                <h2>
                  Building apps.
                  <br />
                  <span className="muted-heading">Solving real problems.</span>
                </h2>
              </div>

              <span className="section-index">ABOUT</span>
            </div>

            {/* Introduction */}
            <div className="about-intro">
              <div className="about-text">
                <p className="lead-text">
                  I turn ideas into
                  <span className="inline-blue">
                    {" "}
                    reliable digital experiences.
                  </span>
                </p>

                <p>
                  I&apos;m Mehndi Raza, a Flutter Developer with 3+ years of
                  overall software development experience, specializing in
                  cross-platform mobile applications for Android and iOS.
                </p>

                <p>
                  My experience spans the complete development lifecycle — from
                  building responsive interfaces and designing application
                  architecture to integrating REST APIs, implementing enterprise
                  workflows, debugging production issues and managing app
                  releases.
                </p>

                <p>
                  I&apos;ve worked on employee applications, ERP systems, CRM
                  solutions and independent mobile products, with a strong focus
                  on maintainable code, reusable components and practical
                  problem-solving.
                </p>

                <button className="text-link" onClick={() => goTo("Projects")}>
                  Explore my projects <ArrowDownRight size={17} />
                </button>
              </div>

              {/* Professional highlights */}
              <div className="about-cards">
                <div className="principle-card">
                  <span className="principle-icon">
                    <Code2 size={19} />
                  </span>

                  <b>Mobile Engineering</b>

                  <p>
                    Flutter, Dart, MVVM, Provider, Riverpod and Clean
                    Architecture.
                  </p>

                  <span className="card-number">01</span>
                </div>

                <div className="principle-card">
                  <span className="principle-icon">
                    <BriefcaseBusiness size={19} />
                  </span>

                  <b>Enterprise Solutions</b>

                  <p>
                    ERPNext integration, business workflows, APIs and production
                    apps.
                  </p>

                  <span className="card-number">02</span>
                </div>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="experience-section">
              <div className="experience-heading">
                <div>
                  <span className="section-kicker">PROFESSIONAL JOURNEY</span>

                  <h3>
                    My work
                    <span className="muted-heading"> experience.</span>
                  </h3>
                </div>

                <span className="experience-count">03 POSITIONS</span>
              </div>

              <div className="experience-timeline">
                {/* CubeZix Technologies */}
                <article className="experience-card">
                  <div className="experience-marker">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <div className="experience-content">
                    <div className="experience-top">
                      <div>
                        <span className="experience-period">
                          JAN 2025 — PRESENT
                        </span>

                        <h4>
                          Flutter Developer / Mobile Application Developer
                        </h4>

                        <p className="experience-company">
                          CubeZix Technologies · Mumbai, India
                        </p>
                      </div>

                      <span className="experience-badge fulltime-badge">
                        Full-time
                      </span>
                    </div>

                    <p className="experience-summary">
                      Independently developing and maintaining production
                      Flutter applications for Android and iOS, with ownership
                      of feature development, API integrations, debugging and
                      release activities.
                    </p>

                    <div className="experience-achievements">
                      <div>
                        <strong>3</strong>
                        <span>Production apps</span>
                      </div>

                      <div>
                        <strong>50+</strong>
                        <span>App users</span>
                      </div>

                      <div>
                        <strong>20+</strong>
                        <span>API integrations</span>
                      </div>
                    </div>

                    <ul className="experience-points">
                      <li>
                        Develop and maintain CubeZixOne, an employee application
                        serving 50+ users across 10+ business modules.
                      </li>

                      <li>
                        Implement enterprise workflows covering leave
                        applications, expense claims, procurement requisitions,
                        purchase orders, payment entries, salary certificates
                        and document approvals.
                      </li>

                      <li>
                        Build role-based approval workflows, workflow
                        transitions, approver-specific actions and
                        digital-signature functionality.
                      </li>

                      <li>
                        Integrate ERPNext/Frappe REST APIs, Firebase
                        Authentication, Firestore, FCM and Crashlytics.
                      </li>

                      <li>
                        Implement PDF/image rendering, attachment handling,
                        notifications, background functionality and reusable UI.
                      </li>

                      <li>
                        Apply Provider, Riverpod, MVVM, Clean Architecture and
                        Repository Pattern; troubleshoot production, Android and
                        iOS build and deployment issues.
                      </li>

                      <li>
                        Contribute to TSI, CubeZix Common ERP and Knowledge Fund
                        CRM.
                      </li>
                    </ul>

                    <div className="experience-tech">
                      {[
                        "Flutter",
                        "Dart",
                        "ERPNext",
                        "REST APIs",
                        "Firebase",
                        "Provider",
                        "Riverpod",
                        "MVVM",
                      ].map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Cubosquare Flutter Developer */}
                <article className="experience-card">
                  <div className="experience-marker">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <div className="experience-content">
                    <div className="experience-top">
                      <div>
                        <span className="experience-period">
                          DEC 2023 — DEC 2024
                        </span>

                        <h4>Flutter & Mobile Developer</h4>

                        <p className="experience-company">
                          Cubosquare Technology · Mumbai, India
                        </p>
                      </div>

                      <span className="experience-badge fulltime-badge">
                        Full-time
                      </span>
                    </div>

                    <p className="experience-summary">
                      Developed cross-platform mobile applications and
                      implemented backend integrations and third-party services
                      to deliver functional Android and iOS application
                      features.
                    </p>

                    <ul className="experience-points">
                      <li>
                        Developed responsive mobile application features using
                        Flutter and Dart.
                      </li>

                      <li>
                        Integrated REST APIs and JSON-based backend services.
                      </li>

                      <li>
                        Implemented Firebase Authentication, Firebase Cloud
                        Messaging and Google Sign-In.
                      </li>

                      <li>
                        Integrated Cloudinary for image upload and retrieval,
                        along with file handling functionality.
                      </li>

                      <li>
                        Built reusable UI components and performed debugging,
                        API validation and functional testing.
                      </li>

                      <li>
                        Contributed to React.js, Next.js and React Native
                        projects.
                      </li>
                    </ul>

                    <div className="experience-tech">
                      {[
                        "Flutter",
                        "Dart",
                        "REST APIs",
                        "Firebase",
                        "Cloudinary",
                        "Google Sign-In",
                        "React",
                        "Next.js",
                      ].map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Internship */}
                <article className="experience-card">
                  <div className="experience-marker">
                    <Code2 size={17} />
                  </div>

                  <div className="experience-content">
                    <div className="experience-top">
                      <div>
                        <span className="experience-period">
                          MAY 2023 — NOV 2023
                        </span>

                        <h4>Flutter / Web Development Intern</h4>

                        <p className="experience-company">
                          Cubosquare Technology · Mumbai, India
                        </p>
                      </div>
                      <span className="experience-badge internship-badge">
                        Internship
                      </span>
                    </div>

                    <p className="experience-summary">
                      Started my professional development journey working across
                      web technologies, mobile application tasks and Firebase
                      integrations.
                    </p>

                    <ul className="experience-points">
                      <li>
                        Customized WordPress websites, plugins and themes.
                      </li>

                      <li>
                        Developed a custom WordPress plugin for Firebase Cloud
                        Messaging integration.
                      </li>

                      <li>
                        Contributed to React.js and Next.js development for the
                        Aqar First project.
                      </li>

                      <li>
                        Assisted with React Native application development and
                        Android publishing activities.
                      </li>
                    </ul>

                    <div className="experience-tech">
                      {[
                        "WordPress",
                        "React.js",
                        "Next.js",
                        "JavaScript",
                        "Firebase",
                        "React Native",
                      ].map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="projects-section section-anchor section-block"
          >
            <div className="section-heading">
              <div>
                <span className="section-kicker">02 / SELECTED WORK</span>
                <h2>
                  Built with purpose.
                  <br />
                  <span className="muted-heading">Made to matter.</span>
                </h2>
              </div>
              <span className="section-index">PROJECTS</span>
            </div>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <motion.article
                  key={project.number}
                  className={`project-card accent-${project.accent}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="project-card-top">
                    <span>PROJECT / {project.number}</span>
                    <span className="project-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                  <div className="project-art">
                    <div className="art-glow" />

                    {project.logo ? (
                      <div className="project-logo-wrapper">
                        <img
                          src={project.logo}
                          alt={`${project.name} logo`}
                          className="project-logo"
                        />
                      </div>
                    ) : (
                      <div className="art-window">
                        <div className="art-window-top">
                          <i />
                          <i />
                          <i />
                          <span>
                            {project.name.toLowerCase().replaceAll(" ", "-")}
                            .app
                          </span>
                        </div>

                        <div className="art-window-body">
                          <div className="art-sidebar">
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>

                          <div className="art-main">
                            <div className="art-line wide" />
                            <div className="art-line short" />

                            <div className="art-tiles">
                              <i />
                              <i />
                              <i />
                            </div>

                            <div className="art-line medium" />

                            <div className="art-row">
                              <i />
                              <i />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <span className="art-floating-label">{project.metric}</span>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      className="project-detail"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="project-disclaimer">
              Selected work and project summaries. Detailed case studies,
              screenshots and live links can be added as each project is
              prepared for public viewing.
            </p>
          </section>

          <section
            id="skills"
            className="skills-section section-anchor section-block"
          >
            <div className="section-heading">
              <div>
                <span className="section-kicker">03 / MY TOOLKIT</span>
                <h2>
                  Tools I use.
                  <br />
                  <span className="muted-heading">Problems I solve.</span>
                </h2>
              </div>
              <span className="section-index">SKILLS</span>
            </div>
            <div className="skills-layout">
              <div className="skill-intro">
                <div className="skill-orb">
                  <div className="orb-inner">
                    <Code2 size={35} />
                  </div>
                </div>
                <h3>
                  Built around
                  <br />
                  Flutter & Dart.
                </h3>
                <p>
                  My core strength is cross-platform mobile development,
                  supported by API integrations, backend services and modern
                  frontend tooling.
                </p>
                <div className="tool-pills">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                  <span>REST APIs</span>
                  <span>Git</span>
                  <span>Postman</span>
                </div>
              </div>
              <div className="skill-bars">
                {skills.map((skill, i) => (
                  <div className="skill-row" key={skill.name}>
                    <div className="skill-label">
                      <b>{skill.name}</b>
                      <span>{skill.level}</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
                <p className="skill-note">
                  Skill indicators are qualitative self-assessments, not formal
                  test scores.
                </p>
              </div>
            </div>
          </section>

          <section className="experience-band">
            <div className="experience-icon">
              <BriefcaseBusiness size={21} />
            </div>
            <div>
              <span className="section-kicker">PROFESSIONAL EXPERIENCE</span>
              <h3>
                Turning requirements into
                <br />
                production-ready features.
              </h3>
              <p>
                Mobile development · Enterprise workflows · API integrations ·
                App maintenance
              </p>
            </div>
            <span className="experience-years">
              3+ <small>YEARS</small>
            </span>
          </section>

          <section
            id="contact"
            className="contact-section section-anchor section-block"
          >
            <div className="contact-panel">
              <div className="contact-spark">
                <Sparkles size={20} />
              </div>

              <span className="section-kicker">
                04 / HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let&apos;s make
                <br />
                <span className="gradient-text">something great.</span>
              </h2>

              <p>
                I&apos;m open to Flutter Developer opportunities and
                conversations about building useful digital products.
              </p>

              <div className="contact-actions">
                <a
                  className="primary-button contact-button"
                  href="mailto:mehdiraza019mr@gmail.com"
                >
                  <Mail size={17} />
                  Email Me
                </a>

                <a
                  className="secondary-button contact-button"
                  href="tel:+919702467618"
                >
                  <Phone size={17} />
                  Call Me
                </a>

                <a
                  className="whatsapp-button contact-button"
                  href="https://wa.me/919702467618?text=Hi%20Mehndi%2C%20I%20visited%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>

              <div className="contact-bottom">
                <span>MEHNDI RAZA · FLUTTER DEVELOPER</span>
                <span>INDIA · OPEN TO OPPORTUNITIES</span>
              </div>
            </div>
          </section>

          <footer className="footer">
            <a className="brand" href="#home">
              <span className="brand-mark">
                MR<span>.</span>
              </span>
            </a>
            <span>Designed & built with intention.</span>
            <span>© 2026 MEHNDI RAZA</span>
          </footer>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal project-case-study"
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project"
              >
                <X size={20} />
              </button>

              {/* Project heading */}
              <div className="case-study-heading">
                <span className="section-kicker">
                  PROJECT / {selectedProject.number}
                </span>

                <span className="project-category">
                  {selectedProject.category}
                </span>

                <h2>{selectedProject.name}</h2>

                <p>{selectedProject.ownership}</p>
              </div>

              {/* Project screenshots */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="case-study-gallery">
                  {selectedProject.images?.map((image, index) => (
                    <div className="case-study-image" key={image}>
                      <img
                        src={image}
                        alt={`${selectedProject.name} screenshot ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="case-study-section">
                <span className="case-study-label">ABOUT THE PROJECT</span>

                <p className="case-study-description">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="case-study-section">
                <span className="case-study-label">
                  KEY FEATURES & HIGHLIGHTS
                </span>

                <div className="case-study-highlights">
                  {selectedProject.highlights.map((highlight) => (
                    <div className="case-study-highlight" key={highlight}>
                      <span className="highlight-check">
                        <Check size={14} />
                      </span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="case-study-section">
                <span className="case-study-label">TECHNOLOGIES USED</span>

                <div className="project-tags case-study-tags">
                  {selectedProject.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              {/* Store links - only show when available */}
              {(selectedProject.androidUrl || selectedProject.iosUrl) && (
                <div className="case-study-section">
                  <span className="case-study-label">
                    EXPLORE THE APPLICATION
                  </span>

                  <div className="case-study-store-links">
                    {selectedProject.androidUrl && (
                      <a
                        href={selectedProject.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-button"
                      >
                        <SiGoogleplay size={23} />

                        <span>
                          <small>GET IT ON</small>
                          Google Play
                        </span>

                        <ExternalLink size={15} />
                      </a>
                    )}

                    {selectedProject.iosUrl && (
                      <a
                        href={selectedProject.iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-button"
                      >
                        <SiAppstore size={23} />

                        <span>
                          <small>DOWNLOAD ON</small>
                          App Store
                        </span>

                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="case-study-footer">
                <span>
                  <span className="status-dot" /> FEATURED PROJECT
                </span>

                <button
                  className="case-study-close"
                  onClick={() => setSelectedProject(null)}
                >
                  Close overview <X size={15} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
