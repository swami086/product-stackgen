import { FigmaPage } from "@/components/FigmaPage";
import { homeNavHotspots } from "@/lib/nav-hotspots";

const W = 1440;
const H = 7835;

export default function HomePage() {
  return (
    <FigmaPage
      src="/sections/home-full.png"
      alt="Aiden OS landing page — Agent Ops Platform for the AI native SDLC"
      width={W}
      height={H}
      priority
      hotspots={[
        ...homeNavHotspots,
        { href: "#book-demo", label: "Book Demo", x: 484, y: 454, w: 196, h: 40 },
        {
          href: "#factory",
          label: "See how the factory works",
          x: 701,
          y: 454,
          w: 255,
          h: 40,
        },
        {
          href: "/products/infraops",
          label: "Explore InfraOps",
          x: 67,
          y: 1488,
          w: 132,
          h: 30,
        },
        {
          href: "/products/devops",
          label: "Explore DevOps",
          x: 403,
          y: 1488,
          w: 128,
          h: 30,
        },
        {
          href: "/products/observability",
          label: "Explore Observability",
          x: 739,
          y: 1488,
          w: 161,
          h: 30,
        },
        {
          href: "/products/sre",
          label: "Explore SRE",
          x: 1075,
          y: 1488,
          w: 104,
          h: 30,
        },
        {
          href: "/products",
          label: "Explore Agents",
          x: 98,
          y: 3680,
          w: 140,
          h: 40,
        },
        {
          href: "#book-demo",
          label: "Book Demo",
          x: 622,
          y: 6220,
          w: 196,
          h: 40,
        },
      ]}
      seo={<SeoCopy />}
    />
  );
}

function SeoCopy() {
  return (
    <div className="sr-only">
      <h1>Agent Ops Platform for the AI native SDLC</h1>
      <p>
        Aiden is an Agentic OS for DevOps, Platform engineers with DevOps and
        SRE teams build and operate production, then observe and remediate it
        with shared context and guardrails in the same path.
      </p>
      <h2>Purpose built on one Agentic OS</h2>
      <ul>
        <li>Aiden for InfraOps</li>
        <li>Aiden for DevOps</li>
        <li>Aiden for Observability</li>
        <li>Aiden for SRE</li>
      </ul>
    </div>
  );
}
