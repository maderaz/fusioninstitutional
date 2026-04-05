import React from "react";
import { Link } from "react-router";
import { ArrowLeft, Check, ChevronDown, ChevronRight, Copy, ExternalLink, Info, Maximize2, Moon, Sun, Wallet } from "lucide-react";
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import fusionLogo from "figma:asset/5b737a276a6908088595e5b6530fff074f67123a.png";
import fusionLogoLight from "figma:asset/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";
import imgUsdc from "figma:asset/2b48695444595169b19e5f1a3e0e29241ec3cfdc.png";

/* ─── Font helpers ─── */
const NUM_FONT = "'Source Sans Pro', sans-serif";

/* ─── Palette helpers ─── */
const dk = {
  bg: "#090E14",
  cardBg: "#161A20",
  panelBg: "#0C0C0F",
  border: "#2E3137",
  muted: "#9BA3AF",
  dim: "#9BA3AF",
  accent: "#8429FF",
  accentHover: "#6C00FF",
  text: "#FFFFFF",
  textSub: "rgba(155,163,175,0.5)",
};
const lt = {
  bg: "#F5F5FA",
  cardBg: "#FFFFFF",
  panelBg: "#E9E9F3",
  border: "#E5E5E5",
  muted: "#70747A",
  dim: "#70747A",
  accent: "#8429FF",
  accentHover: "#6C00FF",
  text: "#000000",
  textSub: "rgba(0,0,0,0.5)",
};
function useP() {
  const { isDark } = useTheme();
  return isDark ? dk : lt;
}

/* ─── Mock Data ─── */
const performanceData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 1, 8 + i);
  const label = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}`;
  const strategyApy = 8 + Math.sin(i * 0.3) * 3 + i * 0.7 + Math.random() * 2;
  const sharePrice = 1 + i * 0.003 + Math.random() * 0.002;
  return { date: label, strategyApy: +strategyApy.toFixed(2), sharePrice: +sharePrice.toFixed(4) };
});

const allocationTimeData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 1, 8 + i);
  const label = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}`;
  const morpho = 0.5 + i * 0.02 + Math.random() * 0.15;
  const rUSD = 0.2 + i * 0.008 + Math.random() * 0.08;
  const usdc = 0.05 + Math.random() * 0.04;
  return { date: label, morpho: +morpho.toFixed(3), rUSD: +rUSD.toFixed(3), usdc: +usdc.toFixed(3) };
});

const allocationPie = [
  { name: "Morpho wsrUSD/USDC", pct: 79.5, color: "#3b82f6" },
  { name: "rUSD", pct: 14, color: "#8429ff" },
  { name: "USDC", pct: 6.5, color: "#06b6d4" },
];

const creditMarkets = [
  { name: "All Markets", sub: "Effective Leverage 9.2x", icon: null, pct: null, assets: "$1.84M", assetsApy: "2.85%", liabilities: "$1.64M", liabilitiesApy: "2.63%", netApy: "4.64%" },
  { name: "AAVE", sub: null, icon: "aave", pct: "90.00%", assets: "$1.66M", assetsApy: "2.85%", liabilities: "$1.48M", liabilitiesApy: "2.63%", netApy: "4.64%" },
  { name: "Morpho", sub: null, icon: "morpho", pct: "10.00%", assets: "$180K", assetsApy: "2.77%", liabilities: "$160K", liabilitiesApy: "2.61%", netApy: "4.50%" },
];

/* ─── Tiny protocol SVG icons ─── */
function ProtocolIcon({ type, size = 28 }: { type: string; size?: number }) {
  if (type === "aave")
    return (
      <div className="flex items-center justify-center rounded-full bg-[#B6509E]" style={{ width: size, height: size }}>
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 16 16" fill="none">
          <path d="M11.5 12L8.5 4H7.5L4.5 12H5.7L6.4 10.2H9.6L10.3 12H11.5ZM6.8 9.1L8 6L9.2 9.1H6.8Z" fill="white" />
        </svg>
      </div>
    );
  return (
    <div className="flex items-center justify-center rounded-full bg-[#2470FF]" style={{ width: size, height: size }}>
      <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" fill="white" />
        <path d="M4 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

/* ─── Donut Ring (pure SVG) ─── */
function DonutChart({ isDark }: { isDark: boolean }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="flex items-center justify-center py-2">
      <svg width="130" height="130" viewBox="0 0 130 130">
        {allocationPie.map((s) => {
          const dash = (s.pct / 100) * c;
          const el = (
            <circle
              key={s.name}
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 65 65)"
            />
          );
          offset += dash;
          return el;
        })}
        {/* Center bg circle */}
        <circle cx="65" cy="65" r="28" fill={isDark ? "#0a0a0f" : "#F7F7F8"} />
      </svg>
    </div>
  );
}

