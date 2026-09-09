# Aiden OS Site (StackGen × Gradical)

Pixel-perfect Next.js recreation of Figma frames from
[AOF - StackGen x Gradical](https://www.figma.com/design/3j6C3yecgFKFfQva31ECS8):

| Route | Figma | Size |
|-------|-------|------|
| `/` | `home` 1067:681 | 1440×7835 |
| `/platform` | Platform / Aiden OS 700:673 | 1440×5209 |
| `/products` | → InfraOps | — |
| `/products/infraops` | 1035:315 | 1440×2162 |
| `/products/devops` | 1035:367 | 1440×1724 |
| `/products/observability` | 1035:419 | 1440×1724 |
| `/products/sre` | 1035:471 | 1440×1724 |

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Geist + JetBrains Mono (via `next/font`)
- Figma MCP native frame exports for 1:1 fidelity

## Run

```bash
cd landing
npm install
npm run dev
```

## How fidelity is achieved

1. Figma MCP exports each artboard at native resolution under `public/sections/` and `public/pages/`
2. `FigmaPage` renders the canvas at full width (max 1440px) so pixels match 1:1
3. Transparent hotspots overlay Products / Platform / CTAs (see `lib/nav-hotspots.ts`)
4. Design tokens from Figma variables live in `src/app/globals.css`

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
