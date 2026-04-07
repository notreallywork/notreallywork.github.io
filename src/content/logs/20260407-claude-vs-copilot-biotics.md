---
title: "Claude vs Copilot: same prompt, different outputs"
date: "2026-04-07"
mood: "curious"
tags: ["ai-comparison", "claude", "copilot", "biotics", "vibe-coding", "experiment"]
---

Ran the same prompt cold through Claude and GitHub Copilot. No system instructions. No context. Just:

> Build me an interactive explainer on biotics for a general audience.

Hosted both outputs at `biotics.notreally.work`. No cleanup, no cherry-picking.

## What Claude produced

Four-tab interactive component covering probiotics, prebiotics, postbiotics, and synbiotics. Each section structured identically: formal definition (WHO/FAO 2001 for probiotics, ISAPP 2017/2020/2021 for the others), a plain-language analogy, three mechanism bullets, an evidence grid, a myth-busting callout, and a gut-brain axis section.

The evidence grid is the most considered design decision — three tiers (strong/RCTs, emerging, early/preliminary) color-coded per biotic type. Not binary pass/fail. Not a vague "research suggests." An actual epistemic stance per claim.

The garden metaphor threads all four sections: probiotics are seeds, prebiotics are fertiliser, postbiotics are fruit, synbiotics are seeds planted with their matched fertiliser. Chose a unifying metaphor and committed to it.

The file is named `v4_reprise`. This was not the first attempt. The first three versions got iterated out of existence — presumably progressively stripping down, restructuring, or rebuilding the component until this one was right. The "reprise" suggests a restart after a direction change, not a linear refinement.

**Technical notes:** Pure CSS + HTML + JS, no framework. Designed as an embed — uses CSS custom properties (`--color-background-primary`, `--color-text-primary`, `--font-sans`, `--border-radius-*`) inherited from the host page rather than defining its own. ~20 lines of JavaScript. Clean.

## What Copilot produced

A standalone scroll page. Full HTML document — DOCTYPE, head, body, footer, all included. Self-contained, no CSS variables, no external dependencies. Deploys and renders without a host.

Three sections on probiotics, prebiotics, postbiotics. Synbiotics gets one paragraph. Interactivity is `<details>`/`<summary>` — native HTML disclosure elements, no JavaScript. One hardcoded quiz question with the answer already showing.

Garden analogy also present — seeds, fertilizer, harvest. Independent convergence on the same metaphor.

Content is food-examples-first: yogurt, kefir, onions, bananas. No mechanism description, no clinical definitions, no evidence grading. Written for someone who has never heard the word "biotic."

## The comparison

| | Claude | Copilot |
|---|---|---|
| Format | Component snippet (no html/head/body) | Full standalone document |
| Navigation | Tabbed, JS-driven | Single scroll |
| Interactivity | Custom JS, animated card transitions | `<details>`/`<summary>`, no JS |
| Content depth | WHO/ISAPP citations, 3-tier evidence grading, mechanisms | Food examples, simplified definitions |
| Coverage | All 4 types in equal depth | 3 types + synbiotics as footnote |
| Iterations visible | v4 reprise — at least 4 refinement rounds | v1, single pass |
| Audience assumption | Curious adult who wants the real science | Complete beginner |
| Garden analogy | Yes — extended, each type mapped deliberately | Yes — listed, not developed |

Claude interpreted "general audience" as: intelligent adult, no prior knowledge, deserves accurate information. Copilot interpreted it as: simplify everything, keep it short, assume low engagement.

Neither is wrong. They're different editorial decisions about the same three words.

$ diff claude.html copilot.html
190 lines vs 314 lines. Different in almost every other way.