/* ─── Card wrapper ─── */
function C({
  children,
  className: cx,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const p = useP();
  return (
    <div
      className={cn("rounded-xl border", cx)}
      style={{ background: p.cardBg, borderColor: p.border }}
    >
      {children}
    </div>
  );
}

/* ─── Small expand icon button ─── */
function Expand() {
  const p = useP();
  return (
    <button className="flex h-6 w-6 items-center justify-center rounded-md transition-colors hover:bg-white/[0.06]">
      <Maximize2 className="size-3.5" style={{ color: p.muted }} />
    </button>
  );
}

/* ─── Info circle ─── */
function InfoCircle({ size = 16 }: { size?: number }) {
  const p = useP();
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border"
      style={{ width: size, height: size, borderColor: p.border }}
    >
      <Info className="text-white/40" style={{ width: size * 0.55, height: size * 0.55 }} />
    </div>
  );
}

/* ─── Gradient dot ─── */
function GradDot({ size = 16 }: { size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #8429ff, #ff008b)",
      }}
    />
  );
}

/* ═══════════════════════════════════════
   VAULT PAGE
   ═══════════════════════════════════════ */
export function VaultPage() {
  const { isDark, toggleTheme } = useTheme();
  const p = useP();
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"overview" | "settings">("overview");
  const [showSharePrice, setShowSharePrice] = React.useState(false);
  const [depositMode, setDepositMode] = React.useState<"deposit" | "withdraw">("deposit");
  const [depositValue, setDepositValue] = React.useState("");
  const [depositFocused, setDepositFocused] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("0xe938...fB5F").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: p.bg,
        color: p.text,
      }}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ─── Nav ─── */}
      <header
        className="sticky top-0 z-30 border-b backdrop-blur-xl"
        style={{ borderColor: p.border, backgroundColor: isDark ? "rgba(6,6,6,0.8)" : "rgba(247,247,248,0.8)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center">
              <img src={isDark ? fusionLogo : fusionLogoLight} alt="Fusion" className="h-7 w-auto" />
            </Link>
            <div className="hidden items-center gap-1.5 text-sm sm:flex" style={{ color: p.muted }}>
              <Link to="/" className="transition-colors hover:text-[#8429FF]">Fusion Vaults</Link>
              <ChevronRight className="size-3.5" />
              <span style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)" }}>
                Reservoir wsrUSD Looping
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300"
              style={{ backgroundColor: isDark ? "#1A1A1F" : "#E5E7EB" }}
              aria-label="Toggle theme"
            >
              <Sun className={cn("absolute left-2 h-3.5 w-3.5 transition-opacity duration-300", isDark ? "opacity-30 text-[#9BA3AF]" : "opacity-100 text-amber-500")} />
              <Moon className={cn("absolute right-2 h-3.5 w-3.5 transition-opacity duration-300", isDark ? "opacity-100 text-[#8429FF]" : "opacity-30 text-[#9CA3AF]")} />
              <div
                className="h-6 w-6 rounded-full shadow-sm transition-all duration-300"
                style={{
                  backgroundColor: isDark ? "#8429FF" : "#fff",
                  transform: isDark ? "translateX(24px)" : "translateX(0)",
                }}
              />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white transition-colors duration-150"
              style={{ fontWeight: 500, backgroundColor: p.accent }}
            >
              <Wallet className="size-4" />
              Connect Wallet
            </button>
          </div>
        </div>
      </header>

      {/* ─── Content ─── */}
      <main className="mx-auto max-w-6xl px-6 py-6">
        {/* Back */}
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: p.muted }}
        >
          <ArrowLeft className="size-4" />
          Back to Fusion
        </Link>

        {/* ─── Vault shell card (mirrors DashboardMock outer wrapper) ─── */}
        <div
          className="overflow-hidden rounded-2xl border p-5"
          style={{ background: isDark ? "#0a0a0f" : "#FAFAFA", borderColor: p.border }}
        >
          {/* ── HEADER ROW ── */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <img src={imgUsdc} alt="USDC" className="h-11 w-11 rounded-full" />
              </div>
              <div>
                <div className="text-[15px]" style={{ fontWeight: 600 }}>
                  Reservoir wsrUSD Looping
                </div>
                <div className="text-xs" style={{ color: p.muted }}>
                  Leveraged Looping
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <InfoCircle size={28} />
              <button
                className="rounded-full border px-6 py-2 text-xs text-white transition-colors duration-150"
                style={{
                  fontWeight: 500,
                  background: "linear-gradient(180deg, #8429FF 0%, #6C00FF 100%)",
                  borderColor: "#8429FF",
                  transition: "opacity 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Deposit
              </button>
              <button
                className="rounded-full border px-6 py-2 text-xs transition-colors duration-150"
                style={{
                  borderColor: isDark ? "rgba(132,41,255,0.4)" : "#9BA3AF",
                  color: isDark ? "rgba(255,255,255,0.5)" : "#000000",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  if (!isDark) e.currentTarget.style.backgroundColor = "#EFEFEF";
                }}
                onMouseLeave={(e) => {
                  if (!isDark) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Withdraw
              </button>
            </div>
          </div>

          {/* ── DEPOSIT INFO + PROGRESS ── */}
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-5 text-xs" style={{ color: p.muted }}>
                <span>Deposits: <span style={{ fontFamily: NUM_FONT }}>3,642,425</span> rUSD</span>
                <span>Max capacity: <span style={{ fontFamily: NUM_FONT }}>4,018,711</span> rUSD</span>
              </div>
              <div className="mt-2 h-2 w-72 overflow-hidden rounded-full" style={{ backgroundColor: isDark ? "#1e293b" : "#E2E8F0" }}>
                <div className="h-full w-[90%] rounded-full bg-[#cf3e3a]" />
              </div>
              <div className="mt-1.5 text-xs" style={{ color: p.muted }}>
                <span style={{ color: p.text, fontWeight: 700, fontFamily: NUM_FONT }}>376,285 rUSD</span>{" "}
                left before reaching maximum capacity
              </div>
            </div>
            <div className="flex flex-col gap-1.5 text-right text-sm">
              <div className="flex items-center justify-end gap-2">
                <span style={{ color: p.muted }}>My Deposit:</span>
                <span style={{ fontWeight: 700, fontFamily: NUM_FONT }}>0.00</span>
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#DCC5F7] to-[#6800D1]" />
                <div
                  className="flex h-5 w-5 items-center justify-center rounded border text-[10px]"
                  style={{ borderColor: p.border, color: p.muted }}
                >
                  $
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span style={{ color: p.muted }}>My Fusion Points:</span>
                <span style={{ fontWeight: 700, fontFamily: NUM_FONT }}>0</span>
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#8429ff] to-[#ff008b]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span style={{ color: p.muted }}>My Reservoir Points:</span>
                <span style={{ fontWeight: 700, fontFamily: NUM_FONT }}>0</span>
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#DCC5F7] to-[#6800D1]" />
                <InfoCircle size={16} />
              </div>
            </div>
          </div>

          {/* ── DEPOSIT / WITHDRAW INPUT PANEL ── */}
          <div className="mt-5">
            <C className="p-5">
              {/* Deposit / Withdraw tab toggle */}
              <div
                className="inline-flex items-center rounded-full border"
                style={{
                  borderColor: isDark ? p.border : "#9BA3AF",
                  backgroundColor: isDark ? "transparent" : "#E9E9F3",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {(["deposit", "withdraw"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setDepositMode(mode)}
                    className="rounded-full px-5 py-1.5 text-[13px] capitalize transition-colors duration-150"
                    style={{
                      backgroundColor:
                        depositMode === mode
                          ? isDark ? "rgba(132,41,255,0.2)" : "rgba(132,41,255,0.1)"
                          : "transparent",
                      border: depositMode === mode ? "1px solid #8429FF" : "1px solid transparent",
                      color:
                        depositMode === mode
                          ? isDark ? "#c084fc" : "#000000"
                          : isDark ? "rgba(255,255,255,0.4)" : "#70747A",
                      fontWeight: depositMode === mode ? 500 : 400,
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Amount input field — Figma Interactive Fields spec */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[13px]" style={{ color: p.muted, fontFamily: "'Poppins', sans-serif" }}>
                  <span className="capitalize">{depositMode}</span>
                  <span>Balance: <span style={{ fontFamily: NUM_FONT }}>0.00</span></span>
                </div>
                <div
                  className="mt-1.5 flex items-center gap-3 rounded-2xl border px-5 py-4"
                  style={{
                    backgroundColor: depositFocused
                      ? isDark ? "#12121a" : "#FFFFFF"
                      : isDark ? "#0d0d14" : "#F5F5FA",
                    borderColor: depositFocused
                      ? "#8429FF"
                      : isDark ? "rgba(255,255,255,0.08)" : "#9BA3AF",
                    transition: "border-color 150ms ease, background-color 150ms ease",
                  }}
                >
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="0.00"
                    value={depositValue}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (/^[0-9]*\.?[0-9]*$/.test(v)) setDepositValue(v);
                    }}
                    onFocus={() => setDepositFocused(true)}
                    onBlur={() => setDepositFocused(false)}
                    className="min-w-0 flex-1 bg-transparent text-[32px] outline-none"
                    style={{
                      color: depositValue ? p.text : (isDark ? "rgba(255,255,255,0.25)" : "#AAACB4"),
                      fontFamily: NUM_FONT,
                      fontWeight: 600,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  />
                  {/* Token selector */}
                  <button
                    className="flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 transition-colors duration-150"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.12)" : "#9BA3AF",
                      backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#F5F5FA",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      if (!isDark) e.currentTarget.style.backgroundColor = "#E5E5E5";
                    }}
                    onMouseLeave={(e) => {
                      if (!isDark) e.currentTarget.style.backgroundColor = "#F5F5FA";
                    }}
                  >
                    {/* USDC icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#2675CA" opacity="0.997" />
                      <path d="M12.5 11.5c0-1.1-.9-1.5-2.5-1.7-1.1-.2-1.5-.4-1.5-.9s.5-.8 1.2-.8c.6 0 1.1.2 1.3.7.1.1.2.1.3.1h.3c.1 0 .2-.1.2-.2 0-.5-.4-1-1-1.2V8c0-.1-.1-.2-.3-.2h-.2c-.1 0-.2.1-.3.2v.5c-1 .2-1.5.8-1.5 1.5 0 1 .8 1.4 2.3 1.7 1 .2 1.7.3 1.7 1s-.7.9-1.3.9c-.8 0-1.3-.4-1.4-1-.1-.1-.2-.2-.3-.2h-.3c-.2 0-.3.1-.2.3.2.7.7 1.2 1.5 1.4v.5c0 .1.1.2.3.2h.2c.1 0 .2-.1.3-.2v-.5c1-.2 1.5-.8 1.5-1.6z" fill="white" />
                    </svg>
                    <span className="text-sm" style={{ color: p.text }}>USDC</span>
                    {/* Chevron */}
                    <ChevronDown className="size-3.5" style={{ color: p.text }} />
                  </button>
                </div>

                {/* Dollar value + percentage buttons */}
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="text-[15px]"
                    style={{
                      color: p.muted,
                      fontFamily: NUM_FONT,
                    }}
                  >
                    ${depositValue ? (parseFloat(depositValue) * 0.9999).toFixed(2) : "0.00"}
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    {["25%", "50%", "75%", "100%"].map((pct) => (
                      <button
                        key={pct}
                        className="rounded-full border px-3 py-0.5 text-[13px] transition-colors duration-150"
                        style={{
                          borderColor: isDark ? "rgba(255,255,255,0.1)" : "#9BA3AF",
                          color: isDark ? "rgba(255,255,255,0.5)" : "#70747A",
                          fontFamily: NUM_FONT,
                        }}
                        onMouseEnter={(e) => {
                          if (!isDark) e.currentTarget.style.backgroundColor = "#E9E9F3";
                        }}
                        onMouseLeave={(e) => {
                          if (!isDark) e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {pct}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <button
                className="mt-5 w-full rounded-full border py-3 text-sm text-white capitalize"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  background: "linear-gradient(180deg, #8429FF 0%, #6C00FF 100%)",
                  borderColor: "#8429FF",
                  transition: "opacity 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {depositMode}
              </button>
            </C>
          </div>

          {/* ── TABS ── */}
          <div
            className="mt-6 flex gap-6 border-b"
            style={{
              borderColor: isDark ? p.border : "#9BA3AF",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {(["overview", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex items-center gap-2 pb-3 text-[16px] transition-colors capitalize",
                  activeTab === tab
                    ? "border-b-2 border-[#8429ff]"
                    : ""
                )}
                style={{
                  color: activeTab === tab ? (isDark ? p.text : "#000000") : (isDark ? p.muted : "#70747A"),
                  fontWeight: activeTab === tab ? 500 : 400,
                }}
              >
                {tab === "overview" ? (
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="7" height="7" rx="1" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" />
                    <rect x="11" y="2" width="7" height="7" rx="1" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" />
                    <rect x="2" y="11" width="7" height="7" rx="1" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" />
                    <rect x="11" y="11" width="7" height="7" rx="1" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="3" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" />
                    <path d="M16.5 12.5a1.5 1.5 0 00.3 1.65l.05.05a1.82 1.82 0 01-1.28 3.1 1.82 1.82 0 01-1.29-.54" stroke={activeTab === tab ? "#8429ff" : p.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {tab}
              </button>
            ))}
          </div>

          {/* ── OVERVIEW TAB CONTENT ── */}
          {activeTab === "overview" && (
            <div className="mt-5 flex flex-col gap-3">
              {/* ROW 1: Vault Strategy + APY + 7D APY */}
              <div className="grid gap-3 md:grid-cols-[1.3fr_0.85fr_0.85fr]">
                {/* Vault Strategy */}
                <C className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm" style={{ fontWeight: 600 }}>Vault Strategy</div>
                      <p className="mt-2 text-xs leading-relaxed" style={{ color: p.muted }}>
                        This vault provides leveraged exposure to Reservoir&apos;s yield bearing stablecoin, srUSD. srUSD is backed by a multi-collateral balance sheet consisting of a variety of digital strategies and RWAs. See reservoir.xyz for more info and proof of reserves.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs" style={{ color: p.muted }}>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1 rounded px-2 py-1 font-mono text-[11px] transition-colors"
                          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)" }}
                        >
                          0xe938...fB5F
                          {copied ? <Check className="size-3 text-green-400" /> : <Copy className="size-3" />}
                        </button>
                        <div className="flex items-center gap-1.5">
                          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#DCC5F7] to-[#6800D1]" />
                          <span>rUSD</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg width="10" height="14" viewBox="0 0 7.37 12" fill="none">
                            <path d="M3.68 0L0 6.13l3.68 2.14L7.37 6.13 3.68 0z" fill={isDark ? "#343434" : "#888"} />
                            <path d="M0 6.84l3.68 5.16 3.69-5.16-3.69 2.14L0 6.84z" fill={isDark ? "#8C8C8C" : "#aaa"} />
                          </svg>
                          <span>Ethereum</span>
                        </div>
                      </div>
                    </div>
                    {/* Risk Rating */}
                    <div
                      className="shrink-0 rounded-xl border px-4 py-3 text-center"
                      style={{ background: isDark ? "#0a0a0f" : "#F5F5F7", borderColor: p.border }}
                    >
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: p.muted }}>
                        Risk Rating
                        <span className="text-[10px] text-[#c084fc]">✦ xerberus</span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="text-xl" style={{ fontWeight: 600 }}>B</span>
                        <ExternalLink className="size-3.5 text-[#8429ff]" />
                      </div>
                    </div>
                  </div>
                </C>

                {/* APY Card */}
                <C className="p-5">
                  <div className="flex items-center gap-2 text-xs" style={{ color: p.muted }}>
                    <span>APY</span>
                    {/* Toggle: 1D / Spot — Figma Toggle style */}
                    <div
                      className="inline-flex items-center rounded-md border"
                      style={{
                        borderColor: isDark ? p.border : "#9BA3AF",
                        backgroundColor: isDark ? "transparent" : "#E9E9F3",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <span
                        className="rounded-md px-2.5 py-0.5 text-[13px]"
                        style={{
                          backgroundColor: isDark ? "rgba(132,41,255,0.2)" : "rgba(132,41,255,0.1)",
                          border: "1px solid #8429FF",
                          color: isDark ? "#c084fc" : "#000000",
                          fontWeight: 500,
                        }}
                      >
                        1D
                      </span>
                      <span
                        className="px-2.5 py-0.5 text-[13px]"
                        style={{
                          color: isDark ? "rgba(255,255,255,0.25)" : "#70747A",
                          fontWeight: 400,
                        }}
                      >
                        Spot
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <GradDot size={20} />
                    <span className="text-3xl" style={{ fontFamily: NUM_FONT, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>15.30%</span>
                    <InfoCircle size={18} />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs"
                      style={{ backgroundColor: isDark ? "#1e293b" : "#E2E8F0", color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}
                    >
                      4x <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/40" />
                    </span>
                    <span
                      className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs"
                      style={{ backgroundColor: "rgba(132,41,255,0.15)", color: "#c084fc" }}
                    >
                      5x <span className="inline-block h-3 w-3 rounded-full bg-[#8429ff]/40" />
                    </span>
                  </div>
                </C>

                {/* 7D APY Card */}
                <C className="p-5">
                  <div className="text-xs" style={{ color: p.muted }}>7D APY</div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <GradDot size={20} />
                    <span className="text-3xl" style={{ fontFamily: NUM_FONT, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>14.28%</span>
                  </div>
                </C>
              </div>

              {/* ROW 2: TVM + TVL */}
              <div className="grid gap-3 md:grid-cols-2">
                <C className="p-5">
                  <div className="text-xs" style={{ color: p.muted }}>Total Value Managed</div>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <GradDot size={20} />
                    <span className="text-2xl" style={{ fontFamily: NUM_FONT, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>38,012,752.69</span>
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full border text-xs"
                      style={{ borderColor: p.border, color: p.muted }}
                    >
                      +
                    </div>
                  </div>
                </C>
                <C className="p-5">
                  <div className="text-xs" style={{ color: p.muted }}>Total Value Locked</div>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <GradDot size={20} />
                    <span className="text-2xl" style={{ fontFamily: NUM_FONT, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>3,642,425.66</span>
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full border text-xs"
                      style={{ borderColor: p.border, color: p.muted }}
                    >
                      +
                    </div>
                  </div>
                </C>
              </div>

              {/* ROW 3: Charts (3 columns) */}
              <div className="grid gap-3 md:grid-cols-3">
                {/* Performance Report */}
                <C className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ fontWeight: 600 }}>Performance Report</span>
                    <Expand />
                  </div>
                  <div className="mt-3" style={{ height: 160 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={performanceData}>
                        <defs>
                          <linearGradient id="vp-perfGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8429ff" stopOpacity={0.18} />
                            <stop offset="100%" stopColor="#8429ff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#1e1e28" : "#E8E8EC"} vertical={false} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: p.muted }} interval={6} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: p.muted }} tickFormatter={(v) => `${v}%`} width={32} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDark ? "#111118" : "#fff",
                            borderColor: isDark ? "#222" : "#ddd",
                            borderRadius: 8,
                            fontSize: 11,
                          }}
                          formatter={(v: number, name: string) => [
                            name === "strategyApy" ? `${v.toFixed(1)}%` : v.toFixed(4),
                            name === "strategyApy" ? "Strategy 1D APY" : "Share Price",
                          ]}
                        />
                        <Area type="monotone" dataKey="strategyApy" stroke="#8429ff" strokeWidth={2} fill="url(#vp-perfGrad)" />
                        {showSharePrice && (
                          <Line type="monotone" dataKey="sharePrice" stroke={p.muted} strokeWidth={1} dot={false} strokeDasharray="4 3" yAxisId="right" />
                        )}
                        {showSharePrice && (
                          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: p.muted }} width={40} />
                        )}
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="h-[3px] w-3 rounded-full bg-[#8429ff]" />
                      <span style={{ color: p.muted }}>Strategy 1D APY</span>
                    </div>
                    <button
                      onClick={() => setShowSharePrice(!showSharePrice)}
                      className="flex items-center gap-1.5 transition-colors"
                    >
                      <div
                        className="h-[3px] w-3 rounded-full border"
                        style={{
                          borderColor: showSharePrice ? "#8429ff" : p.muted,
                          backgroundColor: showSharePrice ? "#8429ff" : "transparent",
                        }}
                      />
                      <span style={{ color: showSharePrice ? p.text : p.muted }}>Share Price</span>
                    </button>
                  </div>
                </C>

                {/* Current Allocation */}
                <C className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ fontWeight: 600 }}>Current Allocation</span>
                    <Expand />
                  </div>
                  <DonutChart isDark={isDark} />
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs" style={{ color: p.muted }}>
                    {allocationPie.map((s) => (
                      <div key={s.name} className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name}
                      </div>
                    ))}
                  </div>
                </C>

                {/* Allocation Over Time */}
                <C className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ fontWeight: 600 }}>Allocation Over Time</span>
                    <Expand />
                  </div>
                  <div className="mt-3" style={{ height: 160 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={allocationTimeData} barCategoryGap="15%">
                        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#1e1e28" : "#E8E8EC"} vertical={false} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: p.muted }} interval={6} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: p.muted }} tickFormatter={(v) => `$${v}M`} width={38} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDark ? "#111118" : "#fff",
                            borderColor: isDark ? "#222" : "#ddd",
                            borderRadius: 8,
                            fontSize: 11,
                          }}
                          formatter={(v: number, name: string) => [
                            `$${v.toFixed(3)}M`,
                            name === "morpho" ? "Morpho wsrUSD/USDC" : name === "rUSD" ? "rUSD" : "USDC",
                          ]}
                        />
                        <Bar dataKey="morpho" stackId="a" fill="#3b82f6" />
                        <Bar dataKey="rUSD" stackId="a" fill="#8429ff" />
                        <Bar dataKey="usdc" stackId="a" fill="#06b6d4" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{ color: p.muted }}>
                    {allocationPie.map((s) => (
                      <div key={`leg-${s.name}`} className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name}
                      </div>
                    ))}
                  </div>
                </C>
              </div>

              {/* ROW 4: Credit Markets */}
              <C className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontWeight: 600 }}>Credit Markets</span>
                  <button className="flex items-center gap-1.5 text-xs" style={{ color: p.muted }}>
                    More details <Maximize2 className="size-3.5" />
                  </button>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[580px]">
                    <thead>
                      <tr className="text-left text-[11px]" style={{ color: isDark ? "#555" : "#999" }}>
                        <th className="pb-3 pr-4" style={{ fontWeight: 500 }}>Market</th>
                        <th className="pb-3 px-3 text-right" style={{ fontWeight: 500 }}>Assets</th>
                        <th className="pb-3 px-3 text-right" style={{ fontWeight: 500 }}>Assets APY</th>
                        <th className="pb-3 px-3 text-right" style={{ fontWeight: 500 }}>Liabilities</th>
                        <th className="pb-3 px-3 text-right" style={{ fontWeight: 500 }}>Liabilities APY</th>
                        <th className="pb-3 pl-3 text-right" style={{ fontWeight: 500 }}>Net APY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {creditMarkets.map((m) => (
                        <tr key={m.name} className="border-t" style={{ borderColor: p.border }}>
                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-3">
                              {m.icon && <ProtocolIcon type={m.icon} />}
                              <div>
                                <div className="text-sm" style={{ fontWeight: 600 }}>{m.name}</div>
                                {m.sub && <div className="mt-0.5 text-[11px]" style={{ color: p.muted, fontWeight: 500 }}>{m.sub}</div>}
                                {m.pct && (
                                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px]" style={{ color: p.muted }}>
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#8429ff]" />
                                    {m.pct}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-right text-sm" style={{ fontFamily: NUM_FONT, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{m.assets}</td>
                          <td className="px-3 py-4 text-right text-sm" style={{ fontFamily: NUM_FONT, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{m.assetsApy}</td>
                          <td className="px-3 py-4 text-right text-sm" style={{ fontFamily: NUM_FONT, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{m.liabilities}</td>
                          <td className="px-3 py-4 text-right text-sm" style={{ fontFamily: NUM_FONT, fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{m.liabilitiesApy}</td>
                          <td className="py-4 pl-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <div className="h-5 w-0.5 rounded-full bg-[#8429ff]" />
                              <span className="text-sm" style={{ fontFamily: NUM_FONT, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{m.netApy}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </C>
            </div>
          )}

          {/* ── SETTINGS TAB (placeholder) ── */}
          {activeTab === "settings" && (
            <div className="mt-8 flex flex-col items-center justify-center py-16 text-center" style={{ color: p.muted }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mb-4 opacity-30">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="text-sm" style={{ fontWeight: 500 }}>Vault settings</div>
              <div className="mt-1 text-xs">Configuration options will appear here.</div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t py-5" style={{ borderColor: p.border }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <img src={isDark ? fusionLogo : fusionLogoLight} alt="Fusion" className="h-5 w-auto opacity-40" />
          <span className="text-xs" style={{ color: p.muted }}>Fusion by IPOR</span>
        </div>
      </footer>
    </div>
  );
}