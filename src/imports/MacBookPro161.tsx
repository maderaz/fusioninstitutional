import svgPaths from "./svg-o5uqkqhdf8";
import imgLinkHomeFusionByIpor from "figma:asset/875783ec6a6588aa50507cbb8566847105660d57.png";
import imgImage1 from "figma:asset/ab9681ec09a7121b938468eda49254122e69bc66.png";

function LinkHomeFusionByIpor() {
  return (
    <div className="h-[32px] relative shrink-0 w-[104.1px]" data-name="Link - home → Fusion by IPOR">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkHomeFusionByIpor} />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Item">
      <div className="content-stretch flex flex-col h-full items-start pb-[6.2px] pt-[5.3px] px-[12px] relative">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[15px] whitespace-nowrap">
          <p className="leading-[22.5px]">Docs</p>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex h-[34.5px] items-start relative shrink-0" data-name="List">
      <Item />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <List />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[48px] items-center left-0 top-[calc(50%-0.25px)]" data-name="Container">
      <LinkHomeFusionByIpor />
      <Container1 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[67px] relative shrink-0 w-[1136px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-[rgba(245,245,250,0.8)] content-stretch flex flex-col items-start left-[-1px] pl-[224px] pr-[159px] top-0 w-[1729px]" data-name="Nav">
      <HorizontalBorder />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute inset-[0.8px_0_0_0]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 571.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(153.6 0 0 34.266 960 571.1)\\'><stop stop-color=\\'rgba(132,41,255,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(132,41,255,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute inset-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1920 571.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(96 0 0 22.844 576 456.88)\\'><stop stop-color=\\'rgba(132,41,255,0.04)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(132,41,255,0)\\' offset=\\'0.6\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">Product</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Fusion Vaults</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Interest Rate Swaps</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container7 />
      <List1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">Governance</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Snapshot</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#8429ff] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Soon</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(112,116,122,0.5)] whitespace-nowrap">
        <p className="leading-[21px]">FUSN Token</p>
      </div>
      <Background />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <Container10 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container9 />
      <List2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">Security</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Audits</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Bug Bounty</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container12 />
      <List3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">Developers</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Documentation</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">GitHub</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[0px] w-full">
        <p className="leading-[21px] text-[14px]">Python SDK</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container14 />
      <List4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[18px]">Community</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">X / Twitter</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Discord</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] pt-[2.3px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] w-full">
        <p className="leading-[21px]">Medium Blog</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Container16 />
      <List5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container6 />
      <Container8 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[166.6px] items-start left-[24px] right-[24px] top-[-0.6px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function FusionByIpor() {
  return (
    <div className="h-[28px] max-w-[1152px] relative shrink-0 w-[91.09px]" data-name="Fusion by IPOR">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkHomeFusionByIpor} />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Onchain vault infrastructure for asset managers, institutions, and builders. Create, white-label and earn</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[24px] right-[24px] top-[338.79px]" data-name="Container">
      <FusionByIpor />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">© 2026 IPOR Labs AG. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Terms of Use</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[88.1px] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3.5 3.5H8.5V8.5" id="Vector" stroke="var(--stroke-0, #70747A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 8.5L8.5 3.5" id="Vector_2" stroke="var(--stroke-0, #70747A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[100.1px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[#70747a] text-[13px] top-[calc(50%-0.55px)] w-[84.43px]">
        <p className="leading-[19.5px]">Brand Assets</p>
      </div>
      <Svg />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_20px] items-center justify-center relative">
        <Link />
        <Link1 />
        <Link2 />
        <div className="bg-[#e5e5e5] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
        <Link3 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] pt-[32.01px] right-[24px] top-[414.79px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[467.1px] max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container17 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute left-[-96px] right-[-96px] top-[985px]" data-name="Footer">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[40px] pt-[64.8px] px-[360px] relative rounded-[inherit] w-full">
        <Container2 />
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.22px] pb-[0.779px] right-[-0.22px] top-[70.33px]" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
        <p className="font-['Poppins:Medium',sans-serif] leading-[38.638px] mb-0 text-[30.91px]">Vault infrastructure for</p>
        <p className="font-['Poppins:Medium',sans-serif] text-[30.91px]">
          <span className="leading-[38.638px] text-[#8429ff]">institutional-grade</span>
          <span className="leading-[38.638px] text-black">{` yield.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="absolute h-[80.124px] left-0 right-0 top-[109.06px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15.58px] text-white whitespace-nowrap">
          <p className="leading-[22.257px]">Discover Fusion</p>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[17.805px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8053 17.8053">
        <g id="SVG">
          <path d={svgPaths.p39fb2c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.48378" />
          <path d={svgPaths.p13a55580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.48378" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#8429ff] gap-[8.903px] items-center justify-center left-[-4.23px] px-[23.147px] py-[9.793px] rounded-[29872352px] to-[#6c00ff] top-[295.12px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#8429ff] border-[1.113px] border-solid inset-0 pointer-events-none rounded-[29872352px]" />
      <Container23 />
      <Svg1 />
    </div>
  );
}

function LinkHomeFusionByIpor1() {
  return (
    <div className="absolute h-[35.611px] left-[0.22px] top-[3.56px] w-[115.846px]" data-name="Link - home → Fusion by IPOR">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkHomeFusionByIpor} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[338.747px] left-[35.39px] right-[35.75px] top-[35.39px]" data-name="Container">
      <Heading />
      <Container22 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[0.22px] not-italic text-[#70747a] text-[15.58px] top-[221.26px] w-[539.724px]">
        <p className="leading-[26.485px] mb-0">Deploy and manage onchain vault strategies or earn through professionally curated vaults. Modular infrastructure across Aave, Morpho, SparkLend, Euler, and more.</p>
        <p className="leading-[26.485px]">&nbsp;</p>
      </div>
      <Link4 />
      <LinkHomeFusionByIpor1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[207.5px] not-italic text-[#d3d0d0] text-[15.58px] top-[316px] whitespace-nowrap">
        <p className="leading-[26.485px]">fusion.ipor.io</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border-[#e5e5e5] border-[1.113px] border-solid inset-[379px_882px_766px_218px] rounded-[17.805px]" data-name="Background+Border">
      <div className="absolute bg-[#8429ff] blur-[44.513px] opacity-0 right-[0.14px] rounded-[29872352px] size-[178.053px] top-[-0.22px]" data-name="Background+Blur" />
      <Container21 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.22px] pb-[0.779px] right-[-0.22px] top-[70.33px]" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30.91px] text-black whitespace-nowrap">
        <p>
          <span className="leading-[38.638px]">{`The `}</span>
          <span className="leading-[38.638px] text-[#8429ff]">Live</span>
          <span className="leading-[38.638px]">{` App`}</span>
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.5px] right-[291.14px] top-[127.5px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70747a] text-[15.58px] w-[268.193px]">
        <p className="leading-[26.485px]">Discover existing yield strategies powered by Fusion. Get started in one-click.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Launch App</p>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#8429ff] items-center justify-center left-[0.5px] px-[23.147px] py-[9.793px] rounded-[29872352px] to-[#6c00ff] top-[295.5px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#8429ff] border-[1.113px] border-solid inset-0 pointer-events-none rounded-[29872352px]" />
      <Container26 />
    </div>
  );
}

function LinkHomeFusionByIpor2() {
  return (
    <div className="absolute h-[35.611px] left-[0.22px] top-[3.56px] w-[115.846px]" data-name="Link - home → Fusion by IPOR">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkHomeFusionByIpor} />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[338.747px] left-[35.39px] right-[35.75px] top-[35.39px]" data-name="Container">
      <Heading1 />
      <Container25 />
      <Link5 />
      <LinkHomeFusionByIpor2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[456.48px] not-italic text-[#d3d0d0] text-[15.58px] top-[311.96px] whitespace-nowrap">
        <p className="leading-[26.485px]">fusion.ipor.io</p>
      </div>
      <div className="absolute h-[304px] left-[277.5px] rounded-br-[16.693px] rounded-tl-[16.693px] top-[70.5px] w-[314px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[16.693px] rounded-tl-[16.693px]">
          <img alt="" className="absolute h-[176.47%] left-0 max-w-none top-0 w-[100.86%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white border-[#e5e5e5] border-[1.113px] border-solid inset-[379px_218px_766px_882px] rounded-[17.805px]" data-name="Background+Border">
      <Container24 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[379px_218px_766px_218px]">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-[#ece9f7] relative size-full" data-name="MacBook Pro 16' - 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[218px] not-italic text-[60px] text-black top-[216.5px] whitespace-nowrap">
        <p className="leading-[75px]">Meet Fusion</p>
      </div>
      <Nav />
      <Footer />
      <Group />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[223px] not-italic text-[#70747a] text-[18px] top-[286px] whitespace-nowrap">
        <p className="leading-[28px]">Build your own institutional-grade yield strategies or explore existing ones via the Fusion App.</p>
      </div>
    </div>
  );
}