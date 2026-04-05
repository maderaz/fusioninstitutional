import Nav from "./Nav";
import { Link } from "react-router";
import { AnimatedGroup } from "./ui/animated-group";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";

import logoLlamaRisk from "@/assets/27eaf7f1d8e15adbda2e40a7dbbaa37a9148005c.png";
import logoTesseract from "@/assets/fd498d5ef6a552323a756611801a96fe869f9ea1.png";
import logoTauLabs from "@/assets/81ccb8b1566153507476e23d831196aa8f65e806.png";
import logoK3Capital from "@/assets/2034cdb69d7661904524abe1ebf8c3dfff4baa40.png";
import logoNavigator from "@/assets/930a5b1472d3933af2c64ea76a3a4497aeae82a0.png";
import logoFirst from "@/assets/b43b4e3d049276b94a1eab36badf095c0f199d5f.png";
import logoThird from "@/assets/5825e1e8d3ef806ec41edbf7133c10d197490b21.png";
import imgUsdc from "@/assets/2b48695444595169b19e5f1a3e0e29241ec3cfdc.png";
import imgAppMock from "@/assets/a50d27a876e4244095fecbf9b41197e2b5cb274f.png";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
};

/* ── Faux dashboard overlay for the app mock ── */
// NOTE: DashboardMock component preserved below for future use — currently replaced by screenshot image.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DashboardMock() {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#090E14] text-[#f8fafc]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── TOP NAV ── */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#8429ff] to-[#6C00FF]">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5"/><path d="M10 7v6M7 10h6" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </div>
            <span className="text-[14px] text-white" style={{ fontWeight: 600 }}>Fusion</span>
            <span className="text-[8px] text-[#9BA3AF]">by IPOR</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-white" style={{ fontWeight: 500 }}>Vaults</span>
            <span className="text-[#9BA3AF]">LPs</span>
            <span className="text-[#9BA3AF]">Swaps</span>
            <span className="text-[#9BA3AF]">Analytics</span>
            <span className="text-[#9BA3AF]">Leaderboards</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-[#8429ff]/15 px-3 py-1.5 text-[10px] text-[#c084fc]">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#8429ff] to-[#ff008b]" />
            Points
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[#8429ff]/15 px-3 py-1.5 text-[10px] text-[#c084fc]">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="10" rx="1" stroke="#c084fc" strokeWidth="1.2"/><path d="M5 4V2a3 3 0 016 0v2" stroke="#c084fc" strokeWidth="1.2"/></svg>
            Rewards
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#2E3137] px-3 py-1.5 text-[10px] text-[#9BA3AF]">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#8429ff] to-[#6C00FF]" />
            xyz0cz...EfEc
          </div>
        </div>
      </div>

      {/* ── Purple glow background ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-[200px] w-[500px] bg-[#8429ff]/[0.06] blur-[80px]" />

      {/* ── VAULT HEADER ── */}
      <div className="px-5 pt-5 pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8429ff] to-[#6C00FF]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/><path d="M12 8v3M12 16h.01" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 12.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5-1.3 2-3 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[18px] text-white" style={{ fontWeight: 600 }}>IPOR USDC Prime</span>
              <div className="flex items-center gap-1.5 text-[#9BA3AF]">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5h6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M6 2h8v8M4 14L14 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 8l6 6 6-6-6-6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div className="text-[11px] text-[#9BA3AF]">Lending Optimizer</div>
          </div>
        </div>
        {/* Tags */}
        <div className="mt-3 flex items-center gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-white">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="#627EEA"/><path d="M6 1.5v3.5L3.5 6.5 6 1.5z" fill="white" fillOpacity="0.6"/><path d="M6 1.5v3.5l2.5 1.5L6 1.5z" fill="white"/><path d="M6 8v2.5l-2.5-3.5L6 8z" fill="white" fillOpacity="0.6"/><path d="M6 8v2.5l2.5-3.5L6 8z" fill="white"/></svg>
            Ethereum
          </div>
          <div className="h-3 w-px bg-[#2E3137]" />
          <div className="flex items-center gap-1.5 text-white">
            <img src={imgUsdc} alt="USDC" className="h-3.5 w-3.5 rounded-full" />
            USDC
          </div>
          <div className="h-3 w-px bg-[#2E3137]" />
          <div className="flex items-center gap-1.5 text-white">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#8429ff"/><path d="M4.5 7l2 2 3.5-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            IPOR DAO
          </div>
          <div className="h-3 w-px bg-[#2E3137]" />
          <div className="flex items-center gap-1 rounded-full border border-[#EB00FF]/40 bg-[#EB00FF]/15 px-2.5 py-0.5 text-[10px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>
            10x
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-[#6C00FF] to-[#FF008B]" />
          </div>
        </div>
      </div>

      {/* ── TWO COLUMN LAYOUT ── */}
      <div className="flex flex-1 gap-0">
        {/* LEFT COLUMN */}
        <div className="flex-1 border-r border-white/[0.06] px-5 pt-2 pb-5">
          {/* Left tabs */}
          <div className="flex gap-5 border-b border-white/[0.06] text-[11px]">
            <span className="border-b-2 border-[#8429ff] pb-2.5 text-white" style={{ fontWeight: 500 }}>Overview</span>
            <span className="pb-2.5 text-[#9BA3AF]">Vault info</span>
            <span className="pb-2.5 text-[#9BA3AF]">Activity</span>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {/* Spot APY */}
            <div className="rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
              <div className="flex items-center gap-1.5 text-[9px]">
                <span className="rounded border border-[#8429ff] bg-[#8429ff]/20 px-2 py-0.5 text-white" style={{ fontWeight: 500 }}>Spot APY</span>
                <span className="text-[#9BA3AF]">1D</span>
                <span className="text-[#9BA3AF]">7D</span>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5">
                <span className="text-[22px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>13.28%</span>
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9BA3AF" strokeWidth="1"/><path d="M7 9.5V7M7 4.5h.005" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round"/></svg>
              </div>
            </div>
            {/* TVM */}
            <div className="rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
              <div className="text-[9px] text-[#9BA3AF]">Total Value Managed</div>
              <div className="mt-1.5 text-[18px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>$4,566,199.42</div>
              <div className="mt-0.5 text-[10px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>4,566,123.59 USDC</div>
            </div>
            {/* TVL */}
            <div className="rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
              <div className="text-[9px] text-[#9BA3AF]">Total Value Locked</div>
              <div className="mt-1.5 text-[18px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>$4,566,199.42</div>
              <div className="mt-0.5 text-[10px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>4,566,123.59 USDC</div>
            </div>
          </div>

          {/* Charts row */}
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            {/* Performance Report */}
            <div className="rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white" style={{ fontWeight: 500 }}>Performance Report</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 6V2h4M14 10v4h-4" stroke="#9BA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Y-axis + chart area */}
              <div className="mt-3 flex">
                <div className="flex flex-col justify-between pr-1.5 text-[7px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  <span>32%</span><span>24%</span><span>16%</span><span>8%</span><span>0%</span>
                </div>
                <div className="flex-1">
                  <svg viewBox="0 0 200 80" className="h-24 w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="perfGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8429ff" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8429ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,55 15,52 30,48 45,45 60,42 75,38 90,40 105,35 120,37 135,30 150,26 165,22 180,18 195,15 200,14 200,80 0,80" fill="url(#perfGrad2)" />
                    <polyline points="0,55 15,52 30,48 45,45 60,42 75,38 90,40 105,35 120,37 135,30 150,26 165,22 180,18 195,15 200,14" fill="none" stroke="#8429ff" strokeWidth="1.5" />
                    <polyline points="0,60 15,59 30,58 45,57 60,56 75,55 90,56 105,54 120,55 135,53 150,52 165,51 180,50 195,49 200,48" fill="none" stroke="#9BA3AF" strokeWidth="0.7" strokeDasharray="3 2" />
                  </svg>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between pl-7 text-[7px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <span>01.10</span><span>05.10</span><span>10.10</span><span>15.10</span><span>20.10</span><span>25.10</span><span>30.10</span>
              </div>
              {/* Minibar */}
              <div className="mt-2 h-3 w-full overflow-hidden rounded-sm">
                <div className="flex h-full">
                  <div className="h-full flex-1 bg-[#8429ff]/30" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, #8429ff33 2px, #8429ff33 4px)" }} />
                </div>
              </div>
              {/* Legend */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px]">
                <div className="flex items-center gap-1">
                  <div className="flex h-3 w-3 items-center justify-center rounded-sm border border-[#8429ff] bg-[#8429ff]/40"><svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <span className="text-white">Strategy Spot APY</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex h-3 w-3 items-center justify-center rounded-sm border border-[#9BA3AF] bg-[#9BA3AF]/30"><svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <span className="text-white">Market Portfolio APY</span>
                  <svg width="9" height="9" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9BA3AF" strokeWidth="1"/><path d="M7 9.5V7M7 4.5h.005" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round"/></svg>
                </div>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[8px]">
                <div className="h-3 w-3 rounded-sm border border-[#9BA3AF]" />
                <span className="text-[#9BA3AF]">Share Price</span>
              </div>
            </div>

            {/* Historical Allocation */}
            <div className="rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white" style={{ fontWeight: 500 }}>Historical Allocation</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 6V2h4M14 10v4h-4" stroke="#9BA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Y-axis + chart */}
              <div className="mt-3 flex">
                <div className="flex flex-col justify-between pr-1.5 text-[7px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  <span>$60.0M</span><span>$50.0M</span><span>$40.0M</span><span>$30.0M</span><span>$20.0M</span><span>$10.0M</span><span>$0</span>
                </div>
                <div className="flex-1">
                  <svg viewBox="0 0 200 80" className="h-24 w-full" preserveAspectRatio="none">
                    {/* Dashed grid lines */}
                    {[0, 13.3, 26.6, 40, 53.3, 66.6].map((y, i) => (
                      <line key={i} x1="0" y1={y} x2="200" y2={y} stroke="#9BA3AF" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.3" />
                    ))}
                    {(() => {
                      const cols = 40;
                      const w = 200 / cols;
                      // Generate uptrending data with a dip in the middle (like the reference)
                      const data = Array.from({ length: cols }, (_, i) => {
                        const t = i / (cols - 1);
                        const dip = Math.exp(-((t - 0.55) ** 2) / 0.01) * 20;
                        const total = 38 + t * 20 - dip + Math.sin(i * 0.7) * 2;
                        // Layer ratios shift over time — purple palette
                        const l1 = total * (0.25 + Math.sin(i * 0.3) * 0.03);
                        const l2 = total * (0.22 - t * 0.05 + Math.cos(i * 0.5) * 0.03);
                        const l3 = total * (0.18 + Math.sin(i * 0.8 + 1) * 0.04);
                        const l4 = total * (0.15 + t * 0.05 + Math.cos(i * 0.4) * 0.02);
                        const l5 = total - l1 - l2 - l3 - l4;
                        return { l1: Math.max(l1, 1), l2: Math.max(l2, 1), l3: Math.max(l3, 2), l4: Math.max(l4, 1), l5: Math.max(l5, 1) };
                      });
                      return data.map((d, i) => {
                        const x = i * w;
                        let y = 80;
                        const layers = [
                          { h: d.l1, fill: "#4B0E8A" },
                          { h: d.l2, fill: "#6C00FF" },
                          { h: d.l3, fill: "#8429FF" },
                          { h: d.l4, fill: "#B06CFF" },
                          { h: d.l5, fill: "#D4A0FF" },
                        ];
                        return (
                          <g key={i}>
                            {layers.map((l, li) => {
                              const ry = y - l.h;
                              const el = <rect key={li} x={x} y={ry} width={w + 0.5} height={l.h} fill={l.fill} opacity="0.85" />;
                              y = ry;
                              return el;
                            })}
                          </g>
                        );
                      });
                    })()}
                  </svg>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between pl-7 text-[7px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                <span>22.02</span><span>01.03</span><span>08.03</span><span>15.03</span>
              </div>
              {/* Minibar */}
              <div className="mt-2 h-3 w-full overflow-hidden rounded-sm">
                <div className="flex h-full">
                  <div className="h-full" style={{ flex: 2.5, backgroundColor: "#8429FF" }} />
                  <div className="h-full" style={{ flex: 2, backgroundColor: "#B06CFF" }} />
                  <div className="h-full" style={{ flex: 2, backgroundColor: "#6C00FF" }} />
                  <div className="h-full" style={{ flex: 1.5, backgroundColor: "#D4A0FF" }} />
                  <div className="h-full" style={{ flex: 2, backgroundColor: "#4B0E8A" }} />
                </div>
              </div>
              {/* Legend */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[8px]">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#8429FF" }} />
                  <span className="text-[#9BA3AF]">Aave v3 Core USDC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#B06CFF" }} />
                  <span className="text-[#9BA3AF]">Euler v2 Prime USDC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#6C00FF" }} />
                  <span className="text-[#9BA3AF]">SparkLend USDC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D4A0FF" }} />
                  <span className="text-[#9BA3AF]">Morpho</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#4B0E8A" }} />
                  <span className="text-[#9BA3AF]">cbBTC/USDC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Markets */}
          <div className="mt-2.5 rounded-xl border border-white/[0.08] bg-[#161A20] p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-white" style={{ fontWeight: 600 }}>Credit Markets</span>
              <div className="flex items-center gap-2 text-[10px] text-[#9BA3AF]">
                <span>More details</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 6V2h4M14 10v4h-4" stroke="#9BA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            {/* Table header */}
            <div className="mt-3 grid grid-cols-[2fr_1fr_1fr_0.1fr_1fr_1fr_0.1fr_1fr] items-center gap-0 border-b border-white/[0.06] pb-2 text-[8px] text-[#9BA3AF]">
              <span>Market</span><span>Assets</span><span>Assets APY</span><span /><span>Liabilities</span><span>Liabilities APY</span><span /><span>Net APY</span>
            </div>
            {/* All Markets row */}
            <div className="grid grid-cols-[2fr_1fr_1fr_0.1fr_1fr_1fr_0.1fr_1fr] items-center gap-0 border-b border-white/[0.06] py-2.5 text-[9px]">
              <div>
                <div className="text-white" style={{ fontWeight: 500 }}>All Markets</div>
                <div className="flex items-center gap-1 text-[8px] text-[#9BA3AF]">Effective Leverage <span className="text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>9.2x</span></div>
              </div>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$1.84M</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.85%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$1.64M</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.63%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>4.64%</span>
            </div>
            {/* AAVE row */}
            <div className="grid grid-cols-[2fr_1fr_1fr_0.1fr_1fr_1fr_0.1fr_1fr] items-center gap-0 border-b border-white/[0.06] py-2.5 text-[9px]">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B6509E]">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 3L4 14h3l3-6 3 6h3L10 3z" fill="white"/></svg>
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 500 }}>AAVE</div>
                  <div className="flex items-center gap-1 text-[8px] text-[#9BA3AF]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#8429ff]" />
                    90.00%
                  </div>
                </div>
              </div>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$1.66M</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.85%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$1.48M</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.63%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>4.64%</span>
            </div>
            {/* Morpho row */}
            <div className="grid grid-cols-[2fr_1fr_1fr_0.1fr_1fr_1fr_0.1fr_1fr] items-center gap-0 py-2.5 text-[9px]">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2A73FF]">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 12V6l4-3 4 3v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3v9" stroke="white" strokeWidth="1.2"/></svg>
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 500 }}>Morpho</div>
                  <div className="flex items-center gap-1 text-[8px] text-[#9BA3AF]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#9BA3AF]" />
                    10.00%
                  </div>
                </div>
              </div>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$180K</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.77%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$160K</span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>2.61%</span>
              <span className="flex justify-center"><span className="h-4 w-px bg-[#8429ff]/40" /></span>
              <span className="text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>4.50%</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Deposit sidebar */}
        <div className="w-[280px] shrink-0 px-4 pt-2 pb-5">
          {/* Right tabs */}
          <div className="flex border-b border-white/[0.06] text-[11px]">
            <span className="flex-1 border-b-2 border-[#8429ff] pb-2.5 text-center text-white" style={{ fontWeight: 500 }}>Deposit</span>
            <span className="flex-1 pb-2.5 text-center text-[#9BA3AF]">Withdraw</span>
          </div>

          {/* Deposit card */}
          <div className="mt-4 rounded-xl border border-[#2E3137] bg-black p-3.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#9BA3AF]">Deposit</span>
              <span className="text-[#9BA3AF]">Balance: <span className="text-white">0.00</span></span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[24px] text-[#45484D]" style={{ fontWeight: 500, fontFamily: "'Source Sans Pro', sans-serif" }}>0.00</span>
              <div className="flex items-center gap-1.5 rounded-full border border-[#2E3137] px-2.5 py-1">
                <img src={imgUsdc} alt="USDC" className="h-4 w-4 rounded-full" />
                <span className="text-[11px] text-white" style={{ fontWeight: 500 }}>USDC</span>
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="#9BA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[9px]">
              <span className="text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$0.00</span>
              <div className="flex gap-1">
                {["25%", "50%", "75%", "100%"].map(pct => (
                  <span key={pct} className="rounded border border-[#45484D] px-1.5 py-0.5 text-[8px] text-[#9BA3AF]">{pct}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Settings row */}
          <div className="mt-3 flex items-center justify-between text-[10px] text-[#9BA3AF]">
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="#9BA3AF" strokeWidth="1.2"/><path d="M12.5 9.5a1.3 1.3 0 00.26 1.43l.04.04a1.58 1.58 0 11-2.23 2.23l-.04-.04a1.3 1.3 0 00-2.23.92V14.5a1.58 1.58 0 11-3.16 0v-.08A1.3 1.3 0 004 13.5" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              No slippage
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#9BA3AF" strokeWidth="1"/><path d="M8 5v3l2 1" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round"/></svg>
              Direct Deposit
            </div>
          </div>

          {/* Net Deposit box */}
          <div className="mt-3 rounded-xl border border-[#2E3137] bg-black p-3">
            <div className="text-[9px] text-[#9BA3AF]">Net Deposit</div>
            <div className="mt-1 text-[16px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>0.00 <span className="text-[#9BA3AF]" style={{ fontWeight: 400 }}>USDC</span></div>
            <div className="mt-0.5 text-[10px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$0.00</div>
          </div>

          {/* Info links */}
          <div className="mt-3 flex flex-col gap-1 text-[10px] text-[#9BA3AF]">
            <div className="flex items-center gap-1">
              Withdraw scheduled (12 hours)
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9BA3AF" strokeWidth="1"/><path d="M7 9.5V7M7 4.5h.005" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round"/></svg>
            </div>
            <div className="flex items-center gap-1">
              Learn about fees
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M5 2h7v7M4 10L12 2" stroke="#9BA3AF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>

          {/* Deposit button */}
          <button className="mt-3 w-full rounded-full bg-gradient-to-r from-[#8429ff] to-[#6C00FF] py-2.5 text-[13px] text-white" style={{ fontWeight: 600 }}>
            Deposit
          </button>

          {/* My Deposit card */}
          <div className="mt-4 rounded-xl border border-[#2E3137] bg-[#161A20] p-3.5">
            <div className="text-[9px] text-[#9BA3AF]">My Deposit</div>
            <div className="mt-1 text-[18px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>54,215.34 <span className="text-[13px] text-[#9BA3AF]" style={{ fontWeight: 400 }}>USDC</span></div>
            <div className="mt-0.5 text-[10px] text-[#9BA3AF]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>$54,202.12</div>
          </div>

          {/* My Points card */}
          <div className="mt-2.5 rounded-xl border border-[#2E3137] bg-[#161A20] p-3.5">
            <div className="text-[9px] text-[#9BA3AF]">My Points</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[22px] text-white" style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>543</span>
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#6C00FF] to-[#FF008B]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ── */
export function Hero() {
  const { isDark } = useTheme();
  const bg = isDark ? "#090E14" : "#F5F5FA";

  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-16 pb-8 md:pt-24 md:pb-12">

            <div className="relative z-10 mx-auto max-w-[1200px] px-6">
              <div className="sm:mx-auto lg:mr-auto">
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                >
                  {/* Headline */}
                  <h1
                    className={cn("mt-8 md:mt-18 max-w-3xl text-center md:text-left", isDark ? "text-white" : "text-[#000000]")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(30px, 5vw, 60px)",
                      lineHeight: "clamp(45px, 6vw, 75px)",
                    }}
                  >
                    Vault infrastructure for{" "}
                    <span className={isDark ? "text-[#8429FF]" : "text-[#8429FF]"}>institutional-grade</span> yield.
                  </h1>

                  {/* Description */}
                  <p className={cn("mt-6 max-w-2xl text-pretty text-base text-center sm:mt-8 sm:text-lg md:text-left", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
                    Deploy and manage onchain vault strategies or earn through professionally curated vaults. Modular infrastructure across Aave, Morpho, SparkLend, Euler, and more.
                  </p>

                  {/* CTAs + Stats Row */}
                  <div className="mt-12 flex flex-col items-center gap-6 md:items-start lg:flex-row lg:items-center lg:gap-8">
                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                      <a
                        href="https://app.ipor.io/fusion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-3 rounded-full border px-7 py-3 text-sm tracking-wide text-white",
                          isDark
                            ? "border-[#8429FF]"
                            : "border-[#8429FF]"
                        )}
                        style={{
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          background: "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
                          transition: "opacity 300ms ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.7";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                      >
                        <span className="text-nowrap">Launch App</span>
                        <ArrowUpRight className="size-4" />
                      </a>
                      <a
                        href="https://docs.ipor.io/build-on-fusion/developer-guide/quick-start-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm tracking-wide transition-colors duration-300",
                          isDark
                            ? "border-[#45484D] text-[#9BA3AF] hover:border-[#9BA3AF]/40 hover:bg-white/5 hover:text-white"
                            : "border-[#9BA3AF] text-black hover:bg-[#EFEFEF]"
                        )}
                        style={{ fontWeight: 400, letterSpacing: '0.04em' }}
                      >
                        <span className="text-nowrap">Start Building</span>
                      </a>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-6 md:justify-start">
                      <div className={cn("hidden h-10 w-px lg:block", isDark ? "bg-white/10" : "bg-black/10")} />
                      <div className="flex flex-col items-center gap-0.5 md:items-start">
                        <div className={cn("text-[10px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
                          TVM
                        </div>
                        <div className={cn("text-xl tracking-tight", isDark ? "text-white" : "text-[#000000]")} style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>
                          $250M
                        </div>
                      </div>
                      <div className={cn("h-8 w-px", isDark ? "bg-white/10" : "bg-black/10")} />
                      <div className="flex flex-col items-center gap-0.5 md:items-start">
                        <div className={cn("text-[10px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
                          Vaults
                        </div>
                        <div className={cn("text-xl tracking-tight", isDark ? "text-white" : "text-[#000000]")} style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>
                          103
                        </div>
                      </div>
                      <div className={cn("h-8 w-px", isDark ? "bg-white/10" : "bg-black/10")} />
                      <div className="flex flex-col items-center gap-0.5 md:items-start">
                        <div className={cn("text-[10px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
                          Volume processed
                        </div>
                        <div className={cn("text-xl tracking-tight", isDark ? "text-white" : "text-[#000000]")} style={{ fontWeight: 600, fontFamily: "'Source Sans Pro', sans-serif" }}>
                          $10B+
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trusted by logos */}
                  <div className="mt-10 flex flex-col items-center gap-4 md:items-start">
                    <span className={cn("text-xs", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>Trusted by</span>

                    {/* Desktop: normal row */}
                    <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:justify-start">
                      <img src={logoTesseract} alt="" className={cn("h-6", isDark ? "opacity-60 grayscale brightness-[1.5] [filter:grayscale(1)_brightness(1.5)_sepia(0)_hue-rotate(0deg)]" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoFirst} alt="" className={cn("h-[19px]", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoThird} alt="" className={cn("h-3", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoTauLabs} alt="" className={cn("h-6", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoK3Capital} alt="" className={cn("h-6", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoNavigator} alt="" className={cn("h-6", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                      <img src={logoLlamaRisk} alt="" className={cn("h-[20px]", isDark ? "opacity-60" : "opacity-50 brightness-0")} style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined} />
                    </div>

                    {/* Mobile: infinite scrolling marquee */}
                    <div className="sm:hidden relative w-screen -ml-6 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                      <div className="flex w-max animate-[marquee_20s_linear_infinite] items-center gap-10">
                        {[logoTesseract, logoFirst, logoThird, logoTauLabs, logoK3Capital, logoNavigator, logoLlamaRisk, logoTesseract, logoFirst, logoThird, logoTauLabs, logoK3Capital, logoNavigator, logoLlamaRisk].map((logo, i) => (
                          <img
                            key={i}
                            src={logo}
                            alt=""
                            className={cn(
                              "h-5 shrink-0",
                              i === 2 || i === 9 ? "h-3" : "",
                              isDark ? "opacity-60" : "opacity-50 brightness-0"
                            )}
                            style={isDark ? { filter: "grayscale(1) brightness(0) invert(0.65)" } : undefined}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            {/* App mock moved to TransparencyFeatures section */}
          </div>
        </section>

        {/* ── Logo / Trust bar ── */}
        {/* removed protocol text grid */}
      </main>
    </>
  );
}