# Data Science Portfolio

Static portfolio for a Data Science student at Universitat Politecnica de Valencia. It presents six reproducible, public case studies covering data engineering, geospatial analysis, operations research, forecasting, governed machine learning, and NLP retrieval.

This site deliberately distinguishes observed results from modeled scenarios. It does not claim commercial deployments or company work.

## Stack

- Astro 5 and TypeScript
- Static HTML and modern CSS
- Structured project data for reusable case-study pages
- GitHub Actions for type checking and production builds

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
```

## Deployment

The configuration targets GitHub Pages at `https://0227lia.github.io/data-science-portfolio/`. A production deployment workflow is intentionally not enabled until the public site is reviewed.

## Content integrity

All metrics displayed on the site are sourced from the committed runs in the linked repositories. Screenshots are copied from their generated reports. External datasets and their limitations are documented in each project repository.

## License

MIT. Project datasets, screenshots, and third-party sources retain their own terms.
