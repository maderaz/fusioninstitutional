import fusionLogoDarkPng from "figma:asset/7431d75d5eb1f7dad9a8e4c69ac6b39fb194e6f1.png";
import fusionLogoLight from "figma:asset/467f3a5bb0abc2e066223b5d4eea80797d5b7ccd.png";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";

const linkColumns = [
  {
    title: "Product",
    links: [
      { label: "Fusion Vaults", href: "#top" },
      { label: "Interest Rate Swaps", href: "https://app.ipor.io/swaps/ethereum" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Snapshot", href: "https://snapshot.org/#/s:ipordao.eth" },
      { label: "FUSN Token", href: "#", soon: true },
    ],
  },
  {
    title: "Security",
    links: [
      { label: "Audits", href: "https://docs.ipor.io/build-on-fusion/developer-guide/audits" },
      { label: "Bug Bounty", href: "https://immunefi.com/bug-bounty/ipor/information/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.ipor.io/" },
      { label: "GitHub", href: "https://github.com/IPOR-Labs" },
      { label: "Python SDK", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "X / Twitter", href: "https://x.com/ipor_io" },
      { label: "Discord", href: "https://discord.com/invite/bSKzq6UMJ3" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/73049136/" },
      { label: "Medium Blog", href: "https://blog.ipor.io/" },
    ],
  },
];

export function Footer({ onOpenCookieSettings }: { onOpenCookieSettings?: () => void }) {
  const { isDark } = useTheme();
  const bg = isDark ? "#090E14" : "#F5F5FA";

  return (
    <footer className={cn(
      "relative border-t pt-10 pb-6 overflow-hidden md:pt-16 md:pb-10",
      isDark ? "border-[#2E3137]" : "border-[#E5E5E5]"
    )}>
      {/* Soft purple gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(132,41,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse 50% 40% at 30% 80%, rgba(139,92,246,0.05) 0%, transparent 60%)"
              : "radial-gradient(ellipse 50% 40% at 30% 80%, rgba(132,41,255,0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Top row */}
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 md:gap-16 w-full">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <p
                  className={cn("mb-4 text-[12px]", isDark ? "text-white" : "text-[#000000]")}
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {(link as any).soon ? (
                        <span
                          className={cn(
                            "inline-flex items-center gap-2 text-[14px] cursor-default",
                            isDark ? "text-[#9BA3AF]/50" : "text-[#70747A]/50"
                          )}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {link.label}
                          <span
                            className={cn(
                              "rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide",
                              "bg-[#8429FF] text-white"
                            )}
                            style={{ fontWeight: 500 }}
                          >
                            Soon
                          </span>
                        </span>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className={cn(
                            "text-[14px] transition-colors",
                            isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
                          )}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={link.href === "#top" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } : undefined}
                          className={cn(
                            "text-[14px] transition-colors",
                            isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
                          )}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Brand row */}
        <div className="mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4" style={{ marginTop: '15%' }}>
          <img
            src={isDark ? fusionLogoDarkPng : fusionLogoLight}
            alt="Fusion by IPOR"
            className="h-7 w-auto shrink-0 object-contain"
          />
          <p
            className={cn("text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Onchain vault infrastructure for asset managers, institutions, and builders. Create, white-label and earn.
          </p>
        </div>

        {/* Bottom bar */}
        <div className={cn(
          "flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row",
          isDark ? "border-[#2E3137]" : "border-[#E5E5E5]"
        )}>
          <p
            className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            &copy; 2026 IPOR Labs AG. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className={cn(
                "text-[13px] transition-colors",
                isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
              )}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              className={cn(
                "text-[13px] transition-colors",
                isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
              )}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Cookie Policy
            </Link>
            <Link
              to="/terms-of-use"
              className={cn(
                "text-[13px] transition-colors",
                isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
              )}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Terms of Use
            </Link>

            <span className={cn("hidden md:block h-4 w-px", isDark ? "bg-[#2E3137]" : "bg-[#E5E5E5]")} />

            {[
              { label: "Brand Assets", href: "https://drive.google.com/drive/folders/1RNoJP4LpfhV3G8p9Eq9xFoorq4RyW29_" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center gap-1 text-[13px] transition-colors",
                  isDark ? "text-[#9BA3AF] hover:text-white" : "text-[#70747A] hover:text-[#000000]"
                )}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.label}
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}