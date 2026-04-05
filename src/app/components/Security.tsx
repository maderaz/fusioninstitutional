import { ExternalLink } from "lucide-react";
import { useTheme } from "./ui/theme-context";
import { cn } from "./ui/utils";

import logoBlocksec from "@/assets/fcb629b2417a54cc4378fef5fba8d657b6bc2fea.png";
import logoAckee from "@/assets/197135718ab7bba66535b2f9b1c097882c33a8ae.png";
import logoProtofire from "@/assets/7818a7d6ab1078dc24277a513e078db13a765fae.png";

const stats = [
  { value: "10+", label: "Independent security audits" },
  { value: "100%", label: "Immutable vault & fuse contracts" },
  { value: "0", label: "Admin keys over depositor funds" },
];

const auditors = [
  { name: "BlockSec", logo: logoBlocksec },
  { name: "Ackee Blockchain", logo: logoAckee },
  { name: "Protofire", logo: logoProtofire },
];

const codeLines = [
  { type: "comment", text: "// SPDX-License-Identifier: BUSL-1.1" },
  { type: "keyword", text: "pragma", rest: " solidity 0.8.30;" },
  { type: "blank" },
  { type: "import", path: "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol", name: "UUPSUpgradeable" },
  { type: "import", path: "./lib/FusionFactoryStorageLib.sol", name: "FusionFactoryStorageLib" },
  { type: "blank" },
  { type: "import", path: "./lib/FusionFactoryLogicLib.sol", name: "FusionFactoryLogicLib" },
  { type: "import", path: "./lib/FusionFactoryLib.sol", name: "FusionFactoryLib" },
  { type: "blank" },
  { type: "import", path: "./FusionFactoryAccessControl.sol", name: "FusionFactoryAccessControl" },
  { type: "blank" },
  { type: "comment", text: "/// @title FusionFactory" },
  { type: "comment", text: "/// @notice Factory contract for creating and managing Fusion Managers" },
  { type: "contract-start" },
  { type: "event", name: "FactoryAddressesUpdated", args: [
    "uint256 version",
    "address accessManagerFactory",
    "address plasmaVaultFactory",
    "address feeManagerFactory",
    "address withdrawManagerFactory",
    "address rewardsManagerFactory",
    "address contextManagerFactory",
    "address priceManagerFactory",
  ]},
  { type: "blank" },
  { type: "event", name: "BaseAddressesUpdated", args: [
    "uint256 version",
    "address newPlasmaVaultCoreBase",
    "address newAccessManagerBase",
    "address newPriceManagerBase",
    "address newWithdrawManagerBase",
    "address newRewardsManagerBase",
    "address newContextManagerBase",
  ]},
  { type: "blank" },
  { type: "event-single", name: "PlasmaVaultBaseUpdated", arg: "address newPlasmaVaultBase" },
  { type: "event-single", name: "PriceOracleMiddlewareUpdated", arg: "address newPriceOracleMiddleware" },
  { type: "event-single", name: "BurnRequestFeeFuseUpdated", arg: "address newBurnRequestFeeFuse" },
  { type: "event-single", name: "BurnRequestFeeBalanceFuseUpdated", arg: "address newBurnRequestFeeBalanceFuse" },
  { type: "event-single", name: "WithdrawWindowInSecondsUpdated", arg: "uint256 newWithdrawWindowInSeconds" },
  { type: "event-single", name: "VestingPeriodInSecondsUpdated", arg: "uint256 newVestingPeriodInSeconds" },
  { type: "event-single", name: "PlasmaVaultAdminArrayUpdated", arg: "address[] newPlasmaVaultAdminArray" },
  { type: "event-single", name: "DaoFeePackagesUpdated", arg: "FusionFactoryStorageLib.FeePackage[] packages, address updatedBy" },
  { type: "blank" },
  { type: "comment", text: "// ... snippet — view full contract on GitHub" },
];

