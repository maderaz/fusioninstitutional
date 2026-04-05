import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import {
  AnimatedBarChart,
  AnimatedPieChart,
  AnimatedLayers,
  AnimatedActivity,
  AnimatedEye,
  AnimatedShield,
} from "./ui/transparency-icons";
import VaultDetails from "../../imports/VaultDetails-50-476";
import CreditMarketsBreakdown from "../../imports/Group27414";

const features = [
  { Icon: AnimatedBarChart, title: "Real-Time Performance Reports" },
  { Icon: AnimatedPieChart, title: "Historical Allocation Breakdown" },
  { Icon: AnimatedLayers, title: "Protocol-Level Credit Markets" },
  { Icon: AnimatedActivity, title: "Live Yield Metrics", mobileTitle: <>Live<br/>Yield Metrics</> },
  { Icon: AnimatedEye, title: "Transaction-Level Auditability" },
  { Icon: AnimatedShield, title: "Cost & Slippage Transparency" },
];

// Layout constants (in px at 1440-wide scale)
const FRAME_W = 1440;
const FRAME_H = 1456;
// Credit Markets heading starts at ~69.51% of frame height
const CM_TOP = Math.round(0.65 * FRAME_H); // ≈ 946px — above original CM header
const CM_GAP = 20; // spacing between vault clip and credit markets
// Credit Markets container
const CM_LEFT = 65;
const CM_WIDTH = 852;
// The imported Figma Credit Markets component native dimensions
const CM_NATIVE_W = 852;
const CM_SCALE = CM_WIDTH / CM_NATIVE_W; // 1.0
const CM_NATIVE_H = 521;
const CM_SCALED_H = Math.round(CM_NATIVE_H * CM_SCALE); // 521px
// Total container height = top of CM area + scaled CM height + padding
const TOTAL_H = CM_TOP + CM_GAP + CM_SCALED_H + 24;

export function TransparencyFeatures() {
  const { isDark } = useTheme();

  return (
    <section
      id="transparency"
      className="relative py-20 md:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* 50/50 layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          {/* Left: app mock */}
          <div className="relative w-full lg:w-1/2 flex flex-col">
            <div
              className={cn(
                "flex-1 overflow-hidden rounded-2xl border",
                isDark
                  ? "border-[#2E3137] bg-[#090E14]"
                  : "border-[#E5E5E5] bg-[#090E14]"
              )}
            >
              {/* Scale the composite frame to fit the container width */}
              <div
                className="relative w-full"
                style={{ paddingBottom: `${(TOTAL_H / FRAME_W) * 100}%` }}
              >
                <div
                  className="absolute inset-0 origin-top-left"
                  style={{
                    width: FRAME_W,
                    height: TOTAL_H,
                    transform: "scale(var(--mock-scale))",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const resize = () => {
                      const parentW = el.parentElement?.clientWidth ?? 600;
                      el.style.setProperty(
                        "--mock-scale",
                        String(parentW / FRAME_W)
                      );
                    };
                    resize();
                    const ro = new ResizeObserver(resize);
                    ro.observe(el.parentElement!);
                    (el as any).__ro = ro;
                  }}
                >
                  {/* Original Figma vault frame (clipped to just above Credit Markets) */}
                  <div
                    className="absolute overflow-hidden"
                    style={{ width: FRAME_W, height: CM_TOP }}
                  >
                    <div style={{ width: FRAME_W, height: FRAME_H }}>
                      <VaultDetails />
                    </div>
                  </div>

                  {/* Dark bg for the Credit Markets area below the clip */}
                  <div
                    className="absolute"
                    style={{
                      top: CM_TOP,
                      left: 0,
                      width: FRAME_W,
                      height: TOTAL_H - CM_TOP,
                      background: "#090E14",
                    }}
                  />

                  {/* Hand-built Credit Markets section */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      top: CM_TOP + CM_GAP,
                      left: CM_LEFT,
                      width: CM_WIDTH,
                      height: CM_SCALED_H,
                    }}
                  >
                    <div
                      className="origin-top-left"
                      style={{
                        width: CM_NATIVE_W,
                        height: CM_NATIVE_H,
                        transform: `scale(${CM_SCALE})`,
                      }}
                    >
                      <CreditMarketsBreakdown />
                    </div>
                  </div>

                  {/* Keep the right-side deposit panel visible by re-rendering that portion */}
                  <div
                    className="absolute overflow-hidden"
                    style={{
                      top: CM_TOP,
                      left: CM_LEFT + CM_WIDTH,
                      width: FRAME_W - CM_LEFT - CM_WIDTH,
                      height: TOTAL_H - CM_TOP,
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        top: -CM_TOP,
                        left: -(CM_LEFT + CM_WIDTH),
                        width: FRAME_W,
                        height: FRAME_H,
                      }}
                    >
                      <VaultDetails />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subtle glow behind mock */}
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-30 blur-3xl"
              style={{
                background: isDark
                  ? "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(132,41,255,0.08) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Right: header + features list */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Section header */}
            <div className="mb-8">
              <div
                className={cn("mb-4 text-[13px] uppercase", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
              >
                Full Transparency
              </div>
              <h2
                className={cn(
                  "mb-4 tracking-tight",
                  isDark ? "text-white" : "text-[#000000]"
                )}
                style={{
                  fontWeight: 500,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(25px, 5vw, 45px)",
                  lineHeight: "clamp(38px, 5vw, 60px)",
                }}
              >
                See everything.{" "}
                <span className="text-[#8429FF]">
                  Trust nothing blindly.
                </span>
              </h2>
              <p
                className={cn("text-base", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                style={{ lineHeight: 1.7 }}
              >
                Every vault in Fusion exposes its full mechanics: allocations, performance, costs, and onchain activity. You always know exactly what's happening with your capital.
              </p>
            </div>

            {/* Feature boxes — icon + title only */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={cn(
                    "group flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center transition-all duration-300 sm:flex-row sm:text-left sm:px-4 sm:py-3.5 sm:gap-3 overflow-hidden",
                    isDark
                      ? "border-[#2E3137] bg-[#161A20] hover:border-[#8429FF]/30 hover:bg-[#161A20]"
                      : "border-[#E5E5E5] bg-white hover:border-[#8429FF]/30 hover:shadow-sm"
                  )}
                >
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-lg p-2",
                      isDark ? "bg-[#8429FF]/20 border border-[#2E3137]" : "bg-[#8429FF]/10"
                    )}
                  >
                    <f.Icon />
                  </div>
                  <h3
                    className={cn(
                      "text-[12px] sm:text-[13px] min-w-0 break-words",
                      isDark ? "text-white" : "text-[#000000]"
                    )}
                    style={{ fontWeight: 500 }}
                  >
                    {f.mobileTitle ? (
                      <>
                        <span className="sm:hidden">{f.mobileTitle}</span>
                        <span className="hidden sm:inline">{f.title}</span>
                      </>
                    ) : f.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Legal disclaimer */}
            <p
              className={cn(
                "mt-4 text-[11px] italic",
                isDark ? "text-[#9BA3AF]/60" : "text-[#70747A]/60"
              )}
            >
              *Product interface shown for illustrative purposes only. Displayed values are simulated and do not represent actual portfolio performance, balances, or guaranteed returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}