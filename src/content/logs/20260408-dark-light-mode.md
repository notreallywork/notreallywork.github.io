---
title: "Dark/light mode toggle"
date: "2026-04-08"
mood: "zen"
tags: ["css", "theming", "notreally.work", "tailwind"]
---

Added a dark/light mode toggle to the site. The amber-on-black was getting heavy.

## The problem with hardcoded colors

Every component used hardcoded Tailwind arbitrary values — `text-[#ffb000]`, `bg-[#0a0a0a]`, `border-[#CC8800]/30` — across 14 files. No CSS variable layer, so no way to flip a theme without touching every component.

The fix was to move all colors into CSS custom properties first, then point `@theme inline` tokens at those variables. Once Tailwind's semantic tokens (`text-foreground`, `text-muted`, `border-border`, etc.) reference CSS vars, a `[data-theme="light"]` selector on `<html>` is enough to swap the entire palette at runtime.

## The light mode palette

Didn't want a generic white-background mode. Kept the amber character by inverting the luminance relationship rather than switching to neutral grays:

- Background: `#F5F0E8` — warm cream, reads like aged paper
- Primary text: `#1A1000` — near-black brown, not pure black
- Secondary text: `#6B4400` — mid amber-brown
- Chrome/decorative: `#A07840` — muted, stays out of the way
- Border: `#B87800` — visible amber, lighter than dark mode's `#ffb000`
- Green: `#1A6800` — readable on cream
- Red: `#C02000` — readable on cream

The hover state — amber background, dark text — works unchanged in both modes.

## Flash prevention

Static sites have a FOUC problem with theme persistence: the HTML renders before JavaScript runs, so the wrong theme flashes for a frame. Fixed with a tiny inline script in `<head>` that reads localStorage and sets `data-theme` on `<html>` before the browser paints anything:

```js
(function(){
  var t = localStorage.getItem('nrw-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
```

Seven lines. No dependencies. Runs synchronously in the document head.

## Toggle placement

`$ theme [dark]` / `$ theme [light]` in the sidebar footer on desktop, at the bottom of the mobile nav menu. Fits the terminal aesthetic — looks like a shell command, not a sun/moon icon.

## What broke

`Badge.tsx` was using `border-black text-black` for the `functional` status. Invisible in dark mode, which is why it was never noticed. Fixed to `border-green text-green` to match what the rest of the codebase was doing for status colors.

`LogItem.tsx` and `ProjectRow.tsx` had `border-black` dividers. Same problem, same fix.

`logs/page.tsx` had a stray `#804400` from an earlier iteration — a color that predated the three-tier system and wasn't in it. Replaced with `text-muted`.
