---
title: "Crystal Core dev log"
date: "2026-02-17"
mood: "iterative"
tags: ["crystalcore", "gamedev", "math", "shooter", "pwa", "sibling-optimized"]
---

Three major pivots to get this right. Started as an endless runner, became a lane shooter, ended up as a free-movement space shooter with RPG progression.

## The Pivot: Runner → Shooter
Original design was Temple Run with math gates. Boring. Kids just stared at the screen. Pivoted to active shooting: you blast geometric rocks, collect crystal shards, and recharge your weapon by solving math problems at gates. Suddenly the kids are both engaged — shooting while solving math.

## Virtual Joystick & Controls
Mouse drag was too fast (teleporting), keyboard too slow. Built a floating virtual joystick that appears on touch. 55px radius, 5px dead zone, cyan visual feedback. Movement now feels consistent across tablet and desktop. Spacebar pauses. No more accidental profile switching.

## The Economy: Shards & Upgrades
Math problems = currency. But currency for what? Built a three-tab garage system:
- **Tech Tree**: Linear progression (Speed → Color → Shield → Weapon). No choice paralysis, just save up for the next shiny node.
- **Upgrades**: Permanent stat boosts (Engine Speed, Shield Capacity, Weapon Systems, Boost Duration). 5 tiers each, visible level bars.
- **Math Quiz**: 10 questions for bonus shards (5-8 per correct answer). Safety valve for kids who want to grind upgrades.

Weapons evolved from single bolt → dual green → triple orange spread → quad purple plasma. Visual upgrades tied to damage/fire rate.

## Boss Battles & Scaling
Bosses were too easy (50 HP, slow shooting). Buffed significantly: scaling HP (+50% per defeat), faster projectiles, attack patterns (single → triple → rapid → 5-way fan). Boss count increases per stage (1 boss early, 3 in final stand).

Stage system: World 1, stages 1-1 through 1-10. Each stage has custom distance (5km easy, 20km hard), obstacle density, crystal rarity, and boss count. Difficulty scales automatically based on performance (80%+ accuracy = harder numbers).

## Content Architecture
All math problems live in `/content/gates/` as JSON templates. Emerson gets drag-drop counting (blue crystals + red crystals = drag to merge). Kyra gets numpad input (multiplication, fractions, algebra). Variable substitution creates infinite variety from templates. Easy to extend: drop new JSON, instant content.

## Polish & Juice
- Sound effects: Web Audio API procedural (shoot, explode, collect, boss defeat)
- Screenshake on damage, red flash overlay, invincibility frames with ship blink
- Particle systems: rock explosions, crystal sparkles, boost trails
- Gate overlay pauses game completely—no more multitasking stress
- Profile creation with age/competency detection (auto-sets steering mode and math difficulty)

## Bug Hunt
Fixed the "gate quiz stall"—was double-firing callbacks and not cleaning up setTimeout. Fixed "black screen on results"—race condition where currentRun was null. Fixed "quiz drag doesn't work on tablet"—fallback auto-calculation for tap-to-merge problems.

## Current Flow
Select Profile → Home (Mission/Garage tabs) → Pick Stage 1-1 through 1-10 → Fly & Shoot → Math Gate (pause/solve) → Boss every 5km → Stage Complete at 20km → Spend shards → Repeat.

Build passes. PWA deploys to GitHub Pages. Works offline. LocalStorage persists everything.

$ npm run build && git push origin main