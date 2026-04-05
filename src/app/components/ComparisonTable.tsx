import { Atom, Check, X } from "lucide-react";
import {
  ShieldPulseIcon,
  TransparencyEyeIcon,
  SpeedGaugeIcon,
  FuseModuleIcon,
  LockSecureIcon,
  NetworkNodesIcon,
  BuilderCogIcon,
  VaultLayersIcon,
  EnergyBoltIcon,
  ChartPulseIcon,
} from "./ui/fusion-icons";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import fusionLogoDarkPng from "figma:asset/7431d75d5eb1f7dad9a8e4c69ac6b39fb194e6f1.png";
import fusionLogoLight from "figma:asset/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";

const rows: {
  feature: string;
  icon: React.ReactNode;
  fusion: string;
  merkle: string;
}[] = [
  {
    feature: "Strategy gating",
    icon: <ShieldPulseIcon size={20} />,
    fusion: "Smart contract enforced, transparent onchain",
    merkle: "Proof enforced, opaque and sidechain/offchain",
  },
  {
    feature: "Trust assumptions",
    icon: <LockSecureIcon size={20} />,
    fusion: "Trust minimized",
    merkle: "Trust minimized but opaque",
  },
  {
    feature: "Onchain transparency",
    icon: <TransparencyEyeIcon size={20} />,
    fusion: "Assets, actions, markets",
    merkle: "Execution result only",
  },
  {
    feature: "Operations: Execution",
    icon: <FuseModuleIcon size={20} />,
    fusion: "Flexible, adaptable",
    merkle: "Rigid, Proof must be updated for any change",
  },
  {
    feature: "Operations: Speed",
    icon: <SpeedGaugeIcon size={20} />,
    fusion: "On the fly",
    merkle: "Governance latency",
  },
  {
    feature: "Composability",
    icon: <VaultLayersIcon size={20} />,
    fusion: "Administrative, onchain configured",
    merkle: "Administrative heavy, prepare proof and verify",
  },
  {
    feature: "Technical expertise",
    icon: <BuilderCogIcon size={20} />,
    fusion: "No smart contract experience required for strategy iteration",
    merkle:
      "Each path requires a merkle proof, explosion of paths means operational bloat",
  },
  {
    feature: "IP Protection",
    icon: <EnergyBoltIcon size={20} />,
    fusion: "IP can be fully protected within bespoke execution logic",
    merkle:
      "IP is either fully opaque to all parties, or fully disclosed once proof is exposed",
  },
  {
    feature: "Risk management",
    icon: <ChartPulseIcon size={20} />,
    fusion: "Adaptable and agile",
    merkle:
      "Rigid and time consuming requiring proof updates (admin coordination)",
  },
  {
    feature: "Security",
    icon: <NetworkNodesIcon size={20} />,
    fusion: "Fuses are modular and reusable pieces, secure and fast to market",
    merkle: "Each path requires a new risk surface assessment",
  },
];

