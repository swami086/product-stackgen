# Product_Stackgen — OpenMemory Guide

## Overview
Next.js recreation of the StackGen × Gradical **Aiden OS** landing page from Figma file [AOF - StackGen x Gradical](https://www.figma.com/design/3j6C3yecgFKFfQva31ECS8) node `home` (`1067:681`, 1440×7835).

App lives in `landing/` (Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript).

## Architecture
- **Pixel source of truth:** Figma MCP full-frame export at native 1440×7835 → `landing/public/sections/home-full.png`
- **Interactive layer:** percentage-positioned hotspots + nav overlay matching Figma coordinates
- **Design tokens:** Figma variables (ink/cream/mist/accent palette, Geist + JetBrains Mono)
- **Section exports:** `landing/public/sections/*.png` for per-section QA / future HTML rebuilds

## User Defined Namespaces
- landing
- design

## Components
- `SiteNav` — interactive overlay for Figma Nav (`1067:683`)
- `Hotspot` — artboard-relative clickable regions
- Landing page — composes full Figma render + SEO copy

## Patterns
- Design → code via Figma MCP `get_design_context` / `get_screenshot` / `get_variable_defs`
- When a frame exceeds MCP context, split by direct children of `1067:709`
- Prefer native-resolution screenshots (`maxDimension` ≥ longest edge) for pixel fidelity
- Store remote Figma asset URLs locally under `public/` (expire ~7 days)

## Key Figma structure (`home`)
| Node | Role | Size |
|------|------|------|
| 1067:683 | Nav | 848×57 |
| 1067:710 | Hero | 1344×678 |
| 1067:4557 | Offerings | 1344×1526 |
| 1099:7715 | Shared World Model | 1344×1055 |
| 1155:8531 | Expert Agents | 1344×667 |
| 1204:9506 | Governed Orchestration | 1344×998 |
| 1220:13436 | Insights | 1344×838 |
| 1256:17433 | CTA | 1344×598 |
| 1067:6310 | Footer | 1344×764 |
