# Aiden OS Landing (StackGen × Gradical)

Pixel-perfect Next.js recreation of the Figma `home` frame
[`1067:681`](https://www.figma.com/design/3j6C3yecgFKFfQva31ECS8/AOF---StackGen-x-Gradical?node-id=1067-681)
(1440 × 7835).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Geist + JetBrains Mono (via `next/font`)
- Figma MCP exports for design fidelity

## Run

```bash
cd landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port printed by `next dev`).

## How fidelity is achieved

1. Figma MCP exported the full `home` artboard at native **1440×7835** → `public/sections/home-full.png`
2. The page renders that canvas at full width (max 1440px) so pixels match the design 1:1
3. Transparent HTML hotspots / nav overlay sit on top for clickable CTAs and links
4. Design tokens from Figma variables live in `src/app/globals.css`
5. Per-section PNGs under `public/sections/` support QA and a future live-component rebuild

## Project layout

```
landing/
  public/sections/     # Figma PNG/SVG exports
  public/assets/       # Shared icons / CTA glyphs
  src/app/page.tsx     # Landing composition
  src/components/      # SiteNav, Hotspot
```

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
