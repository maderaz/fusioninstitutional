import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import logoTesseract from "figma:asset/fd498d5ef6a552323a756611801a96fe869f9ea1.png";
import logoTauLabs from "figma:asset/81ccb8b1566153507476e23d831196aa8f65e806.png";
import logoReservoir from "figma:asset/5825e1e8d3ef806ec41edbf7133c10d197490b21.png";
import avatarJames from "figma:asset/ca3146c1c32b55a909080989e7aafdcf61056c47.png";
import avatarVlad from "figma:asset/a328cf41a25f44e21a01ae9247972989a67cc5ee.png";
import avatarNick from "figma:asset/c002c878caf2b41f608a354bd2e30dd223e5d165.png";

interface Testimonial {
  quote: string;
  name: "James Harris" | "Vlad Totia" | "Nick Garcia";
  role: string;
  company: string;
  logo: string;
  avatar: string;
  badge: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with the IPOR Fusion team has been an exceptional experience. They bring a deep level of technical expertise and market understanding, but just as importantly, they are highly collaborative and really great to work with. Throughout our vault build, they have partnered closely with us, showing real commitment to getting the details right and helping us solve complex challenges as they arise.\n\nWhat stands out is their ability to combine strong infrastructure with a practical, delivery-focused mindset. The result is a solution that is not only truly institutional-grade, but also at the forefront of where the market is heading. They have been a key partner in helping us bring our vault vision to life, and couldn't recommend them more highly.",
    name: "James Harris",
    role: "CEO",
    company: "Tesseract",
    logo: logoTesseract,
    avatar: avatarJames,
    badge: "$500M+ AUM, MiCA-Authorized",
  },
  {
    quote:
      "IPOR Fusion drastically reduces our operational overhead, allowing us to launch better vaults, faster. Their team is always responsive to address any technical needs and proactive in helping us optimize our strategies.",
    name: "Vlad Totia",
    role: "Founder",
    company: "TAU Labs",
    logo: logoTauLabs,
    avatar: avatarVlad,
    badge: "$100M+ TVM",
  },
  {
    quote:
      "Reservoir has leveraged IPOR Fusion vaults to deliver high-efficiency, leveraged exposure to our yield-bearing stablecoin (wsrUSD) optimizing for liquidity and high returns. Reservoir's BTC, ETH, and USDC denominated yield vaults offer industry leading risk adjusted yields through automated onchain risk management.\n\nIPOR Fusion is robust, user-friendly, and seamless for onchain asset management—making it effortless for partners like us to scale sophisticated strategies with strong risk controls. The IPOR Labs team has been exceptional to work with: responsive, innovative, and deeply aligned on building composable DeFi infrastructure.",
    name: "Nick Garcia",
    role: "Founder",
    company: "Reservoir",
    logo: logoReservoir,
    avatar: avatarNick,
    badge: "$100M+ TVM",
  },
];

