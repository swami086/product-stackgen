import type { HotspotSpec } from "@/components/FigmaPage";

/** Shared pill-nav hotspots for Platform + Product Figma frames (01 Nav). */
export function pillNavHotspots(height: number): HotspotSpec[] {
  // Nav island ≈ x=48–1392, y=15–73 within top 80px band
  return [
    { href: "/", label: "Aiden home", x: 66, y: 28, w: 50, h: 28 },
    { href: "/products", label: "Products", x: 140, y: 30, w: 70, h: 24 },
    { href: "/platform", label: "Platform", x: 220, y: 30, w: 70, h: 24 },
    { href: "#docs", label: "Docs", x: 300, y: 30, w: 45, h: 24 },
    { href: "#company", label: "Company", x: 355, y: 30, w: 70, h: 24 },
    {
      href: "#book-demo",
      label: "Schedule a demo",
      x: 1000,
      y: 22,
      w: 380,
      h: 40,
    },
  ];
}

/** Home artboard nav (1067:683) at y=20 on 1440×7835. */
export const homeNavHotspots: HotspotSpec[] = [
  { href: "/", label: "StackGen home", x: 333, y: 29, w: 114, h: 23 },
  { href: "/products", label: "Products", x: 495, y: 39, w: 77, h: 20 },
  { href: "/platform", label: "Platform", x: 596, y: 39, w: 74, h: 20 },
  { href: "#resources", label: "Resources", x: 694, y: 39, w: 69, h: 20 },
  { href: "#docs", label: "Docs", x: 787, y: 39, w: 34, h: 20 },
  { href: "#company", label: "Company", x: 845, y: 39, w: 62, h: 20 },
  { href: "#book-demo", label: "Book Demo", x: 955, y: 29, w: 104, h: 40 },
  { href: "#login", label: "Login", x: 1070, y: 29, w: 65, h: 40 },
];
