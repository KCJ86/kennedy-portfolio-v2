export const projects = [
  {
    id: "tastemind",
    num: "01",
    title: "TasteMind",
    tags: [
      "AI",
      "Full Stack",
      "Node.js",
      "PostgreSQL",
      "Claude API",
      "Google Places",
    ],
    desc: "AI-powered restaurant recommendations. Describe a craving in natural language then Claude identifies a dining vibe, Google Places returns 6 real nearby restaurants across 3 categories. Taste profile learns automatically from every 4-star+ review.",
    highlights: [
      "Natural language craving input → AI vibe matching → 6 real restaurant cards",
      "Pending feedback loop — visit + rating only hit DB after the user reviews",
      "Taste profile auto-updates on 4+ star ratings",
      "Daily recommendation limit (10/day) with per-user rate limiting + Helmet security",
      "User codes for returning users — no passwords needed",
    ],
    live: "https://tastemind-production.up.railway.app",
    repo: "https://github.com/KCJ86/tastemind",
    // Replace with your actual screenshot once you have one:
    image: "/assets/projects/tastemind_logo.svg",
  },
  {
    id: "portfolio",
    num: "02",
    title: "This Portfolio",
    tags: ["React", "Vite", "CSS Modules", "Framer Motion"],
    desc: "Editorial black aesthetic built from scratch. Designed with a typographic-first approach, cultural identity woven through photography, and a focus on whitespace and intentional motion.",
    highlights: [
      "Pure black, editorial design system with CSS custom properties",
      "Data-driven architecture — content lives in data files, not JSX",
      "Scroll-aware navbar, full-screen mobile menu",
      "Resume modal with PDF viewer and download",
    ],
    live: "https://kennedycastillonjimenez.com",
    repo: "https://github.com/KCJ86/kennedy-portfolio",
    image: "/assets/projects/kennedy_portfolio_card.svg",
  },
];