export function ComparisonTable() {
  const { isDark } = useTheme();
  const border = isDark ? "border-[#2E3137]" : "border-[#E5E5E5]";
  const headerBg = isDark ? "bg-[#161A20]" : "bg-[#F5F5F7]";

  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      {/* Purple glow on sides */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[400px] rounded-full bg-[#8429FF]/[0.07] blur-[120px]" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[500px] w-[400px] rounded-full bg-[#8429FF]/[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <p
            className={cn("mb-4 text-[13px] uppercase", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            Better by Design
          </p>
          <h2
            className={cn("mb-5 text-balance", isDark ? "text-white" : "text-[#000000]")}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(25px, 5vw, 45px)",
              lineHeight: "clamp(38px, 5vw, 60px)",
              fontWeight: 500,
            }}
          >
            How Fusion Vaults <span className={cn("italic", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}>outperform</span>{" "}
            the alternative.
          </h2>
          <p
            className={cn("mx-auto max-w-lg text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.7 }}
          >
            Merkle proof vaults were a first step. Fusion is the leap forward:
            transparent, composable, and built for speed.
          </p>
        </div>

        {/* Table — desktop */}
        <div className={cn("hidden md:block rounded-2xl border overflow-hidden", border, isDark ? "bg-[#161A20]" : "bg-white")}>
          {/* Header row */}
          <div className={cn("grid grid-cols-[240px_1fr_1fr]", `border-b ${border}`)}>
            <div className={cn("p-5", headerBg)} />
            {/* Fusion header */}
            <div className={cn("flex items-center justify-center gap-3 p-5 border-l", headerBg, border)}>
              <img
                src={isDark ? fusionLogoDarkPng : fusionLogoLight}
                alt="Fusion by IPOR"
                className="h-7 w-auto object-contain"
              />
            </div>
            {/* Merkle header */}
            <div className={cn("flex items-center justify-center p-5 border-l", headerBg, border)}>
              <span
                className={cn("text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                Merkle Proof Vaults
              </span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={cn(
                "grid grid-cols-[240px_1fr_1fr] transition-colors",
                i < rows.length - 1 && `border-b ${border}`,
                isDark ? "hover:bg-[#1A1F26]" : "hover:bg-[#F9F9FB]"
              )}
            >
              {/* Feature name with icon */}
              <div className="flex items-center gap-3 p-5">
                <div className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-[0.75px]",
                  isDark ? "border-[#2E3137] bg-[#8429FF]/20 text-[#8429FF]" : "border-[#E5E5E5] bg-[#F3F0FF] text-[#8429FF]"
                )}>{row.icon}</div>
                <span
                  className={cn("text-[13px]", isDark ? "text-white" : "text-[#000000]")}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {row.feature}
                </span>
              </div>
              {/* Fusion value */}
              <div className={cn("flex items-center gap-3 p-5 border-l", border, isDark ? "bg-[#8429FF]/[0.03]" : "bg-[#8429FF]/[0.03]")}>
                <Check className={cn("h-4 w-4 shrink-0", isDark ? "text-[#8429FF]" : "text-[#8429FF]")} />
                <span
                  className={cn("text-[13px]", isDark ? "text-[#D4D4D8]" : "text-[#374151]")}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {row.fusion}
                </span>
              </div>
              {/* Merkle value */}
              <div className={cn("flex items-center gap-3 p-5 border-l", border)}>
                <X className={cn("h-4 w-4 shrink-0", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} />
                <span
                  className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {row.merkle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table — mobile (card layout) */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.feature}
              className={cn("rounded-xl border overflow-hidden", border, isDark ? "bg-[#161A20]" : "bg-white")}
            >
              {/* Feature label with icon */}
              <div className={cn("flex items-center gap-3 px-5 py-3 border-b", headerBg, border)}>
                <div className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-[0.75px]",
                  isDark ? "border-[#2E3137] bg-[#8429FF]/20 text-[#8429FF]" : "border-[#E5E5E5] bg-[#F3F0FF] text-[#8429FF]"
                )}>{row.icon}</div>
                <span
                  className={cn("text-[13px]", isDark ? "text-white" : "text-[#000000]")}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {row.feature}
                </span>
              </div>
              {/* Fusion */}
              <div className={cn("flex items-start gap-3 px-5 py-4 border-b", border, isDark ? "bg-[#8429FF]/[0.03]" : "bg-[#8429FF]/[0.03]")}>
                <div className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", isDark ? "bg-[#8429FF]/20" : "bg-[#8429FF]/20")}>
                  <Check className={cn("h-3 w-3", isDark ? "text-[#8429FF]" : "text-[#8429FF]")} />
                </div>
                <div>
                  <span
                    className={cn("mb-1 block text-[11px] uppercase tracking-wider", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Fusion
                  </span>
                  <span
                    className={cn("text-[13px]", isDark ? "text-[#D4D4D8]" : "text-[#374151]")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.fusion}
                  </span>
                </div>
              </div>
              {/* Merkle */}
              <div className="flex items-start gap-3 px-5 py-4">
                <div className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", isDark ? "bg-[#2E3137]" : "bg-[#E5E7EB]")}>
                  <X className={cn("h-3 w-3", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} />
                </div>
                <div>
                  <span
                    className={cn("mb-1 block text-[11px] uppercase tracking-wider", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                  >
                    Merkle Proof
                  </span>
                  <span
                    className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.merkle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}