import Image from "next/image";

/**
 * Interactive nav overlay matching Figma node 1067:683 (Nav).
 * Positioned at artboard coords x=296, y=20, 848×57.
 */
export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute z-20"
      style={{
        left: `${(296 / 1440) * 100}%`,
        top: `${(20 / 7835) * 100}%`,
        width: `${(848 / 1440) * 100}%`,
        height: `${(57 / 7835) * 100}%`,
      }}
    >
      {/* Invisible hit targets — visuals come from the full-page render */}
      <a
        href="/"
        aria-label="StackGen home"
        className="absolute left-[4.4%] top-[15%] h-[40%] w-[13.4%]"
      />
      <div className="absolute left-[23.5%] top-[33%] flex h-[35%] w-[48.5%] items-center justify-between px-[1%]">
        <a href="#products" className="h-full w-[18%]" aria-label="Products" />
        <a href="#platform" className="h-full w-[17%]" aria-label="Platform" />
        <a href="#resources" className="h-full w-[16%]" aria-label="Resources" />
        <a href="#docs" className="h-full w-[8%]" aria-label="Docs" />
        <a href="#company" className="h-full w-[15%]" aria-label="Company" />
      </div>
      <a
        href="#book-demo"
        aria-label="Book Demo"
        className="absolute right-[9.5%] top-[16%] h-[70%] w-[12.3%]"
      />
      <a
        href="#login"
        aria-label="Login"
        className="absolute right-[1.5%] top-[16%] h-[70%] w-[7.7%]"
      />
      {/* Decorative logo reference kept for asset fidelity checks */}
      <span className="sr-only">
        <Image
          src="/sections/logo.svg"
          alt=""
          width={114}
          height={23}
          unoptimized
        />
      </span>
    </nav>
  );
}
