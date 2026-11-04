import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Globe2,
  Workflow,
  Wrench,
  Palette,
  Layers3,
} from "lucide-react";

export const metadata = {
  title: "Raza Studios | Digital Products, Built With Purpose",
  description:
    "Raza Studios helps individuals, startups and businesses build mobile apps, websites and custom digital products.",
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile app development",
    description:
      "Cross-platform Android and iOS applications built with Flutter.",
  },
  {
    icon: Globe2,
    title: "Web development",
    description:
      "Responsive websites and web applications built with modern frontend tools.",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    description:
      "Clear product flows and thoughtful interfaces for real users.",
  },
  {
    icon: Workflow,
    title: "Backend & API integration",
    description:
      "Connect applications with APIs, authentication and third-party services.",
  },
  {
    icon: Layers3,
    title: "Business software",
    description:
      "Practical business tools, ERP integrations and workflow automation.",
  },
  {
    icon: Wrench,
    title: "Maintenance & support",
    description: "Improvements, bug fixes and ongoing technical support.",
  },
];

export default function StudioPage() {
  return (
    <main className="rs-site">
      <header className="rs-nav">
        <Link href="/" className="rs-brand" aria-label="Mehndi Raza portfolio">
          <span className="rs-brand-mark">
            RS<span>.</span>
          </span>
          <span>
            RAZA STUDIOS<small>SOFTWARE & DIGITAL PRODUCTS</small>
          </span>
        </Link>
        <nav aria-label="Studio navigation">
          <a href="/studio/services">Services</a>
          <a href="#process">Process</a>
          <Link href="/">Mehndi Raza</Link>
        </nav>
        <Link className="rs-nav-cta" href="/studio/start-project">
          Start a project <ArrowUpRight size={15} />
        </Link>
      </header>

      <section className="rs-hero">
        <div className="rs-hero-copy">
          <p className="rs-kicker">
            <span /> INDEPENDENT SOFTWARE DEVELOPMENT STUDIO
          </p>
          <h1>
            Your idea.
            <br />
            <span>Our engineering.</span>
          </h1>
          <p className="rs-hero-description">
            We help individuals, startups and businesses turn ideas into useful
            digital products — from mobile apps and websites to custom business
            software.
          </p>
          <div className="rs-hero-actions">
            <Link
              className="rs-button rs-button-primary"
              href="/studio/start-project"
            >
              Tell us about your idea <ArrowUpRight size={17} />
            </Link>
            <a className="rs-button rs-button-quiet" href="#services">
              Explore services <ArrowRight size={16} />
            </a>
          </div>
          <div className="rs-hero-foot">
            <span>THOUGHTFUL DESIGN</span>
            <i /> <span>RELIABLE ENGINEERING</span>
            <i /> <span>REAL-WORLD SOLUTIONS</span>
          </div>
        </div>
        <div
          className="rs-hero-art"
          aria-label="Raza Studios digital product design visual"
        >
          <div className="rs-art-grid" />
          <div className="rs-art-glow" />
          <div className="rs-art-card rs-art-card-back">
            <span>PRODUCT / 01</span>
            <b>
              Build with
              <br />
              purpose.
            </b>
            <small>DESIGN · ENGINEERING · DELIVERY</small>
          </div>
          <div className="rs-art-card rs-art-card-front">
            <span className="rs-art-dot" /> STUDIO WORKSPACE
            <div className="rs-art-bars">
              <i />
              <i />
              <i />
              <i />
            </div>
            <b>
              Ideas into
              <br />
              <em>experiences.</em>
            </b>
            <small>RAZA STUDIOS © 2026</small>
          </div>
          <div className="rs-art-orbit" />
        </div>
      </section>

      <section className="rs-trust-strip">
        <span>BUILT AROUND YOUR GOALS</span>
        <span>FROM FIRST IDEA TO RELEASE</span>
        <span>DIRECT COMMUNICATION</span>
      </section>

      <section className="rs-section" id="services">
        <div className="rs-section-heading">
          <div>
            <p className="rs-kicker">WHAT WE CAN BUILD</p>
            <h2>
              Digital solutions
              <br />
              <span>for real needs.</span>
            </h2>
          </div>
          <p>
            Practical development services for people with an idea, a business
            to grow, or a product to improve.
          </p>
        </div>
        <div className="rs-service-grid">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article className="rs-service-card" key={title}>
              <div className="rs-service-card-top">
                <span>0{index + 1} / SERVICE</span>
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link
                href={`/studio/start-project?service=${title.toLowerCase().replaceAll(" ", "-")}`}
              >
                Discuss this service <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
        <div className="rs-centered-link">
          <Link href="/studio/services">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="rs-process" id="process">
        <div>
          <p className="rs-kicker">A CLEAR WAY FORWARD</p>
          <h2>
            From conversation
            <br />
            <span>to creation.</span>
          </h2>
        </div>
        <div className="rs-process-steps">
          <article>
            <b>01</b>
            <h3>Understand</h3>
            <p>We learn about your idea, users, goals and constraints.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Plan</h3>
            <p>We agree on scope, priorities, timeline and next steps.</p>
          </article>
          <article>
            <b>03</b>
            <h3>Build</h3>
            <p>We develop, review and refine the product with you.</p>
          </article>
          <article>
            <b>04</b>
            <h3>Deliver</h3>
            <p>We prepare the release and discuss ongoing support.</p>
          </article>
        </div>
      </section>

      <section className="rs-about-founder">
        <div>
          <p className="rs-kicker">THE PERSON BEHIND THE STUDIO</p>
          <h2>
            Independent by nature.
            <br />
            <span>Engineering-led.</span>
          </h2>
        </div>
        <div>
          <p>
            Raza Studios is the independent development practice of Mehndi Raza.
            You work directly with the developer responsible for understanding,
            building and improving your product.
          </p>
          <Link href="/">
            Get to know Mehndi Raza <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="rs-final-cta">
        <p className="rs-kicker">HAVE SOMETHING IN MIND?</p>
        <h2>
          Let&apos;s turn your idea
          <br />
          <span>into something real.</span>
        </h2>
        <Link
          className="rs-button rs-button-primary"
          href="/studio/start-project"
        >
          Start a project <ArrowUpRight size={17} />
        </Link>
      </section>

      <footer className="rs-footer">
        <Link href="/" className="rs-footer-brand">
          RS<span>.</span> / RAZA STUDIOS
        </Link>
        <span>Independent software development · India</span>
        <span>© 2026 RAZA STUDIOS</span>
      </footer>
    </main>
  );
}
