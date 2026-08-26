# marianileana.ro

[![Website](https://img.shields.io/badge/live-marianileana.ro-4ade80?style=flat-square)](https://marianileana.ro/)
[![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-181717?style=flat-square\&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/code%20license-MIT-fbbf24?style=flat-square)](LICENSE)

Personal academic and research website of **Marian Ileana**, PhD candidate in Computer Science at the National University of Science and Technology POLITEHNICA Bucharest, Pitești University Center.

The website serves as a central academic profile for my work in **distributed web systems, machine learning, anomaly detection, IoT, formal methods, and applied informatics**.

**Live website:** https://marianileana.ro/

---

## About

This repository contains the source code of my personal academic website and research portfolio.

The website brings together my doctoral research, publication record, research interests, academic collaborations, education, curriculum vitae, and links to scholarly and professional profiles.

It is designed primarily as a **research-oriented academic presence**, with a lightweight technical implementation and a visual identity inspired by terminal and developer interfaces.

---

## Research Areas

The website reflects my main research interests in Computer Science:

* Distributed Web Systems
* Microservices and Container Orchestration
* Machine Learning
* Anomaly Detection
* Internet of Things
* Cloud and Edge Computing
* Formal Methods
* Finite State Machines
* Timed Automata
* Medical and Applied Informatics
* Scientometrics and Bibliometric Analysis

---

## Website Highlights

The website includes:

* academic and doctoral research profile;
* research interests and current activities;
* publication record with client-side filtering and sorting;
* academic collaborations and co-authorship information;
* education and research experience;
* downloadable academic CV;
* links to major scholarly profiles;
* English / Romanian interface;
* dark / light themes;
* responsive desktop, tablet, and mobile layouts;
* keyboard navigation and shortcuts;
* custom favicon and web-app icons;
* semantic metadata for search engines and social sharing.

---

## Academic Profiles

The website connects to my main academic and professional profiles:

* [Google Scholar](https://scholar.google.com/citations?user=I0XrhWkAAAAJ)
* [ORCID](https://orcid.org/0009-0008-9624-2202)
* [ResearchGate](https://www.researchgate.net/profile/Marian-Ileana)
* [IEEE Xplore](https://ieeexplore.ieee.org/author/280302082301485)
* [SciProfiles](https://sciprofiles.com/profile/4105199)
* [LinkedIn](https://www.linkedin.com/in/marianileana/)

---

## Design and Interface

The website follows a **terminal-inspired academic-tech aesthetic** intended to reflect a Computer Science and research-focused identity.

The visual system combines:

* near-black backgrounds;
* ivory typography;
* neon green primary accents;
* amber and blue secondary accents;
* monospaced typography based on **JetBrains Mono**;
* command-line and terminal-inspired interface elements.

The design supports both **dark and light modes** while maintaining the same visual identity across desktop and mobile devices.

---

## Technology

The website is intentionally built with a minimal and transparent technology stack.

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Hosting and Domain

* GitHub Pages
* Custom domain
* Cloudflare DNS
* HTTPS
* Google Fonts

No frontend framework, package manager, database, server-side runtime, or build process is required.

---

## Architecture

The project is a fully static website:

```text
marianileana.ro
      │
      ▼
GitHub Pages
      │
      ▼
HTML · CSS · JavaScript
```

DNS for the custom domain is managed separately through Cloudflare.

This architecture keeps the project lightweight, portable, easy to maintain, and independent of framework-specific tooling.

---

## Repository Structure

```text
website-v2/
├── index.html
├── styles.css
├── script.js
├── cv.pdf
├── README.md
├── LICENSE
├── CNAME
├── .nojekyll
└── favicon/
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    └── site.webmanifest
```

### Core Files

**`index.html`**
Contains the website structure, academic content, publication information, semantic metadata, and profile data.

**`styles.css`**
Defines the complete visual system, responsive behavior, dark/light themes, and terminal-inspired interface.

**`script.js`**
Handles internationalization, theme switching, publication filtering and sorting, keyboard shortcuts, and other client-side interactions.

**`cv.pdf`**
Downloadable academic curriculum vitae.

**`favicon/`**
Contains browser, mobile, and web-app icon assets.

**`CNAME`**
Maps the GitHub Pages deployment to the production domain `marianileana.ro`.

**`.nojekyll`**
Disables Jekyll processing and allows GitHub Pages to serve the project as a plain static website.

---

## Interface Features

### Internationalization

The website provides an English / Romanian interface, with the selected language stored locally in the browser.

### Themes

Dark and light themes are available, with the selected preference persisted locally.

### Publications

The publication interface supports filtering and sorting directly in the browser without external libraries or server-side processing.

### Keyboard Navigation

Selected actions can be accessed through keyboard shortcuts, reinforcing the terminal-inspired interaction model.

### Responsive Design

The layout adapts to desktop, tablet, and mobile displays, including navigation, publication listings, contact information, and interactive controls.

---

## Metadata and Discoverability

The website includes metadata intended to improve search-engine indexing, identity resolution, and link previews.

Implemented elements include:

* standard HTML metadata;
* canonical URL;
* Open Graph metadata;
* social sharing metadata;
* Schema.org structured data;
* academic profile references;
* responsive viewport configuration;
* favicon and web-app metadata.

Canonical production address:

**https://marianileana.ro/**

---

## Deployment

The production website is deployed through **GitHub Pages** from the `main` branch.

Changes committed to the production branch are automatically deployed after the GitHub Pages workflow completes.

**Production:**
https://marianileana.ro/

The custom domain is configured through the `CNAME` file, while DNS resolution is managed through Cloudflare.

---

## Local Development

No installation or build step is required.

The website can be opened directly through `index.html`, although using a local HTTP server is recommended during development.

For example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Design Philosophy

The project deliberately avoids unnecessary frontend dependencies.

Using native web technologies keeps the website:

* lightweight;
* fast;
* transparent;
* easy to maintain;
* easy to deploy;
* portable;
* independent of framework and package-manager updates.

The technical implementation is intentionally kept secondary to the primary objective of the project: **presenting academic research, publications, collaborations, and professional identity clearly and professionally**.

---

## License and Copyright

The **source code** in this repository is released under the [MIT License](LICENSE).

**Copyright © 2026 Marian Ileana.**

Website content, academic information, curriculum vitae, research materials, publication data, text, and other original personal content are protected by copyright and are **not licensed under the MIT License**, unless explicitly stated otherwise.

Publication titles, publisher names, institutional names, trademarks, and other third-party materials remain the property of their respective owners.

---

**Marian Ileana**
Computer Science · Distributed Systems · Machine Learning · Formal Methods
[marianileana.ro](https://marianileana.ro/)

Copyright © 2026 Marian Ileana.
