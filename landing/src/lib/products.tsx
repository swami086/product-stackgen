import { FigmaPage, type HotspotSpec } from "@/components/FigmaPage";
import { pillNavHotspots } from "@/lib/nav-hotspots";

type ProductDef = {
  slug: string;
  title: string;
  src: string;
  height: number;
  eyebrow: string;
  blurb: string;
  platformLinkY: number;
  finalCtaY: number;
};

export const PRODUCTS: Record<string, ProductDef> = {
  infraops: {
    slug: "infraops",
    title: "Aiden for InfraOps",
    src: "/pages/product-infraops.png",
    height: 2162,
    eyebrow: "BUILD",
    blurb:
      "Turn infrastructure intent into governed AppStacks — approved modules, policies, and a path to deploy.",
    platformLinkY: 1749,
    finalCtaY: 1869,
  },
  devops: {
    slug: "devops",
    title: "Aiden for DevOps",
    src: "/pages/product-devops.png",
    height: 1724,
    eyebrow: "OPERATE",
    blurb:
      "Turn operational requests into reviewed, policy-aware work — with inspectable runs.",
    platformLinkY: 1311,
    finalCtaY: 1431,
  },
  observability: {
    slug: "observability",
    title: "Aiden for Observability",
    src: "/pages/product-observability.png",
    height: 1724,
    eyebrow: "OBSERVE",
    blurb:
      "Keep your dashboards. Add an agentic layer that reads shared context on top.",
    platformLinkY: 1311,
    finalCtaY: 1431,
  },
  sre: {
    slug: "sre",
    title: "Aiden for SRE",
    src: "/pages/product-sre.png",
    height: 1724,
    eyebrow: "REMEDIATE",
    blurb:
      "Triage and RCA, then remediation inside policy bounds with shared context.",
    platformLinkY: 1311,
    finalCtaY: 1431,
  },
};

export function productHotspots(def: ProductDef): HotspotSpec[] {
  return [
    ...pillNavHotspots(def.height),
    {
      href: "#book-demo",
      label: "Schedule a demo",
      x: 96,
      y: 320,
      w: 200,
      h: 40,
    },
    {
      href: "#how-it-works",
      label: "How it works",
      x: 308,
      y: 320,
      w: 140,
      h: 40,
    },
    {
      href: "/platform",
      label: "Explore Platform",
      x: 594,
      y: def.platformLinkY + 28,
      w: 252,
      h: 64,
    },
    {
      href: "#book-demo",
      label: "Schedule a demo",
      x: 96,
      y: def.finalCtaY + 183,
      w: 1248,
      h: 38,
    },
  ];
}

export function ProductPageView({ slug }: { slug: keyof typeof PRODUCTS }) {
  const def = PRODUCTS[slug];
  return (
    <FigmaPage
      src={def.src}
      alt={`${def.title} — product page`}
      width={1440}
      height={def.height}
      priority
      hotspots={productHotspots(def)}
      seo={
        <div className="sr-only">
          <h1>{def.title}</h1>
          <p>{def.blurb}</p>
          <p>{def.eyebrow}</p>
        </div>
      }
    />
  );
}
