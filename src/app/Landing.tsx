import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { TransparencyFeatures } from "./components/TransparencyFeatures";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Solutions } from "./components/Solutions";
import { Testimonials } from "./components/Testimonials";
import { ComparisonTable } from "./components/ComparisonTable";
import { Security } from "./components/Security";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CookieBanner, useCookieBanner } from "./components/CookieBanner";
import { useTheme } from "./components/ui/theme-context";
import { useEffect } from "react";

export default function Landing() {
  const { isDark } = useTheme();
  const cookieBanner = useCookieBanner();

  useEffect(() => {
    document.title = "Fusion by IPOR | Onchain Vault Infrastructure";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", "Deploy and manage onchain vault strategies or earn through professionally curated vaults. Modular infrastructure across Aave, Morpho, SparkLend, Euler, and more.");
  }, []);
  
  return (
    <div
      className={`${isDark ? "dark" : ""} min-h-screen overflow-x-hidden transition-colors duration-500`}
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: isDark ? "#090E14" : "#F5F5FA",
        color: isDark ? "#ffffff" : "#000000",
      }}
    >
      {/* Subtle noise overlay — light mode only */}
      {!isDark && (
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      )}
      <Hero />
      <TransparencyFeatures />
      <Testimonials />
      <Benefits />
      <HowItWorks />
      <Solutions />
      <TrustBar />
      <ComparisonTable />
      <Security />
      <FinalCTA />
      <Footer onOpenCookieSettings={cookieBanner.reopen} />
      <CookieBanner visible={cookieBanner.visible} onAccept={cookieBanner.accept} onDecline={cookieBanner.decline} />
    </div>
  );
}