function CodeBlock({ isDark }: { isDark: boolean }) {
  const bg = isDark ? "#161A20" : "#FAFAFA";
  const headerBg = isDark ? "#1A1F26" : "#F5F5FA";
  const border = isDark ? "#2E3137" : "#E5E5E5";
  const comment = isDark ? "#4A5568" : "#9CA3AF";
  const keyword = isDark ? "#C084FC" : "#7C3AED";
  const string = isDark ? "#86EFAC" : "#16A34A";
  const type = isDark ? "#93C5FD" : "#2563EB";
  const text = isDark ? "#D4D4D8" : "#374151";
  const punct = isDark ? "#9BA3AF" : "#9CA3AF";
  const eventColor = isDark ? "#FDE68A" : "#D97706";

  let lineNum = 0;

  const renderLine = (content: React.ReactNode) => {
    lineNum++;
    return (
      <div key={lineNum} className="flex">
        <span
          className="mr-6 inline-block w-6 shrink-0 select-none text-right"
          style={{ color: punct, fontVariantNumeric: "tabular-nums" }}
        >
          {lineNum}
        </span>
        <span className="flex-1">{content}</span>
      </div>
    );
  };

  const renderImport = (name: string, path: string) =>
    renderLine(
      <>
        <span style={{ color: keyword }}>import</span>
        <span style={{ color: punct }}> {"{"}</span>
        <span style={{ color: type }}>{name}</span>
        <span style={{ color: punct }}>{"}"}</span>
        <span style={{ color: keyword }}> from</span>
        <span style={{ color: string }}> "{path}"</span>
        <span style={{ color: punct }}>;</span>
      </>
    );

  const renderEventMulti = (name: string, args: string[]) => {
    const lines: React.ReactNode[] = [];
    lines.push(
      renderLine(
        <>
          <span>{"    "}</span>
          <span style={{ color: keyword }}>event</span>
          <span style={{ color: eventColor }}> {name}</span>
          <span style={{ color: punct }}>(</span>
        </>
      )
    );
    args.forEach((arg, i) => {
      const parts = arg.split(" ");
      const argType = parts.slice(0, -1).join(" ");
      const argName = parts[parts.length - 1];
      lines.push(
        renderLine(
          <>
            <span>{"        "}</span>
            <span style={{ color: type }}>{argType}</span>
            <span style={{ color: text }}> {argName}</span>
            {i < args.length - 1 && <span style={{ color: punct }}>,</span>}
          </>
        )
      );
    });
    lines.push(
      renderLine(
        <>
          <span>{"    "}</span>
          <span style={{ color: punct }}>);</span>
        </>
      )
    );
    return lines;
  };

  const renderEventSingle = (name: string, arg: string) => {
    // Handle complex args like "FusionFactoryStorageLib.FeePackage[] packages, address updatedBy"
    const argParts = arg.split(", ");
    const formattedArgs = argParts.map((a, i) => {
      const parts = a.trim().split(" ");
      const argName = parts[parts.length - 1];
      const argType = parts.slice(0, -1).join(" ");
      return (
        <span key={i}>
          <span style={{ color: type }}>{argType}</span>
          <span style={{ color: text }}> {argName}</span>
          {i < argParts.length - 1 && <span style={{ color: punct }}>, </span>}
        </span>
      );
    });
    return renderLine(
      <>
        <span>{"    "}</span>
        <span style={{ color: keyword }}>event</span>
        <span style={{ color: eventColor }}> {name}</span>
        <span style={{ color: punct }}>(</span>
        {formattedArgs}
        <span style={{ color: punct }}>);</span>
      </>
    );
  };

  const elements: React.ReactNode[] = [];

  for (const line of codeLines) {
    switch (line.type) {
      case "comment":
        elements.push(renderLine(<span style={{ color: comment }}>{line.text}</span>));
        break;
      case "keyword":
        elements.push(
          renderLine(
            <>
              <span style={{ color: keyword }}>{line.text}</span>
              <span style={{ color: text }}>{line.rest}</span>
            </>
          )
        );
        break;
      case "blank":
        elements.push(renderLine(<span>&nbsp;</span>));
        break;
      case "import":
        elements.push(renderImport(line.name!, line.path!));
        break;
      case "contract-start":
        elements.push(
          renderLine(
            <>
              <span style={{ color: keyword }}>contract</span>
              <span style={{ color: type }}> FusionFactory</span>
              <span style={{ color: keyword }}> is</span>
              <span style={{ color: type }}> UUPSUpgradeable</span>
              <span style={{ color: punct }}>,</span>
              <span style={{ color: type }}> FusionFactoryAccessControl</span>
              <span style={{ color: punct }}> {"{"}</span>
            </>
          )
        );
        break;
      case "event":
        elements.push(...renderEventMulti(line.name!, line.args!));
        break;
      case "event-single":
        elements.push(renderEventSingle(line.name!, line.arg!));
        break;
    }
  }

  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{ borderColor: border }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{
          backgroundColor: isDark ? "rgba(139,92,246,0.06)" : "rgba(132,41,255,0.05)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: isDark ? "rgba(132,41,255,0.25)" : "rgba(132,41,255,0.2)" }} />
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: isDark ? "rgba(132,41,255,0.15)" : "rgba(132,41,255,0.12)" }} />
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: isDark ? "rgba(132,41,255,0.08)" : "rgba(132,41,255,0.06)" }} />
          </div>
          <span className="text-[12px]" style={{ color: isDark ? "#8429FF" : "#8429FF", fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            FusionFactory.sol
          </span>
        </div>
        <a
          href="https://github.com/IPOR-Labs/ipor-fusion/blob/main/contracts/factory/FusionFactory.sol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-all duration-300"
          style={{
            color: isDark ? "#9BA3AF" : "#70747A",
            border: `1px solid ${isDark ? "#2E3137" : "#E5E5E5"}`,
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = isDark ? "#8429FF" : "#8429FF";
            e.currentTarget.style.color = isDark ? "#8429FF" : "#8429FF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = isDark ? "#2E3137" : "#E5E5E5";
            e.currentTarget.style.color = isDark ? "#9BA3AF" : "#70747A";
          }}
        >
          <ExternalLink className="size-3" />
          View on GitHub
        </a>
      </div>
      {/* Code body */}
      <div className="relative" style={{ backgroundColor: bg }}>
        <div
          className="custom-scrollbar overflow-y-auto overflow-x-hidden p-5"
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace",
            fontSize: "12.5px",
            lineHeight: 1.7,
            color: text,
            maxHeight: "258px",
          }}
        >
          <div className="whitespace-nowrap" style={{ fontSize: "clamp(9px, 1.1vw, 12.5px)" }}>{elements}</div>
        </div>
        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-10"
          style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
        />
      </div>
    </div>
  );
}

