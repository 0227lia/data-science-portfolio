# Data Science Portfolio

Static portfolio for Lianghao Zhan, a Data Science student at Universitat Politècnica de València. It presents six reproducible, public case studies covering data engineering, geospatial analysis, operations research, forecasting, governed machine learning, and NLP retrieval.

This site deliberately distinguishes observed results from modeled scenarios. It does not claim commercial deployments or company work.

## Stack

- Astro 7 and TypeScript
- Static HTML and modern CSS
- Structured project data for reusable case-study pages
- Filterable project cards and a synchronized evidence index
- Project-specific architecture flows, technical artifacts and explicit limitations
- SEO metadata and structured `Person` data without publishing private contact details
- GitHub Actions for type checking, production builds and GitHub Pages deployment

## Local setup

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:4321/data-science-portfolio/`.

## Validation

```powershell
pnpm check
pnpm build
pnpm audit
```

## Deployment

The site is deployed through the GitHub Pages workflow to `https://0227lia.github.io/data-science-portfolio/`. Every push to `main` rebuilds the static site before publishing it.

## Content integrity

All metrics displayed on the site are sourced from the committed runs in the linked repositories. Screenshots are copied from their generated reports. External datasets and their limitations are documented in each project repository.

## License

MIT. Project datasets, screenshots, and third-party sources retain their own terms.
