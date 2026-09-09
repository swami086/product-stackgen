/** Percentage-positioned clickable region on the 1440×7835 Figma artboard. */
export function Hotspot({
  href,
  label,
  x,
  y,
  w,
  h,
}: {
  href: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="absolute z-10"
      style={{
        left: `${(x / 1440) * 100}%`,
        top: `${(y / 7835) * 100}%`,
        width: `${(w / 1440) * 100}%`,
        height: `${(h / 7835) * 100}%`,
      }}
    />
  );
}