export function Security() {
  const { isDark } = useTheme();

  return (
    <section id="security" className="py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Two-column: header left, code right */}
        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - header */}
          <div className="max-w-[540px]">
            <p
              className={cn("mb-4 text-[13px] uppercase", isDark ? "text-[#8429FF]" : "text-[#8429FF]")}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              Security
            </p>
            <h2
              className={cn("mb-6 text-balance", isDark ? "text-white" : "text-[#000000]")}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(25px, 5vw, 45px)",
                lineHeight: "clamp(38px, 5vw, 60px)",
                fontWeight: 500,
              }}
            >
              Transparent & battle-tested{" "}
              <span className={isDark ? "text-[#8429FF]" : "text-[#8429FF]"}>vault</span> infrastructure.
            </h2>
            <p className={cn("text-pretty text-base sm:text-lg", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")}>
              Immutable vault logic. Non-upgradable fuses. Role-based access control. Fusion is built by engineers from banking, payments, and insurance, and audited by the best in Web3.
            </p>
          </div>

          {/* Right - code block */}
          <div className="w-full">
            <CodeBlock isDark={isDark} />
          </div>
        </div>

        {/* 3-column stat grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 border rounded-xl overflow-hidden",
          isDark ? "border-[#2E3137]" : "border-[#E5E5E5]"
        )}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "p-8 text-center",
                i < stats.length - 1 && (isDark
                  ? "border-b md:border-b-0 md:border-r border-[#2E3137]"
                  : "border-b md:border-b-0 md:border-r border-[#E5E5E5]")
              )}
            >
              <div
                className={cn("mb-2", isDark ? "text-white" : "text-[#000000]")}
                style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}
              >
                {stat.value}
              </div>
              <p className={cn("text-[13px]", isDark ? "text-[#9BA3AF]" : "text-[#70747A]")} style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.5 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Auditor logos */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <span className={cn("text-[12px]", isDark ? "text-[#52525B]" : "text-[#70747A]")} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
            Audited &amp; security reviewed by
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8">
          {auditors.map((a) => (
            <img
              key={a.name}
              src={a.logo}
              alt={a.name}
              className={cn(
                "h-5 w-auto object-contain",
                isDark
                  ? "brightness-0 invert opacity-50"
                  : "brightness-0 opacity-50"
              )}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}