/* ── Quote Icon ── */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M6 18.5C6 14.36 8.69 10.73 12.5 9.5L13.26 11.35C11.14 12.24 9.75 14.05 9.42 16H12.5C13.33 16 14 16.67 14 17.5V23.5C14 24.33 13.33 25 12.5 25H7.5C6.67 25 6 24.33 6 23.5V18.5ZM18 18.5C18 14.36 20.69 10.73 24.5 9.5L25.26 11.35C23.14 12.24 21.75 14.05 21.42 16H24.5C25.33 16 26 16.67 26 17.5V23.5C26 24.33 25.33 25 24.5 25H19.5C18.67 25 18 24.33 18 23.5V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Testimonials() {
  const { isDark } = useTheme();

  return (
    <section
      className={cn("relative py-10 md:py-28", isDark ? "bg-[#000000]" : "bg-[#E9E9F3]")}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <p
            className={cn(
              "mb-4 text-[13px] uppercase",
              isDark ? "text-[#8429FF]" : "text-[#8429FF]"
            )}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            Testimonials
          </p>
          <h2
            className={cn(
              "mb-5 text-balance",
              isDark ? "text-white" : "text-[#000000]"
            )}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(25px, 5vw, 45px)",
              lineHeight: "clamp(38px, 5vw, 60px)",
              fontWeight: 500,
            }}
          >
            Trusted by the teams{" "}
            <span
              className={cn(
                "italic",
                isDark ? "text-[#8429FF]" : "text-[#8429FF]"
              )}
            >
              building
            </span>{" "}
            the future of onchain capital.
          </h2>
          <p
            className={cn(
              "mx-auto max-w-lg text-base sm:text-lg",
              isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
            )}
            style={{
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.7,
            }}
          >
            Leading curators, asset managers and projects rely on Fusion to power their
            onchain strategies.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col gap-6">
          {/* Featured testimonial - full width */}
          {(() => {
            const t = testimonials[0];
            return (
              <div
                key={t.name}
                className={cn(
                  "group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 md:p-8",
                  isDark
                    ? "border-[#2E3137] bg-[#161A20] hover:border-[#8429FF]/40"
                    : "border-[#E5E5E5] bg-white hover:border-[#8429FF]/40"
                )}
              >
                {/* Quote icon + Company logo row */}
                <div className="mb-5 flex items-center justify-between">
                  <QuoteIcon
                    className={cn(
                      "shrink-0",
                      isDark ? "text-[#8429FF] opacity-50" : "text-[#8429FF] opacity-20"
                    )}
                  />
                  <img
                    src={t.logo}
                    alt={t.company}
                    className={cn(
                      "h-5 w-auto object-contain",
                      isDark
                        ? "brightness-0 invert opacity-30"
                        : "brightness-0 opacity-30"
                    )}
                  />
                </div>

                {/* Quote text - two columns on desktop for the long quote */}
                <p
                  className={cn(
                    "mb-8 flex-1 text-[15px] md:columns-2 md:gap-8",
                    isDark ? "text-[#D4D4D8]" : "text-[#374151]"
                  )}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.75,
                    fontWeight: 400,
                  }}
                >
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div
                  className={cn(
                    "mt-auto mb-6 h-px w-full",
                    isDark ? "bg-[#2E3137]" : "bg-[#E5E5E5]"
                  )}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <ImageWithFallback
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        "text-[14px]",
                        isDark ? "text-white" : "text-[#000000]"
                      )}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      className={cn(
                        "text-[13px]",
                        isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                      )}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.role} <span className="mx-1">•</span> {t.company}
                    </span>
                    <span
                      className={cn(
                        "text-[11px]",
                        isDark ? "text-[#9BA3AF]/50" : "text-[#70747A]/50"
                      )}
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Bottom row - two cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.slice(1).map((t) => (
              <div
                key={t.name}
                className={cn(
                  "group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 md:p-8",
                  isDark
                    ? "border-[#2E3137] bg-[#161A20] hover:border-[#8429FF]/40"
                    : "border-[#E5E5E5] bg-white hover:border-[#8429FF]/40"
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <QuoteIcon
                    className={cn(
                      "shrink-0",
                      isDark ? "text-[#8429FF] opacity-50" : "text-[#8429FF] opacity-20"
                    )}
                  />
                  <img
                    src={t.logo}
                    alt={t.company}
                    className={cn(
                      "w-auto object-contain",
                      t.company === "Reservoir" ? "h-3" : "h-[23px]",
                      isDark
                        ? "brightness-0 invert opacity-30"
                        : "brightness-0 opacity-30"
                    )}
                  />
                </div>

                <p
                  className={cn(
                    "mb-8 flex-1 text-[15px]",
                    isDark ? "text-[#D4D4D8]" : "text-[#374151]"
                  )}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.75,
                    fontWeight: 400,
                  }}
                >
                  "{t.quote}"
                </p>

                <div
                  className={cn(
                    "mt-auto mb-6 h-px w-full",
                    isDark ? "bg-[#2E3137]" : "bg-[#E5E5E5]"
                  )}
                />

                <div className="flex items-center gap-3">
                  <div className="shrink-0">
                    <ImageWithFallback
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={cn(
                        "text-[14px]",
                        isDark ? "text-white" : "text-[#000000]"
                      )}
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      className={cn(
                        "text-[13px]",
                        isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                      )}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.role} <span className="mx-1">•</span> {t.company}
                    </span>
                    <span
                      className={cn(
                        "text-[11px]",
                        isDark ? "text-[#9BA3AF]/50" : "text-[#70747A]/50"
                      )}
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}