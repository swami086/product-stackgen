import Image from "next/image";
import type { ReactNode } from "react";
import { Hotspot } from "@/components/Hotspot";

export type HotspotSpec = {
  href: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type FigmaPageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  hotspots?: HotspotSpec[];
  seo?: ReactNode;
  priority?: boolean;
};

/** Renders a native Figma artboard export at 1:1 aspect with overlay hotspots. */
export function FigmaPage({
  src,
  alt,
  width,
  height,
  hotspots = [],
  seo,
  priority = false,
}: FigmaPageProps) {
  return (
    <main className="min-h-screen bg-[#14110c]">
      <div className="mx-auto w-full max-w-[1440px]">
        <article
          className="relative w-full"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            unoptimized
            className="absolute inset-0 h-full w-full select-none"
            draggable={false}
          />
          <div className="absolute inset-0">
            {hotspots.map((spot) => (
              <Hotspot
                key={`${spot.label}-${spot.x}-${spot.y}`}
                {...spot}
                artboardW={width}
                artboardH={height}
              />
            ))}
          </div>
          {seo}
        </article>
      </div>
    </main>
  );
}
