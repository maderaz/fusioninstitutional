import FusionFlow from "./ui/fusion-flow";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import iconFusion from "@/assets/e350fb54d0e73d25185031ab80ff2e8c71682776.png";

const steps = [
  {
    icon: "vault",
    title: "Fusion Vaults",
    desc: "ERC-4626 compliant, immutable vaults that hold your assets. Each vault is fully isolated with siloed risk and no cross-contamination. Deposit once, access every integrated market.",
  },
  {
    icon: "fuse",
    title: "Fuse Modules",
    desc: "Composable, non-upgradable smart contract connectors to external protocols. Supply, borrow, swap, loop: each action is a fuse. Snap new ones in, never touch the vault.",
  },
  {
    icon: "alpha",
    title: "Alpha Execution",
    desc: "Off-chain strategy engines execute onchain through governance-approved parameters. Automated rebalancing, carry trades, looping, and arbitrage, all intelligence-driven and risk-bounded.",
  },
];

export function HowItWorks() {
  const { isDark } = useTheme();

  return (
    <section id="how-it-works" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Centered header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <p
            className={cn(
              "mb-4 text-[13px] uppercase",
              isDark ? "text-[#8429FF]" : "text-[#8429FF]"
            )}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            Architecture
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
            One vault. Every strategy.<br />
            <span className={isDark ? "text-[#8429FF]" : "text-[#8429FF]"}>Full</span> control.
          </h2>
          <p className={cn("max-w-2xl text-pretty text-base sm:text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
            Fusion's modular architecture separates execution from custody.
            Deploy capital into Fusion Plasma Vaults, connect strategy logic through
            composable fuses, and let Alpha engines optimize across them, all
            in a plug & play fashion, fully customizable per strategy needs.
          </p>
        </div>

        {/* Centered flow visual */}
        <div className="mb-20 flex justify-center">
          <FusionFlow className="w-full max-w-[540px]" />
        </div>

        {/* 3-column steps grid */}
        <div className={cn(
          "grid grid-cols-1 overflow-hidden rounded-xl border md:grid-cols-3",
          isDark ? "border-[#2E3137]" : "border-[#E5E5E5]"
        )}>
          {steps.map((step, i) => (
            <div
              key={step.icon}
              className={cn(
                "p-8",
                i < steps.length - 1 && (isDark
                  ? "border-b border-[#2E3137] md:border-b-0 md:border-r"
                  : "border-b border-[#E5E5E5] md:border-b-0 md:border-r")
              )}
            >
              <div className={cn(
                "mb-4 flex h-10 w-10 items-center justify-center rounded-lg border-[0.75px]",
                isDark ? "border-[#2E3137] bg-[#8429FF]/15" : "border-[#E5E5E5] bg-[#F3F0FF]"
              )}>
                <StepIcon type={step.icon} color={isDark ? "#8429FF" : "#8429FF"} />
              </div>
              <h3
                className={cn("mb-3 text-[18px]", isDark ? "text-white" : "text-[#000000]")}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                {step.title}
              </h3>
              <p
                className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.7 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Step Icons ── */
function StepIcon({ type, color }: { type: string; color: string }) {
  const props = { 
    width: 20, 
    height: 20, 
    viewBox: "0 0 24 24", 
    fill: "none", 
    stroke: color, 
    strokeWidth: 1.25, 
    strokeLinecap: "round" as const, 
    strokeLinejoin: "round" as const 
  };
  
  switch (type) {
    case "vault":
      // Cube/vault icon
      return (
        <svg {...props}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "fuse":
      // Plug/connection icon
      return (
        <svg {...props}>
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "alpha":
      // Layers/stack icon
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    default:
      return null;
  }
}