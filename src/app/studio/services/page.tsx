import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Globe2,
  Palette,
  Workflow,
  Layers3,
  Wrench,
  Check,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Services | Raza Studios",
  description:
    "Explore Flutter app development, web development, UI/UX design, API integration, business software and ongoing support from Raza Studios.",
};

const services = [
  {
    number: "01",
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    intro:
      "Turn your product idea into a reliable Android and iOS application.",
    description:
      "From an early-stage MVP to a feature-rich business application, build a mobile experience designed around your users and goals.",
    deliverables: [
      "Flutter apps for Android and iOS",
      "App architecture and state management",
      "Authentication and user onboarding",
      "Push notifications and third-party integrations",
      "API-connected screens and workflows",
      "Build preparation and release support",
    ],
    idealFor:
      "Startups, service businesses and teams that want to reach customers through a mobile app.",
    technologies: "Flutter · Dart · Firebase · REST APIs",
  },
  {
    number: "02",
    slug: "web-development",
    icon: Globe2,
    title: "Web Development",
    intro: "Build a fast, responsive website or a powerful web application.",
    description:
      "Create a professional online presence or a custom web product with clear navigation, responsive layouts and maintainable code.",
    deliverables: [
      "Business and company websites",
      "Landing pages and product websites",
      "Dashboards and admin panels",
      "Responsive layouts for mobile and desktop",
      "Forms, integrations and dynamic content",
      "Deployment and production setup",
    ],
    idealFor:
      "Businesses that need a stronger online presence, and founders building a web-based product.",
    technologies: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    number: "03",
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    intro: "Make your product easier to understand, navigate and use.",
    description:
      "Shape the user journey before and during development, with thoughtful layouts and consistent interface patterns.",
    deliverables: [
      "User flows and screen planning",
      "Wireframes and interface concepts",
      "Mobile and web screen design",
      "Reusable design patterns",
      "Developer-ready design handoff",
    ],
    idealFor:
      "New products that need a clear direction, or existing apps that need a better user experience.",
    technologies: "User flows · Wireframes · UI systems · Prototyping",
  },
  {
    number: "04",
    slug: "backend-api-integration",
    icon: Workflow,
    title: "Backend & API Integration",
    intro: "Connect your product to the services and data it depends on.",
    description:
      "Integrate applications with backend systems, authentication providers and third-party platforms so information moves reliably.",
    deliverables: [
      "REST API integration",
      "Authentication and session handling",
      "Data models and API error handling",
      "Firebase services and notifications",
      "Third-party SDK and service integration",
      "API testing and integration support",
    ],
    idealFor:
      "Teams with an existing backend, or products that need connected services and reliable data flows.",
    technologies: "REST APIs · Dio · Firebase · JSON · OAuth",
  },
  {
    number: "05",
    slug: "business-software-erp-automation",
    icon: Layers3,
    title: "Business Software & ERP Automation",
    intro:
      "Reduce repetitive work with software that fits your business process.",
    description:
      "Connect business workflows, build internal tools and make ERP data more accessible through practical custom applications.",
    deliverables: [
      "ERPNext and business-system integrations",
      "Custom operational dashboards",
      "Approval and document workflows",
      "Internal mobile and web tools",
      "Process automation and notifications",
      "Role-based screens and access flows",
    ],
    idealFor:
      "Businesses that want to simplify operations, approvals, reporting or field workflows.",
    technologies: "ERPNext · Frappe REST API · Flutter · Next.js",
  },
  {
    number: "06",
    slug: "maintenance-and-support",
    icon: Wrench,
    title: "Maintenance & Support",
    intro: "Keep your application stable, current and ready to improve.",
    description:
      "Get practical technical help after launch, from investigating issues to shipping enhancements and keeping dependencies updated.",
    deliverables: [
      "Bug investigation and fixes",
      "Performance and usability improvements",
      "Dependency and SDK updates",
      "Small feature enhancements",
      "Release and deployment assistance",
      "Ongoing technical consultation",
    ],
    idealFor:
      "Businesses with an existing app or website that need dependable development support.",
    technologies: "Flutter · React · Next.js · Firebase · APIs",
  },
];

const engagementSteps = [
  [
    "01",
    "Share the brief",
    "Tell me what you want to build, who it is for and what success looks like.",
  ],
  [
    "02",
    "Define the scope",
    "We discuss priorities, features, timeline and a practical delivery plan.",
  ],
  [
    "03",
    "Build together",
    "Development moves forward in clear stages, with regular communication and feedback.",
  ],
  [
    "04",
    "Launch and improve",
    "We prepare the handover or release, then discuss any ongoing support you need.",
  ],
];

