import { ArrowRight } from "lucide-react";
import {
  InstitutionIcon,
  BuilderCogIcon,
  LiquidityDropIcon,
  PlugConnectIcon,
} from "./ui/fusion-icons";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";

interface SolutionCard {
  icon: React.ReactNode;
  title: string;
  body: string;
  features: string[];
  emphasized?: boolean;
}

const cards: SolutionCard[] = [
  {
    icon: <InstitutionIcon size={24} />,
    title: "Institutions & Fund Managers",
    body: "Sovereign vault infrastructure for onchain asset management. Deploy capital with institutional-grade security, full transparency, and customizable risk parameters. Your vault, your rules, your alpha.",
    features: [
      "Privacy-preserving strategy execution",
      "Configurable fee structures & governance",
      "Python SDK, no Solidity required",
      "White-label ready for distribution partners",
    ],
    emphasized: true,
  },
  {
    icon: <BuilderCogIcon size={24} />,
    title: "Builders & Curators",
    body: "Create automated onchain vaults without writing a single smart contract. Pick your fuses, set your parameters, and launch. Earn curator fees from the strategies you design.",
    features: [
      "Plug-and-play fuse library",
      "One-click vault deployment via Factory",
      "Composable across 20+ protocols",
      "Earn fees as an Atomist",
    ],
  },
  {
    icon: <LiquidityDropIcon size={24} />,
    title: "Liquidity Providers",
    body: "Access professionally curated, auto-optimized yield strategies with a single deposit. From lending optimization to leveraged looping, risk-adjusted to your preference.",
    features: [
      "One-click deposit into curated strategies",
      "Automated rebalancing & compounding",
      "Siloed risk, no socialized losses",
      "Instant liquidity, no lockups",
    ],
  },
  {
    icon: <PlugConnectIcon size={24} />,
    title: "Protocols & Distributors",
    body: "Embed Fusion vaults as plug-and-play yield products. Wallets, exchanges, and fintechs can offer 'Earn' features powered by Fusion infrastructure without building from scratch.",
    features: [
      "Embed vaults into any interface",
      "White-label for wallets & CEXs",
      "Referral system built-in",
      "Invisible infrastructure, visible yield",
    ],
  },
];

export function Solutions() {
  const { isDark } = useTheme();

  return (
    <section id="solutions" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-16 max-w-[700px]">
          <p
            className={cn("mb-4 text-[13px] uppercase", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            Solutions
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
            Built for every participant in the <span className={isDark ? "text-[#8429FF]" : "text-[#8429FF]"}>vault</span> stack.
          </h2>
          <p className={cn("text-pretty text-base sm:text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
            Whether you're allocating treasury capital or building the next yield product, Fusion is the infrastructure layer underneath.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={cn(
                "group relative rounded-2xl border p-8 transition-all duration-300",
                isDark
                  ? cn("bg-[#161A20] border-[#2E3137]", "hover:border-[#8429FF]")
                  : cn("bg-white border-[#E5E5E5]", "hover:border-[#8429FF]")
              )}
            >
              {/* Hover glow */}
              <div className={cn("pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity group-hover:opacity-[0.08]", isDark ? "bg-[#8429FF]" : "bg-[#8429FF]")} />

              <div className="relative z-10">
                <div className={cn(
                  "mb-5 flex h-10 w-10 items-center justify-center rounded-lg border-[0.75px]",
                  isDark ? "border-[#2E3137] bg-[#8429FF]/15 text-[#8429FF]" : "border-[#E5E5E5] bg-[#F3F0FF] text-[#8429FF]"
                )}>
                  {card.icon}
                </div>
                <h3
                  className={cn("mb-3 text-[18px]", isDark ? "text-white" : "text-[#000000]")}
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  {card.title}
                </h3>
                <p
                  className={cn("mb-5 text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                  style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.7 }}
                >
                  {card.body}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {card.features.map((f) => (
                    <li
                      key={f}
                      className={cn("flex items-center gap-2 text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <ArrowRight className={cn("h-3.5 w-3.5 shrink-0", isDark ? "text-[#8429FF]" : "text-[#8429FF]")} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}