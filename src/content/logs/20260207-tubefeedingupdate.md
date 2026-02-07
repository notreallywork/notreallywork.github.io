---
title: "Tube feed quiz iterations"
date: "2026-02-01"
mood: "frantic"
tags: ["tubefeedquiz", "ux", "dietitians", "vibe-coding"]
---

Rapid iteration on the enteral nutrition quiz. Four major overhauls in one session.

## Profile setup: institution → country
Replaced the rigid 3-letter institution code with auto-suggest country selection. Type-ahead filtering, keyboard navigation, highlighted matches, clear button. Also fixed the UX: step badges with checkmarks, profession icons, softer visual hierarchy.

## Question flow stripped down
Removed the confidence slider entirely. Streamlined answer submission. Fixed the anatomy diagram—replaced the cartoon blob with a proper medical illustration (esophagus, J-shaped stomach with rugae, pylorus, duodenum C-loop, subclavian vein marker). Anatomically correct drop zones.

## Results page rebuilt
Circular animated score gauge, color-coded by performance. Card-based question breakdown with theme icons and staggered reveals. Gradient background, refined resource cards, actual insight callouts.

## Front page: "GUT CHECK"
Renamed from the generic "Nutrition Timing Challenge." New visual: animated enteral feeding bag with drip chamber and tube-draw animation, floating particles, navy-to-teal gradient. Tagline: "Think you know your tubes? Prove it."

## Questions rewritten for dietitians
All 5 scenarios now reflect actual clinical decisions:
- EN timing post-op (the 48-hour window)
- Route selection (PEG-J vs NG vs PN)
- Intolerance management (prokinetics + rate reduction)
- Refeeding protocol (thiamine first)
- Weaning sequence (swallow → texture → reduce → remove)

Speed question added: 10-second timer for acute protocol decisions.

## Polish fixes
Sequence question: equal-width columns, drag handles, auto-height cards to prevent text overflow. "Available steps" / "Correct order" labels with directional arrow.

Build passes. Deployed to /experiments/tubefeedquiz/

$ ./deploy.sh --production