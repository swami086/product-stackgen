import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { Hotspot } from "@/components/Hotspot";

/** Figma artboard: home 1067:681 — 1440 × 7835 */
const ARTBOARD_W = 1440;
const ARTBOARD_H = 7835;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#14110c]">
      <div className="mx-auto w-full max-w-[1440px]">
        <article
          className="relative w-full"
          style={{ aspectRatio: `${ARTBOARD_W} / ${ARTBOARD_H}` }}
        >
          <Image
            src="/sections/home-full.png"
            alt="Aiden OS landing page — Agent Ops Platform for the AI native SDLC"
            width={ARTBOARD_W}
            height={ARTBOARD_H}
            priority
            unoptimized
            className="absolute inset-0 h-full w-full select-none"
            draggable={false}
          />

          {/* Transparent interactive layer — coordinates from Figma home frame */}
          <div className="absolute inset-0">
            <SiteNav />

            {/* Hero: Book Demo */}
            <Hotspot
              href="#book-demo"
              label="Book Demo"
              x={484}
              y={454}
              w={196}
              h={40}
            />
            {/* Hero: See how the factory works */}
            <Hotspot
              href="#factory"
              label="See how the factory works"
              x={701}
              y={454}
              w={255}
              h={40}
            />

            {/* Offerings explore links */}
            <Hotspot
              href="#infraops"
              label="Explore InfraOps"
              x={67}
              y={1488}
              w={132}
              h={30}
            />
            <Hotspot
              href="#devops"
              label="Explore DevOps"
              x={403}
              y={1488}
              w={128}
              h={30}
            />
            <Hotspot
              href="#observability"
              label="Explore Observability"
              x={739}
              y={1488}
              w={161}
              h={30}
            />
            <Hotspot
              href="#sre"
              label="Explore SRE"
              x={1075}
              y={1488}
              w={104}
              h={30}
            />

            {/* Expert Agents CTA */}
            <Hotspot
              href="#agents"
              label="Explore Agents"
              x={98}
              y={3680}
              w={140}
              h={40}
            />

            {/* Final CTA Book Demo */}
            <Hotspot
              href="#book-demo"
              label="Book Demo"
              x={622}
              y={6220}
              w={196}
              h={40}
            />
          </div>

          <SeoCopy />
        </article>
      </div>
    </main>
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
      <p>
        Start anywhere in the SDLC loop. Each product shares the world model and
        an audit trail.
      </p>
      <ul>
        <li>Aiden for InfraOps</li>
        <li>Aiden for DevOps</li>
        <li>Aiden for Observability</li>
        <li>Aiden for SRE</li>
      </ul>
      <h2>Shared World Model</h2>
      <p>Grounded in how you actually run production.</p>
      <h2>Expert Agents</h2>
      <p>Domain agents plan from live context.</p>
      <h2>Governed Orchestration</h2>
      <p>Humans keep authority. The factory absorbs toil.</p>
      <h2>Insights</h2>
      <p>Ask production questions against shared context.</p>
    </div>
  );
}
