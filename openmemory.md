# Product_Stackgen — OpenMemory Guide

## Overview
Next.js recreation of the StackGen × Gradical **Aiden OS** site from Figma file [AOF - StackGen x Gradical](https://www.figma.com/design/3j6C3yecgFKFfQva31ECS8):
- Home `1067:681` (1440×7835)
- Platform + Product Pages `700:672` (Platform + 4 products)

App lives in `landing/` (Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript).

## Architecture
- **Pixel source of truth:** Native Figma MCP frame exports → `public/sections/` (home) and `public/pages/` (platform + products)
- **Interactive layer:** `FigmaPage` + percentage hotspots (`Hotspot`) matching Figma coordinates
- **Routes:** `/` home · `/platform` · `/products` → InfraOps · `/products/[slug]`
- **Design tokens:** Figma variables (ink/cream/mist/accent palette, Geist + JetBrains Mono)

## User Defined Namespaces
- landing
- design

## Components
- `FigmaPage` — shared artboard renderer (Image + hotspots + SEO)
- `Hotspot` — artboard-relative clickable regions
- `nav-hotspots` — home island nav + pill nav shared by platform/product frames
- `products` — product page definitions + hotspot layouts

## Patterns
- Design → code via Figma MCP `get_design_context` / `get_screenshot` / `get_variable_defs`
- Prefer native-resolution screenshots (`maxDimension` ≥ longest edge) for pixel fidelity
- Products tab lands on InfraOps (Figma Products active state); Platform tab → `/platform`

## Key Figma frames
| Node | Route | Size |
|------|-------|------|
| 1067:681 home | `/` | 1440×7835 |
| 700:673 Platform / Aiden OS | `/platform` | 1440×5209 |
| 1035:315 Product / InfraOps | `/products/infraops` | 1440×2162 |
| 1035:367 Product / DevOps | `/products/devops` | 1440×1724 |
| 1035:419 Product / Observability | `/products/observability` | 1440×1724 |
| 1035:471 Product / SRE | `/products/sre` | 1440×1724 |
