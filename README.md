# Mehndi Raza — Developer Portfolio

A responsive, mobile-app-inspired portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. Replace the placeholder email `hello@mehindiraza.dev` with your real professional email.
2. Update GitHub and LinkedIn URLs in `src/components/portfolio-home.tsx`.
3. Add your real resume PDF to `public/resume/` and wire the download action.
4. Add verified project screenshots, repository links and app-store/demo links.
5. Confirm project descriptions, metrics and experience dates match your resume and what you can explain in an interview.
6. Add your actual profile photo if you want to replace the MR monogram.

## Structure

```text
src/
  app/
    globals.css          # Design system and responsive styles
    layout.tsx           # Metadata and font setup
    page.tsx             # Homepage route
  components/
    portfolio-home.tsx   # Interactive portfolio experience
  data/
    portfolio.ts         # Project and skills content
public/
  images/
  projects/
  resume/
```

## Notes

- The project cards currently open an overview modal; they are intentionally not linked to fabricated live demos.
- Experience and project metrics are editable starter content. Validate them before sharing with recruiters.
- Motion animations respect the user's reduced-motion preference at the CSS level.
