# notreally.work

Experimental archive. Mostly broken. Occasionally functional.

A terminal-themed static site built with Next.js, archiving chaotic experiments and half-finished builds. The domain is the only joke—the interface takes itself completely seriously.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, Static Export)
- **Styling:** Tailwind CSS (Amber terminal theme: `#0a0a0a` bg, `#ffb000` text)
- **Content:** Markdown files with YAML frontmatter (`gray-matter`)
- **Typography:** Courier New / System Monospace (forced everywhere)
- **Deployment:** Static export to Vercel/Netlify

---

## Folder Structure
notreallywork/                          # Project root
├── src/                                # Next.js application source
│   ├── app/                            # App Router
│   │   ├── layout.tsx                  # Root shell (terminal styling)
│   │   ├── page.tsx                    # Homepage (
 ls listing)
│   │   ├── globals.css                 # Terminal amber theme
│   │   ├── not-found.tsx               # 404 terminal error
│   │   ├── projects/[slug]/page.tsx    # Project detail pages
│   │   ├── logs/[slug]/page.tsx        # Log entry pages
│   │   └── colophon/page.tsx           # About page
│   │
│   ├── components/
│   │   ├── layout/Sidebar.tsx          # Desktop nav (
 
 ls style)
│   │   ├── layout/Header.tsx           # Mobile menu ($ menu [+])
│   │   └── ui/                         # Badge, ExternalLink, etc.
│   │
│   ├── lib/
│   │   ├── content.ts                  # Markdown parser
│   │   └── types.ts                    # TypeScript interfaces
│   │
│   └── content/                        # CMS: Markdown files
│       ├── projects/                   # Project metadata (.md)
│       │   ├── 20250131-shader-glitch.md
│       │   └── 20260201-tubefeedquiz.md
│       └── logs/                       # Dev journal entries (.md)
│           └── 20250131-init.md
│
├── public/                             # Static assets (served at root)
│   ├── experiments/                    # HOSTED EXPERIMENTS
│   │   ├── hello/                      # Each folder = one build
│   │   │   └── index.html              # Built output only
│   │   └── tubefeedquiz/
│   │       ├── index.html              # Built from Vite/React/Vanilla
│   │       └── assets/                 # JS/CSS from build
│   └── assets/                         # Images for markdown
│
├── experiments/                        # SOURCE CODE (development only)
│   └── tubefeedquiz/                   # Original project source
│       ├── src/                        # Source files
│       ├── vite.config.ts              # Build config
│       ├── package.json
│       └── dist/                       # Build output → copy to public/
│
├── next.config.ts                      # Static export + trailing slash
└── package.json


---

## Taxonomy Rules

| Location | What Goes Here | What DOESN'T Go Here |
|----------|---------------|---------------------|
| `src/content/projects/` | `.md` files with metadata & summary | NO built code, NO HTML |
| `public/experiments/` | Built `index.html` + assets (production) | NO source code, NO configs |
| `experiments/` (root) | Source code for development (full projects) | NOT deployed (build → public/) |

---

## Workflow: Adding a New Experiment

### 1. Develop your project
cd experiments/my-new-game
npm install
npm run dev        # Develop locally

### 2. Build for production
npm run build      # Creates dist/ folder

### 3. Deploy to site
# Copy dist CONTENTS to public/ (not the folder itself)
cp -r experiments/my-new-game/dist/* public/experiments/my-new-game/

### 4. Create metadata
Create src/content/projects/YYYYMMDD-my-new-game.md:
---
title: "My New Game"
date: "2026-02-01"
status: "functional"        # functional | experimental | abandoned | broken
demo: "/experiments/my-new-game/"
github: "username/my-new-game"
tags: ["canvas", "game", "js"]
summary: "A brief description of what this does."
---

## Objective
What I was trying to build.

## Outcome
What actually happened.

## Controls
Arrow keys to move, space to shoot.

### 5. Restart dev server
bash
Copy
Ctrl+C && npm run dev
Visit http://localhost:3000/projects/my-new-game/


### Workflow: Adding a Log Entry
Create src/content/logs/YYYYMMDD-something.md:
---
title: "Debugging at 3am"
date: "2026-02-01"
mood: "frantic"           # frantic | zen | confused | triumphant | tired
tags: ["debugging", "css"]
---

Spent 4 hours on a flexbox bug. It was `display: flex` vs `display: block`.
Never again.

Restart server. It appears in /logs/ automatically.

### Git Strategy
Commit these:
    src/ (all site code)
    src/content/ (markdown files)
    public/experiments/*/index.html (built files only)
    public/experiments/*/assets/ (built assets)
    Config files (next.config.ts, tailwind.config.ts, etc.)
    Don't commit these:
    node_modules/ (root or experiments)
    experiments/*/dist/ (temp build output)
    experiments/*/node_modules/
    .next/ (Next.js cache)
    dist/ (main site build)

Add to .gitignore:
    node_modules/
    .next/
    dist/
    experiments/*/node_modules/
    experiments/*/dist/

### Development Commands
# Start dev server (required restart after adding content/)
npm run dev

# Build static site (output to dist/)
npm run build

# Preview production build
npx serve dist/

### Terminal Aesthetic Rules
Background: #0a0a0a (CRT black)
Text: #ffb000 (Amber phosphor)
Secondary: #804400 (Dim amber)
Success: #33ff00 (Green - functional status)
Error: #ff3333 (Red - broken status)
Font: Courier New / Monospace (forced everywhere)
Borders: 1px solid #ffb000
Radius: 0px (brutalist)
Prompts: $ command [args]

### Status Definitions

| Status         | Color | Meaning                               |
| -------------- | ----- | ------------------------------------- |
| `functional`   | Green | Works as intended (surprisingly)      |
| `experimental` | Amber | Works but unpredictable               |
| `abandoned`    | Dim   | Lost interest, archived               |
| `broken`       | Red   | Doesn't work (celebrated, not hidden) |