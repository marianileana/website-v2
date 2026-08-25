# marianileana.ro

Personal academic website of Marian Ileana - PhD candidate in Computer Science at the National University of Science and Technology POLITEHNICA Bucharest, Pitești University Center.

## About

A single-page site presenting my doctoral research in distributed web systems and machine learning, publication record, academic collaborations, and contact information. Bilingual (English / Romanian).

## Stack

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. The only external dependency is JetBrains Mono from Google Fonts.

- `index.html` — markup and content
- `styles.css` — all styling
- `script.js` — theme/language toggles, keyboard shortcuts, i18n dictionary

## Features

- Dark / light theme (persists via localStorage)
- English / Romanian language switch
- Keyboard navigation (vim-style: `g` then `c`/`e`/`r`/`p`/`j`/`x`)
- Publication list with filtering and sorting
- Fully responsive

## Development

No tooling required. Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

Content © Marian Ileana. Code released under the MIT License (see LICENSE).
