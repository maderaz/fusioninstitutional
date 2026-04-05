import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";
import { Footer } from "./Footer";
import Nav from "./Nav";

const sections = [
  {
    title: "Eligibility",
    content:
      "To access or use the Interface, you must be able to form a legally binding contract with us. Accordingly, you represent that you are at least eighteen years old and have the full right, power, and authority to enter into and comply with these Terms on behalf of yourself and any company or legal entity for which you may access or use the Interface, and that the use of the Interface is not prohibited in your jurisdiction. We may restrict access to some or all of the Interface to certain users or jurisdictions in our sole discretion. In order to access restricted portions of the Interface, you represent that you are not a citizen, resident, or member of the United States, China, or any other country to which the United States, the United Kingdom or the European Union embargoes goods or imposes similar sanctions, including without limitation Antigua and Barbuda, Algeria, Bangladesh, Bolivia, Belarus, Burundi, Burma (Myanmar), China, Cote D'Ivoire (Ivory Coast), Crimea and Sevastopol, Cuba, Democratic Republic of Congo, Ecuador, Iran, Iraq, Liberia, Libya, Magnitsky, Mali, Morocco, Nepal, North Korea, Somalia, Sudan, Syria, Venezuela, Yemen, or Zimbabwe. Use of a virtual private network to circumvent the restrictions set forth herein is prohibited.",
  },
  {
    title: "No Warranties",
    content:
      'The Interface is provided on an \u201cAS IS\u201d and \u201cAS AVAILABLE\u201d basis. To the fullest extent permitted by law, we disclaim any representations and warranties of any kind, whether express, implied, or statutory, including (but not limited to) the warranties of merchantability and fitness for a particular purpose. You acknowledge and agree that your use of the Interface is at your own risk. We do not represent or warrant that access to the Interface will be continuous, uninterrupted, timely, or secure; that the information contained in the Interface will be accurate, reliable, complete, or current; or that the Interface will be free from errors, defects, viruses, or other harmful elements. No advice, information, or statement that we make should be treated as creating any warranty concerning the Interface. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Interface. You understand that we do not provide, own, or control the Protocol (including IPOR Fusion), which is run by smart contracts deployed on the Ethereum blockchain. No developer or entity involved in creating the Protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the Protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.',
  },
  {
    title: "Waiver",
    content:
      "You acknowledge that there are risks associated with the use of the Interface and the Protocol, and by using the Interface, you, on behalf of yourself, your personal representatives and your heirs, hereby EXPRESSLY AGREE TO WAIVE AND RELEASE US, OUR AFFILIATES, SUBSIDIARIES, AND OUR AND THEIR RESPECTIVE OWNERS, MANAGERS, OFFICERS, EMPLOYEES, DIRECTORS, AGENTS, REPRESENTATIVES, SUCCESSORS, AND ASSIGNS (THE \u201cRELEASED PARTIES\u201d) FROM ANY AND ALL CLAIMS (INCLUDING THOSE IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTORY AND/OR ANY OTHER GROUNDS) YOU MAY HAVE AS A RESULT OF USING THE INTERFACE.",
  },
  {
    title: "Prohibited Activity",
    content:
      "You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in relation to your access and use of the Interface:",
    bullets: [
      "Intellectual Property Infringement. Activity that infringes on or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under the law.",
      "Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including (but not limited to) the deployment of viruses and denial of service attacks.",
      "Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the property of another.",
      "Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including (but not limited to) the manipulative tactics commonly known as spoofing and wash trading.",
      "Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of any relevant jurisdiction.",
    ],
  },
  {
    title: "Proprietary Rights",
    content:
      "We own all intellectual property and other rights in the Interface and its contents, including (but not limited to) software, text, images, trademarks, service marks, copyrights, patents, and designs. Unless expressly authorized by us, you may not copy, modify, adapt, rent, license, sell, publish, distribute, or otherwise permit any third party to access or use the Interface or any of its contents. Provided that you are eligible, you are hereby granted a single, personal, limited license to access and use the Interface. This license is non-exclusive, non-transferable, and freely revocable by us at any time without notice or cause. Use of the Interface or its contents for any purpose not expressly permitted by these Terms is strictly prohibited. Unlike the Interface, the Protocol is comprised entirely of open-source software running on the public Ethereum blockchain and is not our proprietary property.",
  },
  {
    title: "Third Party Services",
    content:
      'We may link to or offer services offered by third parties (\u201cThird-Party Services\u201d) on the Interface. Your interactions with Third-Party Services are subject to the terms and conditions of such Third-Party Services. We do not warrant or support Third-Party Services, are not responsible or liable for such Third-Party Services or any losses or issues that result as your use of such services. You acknowledge that we may allow providers of those Third-Party Services to access certain of your data used in connection with the Third-Party Services as required for your use.',
  },
  {
    title: "Your Responsibilities",
    content:
      "You acknowledge that the Protocol is a decentralized service and that the Interface does not control the Protocol. Certain jurisdictions may require you to comply with particular regulations to use certain of the Protocol\u2019s features. You are solely responsible for understanding and complying with all relevant laws, regulations, and licensing requirements in their jurisdiction(s) of operation. This includes, but is not limited to, securities laws, asset management laws, financial regulations, anti-money laundering (AML) requirements, know-your-customer (KYC) procedures, data protection and privacy laws, and tax regulations. If you manage or control assets on behalf of others using the Protocol (including IPOR Fusion), you additionally agree to: i) conduct appropriate due diligence on the suitability of the Protocol for your specific use case; ii) provide all necessary risk disclosures to your clients or investors regarding the use of the Protocol and any associated risks; iii) implement appropriate controls and monitoring systems to ensure ongoing compliance with applicable regulations; and iv) stay informed about any updates or changes to the Protocol that may affect your regulatory compliance and adjust your operations accordingly. We reserve the right to restrict or terminate access to the Interface for any user found to be in violation of these Terms or applicable regulations. If you delegate or transfer control of your assets to another third party through the Protocol, such third party shall be solely responsible, and you shall hold us harmless for any of such third party\u2019s actions or losses resulting therefrom. You understand and agree that we do not provide legal, tax, or investment advice. Any information provided through the Interface should not be considered as such.",
  },
  {
    title: "Indemnity",
    content:
      "To the fullest extent permitted by law, you, your heirs, or successors agree to defend, indemnify, and hold harmless the Released Parties from any and all claims, actions, damages, penalties, fines, demands, losses, liabilities, costs and expenses, injuries or payments for injury to any person or property arising out of or in connection with (i) your use of the Interface, (ii) your breach or violation of any of these Terms or any applicable law, (iii) your violation of the rights of any third party. The Released Parties reserve the right to assume the exclusive defense of any claims or lawsuits, and you agree not to settle any of the foregoing without the applicable Released Parties\u2019 prior written consent. You agree that the obligations in this section will survive any termination of these Terms.",
  },
  {
    title: "Modifications",
    content:
      "We may modify these Terms from time to time. If we make any modifications, we will notify you by updating the date at the top of the Terms and by maintaining a current version on ipor.io/terms-of-use. All modifications will be effective when posted, and your continued use of the Interface will serve as acceptance of those modifications. If you do not agree with any modifications to the Terms, you must immediately stop accessing and using the Interface.",
  },
  {
    title: "General",
    content:
      "These Terms will be governed by and construed in accordance with the laws of Switzerland, without regard to its conflicts of law provisions. You may not assign these Terms without our prior written approval. We may assign these Terms without your consent to a related or affiliated entity or in the event of a sale of all or substantially all of our assets, stock or business, or to a successor by merger. Any purported assignment in violation of this paragraph is void. If any provision of these Terms is held to be invalid or unenforceable, that provision shall be struck and the remaining provisions shall be enforced to the fullest extent under the law. Our failure to enforce any right or provision in these Terms shall not constitute a waiver of such right or provision unless we acknowledge and agree to it in writing, and it is not a waiver of our right to do so later. Provisions that by their nature are intended to survive the termination of these Terms or your use of the Interface will survive.",
  },
];

export function TermsOfUsePage() {
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
          Terms of Use
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
          These Terms of Use (&ldquo;Terms&rdquo;) apply to the applications
          hosted at app.ipor.io and ipor.io, hosted user interfaces (the
          &ldquo;Interface&rdquo;) provided by IPOR Labs AG (&ldquo;we&rdquo;,
          &ldquo;our&rdquo;, or &ldquo;us&rdquo;). The Interface provides data
          regarding and access to a decentralized protocol (the
          &ldquo;Protocol&rdquo;) on the Ethereum blockchain that allows users
          to participate in digital asset interest rate and yield markets. The
          Protocol includes IPOR Fusion, a yield optimization framework for
          automated execution of smart asset management on-chain. These Terms
          explain the terms and conditions by which you may access and use the
          Interface. You must read these Terms carefully. By accessing or using
          the Interface, you signify that you have read, understand, and agree to
          be bound by these Terms in its entirety. If you do not agree, you are
          not authorized to access or use the Interface.
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
                <ul className="mt-3 flex flex-col gap-2 pl-5">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className={cn(
                        "text-[15px] list-disc",
                        isDark ? "text-[#9BA3AF]" : "text-[#70747A]"
                      )}
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