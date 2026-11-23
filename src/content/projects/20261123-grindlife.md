---
title: "GRINDLIFE"
date: "2026-11-23"
status: "functional"
demo: "https://grindlife.notreally.work/"
tags: ["game", "pwa", "satire", "swipe", "typescript", "preact", "vite", "procedural-svg", "offline"]
summary: "A swipe-to-decide parody of modern corporate life. One run is a whole career and a whole life: intern at 22, a ladder to Chief Vibes Officer, six boss types, reorgs, firings, job hunts, and a partner and kids who notice when you answer Slackr at the recital. Ends in a Life in Review dashboard with two eulogies."
---

## Objective

Make the corporate grind playable. Swipe left or right on situations, keep four meters (sanity, money, boss favor, work-life) away from both extremes, climb the ladder, and still have people who love you at the end.

## Outcome

It works. Surprisingly.

- 374 hand-written cards across career, boss, life and job-hunt pools
- 7 rungs, 6 bosses (the Micromanager, the Ghost, the Hustle Founder, Toxic Positivity Lead, the Politician, the Algorithm)
- Life arcs: dating, moving in, wedding, kids, parents, divorce, midlife
- 28 endings, most of them bad. Retiring at 65 happens in about 1% of careful runs.
- **Daily Shift:** same seed for everyone each day, one scored attempt, emoji share string
- **Life in Review:** dual career/life timeline, missed-moments counter, work-vs-life hours ledger, LinkedOut farewell post next to what your family actually said

Balanced with a headless sim (2000 runs per strategy). Random swiping lasts about 5 years. Careful play lasts about 15, with a tail past 28.

## Controls

Drag the card, or press ← / →. Start dragging and dots on the meters show which ones that choice moves (not which way).

## Stack

Vite, TypeScript (strict), Preact and signals, PWA (installable, works offline). Procedural SVG avatars. Everything stays on-device in `localStorage`. No backend, no analytics, no network calls.
