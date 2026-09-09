/** Percentage-positioned clickable region on a Figma artboard. */
export function Hotspot({
  href,
  label,
  x,
  y,
  w,
  h,
  artboardW = 1440,
  artboardH = 7835,
}: {
  href: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  artboardW?: number;
  artboardH?: number;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="absolute z-10"
      style={{
        left: `${(x / artboardW) * 100}%`,
        top: `${(y / artboardH) * 100}%`,
        width: `${(w / artboardW) * 100}%`,
        height: `${(h / artboardH) * 100}%`,
      }}
    />
  );
}
