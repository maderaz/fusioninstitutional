import { ArrowUpRight } from "lucide-react";
import { cn } from "./ui/utils";
import { useTheme } from "./ui/theme-context";

export function FinalCTA() {
  const { isDark } = useTheme();

  return (
    <section className="relative py-20 md:py-40">
      {/* Purple glow */}
      <div className={cn("pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full opacity-[0.10] blur-[120px]", isDark ? "bg-[#8429FF]" : "bg-[#8429FF]")} />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <h2 className={cn("mb-6 text-balance", isDark ? "text-white" : "text-[#000000]")}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(25px, 5vw, 45px)",
            lineHeight: "clamp(38px, 5vw, 60px)",
          }}
        >
          The <span className={isDark ? "text-[#8429FF]" : "text-[#8429FF]"}>Vault</span> layer is ready.
        </h2>
        <p className={cn("mx-auto mb-10 max-w-[560px] text-pretty text-base sm:text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
          Deploy your first vault, deposit into a curated strategy, or embed Fusion into your product.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://app.ipor.io/fusion"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[16px] tracking-wide text-white",
              isDark
                ? "border-[#8429FF]"
                : "border-[#8429FF]"
            )}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.04em',
              background: isDark
                ? "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)"
                : "linear-gradient(90deg, #8429FF 0%, #6C00FF 100%)",
              transition: "opacity 300ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            <span>Launch App</span>
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://docs.ipor.io/build-on-fusion/developer-guide/quick-start-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-7 py-3 text-[16px] tracking-wide transition-colors duration-300",
              isDark
                ? "border-[#45484D] text-[#9BA3AF] hover:border-[#9BA3AF]/40 hover:bg-white/5 hover:text-white"
                : "border-[#9BA3AF] text-black hover:bg-[#EFEFEF]"
            )}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, letterSpacing: '0.04em' }}
          >
            <span>Start Building</span>
          </a>
        </div>
      </div>
    </section>
  );
}