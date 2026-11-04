"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
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
} from "lucide-react";
import Link from "next/link";
import {
  Building2,
  Home,
  FileSignature,
  Layers,
  Database,
  Users,
  CalendarDays,
  AudioLines,
  Activity,
  ChartNoAxesCombined,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects, skills } from "@/data/portfolio";
import { main } from "motion/react-client";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export function PortfolioHome() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const goTo = (item: string) => {
    setActive(item);
    setMenuOpen(false);
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const theme = dark ? "theme-dark" : "theme-light";
  const projectVisuals: Record<string, LucideIcon> = {
    building: Building2,
    home: Home,
    "file-signature": FileSignature,
    layers: Layers,
    database: Database,
    users: Users,
    calendar: CalendarDays,
    audio: AudioLines,
    activity: Activity,
    chart: ChartNoAxesCombined,
  };
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
          <Link
            className="studio-switch"
            href="/studio"
            aria-label="Explore Raza Studios"
          >
            <span className="studio-switch-mark">RS.</span>
            <span>RAZA STUDIOS</span>
            <ArrowUpRight size={13} />
          </Link>
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="top-contact" href="mailto:hello@mehindiraza.dev">
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
              href="https://github.com/Raza-003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/mehndi-raza/"
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
                <button
                  className="primary-button"
                  onClick={() => goTo("Projects")}
                >
                  Explore my work <ArrowUpRight size={17} />
                </button>
                <a
                  className="secondary-button"
                  href="mailto:hello@mehindiraza.dev"
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
              { value: "3", label: "PRODUCTION APPS" },
              { value: "20+", label: "API INTEGRATIONS" },
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
            className="studio-promo section-block"
            aria-labelledby="studio-promo-title"
          >
            <div className="studio-promo-copy">
              <span className="section-kicker">A NEW WAY TO WORK TOGETHER</span>
              <h2 id="studio-promo-title">
                Have an idea?
                <br />
                <span className="gradient-text">Let&apos;s build it.</span>
              </h2>
              <p>
                Through Raza Studios, I help individuals, startups and
                businesses turn ideas into useful mobile apps, websites and
                digital products.
              </p>
              <Link className="primary-button" href="/studio">
                Explore Raza Studios <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="studio-promo-aside" aria-hidden="true">
              <div className="studio-promo-orbit studio-promo-orbit-one" />
              <div className="studio-promo-orbit studio-promo-orbit-two" />
              <div className="studio-promo-monogram">
                RS<span>.</span>
              </div>
              <span className="studio-promo-caption">
                IDEA → DESIGN → DEVELOPMENT
              </span>
            </div>
          </section>

          <section
            id="about"
            className="about-section section-anchor section-block"
          >
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  01 / THE PERSON BEHIND THE CODE
                </span>
                <h2>
                  More than just
                  <br />
                  <span className="muted-heading">writing widgets.</span>
                </h2>
              </div>
              <span className="section-index">ABOUT</span>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p className="lead-text">
                  I enjoy the space where{" "}
                  <span className="inline-blue">
                    engineering meets experience.
                  </span>
                </p>
                <p>
                  I&apos;m a self-driven Flutter Developer with 3+ years of
                  overall development experience and hands-on experience
                  building cross-platform mobile applications. I work across the
                  development lifecycle — from shaping interfaces and
                  integrating APIs to handling state, debugging and delivering
                  production features.
                </p>
                <p>
                  I care about maintainable code, practical architecture and the
                  small details that make an application feel polished.
                </p>
                <button className="text-link" onClick={() => goTo("Projects")}>
                  See what I&apos;ve built <ArrowDownRight size={17} />
                </button>
              </div>
              <div className="about-cards">
                <div className="principle-card">
                  <span className="principle-icon">
                    <Code2 size={19} />
                  </span>
                  <b>Engineering mindset</b>
                  <p>
                    Structured code, reusable components and thoughtful
                    architecture.
                  </p>
                  <span className="card-number">01</span>
                </div>
                <div className="principle-card">
                  <span className="principle-icon">
                    <Sparkles size={19} />
                  </span>
                  <b>Detail obsessed</b>
                  <p>
                    Interfaces should feel intuitive, responsive and
                    intentional.
                  </p>
                  <span className="card-number">02</span>
                </div>
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
              {projects.map((project, i) => {
                const VisualIcon = projectVisuals[project.visualIcon] || Layers;

                const isOffice = project.ownership === "Office Project";

                return (
                  <motion.article
                    key={project.slug}
                    className={`project-card accent-${project.accent}`}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: (i % 3) * 0.08,
                    }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Card Header */}
                    <div className="project-card-top">
                      <span>PROJECT / {project.number}</span>

                      <span className="project-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    {/* Project Artwork */}
                    <div className="project-art">
                      <div className="project-art-glow" />

                      <div className="project-art-content">
                        <div className="project-art-icon">
                          <VisualIcon size={38} strokeWidth={1.4} />
                        </div>

                        <div className="project-art-details">
                          <span>FEATURED WORK</span>
                          <h3>{project.name}</h3>
                          <p>{project.category}</p>
                        </div>

                        <div className="project-art-number">
                          {project.number}
                        </div>
                      </div>

                      <div className="art-floating-label">
                        <span className="status-dot" />
                        {project.metric}
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="project-info">
                      <div className="project-meta">
                        <span
                          className={`project-ownership ${
                            isOffice
                              ? "ownership-office"
                              : "ownership-independent"
                          }`}
                        >
                          {isOffice ? (
                            <>
                              <Building2 size={12} />
                              Office Project
                            </>
                          ) : (
                            <>
                              <Layers size={12} />
                              Independent Project
                            </>
                          )}
                        </span>

                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="project-title">{project.name}</h3>

                      <p className="project-description">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="project-tags">
                        {project.stack.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      {/* Project Navigation */}
                      <Link href={project.href} className="project-detail">
                        <span>Explore Project</span>
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
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
              <a
                className="primary-button contact-button"
                href="mailto:hello@mehindiraza.dev"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
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
              className="project-modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                <X size={19} />
              </button>
              <span className="section-kicker">PROJECT OVERVIEW</span>
              <h3>{selectedProject}</h3>
              <p>
                This case study is ready to be expanded with verified
                screenshots, your exact responsibilities, architecture
                decisions, technical challenges and a live demo or repository
                link.
              </p>
              <div className="modal-check">
                <Check size={16} /> Add only details and metrics you can
                confidently discuss in an interview.
              </div>
              <button
                className="primary-button"
                onClick={() => setSelectedProject(null)}
              >
                Back to portfolio <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
