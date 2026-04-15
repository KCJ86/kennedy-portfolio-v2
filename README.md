# Kennedy Castillón Jimenez — Portfolio v2

Personal portfolio site built from scratch with a focus on editorial design, clean architecture, and scalable conventions.

Live at [kennedycastillonjimenez.com](https://kennedycastillonjimenez.com)

---

## Stack

- **React** + **Vite**
- **CSS Modules** with a custom design token system
- **Framer Motion** for animations
- Deployed on **Vercel**

## Structure

```
src/
├── styles/
│   ├── tokens.css        # Design tokens — spacing, type scale, colors
│   ├── reset.css         # Modern CSS reset
│   └── global.css        # Base body styles, scrollbar, selection
├── components/
│   ├── Navbar/           # Scroll-aware nav, full-screen mobile menu
│   ├── Hero/             # Editorial full-viewport name treatment
│   ├── Projects/         # Data-driven project cards with scroll animations
│   ├── Experience/       # Two-column experience + skills grid
│   ├── About/            # Photo + quote bio section
│   ├── Contact/          # Footer CTA with links
│   ├── Modal/            # Resume PDF viewer
│   └── ui/               # Shared primitives: SectionLabel, Tag
├── data/
│   ├── projects.js       # All project content — edit here to add projects
│   └── experience.js     # Experience + skills — edit here to update
└── hooks/
    ├── useScrolled.js    # Scroll position detection
    └── useInView.js      # Intersection observer for scroll animations
```

## Running Locally

```bash
npm install
npm run dev
```

## Adding a Project

Open `src/data/projects.js` and add an entry:

```js
{
  id: "your-project",
  num: "03",
  title: "Project Name",
  tags: ["React", "Node.js"],
  desc: "Short description of what it does.",
  highlights: [
    "Key feature one",
    "Key feature two",
  ],
  live: "https://your-live-url.com",
  repo: "https://github.com/KCJ86/your-repo",
  image: "/assets/projects/your-screenshot.jpg",
}
```

## Adding Assets

Place images in `public/assets/` — they're served at `/assets/` in the browser.

Compress before adding:

```bash
sips -Z 1800 yourimage.JPG --out yourimage.JPG
```

---

Built by Kennedy Castillón Jiménez
