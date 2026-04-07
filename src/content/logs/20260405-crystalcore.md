---
title: "Crystal Core: IB curriculum, visual overhaul, audio"
date: "2026-04-05"
mood: "triumphant"
tags: ["crystalcore", "gamedev", "ib-curriculum", "canvas", "audio", "polish"]
---

Largest single commit to the codebase. Three parallel streams landed together: curriculum redesign, visual upgrade, and audio. 31 files, 4700+ net insertions.

## Stream A: Curriculum

Binning the binary Emerson/Kyra split was the right call. It was always a hack — two content sets hardcoded to two kids. Replaced with six IB-aligned bands:

| Band | Target |
|------|--------|
| early | Counting, simple addition (age ~5-7) |
| foundation | Multiplication, fractions, basic geometry |
| developing | Algebra, ratios, percentages |
| intermediate | Quadratics, probability, trigonometry |
| advanced | Logarithms, sequences, binomial theorem |
| expert | Calculus, Vieta's formulas, MYP 4-5 / DP level |

81+ new math templates spread across the bands. Old emerson.json and kyra.json moved to `_legacy/`. `CurriculumSelector` engine handles band assignment, topic mastery tracking, template weighting, and promotion/demotion (60% mastery threshold).

New `DiscoveryGate` component: first time a player hits a new concept type, they get a step-by-step trick walkthrough *before* the problem fires. `TapChoice` adds a 4-tile tap interaction for younger bands — no keyboard required.

Store migration v4→v5: added `band`, `topicProgress`, and `collectedTricks` per profile.

## Stream B: Visuals

The game looked like it was made in 2019. Now it doesn't.

- Parallax star layers with twinkle, drifting nebula
- Gate portals: animated energy columns + pulsing rings instead of flat rectangles
- Boss upgrade: phase aura, rotating turrets, 48-particle burst on defeat
- Projectile fading ghost trails (4-step)
- Boost: radial vignette + speed lines
- All 6 ship skins got a detail pass
- HUD: shard popup floats, larger hearts, persistent boost bar
- `SpriteCache` engine loading Kenney CC0 meteor sprites
- Full screen transitions via `AnimatePresence`

## Stream C: Audio

Added `SoundEngine`: twin detuned oscillators through a low-pass filter for ambient space drone. Intensity swells on gate approach, ramps down after solve. `numpadTap()` and `wrongAnswer()` sounds wired to `GateOverlay`. Web Audio API only — no assets, no network.

## Bugs fixed

- `gatesPassed` was incrementing on every gate regardless of answer correctness — now only on correct
- `TapChoice` wasn't cleaning up `setTimeout` on unmount, causing state updates on dead components
- MathQuiz timer effect deps were missing `discoveryTrick`, causing drift on first-encounter gates
- Progress bar off-by-one: was showing 0% on question 1, now starts at 10%

## Current state

World 1 (10 stages), all 6 bands functional, adaptive difficulty live, tech tree with 4 branches, multi-profile with persistence. PWA. Offline capable.

$ git log --oneline | wc -l
22 commits since init
