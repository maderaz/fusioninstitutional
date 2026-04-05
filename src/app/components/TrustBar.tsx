import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { ArrowUpRight } from "lucide-react";

import logoAave from "@/assets/f2fc5301bfcaff717b0aee084068e1db50944de6.png";
import logoMorpho from "@/assets/5abd3a0d07e4eb4ace015cd76f2b7f7357384721.png";
import logoUniswap from "@/assets/347e59f899e9dc45af6f2abaae6ce391c90035bb.png";
import logoCompound from "@/assets/cda8f2f7ff473512091beef88e2e41c652f763df.png";
import logoPendle from "@/assets/d71d24730cbfa537a4357336d19da1db84099ba1.png";
import logoExtra from "@/assets/6f16f1ad63b9e471be03efda4ed95dd7cf5b24f4.png";

const topRow = [
  { name: "Aave V3", logo: logoAave, scale: 0.8 },
  { name: "Morpho", logo: logoMorpho, scale: 0.9 },
  { name: "Uniswap", logo: logoUniswap, scale: 0.99 },
];

const bottomRow = [
  { name: "Compound", logo: logoCompound, scale: 1 },
  { name: "Pendle", logo: logoPendle, scale: 1 },
  { name: "More Protocols", logo: logoExtra, scale: 1 },
];

export function TrustBar() {
  const { isDark } = useTheme();

  const cardClass = cn(
    "group relative flex items-center justify-center rounded-xl border px-6 py-8 transition-all duration-300",
    isDark
      ? "border-[#2E3137] bg-[#161A20] hover:border-[#8429FF]/30 hover:bg-[#1A1F26]"
      : "border-[#E5E5E5] bg-white hover:border-[#8429FF]/30 hover:bg-[#F0F0F5]"
  );

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2
            className={cn("mb-5 text-balance", isDark ? "text-white" : "text-[#000000]")}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(25px, 5vw, 45px)",
              lineHeight: "clamp(38px, 5vw, 60px)",
              fontWeight: 500,
            }}
          >
            Plug & Play
          </h2>
          <p
            className={cn("mx-auto max-w-md text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.6 }}
          >
            Connect to leading onchain liquidity protocols through composable fuse modules.
          </p>
        </div>

        {/* Grid: 3 columns, 2 rows */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {[...topRow, ...bottomRow].map((p) => (
            <a
              key={p.name}
              href="https://github.com/IPOR-Labs/ipor-fusion/tree/main/contracts/fuses"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {/* Arrow top-right */}
              <ArrowUpRight
                className={cn(
                  "absolute top-3 right-3 size-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  isDark ? "text-[#8429FF]" : "text-[#8429FF]"
                )}
              />
              <img
                src={p.logo}
                alt={p.name}
                className={cn(
                  "w-auto object-contain transition-all duration-300",
                  isDark
                    ? "brightness-0 invert opacity-60 group-hover:opacity-90"
                    : "brightness-0 opacity-60 group-hover:opacity-90"
                )}
                style={{ height: `${28 * p.scale}px` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}