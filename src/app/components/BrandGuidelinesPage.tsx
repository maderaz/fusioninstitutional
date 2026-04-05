import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import fusionLogo from "@/assets/5b737a276a6908088595e5b6530fff074f67123a.png";
import fusionLogoLight from "@/assets/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";

/* ─── helpers ─── */
function CopyHex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
      onClick={() => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
    >
      <span
        className="text-[13px]"
        style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}
      >
        {hex}
      </span>
      {copied ? (
        <Check className="h-3 w-3 text-green-500" />
      ) : (
        <Copy className="h-3 w-3 opacity-40 hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}

function ColorSwatch({
  color,
  label,
  hex,
  border,
  gradient,
  textColor,
}: {
  color?: string;
  label: string;
  hex: string;
  border?: string;
  gradient?: string;
  textColor?: string;
}) {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn("h-20 rounded-2xl w-full", border && `border ${border}`)}
        style={{ background: gradient || color }}
      />
      <p
        className={cn("text-[13px]", isDark ? "text-white" : "text-[#000000]")}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
      >
        {label}
      </p>
      <CopyHex hex={hex} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  return (
    <h2
      className={cn("mb-2", isDark ? "text-white" : "text-[#000000]")}
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: "clamp(28px, 3vw, 40px)",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  const { isDark } = useTheme();
  return (
    <div className="mb-10">
      <h3
        className={cn("mb-5 text-[18px]", isDark ? "text-white" : "text-[#000000]")}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  const { isDark } = useTheme();
  return (
    <div className={cn("flex items-baseline justify-between py-2 border-b", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
      <span
        className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </span>
      <span
        className={cn("text-[14px]", isDark ? "text-white" : "text-[#000000]")}
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
      >
        {value}
      </span>
    </div>
  );
}

/* ─── main page ─── */
export function BrandGuidelinesPage() {
  const { isDark } = useTheme();
  const poppins = { fontFamily: "'Poppins', sans-serif" };
  const sourceSans = { fontFamily: "'Source Sans Pro', sans-serif" };
  const jetbrains = { fontFamily: "'JetBrains Mono', monospace" };

  const [activeTab, setActiveTab] = useState<"overview" | "vault-info" | "activity">("overview");
  const [activeToggle, setActiveToggle] = useState<"spot" | "1d" | "7d">("spot");

  return (
    <div
      className={cn("min-h-screen", isDark ? "bg-[#090E14] text-white" : "bg-[#F5F5FA] text-[#000000]")}
    >
      {/* Nav */}
      <div className={cn("border-b sticky top-0 z-50 backdrop-blur-xl", isDark ? "border-[#2E3137] bg-[#090E14]/80" : "border-[#E5E5E5] bg-[#F5F5FA]/80")}>
        <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <ArrowLeft className={cn("h-4 w-4 transition-transform group-hover:-translate-x-1", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} />
            <img src={isDark ? fusionLogo : fusionLogoLight} alt="Fusion" className="h-7 w-auto" />
          </Link>
          <span
            className={cn("text-[13px] tracking-[0.15em] uppercase", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, fontWeight: 500 }}
          >
            Brand Guidelines
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="mb-20">
          <p
            className={cn("mb-3 text-[13px] tracking-[0.2em] uppercase", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
            style={{ ...poppins, fontWeight: 500 }}
          >
            Design System
          </p>
          <h1
            className={cn("mb-6", isDark ? "text-white" : "text-[#000000]")}
            style={{
              ...poppins,
              fontWeight: 500,
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.15,
            }}
          >
            Brand &amp; UI{" "}
            <span className={cn("italic", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}>Guidelines</span>
          </h1>
          <p
            className={cn("max-w-xl text-[18px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            Complete reference for colors, typography, button styles, UI component states, and interactive field behavior used across IPOR Fusion.
          </p>
        </div>

        {/* ════════════════════════════════════════════ */}
        {/* 1. BRAND COLORS */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Brand Colors</SectionTitle>
          <p
            className={cn("mb-10 text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            The primary purple accent anchors the Fusion identity. Neutral palettes differ between light and dark modes to ensure consistent contrast and readability.
          </p>

          {/* Primary */}
          <SubSection title="Primary Color">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <ColorSwatch color="#8429FF" label="Fusion Primary" hex="#8429FF" />
              <ColorSwatch gradient="linear-gradient(135deg, #8429FF, #6C00FF)" label="Gradient" hex="#8429FF - #6C00FF" />
              <ColorSwatch color="#A37FFF" label="Lighter variation" hex="#A37FFF" />
              <ColorSwatch color="#6C00FF" label="Gradient end" hex="#6C00FF" />
            </div>
          </SubSection>

          {/* Light neutral */}
          <SubSection title="Light Mode Neutrals">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <ColorSwatch color="#F5F5FA" label="Background" hex="#F5F5FA" border="border-[#E5E5E5]" />
              <ColorSwatch color="#E9E9F3" label="Alt Background" hex="#E9E9F3" border="border-[#E5E5E5]" />
              <ColorSwatch color="#FFFFFF" label="Container" hex="#FFFFFF" border="border-[#E5E5E5]" />
              <ColorSwatch color="#E5E5E5" label="Stroke" hex="#E5E5E5" border="border-[#E5E5E5]" />
              <ColorSwatch color="#70747A" label="Body text" hex="#70747A" />
              <ColorSwatch color="#9BA3AF" label="Secondary text" hex="#9BA3AF" />
            </div>
          </SubSection>

          {/* Dark neutral */}
          <SubSection title="Dark Mode Neutrals">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <ColorSwatch color="#090E14" label="Background" hex="#090E14" border="border-[#2E3137]" />
              <ColorSwatch color="#000000" label="Alt Background" hex="#000000" border="border-[#2E3137]" />
              <ColorSwatch color="#161A20" label="Container" hex="#161A20" border="border-[#2E3137]" />
              <ColorSwatch color="#2E3137" label="Stroke" hex="#2E3137" />
              <ColorSwatch color="#9BA3AF" label="Body text" hex="#9BA3AF" />
              <ColorSwatch color="#FFFFFF" label="Headings" hex="#FFFFFF" />
            </div>
          </SubSection>

          {/* IPOR DAO */}
          <SubSection title="IPOR DAO &amp; Derivatives (Blue)">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <ColorSwatch color="#006EF2" label="Solid" hex="#006EF2" />
              <ColorSwatch gradient="linear-gradient(135deg, #006EF2, #0023E3)" label="Gradient" hex="#006EF2 - #0023E3" />
              <ColorSwatch color="#3D88FF" label="Lighter variation" hex="#3D88FF" />
            </div>
          </SubSection>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 2. TYPOGRAPHY */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Typography</SectionTitle>
          <p
            className={cn("mb-10 text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            Three font families. Poppins for all UI text, Source Sans Pro for numeric values (tabular-nums, baseline-adjusted), and JetBrains Mono for code blocks.
          </p>

          {/* Font specimens */}
          <div className={cn("rounded-2xl border overflow-hidden mb-10", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
            {/* Poppins */}
            <div className={cn("p-8 border-b", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <p className={cn("text-[12px] tracking-[0.15em] uppercase mb-4", isDark ? "text-[#9BA3AF]" : "text-[#9BA3AF]")} style={{ ...poppins, fontWeight: 600 }}>
                Poppins
              </p>
              <p className="mb-3" style={{ ...poppins, fontWeight: 400, fontSize: "32px" }}>
                Regular (400) <span className={cn("text-[15px] ml-4", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>Body text, UI labels, navigation items</span>
              </p>
              <p className="mb-3" style={{ ...poppins, fontWeight: 500, fontSize: "32px" }}>
                Medium (500) <span className={cn("text-[15px] ml-4", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>Headings, section titles, selected tabs</span>
              </p>
              <p className="mb-0" style={{ ...poppins, fontWeight: 600, fontSize: "32px" }}>
                SemiBold (600) <span className={cn("text-[15px] ml-4", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>Buttons, CTA, emphasized labels</span>
              </p>
            </div>

            {/* Source Sans Pro */}
            <div className={cn("p-8 border-b", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <p className={cn("text-[12px] tracking-[0.15em] uppercase mb-4", isDark ? "text-[#9BA3AF]" : "text-[#9BA3AF]")} style={{ ...poppins, fontWeight: 600 }}>
                Source Sans Pro
              </p>
              <p className="mb-3" style={{ ...sourceSans, fontWeight: 400, fontSize: "32px", fontVariantNumeric: "tabular-nums" as const }}>
                Regular (400) <span className={cn("text-[15px] ml-4", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Inline numbers (balance, dollar values)</span>
              </p>
              <p className="mb-3" style={{ ...sourceSans, fontWeight: 600, fontSize: "32px", fontVariantNumeric: "tabular-nums" as const }}>
                SemiBold (600) <span className={cn("text-[15px] ml-4", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>APY, TVL, TVM, stats, table values</span>
              </p>
              <div className="mt-4 flex items-baseline gap-6">
                <span className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Example:</span>
                <span style={{ ...sourceSans, fontWeight: 600, fontSize: "40px", fontVariantNumeric: "tabular-nums" as const, position: "relative", top: "1px" }}>
                  12.45%
                </span>
                <span style={{ ...sourceSans, fontWeight: 600, fontSize: "40px", fontVariantNumeric: "tabular-nums" as const, position: "relative", top: "1px" }}>
                  $1,234,567
                </span>
              </div>
              <p className={cn("mt-3 text-[13px]", isDark ? "text-[#9BA3AF]/60" : "text-[#9BA3AF]")} style={poppins}>
                Uses <code className="px-1.5 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>position: relative; top: 1px</code> for baseline alignment with Poppins
              </p>
            </div>

            {/* JetBrains Mono */}
            <div className="p-8">
              <p className={cn("text-[12px] tracking-[0.15em] uppercase mb-4", isDark ? "text-[#9BA3AF]" : "text-[#9BA3AF]")} style={{ ...poppins, fontWeight: 600 }}>
                JetBrains Mono
              </p>
              <p className="mb-3" style={{ ...jetbrains, fontWeight: 400, fontSize: "24px" }}>
                Regular (400)
              </p>
              <p className="mb-0" style={{ ...jetbrains, fontWeight: 500, fontSize: "24px" }}>
                Medium (500)
              </p>
              <p className={cn("mt-2 text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                Used exclusively for Solidity code blocks in the Security section.
              </p>
            </div>
          </div>

          {/* Font rules table */}
          <div className={cn("rounded-2xl border p-6", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
            <p className={cn("text-[12px] tracking-[0.15em] uppercase mb-4", isDark ? "text-[#9BA3AF]" : "text-[#9BA3AF]")} style={{ ...poppins, fontWeight: 600 }}>
              Font Assignment Rules
            </p>
            <SpecRow label="Headings / Titles" value="Poppins Medium 500" />
            <SpecRow label="Buttons / CTA" value="Poppins SemiBold 600" />
            <SpecRow label="Body text / UI" value="Poppins Regular 400" />
            <SpecRow label="Inline numbers" value="Source Sans Pro Regular 400" />
            <SpecRow label="Prominent numbers (APY, TVL)" value="Source Sans Pro SemiBold 600" />
            <SpecRow label="Code blocks" value="JetBrains Mono Regular/Medium" />
            <SpecRow label="NUM_FONT baseline shift" value="position: relative; top: 1px" />
            <SpecRow label="Numeric variant" value="font-variant-numeric: tabular-nums" />
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 3. BUTTON STYLES */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Button Styles</SectionTitle>
          <p
            className={cn("mb-10 text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            Two button variants: Primary for high-importance CTA actions (Launch App), Secondary for supporting actions (Build). Both use <code className="px-1.5 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>rounded-full</code>. No glow or shadow effects on hover.
          </p>

          {/* Primary buttons */}
          <SubSection title="Primary Button (Launch App)">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {/* Default */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 text-white cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 600,
                    fontSize: "15px",
                    background: isDark
                      ? "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)"
                      : "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                    border: isDark ? "1px solid #8429FF" : "1px solid #8429FF",
                  }}
                >
                  Launch App
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Default</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Fill:</strong> Gradient #8429FF → #6C00FF</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Stroke:</strong> #8429FF</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Direction:</strong> 90deg (horizontal)</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Text:</strong> White, Poppins SemiBold 600</p>
                </div>
              </div>

              {/* Hover */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 text-white cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 600,
                    fontSize: "15px",
                    background: isDark
                      ? "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)"
                      : "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                    border: isDark ? "1px solid #8429FF" : "1px solid #8429FF",
                    opacity: 0.7,
                  }}
                >
                  Launch App
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Hover</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Entire element:</strong> 70% opacity via inline style</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Transition:</strong> opacity 150ms ease</p>
                </div>
              </div>

              {/* Disabled */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 text-white cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 600,
                    fontSize: "15px",
                    background: isDark
                      ? "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)"
                      : "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                    border: isDark ? "1px solid #8429FF" : "1px solid #8429FF",
                    opacity: 0.5,
                  }}
                >
                  Launch App
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Disabled</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Everything:</strong> 50% opacity</p>
                </div>
              </div>
            </div>
            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <p className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                <strong className={isDark ? "text-white" : "text-black"}>Hover mechanism:</strong> Entire element opacity set to 0.7 via inline <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>style.opacity = "0.7"</code> on <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>onMouseEnter</code>, reset to 1 on <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>onMouseLeave</code>. Base transition: <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>transition: opacity 150ms ease</code>.
              </p>
            </div>
          </SubSection>

          {/* Secondary buttons */}
          <SubSection title="Secondary Button (Build)">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {/* Default */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 400,
                    fontSize: "15px",
                    background: "transparent",
                    border: isDark ? "1px solid #2E3137" : "1px solid #9BA3AF",
                    color: isDark ? "#9BA3AF" : "#000000",
                  }}
                >
                  Build
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Default</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Fill:</strong> No fill</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Stroke:</strong> {isDark ? "#2E3137" : "#9BA3AF"}</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Text:</strong> {isDark ? "#9BA3AF" : "#000000"} Poppins Regular 400</p>
                </div>
              </div>

              {/* Hover */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 400,
                    fontSize: "15px",
                    background: isDark ? "rgba(255,255,255,0.05)" : "#EFEFEF",
                    border: isDark ? "1px solid rgba(155,163,175,0.4)" : "1px solid #9BA3AF",
                    color: isDark ? "#FFFFFF" : "#000000",
                  }}
                >
                  Build
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Hover</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Fill:</strong> {isDark ? "white/5" : "#EFEFEF"}</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Stroke:</strong> {isDark ? "#9BA3AF/40" : "#9BA3AF"}</p>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Text:</strong> {isDark ? "#FFFFFF" : "#000000"}</p>
                </div>
              </div>

              {/* Disabled */}
              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="rounded-full px-8 py-3 cursor-default"
                  style={{
                    ...poppins,
                    fontWeight: 400,
                    fontSize: "15px",
                    background: "transparent",
                    border: isDark ? "1px solid #2E3137" : "1px solid #9BA3AF",
                    color: isDark ? "#9BA3AF" : "#000000",
                    opacity: 0.4,
                  }}
                >
                  Build
                </button>
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Disabled</span>
                <div className="text-[12px] space-y-1" style={poppins}>
                  <p className={isDark ? "text-[#9BA3AF]" : "text-[#70747A]"}><strong className={isDark ? "text-white" : "text-black"}>Everything:</strong> 40% opacity</p>
                </div>
              </div>
            </div>
            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <p className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                <strong className={isDark ? "text-white" : "text-black"}>Hover mechanism:</strong> <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>transition-colors duration-150</code>. No glow or shadow effects. Dark mode secondary stroke is <code className="px-1 py-0.5 rounded bg-[#8429FF]/10 text-[#8429FF]" style={jetbrains}>#2E3137</code> (not #9BA3AF).
              </p>
            </div>
          </SubSection>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 4. MENUS & TOGGLES */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Menu &amp; Toggle</SectionTitle>

          {/* Top Menu */}
          <SubSection title="Top Menu">
            <div className={cn("rounded-2xl border p-6 mb-6", isDark ? "border-[#2E3137] bg-[#161A20]" : "border-[#E5E5E5] bg-white")}>
              <div className="flex items-center gap-6">
                {["Vaults", "LPs", "Swaps", "Analytics", "Leaderboards"].map((item, i) => (
                  <button
                    key={item}
                    type="button"
                    className={cn(
                      "px-3 py-2 rounded-lg transition-colors cursor-default",
                      i === 0
                        ? isDark ? "bg-[#2E3137] text-white" : "bg-[#E5E5E5] text-[#000000]"
                        : isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                    )}
                    style={{ ...poppins, fontSize: "15px" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <SpecRow label="Default text" value="#70747A Poppins Regular 15px" />
              <SpecRow label="Hover fill" value="#E5E5E5" />
              <SpecRow label="Hover text" value="#000000 Poppins Regular 15px" />
              <SpecRow label="Selected text fill" value="#000000" />
            </div>
          </SubSection>

          {/* Secondary Menu (Tabs) */}
          <SubSection title="Secondary Menu (Tabs)">
            <div className={cn("rounded-2xl border p-6 mb-6", isDark ? "border-[#2E3137] bg-[#161A20]" : "border-[#E5E5E5] bg-white")}>
              <div className={cn("flex gap-6 border-b", isDark ? "border-[#2E3137]" : "border-[#9BA3AF]")}>
                {["Overview", "Vault info", "Activity"].map((tab) => {
                  const key = tab.toLowerCase().replace(" ", "-") as "overview" | "vault-info" | "activity";
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={tab}
                      type="button"
                      className={cn(
                        "pb-3 cursor-pointer border-b-2 transition-colors",
                        isActive
                          ? "border-[#8429FF]"
                          : "border-transparent"
                      )}
                      style={{
                        ...poppins,
                        fontWeight: isActive ? 500 : 400,
                        fontSize: "16px",
                        color: isActive ? (isDark ? "#FFFFFF" : "#000000") : "#70747A",
                        background: "transparent",
                        border: "none",
                        borderBottom: isActive ? "2px solid #8429FF" : "2px solid transparent",
                      }}
                      onClick={() => setActiveTab(key)}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <SpecRow label="Bottom border" value="#9BA3AF 1px" />
              <SpecRow label="Default text" value="#70747A Poppins Regular 16px" />
              <SpecRow label="Selected text" value="#000000 Poppins Medium 16px" />
              <SpecRow label="Selected underline" value="#8429FF 2px" />
            </div>
          </SubSection>

          {/* Toggle */}
          <SubSection title="Toggle Style (APY Period)">
            <div className={cn("rounded-2xl border p-6 mb-6", isDark ? "border-[#2E3137] bg-[#161A20]" : "border-[#E5E5E5] bg-white")}>
              <div className="flex items-center gap-1">
                {(["spot", "1d", "7d"] as const).map((key) => {
                  const label = key === "spot" ? "Spot APY" : key.toUpperCase();
                  const isActive = activeToggle === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      className="px-4 py-1.5 rounded-full cursor-pointer"
                      style={{
                        ...poppins,
                        fontWeight: isActive ? 500 : 400,
                        fontSize: "13px",
                        color: isActive ? (isDark ? "#FFFFFF" : "#000000") : "#70747A",
                        background: isActive ? "rgba(132, 41, 255, 0.1)" : (isDark ? "#161A20" : "#E9E9F3"),
                        border: isActive ? "1px solid #8429FF" : "1px solid #9BA3AF",
                        transition: "all 150ms",
                      }}
                      onClick={() => setActiveToggle(key)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <SpecRow label="Default fill" value="#E9E9F3" />
              <SpecRow label="Default stroke" value="#9BA3AF 1px" />
              <SpecRow label="Default text" value="#70747A Poppins Regular 13px" />
              <SpecRow label="Selected fill" value="#8429FF 10% opacity" />
              <SpecRow label="Selected stroke" value="#8429FF 1px" />
              <SpecRow label="Selected text" value="#000000 Poppins Medium 13px" />
            </div>
          </SubSection>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 5. INTERACTIVE FIELDS */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Interactive Fields</SectionTitle>
          <p
            className={cn("mb-10 text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            Consistent stroke color for interactive fields. Emphasis on typing states. Deposit/Withdraw use enlarged input fields following DeFi conventions. All transitions 150ms.
          </p>

          {/* Field states */}
          <SubSection title="Search / Input Field States">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Default */}
              <div className="flex flex-col gap-3">
                <input
                  readOnly
                  placeholder="Search"
                  className="rounded-full px-5 py-3 outline-none"
                  style={{
                    ...poppins,
                    fontSize: "15px",
                    background: isDark ? "#161A20" : "#F5F5FA",
                    border: `1px solid ${isDark ? "#2E3137" : "#9BA3AF"}`,
                    color: isDark ? "#FFFFFF" : "#000000",
                  }}
                />
                <span className={cn("text-[13px] text-center", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Default</span>
              </div>

              {/* Hover */}
              <div className="flex flex-col gap-3">
                <input
                  readOnly
                  placeholder="Search"
                  className="rounded-full px-5 py-3 outline-none"
                  style={{
                    ...poppins,
                    fontSize: "15px",
                    background: isDark ? "#1A1F26" : "#E9E9F3",
                    border: `1px solid ${isDark ? "#2E3137" : "#9BA3AF"}`,
                    color: isDark ? "#FFFFFF" : "#000000",
                  }}
                />
                <span className={cn("text-[13px] text-center", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Hover</span>
              </div>

              {/* Focus */}
              <div className="flex flex-col gap-3">
                <input
                  readOnly
                  placeholder="Search"
                  className="rounded-full px-5 py-3 outline-none"
                  style={{
                    ...poppins,
                    fontSize: "15px",
                    background: isDark ? "#161A20" : "#F5F5FA",
                    border: "1px solid #8429FF",
                    color: isDark ? "#FFFFFF" : "#000000",
                  }}
                />
                <span className={cn("text-[13px] text-center", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Focus (Active)</span>
              </div>

              {/* Typed */}
              <div className="flex flex-col gap-3">
                <input
                  readOnly
                  value="Something"
                  className="rounded-full px-5 py-3 outline-none"
                  style={{
                    ...poppins,
                    fontSize: "15px",
                    background: isDark ? "#161A20" : "#F5F5FA",
                    border: "1px solid #8429FF",
                    color: isDark ? "#FFFFFF" : "#000000",
                  }}
                />
                <span className={cn("text-[13px] text-center", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>Typed</span>
              </div>
            </div>

            <div className={cn("rounded-xl border p-4", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
              <SpecRow label="Fill" value="#F5F5FA" />
              <SpecRow label="Hover fill" value="#E9E9F3" />
              <SpecRow label="Stroke" value="#9BA3AF" />
              <SpecRow label="Active stroke (focus)" value="#8429FF" />
              <SpecRow label="Placeholder text" value="#AAACB4" />
              <SpecRow label="Typed text" value="#000000" />
              <SpecRow label="Transitions" value="150ms" />
            </div>
          </SubSection>

          {/* Deposit field */}
          <SubSection title="Deposit / Withdraw Field">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {/* Empty */}
              <div className={cn("rounded-2xl border p-5", isDark ? "border-[#2E3137] bg-[#161A20]" : "border-[#9BA3AF] bg-[#F5F5FA]")}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                    Balance: <span style={{ ...sourceSans, fontSize: "14px" }}>0.00</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ ...sourceSans, fontWeight: 600, fontSize: "36px", color: isDark ? "#9BA3AF" : "#AAACB4" }}>0.00</span>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#2675CA] flex items-center justify-center">
                      <span className="text-[8px] text-white" style={{ ...poppins, fontWeight: 600 }}>$</span>
                    </div>
                    <span style={{ ...poppins, fontWeight: 500, fontSize: "16px", color: isDark ? "#FFFFFF" : "#000000" }}>USDC</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={sourceSans}>$0.00</span>
                  <div className="flex gap-1">
                    {["25%", "50%", "75%", "MAX"].map((pct) => (
                      <span
                        key={pct}
                        className="px-2.5 py-1 rounded-full text-[13px]"
                        style={{
                          ...sourceSans,
                          border: `1px solid ${isDark ? "#2E3137" : "#9BA3AF"}`,
                          color: isDark ? "#9BA3AF" : "#70747A",
                        }}
                      >
                        {pct}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={cn("mt-3 text-center text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                  Empty state (default stroke #9BA3AF)
                </p>
              </div>

              {/* Filled */}
              <div className={cn("rounded-2xl border p-5", isDark ? "border-[#8429FF] bg-[#161A20]" : "border-[#8429FF] bg-[#F5F5FA]")}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                    Balance: <span style={{ ...sourceSans, fontSize: "14px" }}>0.00</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ ...sourceSans, fontWeight: 600, fontSize: "36px", color: isDark ? "#FFFFFF" : "#000000" }}>568</span>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#2675CA] flex items-center justify-center">
                      <span className="text-[8px] text-white" style={{ ...poppins, fontWeight: 600 }}>$</span>
                    </div>
                    <span style={{ ...poppins, fontWeight: 500, fontSize: "16px", color: isDark ? "#FFFFFF" : "#000000" }}>USDC</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={sourceSans}>$567.99</span>
                  <div className="flex gap-1">
                    {["25%", "50%", "75%", "MAX"].map((pct) => (
                      <span
                        key={pct}
                        className="px-2.5 py-1 rounded-full text-[13px]"
                        style={{
                          ...sourceSans,
                          border: `1px solid ${isDark ? "#2E3137" : "#9BA3AF"}`,
                          color: isDark ? "#9BA3AF" : "#70747A",
                        }}
                      >
                        {pct}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={cn("mt-3 text-center text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={poppins}>
                  Typed state (active stroke #8429FF)
                </p>
              </div>
            </div>
          </SubSection>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 6. THEME MODE SUMMARY */}
        {/* ════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionTitle>Theme Mode Summary</SectionTitle>
          <p
            className={cn("mb-10 text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ ...poppins, lineHeight: 1.7 }}
          >
            Full light/dark mode support across all components. The DashboardMock in Hero always remains in dark mode regardless of theme.
          </p>

          <div className={cn("rounded-2xl border overflow-hidden", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}>
            <div className={cn("grid grid-cols-3 border-b", isDark ? "border-[#2E3137] bg-[#161A20]" : "border-[#E5E5E5] bg-[#F5F5F7]")}>
              <div className="p-4">
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={{ ...poppins, fontWeight: 600 }}>Token</span>
              </div>
              <div className="p-4">
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={{ ...poppins, fontWeight: 600 }}>Light Mode</span>
              </div>
              <div className="p-4">
                <span className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={{ ...poppins, fontWeight: 600 }}>Dark Mode</span>
              </div>
            </div>
            {[
              { token: "Background", light: "#F5F5FA", dark: "#090E14" },
              { token: "Alt background", light: "#E9E9F3", dark: "#000000" },
              { token: "Container", light: "#FFFFFF", dark: "#161A20" },
              { token: "Stroke", light: "#E5E5E5", dark: "#2E3137" },
              { token: "Body text", light: "#70747A", dark: "#9BA3AF" },
              { token: "Headings", light: "#000000", dark: "#FFFFFF" },
              { token: "Accent", light: "#8429FF", dark: "#8429FF" },
              { token: "Secondary stroke", light: "#9BA3AF", dark: "#2E3137" },
            ].map((row, i, arr) => (
              <div
                key={row.token}
                className={cn("grid grid-cols-3", i < arr.length - 1 && "border-b", isDark ? "border-[#2E3137]" : "border-[#E5E5E5]")}
              >
                <div className="p-4">
                  <span className={cn("text-[13px]", isDark ? "text-white" : "text-[#000000]")} style={{ ...poppins, fontWeight: 500 }}>
                    {row.token}
                  </span>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md border border-[#E5E5E5]" style={{ background: row.light }} />
                  <CopyHex hex={row.light} />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md border border-[#2E3137]" style={{ background: row.dark }} />
                  <CopyHex hex={row.dark} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════ */}
        {/* 7. IMPLEMENTATION NOTES */}
        {/* ════════════════════════════════════════════ */}
        {/* removed */}
      </div>
    </div>
  );
}