import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { Footer } from "./Footer";
import Nav from "./Nav";

const sections = [
  {
    title: "What Are Cookies",
    content:
      "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the owners of the site. Cookies can be \"persistent\" or \"session\" cookies. Persistent cookies remain on your device when you go offline, while session cookies are deleted as soon as you close your web browser.",
  },
  {
    title: "How We Use Cookies",
    content:
      "We use cookies and similar tracking technologies to operate and improve our Interface. We may use cookies for the following purposes:",
    bullets: [
      "Essential Cookies: These cookies are strictly necessary for the Interface to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or navigating the Interface.",
      "Analytics Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Interface. They help us understand which pages are the most and least popular and see how visitors move around the site.",
      "Functional Cookies: These cookies enable the Interface to provide enhanced functionality and personalization, such as remembering your theme preference (light/dark mode).",
    ],
  },
  {
    title: "Cookies We Use",
    content:
      "Below is a summary of the types of cookies that may be used on our Interface:",
    bullets: [
      "Session Storage: Used to remember your cookie consent preference for the duration of your browsing session. This is not a persistent cookie and is cleared when you close your browser.",
      "Theme Preference: Used to store your preferred display mode (light or dark). This may be stored in localStorage so your preference persists across visits.",
      "Analytics (if applicable): We may use third-party analytics services that set their own cookies to help us understand how users interact with the Interface. These cookies collect information in an aggregated form.",
    ],
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some cookies may be set by third-party services that appear on our pages. We do not control the setting of these cookies. You can check the relevant third-party website for more information about their cookies and how to manage them. We do not use cookies for advertising or targeted marketing purposes.",
  },
  {
    title: "Managing Cookies",
    content:
      "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that if you disable or refuse cookies, some parts of the Interface may become inaccessible or not function properly. You can manage your cookie preferences at any time by clicking the \"Cookie Policy\" link in our website footer to re-open the cookie consent banner.",
  },
  {
    title: "Your Consent",
    content:
      "By continuing to use our Interface after being presented with the cookie consent banner, you consent to the use of cookies as described in this policy. You may withdraw your consent at any time by clearing your browser cookies or adjusting your browser settings.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date. Your continued use of the Interface after any changes constitutes your acceptance of the revised policy.",
  },
  {
    title: "Contact",
    content:
      "If you have any questions about our use of cookies or this Cookie Policy, you may contact us through the channels listed on our website.",
  },
];

export function CookiePolicyPage() {
  const { isDark } = useTheme();

  return (
    <div
      className={cn("min-h-screen", isDark ? "bg-[#090E14]" : "bg-[#F5F5FA]")}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Nav />

      <main className="mx-auto max-w-[1200px] px-6 pt-32 pb-20 md:pt-40 md:pb-28">
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

        <h1
          className={cn("mb-3", isDark ? "text-white" : "text-[#000000]")}
          style={{
            fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.2,
          }}
        >
          Cookie Policy
        </h1>
        <p
          className={cn(
            "mb-12 text-[14px]",
            isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
          )}
        >
          Last updated: 2026-03-18
        </p>

        {/* Intro */}
        <p
          className={cn(
            "mb-10 max-w-[800px] text-[15px]",
            isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
          )}
          style={{ lineHeight: 1.8 }}
        >
          This Cookie Policy explains how IPOR Labs AG (&ldquo;we&rdquo;,
          &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies and similar
          technologies when you visit our Interfaces hosted at app.ipor.io and
          ipor.io. It
          explains what these technologies are and why we use them, as well as
          your rights to control our use of them.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10 max-w-[800px]">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className={cn("mb-4", isDark ? "text-white" : "text-[#000000]")}
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  lineHeight: 1.3,
                }}
              >
                {section.title}
              </h2>
              <p
                className={cn(
                  "text-[15px]",
                  isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                )}
                style={{ lineHeight: 1.8 }}
              >
                {section.content}
              </p>
              {section.bullets && (
                <ul
                  className={cn(
                    "mt-4 flex flex-col gap-3 pl-5 list-disc text-[15px]",
                    isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                  )}
                  style={{ lineHeight: 1.8 }}
                >
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
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