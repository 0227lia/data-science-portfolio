export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  sourceName: string;
  sourceUrl: string;
  categories: string[];
  technologies: string[];
  metrics: Metric[];
  challenge: string;
  approach: string[];
  evidence: string[];
  quality: string[];
  limitations: string[];
};

export const projects: Project[] = [
  {
    slug: "valencia-bike-equity",
    title: "Valencia Bike Equity",
    eyebrow: "Geospatial decision support",
    description:
      "An exploratory, reproducible system for reviewing territorial equity in bicycle parking across Valencia.",
    summary:
      "Open municipal data, spatial accessibility, multi-criteria robustness and counterfactual planning in one transparent workflow.",
    image: "/assets/valencia-bike-equity-dashboard.png",
    imageAlt: "Static equity decision dashboard for bicycle parking in Valencia.",
    githubUrl: "https://github.com/0227lia/valencia-bike-equity-analysis",
    sourceName: "Valencia Open Data",
    sourceUrl:
      "https://opendata.vlci.valencia.es/dataset/aparcaments-bicicletes-aparcamientos-bicicletas",
    categories: ["Geospatial", "Urban analytics", "Decision support"],
    technologies: ["Python", "Shapely", "pyproj", "Plotly", "Streamlit", "pytest"],
    metrics: [
      { value: "4,316", label: "parking points processed" },
      { value: "10,000", label: "MCDA weight scenarios" },
      { value: "71.0%", label: "modeled distance-deficit reduction" },
      { value: "p = 0.001", label: "global Moran permutation test" }
    ],
    challenge:
      "A wide parking network does not guarantee comparable coverage between neighborhoods. The analysis asks where vulnerability, capacity and accessibility deficits persist together, without turning modeled outputs into construction recommendations.",
    approach: [
      "Normalize public snapshots and preserve provenance with SHA-256 manifests.",
      "Build 300 m diagnostic and 150 m planning grids in a projected local coordinate system.",
      "Score neighborhoods with transparent MCDA and test rankings through 10,000 Dirichlet weight scenarios.",
      "Measure global spatial autocorrelation with 999 permutations and inspect descriptive quadrants.",
      "Compare constrained review-area portfolios through a greedy coverage frontier."
    ],
    evidence: [
      "70 neighborhoods and 617 diagnostic grid points are included in the reproducible snapshot.",
      "EL GRAU holds rank 1 in all 10,000 sampled weight scenarios; nine neighborhoods have at least an 80% top-10 probability.",
      "The 25-area counterfactual portfolio brings 179 planning cells below the 250 m threshold."
    ],
    quality: [
      "Snapshot-based execution works without a network connection.",
      "Pytest, Ruff and GitHub Actions reconstruct the analysis from committed inputs.",
      "Decision model, data dictionary and methodology document assumptions and boundaries."
    ],
    limitations: [
      "Straight-line distance is not a cycling route or a street-level feasibility study.",
      "The score is not demand, cost, occupancy or causal impact.",
      "Counterfactual areas are modeled screening points, not investment proposals."
    ]
  },
  {
    slug: "valenbisi-pulse",
    title: "Valenbisi Pulse",
    eyebrow: "Operations research and mobility",
    description:
      "A reproducible snapshot control center for station risk, local pressure, minimum-cost rebalancing and conservative stress tests.",
    summary:
      "Turns a static bike-sharing snapshot into an auditable operations review, while clearly separating simulation from prediction.",
    image: "/assets/valenbisi-operations-dashboard.png",
    imageAlt: "Static operations dashboard for the Valenbisi snapshot analysis.",
    githubUrl: "https://github.com/0227lia/valenbisi-pulse",
    sourceName: "CityBikes API / versioned local sample",
    sourceUrl: "https://api.citybik.es/v2/networks/valenbisi",
    categories: ["Operations research", "Mobility", "Optimization"],
    technologies: ["Python", "SciPy", "scikit-learn", "KMeans", "Plotly", "Streamlit"],
    metrics: [
      { value: "30", label: "stations in reproducible sample" },
      { value: "21", label: "critical stations at base thresholds" },
      { value: "53 / 152", label: "bikes assigned / modeled need" },
      { value: "91.28", label: "bike-km in LP transport plan" }
    ],
    challenge:
      "A total bike count hides operational risk: empty stations block departures and full stations block returns. The work turns a single snapshot into a constrained review of where intervention might be most valuable.",
    approach: [
      "Validate inventory, capacity, coordinates, duplicates and operational status before scoring.",
      "Combine station state, imbalance, k-NN pressure and isolation in an auditable 0-100 snapshot risk score.",
      "Aggregate local signals using reproducible KMeans analytical zones.",
      "Solve a minimum-cost transport linear program with explicit maximum distance and unmet-need penalty.",
      "Run deterministic core-periphery stress scenarios that conserve bikes across the network."
    ],
    evidence: [
      "The model finds 7 eligible sources, 14 destinations and 49 arcs inside 2.5 km.",
      "Its transport plan assigns 34.9% of modeled need in the included sample, not a live operational recommendation.",
      "Two stress scenarios preserve the network bike total and are labeled as non-predictive."
    ],
    quality: [
      "Input controls and solver outputs are exported as CSV and JSON artifacts.",
      "Ruff, pytest and CI validate the dashboard import and sample artifact reconstruction.",
      "The decision model documents the objective, penalties and operational limits."
    ],
    limitations: [
      "A snapshot cannot learn demand patterns or forecast future user behavior.",
      "Geodesic distance is not vehicle routing, travel time or staffing cost.",
      "Analytical zones do not represent administrative neighborhoods."
    ]
  },
  {
    slug: "spain-electricity-demand",
    title: "Spain Electricity Demand Forecast Lab",
    eyebrow: "Forecasting and data platform",
    description:
      "A weather-informed daily demand forecasting platform with temporal backtests, calibrated intervals and versioned SQL analytics.",
    summary:
      "A full data-to-forecast workflow designed to make temporal assumptions, uncertainty and performance comparisons inspectable.",
    image: "/assets/electricity-forecast-dashboard.png",
    imageAlt: "Static forecast control center for electricity-demand analysis.",
    githubUrl: "https://github.com/0227lia/spain-electricity-demand-platform",
    sourceName: "REE API, Open-Meteo ERA5 and Spanish holidays",
    sourceUrl: "https://www.ree.es/en/datos/apidata",
    categories: ["Forecasting", "Data engineering", "Energy"],
    technologies: ["Python", "DuckDB", "SQL", "scikit-learn", "Plotly", "Streamlit"],
    metrics: [
      { value: "2,557", label: "daily demand observations" },
      { value: "12", label: "expanding backtest windows" },
      { value: "61.8%", label: "test MAE reduction vs 7-day baseline" },
      { value: "94.0%", label: "observed 95% interval coverage" }
    ],
    challenge:
      "The objective is a one-step daily forecast that compares simple seasonal baselines with feature-based models while protecting the final year from tuning and calibration decisions.",
    approach: [
      "Ingest demand, multi-city weather proxies and national holidays with manifests, retries and validation checks.",
      "Load raw and modeled tables into DuckDB and build versioned analytical marts with SQL.",
      "Create leakage-aware lags, rolling windows, calendar and climate features.",
      "Evaluate five candidates over 12 expanding 28-day windows in 2024.",
      "Estimate bias correction and conformal interval widths from out-of-sample residuals before touching 2025."
    ],
    evidence: [
      "The selected weather-informed HGB model records 12.546 MWh test MAE in 2025 versus 32.816 MWh for the 7-day seasonal naive baseline.",
      "A weekly block bootstrap estimates a 20.270 MWh MAE advantage; the reported interval is tied to this specific sample.",
      "The 80% interval covers only 72.1% of the untouched test, a deliberately visible calibration limitation."
    ],
    quality: [
      "Quality checks cover continuity, duplicates, weather coverage and feature leakage.",
      "SQL marts, model registry, metrics and figures are regenerated by the pipeline.",
      "Ruff, pytest and GitHub Actions validate the platform."
    ],
    limitations: [
      "The task is one-step-ahead forecasting, not recursive multi-week forecasting.",
      "Target-day ERA5 weather is a reproducible proxy, not a historical weather-forecast archive.",
      "Results are predictive associations, not operational dispatch advice."
    ]
  },
  {
    slug: "ecommerce-conversion-ml",
    title: "E-commerce Conversion ML",
    eyebrow: "Governed supervised learning",
    description:
      "A leakage-aware classification system with model comparison, calibration, cost policies, cohort stress tests, monitoring and an API.",
    summary:
      "Focuses on responsible model selection: accuracy is reported alongside feature availability, calibration, uncertainty and drift diagnostics.",
    image: "/assets/ecommerce-governance-dashboard.png",
    imageAlt: "Static governance dashboard for the e-commerce conversion model.",
    githubUrl: "https://github.com/0227lia/ecommerce-conversion-ml",
    sourceName: "UCI Online Shoppers Purchasing Intention Dataset",
    sourceUrl: "https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset",
    categories: ["Machine learning", "MLOps", "Classification"],
    technologies: ["Python", "scikit-learn", "FastAPI", "Pydantic", "Docker", "Streamlit"],
    metrics: [
      { value: "12,330", label: "public e-commerce sessions" },
      { value: "0.7602", label: "deployment-safe ROC-AUC" },
      { value: "500", label: "test bootstrap resamples" },
      { value: "16", label: "tests across model and API behavior" }
    ],
    challenge:
      "Estimate a session conversion probability without presenting a potentially end-of-session feature as safely available for early scoring. The result must also expose uncertainty, calibration and policy trade-offs.",
    approach: [
      "Download the public dataset with a manifest and validate schema and ranges.",
      "Use a stratified 60/20/20 train-validation-test split and preprocessing inside pipelines.",
      "Compare prevalence, logistic and histogram gradient boosting baselines with cross-validated tuning.",
      "Run a PageValues ablation before defining the deployment-safe candidate.",
      "Calibrate on validation, define F1 and normalized-cost thresholds, then evaluate an untouched test with bootstrap intervals."
    ],
    evidence: [
      "The full-session benchmark reaches 0.9293 ROC-AUC, but the portfolio treats it as a performance ceiling rather than an early-scoring deployment candidate.",
      "The deployment-safe model reaches 0.7602 ROC-AUC, 0.3513 average precision and 0.1163 Brier score on the untouched test.",
      "The repository exposes PSI drift references, cohort stress checks and FastAPI contracts alongside the dashboard."
    ],
    quality: [
      "Feature availability is treated as a modeling requirement, not a post-hoc caveat.",
      "The serialized bundle records its numerical environment for compatibility review.",
      "Pytest, Ruff and GitHub Actions cover pipelines, metrics, calibration, costs, drift and API endpoints."
    ],
    limitations: [
      "The UCI data provides month only, so it cannot support a true chronological holdout.",
      "Cost units are a transparent analytical scenario, not observed company economics.",
      "PSI signals distribution change but does not by itself prove a performance decline."
    ]
  }
];

export const projectCategories = ["All", ...new Set(projects.flatMap((project) => project.categories))];
