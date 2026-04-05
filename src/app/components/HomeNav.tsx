import fusionLogoLight from "figma:asset/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";

import React from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

export default function HomeNav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed z-20 w-full transition-all duration-300${scrolled ? " bg-[#F5F5FA]/80 backdrop-blur-2xl" : ""}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div
            className={`flex items-center justify-between py-4 transition-all duration-300${scrolled ? " border-b border-[#e5e5e5]/50" : ""}`}
          >
            {/* Logo */}
            <Link to="/" aria-label="home" className="flex items-center shrink-0">
              <img
                src={fusionLogoLight}
                alt="Fusion by IPOR"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            {/* CTAs — always visible, side by side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Discover Fusion */}
              <a
                href="https://fusion.ipor.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#9BA3AF] px-4 sm:px-5 py-2 text-xs sm:text-sm text-black transition-all duration-300 whitespace-nowrap hover:bg-[#EFEFEF]"
                style={{ fontWeight: 400 }}
              >
                <span className="sm:hidden">Discover</span>
                <span className="hidden sm:inline">Discover Fusion</span>
              </a>

              {/* Launch App */}
              <a
                href="https://app.ipor.io/fusion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#8429FF] px-4 sm:px-5 py-2 text-xs sm:text-sm text-white whitespace-nowrap"
                style={{
                  fontWeight: 600,
                  background: "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                  transition: "opacity 300ms ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                <span className="sm:hidden">App</span>
                <span className="hidden sm:inline">Launch App</span>
                <ArrowUpRight className="size-3.5 sm:size-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}