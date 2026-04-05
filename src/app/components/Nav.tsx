import fusionLogoDarkPng from "@/assets/7431d75d5eb1f7dad9a8e4c69ac6b39fb194e6f1.png";
import fusionLogoLight from "@/assets/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";

import React from "react";
import { Link } from "react-router";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { cn } from "../components/ui/utils";
import { useTheme } from "./ui/theme-context";

const menuItems = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Solutions", href: "#solutions" },
  { name: "Security", href: "#security" },
  { name: "Docs", href: "https://docs.ipor.io/" },
];

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuState]);

  return (
    <header>
      {/* Mobile menu backdrop */}
      {menuState && (
        <div
          className="fixed inset-0 z-10 lg:hidden"
          onClick={() => setMenuState(false)}
        />
      )}
      <nav
        data-state={menuState ? "active" : undefined}
        className={cn(
          "group fixed z-20 w-full transition-all duration-300",
          scrolled && (isDark
            ? "bg-[#090E14]/80 backdrop-blur-2xl"
            : "bg-[#F5F5FA]/80 backdrop-blur-2xl")
        )}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 transition-all duration-300">
          <div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-4 transition-all duration-300 lg:gap-0",
              isDark
                ? "border-b border-transparent"
                : "border-b border-transparent",
              scrolled && (isDark
                ? "border-[#2E3137]/50"
                : "border-[#e5e5e5]/50")
            )}
          >
            {/* Left: logo + desktop nav */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center"
              >
                <img
                  src={isDark ? fusionLogoDarkPng : fusionLogoLight}
                  alt="Fusion by IPOR"
                  className="h-8 w-auto object-contain"
                />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={cn("m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0", isDark ? "text-white/70" : "text-black/70")} />
                <X className={cn("absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100", isDark ? "text-white/70" : "text-black/70")} />
              </button>

              {/* Desktop links */}
              <div className="hidden lg:block">
                <ul className="flex gap-2 text-[15px]">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-1.5 transition-all duration-300",
                          isDark
                            ? "text-[#9BA3AF] hover:text-white hover:bg-[#22272C]"
                            : "text-[#70747A] hover:text-[#000000] hover:bg-[#E5E5E5]"
                        )}
                        style={{ fontWeight: 400 }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: CTA + mobile dropdown */}
            <div
              className={cn(
                "mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border p-6 shadow-2xl group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex",
                isDark
                  ? "border-[#2E3137] bg-[#161A20] shadow-black/30"
                  : "border-black/[0.06] bg-white shadow-black/5"
              )}
            >
              {/* Mobile links */}
              <div className="lg:hidden">
                <ul className="space-y-2 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 transition-all duration-300",
                          isDark ? "text-[#9BA3AF] hover:text-white hover:bg-[#22272C]" : "text-[#70747A] hover:bg-[#E5E5E5] hover:text-black"
                        )}
                        style={{ fontWeight: 400 }}
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex w-full flex-col gap-3 lg:w-fit lg:flex-row lg:items-center">
                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className={cn(
                    "flex items-center justify-center rounded-full p-2 border transition-all duration-300",
                    isDark
                      ? "border-[#45484D] text-[#9BA3AF] hover:text-white hover:bg-white/[0.06]"
                      : "border-[#9BA3AF] text-black hover:bg-[#EFEFEF]"
                  )}
                >
                  {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
                </button>

                {/* Secondary button: Build */}
                <a
                  href="https://docs.ipor.io/build-on-fusion/developer-guide/quick-start-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-full border px-5 py-2 text-sm transition-all duration-300 lg:w-auto",
                    isDark
                      ? "border-[#45484D] text-[#9BA3AF] hover:border-[#9BA3AF]/40 hover:bg-white/5 hover:text-white"
                      : "border-[#9BA3AF] text-black hover:bg-[#EFEFEF]"
                  )}
                  style={{ fontWeight: 400 }}
                >
                  Build
                </a>
                {/* Primary button: Launch App */}
                <a
                  href="https://app.ipor.io/fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm text-white lg:w-auto",
                    isDark
                      ? "border-[#8429FF]"
                      : "border-[#8429FF]"
                  )}
                  style={{
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                    transition: "opacity 300ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onClick={() => setMenuState(false)}
                >
                  <span>Launch App</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}