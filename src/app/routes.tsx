import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Landing from "./Landing";
import { VaultPage } from "./components/VaultPage";
import { BrandGuidelinesPage } from "./components/BrandGuidelinesPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsOfUsePage } from "./components/TermsOfUsePage";
import { CookiePolicyPage } from "./components/CookiePolicyPage";
import { HomePage } from "./components/HomePage";

function Root() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "vault", Component: VaultPage },
      { path: "brand-guidelines", Component: BrandGuidelinesPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-of-use", Component: TermsOfUsePage },
      { path: "cookie-policy", Component: CookiePolicyPage },
      { path: "home", Component: HomePage },
    ],
  },
]);