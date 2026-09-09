import type { Metadata } from "next";
import { FigmaPage } from "@/components/FigmaPage";
import { pillNavHotspots } from "@/lib/nav-hotspots";

const W = 1440;
const H = 5209;

export const metadata: Metadata = {
  title: "Platform — Aiden OS | StackGen",
  description:
    "Agent Ops Platform for the AI native SDLC. Purpose built on one Agentic OS with shared context, governance, and domain agents.",
};

export default function PlatformPage() {
  return (
    <FigmaPage
      src="/pages/platform.png"
      alt="Aiden OS Platform — Agent Ops Platform for the AI native SDLC"
      width={W}
      height={H}
      priority
      hotspots={[
        ...pillNavHotspots(H),
        {
          href: "#book-demo",
          label: "Schedule a demo",
          x: 540,
          y: 454,
          w: 157,
          h: 46,
        },
        {
          href: "#os",
          label: "See how the OS works",
          x: 709,
          y: 454,
          w: 192,
          h: 46,
        },
        {
          href: "/products/infraops",
          label: "Explore InfraOps",
          x: 86,
          y: 780,
          w: 120,
          h: 24,
        },
        {
          href: "/products/devops",
          label: "Explore DevOps",
          x: 410,
          y: 780,
          w: 120,
          h: 24,
        },
        {
          href: "/products/observability",
          label: "Explore Observability",
          x: 734,
          y: 780,
          w: 150,
          h: 24,
        },
        {
          href: "/products/sre",
          label: "Explore SRE",
          x: 1058,
          y: 780,
          w: 100,
          h: 24,
        },
        {
          href: "#book-demo",
          label: "Schedule a demo",
          x: 96,
          y: 5050,
          w: 1248,
          h: 38,
        },
      ]}
      seo={
        <div className="sr-only">
          <h1>Agent Ops Platform for the AI native SDLC</h1>
          <p>
            Aiden is an Agentic OS for DevOps and Platform engineers. Build and
            operate production, then observe and remediate it with shared
            context and guardrails.
          </p>
        </div>
      }
    />
  );
}
