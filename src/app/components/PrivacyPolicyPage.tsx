import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { Footer } from "./Footer";
import Nav from "./Nav";

const sections = [
  {
    title: "What We Collect",
    content: [
      "When you interact with our Services, we may collect:",
    ],
    bullets: [
      "Your cryptocurrency address and associated information, such as transaction history, trading data and associated fees paid;",
      "Information related to your use of the Services, such as geographic location, operating system, browser name and version, and/or IP addresses; and",
      "Information from cookies and other tracking technologies to identify your preferences, track the use of our Services, and collect information about the use of the Services.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We may use the information we collect to provide, maintain, and improve our Services, or to comply with applicable laws and regulations. We may also use the information we collect to investigate or address claims or disputes relating to use of our Services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries.",
    ],
  },
  {
    title: "How We Share & Disclose Information",
    content: [
      "We do not sell, trade, or otherwise transfer your information to outside parties. This does not include trusted third parties who assist us in operating our site, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our policies, or protect ours or others' rights, property, or safety.",
    ],
  },
  {
    title: "Third Party Links",
    content: [
      "Occasionally, at our discretion, we may include or offer third party products or services. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "If we make any changes to this Policy, we will post those changes on this page. All modifications will be effective when posted, and your continued use of the Services will serve as acceptance of those modifications.",
    ],
  },
  {
    title: "Questions",
    content: [
      "If you have any questions about this Policy, you may contact us at privacy@ipor.io.",
    ],
  },
];

export function PrivacyPolicyPage() {
  const { isDark } = useTheme();

  return (
    <div
      className={cn("min-h-screen", isDark ? "bg-[#090E14]" : "bg-[#F5F5FA]")}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Nav />

      <main className="mx-auto max-w-[1200px] px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Back link */}
        <Link
          to="/"
          className={cn(
            "mb-8 inline-flex items-center gap-2 text-[14px] transition-colors",
            isDark
              ? "text-[#9BA3AF] hover:text-white"
              : "text-[#70747A] hover:text-black"
          )}
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        {/* Header */}
        <h1
          className={cn(
            "mb-3",
            isDark ? "text-white" : "text-[#000000]"
          )}
          style={{ fontWeight: 500, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.2 }}
        >
          Privacy Policy
        </h1>
        <p
          className={cn("mb-12 text-[14px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
        >
          Last updated: 2026-03-18
        </p>

        {/* Intro */}
        <p
          className={cn("mb-10 max-w-[800px] text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
          style={{ lineHeight: 1.8 }}
        >
          This Privacy Policy (&ldquo;Policy&rdquo;) sets out how IPOR Labs AG (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) may collect, use and disclose information, and your choices when you use our services hosted at app.ipor.io and ipor.io or any other sites or services we own or operate (collectively, the &ldquo;Services&rdquo;). If you do not agree with the terms of this Policy, please do not access or use the Services.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10 max-w-[800px]">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className={cn("mb-4", isDark ? "text-white" : "text-[#000000]")}
                style={{ fontWeight: 500, fontSize: "20px", lineHeight: 1.3 }}
              >
                {section.title}
              </h2>
              {section.content.map((p, i) => (
                <p
                  key={i}
                  className={cn("text-[15px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                  style={{ lineHeight: 1.8 }}
                >
                  {section.title === "Questions" ? (
                    <>
                      If you have any questions about this Policy, you may contact us at{" "}
                      <a
                        href="mailto:privacy@ipor.io"
                        className="text-[#8429FF] hover:underline"
                      >
                        privacy@ipor.io
                      </a>
                      .
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 flex flex-col gap-2 pl-5">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className={cn("text-[15px] list-disc", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}
                      style={{ lineHeight: 1.8 }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}