export default function StudioServicesPage() {
  return (
    <main className="rs-site rs-services-page">
      <header className="rs-nav">
        <Link
          href="/studio"
          className="rs-brand"
          aria-label="Raza Studios home"
        >
          <span className="rs-brand-mark">
            RS<span>.</span>
          </span>
          <span>
            RAZA STUDIOS<small>SOFTWARE & DIGITAL PRODUCTS</small>
          </span>
        </Link>
        <nav aria-label="Studio navigation">
          <Link href="/studio">Studio home</Link>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <Link href="/">Mehndi Raza</Link>
        </nav>
        <Link className="rs-nav-cta" href="/studio/start-project">
          Start a project <ArrowUpRight size={15} />
        </Link>
      </header>

      <section className="rs-services-hero">
        <Link className="rs-back-link" href="/studio">
          <ArrowLeft size={14} /> Back to studio
        </Link>
        <p className="rs-kicker">
          <span /> SERVICES / WHAT I CAN HELP YOU BUILD
        </p>
        <h1>
          Good ideas need
          <br />
          <span>the right execution.</span>
        </h1>
        <p>
          From mobile apps and websites to connected business systems, explore
          practical development services built around your goals.
        </p>
        <Link
          className="rs-button rs-button-primary"
          href="/studio/start-project"
        >
          Discuss your project <ArrowUpRight size={17} />
        </Link>
        <div className="rs-services-hero-note">
          <Sparkles size={15} /> Direct collaboration with the developer
          building your product.
        </div>
      </section>

      <section className="rs-services-list" id="services">
        <div className="rs-services-list-heading">
          <div>
            <p className="rs-kicker">SERVICES</p>
            <h2>
              From first concept
              <br />
              <span>to ongoing support.</span>
            </h2>
          </div>
          <p>
            Choose a service to explore what it includes. If your project needs
            a mix of these, we can shape the right scope together.
          </p>
        </div>

        <div className="rs-services-detail-grid">
          {services.map(
            ({
              number,
              slug,
              icon: Icon,
              title,
              intro,
              description,
              deliverables,
              idealFor,
              technologies,
            }) => (
              <article className="rs-service-detail" key={slug} id={slug}>
                <div className="rs-service-detail-top">
                  <span>{number} / SERVICE</span>
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p className="rs-service-intro">{intro}</p>
                <p className="rs-service-description">{description}</p>
                <div className="rs-deliverables">
                  <h4>WHAT&lsquo;S INCLUDED</h4>
                  <ul>
                    {deliverables.map((item) => (
                      <li key={item}>
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rs-service-meta">
                  <p>
                    <b>GOOD FIT FOR</b>
                    {idealFor}
                  </p>
                  <p>
                    <b>TOOLS & TECHNOLOGIES</b>
                    {technologies}
                  </p>
                </div>
                <Link
                  className="rs-service-detail-cta"
                  href={`/studio/start-project?service=${slug}`}
                >
                  Start a conversation <ArrowUpRight size={15} />
                </Link>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="rs-services-approach" id="approach">
        <div className="rs-services-approach-heading">
          <p className="rs-kicker">HOW WE WORK</p>
          <h2>
            Clear steps.
            <br />
            <span>No unnecessary complexity.</span>
          </h2>
          <p>
            Good collaboration starts with understanding the problem before
            jumping into code.
          </p>
        </div>
        <div className="rs-services-steps">
          {engagementSteps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rs-services-bottom-cta">
        <p className="rs-kicker">NOT SURE WHICH SERVICE YOU NEED?</p>
        <h2>
          Tell me what you have
          <br />
          <span>in mind.</span>
        </h2>
        <p>
          Share the challenge or idea. We can work out the right technical
          approach together.
        </p>
        <Link
          className="rs-button rs-button-primary"
          href="/studio/start-project"
        >
          Tell me about your project <ArrowUpRight size={17} />
        </Link>
      </section>

      <footer className="rs-footer">
        <Link href="/studio" className="rs-footer-brand">
          RS<span>.</span> / RAZA STUDIOS
        </Link>
        <span>Independent software development · India</span>
        <span>© 2026 RAZA STUDIOS</span>
      </footer>
    </main>
  );
}
