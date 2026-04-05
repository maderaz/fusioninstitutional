import { Link } from "react-router";
import { Footer } from "./Footer";
import HomeNav from "./HomeNav";
import { ThemeContext } from "./ui/theme-context";
import { cn } from "./ui/utils";

import fusionLogo from "@/assets/875783ec6a6588aa50507cbb8566847105660d57.png";
import fusionLogoDark from "@/assets/7431d75d5eb1f7dad9a8e4c69ac6b39fb194e6f1.png";
import appScreenshot from "@/assets/c8d9516a02d0e676a0d9f0a135b9010320d8fb30.png";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 17.8 17.8" fill="none" className="shrink-0">
      <path
        d="M5.19331 5.19323H12.6122V12.6121"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.48"
      />
      <path
        d="M5.19331 12.6121L12.6122 5.19323"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.48"
      />
    </svg>
  );
}

function LeftCard() {
  return (
    <div
      className="flex w-full sm:w-1/2 flex-col rounded-[18px] border border-[#E5E5E5] bg-white p-8 sm:p-9 min-h-[320px] sm:min-h-[420px]"
    >
      {/* Logo */}
      <img src={fusionLogo} alt="Fusion by IPOR" className="mb-5 sm:mb-8 h-5 sm:h-9 w-auto object-contain object-left" />

      {/* Heading */}
      <h2
        className="mb-3 sm:mb-6 text-black"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(22px, 2.4vw, 31px)",
          lineHeight: 1.25,
          fontWeight: 500,
        }}
      >
        Vault infrastructure for{" "}
        <span className="text-[#8429FF]">institutional-grade</span> yield.
      </h2>

      {/* Description — grows to fill space */}
      <p
        className="text-[#70747A]"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(14px, 1.3vw, 15.5px)",
          lineHeight: 1.7,
        }}
      >
        Create and manage onchain vaults within a battle-tested risk framework.
      </p>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA */}
      <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
        <a
          href="https://fusion.ipor.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, #8429FF, #6C00FF)",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(13px, 1.1vw, 15.5px)",
            fontWeight: 600,
          }}
        >
          Discover Fusion
          <ArrowIcon />
        </a>
        <span
          className="text-[#D3D0D0]"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(13px, 1.1vw, 15.5px)" }}
        >
          fusion.ipor.io
        </span>
      </div>
    </div>
  );
}

function RightCard() {
  return (
    <div
      className="relative flex w-full sm:w-1/2 flex-col overflow-hidden rounded-[18px] border border-[#E5E5E5] bg-white min-h-[320px] sm:min-h-[420px]"
    >
      {/* Text content with padding */}
      <div className="flex flex-col p-8 sm:p-9 sm:flex-1 pb-4 sm:pb-9">
        {/* Logo */}
        <img src={fusionLogo} alt="Fusion by IPOR" className="mb-5 sm:mb-8 h-5 sm:h-9 w-auto object-contain object-left" />

        {/* Heading */}
        <h2
          className="mb-3 sm:mb-6 text-black"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(22px, 2.4vw, 31px)",
            lineHeight: 1.25,
            fontWeight: 500,
          }}
        >
          The{" "}
          <span className="text-[#8429FF]">Live</span>{" "}
          App
        </h2>

        {/* Description constrained to left half so image doesn't overlap */}
        <p
          className="text-[#70747A] sm:max-w-[48%]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(14px, 1.3vw, 15.5px)",
            lineHeight: 1.7,
          }}
        >
          Discover existing yield strategies powered by Fusion. Get started in one-click.
        </p>

        {/* Spacer — desktop only to push CTA to bottom */}
        <div className="hidden sm:flex flex-1" />

        {/* CTA */}
        <div className="mt-4 sm:mt-8 mb-2 sm:mb-0">
          <a
            href="https://app.ipor.io/fusion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #8429FF, #6C00FF)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(13px, 1.1vw, 14px)",
              fontWeight: 600,
            }}
          >
            Launch App
          </a>
        </div>
      </div>

      {/* App screenshot — mobile: full width at bottom; desktop: absolute bottom-right */}
      <img
        src={appScreenshot}
        alt="Fusion App"
        className="sm:absolute sm:bottom-0 sm:right-0 sm:w-[45%] sm:object-cover sm:object-top sm:rounded-tl-[17px] sm:rounded-br-[17px] w-full object-cover object-top rounded-b-[17px]"
      />
    </div>
  );
}

const LIGHT_THEME = { theme: "light" as const, toggleTheme: () => {}, isDark: false };

export function HomePage() {
  return (
    <ThemeContext.Provider value={LIGHT_THEME}>
      <div
        className="min-h-screen"
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#ece9f7",
          color: "#000000",
        }}
      >
        <HomeNav />

        {/* Hero */}
        <main className="mx-auto max-w-[1200px] px-6 pb-0 pt-[67px]">
          <div className="py-14 sm:py-20">
            {/* Title */}
            <h1
              className="mb-4 text-black"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.25,
                fontWeight: 500,
              }}
            >
              Meet Fusion
            </h1>
            <p
              className="mb-10 max-w-2xl text-[#70747A]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.6,
              }}
            >
              Build your own institutional-grade yield strategies or explore existing ones via the Fusion App.
            </p>

            {/* Two cards */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch">
              <LeftCard />
              <RightCard />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}