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
  imageWidth: number;
  imageHeight: number;
  githubUrl: string;
  sourceName: string;
  sourceUrl: string;
  categories: string[];
  technologies: string[];
  architecture: string[];
  artifacts: string[];
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
    imageWidth: 2827,
    imageHeight: 2059,
    githubUrl: "https://github.com/0227lia/valencia-bike-equity-analysis",
    sourceName: "Valencia Open Data",
    sourceUrl:
      "https://opendata.vlci.valencia.es/dataset/aparcaments-bicicletes-aparcamientos-bicicletas",
    categories: ["Geospatial", "Urban analytics", "Decision support"],
    technologies: ["Python", "Shapely", "pyproj", "Plotly", "Streamlit", "pytest"],
    architecture: [
      "Versioned municipal snapshots",
      "Schema and CRS validation",
      "Projected accessibility analysis",
      "MCDA robustness and Moran diagnostics",
      "Counterfactual planning artifacts"
    ],
    artifacts: ["Offline snapshot", "Spatial diagnostics", "MCDA simulation", "Streamlit dashboard", "Tests and CI"],
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
    imageWidth: 2814,
    imageHeight: 1974,
    githubUrl: "https://github.com/0227lia/valenbisi-pulse",
    sourceName: "CityBikes API / versioned local sample",
    sourceUrl: "https://api.citybik.es/v2/networks/valenbisi",
    categories: ["Operations research", "Mobility", "Optimization"],
    technologies: ["Python", "SciPy", "scikit-learn", "KMeans", "Plotly", "Streamlit"],
    architecture: [
      "Versioned CityBikes snapshot",
      "Inventory and geospatial validation",
      "k-NN pressure and KMeans zones",
      "Minimum-cost LP rebalancing",
      "Stress scenarios and dashboard"
    ],
    artifacts: ["Data validation", "Risk scoring", "Linear program", "Stress tests", "Streamlit dashboard", "Tests and CI"],
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
    imageWidth: 2545,
    imageHeight: 2052,
    githubUrl: "https://github.com/0227lia/spain-electricity-demand-platform",
    sourceName: "REE API, Open-Meteo ERA5 and Spanish holidays",
    sourceUrl: "https://www.ree.es/en/datos/apidata",
    categories: ["Forecasting", "Data engineering", "Energy"],
    technologies: ["Python", "DuckDB", "SQL", "scikit-learn", "Plotly", "Streamlit"],
    architecture: [
      "REE, ERA5 and holiday sources",
      "Manifested ingestion",
      "DuckDB analytical marts",
      "Leakage-safe temporal features",
      "Expanding-window backtests",
      "Intervals and dashboard"
    ],
    artifacts: ["ETL manifests", "SQL marts", "Temporal backtests", "Prediction intervals", "Streamlit dashboard", "Tests and CI"],
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
      "The selected weather-informed HGB model records 12,546 MWh test MAE in 2025 versus 32,816 MWh for the 7-day seasonal naive baseline.",
      "A weekly block bootstrap estimates a 20,270 MWh MAE advantage; the reported interval is tied to this specific sample.",
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
    imageWidth: 2499,
    imageHeight: 1786,
    githubUrl: "https://github.com/0227lia/ecommerce-conversion-ml",
    sourceName: "UCI Online Shoppers Purchasing Intention Dataset",
    sourceUrl: "https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset",
    categories: ["Machine learning", "MLOps", "Classification"],
    technologies: ["Python", "scikit-learn", "FastAPI", "Pydantic", "Docker", "Streamlit"],
    architecture: [
      "Versioned UCI dataset",
      "Schema and split controls",
      "Pipeline model comparison",
      "Feature-availability ablation",
      "Calibration and cost policy",
      "Monitoring, API and dashboard"
    ],
    artifacts: ["Model pipelines", "Ablation study", "Calibration", "Drift monitoring", "FastAPI", "Docker", "Tests and CI"],
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
  },
  {
    slug: "valencia-open-data-navigator",
    title: "Valencia Open Data Navigator",
    eyebrow: "NLP retrieval and open data",
    description:
      "A hybrid retrieval system for a versioned Valencia CKAN catalog, with benchmarked ranking, API and an interactive discovery interface.",
    summary:
      "Combines lexical and latent-semantic signals to make multilingual municipal metadata easier to inspect without hiding the ranking trade-offs.",
    image: "/assets/valencia-open-data-retrieval-scorecard.png",
    imageAlt: "Benchmark scorecard comparing lexical, semantic and hybrid retrieval strategies.",
    imageWidth: 2362,
    imageHeight: 758,
    githubUrl: "https://github.com/0227lia/valencia-open-data-navigator",
    sourceName: "Valencia Open Data CKAN catalog",
    sourceUrl: "https://opendata.vlci.valencia.es/api/3/action/package_search",
    categories: ["NLP", "Information retrieval", "Open data"],
    technologies: ["Python", "scikit-learn", "FastAPI", "Streamlit", "TF-IDF", "pytest"],
    architecture: [
      "Versioned CKAN snapshot",
      "Metadata quality controls",
      "Spanish and Valencian normalization",
      "BM25, LSA and rank fusion",
      "Versioned retrieval benchmark",
      "FastAPI and Streamlit"
    ],
    artifacts: ["Catalog snapshot", "BM25 and LSA", "RRF and MMR", "Benchmark suite", "FastAPI", "Tests and CI"],
    metrics: [
      { value: "296", label: "datasets in versioned snapshot" },
      { value: "20", label: "manual relevance queries" },
      { value: "0.793", label: "best MRR@10 (BM25)" },
      { value: "0.975", label: "best Recall@5 (hybrid)" }
    ],
    challenge:
      "A municipal catalog is often multilingual, unevenly tagged and difficult to navigate with a short information need. The project asks how to improve metadata discovery while keeping the ranking logic and its limits visible.",
    approach: [
      "Fetch all public packages from the official CKAN endpoint and keep a compact metadata snapshot with a SHA-256 manifest.",
      "Validate required fields, duplicate slugs and declared resources before indexing the corpus.",
      "Normalize Spanish and Valencian text, then compare BM25 with word-and-character TF-IDF reduced through latent semantic analysis.",
      "Fuse lexical and semantic rank positions with reciprocal-rank fusion, and apply MMR only when a diverse top result set is useful.",
      "Evaluate all strategies against 20 versioned, manually curated discovery queries before serving results through Streamlit and FastAPI."
    ],
    evidence: [
      "The included 2026-07-13 snapshot contains 296 datasets, 1,184 declared resources and no duplicate slugs or missing titles.",
      "BM25 has the strongest MRR@10 (0.793) and nDCG@10 (0.832) on the small benchmark; the hybrid strategy achieves the highest Recall@5 (0.975).",
      "Hybrid MMR preserves the top-five recall but slightly reduces nDCG, an explicit trade-off for diversity rather than a claim of universal improvement."
    ],
    quality: [
      "The pipeline validates labels against the snapshot before evaluation and can rebuild reports without a network request.",
      "Each API result includes BM25, LSA and RRF components plus matched normalized terms.",
      "Pytest, Ruff, dependency checks and GitHub Actions cover retrieval, labels, API contracts and offline reconstruction."
    ],
    limitations: [
      "The corpus is a snapshot, not a live or official search index.",
      "Twenty manual labels support regression testing but do not establish universal user-search quality.",
      "Rank scores do not validate the contents, freshness or reuse conditions of linked data resources."
    ]
  },
  {
    slug: "valencia-air-quality-lakehouse",
    title: "Valencia Air Quality Lakehouse",
    eyebrow: "Data engineering and SQL",
    description:
      "A reproducible DuckDB warehouse for Valencia public air-quality data, with source contracts, observability controls, SQL marts, API and dashboard.",
    summary:
      "Turns a large, wide municipal CSV into a documented analytical warehouse without hiding coverage gaps or range-screen warnings.",
    image: "/assets/valencia-air-quality-observability-scorecard.png",
    imageAlt: "Observability scorecard with station-hour availability and data-quality controls.",
    imageWidth: 2682,
    imageHeight: 1129,
    githubUrl: "https://github.com/0227lia/valencia-air-quality-lakehouse",
    sourceName: "Valencia Open Data hourly air-quality distribution",
    sourceUrl: "https://opendata.vlci.valencia.es/dataset/hourly-air-quality-data-since-2016",
    categories: ["Data engineering", "SQL", "Data quality"],
    technologies: ["Python", "DuckDB", "SQL", "FastAPI", "Streamlit", "Docker"],
    architecture: [
      "Official 47.9 MB CSV",
      "Source contract and SHA-256 manifest",
      "Typed DuckDB staging",
      "Dimensions and 6.04M fact rows",
      "Observability SQL marts",
      "API and dashboard"
    ],
    artifacts: ["Source contract", "Dimensional model", "SQL quality marts", "FastAPI", "Docker", "Tests and CI"],
    metrics: [
      { value: "449k", label: "station-hour rows in snapshot" },
      { value: "6.04M", label: "long-format measurements" },
      { value: "12", label: "publisher station labels" },
      { value: "22", label: "versioned metrics" }
    ],
    challenge:
      "Public environmental data often arrives as a large wide CSV. The project asks how to make it reusable for analysis while keeping source provenance, completeness and suspicious values visible rather than silently cleaning them away.",
    approach: [
      "Stream the official source with an atomic download, HTTP metadata and a SHA-256 manifest while keeping the raw 47.9 MB CSV out of Git.",
      "Validate Spanish source headers and a reviewed metric catalog before loading a typed DuckDB staging table.",
      "Build station, calendar and metric dimensions, then unpivot the source into a 6.04 million-row long measurement fact through versioned SQL.",
      "Materialize coverage, completeness, daily trends, monitoring-gap and range-screen marts for analysts, an API and an interactive dashboard.",
      "Exercise the same transformation against a labelled synthetic fixture in pytest and GitHub Actions, including a Docker build."
    ],
    evidence: [
      "The committed 2026-07-13 source manifest records a 449,026-row snapshot from 2016-01-01 through 2021-12-31, across 12 publisher station labels and 22 metrics.",
      "Four hard source controls pass: rows are nonempty, station-hours parse, station labels exist and no duplicate station-hour keys are found.",
      "One warning is explicit rather than suppressed: 320 values fall outside broad engineering ranges, split across radiation (198), humidity (63) and noise (59)."
    ],
    quality: [
      "The project stores a source hash and concise manifest without publishing the raw CSV or local warehouse.",
      "Range screening is materialized as its own SQL mart and API response, so data-quality uncertainty remains inspectable.",
      "Ruff, pytest, dependency checks, a fixture rebuild and a Docker build pass in GitHub Actions."
    ],
    limitations: [
      "The warehouse is a reproducible snapshot, not a live municipal monitoring service.",
      "Range screens are engineering controls, not legal thresholds or health guidance.",
      "Published coverage does not prove sensor calibration, scientific validity or the cause of observed changes."
    ]
  }
];

export const projectCategories = ["All", ...new Set(projects.flatMap((project) => project.categories))];
