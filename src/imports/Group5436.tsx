import svgPaths from "./svg-nh53ytc8f9";
import imgRUsd from "figma:asset/217d753a6bf6a8f363cec0dad6ca077aee09e994.png";
import imgUsdc from "figma:asset/2b48695444595169b19e5f1a3e0e29241ec3cfdc.png";
import imgDebank from "figma:asset/f022d0ef5144ebbd957aa196d5bb1998e33dda26.png";
import { imgGroup5038, imgGroup5039, imgGroup5036, imgGroup, imgGroup1, imgGroup5040, imgGroup5041, imgGroup5037 } from "./svg-lmgob";

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8429ff] text-[0px] whitespace-nowrap">
        <p className="leading-[20px] text-[14px]">Fusion Vaults list</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Fusion Vault details</p>
      </div>
    </div>
  );
}

function NavBreadcrumbOrderedList() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[0px_10px] items-center left-0 right-0 top-0" data-name="Nav - breadcrumb → Ordered List">
      <ItemLink />
      <Container />
      <ItemLink1 />
    </div>
  );
}

function ReservoirSrusdLoopingEthereumSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[150px] top-1/2" data-name="reservoir-srusd-looping-ethereum.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g clipPath="url(#clip0_3_6959)" id="reservoir-srusd-looping-ethereum.svg">
          <path d={svgPaths.p1ec9300} fill="var(--fill-0, #DCC5F7)" id="Vector" />
          <path d={svgPaths.p12357e00} fill="var(--fill-0, #6800D1)" id="Vector_2" />
          <path d={svgPaths.pe1a0c80} fill="var(--fill-0, #9370DB)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_3_6959">
            <rect fill="white" height="150" width="150" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReservoirSrusdLoopingEthereumSvgFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60.8px]" data-name="reservoir-srusd-looping-ethereum.svg fill">
      <ReservoirSrusdLoopingEthereumSvg />
    </div>
  );
}

function PlasmaVaultAvatar() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[60.79999923706055px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Plasma Vault avatar">
      <div className="overflow-clip relative shrink-0 size-[60.8px] rounded-[9999px]">
        <img alt="USDC" className="absolute left-0 max-w-none size-full top-0" src={imgUsdc} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_19.3%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36849 11.9999">
        <g id="Group">
          <path d={svgPaths.p2a7f5200} fill="var(--fill-0, #343434)" id="Vector" />
          <path d={svgPaths.p1dfb8370} fill="var(--fill-0, #8C8C8C)" id="Vector_2" />
          <path d={svgPaths.p2fab2c00} fill="var(--fill-0, #3C3C3B)" id="Vector_3" />
          <path d={svgPaths.p22621c00} fill="var(--fill-0, #8C8C8C)" id="Vector_4" />
          <path d={svgPaths.p25f35300} fill="var(--fill-0, #141414)" id="Vector_5" />
          <path d={svgPaths.p5f31800} fill="var(--fill-0, #393939)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start justify-center p-[2px] right-[-2px] rounded-[9999px] size-[16px]" data-name="Background">
      <Svg1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[60.8px]" data-name="Container">
      <PlasmaVaultAvatar />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center max-w-[60.79999923706055px] min-w-[60.79999923706055px] pt-[4px] relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Reservoir wsrUSD looping</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Leveraged Looping</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[310px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16V12" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8H12.01" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg2 />
    </div>
  );
}

function ButtonDialog() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#8429ff] h-[44px] items-center justify-center pb-[12.4px] pt-[11.6px] px-[24.8px] relative rounded-[9999px] shrink-0 to-[#6c00ff]" data-name="Button dialog">
      <div aria-hidden="true" className="absolute border border-[#8429ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Deposit</p>
      </div>
    </div>
  );
}

function ButtonDialog1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(132,41,255,0.5)] h-[44px] items-center justify-center opacity-50 pb-[12.4px] pt-[11.6px] px-[24.8px] relative rounded-[9999px] shrink-0 to-[rgba(132,41,255,0)]" data-name="Button dialog">
      <div aria-hidden="true" className="absolute border border-[rgba(132,41,255,0.8)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Withdraw</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Link />
      <ButtonDialog />
      <ButtonDialog1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">0.00</p>
      </div>
    </div>
  );
}

function RUsd() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="rUSD">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRUsd} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[7.99px] items-center left-[88.94px] top-0" data-name="Container">
      <Container15 />
      <RUsd />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[32px] relative shrink-0 w-[166.16px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[#94a3b8] text-[14px] top-[20.4px] w-[81.265px]">
        <p className="leading-[20px]">My Deposit:</p>
      </div>
      <Container14 />
    </div>
  );
}

function RUsd1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[20px]" data-name="rUSD">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRUsd} />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] self-stretch shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10.8px] py-[2.8px] relative">
          <RUsd1 />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center pb-[3.2px] pt-[2.4px] px-[16.8px] relative">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818490] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[28px]">$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] h-[43.2px] items-start p-[4.8px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <OverlayBorder />
      <Border />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container13 />
      <Button />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#94a3b8] text-[14px]">
        <p className="leading-[20px]">My Fusion Points:</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center relative shrink-0 text-[#f8fafc] text-[24px]">
        <p className="leading-[32px]">0</p>
      </div>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.001px] mask-size-[24px_26.406px]" style={{ maskImage: `url('${imgGroup5038}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9971 26.406">
        <g id="Group 5038">
          <path d={svgPaths.p1b707280} fill="url(#paint0_linear_3_6929)" id="Path 7237" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_6929" x1="11.9985" x2="11.9985" y1="4.38339" y2="28.3336">
            <stop stopColor="#6C00FF" />
            <stop offset="1" stopColor="#FF008B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group62 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-0">
      <ClipPathGroup />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-0">
      <Group63 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[7.98%_7.99%_7.99%_7.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.001px] mask-size-[20.167px_22.189px]" style={{ maskImage: `url('${imgGroup5039}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1663 22.189">
        <g id="Group 5038">
          <path d={svgPaths.p115b3600} fill="url(#paint0_linear_3_6916)" id="Path 7237" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_6916" x1="10.0832" x2="10.0832" y1="12.0708" y2="30.5321">
            <stop stopColor="#6C00FF" />
            <stop offset="1" stopColor="#FF008B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]" data-name="Clip path group">
      <Group66 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]">
      <ClipPathGroup1 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[24.27%_22.28%_25.15%_22.07%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.359px_13.359px]" style={{ maskImage: `url('${imgGroup5036}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3562 13.3562">
        <g id="Group 5036">
          <path d={svgPaths.p2bd9b80} fill="var(--fill-0, white)" id="Path 7235" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[24.27%_22.26%_25.14%_22.07%]" data-name="Clip path group">
      <Group60 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[24.27%_22.26%_25.14%_22.07%]">
      <ClipPathGroup2 />
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]">
      <Group65 />
      <Group61 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-0">
      <Group64 />
      <Group74 />
    </div>
  );
}

function PointsIconSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[26.406px] left-1/2 overflow-clip top-1/2 w-[24px]" data-name="points-icon.svg">
      <Group76 />
    </div>
  );
}

function PointsIconSvgFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="points-icon.svg fill">
      <PointsIconSvg />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Image">
      <PointsIconSvgFill />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Paragraph />
      <Image />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-baseline leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#94a3b8] text-[14px]">
        <p className="leading-[20px]">My Reservoir Points:</p>
      </div>
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center relative shrink-0 text-[#f8fafc] text-[24px]">
        <p className="leading-[32px]">0</p>
      </div>
    </div>
  );
}

function ReservoirSvg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="reservoir.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6899)" id="reservoir.svg">
          <path d={svgPaths.p384a6b80} fill="var(--fill-0, #DCC5F7)" id="Vector" />
          <path d={svgPaths.p30831680} fill="var(--fill-0, #6800D1)" id="Vector_2" />
          <path d={svgPaths.p10740980} fill="var(--fill-0, #9370DB)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_3_6899">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReservoirSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="reservoir.svg fill">
      <ReservoirSvg />
    </div>
  );
}

function ReservoirPoints() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[24px]" data-name="Reservoir Points">
      <ReservoirSvgFill />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1769)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_1769">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[32px]" data-name="Link">
      <Paragraph1 />
      <ReservoirPoints />
      <Svg3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[32px] relative shrink-0 w-[215.66px]" data-name="Margin">
      <Link1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0" data-name="Container">
      <Container12 />
      <Container16 />
      <Margin />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end relative self-stretch shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[215.2px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Deposits: 3,642,425 rUSD</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Max capacity: 4,018,711 rUSD</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Progressbar() {
  return (
    <div className="bg-[#1e293b] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Progressbar">
      <div className="absolute bg-[#cf3e3a] inset-[0_31.35px_0_-31.35px]" data-name="Background" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[3.21px] items-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[#f8fafc] text-[14px]">
        <p className="leading-[20px]">376,285 rUSD</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#94a3b8] text-[12px]">
        <p className="leading-[16px]">left before reaching maximum capacity</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Progressbar />
      <Paragraph2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[334.81px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-[68px]" data-name="Container">
      <Container2 />
      <Container17 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p338f2df0} id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[0px] whitespace-nowrap">
          <p className="leading-[24px] text-[16px]">Overview</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#8429ff] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pb-[17.6px] pr-[4px] pt-[16px] relative">
        <Svg4 />
        <Container22 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(132,41,255,0)] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center pb-[17.6px] pr-[4px] pt-[16px] relative">
        <Svg5 />
        <Container23 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-0 pb-[0.8px] right-0 top-[367.2px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Vault Strategy</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="mb-0">{`This vault provides leveraged exposure to Reservoir's yield`}</p>
        <p className="mb-0">bearing stablecoin, srUSD. srUSD is backed by a multi-</p>
        <p className="mb-0">collateral balance sheet consisting of a variety of digital</p>
        <p className="mb-0">strategies and RWAs. See reservoir.xyz for more info and</p>
        <p>proof of reserves.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[576px] relative self-stretch shrink-0 w-[404px]" data-name="Container">
      <Heading1 />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Risk Rating</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[31.42%_0_34.61%_37.65%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-30.124px_-7.725px] mask-size-[80px_24.585px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.8761 8.35052">
        <g id="Group">
          <path d={svgPaths.p184f8580} fill="var(--fill-0, #E6E4DE)" id="Vector" />
          <path d={svgPaths.p33bdd000} fill="var(--fill-0, #E6E4DE)" id="Vector_2" />
          <path d={svgPaths.p24f48a80} fill="var(--fill-0, #E6E4DE)" id="Vector_3" />
          <path d={svgPaths.p32c71b00} fill="var(--fill-0, #E6E4DE)" id="Vector_4" />
          <path d={svgPaths.p361daf80} fill="var(--fill-0, #E6E4DE)" id="Vector_5" />
          <path d={svgPaths.p3c9d3580} fill="var(--fill-0, #E6E4DE)" id="Vector_6" />
          <path d={svgPaths.p3c3e8000} fill="var(--fill-0, #E6E4DE)" id="Vector_7" />
          <path d={svgPaths.p29094400} fill="var(--fill-0, #E6E4DE)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function XerberusSvg() {
  return (
    <div className="h-[24.585px] overflow-clip relative shrink-0 w-[80px]" data-name="xerberus.svg">
      <ClipPathGroup3 />
      <div className="absolute inset-[0_69.34%_0_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5243 24.5854">
          <path d={svgPaths.p19e65d00} fill="url(#paint0_linear_3_6883)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_6883" x1="0" x2="24.5278" y1="12.2961" y2="12.2961">
              <stop offset="0.12" stopColor="#0CC2AC" />
              <stop offset="1" stopColor="#0075C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function XerberusSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip py-[3.707px] relative shrink-0 w-[80px]" data-name="xerberus.svg fill">
      <XerberusSvg />
    </div>
  );
}

function Xerberus() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start max-w-[190.39999389648438px] overflow-clip relative shrink-0 w-[80px]" data-name="Xerberus">
      <XerberusSvgFill />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Xerberus />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_0.15%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_39.742px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9996 39.7419">
        <g id="Group">
          <path d={svgPaths.p3dc3c400} fill="var(--fill-0, #2DBCE2)" id="Vector" opacity="0.6" />
          <path d={svgPaths.p20a45900} fill="var(--fill-0, #2DBCE2)" id="Vector_2" />
          <path d={svgPaths.p16a66f20} fill="var(--fill-0, #2DBCE2)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p28b04b00} fill="var(--fill-0, #2DBCE2)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.p363f7700} fill="var(--fill-0, #2DBCE2)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p3200c180} fill="var(--fill-0, #2DBCE2)" id="Vector_6" />
          <path d={svgPaths.p1aa7b680} fill="var(--fill-0, #2DBCE2)" id="Vector_7" opacity="0.6" />
          <path d={svgPaths.p3a5bb480} fill="var(--fill-0, #2DBCE2)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p8202680} fill="var(--fill-0, #2DBCE2)" id="Vector_9" />
          <path d={svgPaths.pe506cc0} fill="var(--fill-0, #2DBCE2)" id="Vector_10" opacity="0.3" />
          <path d={svgPaths.p375ee300} fill="var(--fill-0, #2DBCE2)" id="Vector_11" opacity="0.6" />
          <path d={svgPaths.p2661c380} fill="var(--fill-0, #2DBCE2)" id="Vector_12" />
          <path d={svgPaths.p1cad9b00} fill="var(--fill-0, #2DBCE2)" id="Vector_13" />
          <path d={svgPaths.p1e06bb00} fill="var(--fill-0, #2DBCE2)" id="Vector_14" />
          <path d={svgPaths.p2ee41300} fill="var(--fill-0, #2DBCE2)" id="Vector_15" />
          <path d={svgPaths.p16029800} fill="var(--fill-0, #2DBCE2)" id="Vector_16" opacity="0.3" />
          <path d={svgPaths.p117ba4f0} fill="var(--fill-0, #2DBCE2)" id="Vector_17" opacity="0.6" />
          <path d={svgPaths.p3919ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_18" opacity="0.6" />
          <path d={svgPaths.p2f5c8f40} fill="var(--fill-0, #2DBCE2)" id="Vector_19" opacity="0.3" />
          <path d={svgPaths.p27427e00} fill="var(--fill-0, #2DBCE2)" id="Vector_20" opacity="0.6" />
          <path d={svgPaths.p1f4e200} fill="var(--fill-0, #2DBCE2)" id="Vector_21" />
          <path d={svgPaths.p1840bc00} fill="var(--fill-0, #2DBCE2)" id="Vector_22" />
          <path d={svgPaths.p346cceb2} fill="var(--fill-0, #2DBCE2)" id="Vector_23" />
          <path d={svgPaths.p3d697a80} fill="var(--fill-0, #2DBCE2)" id="Vector_24" opacity="0.6" />
          <path d={svgPaths.p3ee1ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_25" />
          <path d={svgPaths.p2fc4200} fill="var(--fill-0, #2DBCE2)" id="Vector_26" opacity="0.6" />
          <path d={svgPaths.pba9b80} fill="var(--fill-0, #2DBCE2)" id="Vector_27" />
          <path d={svgPaths.p12182580} fill="var(--fill-0, #2DBCE2)" id="Vector_28" />
          <path d={svgPaths.pe8aab00} fill="var(--fill-0, #2DBCE2)" id="Vector_29" opacity="0.3" />
          <path d={svgPaths.p3f3bd980} fill="var(--fill-0, #2DBCE2)" id="Vector_30" opacity="0.3" />
          <path d={svgPaths.p1a032200} fill="var(--fill-0, #2DBCE2)" id="Vector_31" opacity="0.6" />
          <path d={svgPaths.p1bb32900} fill="var(--fill-0, #2DBCE2)" id="Vector_32" opacity="0.6" />
          <path d={svgPaths.p10f7d400} fill="var(--fill-0, #2DBCE2)" id="Vector_33" />
          <path d={svgPaths.p1aefc580} fill="var(--fill-0, #2DBCE2)" id="Vector_34" />
          <path d={svgPaths.pd283a00} fill="var(--fill-0, #2DBCE2)" id="Vector_35" opacity="0.3" />
          <path d={svgPaths.p18970700} fill="var(--fill-0, #2DBCE2)" id="Vector_36" />
          <path d={svgPaths.p36c1ba00} fill="var(--fill-0, #2DBCE2)" id="Vector_37" />
          <path d={svgPaths.p2e843880} fill="var(--fill-0, #2DBCE2)" id="Vector_38" />
          <path d={svgPaths.p1bb6d300} fill="var(--fill-0, #2DBCE2)" id="Vector_39" opacity="0.6" />
          <path d={svgPaths.p36098830} fill="var(--fill-0, #2DBCE2)" id="Vector_40" opacity="0.6" />
          <path d={svgPaths.p3737b200} fill="var(--fill-0, #2DBCE2)" id="Vector_41" />
          <path d={svgPaths.p32e17600} fill="var(--fill-0, #2DBCE2)" id="Vector_42" />
          <path d={svgPaths.p1b036880} fill="var(--fill-0, #2DBCE2)" id="Vector_43" opacity="0.3" />
          <path d={svgPaths.p3b86c700} fill="var(--fill-0, #2DBCE2)" id="Vector_44" />
          <path d={svgPaths.p16b2ccf0} fill="var(--fill-0, #2DBCE2)" id="Vector_45" opacity="0.3" />
          <path d={svgPaths.p377a3700} fill="var(--fill-0, #2DBCE2)" id="Vector_46" opacity="0.3" />
          <path d={svgPaths.p20814b80} fill="var(--fill-0, #2DBCE2)" id="Vector_47" />
          <path d={svgPaths.p2ea96d00} fill="var(--fill-0, #2DBCE2)" id="Vector_48" opacity="0.3" />
          <path d={svgPaths.p976980} fill="var(--fill-0, #2DBCE2)" id="Vector_49" opacity="0.3" />
          <path d={svgPaths.p39257e00} fill="var(--fill-0, #2DBCE2)" id="Vector_50" />
          <path d={svgPaths.p1553d100} fill="var(--fill-0, #2DBCE2)" id="Vector_51" opacity="0.3" />
          <path d={svgPaths.p2b34d80} fill="var(--fill-0, #2DBCE2)" id="Vector_52" opacity="0.3" />
          <path d={svgPaths.p249c5b00} fill="var(--fill-0, #2DBCE2)" id="Vector_53" opacity="0.3" />
          <path d={svgPaths.p9cc1cf0} fill="var(--fill-0, #2DBCE2)" id="Vector_54" />
          <path d={svgPaths.p1752ee00} fill="var(--fill-0, #2DBCE2)" id="Vector_55" opacity="0.3" />
          <path d={svgPaths.p15631100} fill="var(--fill-0, #2DBCE2)" id="Vector_56" />
          <path d={svgPaths.p265fb10} fill="var(--fill-0, #2DBCE2)" id="Vector_57" />
          <path d={svgPaths.pfc66580} fill="var(--fill-0, #2DBCE2)" id="Vector_58" />
          <path d={svgPaths.p390dbc80} fill="var(--fill-0, #2DBCE2)" id="Vector_59" />
          <path d={svgPaths.p1a69c800} fill="var(--fill-0, #2DBCE2)" id="Vector_60" />
          <path d={svgPaths.p3efabcf0} fill="var(--fill-0, #2DBCE2)" id="Vector_61" opacity="0.6" />
          <path d={svgPaths.p2a8c4870} fill="var(--fill-0, #2DBCE2)" id="Vector_62" />
          <path d={svgPaths.p3b1b4600} fill="var(--fill-0, #2DBCE2)" id="Vector_63" opacity="0.6" />
          <path d={svgPaths.p3f60b470} fill="var(--fill-0, #2DBCE2)" id="Vector_64" />
          <path d={svgPaths.p21161b00} fill="var(--fill-0, #2DBCE2)" id="Vector_65" />
          <path d={svgPaths.p29ed9400} fill="var(--fill-0, #2DBCE2)" id="Vector_66" opacity="0.3" />
          <path d={svgPaths.p23721400} fill="var(--fill-0, #2DBCE2)" id="Vector_67" opacity="0.6" />
          <path d={svgPaths.p18e13680} fill="var(--fill-0, #2DBCE2)" id="Vector_68" />
          <path d={svgPaths.p25540680} fill="var(--fill-0, #2DBCE2)" id="Vector_69" opacity="0.3" />
          <path d={svgPaths.p39ec1400} fill="var(--fill-0, #2DBCE2)" id="Vector_70" />
          <path d={svgPaths.p31599b80} fill="var(--fill-0, #2DBCE2)" id="Vector_71" opacity="0.3" />
          <path d={svgPaths.p1f001c00} fill="var(--fill-0, #2DBCE2)" id="Vector_72" opacity="0.3" />
          <path d={svgPaths.p16e4b070} fill="var(--fill-0, #2DBCE2)" id="Vector_73" opacity="0.3" />
          <path d={svgPaths.p3c40d000} fill="var(--fill-0, #2DBCE2)" id="Vector_74" />
          <path d={svgPaths.p205e2100} fill="var(--fill-0, #2DBCE2)" id="Vector_75" opacity="0.6" />
          <path d={svgPaths.p1f2cd480} fill="var(--fill-0, #2DBCE2)" id="Vector_76" opacity="0.6" />
          <path d={svgPaths.p10c64000} fill="var(--fill-0, #2DBCE2)" id="Vector_77" opacity="0.6" />
          <path d={svgPaths.p214390c0} fill="var(--fill-0, #2DBCE2)" id="Vector_78" />
          <path d={svgPaths.pc03ec00} fill="var(--fill-0, #2DBCE2)" id="Vector_79" />
          <path d={svgPaths.p34f25ef0} fill="var(--fill-0, #2DBCE2)" id="Vector_80" opacity="0.6" />
          <path d={svgPaths.p17bdaf00} fill="var(--fill-0, #2DBCE2)" id="Vector_81" />
          <path d={svgPaths.p30734180} fill="var(--fill-0, #2DBCE2)" id="Vector_82" opacity="0.6" />
          <path d={svgPaths.p3709ee40} fill="var(--fill-0, #2DBCE2)" id="Vector_83" opacity="0.3" />
          <path d={svgPaths.p5758980} fill="var(--fill-0, #2DBCE2)" id="Vector_84" />
          <path d={svgPaths.p64d9800} fill="var(--fill-0, #2DBCE2)" id="Vector_85" opacity="0.6" />
          <path d={svgPaths.p33d16500} fill="var(--fill-0, #2DBCE2)" id="Vector_86" opacity="0.6" />
          <path d={svgPaths.p37dcab80} fill="var(--fill-0, #2DBCE2)" id="Vector_87" opacity="0.3" />
          <path d={svgPaths.p1c1abc0} fill="var(--fill-0, #2DBCE2)" id="Vector_88" opacity="0.3" />
          <path d={svgPaths.p9fe0d80} fill="var(--fill-0, #2DBCE2)" id="Vector_89" />
          <path d={svgPaths.pee10600} fill="var(--fill-0, #2DBCE2)" id="Vector_90" opacity="0.6" />
          <path d={svgPaths.p23ef3c00} fill="var(--fill-0, #2DBCE2)" id="Vector_91" />
          <path d={svgPaths.pa61c7f0} fill="var(--fill-0, #2DBCE2)" id="Vector_92" opacity="0.6" />
          <path d={svgPaths.pdd7f780} fill="var(--fill-0, #2DBCE2)" id="Vector_93" opacity="0.6" />
          <path d={svgPaths.p266f1780} fill="var(--fill-0, #2DBCE2)" id="Vector_94" opacity="0.6" />
          <path d={svgPaths.p2a073700} fill="var(--fill-0, #2DBCE2)" id="Vector_95" opacity="0.6" />
          <path d={svgPaths.p2d272180} fill="var(--fill-0, #2DBCE2)" id="Vector_96" />
          <path d={svgPaths.p3ce33800} fill="var(--fill-0, #2DBCE2)" id="Vector_97" />
          <path d={svgPaths.p173afd00} fill="var(--fill-0, #2DBCE2)" id="Vector_98" />
          <path d={svgPaths.p2493ff80} fill="var(--fill-0, #2DBCE2)" id="Vector_99" opacity="0.6" />
          <path d={svgPaths.p2e7c6f80} fill="var(--fill-0, #2DBCE2)" id="Vector_100" />
          <path d={svgPaths.p322f5300} fill="var(--fill-0, #2DBCE2)" id="Vector_101" opacity="0.6" />
          <path d={svgPaths.p17b58700} fill="var(--fill-0, #2DBCE2)" id="Vector_102" opacity="0.3" />
          <path d={svgPaths.p1d1f3b00} fill="var(--fill-0, #2DBCE2)" id="Vector_103" opacity="0.3" />
          <path d={svgPaths.p3ec20500} fill="var(--fill-0, #2DBCE2)" id="Vector_104" opacity="0.6" />
          <path d={svgPaths.p25680100} fill="var(--fill-0, #2DBCE2)" id="Vector_105" opacity="0.6" />
          <path d={svgPaths.p18172d70} fill="var(--fill-0, #2DBCE2)" id="Vector_106" opacity="0.6" />
          <path d={svgPaths.p34f50400} fill="var(--fill-0, #2DBCE2)" id="Vector_107" opacity="0.6" />
          <path d={svgPaths.p229ae430} fill="var(--fill-0, #2DBCE2)" id="Vector_108" />
          <path d={svgPaths.pb3b7300} fill="var(--fill-0, #2DBCE2)" id="Vector_109" opacity="0.3" />
          <path d={svgPaths.p6d92b00} fill="var(--fill-0, #2DBCE2)" id="Vector_110" opacity="0.3" />
          <path d={svgPaths.p27549800} fill="var(--fill-0, #2DBCE2)" id="Vector_111" opacity="0.6" />
          <path d={svgPaths.p13e9dc00} fill="var(--fill-0, #2DBCE2)" id="Vector_112" opacity="0.6" />
          <path d={svgPaths.p31a42600} fill="var(--fill-0, #2DBCE2)" id="Vector_113" opacity="0.6" />
          <path d={svgPaths.p2ee37bc0} fill="var(--fill-0, #2DBCE2)" id="Vector_114" opacity="0.6" />
          <path d={svgPaths.p87745f0} fill="var(--fill-0, #2DBCE2)" id="Vector_115" opacity="0.3" />
          <path d={svgPaths.p35f6e300} fill="var(--fill-0, #2DBCE2)" id="Vector_116" opacity="0.6" />
          <path d={svgPaths.p28b50f00} fill="var(--fill-0, #2DBCE2)" id="Vector_117" />
          <path d={svgPaths.p12959b00} fill="var(--fill-0, #2DBCE2)" id="Vector_118" />
          <path d={svgPaths.p3586d980} fill="var(--fill-0, #2DBCE2)" id="Vector_119" />
          <path d={svgPaths.p165ec300} fill="var(--fill-0, #2DBCE2)" id="Vector_120" />
          <path d={svgPaths.p27a4b7c0} fill="var(--fill-0, #2DBCE2)" id="Vector_121" />
          <path d={svgPaths.p2d0c8200} fill="var(--fill-0, #2DBCE2)" id="Vector_122" />
          <path d={svgPaths.p2a3ec800} fill="var(--fill-0, #2DBCE2)" id="Vector_123" opacity="0.3" />
          <path d={svgPaths.p3ace680} fill="var(--fill-0, #2DBCE2)" id="Vector_124" opacity="0.3" />
          <path d={svgPaths.p8c61500} fill="var(--fill-0, #2DBCE2)" id="Vector_125" />
          <path d={svgPaths.pee4a180} fill="var(--fill-0, #2DBCE2)" id="Vector_126" opacity="0.6" />
          <path d={svgPaths.p13750300} fill="var(--fill-0, #2DBCE2)" id="Vector_127" opacity="0.6" />
          <path d={svgPaths.p15b47280} fill="var(--fill-0, #2DBCE2)" id="Vector_128" opacity="0.3" />
          <path d={svgPaths.p11e1ee80} fill="var(--fill-0, #2DBCE2)" id="Vector_129" opacity="0.3" />
          <path d={svgPaths.p36dbb430} fill="var(--fill-0, #2DBCE2)" id="Vector_130" opacity="0.3" />
          <path d={svgPaths.pf9b5d00} fill="var(--fill-0, #2DBCE2)" id="Vector_131" opacity="0.3" />
          <path d={svgPaths.p18edb900} fill="var(--fill-0, #2DBCE2)" id="Vector_132" opacity="0.6" />
          <path d={svgPaths.p3c5fa600} fill="var(--fill-0, #2DBCE2)" id="Vector_133" opacity="0.3" />
          <path d={svgPaths.p3508da00} fill="var(--fill-0, #2DBCE2)" id="Vector_134" opacity="0.6" />
          <path d={svgPaths.p788ee00} fill="var(--fill-0, #2DBCE2)" id="Vector_135" />
          <path d={svgPaths.p30ada300} fill="var(--fill-0, #2DBCE2)" id="Vector_136" opacity="0.6" />
          <path d={svgPaths.p38c28300} fill="var(--fill-0, #2DBCE2)" id="Vector_137" opacity="0.3" />
          <path d={svgPaths.p2ed80c00} fill="var(--fill-0, #2DBCE2)" id="Vector_138" />
          <path d={svgPaths.p1091ef00} fill="var(--fill-0, #2DBCE2)" id="Vector_139" opacity="0.6" />
          <path d={svgPaths.p36154010} fill="var(--fill-0, #2DBCE2)" id="Vector_140" />
          <path d={svgPaths.p32214b00} fill="var(--fill-0, #2DBCE2)" id="Vector_141" opacity="0.6" />
          <path d={svgPaths.p18a9def2} fill="var(--fill-0, #2DBCE2)" id="Vector_142" />
          <path d={svgPaths.p39dcf000} fill="var(--fill-0, #2DBCE2)" id="Vector_143" />
          <path d={svgPaths.p5195800} fill="var(--fill-0, #2DBCE2)" id="Vector_144" opacity="0.3" />
          <path d={svgPaths.p9f0e00} fill="var(--fill-0, #2DBCE2)" id="Vector_145" />
          <path d={svgPaths.p2389c480} fill="var(--fill-0, #2DBCE2)" id="Vector_146" />
          <path d={svgPaths.p386a380} fill="var(--fill-0, #2DBCE2)" id="Vector_147" opacity="0.3" />
          <path d={svgPaths.p2a7f5c40} fill="var(--fill-0, #2DBCE2)" id="Vector_148" />
          <path d={svgPaths.p16fab700} fill="var(--fill-0, #2DBCE2)" id="Vector_149" />
          <path d={svgPaths.pba6ff00} fill="var(--fill-0, #2DBCE2)" id="Vector_150" opacity="0.6" />
          <path d={svgPaths.p2e205900} fill="var(--fill-0, #2DBCE2)" id="Vector_151" opacity="0.3" />
          <path d={svgPaths.p2a6ef80} fill="var(--fill-0, #2DBCE2)" id="Vector_152" opacity="0.3" />
          <path d={svgPaths.p410f9a0} fill="var(--fill-0, #2DBCE2)" id="Vector_153" />
          <path d={svgPaths.pcf11800} fill="var(--fill-0, #2DBCE2)" id="Vector_154" />
          <path d={svgPaths.p3a0d0580} fill="var(--fill-0, #2DBCE2)" id="Vector_155" opacity="0.3" />
          <path d={svgPaths.p2e72b100} fill="var(--fill-0, #2DBCE2)" id="Vector_156" opacity="0.3" />
          <path d={svgPaths.p3bc54400} fill="var(--fill-0, #2DBCE2)" id="Vector_157" opacity="0.6" />
          <path d={svgPaths.p3e860600} fill="var(--fill-0, #2DBCE2)" id="Vector_158" opacity="0.3" />
          <path d={svgPaths.p23fb1880} fill="var(--fill-0, #2DBCE2)" id="Vector_159" opacity="0.3" />
          <path d={svgPaths.p16d09b00} fill="var(--fill-0, #2DBCE2)" id="Vector_160" opacity="0.3" />
          <path d={svgPaths.p3fda7880} fill="var(--fill-0, #2DBCE2)" id="Vector_161" />
          <path d={svgPaths.p187ab980} fill="var(--fill-0, #2DBCE2)" id="Vector_162" />
          <path d={svgPaths.p3507470} fill="var(--fill-0, #2DBCE2)" id="Vector_163" />
          <path d={svgPaths.p1157800} fill="var(--fill-0, #2DBCE2)" id="Vector_164" opacity="0.6" />
          <path d={svgPaths.p3c2d800} fill="var(--fill-0, #2DBCE2)" id="Vector_165" opacity="0.6" />
          <path d={svgPaths.p13f09f80} fill="var(--fill-0, #2DBCE2)" id="Vector_166" opacity="0.3" />
          <path d={svgPaths.p299bd500} fill="var(--fill-0, #2DBCE2)" id="Vector_167" />
          <path d={svgPaths.p3a2da900} fill="var(--fill-0, #2DBCE2)" id="Vector_168" opacity="0.3" />
          <path d={svgPaths.p13957080} fill="var(--fill-0, #2DBCE2)" id="Vector_169" />
          <path d={svgPaths.p356ab200} fill="var(--fill-0, #2DBCE2)" id="Vector_170" opacity="0.6" />
          <path d={svgPaths.p27eb8080} fill="var(--fill-0, #2DBCE2)" id="Vector_171" />
          <path d={svgPaths.p2e21af70} fill="var(--fill-0, #2DBCE2)" id="Vector_172" opacity="0.3" />
          <path d={svgPaths.p1e3e9180} fill="var(--fill-0, #2DBCE2)" id="Vector_173" opacity="0.6" />
          <path d={svgPaths.p11a45280} fill="var(--fill-0, #2DBCE2)" id="Vector_174" opacity="0.3" />
          <path d={svgPaths.p30475f40} fill="var(--fill-0, #2DBCE2)" id="Vector_175" opacity="0.6" />
          <path d={svgPaths.p3406b200} fill="var(--fill-0, #2DBCE2)" id="Vector_176" opacity="0.3" />
          <path d={svgPaths.p15d46f00} fill="var(--fill-0, #2DBCE2)" id="Vector_177" opacity="0.6" />
          <path d={svgPaths.p38d05900} fill="var(--fill-0, #2DBCE2)" id="Vector_178" opacity="0.3" />
          <path d={svgPaths.p3d091f80} fill="var(--fill-0, #2DBCE2)" id="Vector_179" opacity="0.3" />
          <path d={svgPaths.p5408e80} fill="var(--fill-0, #2DBCE2)" id="Vector_180" opacity="0.3" />
          <path d={svgPaths.p387dd3f0} fill="var(--fill-0, #2DBCE2)" id="Vector_181" />
          <path d={svgPaths.p18b5980} fill="var(--fill-0, #2DBCE2)" id="Vector_182" opacity="0.6" />
          <path d={svgPaths.p3d6c700} fill="var(--fill-0, #2DBCE2)" id="Vector_183" opacity="0.3" />
          <path d={svgPaths.p18aa7e00} fill="var(--fill-0, #2DBCE2)" id="Vector_184" opacity="0.3" />
          <path d={svgPaths.p3e606280} fill="var(--fill-0, #2DBCE2)" id="Vector_185" />
          <path d={svgPaths.p324f1f80} fill="var(--fill-0, #2DBCE2)" id="Vector_186" />
          <path d={svgPaths.pc375300} fill="var(--fill-0, #2DBCE2)" id="Vector_187" />
          <path d={svgPaths.p2ca42c00} fill="var(--fill-0, #2DBCE2)" id="Vector_188" />
          <path d={svgPaths.p51603f2} fill="var(--fill-0, #2DBCE2)" id="Vector_189" opacity="0.6" />
          <path d={svgPaths.p3d702300} fill="var(--fill-0, #2DBCE2)" id="Vector_190" opacity="0.3" />
          <path d={svgPaths.p33783f80} fill="var(--fill-0, #2DBCE2)" id="Vector_191" opacity="0.6" />
          <path d={svgPaths.p28025500} fill="var(--fill-0, #2DBCE2)" id="Vector_192" opacity="0.3" />
          <path d={svgPaths.p1ba5c40} fill="var(--fill-0, #2DBCE2)" id="Vector_193" opacity="0.3" />
          <path d={svgPaths.p16577000} fill="var(--fill-0, #2DBCE2)" id="Vector_194" opacity="0.3" />
          <path d={svgPaths.p318ee400} fill="var(--fill-0, #2DBCE2)" id="Vector_195" opacity="0.6" />
          <path d={svgPaths.p11620500} fill="var(--fill-0, #2DBCE2)" id="Vector_196" opacity="0.3" />
          <path d={svgPaths.p20150100} fill="var(--fill-0, #2DBCE2)" id="Vector_197" opacity="0.6" />
          <path d={svgPaths.p1fe00270} fill="var(--fill-0, #2DBCE2)" id="Vector_198" opacity="0.6" />
          <path d={svgPaths.p23c71c00} fill="var(--fill-0, #2DBCE2)" id="Vector_199" />
          <path d={svgPaths.p3815a980} fill="var(--fill-0, #2DBCE2)" id="Vector_200" opacity="0.3" />
          <path d={svgPaths.p70ddf00} fill="var(--fill-0, #2DBCE2)" id="Vector_201" />
          <path d={svgPaths.p16f6740} fill="var(--fill-0, #2DBCE2)" id="Vector_202" opacity="0.6" />
          <path d={svgPaths.pa0df780} fill="var(--fill-0, #2DBCE2)" id="Vector_203" />
          <path d={svgPaths.p1619d880} fill="var(--fill-0, #2DBCE2)" id="Vector_204" opacity="0.3" />
          <path d={svgPaths.p38a140f0} fill="var(--fill-0, #2DBCE2)" id="Vector_205" opacity="0.3" />
          <path d={svgPaths.p248baa80} fill="var(--fill-0, #2DBCE2)" id="Vector_206" />
          <path d={svgPaths.p1c507500} fill="var(--fill-0, #2DBCE2)" id="Vector_207" opacity="0.3" />
          <path d={svgPaths.p338800} fill="var(--fill-0, #2DBCE2)" id="Vector_208" opacity="0.3" />
          <path d={svgPaths.p3ab04580} fill="var(--fill-0, #2DBCE2)" id="Vector_209" />
          <path d={svgPaths.p1800c724} fill="var(--fill-0, #2DBCE2)" id="Vector_210" opacity="0.6" />
          <path d={svgPaths.pb734300} fill="var(--fill-0, #2DBCE2)" id="Vector_211" opacity="0.6" />
          <path d={svgPaths.p3343d651} fill="var(--fill-0, #2DBCE2)" id="Vector_212" />
          <path d={svgPaths.p2df3600} fill="var(--fill-0, #2DBCE2)" id="Vector_213" opacity="0.3" />
          <path d={svgPaths.pf16d3f2} fill="var(--fill-0, #2DBCE2)" id="Vector_214" opacity="0.3" />
          <path d={svgPaths.p1da86100} fill="var(--fill-0, #2DBCE2)" id="Vector_215" opacity="0.6" />
          <path d={svgPaths.p2b6e4680} fill="var(--fill-0, #2DBCE2)" id="Vector_216" opacity="0.6" />
          <path d={svgPaths.p33970a00} fill="var(--fill-0, #2DBCE2)" id="Vector_217" opacity="0.6" />
          <path d={svgPaths.p14c4fe00} fill="var(--fill-0, #2DBCE2)" id="Vector_218" opacity="0.6" />
          <path d={svgPaths.p2e8ca600} fill="var(--fill-0, #2DBCE2)" id="Vector_219" opacity="0.3" />
          <path d={svgPaths.p278fba40} fill="var(--fill-0, #2DBCE2)" id="Vector_220" opacity="0.3" />
          <path d={svgPaths.p294d4cf0} fill="var(--fill-0, #2DBCE2)" id="Vector_221" />
          <path d={svgPaths.p1c91f980} fill="var(--fill-0, #2DBCE2)" id="Vector_222" opacity="0.6" />
          <path d={svgPaths.p3a647300} fill="var(--fill-0, #2DBCE2)" id="Vector_223" opacity="0.6" />
          <path d={svgPaths.pf449e80} fill="var(--fill-0, #2DBCE2)" id="Vector_224" opacity="0.6" />
          <path d={svgPaths.p2c600100} fill="var(--fill-0, #2DBCE2)" id="Vector_225" />
          <path d={svgPaths.pef12e92} fill="var(--fill-0, #2DBCE2)" id="Vector_226" opacity="0.3" />
          <path d={svgPaths.p37b22a00} fill="var(--fill-0, #2DBCE2)" id="Vector_227" />
          <path d={svgPaths.p394f0800} fill="var(--fill-0, #2DBCE2)" id="Vector_228" opacity="0.3" />
          <path d={svgPaths.p188a8e00} fill="var(--fill-0, #2DBCE2)" id="Vector_229" opacity="0.3" />
          <path d={svgPaths.pa702680} fill="var(--fill-0, #2DBCE2)" id="Vector_230" opacity="0.6" />
          <path d={svgPaths.pc8f4b80} fill="var(--fill-0, #2DBCE2)" id="Vector_231" opacity="0.3" />
          <path d={svgPaths.p31362800} fill="var(--fill-0, #2DBCE2)" id="Vector_232" opacity="0.6" />
          <path d={svgPaths.p20efef80} fill="var(--fill-0, #2DBCE2)" id="Vector_233" opacity="0.6" />
          <path d={svgPaths.p277bd500} fill="var(--fill-0, #2DBCE2)" id="Vector_234" opacity="0.6" />
          <path d={svgPaths.p23bf4980} fill="var(--fill-0, #2DBCE2)" id="Vector_235" opacity="0.3" />
          <path d={svgPaths.p878ca00} fill="var(--fill-0, #2DBCE2)" id="Vector_236" />
          <path d={svgPaths.pf5146a0} fill="var(--fill-0, #2DBCE2)" id="Vector_237" opacity="0.3" />
          <path d={svgPaths.p1ac50700} fill="var(--fill-0, #2DBCE2)" id="Vector_238" opacity="0.3" />
          <path d={svgPaths.p23e23200} fill="var(--fill-0, #2DBCE2)" id="Vector_239" />
          <path d={svgPaths.p268e900} fill="var(--fill-0, #2DBCE2)" id="Vector_240" opacity="0.3" />
          <path d={svgPaths.p26da5480} fill="var(--fill-0, #2DBCE2)" id="Vector_241" />
          <path d={svgPaths.pe887900} fill="var(--fill-0, #2DBCE2)" id="Vector_242" opacity="0.6" />
          <path d={svgPaths.p706d880} fill="var(--fill-0, #2DBCE2)" id="Vector_243" opacity="0.3" />
          <path d={svgPaths.p19f05400} fill="var(--fill-0, #2DBCE2)" id="Vector_244" />
          <path d={svgPaths.p1ec21f00} fill="var(--fill-0, #2DBCE2)" id="Vector_245" opacity="0.6" />
          <path d={svgPaths.p3da99a00} fill="var(--fill-0, #2DBCE2)" id="Vector_246" opacity="0.3" />
          <path d={svgPaths.p351fbf00} fill="var(--fill-0, #2DBCE2)" id="Vector_247" />
          <path d={svgPaths.p6331580} fill="var(--fill-0, #2DBCE2)" id="Vector_248" opacity="0.6" />
          <path d={svgPaths.p8fe7b00} fill="var(--fill-0, #2DBCE2)" id="Vector_249" opacity="0.3" />
          <path d={svgPaths.p28bb0500} fill="var(--fill-0, #2DBCE2)" id="Vector_250" opacity="0.6" />
          <path d={svgPaths.p1e2d33f0} fill="var(--fill-0, #2DBCE2)" id="Vector_251" />
          <path d={svgPaths.p2363fd00} fill="var(--fill-0, #2DBCE2)" id="Vector_252" opacity="0.6" />
          <path d={svgPaths.p3006f8c0} fill="var(--fill-0, #2DBCE2)" id="Vector_253" opacity="0.6" />
          <path d={svgPaths.p18c66880} fill="var(--fill-0, #2DBCE2)" id="Vector_254" opacity="0.6" />
          <path d={svgPaths.p39986e00} fill="var(--fill-0, #2DBCE2)" id="Vector_255" />
          <path d={svgPaths.p9ca08f0} fill="var(--fill-0, #2DBCE2)" id="Vector_256" />
          <path d={svgPaths.p129e81f0} fill="var(--fill-0, #2DBCE2)" id="Vector_257" opacity="0.6" />
          <path d={svgPaths.pcd14d70} fill="var(--fill-0, #2DBCE2)" id="Vector_258" opacity="0.6" />
          <path d={svgPaths.p3d71fa00} fill="var(--fill-0, #2DBCE2)" id="Vector_259" opacity="0.6" />
          <path d={svgPaths.p1414cf00} fill="var(--fill-0, #2DBCE2)" id="Vector_260" opacity="0.6" />
          <path d={svgPaths.p23534a00} fill="var(--fill-0, #2DBCE2)" id="Vector_261" opacity="0.3" />
          <path d={svgPaths.p125f2780} fill="var(--fill-0, #2DBCE2)" id="Vector_262" opacity="0.6" />
          <path d={svgPaths.p2a6b2980} fill="var(--fill-0, #2DBCE2)" id="Vector_263" />
          <path d={svgPaths.p2327f400} fill="var(--fill-0, #2DBCE2)" id="Vector_264" opacity="0.3" />
          <path d={svgPaths.p3644fc00} fill="var(--fill-0, #2DBCE2)" id="Vector_265" />
          <path d={svgPaths.p11b71900} fill="var(--fill-0, #2DBCE2)" id="Vector_266" />
          <path d={svgPaths.pa7ce680} fill="var(--fill-0, #2DBCE2)" id="Vector_267" opacity="0.6" />
          <path d={svgPaths.p2519800} fill="var(--fill-0, #2DBCE2)" id="Vector_268" opacity="0.6" />
          <path d={svgPaths.pfa60800} fill="var(--fill-0, #2DBCE2)" id="Vector_269" />
          <path d={svgPaths.p16ad2f80} fill="var(--fill-0, #2DBCE2)" id="Vector_270" opacity="0.3" />
          <path d={svgPaths.p18e06a00} fill="var(--fill-0, #2DBCE2)" id="Vector_271" opacity="0.6" />
          <path d={svgPaths.p349b2680} fill="var(--fill-0, #2DBCE2)" id="Vector_272" opacity="0.3" />
          <path d={svgPaths.p39cc7400} fill="var(--fill-0, #2DBCE2)" id="Vector_273" />
          <path d={svgPaths.p3cfdf480} fill="var(--fill-0, #2DBCE2)" id="Vector_274" opacity="0.6" />
          <path d={svgPaths.p1a67dc00} fill="var(--fill-0, #2DBCE2)" id="Vector_275" opacity="0.6" />
          <path d={svgPaths.p30bdf4f2} fill="var(--fill-0, #2DBCE2)" id="Vector_276" />
          <path d={svgPaths.p18808c00} fill="var(--fill-0, #2DBCE2)" id="Vector_277" />
          <path d={svgPaths.p3fca0600} fill="var(--fill-0, #2DBCE2)" id="Vector_278" opacity="0.3" />
          <path d={svgPaths.p38a050f0} fill="var(--fill-0, #2DBCE2)" id="Vector_279" opacity="0.3" />
          <path d={svgPaths.p2e97b980} fill="var(--fill-0, #2DBCE2)" id="Vector_280" opacity="0.3" />
          <path d={svgPaths.pd2fce00} fill="var(--fill-0, #2DBCE2)" id="Vector_281" />
          <path d={svgPaths.p1de0ea72} fill="var(--fill-0, #2DBCE2)" id="Vector_282" opacity="0.6" />
          <path d={svgPaths.pea2c00} fill="var(--fill-0, #2DBCE2)" id="Vector_283" />
          <path d={svgPaths.p2fd73780} fill="var(--fill-0, #2DBCE2)" id="Vector_284" opacity="0.6" />
          <path d={svgPaths.p1afad00} fill="var(--fill-0, #2DBCE2)" id="Vector_285" opacity="0.6" />
          <path d={svgPaths.p335bf400} fill="var(--fill-0, #2DBCE2)" id="Vector_286" opacity="0.3" />
          <path d={svgPaths.p1cee100} fill="var(--fill-0, #2DBCE2)" id="Vector_287" />
          <path d={svgPaths.p3d72b780} fill="var(--fill-0, #2DBCE2)" id="Vector_288" opacity="0.3" />
          <path d={svgPaths.p37795cf0} fill="var(--fill-0, #2DBCE2)" id="Vector_289" opacity="0.3" />
          <path d={svgPaths.p8b47100} fill="var(--fill-0, #2DBCE2)" id="Vector_290" />
          <path d={svgPaths.p2d4a1980} fill="var(--fill-0, #2DBCE2)" id="Vector_291" opacity="0.3" />
          <path d={svgPaths.p15006100} fill="var(--fill-0, #2DBCE2)" id="Vector_292" opacity="0.3" />
          <path d={svgPaths.p3fb37f80} fill="var(--fill-0, #2DBCE2)" id="Vector_293" />
          <path d={svgPaths.p34bbeb80} fill="var(--fill-0, #2DBCE2)" id="Vector_294" />
          <path d={svgPaths.p18448d80} fill="var(--fill-0, #2DBCE2)" id="Vector_295" opacity="0.6" />
          <path d={svgPaths.p12150900} fill="var(--fill-0, #2DBCE2)" id="Vector_296" opacity="0.3" />
          <path d={svgPaths.p29caee80} fill="var(--fill-0, #2DBCE2)" id="Vector_297" opacity="0.6" />
          <path d={svgPaths.p17278600} fill="var(--fill-0, #2DBCE2)" id="Vector_298" />
          <path d={svgPaths.p24c5d700} fill="var(--fill-0, #2DBCE2)" id="Vector_299" opacity="0.3" />
          <path d={svgPaths.p381036f0} fill="var(--fill-0, #2DBCE2)" id="Vector_300" opacity="0.6" />
          <path d={svgPaths.p36467180} fill="var(--fill-0, #2DBCE2)" id="Vector_301" opacity="0.6" />
          <path d={svgPaths.p13f03380} fill="var(--fill-0, #2DBCE2)" id="Vector_302" opacity="0.3" />
          <path d={svgPaths.p944a7c0} fill="var(--fill-0, #2DBCE2)" id="Vector_303" opacity="0.6" />
          <path d={svgPaths.p338de400} fill="var(--fill-0, #2DBCE2)" id="Vector_304" opacity="0.6" />
          <path d={svgPaths.p30186800} fill="var(--fill-0, #2DBCE2)" id="Vector_305" opacity="0.3" />
          <path d={svgPaths.p35f0fc40} fill="var(--fill-0, #2DBCE2)" id="Vector_306" />
          <path d={svgPaths.p390fbe80} fill="var(--fill-0, #2DBCE2)" id="Vector_307" opacity="0.3" />
          <path d={svgPaths.p3b85a800} fill="var(--fill-0, #2DBCE2)" id="Vector_308" />
          <path d={svgPaths.p20d31680} fill="var(--fill-0, #2DBCE2)" id="Vector_309" opacity="0.6" />
          <path d={svgPaths.p140f6100} fill="var(--fill-0, #2DBCE2)" id="Vector_310" />
          <path d={svgPaths.p266bd80} fill="var(--fill-0, #2DBCE2)" id="Vector_311" opacity="0.3" />
          <path d={svgPaths.p11d2d200} fill="var(--fill-0, #2DBCE2)" id="Vector_312" opacity="0.6" />
          <path d={svgPaths.p3b86d100} fill="var(--fill-0, #2DBCE2)" id="Vector_313" opacity="0.6" />
          <path d={svgPaths.p287b5000} fill="var(--fill-0, #2DBCE2)" id="Vector_314" />
          <path d={svgPaths.p4306100} fill="var(--fill-0, #2DBCE2)" id="Vector_315" opacity="0.6" />
          <path d={svgPaths.p31a3d180} fill="var(--fill-0, #2DBCE2)" id="Vector_316" opacity="0.3" />
          <path d={svgPaths.p28a50600} fill="var(--fill-0, #2DBCE2)" id="Vector_317" opacity="0.6" />
          <path d={svgPaths.p3e380e80} fill="var(--fill-0, #2DBCE2)" id="Vector_318" opacity="0.3" />
          <path d={svgPaths.p1aee0e00} fill="var(--fill-0, #2DBCE2)" id="Vector_319" opacity="0.6" />
          <path d={svgPaths.p2134a500} fill="var(--fill-0, #2DBCE2)" id="Vector_320" opacity="0.3" />
          <path d={svgPaths.pb28a400} fill="var(--fill-0, #2DBCE2)" id="Vector_321" opacity="0.3" />
          <path d={svgPaths.p1938e300} fill="var(--fill-0, #2DBCE2)" id="Vector_322" />
          <path d={svgPaths.p33368680} fill="var(--fill-0, #2DBCE2)" id="Vector_323" opacity="0.3" />
          <path d={svgPaths.p361d4f00} fill="var(--fill-0, #2DBCE2)" id="Vector_324" opacity="0.6" />
          <path d={svgPaths.p2e4944f0} fill="var(--fill-0, #2DBCE2)" id="Vector_325" opacity="0.3" />
          <path d={svgPaths.ped93b80} fill="var(--fill-0, #2DBCE2)" id="Vector_326" opacity="0.3" />
          <path d={svgPaths.p1fb93200} fill="var(--fill-0, #2DBCE2)" id="Vector_327" />
          <path d={svgPaths.p34b8fa00} fill="var(--fill-0, #2DBCE2)" id="Vector_328" opacity="0.3" />
          <path d={svgPaths.p352a3380} fill="var(--fill-0, #2DBCE2)" id="Vector_329" opacity="0.6" />
          <path d={svgPaths.p55c20c0} fill="var(--fill-0, #2DBCE2)" id="Vector_330" opacity="0.6" />
          <path d={svgPaths.p28d6e880} fill="var(--fill-0, #2DBCE2)" id="Vector_331" opacity="0.6" />
          <path d={svgPaths.p31bc1380} fill="var(--fill-0, #2DBCE2)" id="Vector_332" opacity="0.6" />
          <path d={svgPaths.p2916b500} fill="var(--fill-0, #2DBCE2)" id="Vector_333" opacity="0.3" />
          <path d={svgPaths.pca59c80} fill="var(--fill-0, #2DBCE2)" id="Vector_334" opacity="0.6" />
          <path d={svgPaths.p233f1970} fill="var(--fill-0, #2DBCE2)" id="Vector_335" opacity="0.3" />
          <path d={svgPaths.p2bb65b00} fill="var(--fill-0, #2DBCE2)" id="Vector_336" opacity="0.3" />
          <path d={svgPaths.p22842e00} fill="var(--fill-0, #2DBCE2)" id="Vector_337" opacity="0.3" />
          <path d={svgPaths.p3355dd80} fill="var(--fill-0, #2DBCE2)" id="Vector_338" opacity="0.6" />
          <path d={svgPaths.p24da1d00} fill="var(--fill-0, #2DBCE2)" id="Vector_339" opacity="0.6" />
          <path d={svgPaths.p3f7d3080} fill="var(--fill-0, #2DBCE2)" id="Vector_340" />
          <path d={svgPaths.p3076e180} fill="var(--fill-0, #2DBCE2)" id="Vector_341" opacity="0.3" />
          <path d={svgPaths.pc7da3f0} fill="var(--fill-0, #2DBCE2)" id="Vector_342" opacity="0.6" />
          <path d={svgPaths.p1f5dd600} fill="var(--fill-0, #2DBCE2)" id="Vector_343" opacity="0.6" />
          <path d={svgPaths.pd3ead80} fill="var(--fill-0, #2DBCE2)" id="Vector_344" />
          <path d={svgPaths.p1e53e980} fill="var(--fill-0, #2DBCE2)" id="Vector_345" />
          <path d={svgPaths.p3aaed80} fill="var(--fill-0, #2DBCE2)" id="Vector_346" />
          <path d={svgPaths.pe609a80} fill="var(--fill-0, #2DBCE2)" id="Vector_347" opacity="0.3" />
          <path d={svgPaths.p25f57ff0} fill="var(--fill-0, #2DBCE2)" id="Vector_348" />
          <path d={svgPaths.p248b2d00} fill="var(--fill-0, #2DBCE2)" id="Vector_349" opacity="0.6" />
          <path d={svgPaths.p2b197ff0} fill="var(--fill-0, #2DBCE2)" id="Vector_350" opacity="0.3" />
          <path d={svgPaths.p13589800} fill="var(--fill-0, #2DBCE2)" id="Vector_351" />
          <path d={svgPaths.p12472080} fill="var(--fill-0, #2DBCE2)" id="Vector_352" opacity="0.3" />
          <path d={svgPaths.p1b12da00} fill="var(--fill-0, #2DBCE2)" id="Vector_353" opacity="0.3" />
          <path d={svgPaths.p2504e200} fill="var(--fill-0, #2DBCE2)" id="Vector_354" />
          <path d={svgPaths.p25a8e00} fill="var(--fill-0, #2DBCE2)" id="Vector_355" />
          <path d={svgPaths.p21650400} fill="var(--fill-0, #2DBCE2)" id="Vector_356" />
          <path d={svgPaths.p22ae8f00} fill="var(--fill-0, #2DBCE2)" id="Vector_357" opacity="0.6" />
          <path d={svgPaths.p856c5f0} fill="var(--fill-0, #2DBCE2)" id="Vector_358" opacity="0.3" />
          <path d={svgPaths.p2e85a140} fill="var(--fill-0, #2DBCE2)" id="Vector_359" />
          <path d={svgPaths.p33838ec0} fill="var(--fill-0, #2DBCE2)" id="Vector_360" opacity="0.3" />
          <path d={svgPaths.p10353110} fill="var(--fill-0, #2DBCE2)" id="Vector_361" opacity="0.6" />
          <path d={svgPaths.p11a91c80} fill="var(--fill-0, #2DBCE2)" id="Vector_362" opacity="0.3" />
          <path d={svgPaths.p10499100} fill="var(--fill-0, #2DBCE2)" id="Vector_363" opacity="0.6" />
          <path d={svgPaths.p2c72780} fill="var(--fill-0, #2DBCE2)" id="Vector_364" opacity="0.6" />
          <path d={svgPaths.p22c8ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_365" opacity="0.6" />
          <path d={svgPaths.p19eced80} fill="var(--fill-0, #2DBCE2)" id="Vector_366" opacity="0.3" />
          <path d={svgPaths.p2d16e200} fill="var(--fill-0, #2DBCE2)" id="Vector_367" opacity="0.3" />
          <path d={svgPaths.pf166800} fill="var(--fill-0, #2DBCE2)" id="Vector_368" opacity="0.6" />
          <path d={svgPaths.p141d7080} fill="var(--fill-0, #2DBCE2)" id="Vector_369" opacity="0.6" />
          <path d={svgPaths.p2f496a00} fill="var(--fill-0, #2DBCE2)" id="Vector_370" opacity="0.6" />
          <path d={svgPaths.p138b8900} fill="var(--fill-0, #2DBCE2)" id="Vector_371" />
          <path d={svgPaths.p1ba4b500} fill="var(--fill-0, #2DBCE2)" id="Vector_372" opacity="0.3" />
          <path d={svgPaths.p2cb441f2} fill="var(--fill-0, #2DBCE2)" id="Vector_373" opacity="0.3" />
          <path d={svgPaths.p3a114280} fill="var(--fill-0, #2DBCE2)" id="Vector_374" opacity="0.6" />
          <path d={svgPaths.p2d3b7b00} fill="var(--fill-0, #2DBCE2)" id="Vector_375" />
          <path d={svgPaths.p46b76c0} fill="var(--fill-0, #2DBCE2)" id="Vector_376" opacity="0.6" />
          <path d={svgPaths.p3ed37b20} fill="var(--fill-0, #2DBCE2)" id="Vector_377" opacity="0.3" />
          <path d={svgPaths.p2fca2200} fill="var(--fill-0, #2DBCE2)" id="Vector_378" opacity="0.3" />
          <path d={svgPaths.p31ddba80} fill="var(--fill-0, #2DBCE2)" id="Vector_379" />
          <path d={svgPaths.p3b1a4800} fill="var(--fill-0, #2DBCE2)" id="Vector_380" opacity="0.3" />
          <path d={svgPaths.p3857a180} fill="var(--fill-0, #2DBCE2)" id="Vector_381" opacity="0.6" />
          <path d={svgPaths.p3dd77200} fill="var(--fill-0, #2DBCE2)" id="Vector_382" opacity="0.3" />
          <path d={svgPaths.p23503380} fill="var(--fill-0, #2DBCE2)" id="Vector_383" opacity="0.3" />
          <path d={svgPaths.p104b0100} fill="var(--fill-0, #2DBCE2)" id="Vector_384" opacity="0.3" />
          <path d={svgPaths.p20ee3900} fill="var(--fill-0, #2DBCE2)" id="Vector_385" opacity="0.6" />
          <path d={svgPaths.pd10c800} fill="var(--fill-0, #2DBCE2)" id="Vector_386" />
          <path d={svgPaths.p1ca84f80} fill="var(--fill-0, #2DBCE2)" id="Vector_387" opacity="0.6" />
          <path d={svgPaths.p2e925300} fill="var(--fill-0, #2DBCE2)" id="Vector_388" opacity="0.3" />
          <path d={svgPaths.p3817e580} fill="var(--fill-0, #2DBCE2)" id="Vector_389" opacity="0.3" />
          <path d={svgPaths.p9f26580} fill="var(--fill-0, #2DBCE2)" id="Vector_390" />
          <path d={svgPaths.p25afd3f0} fill="var(--fill-0, #2DBCE2)" id="Vector_391" />
          <path d={svgPaths.pe9d6900} fill="var(--fill-0, #2DBCE2)" id="Vector_392" opacity="0.6" />
          <path d={svgPaths.p36a702f0} fill="var(--fill-0, #2DBCE2)" id="Vector_393" opacity="0.3" />
          <path d={svgPaths.p15a52780} fill="var(--fill-0, #2DBCE2)" id="Vector_394" opacity="0.3" />
          <path d={svgPaths.p30eab700} fill="var(--fill-0, #2DBCE2)" id="Vector_395" opacity="0.3" />
          <path d={svgPaths.p5258300} fill="var(--fill-0, #2DBCE2)" id="Vector_396" opacity="0.6" />
          <path d={svgPaths.pc0a6570} fill="var(--fill-0, #2DBCE2)" id="Vector_397" opacity="0.6" />
          <path d={svgPaths.p9c0c600} fill="var(--fill-0, #2DBCE2)" id="Vector_398" />
          <path d={svgPaths.p18e49480} fill="var(--fill-0, #2DBCE2)" id="Vector_399" opacity="0.6" />
          <path d={svgPaths.p12d1a080} fill="var(--fill-0, #2DBCE2)" id="Vector_400" opacity="0.3" />
          <path d={svgPaths.p26c9d900} fill="var(--fill-0, #2DBCE2)" id="Vector_401" opacity="0.6" />
          <path d={svgPaths.p67d2e80} fill="var(--fill-0, #2DBCE2)" id="Vector_402" />
          <path d={svgPaths.p37cf7300} fill="var(--fill-0, #2DBCE2)" id="Vector_403" opacity="0.3" />
          <path d={svgPaths.pbb24500} fill="var(--fill-0, #2DBCE2)" id="Vector_404" opacity="0.3" />
          <path d={svgPaths.p2276fd00} fill="var(--fill-0, #2DBCE2)" id="Vector_405" opacity="0.3" />
          <path d={svgPaths.p30b50240} fill="var(--fill-0, #2DBCE2)" id="Vector_406" opacity="0.3" />
          <path d={svgPaths.p34e59300} fill="var(--fill-0, #2DBCE2)" id="Vector_407" />
          <path d={svgPaths.p3c1bd900} fill="var(--fill-0, #2DBCE2)" id="Vector_408" opacity="0.6" />
          <path d={svgPaths.p1a40500} fill="var(--fill-0, #2DBCE2)" id="Vector_409" opacity="0.3" />
          <path d={svgPaths.p13ddb300} fill="var(--fill-0, #2DBCE2)" id="Vector_410" opacity="0.6" />
          <path d={svgPaths.p113a1200} fill="var(--fill-0, #2DBCE2)" id="Vector_411" opacity="0.6" />
          <path d={svgPaths.p35fd6f00} fill="var(--fill-0, #2DBCE2)" id="Vector_412" opacity="0.3" />
          <path d={svgPaths.p1d0ab800} fill="var(--fill-0, #2DBCE2)" id="Vector_413" />
          <path d={svgPaths.p3553d000} fill="var(--fill-0, #2DBCE2)" id="Vector_414" />
          <path d={svgPaths.p9f91a00} fill="var(--fill-0, #2DBCE2)" id="Vector_415" />
          <path d={svgPaths.p2e500a00} fill="var(--fill-0, #2DBCE2)" id="Vector_416" opacity="0.3" />
          <path d={svgPaths.p4c7cf00} fill="var(--fill-0, #2DBCE2)" id="Vector_417" opacity="0.6" />
          <path d={svgPaths.p11d84a00} fill="var(--fill-0, #2DBCE2)" id="Vector_418" opacity="0.6" />
          <path d={svgPaths.p23a12900} fill="var(--fill-0, #2DBCE2)" id="Vector_419" opacity="0.6" />
          <path d={svgPaths.p34651400} fill="var(--fill-0, #2DBCE2)" id="Vector_420" />
          <path d={svgPaths.p304143c0} fill="var(--fill-0, #2DBCE2)" id="Vector_421" opacity="0.3" />
          <path d={svgPaths.p3515ac00} fill="var(--fill-0, #2DBCE2)" id="Vector_422" />
          <path d={svgPaths.p21039670} fill="var(--fill-0, #2DBCE2)" id="Vector_423" opacity="0.3" />
          <path d={svgPaths.p1850ac00} fill="var(--fill-0, #2DBCE2)" id="Vector_424" opacity="0.3" />
          <path d={svgPaths.p2aba1e00} fill="var(--fill-0, #2DBCE2)" id="Vector_425" opacity="0.6" />
          <path d={svgPaths.p28fe6800} fill="var(--fill-0, #2DBCE2)" id="Vector_426" />
          <path d={svgPaths.p4416d70} fill="var(--fill-0, #2DBCE2)" id="Vector_427" />
          <path d={svgPaths.p33210100} fill="var(--fill-0, #2DBCE2)" id="Vector_428" opacity="0.6" />
          <path d={svgPaths.p1e9c0600} fill="var(--fill-0, #2DBCE2)" id="Vector_429" opacity="0.3" />
          <path d={svgPaths.p1bf84280} fill="var(--fill-0, #2DBCE2)" id="Vector_430" opacity="0.6" />
          <path d={svgPaths.p2c31fdf0} fill="var(--fill-0, #2DBCE2)" id="Vector_431" opacity="0.3" />
          <path d={svgPaths.p12354280} fill="var(--fill-0, #2DBCE2)" id="Vector_432" />
          <path d={svgPaths.p1e4d6400} fill="var(--fill-0, #2DBCE2)" id="Vector_433" opacity="0.6" />
          <path d={svgPaths.p268dbba0} fill="var(--fill-0, #2DBCE2)" id="Vector_434" opacity="0.6" />
          <path d={svgPaths.p61bb300} fill="var(--fill-0, #2DBCE2)" id="Vector_435" opacity="0.3" />
          <path d={svgPaths.p36bd0680} fill="var(--fill-0, #2DBCE2)" id="Vector_436" opacity="0.3" />
          <path d={svgPaths.p9415700} fill="var(--fill-0, #2DBCE2)" id="Vector_437" opacity="0.6" />
          <path d={svgPaths.p2bba7dc0} fill="var(--fill-0, #2DBCE2)" id="Vector_438" />
          <path d={svgPaths.p35a30700} fill="var(--fill-0, #2DBCE2)" id="Vector_439" opacity="0.3" />
          <path d={svgPaths.pc586080} fill="var(--fill-0, #2DBCE2)" id="Vector_440" opacity="0.6" />
          <path d={svgPaths.p1e81a500} fill="var(--fill-0, #2DBCE2)" id="Vector_441" opacity="0.6" />
          <path d={svgPaths.p3eb93580} fill="var(--fill-0, #2DBCE2)" id="Vector_442" opacity="0.3" />
          <path d={svgPaths.p34bbcf00} fill="var(--fill-0, #2DBCE2)" id="Vector_443" opacity="0.6" />
          <path d={svgPaths.p5275500} fill="var(--fill-0, #2DBCE2)" id="Vector_444" opacity="0.6" />
          <path d={svgPaths.p3c668480} fill="var(--fill-0, #2DBCE2)" id="Vector_445" opacity="0.6" />
          <path d={svgPaths.p288e8f80} fill="var(--fill-0, #2DBCE2)" id="Vector_446" />
          <path d={svgPaths.p1dfd9700} fill="var(--fill-0, #2DBCE2)" id="Vector_447" opacity="0.6" />
          <path d={svgPaths.p21bd1340} fill="var(--fill-0, #2DBCE2)" id="Vector_448" opacity="0.6" />
          <path d={svgPaths.p2305e900} fill="var(--fill-0, #2DBCE2)" id="Vector_449" opacity="0.3" />
          <path d={svgPaths.p328fcd00} fill="var(--fill-0, #2DBCE2)" id="Vector_450" opacity="0.6" />
          <path d={svgPaths.p2cee180} fill="var(--fill-0, #2DBCE2)" id="Vector_451" />
          <path d={svgPaths.p1fff7980} fill="var(--fill-0, #2DBCE2)" id="Vector_452" />
          <path d={svgPaths.p31817500} fill="var(--fill-0, #2DBCE2)" id="Vector_453" />
          <path d={svgPaths.p13814d00} fill="var(--fill-0, #2DBCE2)" id="Vector_454" opacity="0.6" />
          <path d={svgPaths.p1de0d580} fill="var(--fill-0, #2DBCE2)" id="Vector_455" />
          <path d={svgPaths.p3c216c00} fill="var(--fill-0, #2DBCE2)" id="Vector_456" opacity="0.6" />
          <path d={svgPaths.p5f1ab80} fill="var(--fill-0, #2DBCE2)" id="Vector_457" opacity="0.6" />
          <path d={svgPaths.p609b200} fill="var(--fill-0, #2DBCE2)" id="Vector_458" opacity="0.6" />
          <path d={svgPaths.p102f2d80} fill="var(--fill-0, #2DBCE2)" id="Vector_459" opacity="0.6" />
          <path d={svgPaths.p81e4100} fill="var(--fill-0, #2DBCE2)" id="Vector_460" opacity="0.6" />
          <path d={svgPaths.p32b05180} fill="var(--fill-0, #2DBCE2)" id="Vector_461" opacity="0.6" />
          <path d={svgPaths.p2799700} fill="var(--fill-0, #2DBCE2)" id="Vector_462" />
          <path d={svgPaths.p70a8c00} fill="var(--fill-0, #2DBCE2)" id="Vector_463" opacity="0.3" />
          <path d={svgPaths.p23327df0} fill="var(--fill-0, #2DBCE2)" id="Vector_464" opacity="0.6" />
          <path d={svgPaths.p3c65c1c0} fill="var(--fill-0, #2DBCE2)" id="Vector_465" opacity="0.3" />
          <path d={svgPaths.p159d7c00} fill="var(--fill-0, #2DBCE2)" id="Vector_466" opacity="0.6" />
          <path d={svgPaths.p47a1cf0} fill="var(--fill-0, #2DBCE2)" id="Vector_467" opacity="0.3" />
          <path d={svgPaths.p30ca7ef0} fill="var(--fill-0, #2DBCE2)" id="Vector_468" opacity="0.3" />
          <path d={svgPaths.p37161600} fill="var(--fill-0, #2DBCE2)" id="Vector_469" opacity="0.3" />
          <path d={svgPaths.pc3c600} fill="var(--fill-0, #2DBCE2)" id="Vector_470" />
          <path d={svgPaths.pc641d00} fill="var(--fill-0, #2DBCE2)" id="Vector_471" opacity="0.3" />
          <path d={svgPaths.p319a4300} fill="var(--fill-0, #2DBCE2)" id="Vector_472" opacity="0.6" />
          <path d={svgPaths.p40ab400} fill="var(--fill-0, #2DBCE2)" id="Vector_473" opacity="0.3" />
          <path d={svgPaths.pab74700} fill="var(--fill-0, #2DBCE2)" id="Vector_474" />
          <path d={svgPaths.p37e0dc00} fill="var(--fill-0, #2DBCE2)" id="Vector_475" />
          <path d={svgPaths.pf3a5300} fill="var(--fill-0, #2DBCE2)" id="Vector_476" opacity="0.6" />
          <path d={svgPaths.p3d98e480} fill="var(--fill-0, #2DBCE2)" id="Vector_477" />
          <path d={svgPaths.p39f95580} fill="var(--fill-0, #2DBCE2)" id="Vector_478" opacity="0.6" />
          <path d={svgPaths.p2a41f000} fill="var(--fill-0, #2DBCE2)" id="Vector_479" opacity="0.3" />
          <path d={svgPaths.p1fde2680} fill="var(--fill-0, #2DBCE2)" id="Vector_480" />
          <path d={svgPaths.p2bb09c00} fill="var(--fill-0, #2DBCE2)" id="Vector_481" />
          <path d={svgPaths.p3f86f00} fill="var(--fill-0, #2DBCE2)" id="Vector_482" opacity="0.3" />
          <path d={svgPaths.p1bf258c0} fill="var(--fill-0, #2DBCE2)" id="Vector_483" opacity="0.6" />
          <path d={svgPaths.pc31e280} fill="var(--fill-0, #2DBCE2)" id="Vector_484" opacity="0.3" />
          <path d={svgPaths.p17f37900} fill="var(--fill-0, #2DBCE2)" id="Vector_485" opacity="0.3" />
          <path d={svgPaths.p2a3394c0} fill="var(--fill-0, #2DBCE2)" id="Vector_486" />
          <path d={svgPaths.p2cbcbd00} fill="var(--fill-0, #2DBCE2)" id="Vector_487" opacity="0.3" />
          <path d={svgPaths.p18729500} fill="var(--fill-0, #2DBCE2)" id="Vector_488" />
          <path d={svgPaths.p4b3c880} fill="var(--fill-0, #2DBCE2)" id="Vector_489" opacity="0.3" />
          <path d={svgPaths.p2162fc80} fill="var(--fill-0, #2DBCE2)" id="Vector_490" opacity="0.6" />
          <path d={svgPaths.p69b5b80} fill="var(--fill-0, #2DBCE2)" id="Vector_491" />
          <path d={svgPaths.p12ca9400} fill="var(--fill-0, #2DBCE2)" id="Vector_492" opacity="0.6" />
          <path d={svgPaths.p2dfcabf0} fill="var(--fill-0, #2DBCE2)" id="Vector_493" opacity="0.6" />
          <path d={svgPaths.p25a44e00} fill="var(--fill-0, #2DBCE2)" id="Vector_494" />
          <path d={svgPaths.p35a95380} fill="var(--fill-0, #2DBCE2)" id="Vector_495" />
          <path d={svgPaths.p3dae2f00} fill="var(--fill-0, #2DBCE2)" id="Vector_496" opacity="0.6" />
          <path d={svgPaths.p27084380} fill="var(--fill-0, #2DBCE2)" id="Vector_497" opacity="0.6" />
          <path d={svgPaths.p10cbee00} fill="var(--fill-0, #2DBCE2)" id="Vector_498" opacity="0.3" />
          <path d={svgPaths.p3b249a70} fill="var(--fill-0, #2DBCE2)" id="Vector_499" opacity="0.6" />
          <path d={svgPaths.p9265700} fill="var(--fill-0, #2DBCE2)" id="Vector_500" />
          <path d={svgPaths.p8da8e2c} fill="var(--fill-0, #2DBCE2)" id="Vector_501" opacity="0.3" />
          <path d={svgPaths.p2a958371} fill="var(--fill-0, #2DBCE2)" id="Vector_502" opacity="0.3" />
          <path d={svgPaths.p13104c00} fill="var(--fill-0, #2DBCE2)" id="Vector_503" />
          <path d={svgPaths.p29920580} fill="var(--fill-0, #2DBCE2)" id="Vector_504" />
          <path d={svgPaths.p74f6c00} fill="var(--fill-0, #2DBCE2)" id="Vector_505" opacity="0.6" />
          <path d={svgPaths.p96bf200} fill="var(--fill-0, #2DBCE2)" id="Vector_506" />
          <path d={svgPaths.p23599400} fill="var(--fill-0, #2DBCE2)" id="Vector_507" />
          <path d={svgPaths.p1d836800} fill="var(--fill-0, #2DBCE2)" id="Vector_508" />
          <path d={svgPaths.p1a2c9f00} fill="var(--fill-0, #2DBCE2)" id="Vector_509" opacity="0.3" />
          <path d={svgPaths.p24867f80} fill="var(--fill-0, #2DBCE2)" id="Vector_510" opacity="0.3" />
          <path d={svgPaths.p1cb39e80} fill="var(--fill-0, #2DBCE2)" id="Vector_511" opacity="0.3" />
          <path d={svgPaths.p179c8500} fill="var(--fill-0, #2DBCE2)" id="Vector_512" opacity="0.3" />
          <path d={svgPaths.p2e642c80} fill="var(--fill-0, #2DBCE2)" id="Vector_513" opacity="0.6" />
          <path d={svgPaths.p20786700} fill="var(--fill-0, #2DBCE2)" id="Vector_514" />
          <path d={svgPaths.p73cfd00} fill="var(--fill-0, #2DBCE2)" id="Vector_515" opacity="0.3" />
          <path d={svgPaths.p3a0cf070} fill="var(--fill-0, #2DBCE2)" id="Vector_516" opacity="0.6" />
          <path d={svgPaths.p1ce71770} fill="var(--fill-0, #2DBCE2)" id="Vector_517" opacity="0.6" />
          <path d={svgPaths.pa9ba600} fill="var(--fill-0, #2DBCE2)" id="Vector_518" opacity="0.3" />
          <path d={svgPaths.p24e03b00} fill="var(--fill-0, #2DBCE2)" id="Vector_519" opacity="0.6" />
          <path d={svgPaths.p2d1fb300} fill="var(--fill-0, #2DBCE2)" id="Vector_520" opacity="0.6" />
          <path d={svgPaths.p13abad00} fill="var(--fill-0, #2DBCE2)" id="Vector_521" opacity="0.3" />
          <path d={svgPaths.p8cd2800} fill="var(--fill-0, #2DBCE2)" id="Vector_522" opacity="0.6" />
          <path d={svgPaths.p15266e00} fill="var(--fill-0, #2DBCE2)" id="Vector_523" />
          <path d={svgPaths.p3906f240} fill="var(--fill-0, #2DBCE2)" id="Vector_524" opacity="0.6" />
          <path d={svgPaths.paa3c880} fill="var(--fill-0, #2DBCE2)" id="Vector_525" opacity="0.3" />
          <path d={svgPaths.p11747710} fill="var(--fill-0, #2DBCE2)" id="Vector_526" />
          <path d={svgPaths.p3a1aa00} fill="var(--fill-0, #2DBCE2)" id="Vector_527" opacity="0.3" />
          <path d={svgPaths.p1c91cc80} fill="var(--fill-0, #2DBCE2)" id="Vector_528" opacity="0.3" />
          <path d={svgPaths.p1f284700} fill="var(--fill-0, #2DBCE2)" id="Vector_529" />
          <path d={svgPaths.p304b0900} fill="var(--fill-0, #2DBCE2)" id="Vector_530" opacity="0.6" />
          <path d={svgPaths.p28161980} fill="var(--fill-0, #2DBCE2)" id="Vector_531" />
          <path d={svgPaths.p130baa00} fill="var(--fill-0, #2DBCE2)" id="Vector_532" />
          <path d={svgPaths.p13792e00} fill="var(--fill-0, #2DBCE2)" id="Vector_533" opacity="0.6" />
          <path d={svgPaths.p294c5f00} fill="var(--fill-0, #2DBCE2)" id="Vector_534" opacity="0.6" />
          <path d={svgPaths.p46e7770} fill="var(--fill-0, #2DBCE2)" id="Vector_535" />
          <path d={svgPaths.p24bbd700} fill="var(--fill-0, #2DBCE2)" id="Vector_536" />
          <path d={svgPaths.p1baac880} fill="var(--fill-0, #2DBCE2)" id="Vector_537" opacity="0.6" />
          <path d={svgPaths.p257f0c00} fill="var(--fill-0, #2DBCE2)" id="Vector_538" />
          <path d={svgPaths.p3d961a40} fill="var(--fill-0, #2DBCE2)" id="Vector_539" opacity="0.3" />
          <path d={svgPaths.p3ce84580} fill="var(--fill-0, #2DBCE2)" id="Vector_540" />
          <path d={svgPaths.p22f3dc80} fill="var(--fill-0, #2DBCE2)" id="Vector_541" opacity="0.6" />
          <path d={svgPaths.p3fa99700} fill="var(--fill-0, #2DBCE2)" id="Vector_542" />
          <path d={svgPaths.p7ea7900} fill="var(--fill-0, #2DBCE2)" id="Vector_543" opacity="0.6" />
          <path d={svgPaths.p2f8f0700} fill="var(--fill-0, #2DBCE2)" id="Vector_544" />
          <path d={svgPaths.p8f31500} fill="var(--fill-0, #2DBCE2)" id="Vector_545" />
          <path d={svgPaths.p26ccc780} fill="var(--fill-0, #2DBCE2)" id="Vector_546" opacity="0.3" />
          <path d={svgPaths.p3d7dcb00} fill="var(--fill-0, #2DBCE2)" id="Vector_547" opacity="0.3" />
          <path d={svgPaths.p50db800} fill="var(--fill-0, #2DBCE2)" id="Vector_548" opacity="0.6" />
          <path d={svgPaths.p588c00} fill="var(--fill-0, #2DBCE2)" id="Vector_549" opacity="0.3" />
          <path d={svgPaths.p14eef280} fill="var(--fill-0, #2DBCE2)" id="Vector_550" opacity="0.3" />
          <path d={svgPaths.p3cdd4300} fill="var(--fill-0, #2DBCE2)" id="Vector_551" />
          <path d={svgPaths.p1b374500} fill="var(--fill-0, #2DBCE2)" id="Vector_552" opacity="0.3" />
          <path d={svgPaths.p19248400} fill="var(--fill-0, #2DBCE2)" id="Vector_553" />
          <path d={svgPaths.p1a3008c0} fill="var(--fill-0, #2DBCE2)" id="Vector_554" opacity="0.6" />
          <path d={svgPaths.p2669f400} fill="var(--fill-0, #2DBCE2)" id="Vector_555" />
          <path d={svgPaths.p4b80b00} fill="var(--fill-0, #2DBCE2)" id="Vector_556" opacity="0.3" />
          <path d={svgPaths.p2a8f3a80} fill="var(--fill-0, #2DBCE2)" id="Vector_557" opacity="0.6" />
          <path d={svgPaths.p2b12b100} fill="var(--fill-0, #2DBCE2)" id="Vector_558" opacity="0.3" />
          <path d={svgPaths.p38f81e00} fill="var(--fill-0, #2DBCE2)" id="Vector_559" opacity="0.6" />
          <path d={svgPaths.p1e785e00} fill="var(--fill-0, #2DBCE2)" id="Vector_560" opacity="0.6" />
          <path d={svgPaths.p3a322e80} fill="var(--fill-0, #2DBCE2)" id="Vector_561" />
          <path d={svgPaths.pb34d200} fill="var(--fill-0, #2DBCE2)" id="Vector_562" opacity="0.6" />
          <path d={svgPaths.p1be23200} fill="var(--fill-0, #2DBCE2)" id="Vector_563" />
          <path d={svgPaths.p2399c180} fill="var(--fill-0, #2DBCE2)" id="Vector_564" opacity="0.6" />
          <path d={svgPaths.p2e8c2f00} fill="var(--fill-0, #2DBCE2)" id="Vector_565" opacity="0.3" />
          <path d={svgPaths.pfe7f200} fill="var(--fill-0, #2DBCE2)" id="Vector_566" opacity="0.3" />
          <path d={svgPaths.p410c300} fill="var(--fill-0, #2DBCE2)" id="Vector_567" opacity="0.3" />
          <path d={svgPaths.pd4ef400} fill="var(--fill-0, #2DBCE2)" id="Vector_568" />
          <path d={svgPaths.p3e3b5880} fill="var(--fill-0, #2DBCE2)" id="Vector_569" opacity="0.6" />
          <path d={svgPaths.pf22900} fill="var(--fill-0, #2DBCE2)" id="Vector_570" opacity="0.3" />
          <path d={svgPaths.p33225700} fill="var(--fill-0, #2DBCE2)" id="Vector_571" opacity="0.3" />
          <path d={svgPaths.p2467b700} fill="var(--fill-0, #2DBCE2)" id="Vector_572" opacity="0.3" />
          <path d={svgPaths.p2f338b00} fill="var(--fill-0, #2DBCE2)" id="Vector_573" />
          <path d={svgPaths.p14c5a780} fill="var(--fill-0, #2DBCE2)" id="Vector_574" />
          <path d={svgPaths.p811f640} fill="var(--fill-0, #2DBCE2)" id="Vector_575" opacity="0.3" />
          <path d={svgPaths.p24547080} fill="var(--fill-0, #2DBCE2)" id="Vector_576" />
          <path d={svgPaths.pc3be200} fill="var(--fill-0, #2DBCE2)" id="Vector_577" opacity="0.3" />
          <path d={svgPaths.p3826ff00} fill="var(--fill-0, #2DBCE2)" id="Vector_578" opacity="0.3" />
          <path d={svgPaths.p35335800} fill="var(--fill-0, #2DBCE2)" id="Vector_579" opacity="0.3" />
          <path d={svgPaths.p27311600} fill="var(--fill-0, #2DBCE2)" id="Vector_580" opacity="0.6" />
          <path d={svgPaths.p3e8d0a00} fill="var(--fill-0, #2DBCE2)" id="Vector_581" opacity="0.6" />
          <path d={svgPaths.p3b71a980} fill="var(--fill-0, #2DBCE2)" id="Vector_582" opacity="0.6" />
          <path d={svgPaths.pd562800} fill="var(--fill-0, #2DBCE2)" id="Vector_583" opacity="0.6" />
          <path d={svgPaths.p2ef46680} fill="var(--fill-0, #2DBCE2)" id="Vector_584" />
          <path d={svgPaths.p397d0b00} fill="var(--fill-0, #2DBCE2)" id="Vector_585" opacity="0.6" />
          <path d={svgPaths.p1c6b5700} fill="var(--fill-0, #2DBCE2)" id="Vector_586" />
          <path d={svgPaths.p128eb9f0} fill="var(--fill-0, #2DBCE2)" id="Vector_587" />
          <path d={svgPaths.p22c7bb80} fill="var(--fill-0, #2DBCE2)" id="Vector_588" opacity="0.3" />
          <path d={svgPaths.p6f15d00} fill="var(--fill-0, #2DBCE2)" id="Vector_589" opacity="0.6" />
          <path d={svgPaths.p1d4ff900} fill="var(--fill-0, #2DBCE2)" id="Vector_590" />
          <path d={svgPaths.p11237c00} fill="var(--fill-0, #2DBCE2)" id="Vector_591" opacity="0.3" />
          <path d={svgPaths.p10bbc780} fill="var(--fill-0, #2DBCE2)" id="Vector_592" opacity="0.6" />
          <path d={svgPaths.p2dd31f00} fill="var(--fill-0, #2DBCE2)" id="Vector_593" />
          <path d={svgPaths.p282a0500} fill="var(--fill-0, #2DBCE2)" id="Vector_594" opacity="0.3" />
          <path d={svgPaths.p22dcff40} fill="var(--fill-0, #2DBCE2)" id="Vector_595" opacity="0.6" />
          <path d={svgPaths.p12ea82c0} fill="var(--fill-0, #2DBCE2)" id="Vector_596" opacity="0.6" />
          <path d={svgPaths.p2b903150} fill="var(--fill-0, #2DBCE2)" id="Vector_597" opacity="0.3" />
          <path d={svgPaths.p31504780} fill="var(--fill-0, #2DBCE2)" id="Vector_598" />
          <path d={svgPaths.p37e2d620} fill="var(--fill-0, #2DBCE2)" id="Vector_599" opacity="0.6" />
          <path d={svgPaths.p2744da80} fill="var(--fill-0, #2DBCE2)" id="Vector_600" opacity="0.6" />
          <path d={svgPaths.p166e6280} fill="var(--fill-0, #2DBCE2)" id="Vector_601" />
          <path d={svgPaths.p1de86500} fill="var(--fill-0, #2DBCE2)" id="Vector_602" opacity="0.3" />
          <path d={svgPaths.pccdd400} fill="var(--fill-0, #2DBCE2)" id="Vector_603" />
          <path d={svgPaths.p16760400} fill="var(--fill-0, #2DBCE2)" id="Vector_604" opacity="0.6" />
          <path d={svgPaths.p18306200} fill="var(--fill-0, #2DBCE2)" id="Vector_605" opacity="0.6" />
          <path d={svgPaths.p28d08e00} fill="var(--fill-0, #2DBCE2)" id="Vector_606" opacity="0.3" />
          <path d={svgPaths.pfe48980} fill="var(--fill-0, #2DBCE2)" id="Vector_607" />
          <path d={svgPaths.p4531332} fill="var(--fill-0, #2DBCE2)" id="Vector_608" />
          <path d={svgPaths.p3c116a80} fill="var(--fill-0, #2DBCE2)" id="Vector_609" />
          <path d={svgPaths.p34d5a180} fill="var(--fill-0, #2DBCE2)" id="Vector_610" opacity="0.3" />
          <path d={svgPaths.p283e6d80} fill="var(--fill-0, #2DBCE2)" id="Vector_611" opacity="0.6" />
          <path d={svgPaths.p36f11100} fill="var(--fill-0, #2DBCE2)" id="Vector_612" opacity="0.3" />
          <path d={svgPaths.pb6f9000} fill="var(--fill-0, #2DBCE2)" id="Vector_613" opacity="0.3" />
          <path d={svgPaths.p3857300} fill="var(--fill-0, #2DBCE2)" id="Vector_614" opacity="0.3" />
          <path d={svgPaths.p31477000} fill="var(--fill-0, #2DBCE2)" id="Vector_615" opacity="0.3" />
          <path d={svgPaths.p753a900} fill="var(--fill-0, #2DBCE2)" id="Vector_616" opacity="0.3" />
          <path d={svgPaths.pda1cf00} fill="var(--fill-0, #2DBCE2)" id="Vector_617" opacity="0.3" />
          <path d={svgPaths.p38633a72} fill="var(--fill-0, #2DBCE2)" id="Vector_618" opacity="0.6" />
          <path d={svgPaths.p3abda9b0} fill="var(--fill-0, #2DBCE2)" id="Vector_619" />
          <path d={svgPaths.p338dd8c0} fill="var(--fill-0, #2DBCE2)" id="Vector_620" opacity="0.3" />
          <path d={svgPaths.pb85d900} fill="var(--fill-0, #2DBCE2)" id="Vector_621" opacity="0.6" />
          <path d={svgPaths.p5794900} fill="var(--fill-0, #2DBCE2)" id="Vector_622" opacity="0.6" />
          <path d={svgPaths.p29a6b100} fill="var(--fill-0, #2DBCE2)" id="Vector_623" />
          <path d={svgPaths.p3ef1ee00} fill="var(--fill-0, #2DBCE2)" id="Vector_624" />
          <path d={svgPaths.p194c4080} fill="var(--fill-0, #2DBCE2)" id="Vector_625" opacity="0.3" />
          <path d={svgPaths.p35eac00} fill="var(--fill-0, #2DBCE2)" id="Vector_626" opacity="0.6" />
          <path d={svgPaths.p2b03080} fill="var(--fill-0, #2DBCE2)" id="Vector_627" opacity="0.6" />
          <path d={svgPaths.p299d2800} fill="var(--fill-0, #2DBCE2)" id="Vector_628" opacity="0.3" />
          <path d={svgPaths.p30a8eb80} fill="var(--fill-0, #2DBCE2)" id="Vector_629" opacity="0.6" />
          <path d={svgPaths.p628fc00} fill="var(--fill-0, #2DBCE2)" id="Vector_630" />
          <path d={svgPaths.p850d000} fill="var(--fill-0, #2DBCE2)" id="Vector_631" opacity="0.3" />
          <path d={svgPaths.p31232700} fill="var(--fill-0, #2DBCE2)" id="Vector_632" opacity="0.6" />
          <path d={svgPaths.p12dcad00} fill="var(--fill-0, #2DBCE2)" id="Vector_633" opacity="0.6" />
          <path d={svgPaths.pf6c7080} fill="var(--fill-0, #2DBCE2)" id="Vector_634" />
          <path d={svgPaths.p2f6f2400} fill="var(--fill-0, #2DBCE2)" id="Vector_635" />
          <path d={svgPaths.p1f6d4cf0} fill="var(--fill-0, #2DBCE2)" id="Vector_636" opacity="0.3" />
          <path d={svgPaths.p29965f80} fill="var(--fill-0, #2DBCE2)" id="Vector_637" opacity="0.3" />
          <path d={svgPaths.p1b9ba220} fill="var(--fill-0, #2DBCE2)" id="Vector_638" />
          <path d={svgPaths.pe5d7140} fill="var(--fill-0, #2DBCE2)" id="Vector_639" opacity="0.6" />
          <path d={svgPaths.p2d6d8600} fill="var(--fill-0, #2DBCE2)" id="Vector_640" />
          <path d={svgPaths.pc235080} fill="var(--fill-0, #2DBCE2)" id="Vector_641" opacity="0.3" />
          <path d={svgPaths.p32737480} fill="var(--fill-0, #2DBCE2)" id="Vector_642" opacity="0.3" />
          <path d={svgPaths.p399e8500} fill="var(--fill-0, #2DBCE2)" id="Vector_643" />
          <path d={svgPaths.p2f621d00} fill="var(--fill-0, #2DBCE2)" id="Vector_644" opacity="0.6" />
          <path d={svgPaths.p183cc480} fill="var(--fill-0, #2DBCE2)" id="Vector_645" opacity="0.6" />
          <path d={svgPaths.p2045c800} fill="var(--fill-0, #2DBCE2)" id="Vector_646" opacity="0.3" />
          <path d={svgPaths.p1a0cd80} fill="var(--fill-0, #2DBCE2)" id="Vector_647" opacity="0.6" />
          <path d={svgPaths.p31e5a30} fill="var(--fill-0, #2DBCE2)" id="Vector_648" opacity="0.3" />
          <path d={svgPaths.p3006cb00} fill="var(--fill-0, #2DBCE2)" id="Vector_649" />
          <path d={svgPaths.paa28b00} fill="var(--fill-0, #2DBCE2)" id="Vector_650" />
          <path d={svgPaths.p201fbb80} fill="var(--fill-0, #2DBCE2)" id="Vector_651" />
          <path d={svgPaths.p3d867080} fill="var(--fill-0, #2DBCE2)" id="Vector_652" />
          <path d={svgPaths.p25dfdf00} fill="var(--fill-0, #2DBCE2)" id="Vector_653" opacity="0.3" />
          <path d={svgPaths.p4363800} fill="var(--fill-0, #2DBCE2)" id="Vector_654" opacity="0.3" />
          <path d={svgPaths.p7265380} fill="var(--fill-0, #2DBCE2)" id="Vector_655" opacity="0.3" />
          <path d={svgPaths.p13843c00} fill="var(--fill-0, #2DBCE2)" id="Vector_656" />
          <path d={svgPaths.p1c7cb400} fill="var(--fill-0, #2DBCE2)" id="Vector_657" opacity="0.6" />
          <path d={svgPaths.p30d3aef0} fill="var(--fill-0, #2DBCE2)" id="Vector_658" opacity="0.3" />
          <path d={svgPaths.p2d5ed2f0} fill="var(--fill-0, #2DBCE2)" id="Vector_659" />
          <path d={svgPaths.p2911b100} fill="var(--fill-0, #2DBCE2)" id="Vector_660" />
          <path d={svgPaths.p360c5b80} fill="var(--fill-0, #2DBCE2)" id="Vector_661" opacity="0.3" />
          <path d={svgPaths.p2905ad00} fill="var(--fill-0, #2DBCE2)" id="Vector_662" />
          <path d={svgPaths.p17da55f0} fill="var(--fill-0, #2DBCE2)" id="Vector_663" opacity="0.6" />
          <path d={svgPaths.p1221fe80} fill="var(--fill-0, #2DBCE2)" id="Vector_664" opacity="0.6" />
          <path d={svgPaths.p89f7b70} fill="var(--fill-0, #2DBCE2)" id="Vector_665" />
          <path d={svgPaths.p3e610200} fill="var(--fill-0, #2DBCE2)" id="Vector_666" />
          <path d={svgPaths.pcf7a00} fill="var(--fill-0, #2DBCE2)" id="Vector_667" opacity="0.6" />
          <path d={svgPaths.p25176a80} fill="var(--fill-0, #2DBCE2)" id="Vector_668" opacity="0.6" />
          <path d={svgPaths.p2d10db80} fill="var(--fill-0, #2DBCE2)" id="Vector_669" />
          <path d={svgPaths.p2b79ff00} fill="var(--fill-0, #2DBCE2)" id="Vector_670" opacity="0.3" />
          <path d={svgPaths.p31bfd880} fill="var(--fill-0, #2DBCE2)" id="Vector_671" opacity="0.3" />
          <path d={svgPaths.p2f169800} fill="var(--fill-0, #2DBCE2)" id="Vector_672" opacity="0.3" />
          <path d={svgPaths.p1c4fd80} fill="var(--fill-0, #2DBCE2)" id="Vector_673" />
          <path d={svgPaths.p1ed02e00} fill="var(--fill-0, #2DBCE2)" id="Vector_674" />
          <path d={svgPaths.p785f700} fill="var(--fill-0, #2DBCE2)" id="Vector_675" opacity="0.6" />
          <path d={svgPaths.p32628300} fill="var(--fill-0, #2DBCE2)" id="Vector_676" opacity="0.6" />
          <path d={svgPaths.pdfdd700} fill="var(--fill-0, #2DBCE2)" id="Vector_677" opacity="0.3" />
          <path d={svgPaths.p2404f700} fill="var(--fill-0, #2DBCE2)" id="Vector_678" opacity="0.6" />
          <path d={svgPaths.p2d687180} fill="var(--fill-0, #2DBCE2)" id="Vector_679" />
          <path d={svgPaths.p2f5256f0} fill="var(--fill-0, #2DBCE2)" id="Vector_680" opacity="0.3" />
          <path d={svgPaths.p1868c640} fill="var(--fill-0, #2DBCE2)" id="Vector_681" opacity="0.6" />
          <path d={svgPaths.p399c2100} fill="var(--fill-0, #2DBCE2)" id="Vector_682" opacity="0.3" />
          <path d={svgPaths.p4ca3800} fill="var(--fill-0, #2DBCE2)" id="Vector_683" />
          <path d={svgPaths.p66a9a80} fill="var(--fill-0, #2DBCE2)" id="Vector_684" opacity="0.3" />
          <path d={svgPaths.pf407500} fill="var(--fill-0, #2DBCE2)" id="Vector_685" opacity="0.6" />
          <path d={svgPaths.pd7dea00} fill="var(--fill-0, #2DBCE2)" id="Vector_686" opacity="0.3" />
          <path d={svgPaths.pa45d980} fill="var(--fill-0, #2DBCE2)" id="Vector_687" />
          <path d={svgPaths.p15ada700} fill="var(--fill-0, #2DBCE2)" id="Vector_688" opacity="0.6" />
          <path d={svgPaths.p35c83400} fill="var(--fill-0, #2DBCE2)" id="Vector_689" opacity="0.6" />
          <path d={svgPaths.p2363c000} fill="var(--fill-0, #2DBCE2)" id="Vector_690" opacity="0.6" />
          <path d={svgPaths.p13dcce00} fill="var(--fill-0, #2DBCE2)" id="Vector_691" opacity="0.6" />
          <path d={svgPaths.p2132d170} fill="var(--fill-0, #2DBCE2)" id="Vector_692" />
          <path d={svgPaths.pac61200} fill="var(--fill-0, #2DBCE2)" id="Vector_693" opacity="0.3" />
          <path d={svgPaths.p334a1a00} fill="var(--fill-0, #2DBCE2)" id="Vector_694" opacity="0.3" />
          <path d={svgPaths.pc866400} fill="var(--fill-0, #2DBCE2)" id="Vector_695" opacity="0.3" />
          <path d={svgPaths.p356bb060} fill="var(--fill-0, #2DBCE2)" id="Vector_696" />
          <path d={svgPaths.p3f2b6500} fill="var(--fill-0, #2DBCE2)" id="Vector_697" opacity="0.6" />
          <path d={svgPaths.p3dec4400} fill="var(--fill-0, #2DBCE2)" id="Vector_698" opacity="0.6" />
          <path d={svgPaths.p6813a00} fill="var(--fill-0, #2DBCE2)" id="Vector_699" opacity="0.6" />
          <path d={svgPaths.pb0e4300} fill="var(--fill-0, #2DBCE2)" id="Vector_700" opacity="0.6" />
          <path d={svgPaths.p2f83e100} fill="var(--fill-0, #2DBCE2)" id="Vector_701" opacity="0.6" />
          <path d={svgPaths.p644f200} fill="var(--fill-0, #2DBCE2)" id="Vector_702" />
          <path d={svgPaths.p18ed0100} fill="var(--fill-0, #2DBCE2)" id="Vector_703" opacity="0.6" />
          <path d={svgPaths.p2e87de00} fill="var(--fill-0, #2DBCE2)" id="Vector_704" opacity="0.6" />
          <path d={svgPaths.p341cd640} fill="var(--fill-0, #2DBCE2)" id="Vector_705" opacity="0.3" />
          <path d={svgPaths.p1d72a700} fill="var(--fill-0, #2DBCE2)" id="Vector_706" opacity="0.6" />
          <path d={svgPaths.p9656080} fill="var(--fill-0, #2DBCE2)" id="Vector_707" />
          <path d={svgPaths.p42aa80} fill="var(--fill-0, #2DBCE2)" id="Vector_708" opacity="0.6" />
          <path d={svgPaths.p742de00} fill="var(--fill-0, #2DBCE2)" id="Vector_709" opacity="0.3" />
          <path d={svgPaths.p34bc0b00} fill="var(--fill-0, #2DBCE2)" id="Vector_710" />
          <path d={svgPaths.p21e69100} fill="var(--fill-0, #2DBCE2)" id="Vector_711" opacity="0.3" />
          <path d={svgPaths.p3cffc9c0} fill="var(--fill-0, #2DBCE2)" id="Vector_712" />
          <path d={svgPaths.p3dcc9000} fill="var(--fill-0, #2DBCE2)" id="Vector_713" opacity="0.3" />
          <path d={svgPaths.p3d098200} fill="var(--fill-0, #2DBCE2)" id="Vector_714" />
          <path d={svgPaths.p25400b80} fill="var(--fill-0, #2DBCE2)" id="Vector_715" opacity="0.3" />
          <path d={svgPaths.p6abac00} fill="var(--fill-0, #2DBCE2)" id="Vector_716" opacity="0.6" />
          <path d={svgPaths.p124c200} fill="var(--fill-0, #2DBCE2)" id="Vector_717" />
          <path d={svgPaths.p7cab00} fill="var(--fill-0, #2DBCE2)" id="Vector_718" opacity="0.3" />
          <path d={svgPaths.p1fb55400} fill="var(--fill-0, #2DBCE2)" id="Vector_719" opacity="0.6" />
          <path d={svgPaths.p13df9c80} fill="var(--fill-0, #2DBCE2)" id="Vector_720" />
          <path d={svgPaths.p23af6680} fill="var(--fill-0, #2DBCE2)" id="Vector_721" opacity="0.6" />
          <path d={svgPaths.p253e9f00} fill="var(--fill-0, #2DBCE2)" id="Vector_722" />
          <path d={svgPaths.p9cae380} fill="var(--fill-0, #2DBCE2)" id="Vector_723" opacity="0.6" />
          <path d={svgPaths.p11953f00} fill="var(--fill-0, #2DBCE2)" id="Vector_724" opacity="0.3" />
          <path d={svgPaths.p3d0c8900} fill="var(--fill-0, #2DBCE2)" id="Vector_725" opacity="0.3" />
          <path d={svgPaths.p1bad9900} fill="var(--fill-0, #2DBCE2)" id="Vector_726" opacity="0.3" />
          <path d={svgPaths.p2ad6aa80} fill="var(--fill-0, #2DBCE2)" id="Vector_727" opacity="0.3" />
          <path d={svgPaths.p3e23900} fill="var(--fill-0, #2DBCE2)" id="Vector_728" />
          <path d={svgPaths.p1f86dc00} fill="var(--fill-0, #2DBCE2)" id="Vector_729" opacity="0.6" />
          <path d={svgPaths.pa265480} fill="var(--fill-0, #2DBCE2)" id="Vector_730" opacity="0.6" />
          <path d={svgPaths.p18a49200} fill="var(--fill-0, #2DBCE2)" id="Vector_731" opacity="0.6" />
          <path d={svgPaths.p21494ab2} fill="var(--fill-0, #2DBCE2)" id="Vector_732" />
          <path d={svgPaths.p1db4a180} fill="var(--fill-0, #2DBCE2)" id="Vector_733" opacity="0.6" />
          <path d={svgPaths.p5b45300} fill="var(--fill-0, #2DBCE2)" id="Vector_734" />
          <path d={svgPaths.paffea00} fill="var(--fill-0, #2DBCE2)" id="Vector_735" opacity="0.3" />
          <path d={svgPaths.p9c269f0} fill="var(--fill-0, #2DBCE2)" id="Vector_736" opacity="0.6" />
          <path d={svgPaths.p3aa704c0} fill="var(--fill-0, #2DBCE2)" id="Vector_737" opacity="0.3" />
          <path d={svgPaths.p3d3ce8f0} fill="var(--fill-0, #2DBCE2)" id="Vector_738" opacity="0.6" />
          <path d={svgPaths.p25a1ca70} fill="var(--fill-0, #2DBCE2)" id="Vector_739" opacity="0.6" />
          <path d={svgPaths.p309df780} fill="var(--fill-0, #2DBCE2)" id="Vector_740" />
          <path d={svgPaths.p2b660f00} fill="var(--fill-0, #2DBCE2)" id="Vector_741" opacity="0.3" />
          <path d={svgPaths.p2e8e2980} fill="var(--fill-0, #2DBCE2)" id="Vector_742" />
          <path d={svgPaths.p21781c80} fill="var(--fill-0, #2DBCE2)" id="Vector_743" opacity="0.6" />
          <path d={svgPaths.p33aa3480} fill="var(--fill-0, #2DBCE2)" id="Vector_744" opacity="0.3" />
          <path d={svgPaths.p24714b80} fill="var(--fill-0, #2DBCE2)" id="Vector_745" />
          <path d={svgPaths.p2cd24780} fill="var(--fill-0, #2DBCE2)" id="Vector_746" opacity="0.3" />
          <path d={svgPaths.p5103f80} fill="var(--fill-0, #2DBCE2)" id="Vector_747" opacity="0.6" />
          <path d={svgPaths.p2ad16180} fill="var(--fill-0, #2DBCE2)" id="Vector_748" />
          <path d={svgPaths.pe09eff0} fill="var(--fill-0, #2DBCE2)" id="Vector_749" opacity="0.6" />
          <path d={svgPaths.p38b55780} fill="var(--fill-0, #2DBCE2)" id="Vector_750" opacity="0.3" />
          <path d={svgPaths.p332a8880} fill="var(--fill-0, #2DBCE2)" id="Vector_751" opacity="0.6" />
          <path d={svgPaths.p50bd872} fill="var(--fill-0, #2DBCE2)" id="Vector_752" opacity="0.6" />
          <path d={svgPaths.p1594c080} fill="var(--fill-0, #2DBCE2)" id="Vector_753" opacity="0.3" />
          <path d={svgPaths.p1958bd00} fill="var(--fill-0, #2DBCE2)" id="Vector_754" />
          <path d={svgPaths.p140bf20} fill="var(--fill-0, #2DBCE2)" id="Vector_755" opacity="0.3" />
          <path d={svgPaths.p2fafb00} fill="var(--fill-0, #2DBCE2)" id="Vector_756" opacity="0.3" />
          <path d={svgPaths.p21d2cb00} fill="var(--fill-0, #2DBCE2)" id="Vector_757" opacity="0.3" />
          <path d={svgPaths.p19f2c580} fill="var(--fill-0, #2DBCE2)" id="Vector_758" />
          <path d={svgPaths.p1ca4380} fill="var(--fill-0, #2DBCE2)" id="Vector_759" opacity="0.3" />
          <path d={svgPaths.p1fcbda80} fill="var(--fill-0, #2DBCE2)" id="Vector_760" opacity="0.6" />
          <path d={svgPaths.p3d20adf0} fill="var(--fill-0, #2DBCE2)" id="Vector_761" opacity="0.6" />
          <path d={svgPaths.p26e55200} fill="var(--fill-0, #2DBCE2)" id="Vector_762" opacity="0.3" />
          <path d={svgPaths.p3f185b00} fill="var(--fill-0, #2DBCE2)" id="Vector_763" />
          <path d={svgPaths.p765e300} fill="var(--fill-0, #2DBCE2)" id="Vector_764" />
          <path d={svgPaths.pab24600} fill="var(--fill-0, #2DBCE2)" id="Vector_765" opacity="0.3" />
          <path d={svgPaths.p3093f200} fill="var(--fill-0, #2DBCE2)" id="Vector_766" opacity="0.3" />
          <path d={svgPaths.pea46380} fill="var(--fill-0, #2DBCE2)" id="Vector_767" />
          <path d={svgPaths.p2c8f6b00} fill="var(--fill-0, #2DBCE2)" id="Vector_768" opacity="0.3" />
          <path d={svgPaths.p261b3a00} fill="var(--fill-0, #2DBCE2)" id="Vector_769" opacity="0.6" />
          <path d={svgPaths.p220d8f00} fill="var(--fill-0, #2DBCE2)" id="Vector_770" />
          <path d={svgPaths.pd1bb380} fill="var(--fill-0, #2DBCE2)" id="Vector_771" opacity="0.6" />
          <path d={svgPaths.p35329200} fill="var(--fill-0, #2DBCE2)" id="Vector_772" opacity="0.6" />
          <path d={svgPaths.p28e4be80} fill="var(--fill-0, #2DBCE2)" id="Vector_773" opacity="0.6" />
          <path d={svgPaths.p136724c0} fill="var(--fill-0, #2DBCE2)" id="Vector_774" opacity="0.3" />
          <path d={svgPaths.pc1f0f80} fill="var(--fill-0, #2DBCE2)" id="Vector_775" opacity="0.3" />
          <path d={svgPaths.p8ce0a00} fill="var(--fill-0, #2DBCE2)" id="Vector_776" opacity="0.3" />
          <path d={svgPaths.p2df626e0} fill="var(--fill-0, #2DBCE2)" id="Vector_777" />
          <path d={svgPaths.p8261100} fill="var(--fill-0, #2DBCE2)" id="Vector_778" />
          <path d={svgPaths.p207e6000} fill="var(--fill-0, #2DBCE2)" id="Vector_779" opacity="0.6" />
          <path d={svgPaths.p18d52900} fill="var(--fill-0, #2DBCE2)" id="Vector_780" opacity="0.3" />
          <path d={svgPaths.p22358900} fill="var(--fill-0, #2DBCE2)" id="Vector_781" />
          <path d={svgPaths.p3ae98800} fill="var(--fill-0, #2DBCE2)" id="Vector_782" opacity="0.3" />
          <path d={svgPaths.p3ec1eb00} fill="var(--fill-0, #2DBCE2)" id="Vector_783" />
          <path d={svgPaths.p13d58100} fill="var(--fill-0, #2DBCE2)" id="Vector_784" opacity="0.3" />
          <path d={svgPaths.p29e572c0} fill="var(--fill-0, #2DBCE2)" id="Vector_785" opacity="0.3" />
          <path d={svgPaths.p245f900} fill="var(--fill-0, #2DBCE2)" id="Vector_786" opacity="0.6" />
          <path d={svgPaths.p1c285800} fill="var(--fill-0, #2DBCE2)" id="Vector_787" />
          <path d={svgPaths.p2877c580} fill="var(--fill-0, #2DBCE2)" id="Vector_788" />
          <path d={svgPaths.p165c9c00} fill="var(--fill-0, #2DBCE2)" id="Vector_789" opacity="0.6" />
          <path d={svgPaths.p336b7070} fill="var(--fill-0, #2DBCE2)" id="Vector_790" opacity="0.3" />
          <path d={svgPaths.p29a56a00} fill="var(--fill-0, #2DBCE2)" id="Vector_791" />
          <path d={svgPaths.p31a9b880} fill="var(--fill-0, #2DBCE2)" id="Vector_792" opacity="0.3" />
          <path d={svgPaths.p19892f00} fill="var(--fill-0, #2DBCE2)" id="Vector_793" opacity="0.6" />
          <path d={svgPaths.p1084d200} fill="var(--fill-0, #2DBCE2)" id="Vector_794" />
          <path d={svgPaths.p341be5c0} fill="var(--fill-0, #2DBCE2)" id="Vector_795" opacity="0.3" />
          <path d={svgPaths.p2a7f0c00} fill="var(--fill-0, #2DBCE2)" id="Vector_796" opacity="0.3" />
          <path d={svgPaths.p5da2f80} fill="var(--fill-0, #2DBCE2)" id="Vector_797" />
          <path d={svgPaths.p30f6b380} fill="var(--fill-0, #2DBCE2)" id="Vector_798" opacity="0.3" />
          <path d={svgPaths.p2d668d00} fill="var(--fill-0, #2DBCE2)" id="Vector_799" opacity="0.3" />
          <path d={svgPaths.p30ae3000} fill="var(--fill-0, #2DBCE2)" id="Vector_800" opacity="0.3" />
          <path d={svgPaths.p112e5300} fill="var(--fill-0, #2DBCE2)" id="Vector_801" opacity="0.6" />
          <path d={svgPaths.p1b243f00} fill="var(--fill-0, #2DBCE2)" id="Vector_802" />
          <path d={svgPaths.p4139500} fill="var(--fill-0, #2DBCE2)" id="Vector_803" opacity="0.3" />
          <path d={svgPaths.p2488ff40} fill="var(--fill-0, #2DBCE2)" id="Vector_804" />
          <path d={svgPaths.p68ffa00} fill="var(--fill-0, #2DBCE2)" id="Vector_805" />
          <path d={svgPaths.pee41e00} fill="var(--fill-0, #2DBCE2)" id="Vector_806" opacity="0.6" />
          <path d={svgPaths.p1d075480} fill="var(--fill-0, #2DBCE2)" id="Vector_807" opacity="0.6" />
          <path d={svgPaths.p11fbf40} fill="var(--fill-0, #2DBCE2)" id="Vector_808" opacity="0.6" />
          <path d={svgPaths.p3f756500} fill="var(--fill-0, #2DBCE2)" id="Vector_809" opacity="0.6" />
          <path d={svgPaths.p33a0b700} fill="var(--fill-0, #2DBCE2)" id="Vector_810" />
          <path d={svgPaths.p193f0100} fill="var(--fill-0, #2DBCE2)" id="Vector_811" />
          <path d={svgPaths.p17dd800} fill="var(--fill-0, #2DBCE2)" id="Vector_812" />
          <path d={svgPaths.p381dea72} fill="var(--fill-0, #2DBCE2)" id="Vector_813" />
          <path d={svgPaths.p1abdc500} fill="var(--fill-0, #2DBCE2)" id="Vector_814" opacity="0.3" />
          <path d={svgPaths.pa4a4a80} fill="var(--fill-0, #2DBCE2)" id="Vector_815" opacity="0.6" />
          <path d={svgPaths.p32797a00} fill="var(--fill-0, #2DBCE2)" id="Vector_816" opacity="0.3" />
          <path d={svgPaths.p207060f0} fill="var(--fill-0, #2DBCE2)" id="Vector_817" opacity="0.6" />
          <path d={svgPaths.p1a0e6c00} fill="var(--fill-0, #2DBCE2)" id="Vector_818" opacity="0.3" />
          <path d={svgPaths.p2885a300} fill="var(--fill-0, #2DBCE2)" id="Vector_819" opacity="0.3" />
          <path d={svgPaths.p10f32b00} fill="var(--fill-0, #2DBCE2)" id="Vector_820" />
          <path d={svgPaths.p1467040} fill="var(--fill-0, #2DBCE2)" id="Vector_821" />
          <path d={svgPaths.pf3c6880} fill="var(--fill-0, #2DBCE2)" id="Vector_822" opacity="0.3" />
          <path d={svgPaths.p2a231bc0} fill="var(--fill-0, #2DBCE2)" id="Vector_823" opacity="0.3" />
          <path d={svgPaths.pe32bb80} fill="var(--fill-0, #2DBCE2)" id="Vector_824" opacity="0.3" />
          <path d={svgPaths.p1d461100} fill="var(--fill-0, #2DBCE2)" id="Vector_825" opacity="0.6" />
          <path d={svgPaths.p25e74f00} fill="var(--fill-0, #2DBCE2)" id="Vector_826" opacity="0.3" />
          <path d={svgPaths.p49bb300} fill="var(--fill-0, #2DBCE2)" id="Vector_827" />
          <path d={svgPaths.p377b2500} fill="var(--fill-0, #2DBCE2)" id="Vector_828" opacity="0.6" />
          <path d={svgPaths.p19509a0} fill="var(--fill-0, #2DBCE2)" id="Vector_829" opacity="0.3" />
          <path d={svgPaths.p38854c00} fill="var(--fill-0, #2DBCE2)" id="Vector_830" opacity="0.3" />
          <path d={svgPaths.p986c700} fill="var(--fill-0, #2DBCE2)" id="Vector_831" opacity="0.6" />
          <path d={svgPaths.pdcbe800} fill="var(--fill-0, #2DBCE2)" id="Vector_832" />
          <path d={svgPaths.p3ede8400} fill="var(--fill-0, #2DBCE2)" id="Vector_833" opacity="0.6" />
          <path d={svgPaths.pe223300} fill="var(--fill-0, #2DBCE2)" id="Vector_834" opacity="0.3" />
          <path d={svgPaths.p2677700} fill="var(--fill-0, #2DBCE2)" id="Vector_835" />
          <path d={svgPaths.pd571900} fill="var(--fill-0, #2DBCE2)" id="Vector_836" opacity="0.3" />
          <path d={svgPaths.p4ca4880} fill="var(--fill-0, #2DBCE2)" id="Vector_837" />
          <path d={svgPaths.p30f85480} fill="var(--fill-0, #2DBCE2)" id="Vector_838" opacity="0.6" />
          <path d={svgPaths.p1497c3a0} fill="var(--fill-0, #2DBCE2)" id="Vector_839" opacity="0.3" />
          <path d={svgPaths.pc3d1500} fill="var(--fill-0, #2DBCE2)" id="Vector_840" opacity="0.3" />
          <path d={svgPaths.p1858c980} fill="var(--fill-0, #2DBCE2)" id="Vector_841" opacity="0.6" />
          <path d={svgPaths.p137baa00} fill="var(--fill-0, #2DBCE2)" id="Vector_842" />
          <path d={svgPaths.p317d7770} fill="var(--fill-0, #2DBCE2)" id="Vector_843" />
          <path d={svgPaths.p29840500} fill="var(--fill-0, #2DBCE2)" id="Vector_844" />
          <path d={svgPaths.p1d372d00} fill="var(--fill-0, #2DBCE2)" id="Vector_845" />
          <path d={svgPaths.p1c866410} fill="var(--fill-0, #2DBCE2)" id="Vector_846" opacity="0.6" />
          <path d={svgPaths.p3cc43580} fill="var(--fill-0, #2DBCE2)" id="Vector_847" opacity="0.3" />
          <path d={svgPaths.pb64a500} fill="var(--fill-0, #2DBCE2)" id="Vector_848" />
          <path d={svgPaths.p14bbfd00} fill="var(--fill-0, #2DBCE2)" id="Vector_849" opacity="0.3" />
          <path d={svgPaths.pe119f00} fill="var(--fill-0, #2DBCE2)" id="Vector_850" opacity="0.3" />
          <path d={svgPaths.p2ca271c0} fill="var(--fill-0, #2DBCE2)" id="Vector_851" opacity="0.3" />
          <path d={svgPaths.p296b7280} fill="var(--fill-0, #2DBCE2)" id="Vector_852" opacity="0.3" />
          <path d={svgPaths.p2abada00} fill="var(--fill-0, #2DBCE2)" id="Vector_853" />
          <path d={svgPaths.p25328300} fill="var(--fill-0, #2DBCE2)" id="Vector_854" opacity="0.3" />
          <path d={svgPaths.pf07c100} fill="var(--fill-0, #2DBCE2)" id="Vector_855" opacity="0.6" />
          <path d={svgPaths.p1ed2880} fill="var(--fill-0, #2DBCE2)" id="Vector_856" opacity="0.3" />
          <path d={svgPaths.pd580f00} fill="var(--fill-0, #2DBCE2)" id="Vector_857" />
          <path d={svgPaths.p1f414ff0} fill="var(--fill-0, #2DBCE2)" id="Vector_858" opacity="0.6" />
          <path d={svgPaths.pd7c9b70} fill="var(--fill-0, #2DBCE2)" id="Vector_859" />
          <path d={svgPaths.p10e4b900} fill="var(--fill-0, #2DBCE2)" id="Vector_860" opacity="0.6" />
          <path d={svgPaths.p339e0900} fill="var(--fill-0, #2DBCE2)" id="Vector_861" opacity="0.3" />
          <path d={svgPaths.p1e4e9a00} fill="var(--fill-0, #2DBCE2)" id="Vector_862" />
          <path d={svgPaths.p2093300} fill="var(--fill-0, #2DBCE2)" id="Vector_863" />
          <path d={svgPaths.p1334ac00} fill="var(--fill-0, #2DBCE2)" id="Vector_864" />
          <path d={svgPaths.pcd2d000} fill="var(--fill-0, #2DBCE2)" id="Vector_865" />
          <path d={svgPaths.p36c6bb00} fill="var(--fill-0, #2DBCE2)" id="Vector_866" opacity="0.3" />
          <path d={svgPaths.p21a4e180} fill="var(--fill-0, #2DBCE2)" id="Vector_867" opacity="0.6" />
          <path d={svgPaths.p17e53800} fill="var(--fill-0, #2DBCE2)" id="Vector_868" />
          <path d={svgPaths.p9c53080} fill="var(--fill-0, #2DBCE2)" id="Vector_869" opacity="0.6" />
          <path d={svgPaths.p3a87de00} fill="var(--fill-0, #2DBCE2)" id="Vector_870" opacity="0.6" />
          <path d={svgPaths.p172d82c0} fill="var(--fill-0, #2DBCE2)" id="Vector_871" opacity="0.3" />
          <path d={svgPaths.p2bc6be80} fill="var(--fill-0, #2DBCE2)" id="Vector_872" opacity="0.6" />
          <path d={svgPaths.p26a19a80} fill="var(--fill-0, #2DBCE2)" id="Vector_873" opacity="0.6" />
          <path d={svgPaths.p336c9680} fill="var(--fill-0, #2DBCE2)" id="Vector_874" opacity="0.6" />
          <path d={svgPaths.p3bef9200} fill="var(--fill-0, #2DBCE2)" id="Vector_875" opacity="0.3" />
          <path d={svgPaths.p19aee340} fill="var(--fill-0, #2DBCE2)" id="Vector_876" opacity="0.6" />
          <path d={svgPaths.p216dba40} fill="var(--fill-0, #2DBCE2)" id="Vector_877" opacity="0.3" />
          <path d={svgPaths.pa74de00} fill="var(--fill-0, #2DBCE2)" id="Vector_878" opacity="0.3" />
          <path d={svgPaths.p20c019c0} fill="var(--fill-0, #2DBCE2)" id="Vector_879" />
          <path d={svgPaths.p1e42cc80} fill="var(--fill-0, #2DBCE2)" id="Vector_880" opacity="0.6" />
          <path d={svgPaths.p63377f0} fill="var(--fill-0, #2DBCE2)" id="Vector_881" opacity="0.3" />
          <path d={svgPaths.p341e4c00} fill="var(--fill-0, #2DBCE2)" id="Vector_882" />
          <path d={svgPaths.p372a64f0} fill="var(--fill-0, #2DBCE2)" id="Vector_883" opacity="0.3" />
          <path d={svgPaths.p22288080} fill="var(--fill-0, #2DBCE2)" id="Vector_884" />
          <path d={svgPaths.p28d18e00} fill="var(--fill-0, #2DBCE2)" id="Vector_885" />
          <path d={svgPaths.p1fb3c300} fill="var(--fill-0, #2DBCE2)" id="Vector_886" opacity="0.6" />
          <path d={svgPaths.p17098580} fill="var(--fill-0, #2DBCE2)" id="Vector_887" opacity="0.3" />
          <path d={svgPaths.p2a81a800} fill="var(--fill-0, #2DBCE2)" id="Vector_888" opacity="0.3" />
          <path d={svgPaths.p2e275ec0} fill="var(--fill-0, #2DBCE2)" id="Vector_889" opacity="0.3" />
          <path d={svgPaths.p1b554c80} fill="var(--fill-0, #2DBCE2)" id="Vector_890" opacity="0.3" />
          <path d={svgPaths.p2a7fde00} fill="var(--fill-0, #2DBCE2)" id="Vector_891" opacity="0.6" />
          <path d={svgPaths.p4e59f00} fill="var(--fill-0, #2DBCE2)" id="Vector_892" opacity="0.3" />
          <path d={svgPaths.p10d97e80} fill="var(--fill-0, #2DBCE2)" id="Vector_893" opacity="0.6" />
          <path d={svgPaths.pb167380} fill="var(--fill-0, #2DBCE2)" id="Vector_894" opacity="0.6" />
          <path d={svgPaths.p82c0d00} fill="var(--fill-0, #2DBCE2)" id="Vector_895" />
          <path d={svgPaths.p3af59c40} fill="var(--fill-0, #2DBCE2)" id="Vector_896" opacity="0.3" />
          <path d={svgPaths.p23ca1f00} fill="var(--fill-0, #2DBCE2)" id="Vector_897" opacity="0.3" />
          <path d={svgPaths.p1b3c5700} fill="var(--fill-0, #2DBCE2)" id="Vector_898" opacity="0.6" />
          <path d={svgPaths.p2de1e700} fill="var(--fill-0, #2DBCE2)" id="Vector_899" opacity="0.6" />
          <path d={svgPaths.p47d3900} fill="var(--fill-0, #2DBCE2)" id="Vector_900" opacity="0.3" />
          <path d={svgPaths.p1769d680} fill="var(--fill-0, #2DBCE2)" id="Vector_901" opacity="0.3" />
          <path d={svgPaths.p45c0eb0} fill="var(--fill-0, #2DBCE2)" id="Vector_902" opacity="0.3" />
          <path d={svgPaths.p525900} fill="var(--fill-0, #2DBCE2)" id="Vector_903" opacity="0.6" />
          <path d={svgPaths.p12813100} fill="var(--fill-0, #2DBCE2)" id="Vector_904" opacity="0.3" />
          <path d={svgPaths.p33038d80} fill="var(--fill-0, #2DBCE2)" id="Vector_905" opacity="0.6" />
          <path d={svgPaths.p1e63a600} fill="var(--fill-0, #2DBCE2)" id="Vector_906" opacity="0.3" />
          <path d={svgPaths.p3ea62a00} fill="var(--fill-0, #2DBCE2)" id="Vector_907" opacity="0.6" />
          <path d={svgPaths.pe8f2680} fill="var(--fill-0, #2DBCE2)" id="Vector_908" />
          <path d={svgPaths.p6d55400} fill="var(--fill-0, #2DBCE2)" id="Vector_909" opacity="0.6" />
          <path d={svgPaths.p32ed3200} fill="var(--fill-0, #2DBCE2)" id="Vector_910" opacity="0.3" />
          <path d={svgPaths.p20431d00} fill="var(--fill-0, #2DBCE2)" id="Vector_911" opacity="0.6" />
          <path d={svgPaths.p3bb93640} fill="var(--fill-0, #2DBCE2)" id="Vector_912" />
          <path d={svgPaths.p2f20b80} fill="var(--fill-0, #2DBCE2)" id="Vector_913" opacity="0.3" />
          <path d={svgPaths.p3c317800} fill="var(--fill-0, #2DBCE2)" id="Vector_914" opacity="0.3" />
          <path d={svgPaths.p3148c870} fill="var(--fill-0, #2DBCE2)" id="Vector_915" opacity="0.6" />
          <path d={svgPaths.p2177f700} fill="var(--fill-0, #2DBCE2)" id="Vector_916" opacity="0.3" />
          <path d={svgPaths.p33376100} fill="var(--fill-0, #2DBCE2)" id="Vector_917" opacity="0.6" />
          <path d={svgPaths.p1485800} fill="var(--fill-0, #2DBCE2)" id="Vector_918" opacity="0.6" />
          <path d={svgPaths.p294366c0} fill="var(--fill-0, #2DBCE2)" id="Vector_919" />
          <path d={svgPaths.p25d18000} fill="var(--fill-0, #2DBCE2)" id="Vector_920" opacity="0.6" />
          <path d={svgPaths.p52d1200} fill="var(--fill-0, #2DBCE2)" id="Vector_921" />
          <path d={svgPaths.p30361100} fill="var(--fill-0, #2DBCE2)" id="Vector_922" opacity="0.3" />
          <path d={svgPaths.p1529c900} fill="var(--fill-0, #2DBCE2)" id="Vector_923" />
          <path d={svgPaths.p1c7bbf00} fill="var(--fill-0, #2DBCE2)" id="Vector_924" />
          <path d={svgPaths.p1f6e2300} fill="var(--fill-0, #2DBCE2)" id="Vector_925" opacity="0.6" />
          <path d={svgPaths.p2318a00} fill="var(--fill-0, #2DBCE2)" id="Vector_926" />
          <path d={svgPaths.p368c3a80} fill="var(--fill-0, #2DBCE2)" id="Vector_927" />
          <path d={svgPaths.p393d2580} fill="var(--fill-0, #2DBCE2)" id="Vector_928" opacity="0.3" />
          <path d={svgPaths.p11e05080} fill="var(--fill-0, #2DBCE2)" id="Vector_929" opacity="0.3" />
          <path d={svgPaths.p1b29fc00} fill="var(--fill-0, #2DBCE2)" id="Vector_930" opacity="0.3" />
          <path d={svgPaths.p1b0d93c0} fill="var(--fill-0, #2DBCE2)" id="Vector_931" opacity="0.3" />
          <path d={svgPaths.p3ce30280} fill="var(--fill-0, #2DBCE2)" id="Vector_932" opacity="0.6" />
          <path d={svgPaths.p3591c80} fill="var(--fill-0, #2DBCE2)" id="Vector_933" />
          <path d={svgPaths.p38ccfe80} fill="var(--fill-0, #2DBCE2)" id="Vector_934" />
          <path d={svgPaths.p25e6fa80} fill="var(--fill-0, #2DBCE2)" id="Vector_935" />
          <path d={svgPaths.p1774ec00} fill="var(--fill-0, #2DBCE2)" id="Vector_936" />
          <path d={svgPaths.p2016e700} fill="var(--fill-0, #2DBCE2)" id="Vector_937" />
          <path d={svgPaths.p3e2ba680} fill="var(--fill-0, #2DBCE2)" id="Vector_938" opacity="0.3" />
          <path d={svgPaths.p113184c0} fill="var(--fill-0, #2DBCE2)" id="Vector_939" />
          <path d={svgPaths.p1f54bd80} fill="var(--fill-0, #2DBCE2)" id="Vector_940" opacity="0.6" />
          <path d={svgPaths.p21def690} fill="var(--fill-0, #2DBCE2)" id="Vector_941" />
          <path d={svgPaths.p3a629a80} fill="var(--fill-0, #2DBCE2)" id="Vector_942" opacity="0.3" />
          <path d={svgPaths.pb7c1f80} fill="var(--fill-0, #2DBCE2)" id="Vector_943" />
          <path d={svgPaths.p30ae6880} fill="var(--fill-0, #2DBCE2)" id="Vector_944" />
          <path d={svgPaths.p397da300} fill="var(--fill-0, #2DBCE2)" id="Vector_945" opacity="0.3" />
          <path d={svgPaths.p2b3ee4f0} fill="var(--fill-0, #2DBCE2)" id="Vector_946" />
          <path d={svgPaths.p79a8200} fill="var(--fill-0, #2DBCE2)" id="Vector_947" opacity="0.3" />
          <path d={svgPaths.p34799400} fill="var(--fill-0, #2DBCE2)" id="Vector_948" opacity="0.6" />
          <path d={svgPaths.p259ca700} fill="var(--fill-0, #2DBCE2)" id="Vector_949" opacity="0.6" />
          <path d={svgPaths.p24e59580} fill="var(--fill-0, #2DBCE2)" id="Vector_950" opacity="0.3" />
          <path d={svgPaths.p7a5d5f0} fill="var(--fill-0, #2DBCE2)" id="Vector_951" opacity="0.3" />
          <path d={svgPaths.p34d17180} fill="var(--fill-0, #2DBCE2)" id="Vector_952" opacity="0.6" />
          <path d={svgPaths.p35256300} fill="var(--fill-0, #2DBCE2)" id="Vector_953" />
          <path d={svgPaths.p9dd4400} fill="var(--fill-0, #2DBCE2)" id="Vector_954" opacity="0.3" />
          <path d={svgPaths.pcf82700} fill="var(--fill-0, #2DBCE2)" id="Vector_955" opacity="0.3" />
          <path d={svgPaths.p24f59500} fill="var(--fill-0, #2DBCE2)" id="Vector_956" opacity="0.6" />
          <path d={svgPaths.p3abcf600} fill="var(--fill-0, #2DBCE2)" id="Vector_957" opacity="0.3" />
          <path d={svgPaths.p208b7b40} fill="var(--fill-0, #2DBCE2)" id="Vector_958" opacity="0.6" />
          <path d={svgPaths.p15625700} fill="var(--fill-0, #2DBCE2)" id="Vector_959" opacity="0.3" />
          <path d={svgPaths.p3e6e9b40} fill="var(--fill-0, #2DBCE2)" id="Vector_960" opacity="0.3" />
          <path d={svgPaths.p357d0700} fill="var(--fill-0, #2DBCE2)" id="Vector_961" />
          <path d={svgPaths.p138ad80} fill="var(--fill-0, #2DBCE2)" id="Vector_962" opacity="0.3" />
          <path d={svgPaths.p364cb800} fill="var(--fill-0, #2DBCE2)" id="Vector_963" />
          <path d={svgPaths.p15c12980} fill="var(--fill-0, #2DBCE2)" id="Vector_964" opacity="0.6" />
          <path d={svgPaths.p12c47900} fill="var(--fill-0, #2DBCE2)" id="Vector_965" />
          <path d={svgPaths.p3b632e00} fill="var(--fill-0, #2DBCE2)" id="Vector_966" />
          <path d={svgPaths.p48b7a00} fill="var(--fill-0, #2DBCE2)" id="Vector_967" />
          <path d={svgPaths.p3d6486c0} fill="var(--fill-0, #2DBCE2)" id="Vector_968" opacity="0.6" />
          <path d={svgPaths.p1eb56680} fill="var(--fill-0, #2DBCE2)" id="Vector_969" opacity="0.3" />
          <path d={svgPaths.p2a38ee00} fill="var(--fill-0, #2DBCE2)" id="Vector_970" opacity="0.6" />
          <path d={svgPaths.p51d5800} fill="var(--fill-0, #2DBCE2)" id="Vector_971" opacity="0.3" />
          <path d={svgPaths.p2c894500} fill="var(--fill-0, #2DBCE2)" id="Vector_972" />
          <path d={svgPaths.p26da0c80} fill="var(--fill-0, #2DBCE2)" id="Vector_973" opacity="0.6" />
          <path d={svgPaths.p357fcb80} fill="var(--fill-0, #2DBCE2)" id="Vector_974" />
          <path d={svgPaths.p17f0cf00} fill="var(--fill-0, #2DBCE2)" id="Vector_975" opacity="0.3" />
          <path d={svgPaths.p3d03e00} fill="var(--fill-0, #2DBCE2)" id="Vector_976" opacity="0.3" />
          <path d={svgPaths.p20489900} fill="var(--fill-0, #2DBCE2)" id="Vector_977" opacity="0.3" />
          <path d={svgPaths.p2011bd00} fill="var(--fill-0, #2DBCE2)" id="Vector_978" opacity="0.3" />
          <path d={svgPaths.p2a117c00} fill="var(--fill-0, #2DBCE2)" id="Vector_979" opacity="0.6" />
          <path d={svgPaths.p2dc54a00} fill="var(--fill-0, #2DBCE2)" id="Vector_980" opacity="0.6" />
          <path d={svgPaths.p3b7c6800} fill="var(--fill-0, #2DBCE2)" id="Vector_981" />
          <path d={svgPaths.p3b869a00} fill="var(--fill-0, #2DBCE2)" id="Vector_982" opacity="0.3" />
          <path d={svgPaths.p2a775340} fill="var(--fill-0, #2DBCE2)" id="Vector_983" opacity="0.3" />
          <path d={svgPaths.p1f165800} fill="var(--fill-0, #2DBCE2)" id="Vector_984" opacity="0.3" />
          <path d={svgPaths.p958d280} fill="var(--fill-0, #2DBCE2)" id="Vector_985" opacity="0.6" />
          <path d={svgPaths.pceb6370} fill="var(--fill-0, #2DBCE2)" id="Vector_986" opacity="0.3" />
          <path d={svgPaths.p3cfb5700} fill="var(--fill-0, #2DBCE2)" id="Vector_987" opacity="0.3" />
          <path d={svgPaths.p3b1a9540} fill="var(--fill-0, #2DBCE2)" id="Vector_988" opacity="0.6" />
          <path d={svgPaths.p32597bc0} fill="var(--fill-0, #2DBCE2)" id="Vector_989" />
          <path d={svgPaths.p2012cc00} fill="var(--fill-0, #2DBCE2)" id="Vector_990" opacity="0.3" />
          <path d={svgPaths.p3fb7bd00} fill="var(--fill-0, #2DBCE2)" id="Vector_991" opacity="0.3" />
          <path d={svgPaths.p170253f0} fill="var(--fill-0, #2DBCE2)" id="Vector_992" />
          <path d={svgPaths.p8a825c0} fill="var(--fill-0, #2DBCE2)" id="Vector_993" opacity="0.3" />
          <path d={svgPaths.pa317000} fill="var(--fill-0, #2DBCE2)" id="Vector_994" opacity="0.3" />
          <path d={svgPaths.p143c4600} fill="var(--fill-0, #2DBCE2)" id="Vector_995" opacity="0.6" />
          <path d={svgPaths.p2ab41380} fill="var(--fill-0, #2DBCE2)" id="Vector_996" opacity="0.3" />
          <path d={svgPaths.p28993300} fill="var(--fill-0, #2DBCE2)" id="Vector_997" opacity="0.6" />
          <path d={svgPaths.p18ba1d00} fill="var(--fill-0, #2DBCE2)" id="Vector_998" />
          <path d={svgPaths.p14253680} fill="var(--fill-0, #2DBCE2)" id="Vector_999" opacity="0.6" />
          <path d={svgPaths.p3b043770} fill="var(--fill-0, #2DBCE2)" id="Vector_1000" opacity="0.3" />
          <path d={svgPaths.p374c3a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1001" opacity="0.6" />
          <path d={svgPaths.p3d1bb280} fill="var(--fill-0, #2DBCE2)" id="Vector_1002" opacity="0.6" />
          <path d={svgPaths.p130ac400} fill="var(--fill-0, #2DBCE2)" id="Vector_1003" opacity="0.3" />
          <path d={svgPaths.p6f3a400} fill="var(--fill-0, #2DBCE2)" id="Vector_1004" opacity="0.6" />
          <path d={svgPaths.p1a0ad480} fill="var(--fill-0, #2DBCE2)" id="Vector_1005" opacity="0.6" />
          <path d={svgPaths.p1330d880} fill="var(--fill-0, #2DBCE2)" id="Vector_1006" />
          <path d={svgPaths.p20a4c280} fill="var(--fill-0, #2DBCE2)" id="Vector_1007" />
          <path d={svgPaths.p388505f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1008" />
          <path d={svgPaths.p362e5f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1009" opacity="0.3" />
          <path d={svgPaths.p124b500} fill="var(--fill-0, #2DBCE2)" id="Vector_1010" />
          <path d={svgPaths.p1ba8dc00} fill="var(--fill-0, #2DBCE2)" id="Vector_1011" opacity="0.3" />
          <path d={svgPaths.p36bc9c80} fill="var(--fill-0, #2DBCE2)" id="Vector_1012" opacity="0.6" />
          <path d={svgPaths.pb352000} fill="var(--fill-0, #2DBCE2)" id="Vector_1013" opacity="0.6" />
          <path d={svgPaths.p2fd65a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1014" />
          <path d={svgPaths.p36c1bb40} fill="var(--fill-0, #2DBCE2)" id="Vector_1015" />
          <path d={svgPaths.pb36e400} fill="var(--fill-0, #2DBCE2)" id="Vector_1016" />
          <path d={svgPaths.paf6180} fill="var(--fill-0, #2DBCE2)" id="Vector_1017" opacity="0.3" />
          <path d={svgPaths.p26ee3600} fill="var(--fill-0, #2DBCE2)" id="Vector_1018" />
          <path d={svgPaths.p1c91ae00} fill="var(--fill-0, #2DBCE2)" id="Vector_1019" />
          <path d={svgPaths.p9234500} fill="var(--fill-0, #2DBCE2)" id="Vector_1020" opacity="0.6" />
          <path d={svgPaths.p1bae2700} fill="var(--fill-0, #2DBCE2)" id="Vector_1021" opacity="0.3" />
          <path d={svgPaths.p18460680} fill="var(--fill-0, #2DBCE2)" id="Vector_1022" opacity="0.3" />
          <path d={svgPaths.p2a23d600} fill="var(--fill-0, #2DBCE2)" id="Vector_1023" opacity="0.3" />
          <path d={svgPaths.p19b4eb00} fill="var(--fill-0, #2DBCE2)" id="Vector_1024" />
          <path d={svgPaths.p4f05100} fill="var(--fill-0, #2DBCE2)" id="Vector_1025" opacity="0.3" />
          <path d={svgPaths.p1f02c780} fill="var(--fill-0, #2DBCE2)" id="Vector_1026" opacity="0.3" />
          <path d={svgPaths.p3214180} fill="var(--fill-0, #2DBCE2)" id="Vector_1027" />
          <path d={svgPaths.p1ec4b100} fill="var(--fill-0, #2DBCE2)" id="Vector_1028" />
          <path d={svgPaths.p10fbbf00} fill="var(--fill-0, #2DBCE2)" id="Vector_1029" />
          <path d={svgPaths.p1a6ec600} fill="var(--fill-0, #2DBCE2)" id="Vector_1030" opacity="0.3" />
          <path d={svgPaths.p37f53980} fill="var(--fill-0, #2DBCE2)" id="Vector_1031" opacity="0.6" />
          <path d={svgPaths.p1d52f580} fill="var(--fill-0, #2DBCE2)" id="Vector_1032" opacity="0.6" />
          <path d={svgPaths.p31046000} fill="var(--fill-0, #2DBCE2)" id="Vector_1033" opacity="0.3" />
          <path d={svgPaths.p1b7d3e80} fill="var(--fill-0, #2DBCE2)" id="Vector_1034" opacity="0.3" />
          <path d={svgPaths.p1ac85b40} fill="var(--fill-0, #2DBCE2)" id="Vector_1035" opacity="0.3" />
          <path d={svgPaths.p16eb6980} fill="var(--fill-0, #2DBCE2)" id="Vector_1036" opacity="0.3" />
          <path d={svgPaths.p1a8b7200} fill="var(--fill-0, #2DBCE2)" id="Vector_1037" />
          <path d={svgPaths.p16ccc700} fill="var(--fill-0, #2DBCE2)" id="Vector_1038" opacity="0.6" />
          <path d={svgPaths.p3e70ba00} fill="var(--fill-0, #2DBCE2)" id="Vector_1039" opacity="0.6" />
          <path d={svgPaths.p168ea700} fill="var(--fill-0, #2DBCE2)" id="Vector_1040" />
          <path d={svgPaths.p2b8bdd80} fill="var(--fill-0, #2DBCE2)" id="Vector_1041" opacity="0.6" />
          <path d={svgPaths.p2bd04400} fill="var(--fill-0, #2DBCE2)" id="Vector_1042" opacity="0.6" />
          <path d={svgPaths.p1a83e680} fill="var(--fill-0, #2DBCE2)" id="Vector_1043" opacity="0.3" />
          <path d={svgPaths.p2b928e00} fill="var(--fill-0, #2DBCE2)" id="Vector_1044" opacity="0.6" />
          <path d={svgPaths.p24dbd300} fill="var(--fill-0, #2DBCE2)" id="Vector_1045" />
          <path d={svgPaths.ped05400} fill="var(--fill-0, #2DBCE2)" id="Vector_1046" opacity="0.3" />
          <path d={svgPaths.paccb2c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1047" opacity="0.3" />
          <path d={svgPaths.p3675f100} fill="var(--fill-0, #2DBCE2)" id="Vector_1048" opacity="0.6" />
          <path d={svgPaths.p14557d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1049" opacity="0.6" />
          <path d={svgPaths.p3a4c67c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1050" />
          <path d={svgPaths.p1db6de00} fill="var(--fill-0, #2DBCE2)" id="Vector_1051" opacity="0.6" />
          <path d={svgPaths.p27b2ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_1052" opacity="0.6" />
          <path d={svgPaths.p2ec27500} fill="var(--fill-0, #2DBCE2)" id="Vector_1053" opacity="0.3" />
          <path d={svgPaths.p6ba4500} fill="var(--fill-0, #2DBCE2)" id="Vector_1054" />
          <path d={svgPaths.p36b12600} fill="var(--fill-0, #2DBCE2)" id="Vector_1055" opacity="0.3" />
          <path d={svgPaths.p272d6f80} fill="var(--fill-0, #2DBCE2)" id="Vector_1056" />
          <path d={svgPaths.p2f713f80} fill="var(--fill-0, #2DBCE2)" id="Vector_1057" opacity="0.3" />
          <path d={svgPaths.p8c33080} fill="var(--fill-0, #2DBCE2)" id="Vector_1058" />
          <path d={svgPaths.p226864d2} fill="var(--fill-0, #2DBCE2)" id="Vector_1059" opacity="0.6" />
          <path d={svgPaths.p256c700} fill="var(--fill-0, #2DBCE2)" id="Vector_1060" />
          <path d={svgPaths.p63a2080} fill="var(--fill-0, #2DBCE2)" id="Vector_1061" opacity="0.3" />
          <path d={svgPaths.p2e9f9800} fill="var(--fill-0, #2DBCE2)" id="Vector_1062" opacity="0.3" />
          <path d={svgPaths.p1a65c100} fill="var(--fill-0, #2DBCE2)" id="Vector_1063" />
          <path d={svgPaths.p187e3b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1064" opacity="0.3" />
          <path d={svgPaths.p14765e80} fill="var(--fill-0, #2DBCE2)" id="Vector_1065" opacity="0.6" />
          <path d={svgPaths.p354ceb80} fill="var(--fill-0, #2DBCE2)" id="Vector_1066" opacity="0.6" />
          <path d={svgPaths.p3d8af400} fill="var(--fill-0, #2DBCE2)" id="Vector_1067" opacity="0.3" />
          <path d={svgPaths.p1521ad72} fill="var(--fill-0, #2DBCE2)" id="Vector_1068" opacity="0.6" />
          <path d={svgPaths.p9edfdc0} fill="var(--fill-0, #2DBCE2)" id="Vector_1069" opacity="0.6" />
          <path d={svgPaths.p3540e080} fill="var(--fill-0, #2DBCE2)" id="Vector_1070" />
          <path d={svgPaths.p3531f180} fill="var(--fill-0, #2DBCE2)" id="Vector_1071" />
          <path d={svgPaths.p20732700} fill="var(--fill-0, #2DBCE2)" id="Vector_1072" opacity="0.6" />
          <path d={svgPaths.p1a778f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1073" opacity="0.6" />
          <path d={svgPaths.p1b518400} fill="var(--fill-0, #2DBCE2)" id="Vector_1074" opacity="0.3" />
          <path d={svgPaths.pf71eb00} fill="var(--fill-0, #2DBCE2)" id="Vector_1075" opacity="0.6" />
          <path d={svgPaths.p2251e880} fill="var(--fill-0, #2DBCE2)" id="Vector_1076" opacity="0.3" />
          <path d={svgPaths.pd670f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1077" />
          <path d={svgPaths.p2d5de380} fill="var(--fill-0, #2DBCE2)" id="Vector_1078" />
          <path d={svgPaths.p28e87d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1079" opacity="0.6" />
          <path d={svgPaths.p3bd52380} fill="var(--fill-0, #2DBCE2)" id="Vector_1080" opacity="0.6" />
          <path d={svgPaths.p362b1680} fill="var(--fill-0, #2DBCE2)" id="Vector_1081" />
          <path d={svgPaths.p22aca00} fill="var(--fill-0, #2DBCE2)" id="Vector_1082" />
          <path d={svgPaths.p318d7000} fill="var(--fill-0, #2DBCE2)" id="Vector_1083" opacity="0.6" />
          <path d={svgPaths.pd006440} fill="var(--fill-0, #2DBCE2)" id="Vector_1084" opacity="0.3" />
          <path d={svgPaths.p2ad32780} fill="var(--fill-0, #2DBCE2)" id="Vector_1085" />
          <path d={svgPaths.p3982f000} fill="var(--fill-0, #2DBCE2)" id="Vector_1086" opacity="0.6" />
          <path d={svgPaths.p1ac69980} fill="var(--fill-0, #2DBCE2)" id="Vector_1087" opacity="0.6" />
          <path d={svgPaths.p9cf84c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1088" opacity="0.3" />
          <path d={svgPaths.pb80dd70} fill="var(--fill-0, #2DBCE2)" id="Vector_1089" />
          <path d={svgPaths.p28c9b0} fill="var(--fill-0, #2DBCE2)" id="Vector_1090" opacity="0.3" />
          <path d={svgPaths.p30fb8f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1091" opacity="0.6" />
          <path d={svgPaths.p35a60700} fill="var(--fill-0, #2DBCE2)" id="Vector_1092" opacity="0.3" />
          <path d={svgPaths.p1ae1c780} fill="var(--fill-0, #2DBCE2)" id="Vector_1093" opacity="0.3" />
          <path d={svgPaths.p3c6835f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1094" opacity="0.3" />
          <path d={svgPaths.p59f0780} fill="var(--fill-0, #2DBCE2)" id="Vector_1095" opacity="0.3" />
          <path d={svgPaths.p2ac9ac00} fill="var(--fill-0, #2DBCE2)" id="Vector_1096" opacity="0.6" />
          <path d={svgPaths.p61f0ff0} fill="var(--fill-0, #2DBCE2)" id="Vector_1097" opacity="0.3" />
          <path d={svgPaths.p263f3f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1098" opacity="0.6" />
          <path d={svgPaths.pcdbb700} fill="var(--fill-0, #2DBCE2)" id="Vector_1099" opacity="0.3" />
          <path d={svgPaths.p3c10300} fill="var(--fill-0, #2DBCE2)" id="Vector_1100" opacity="0.6" />
          <path d={svgPaths.p27030e00} fill="var(--fill-0, #2DBCE2)" id="Vector_1101" opacity="0.6" />
          <path d={svgPaths.p16339000} fill="var(--fill-0, #2DBCE2)" id="Vector_1102" />
          <path d={svgPaths.p288d3100} fill="var(--fill-0, #2DBCE2)" id="Vector_1103" opacity="0.3" />
          <path d={svgPaths.p15a7a680} fill="var(--fill-0, #2DBCE2)" id="Vector_1104" opacity="0.3" />
          <path d={svgPaths.p302e5800} fill="var(--fill-0, #2DBCE2)" id="Vector_1105" opacity="0.3" />
          <path d={svgPaths.p13ee46c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1106" />
          <path d={svgPaths.p16356080} fill="var(--fill-0, #2DBCE2)" id="Vector_1107" opacity="0.3" />
          <path d={svgPaths.p217e200} fill="var(--fill-0, #2DBCE2)" id="Vector_1108" />
          <path d={svgPaths.p17511d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1109" />
          <path d={svgPaths.p29b35bf0} fill="var(--fill-0, #2DBCE2)" id="Vector_1110" />
          <path d={svgPaths.p3e903d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1111" opacity="0.6" />
          <path d={svgPaths.pf9fb400} fill="var(--fill-0, #2DBCE2)" id="Vector_1112" opacity="0.3" />
          <path d={svgPaths.p357fcf00} fill="var(--fill-0, #2DBCE2)" id="Vector_1113" opacity="0.3" />
          <path d={svgPaths.p2d8b7a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1114" opacity="0.3" />
          <path d={svgPaths.p29258380} fill="var(--fill-0, #2DBCE2)" id="Vector_1115" opacity="0.6" />
          <path d={svgPaths.p3d0e400} fill="var(--fill-0, #2DBCE2)" id="Vector_1116" />
          <path d={svgPaths.p26e588f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1117" />
          <path d={svgPaths.p19fd6200} fill="var(--fill-0, #2DBCE2)" id="Vector_1118" opacity="0.6" />
          <path d={svgPaths.p98cba00} fill="var(--fill-0, #2DBCE2)" id="Vector_1119" opacity="0.6" />
          <path d={svgPaths.p27817d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1120" />
          <path d={svgPaths.p19999900} fill="var(--fill-0, #2DBCE2)" id="Vector_1121" opacity="0.3" />
          <path d={svgPaths.pf188680} fill="var(--fill-0, #2DBCE2)" id="Vector_1122" opacity="0.6" />
          <path d={svgPaths.p39b71100} fill="var(--fill-0, #2DBCE2)" id="Vector_1123" opacity="0.3" />
          <path d={svgPaths.p3277480} fill="var(--fill-0, #2DBCE2)" id="Vector_1124" />
          <path d={svgPaths.p3a48a580} fill="var(--fill-0, #2DBCE2)" id="Vector_1125" opacity="0.6" />
          <path d={svgPaths.p6fedd80} fill="var(--fill-0, #2DBCE2)" id="Vector_1126" />
          <path d={svgPaths.p11936a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1127" />
          <path d={svgPaths.p29763600} fill="var(--fill-0, #2DBCE2)" id="Vector_1128" />
          <path d={svgPaths.p195e17f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1129" opacity="0.6" />
          <path d={svgPaths.p333e3980} fill="var(--fill-0, #2DBCE2)" id="Vector_1130" opacity="0.3" />
          <path d={svgPaths.p388df880} fill="var(--fill-0, #2DBCE2)" id="Vector_1131" opacity="0.6" />
          <path d={svgPaths.pfd4b000} fill="var(--fill-0, #2DBCE2)" id="Vector_1132" opacity="0.6" />
          <path d={svgPaths.p8008900} fill="var(--fill-0, #2DBCE2)" id="Vector_1133" />
          <path d={svgPaths.p28e80b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1134" opacity="0.6" />
          <path d={svgPaths.p1557bb80} fill="var(--fill-0, #2DBCE2)" id="Vector_1135" />
          <path d={svgPaths.p3d2277f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1136" opacity="0.3" />
          <path d={svgPaths.p31a8f800} fill="var(--fill-0, #2DBCE2)" id="Vector_1137" opacity="0.6" />
          <path d={svgPaths.p345a6800} fill="var(--fill-0, #2DBCE2)" id="Vector_1138" opacity="0.6" />
          <path d={svgPaths.p1168d480} fill="var(--fill-0, #2DBCE2)" id="Vector_1139" />
          <path d={svgPaths.p1b896160} fill="var(--fill-0, #2DBCE2)" id="Vector_1140" opacity="0.6" />
          <path d={svgPaths.p23581080} fill="var(--fill-0, #2DBCE2)" id="Vector_1141" opacity="0.3" />
          <path d={svgPaths.pa69cbc0} fill="var(--fill-0, #2DBCE2)" id="Vector_1142" opacity="0.6" />
          <path d={svgPaths.p1b30100} fill="var(--fill-0, #2DBCE2)" id="Vector_1143" opacity="0.3" />
          <path d={svgPaths.p3d9bd400} fill="var(--fill-0, #2DBCE2)" id="Vector_1144" opacity="0.3" />
          <path d={svgPaths.p17c77b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1145" opacity="0.3" />
          <path d={svgPaths.p521200} fill="var(--fill-0, #2DBCE2)" id="Vector_1146" opacity="0.3" />
          <path d={svgPaths.p3c7a6820} fill="var(--fill-0, #2DBCE2)" id="Vector_1147" />
          <path d={svgPaths.p2ab79280} fill="var(--fill-0, #2DBCE2)" id="Vector_1148" opacity="0.6" />
          <path d={svgPaths.p21f80200} fill="var(--fill-0, #2DBCE2)" id="Vector_1149" opacity="0.6" />
          <path d={svgPaths.p2befd4f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1150" opacity="0.6" />
          <path d={svgPaths.p231d2d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1151" opacity="0.3" />
          <path d={svgPaths.p18281800} fill="var(--fill-0, #2DBCE2)" id="Vector_1152" opacity="0.6" />
          <path d={svgPaths.p197f5cc0} fill="var(--fill-0, #2DBCE2)" id="Vector_1153" opacity="0.3" />
          <path d={svgPaths.p2f8c3000} fill="var(--fill-0, #2DBCE2)" id="Vector_1154" opacity="0.3" />
          <path d={svgPaths.p51698f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1155" />
          <path d={svgPaths.p26db62f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1156" opacity="0.3" />
          <path d={svgPaths.p245925c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1157" />
          <path d={svgPaths.p48c7c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1158" opacity="0.3" />
          <path d={svgPaths.p1916cb00} fill="var(--fill-0, #2DBCE2)" id="Vector_1159" />
          <path d={svgPaths.p3381ac80} fill="var(--fill-0, #2DBCE2)" id="Vector_1160" />
          <path d={svgPaths.p113ebd80} fill="var(--fill-0, #2DBCE2)" id="Vector_1161" opacity="0.6" />
          <path d={svgPaths.p20306780} fill="var(--fill-0, #2DBCE2)" id="Vector_1162" opacity="0.3" />
          <path d={svgPaths.p14b32c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1163" />
          <path d={svgPaths.p2cb4a280} fill="var(--fill-0, #2DBCE2)" id="Vector_1164" opacity="0.6" />
          <path d={svgPaths.p17df380} fill="var(--fill-0, #2DBCE2)" id="Vector_1165" />
          <path d={svgPaths.p36633600} fill="var(--fill-0, #2DBCE2)" id="Vector_1166" />
          <path d={svgPaths.p31560c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1167" />
          <path d={svgPaths.p6f5be80} fill="var(--fill-0, #2DBCE2)" id="Vector_1168" opacity="0.6" />
          <path d={svgPaths.p30754b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1169" opacity="0.3" />
          <path d={svgPaths.p38378d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1170" opacity="0.6" />
          <path d={svgPaths.p1c9b6200} fill="var(--fill-0, #2DBCE2)" id="Vector_1171" opacity="0.6" />
          <path d={svgPaths.p184e1580} fill="var(--fill-0, #2DBCE2)" id="Vector_1172" />
          <path d={svgPaths.p3ebbd380} fill="var(--fill-0, #2DBCE2)" id="Vector_1173" opacity="0.6" />
          <path d={svgPaths.pe9f5a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1174" />
          <path d={svgPaths.peef1d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1175" />
          <path d={svgPaths.p503f500} fill="var(--fill-0, #2DBCE2)" id="Vector_1176" />
          <path d={svgPaths.p19f55780} fill="var(--fill-0, #2DBCE2)" id="Vector_1177" />
          <path d={svgPaths.p1fee7500} fill="var(--fill-0, #2DBCE2)" id="Vector_1178" opacity="0.3" />
          <path d={svgPaths.p1b4e8480} fill="var(--fill-0, #2DBCE2)" id="Vector_1179" opacity="0.6" />
          <path d={svgPaths.p37fb7500} fill="var(--fill-0, #2DBCE2)" id="Vector_1180" />
          <path d={svgPaths.p1fd36740} fill="var(--fill-0, #2DBCE2)" id="Vector_1181" opacity="0.6" />
          <path d={svgPaths.p32421900} fill="var(--fill-0, #2DBCE2)" id="Vector_1182" />
          <path d={svgPaths.p3be40780} fill="var(--fill-0, #2DBCE2)" id="Vector_1183" opacity="0.3" />
          <path d={svgPaths.p344028f1} fill="var(--fill-0, #2DBCE2)" id="Vector_1184" />
          <path d={svgPaths.p5e19000} fill="var(--fill-0, #2DBCE2)" id="Vector_1185" opacity="0.6" />
          <path d={svgPaths.p22783c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1186" opacity="0.6" />
          <path d={svgPaths.p2e30fe00} fill="var(--fill-0, #2DBCE2)" id="Vector_1187" opacity="0.6" />
          <path d={svgPaths.p7e05000} fill="var(--fill-0, #2DBCE2)" id="Vector_1188" opacity="0.6" />
          <path d={svgPaths.p2450880} fill="var(--fill-0, #2DBCE2)" id="Vector_1189" opacity="0.3" />
          <path d={svgPaths.p377a1a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1190" opacity="0.3" />
          <path d={svgPaths.p7275c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1191" opacity="0.6" />
          <path d={svgPaths.p3436f580} fill="var(--fill-0, #2DBCE2)" id="Vector_1192" opacity="0.6" />
          <path d={svgPaths.p310e6180} fill="var(--fill-0, #2DBCE2)" id="Vector_1193" opacity="0.3" />
          <path d={svgPaths.p34cc8b80} fill="var(--fill-0, #2DBCE2)" id="Vector_1194" />
          <path d={svgPaths.pd659a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1195" />
          <path d={svgPaths.p23e60200} fill="var(--fill-0, #2DBCE2)" id="Vector_1196" opacity="0.3" />
          <path d={svgPaths.p7019b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1197" opacity="0.6" />
          <path d={svgPaths.p3b9ed000} fill="var(--fill-0, #2DBCE2)" id="Vector_1198" opacity="0.6" />
          <path d={svgPaths.p12917100} fill="var(--fill-0, #2DBCE2)" id="Vector_1199" opacity="0.3" />
          <path d={svgPaths.p1b270500} fill="var(--fill-0, #2DBCE2)" id="Vector_1200" opacity="0.6" />
          <path d={svgPaths.p3194bb80} fill="var(--fill-0, #2DBCE2)" id="Vector_1201" opacity="0.3" />
          <path d={svgPaths.p1a3d9a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1202" />
          <path d={svgPaths.p20765900} fill="var(--fill-0, #2DBCE2)" id="Vector_1203" opacity="0.6" />
          <path d={svgPaths.p22cc4900} fill="var(--fill-0, #2DBCE2)" id="Vector_1204" opacity="0.3" />
          <path d={svgPaths.p1e238800} fill="var(--fill-0, #2DBCE2)" id="Vector_1205" opacity="0.3" />
          <path d={svgPaths.p2c720280} fill="var(--fill-0, #2DBCE2)" id="Vector_1206" />
          <path d={svgPaths.p1cf97400} fill="var(--fill-0, #2DBCE2)" id="Vector_1207" opacity="0.6" />
          <path d={svgPaths.p2be8c200} fill="var(--fill-0, #2DBCE2)" id="Vector_1208" />
          <path d={svgPaths.p1ccc5100} fill="var(--fill-0, #2DBCE2)" id="Vector_1209" />
          <path d={svgPaths.p753f0f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1210" opacity="0.6" />
          <path d={svgPaths.p255f9eb0} fill="var(--fill-0, #2DBCE2)" id="Vector_1211" opacity="0.6" />
          <path d={svgPaths.p30196f40} fill="var(--fill-0, #2DBCE2)" id="Vector_1212" opacity="0.3" />
          <path d={svgPaths.p3418a200} fill="var(--fill-0, #2DBCE2)" id="Vector_1213" opacity="0.3" />
          <path d={svgPaths.p2bb6a440} fill="var(--fill-0, #2DBCE2)" id="Vector_1214" opacity="0.3" />
          <path d={svgPaths.p19327a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1215" opacity="0.6" />
          <path d={svgPaths.p11e1f700} fill="var(--fill-0, #2DBCE2)" id="Vector_1216" />
          <path d={svgPaths.p29a75500} fill="var(--fill-0, #2DBCE2)" id="Vector_1217" />
          <path d={svgPaths.p371c3370} fill="var(--fill-0, #2DBCE2)" id="Vector_1218" opacity="0.6" />
          <path d={svgPaths.p1e988e00} fill="var(--fill-0, #2DBCE2)" id="Vector_1219" opacity="0.3" />
          <path d={svgPaths.pbd89200} fill="var(--fill-0, #2DBCE2)" id="Vector_1220" opacity="0.3" />
          <path d={svgPaths.p2ba14f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1221" opacity="0.6" />
          <path d={svgPaths.p5495300} fill="var(--fill-0, #2DBCE2)" id="Vector_1222" opacity="0.6" />
          <path d={svgPaths.p87e1f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1223" opacity="0.3" />
          <path d={svgPaths.p3a4a7f80} fill="var(--fill-0, #2DBCE2)" id="Vector_1224" opacity="0.3" />
          <path d={svgPaths.p15c1c380} fill="var(--fill-0, #2DBCE2)" id="Vector_1225" />
          <path d={svgPaths.p312b8580} fill="var(--fill-0, #2DBCE2)" id="Vector_1226" />
          <path d={svgPaths.p77c9500} fill="var(--fill-0, #2DBCE2)" id="Vector_1227" opacity="0.6" />
          <path d={svgPaths.p34649bc0} fill="var(--fill-0, #2DBCE2)" id="Vector_1228" opacity="0.6" />
          <path d={svgPaths.p3059ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_1229" opacity="0.6" />
          <path d={svgPaths.p29483200} fill="var(--fill-0, #2DBCE2)" id="Vector_1230" opacity="0.6" />
          <path d={svgPaths.p15558680} fill="var(--fill-0, #2DBCE2)" id="Vector_1231" opacity="0.3" />
          <path d={svgPaths.p8d4b700} fill="var(--fill-0, #2DBCE2)" id="Vector_1232" opacity="0.6" />
          <path d={svgPaths.p3a376300} fill="var(--fill-0, #2DBCE2)" id="Vector_1233" opacity="0.3" />
          <path d={svgPaths.p1b6c1980} fill="var(--fill-0, #2DBCE2)" id="Vector_1234" opacity="0.3" />
          <path d={svgPaths.p347ec880} fill="var(--fill-0, #2DBCE2)" id="Vector_1235" opacity="0.3" />
          <path d={svgPaths.p3750d200} fill="var(--fill-0, #2DBCE2)" id="Vector_1236" opacity="0.3" />
          <path d={svgPaths.p13669a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1237" />
          <path d={svgPaths.pfc2f380} fill="var(--fill-0, #2DBCE2)" id="Vector_1238" opacity="0.3" />
          <path d={svgPaths.p1774ea00} fill="var(--fill-0, #2DBCE2)" id="Vector_1239" opacity="0.6" />
          <path d={svgPaths.p1cdef3a0} fill="var(--fill-0, #2DBCE2)" id="Vector_1240" opacity="0.6" />
          <path d={svgPaths.pcc5b600} fill="var(--fill-0, #2DBCE2)" id="Vector_1241" />
          <path d={svgPaths.p2144fd70} fill="var(--fill-0, #2DBCE2)" id="Vector_1242" />
          <path d={svgPaths.p25116300} fill="var(--fill-0, #2DBCE2)" id="Vector_1243" />
          <path d={svgPaths.p3667b580} fill="var(--fill-0, #2DBCE2)" id="Vector_1244" opacity="0.3" />
          <path d={svgPaths.p1a3faf00} fill="var(--fill-0, #2DBCE2)" id="Vector_1245" opacity="0.3" />
          <path d={svgPaths.p16ee9c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1246" />
          <path d={svgPaths.p1a136200} fill="var(--fill-0, #2DBCE2)" id="Vector_1247" />
          <path d={svgPaths.p5df6500} fill="var(--fill-0, #2DBCE2)" id="Vector_1248" />
          <path d={svgPaths.p35c1a300} fill="var(--fill-0, #2DBCE2)" id="Vector_1249" />
          <path d={svgPaths.p3b348e00} fill="var(--fill-0, #2DBCE2)" id="Vector_1250" opacity="0.3" />
          <path d={svgPaths.p3d14f280} fill="var(--fill-0, #2DBCE2)" id="Vector_1251" opacity="0.6" />
          <path d={svgPaths.p14f8dcf0} fill="var(--fill-0, #2DBCE2)" id="Vector_1252" />
          <path d={svgPaths.p2aaee900} fill="var(--fill-0, #2DBCE2)" id="Vector_1253" opacity="0.6" />
          <path d={svgPaths.p83ce180} fill="var(--fill-0, #2DBCE2)" id="Vector_1254" opacity="0.3" />
          <path d={svgPaths.p29903480} fill="var(--fill-0, #2DBCE2)" id="Vector_1255" />
          <path d={svgPaths.p15b7580} fill="var(--fill-0, #2DBCE2)" id="Vector_1256" opacity="0.6" />
          <path d={svgPaths.p3ae48f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1257" opacity="0.6" />
          <path d={svgPaths.pbe8af80} fill="var(--fill-0, #2DBCE2)" id="Vector_1258" opacity="0.3" />
          <path d={svgPaths.p3eccdf0} fill="var(--fill-0, #2DBCE2)" id="Vector_1259" />
          <path d={svgPaths.p1fe02100} fill="var(--fill-0, #2DBCE2)" id="Vector_1260" />
          <path d={svgPaths.p2c241600} fill="var(--fill-0, #2DBCE2)" id="Vector_1261" opacity="0.6" />
          <path d={svgPaths.p51fbe00} fill="var(--fill-0, #2DBCE2)" id="Vector_1262" opacity="0.6" />
          <path d={svgPaths.p36b8a300} fill="var(--fill-0, #2DBCE2)" id="Vector_1263" opacity="0.3" />
          <path d={svgPaths.p116b4c80} fill="var(--fill-0, #2DBCE2)" id="Vector_1264" opacity="0.3" />
          <path d={svgPaths.p9872400} fill="var(--fill-0, #2DBCE2)" id="Vector_1265" opacity="0.3" />
          <path d={svgPaths.p1b859000} fill="var(--fill-0, #2DBCE2)" id="Vector_1266" opacity="0.6" />
          <path d={svgPaths.p3421f8c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1267" opacity="0.6" />
          <path d={svgPaths.p1d8f1700} fill="var(--fill-0, #2DBCE2)" id="Vector_1268" />
          <path d={svgPaths.p33190620} fill="var(--fill-0, #2DBCE2)" id="Vector_1269" />
          <path d={svgPaths.p1a44a400} fill="var(--fill-0, #2DBCE2)" id="Vector_1270" opacity="0.3" />
          <path d={svgPaths.p2a2c3900} fill="var(--fill-0, #2DBCE2)" id="Vector_1271" opacity="0.3" />
          <path d={svgPaths.p248d6880} fill="var(--fill-0, #2DBCE2)" id="Vector_1272" />
          <path d={svgPaths.p260ad780} fill="var(--fill-0, #2DBCE2)" id="Vector_1273" opacity="0.3" />
          <path d={svgPaths.p5735f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1274" />
          <path d={svgPaths.p38fe4640} fill="var(--fill-0, #2DBCE2)" id="Vector_1275" opacity="0.3" />
          <path d={svgPaths.p1a46b300} fill="var(--fill-0, #2DBCE2)" id="Vector_1276" />
          <path d={svgPaths.p1558a740} fill="var(--fill-0, #2DBCE2)" id="Vector_1277" opacity="0.6" />
          <path d={svgPaths.p2c47ef00} fill="var(--fill-0, #2DBCE2)" id="Vector_1278" opacity="0.3" />
          <path d={svgPaths.p13a33900} fill="var(--fill-0, #2DBCE2)" id="Vector_1279" />
          <path d={svgPaths.p14a17700} fill="var(--fill-0, #2DBCE2)" id="Vector_1280" />
          <path d={svgPaths.pefa1480} fill="var(--fill-0, #2DBCE2)" id="Vector_1281" opacity="0.3" />
          <path d={svgPaths.pf700bb0} fill="var(--fill-0, #2DBCE2)" id="Vector_1282" />
          <path d={svgPaths.p90eb900} fill="var(--fill-0, #2DBCE2)" id="Vector_1283" />
          <path d={svgPaths.p14f1d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1284" />
          <path d={svgPaths.p20c67c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1285" />
          <path d={svgPaths.p3ef83f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1286" />
          <path d={svgPaths.p39fd3700} fill="var(--fill-0, #2DBCE2)" id="Vector_1287" opacity="0.6" />
          <path d={svgPaths.p223a4080} fill="var(--fill-0, #2DBCE2)" id="Vector_1288" opacity="0.3" />
          <path d={svgPaths.p1e340500} fill="var(--fill-0, #2DBCE2)" id="Vector_1289" />
          <path d={svgPaths.pad328b0} fill="var(--fill-0, #2DBCE2)" id="Vector_1290" />
          <path d={svgPaths.p335c4400} fill="var(--fill-0, #2DBCE2)" id="Vector_1291" opacity="0.3" />
          <path d={svgPaths.p26b77e80} fill="var(--fill-0, #2DBCE2)" id="Vector_1292" opacity="0.6" />
          <path d={svgPaths.p38df5d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1293" opacity="0.6" />
          <path d={svgPaths.pde6d0c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1294" />
          <path d={svgPaths.p12f518f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1295" opacity="0.3" />
          <path d={svgPaths.p2aa55c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1296" />
          <path d={svgPaths.p3ac8b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1297" opacity="0.3" />
          <path d={svgPaths.p31378a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1298" opacity="0.6" />
          <path d={svgPaths.p2278a740} fill="var(--fill-0, #2DBCE2)" id="Vector_1299" opacity="0.3" />
          <path d={svgPaths.p3eb18000} fill="var(--fill-0, #2DBCE2)" id="Vector_1300" opacity="0.3" />
          <path d={svgPaths.p1bf403f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1301" opacity="0.6" />
          <path d={svgPaths.p27739100} fill="var(--fill-0, #2DBCE2)" id="Vector_1302" />
          <path d={svgPaths.p2d2fb4f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1303" opacity="0.3" />
          <path d={svgPaths.p34b34200} fill="var(--fill-0, #2DBCE2)" id="Vector_1304" />
          <path d={svgPaths.p3daea100} fill="var(--fill-0, #2DBCE2)" id="Vector_1305" opacity="0.3" />
          <path d={svgPaths.p33ef0f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1306" />
          <path d={svgPaths.p38089400} fill="var(--fill-0, #2DBCE2)" id="Vector_1307" />
          <path d={svgPaths.p25dc1a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1308" opacity="0.6" />
          <path d={svgPaths.p1f95b180} fill="var(--fill-0, #2DBCE2)" id="Vector_1309" opacity="0.3" />
          <path d={svgPaths.p111c7780} fill="var(--fill-0, #2DBCE2)" id="Vector_1310" opacity="0.6" />
          <path d={svgPaths.p1f7a9880} fill="var(--fill-0, #2DBCE2)" id="Vector_1311" opacity="0.3" />
          <path d={svgPaths.p12afa00} fill="var(--fill-0, #2DBCE2)" id="Vector_1312" opacity="0.6" />
          <path d={svgPaths.p9191100} fill="var(--fill-0, #2DBCE2)" id="Vector_1313" opacity="0.6" />
          <path d={svgPaths.p25bcc500} fill="var(--fill-0, #2DBCE2)" id="Vector_1314" opacity="0.6" />
          <path d={svgPaths.p41aac80} fill="var(--fill-0, #2DBCE2)" id="Vector_1315" />
          <path d={svgPaths.p349aed80} fill="var(--fill-0, #2DBCE2)" id="Vector_1316" />
          <path d={svgPaths.p2aaff400} fill="var(--fill-0, #2DBCE2)" id="Vector_1317" opacity="0.6" />
          <path d={svgPaths.p19ce9a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1318" opacity="0.6" />
          <path d={svgPaths.p115a2c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1319" opacity="0.6" />
          <path d={svgPaths.p5887900} fill="var(--fill-0, #2DBCE2)" id="Vector_1320" opacity="0.3" />
          <path d={svgPaths.p16dcad00} fill="var(--fill-0, #2DBCE2)" id="Vector_1321" />
          <path d={svgPaths.pe77f5c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1322" opacity="0.6" />
          <path d={svgPaths.p3d470880} fill="var(--fill-0, #2DBCE2)" id="Vector_1323" opacity="0.3" />
          <path d={svgPaths.pc4c1740} fill="var(--fill-0, #2DBCE2)" id="Vector_1324" opacity="0.3" />
          <path d={svgPaths.p1ac45280} fill="var(--fill-0, #2DBCE2)" id="Vector_1325" opacity="0.6" />
          <path d={svgPaths.p1f0a4780} fill="var(--fill-0, #2DBCE2)" id="Vector_1326" opacity="0.6" />
          <path d={svgPaths.pc3d4080} fill="var(--fill-0, #2DBCE2)" id="Vector_1327" />
          <path d={svgPaths.p3dbd90f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1328" opacity="0.3" />
          <path d={svgPaths.p39724400} fill="var(--fill-0, #2DBCE2)" id="Vector_1329" opacity="0.6" />
          <path d={svgPaths.p7413c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1330" opacity="0.6" />
          <path d={svgPaths.p3fbb9080} fill="var(--fill-0, #2DBCE2)" id="Vector_1331" opacity="0.6" />
          <path d={svgPaths.pf70cf80} fill="var(--fill-0, #2DBCE2)" id="Vector_1332" opacity="0.3" />
          <path d={svgPaths.pa89c500} fill="var(--fill-0, #2DBCE2)" id="Vector_1333" opacity="0.3" />
          <path d={svgPaths.p1100a580} fill="var(--fill-0, #2DBCE2)" id="Vector_1334" />
          <path d={svgPaths.p3cd23b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1335" />
          <path d={svgPaths.p12cbf00} fill="var(--fill-0, #2DBCE2)" id="Vector_1336" opacity="0.6" />
          <path d={svgPaths.p30284380} fill="var(--fill-0, #2DBCE2)" id="Vector_1337" opacity="0.6" />
          <path d={svgPaths.p1f075079} fill="var(--fill-0, #2DBCE2)" id="Vector_1338" />
          <path d={svgPaths.p55d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1339" opacity="0.6" />
          <path d={svgPaths.p38fb6500} fill="var(--fill-0, #2DBCE2)" id="Vector_1340" opacity="0.6" />
          <path d={svgPaths.p3511c400} fill="var(--fill-0, #2DBCE2)" id="Vector_1341" />
          <path d={svgPaths.p35ef4b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1342" opacity="0.6" />
          <path d={svgPaths.p14b6b580} fill="var(--fill-0, #2DBCE2)" id="Vector_1343" />
          <path d={svgPaths.p11c2ce00} fill="var(--fill-0, #2DBCE2)" id="Vector_1344" />
          <path d={svgPaths.p467eaf0} fill="var(--fill-0, #2DBCE2)" id="Vector_1345" opacity="0.6" />
          <path d={svgPaths.p3c2cd280} fill="var(--fill-0, #2DBCE2)" id="Vector_1346" opacity="0.6" />
          <path d={svgPaths.p2a080500} fill="var(--fill-0, #2DBCE2)" id="Vector_1347" />
          <path d={svgPaths.p186b3900} fill="var(--fill-0, #2DBCE2)" id="Vector_1348" opacity="0.6" />
          <path d={svgPaths.p326bc500} fill="var(--fill-0, #2DBCE2)" id="Vector_1349" />
          <path d={svgPaths.p739f500} fill="var(--fill-0, #2DBCE2)" id="Vector_1350" />
          <path d={svgPaths.p1e118900} fill="var(--fill-0, #2DBCE2)" id="Vector_1351" opacity="0.6" />
          <path d={svgPaths.p12894d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1352" opacity="0.6" />
          <path d={svgPaths.pf0ef840} fill="var(--fill-0, #2DBCE2)" id="Vector_1353" opacity="0.6" />
          <path d={svgPaths.p27d3df80} fill="var(--fill-0, #2DBCE2)" id="Vector_1354" opacity="0.6" />
          <path d={svgPaths.p3e8caf80} fill="var(--fill-0, #2DBCE2)" id="Vector_1355" opacity="0.3" />
          <path d={svgPaths.pb591100} fill="var(--fill-0, #2DBCE2)" id="Vector_1356" opacity="0.6" />
          <path d={svgPaths.pb69b400} fill="var(--fill-0, #2DBCE2)" id="Vector_1357" opacity="0.6" />
          <path d={svgPaths.p1aaea000} fill="var(--fill-0, #2DBCE2)" id="Vector_1358" opacity="0.6" />
          <path d={svgPaths.p1e3ed280} fill="var(--fill-0, #2DBCE2)" id="Vector_1359" opacity="0.3" />
          <path d={svgPaths.p1e9dcc00} fill="var(--fill-0, #2DBCE2)" id="Vector_1360" opacity="0.3" />
          <path d={svgPaths.p54c05d2} fill="var(--fill-0, #2DBCE2)" id="Vector_1361" opacity="0.3" />
          <path d={svgPaths.p155fdd00} fill="var(--fill-0, #2DBCE2)" id="Vector_1362" />
          <path d={svgPaths.p19048200} fill="var(--fill-0, #2DBCE2)" id="Vector_1363" opacity="0.6" />
          <path d={svgPaths.p13a90100} fill="var(--fill-0, #2DBCE2)" id="Vector_1364" opacity="0.6" />
          <path d={svgPaths.p25e218f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1365" opacity="0.3" />
          <path d={svgPaths.pd240800} fill="var(--fill-0, #2DBCE2)" id="Vector_1366" opacity="0.6" />
          <path d={svgPaths.p3d3bf200} fill="var(--fill-0, #2DBCE2)" id="Vector_1367" />
          <path d={svgPaths.p12847180} fill="var(--fill-0, #2DBCE2)" id="Vector_1368" opacity="0.6" />
          <path d={svgPaths.pbba6a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1369" />
          <path d={svgPaths.pf6f1d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1370" opacity="0.6" />
          <path d={svgPaths.p21fd6780} fill="var(--fill-0, #2DBCE2)" id="Vector_1371" />
          <path d={svgPaths.p3d875400} fill="var(--fill-0, #2DBCE2)" id="Vector_1372" opacity="0.6" />
          <path d={svgPaths.p19399040} fill="var(--fill-0, #2DBCE2)" id="Vector_1373" opacity="0.6" />
          <path d={svgPaths.p11580000} fill="var(--fill-0, #2DBCE2)" id="Vector_1374" opacity="0.6" />
          <path d={svgPaths.p1c925c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1375" opacity="0.6" />
          <path d={svgPaths.p18d4e300} fill="var(--fill-0, #2DBCE2)" id="Vector_1376" />
          <path d={svgPaths.pf65e800} fill="var(--fill-0, #2DBCE2)" id="Vector_1377" />
          <path d={svgPaths.p38a16b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1378" opacity="0.6" />
          <path d={svgPaths.p1f7f7b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1379" opacity="0.3" />
          <path d={svgPaths.p174b9ac0} fill="var(--fill-0, #2DBCE2)" id="Vector_1380" opacity="0.6" />
          <path d={svgPaths.p10832200} fill="var(--fill-0, #2DBCE2)" id="Vector_1381" opacity="0.3" />
          <path d={svgPaths.p3fb9ac00} fill="var(--fill-0, #2DBCE2)" id="Vector_1382" opacity="0.6" />
          <path d={svgPaths.p31dfd00} fill="var(--fill-0, #2DBCE2)" id="Vector_1383" opacity="0.3" />
          <path d={svgPaths.p17d1e000} fill="var(--fill-0, #2DBCE2)" id="Vector_1384" opacity="0.6" />
          <path d={svgPaths.p37ba4900} fill="var(--fill-0, #2DBCE2)" id="Vector_1385" />
          <path d={svgPaths.p339fc100} fill="var(--fill-0, #2DBCE2)" id="Vector_1386" />
          <path d={svgPaths.p2349dd00} fill="var(--fill-0, #2DBCE2)" id="Vector_1387" opacity="0.3" />
          <path d={svgPaths.p1a409c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1388" opacity="0.6" />
          <path d={svgPaths.p257aa772} fill="var(--fill-0, #2DBCE2)" id="Vector_1389" />
          <path d={svgPaths.p2accbc00} fill="var(--fill-0, #2DBCE2)" id="Vector_1390" opacity="0.3" />
          <path d={svgPaths.p153bb000} fill="var(--fill-0, #2DBCE2)" id="Vector_1391" />
          <path d={svgPaths.p16e55f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1392" opacity="0.3" />
          <path d={svgPaths.p5850480} fill="var(--fill-0, #2DBCE2)" id="Vector_1393" opacity="0.3" />
          <path d={svgPaths.p3cd39400} fill="var(--fill-0, #2DBCE2)" id="Vector_1394" opacity="0.3" />
          <path d={svgPaths.p3ff7b200} fill="var(--fill-0, #2DBCE2)" id="Vector_1395" opacity="0.3" />
          <path d={svgPaths.p26122540} fill="var(--fill-0, #2DBCE2)" id="Vector_1396" />
          <path d={svgPaths.p12d0ad00} fill="var(--fill-0, #2DBCE2)" id="Vector_1397" opacity="0.6" />
          <path d={svgPaths.p28b1a800} fill="var(--fill-0, #2DBCE2)" id="Vector_1398" opacity="0.3" />
          <path d={svgPaths.p20f36d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1399" opacity="0.3" />
          <path d={svgPaths.p19dbbf80} fill="var(--fill-0, #2DBCE2)" id="Vector_1400" opacity="0.3" />
          <path d={svgPaths.p27eb0c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1401" opacity="0.3" />
          <path d={svgPaths.p2ff31300} fill="var(--fill-0, #2DBCE2)" id="Vector_1402" opacity="0.6" />
          <path d={svgPaths.pfc92d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1403" opacity="0.3" />
          <path d={svgPaths.p12fe4f80} fill="var(--fill-0, #2DBCE2)" id="Vector_1404" opacity="0.3" />
          <path d={svgPaths.pf61fe00} fill="var(--fill-0, #2DBCE2)" id="Vector_1405" opacity="0.3" />
          <path d={svgPaths.pa9fc8f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1406" />
          <path d={svgPaths.p3289f500} fill="var(--fill-0, #2DBCE2)" id="Vector_1407" opacity="0.3" />
          <path d={svgPaths.p114b8900} fill="var(--fill-0, #2DBCE2)" id="Vector_1408" opacity="0.6" />
          <path d={svgPaths.p21a479f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1409" opacity="0.6" />
          <path d={svgPaths.pe1a0f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1410" opacity="0.3" />
          <path d={svgPaths.p39742a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1411" opacity="0.3" />
          <path d={svgPaths.p28137b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1412" opacity="0.3" />
          <path d={svgPaths.p2a6504c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1413" opacity="0.3" />
          <path d={svgPaths.p1988ab00} fill="var(--fill-0, #2DBCE2)" id="Vector_1414" opacity="0.3" />
          <path d={svgPaths.p3e7b9580} fill="var(--fill-0, #2DBCE2)" id="Vector_1415" opacity="0.6" />
          <path d={svgPaths.p55ad700} fill="var(--fill-0, #2DBCE2)" id="Vector_1416" />
          <path d={svgPaths.p1caeae00} fill="var(--fill-0, #2DBCE2)" id="Vector_1417" opacity="0.3" />
          <path d={svgPaths.p2740d680} fill="var(--fill-0, #2DBCE2)" id="Vector_1418" />
          <path d={svgPaths.p2516b780} fill="var(--fill-0, #2DBCE2)" id="Vector_1419" />
          <path d={svgPaths.p9d6f3f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1420" opacity="0.3" />
          <path d={svgPaths.p145a7a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1421" opacity="0.6" />
          <path d={svgPaths.pca53e00} fill="var(--fill-0, #2DBCE2)" id="Vector_1422" opacity="0.6" />
          <path d={svgPaths.p4425270} fill="var(--fill-0, #2DBCE2)" id="Vector_1423" opacity="0.3" />
          <path d={svgPaths.p2baf980} fill="var(--fill-0, #2DBCE2)" id="Vector_1424" />
          <path d={svgPaths.pf86fc40} fill="var(--fill-0, #2DBCE2)" id="Vector_1425" />
          <path d={svgPaths.p2c818c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1426" opacity="0.3" />
          <path d={svgPaths.p3ce31800} fill="var(--fill-0, #2DBCE2)" id="Vector_1427" opacity="0.6" />
          <path d={svgPaths.p12c0e500} fill="var(--fill-0, #2DBCE2)" id="Vector_1428" opacity="0.3" />
          <path d={svgPaths.p34592b80} fill="var(--fill-0, #2DBCE2)" id="Vector_1429" opacity="0.6" />
          <path d={svgPaths.p3c2e9a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1430" opacity="0.3" />
          <path d={svgPaths.p151b1700} fill="var(--fill-0, #2DBCE2)" id="Vector_1431" opacity="0.3" />
          <path d={svgPaths.p28e0df00} fill="var(--fill-0, #2DBCE2)" id="Vector_1432" opacity="0.6" />
          <path d={svgPaths.p12896300} fill="var(--fill-0, #2DBCE2)" id="Vector_1433" opacity="0.3" />
          <path d={svgPaths.p3768700} fill="var(--fill-0, #2DBCE2)" id="Vector_1434" opacity="0.3" />
          <path d={svgPaths.peeddb00} fill="var(--fill-0, #2DBCE2)" id="Vector_1435" opacity="0.6" />
          <path d={svgPaths.p189c9c20} fill="var(--fill-0, #2DBCE2)" id="Vector_1436" opacity="0.3" />
          <path d={svgPaths.p35b8f280} fill="var(--fill-0, #2DBCE2)" id="Vector_1437" />
          <path d={svgPaths.p1d8cfe80} fill="var(--fill-0, #2DBCE2)" id="Vector_1438" />
          <path d={svgPaths.p37546000} fill="var(--fill-0, #2DBCE2)" id="Vector_1439" />
          <path d={svgPaths.p1cc6df00} fill="var(--fill-0, #2DBCE2)" id="Vector_1440" opacity="0.3" />
          <path d={svgPaths.peb6b000} fill="var(--fill-0, #2DBCE2)" id="Vector_1441" opacity="0.6" />
          <path d={svgPaths.p2c25a980} fill="var(--fill-0, #2DBCE2)" id="Vector_1442" opacity="0.3" />
          <path d={svgPaths.p342e2c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1443" opacity="0.3" />
          <path d={svgPaths.p30050f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1444" opacity="0.6" />
          <path d={svgPaths.p173da500} fill="var(--fill-0, #2DBCE2)" id="Vector_1445" opacity="0.6" />
          <path d={svgPaths.p27274a80} fill="var(--fill-0, #2DBCE2)" id="Vector_1446" opacity="0.6" />
          <path d={svgPaths.p86aea00} fill="var(--fill-0, #2DBCE2)" id="Vector_1447" opacity="0.3" />
          <path d={svgPaths.p3d880f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1448" />
          <path d={svgPaths.p537ea80} fill="var(--fill-0, #2DBCE2)" id="Vector_1449" opacity="0.6" />
          <path d={svgPaths.p10182000} fill="var(--fill-0, #2DBCE2)" id="Vector_1450" />
          <path d={svgPaths.p34ba9f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1451" opacity="0.6" />
          <path d={svgPaths.p2a03e500} fill="var(--fill-0, #2DBCE2)" id="Vector_1452" opacity="0.3" />
          <path d={svgPaths.p38e01100} fill="var(--fill-0, #2DBCE2)" id="Vector_1453" />
          <path d={svgPaths.p259e300} fill="var(--fill-0, #2DBCE2)" id="Vector_1454" opacity="0.3" />
          <path d={svgPaths.p35431000} fill="var(--fill-0, #2DBCE2)" id="Vector_1455" />
          <path d={svgPaths.p7453680} fill="var(--fill-0, #2DBCE2)" id="Vector_1456" opacity="0.3" />
          <path d={svgPaths.p1aa3a300} fill="var(--fill-0, #2DBCE2)" id="Vector_1457" opacity="0.3" />
          <path d={svgPaths.p65be400} fill="var(--fill-0, #2DBCE2)" id="Vector_1458" />
          <path d={svgPaths.p171a7300} fill="var(--fill-0, #2DBCE2)" id="Vector_1459" opacity="0.3" />
          <path d={svgPaths.p1c8d4440} fill="var(--fill-0, #2DBCE2)" id="Vector_1460" />
          <path d={svgPaths.p27e0c880} fill="var(--fill-0, #2DBCE2)" id="Vector_1461" opacity="0.6" />
          <path d={svgPaths.p1eddc000} fill="var(--fill-0, #2DBCE2)" id="Vector_1462" />
          <path d={svgPaths.p3e0b1200} fill="var(--fill-0, #2DBCE2)" id="Vector_1463" opacity="0.6" />
          <path d={svgPaths.p3e579080} fill="var(--fill-0, #2DBCE2)" id="Vector_1464" opacity="0.3" />
          <path d={svgPaths.p396242f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1465" />
          <path d={svgPaths.p23d6100} fill="var(--fill-0, #2DBCE2)" id="Vector_1466" />
          <path d={svgPaths.p2660500} fill="var(--fill-0, #2DBCE2)" id="Vector_1467" opacity="0.6" />
          <path d={svgPaths.p10867080} fill="var(--fill-0, #2DBCE2)" id="Vector_1468" />
          <path d={svgPaths.p2b591700} fill="var(--fill-0, #2DBCE2)" id="Vector_1469" />
          <path d={svgPaths.p243c7dc0} fill="var(--fill-0, #2DBCE2)" id="Vector_1470" />
          <path d={svgPaths.p1cf6a400} fill="var(--fill-0, #2DBCE2)" id="Vector_1471" opacity="0.6" />
          <path d={svgPaths.p3baf9330} fill="var(--fill-0, #2DBCE2)" id="Vector_1472" />
          <path d={svgPaths.pfc8f100} fill="var(--fill-0, #2DBCE2)" id="Vector_1473" opacity="0.6" />
          <path d={svgPaths.pd4e2300} fill="var(--fill-0, #2DBCE2)" id="Vector_1474" opacity="0.3" />
          <path d={svgPaths.pf435000} fill="var(--fill-0, #2DBCE2)" id="Vector_1475" opacity="0.3" />
          <path d={svgPaths.p2680a580} fill="var(--fill-0, #2DBCE2)" id="Vector_1476" opacity="0.3" />
          <path d={svgPaths.p4d54b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1477" />
          <path d={svgPaths.pffd0c00} fill="var(--fill-0, #2DBCE2)" id="Vector_1478" />
          <path d={svgPaths.p372da900} fill="var(--fill-0, #2DBCE2)" id="Vector_1479" opacity="0.3" />
          <path d={svgPaths.pa735300} fill="var(--fill-0, #2DBCE2)" id="Vector_1480" opacity="0.6" />
          <path d={svgPaths.p74a2b80} fill="var(--fill-0, #2DBCE2)" id="Vector_1481" opacity="0.3" />
          <path d={svgPaths.p10da0a00} fill="var(--fill-0, #2DBCE2)" id="Vector_1482" opacity="0.6" />
          <path d={svgPaths.pd9e6900} fill="var(--fill-0, #2DBCE2)" id="Vector_1483" />
          <path d={svgPaths.p6812200} fill="var(--fill-0, #2DBCE2)" id="Vector_1484" />
          <path d={svgPaths.p229e9580} fill="var(--fill-0, #2DBCE2)" id="Vector_1485" opacity="0.6" />
          <path d={svgPaths.p10e6f0c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1486" />
          <path d={svgPaths.p127b4d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1487" opacity="0.3" />
          <path d={svgPaths.p21919700} fill="var(--fill-0, #2DBCE2)" id="Vector_1488" opacity="0.3" />
          <path d={svgPaths.p37ee4b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1489" opacity="0.6" />
          <path d={svgPaths.pc2da4f2} fill="var(--fill-0, #2DBCE2)" id="Vector_1490" opacity="0.3" />
          <path d={svgPaths.p3fb1a880} fill="var(--fill-0, #2DBCE2)" id="Vector_1491" />
          <path d={svgPaths.pcc913f0} fill="var(--fill-0, #2DBCE2)" id="Vector_1492" />
          <path d={svgPaths.p358f8600} fill="var(--fill-0, #2DBCE2)" id="Vector_1493" />
          <path d={svgPaths.p243d5900} fill="var(--fill-0, #2DBCE2)" id="Vector_1494" opacity="0.3" />
          <path d={svgPaths.p3f9c0340} fill="var(--fill-0, #2DBCE2)" id="Vector_1495" opacity="0.6" />
          <path d={svgPaths.p362ea800} fill="var(--fill-0, #2DBCE2)" id="Vector_1496" opacity="0.6" />
          <path d={svgPaths.p35ec9200} fill="var(--fill-0, #2DBCE2)" id="Vector_1497" opacity="0.6" />
          <path d={svgPaths.p34aa3600} fill="var(--fill-0, #2DBCE2)" id="Vector_1498" opacity="0.6" />
          <path d={svgPaths.p2b206200} fill="var(--fill-0, #2DBCE2)" id="Vector_1499" opacity="0.3" />
          <path d={svgPaths.p3816b640} fill="var(--fill-0, #2DBCE2)" id="Vector_1500" />
          <path d={svgPaths.p11ce8b00} fill="var(--fill-0, #2DBCE2)" id="Vector_1501" />
          <path d={svgPaths.p1dc7e680} fill="var(--fill-0, #2DBCE2)" id="Vector_1502" opacity="0.6" />
          <path d={svgPaths.p29119e80} fill="var(--fill-0, #2DBCE2)" id="Vector_1503" />
          <path d={svgPaths.p4f13480} fill="var(--fill-0, #2DBCE2)" id="Vector_1504" />
          <path d={svgPaths.p1d256800} fill="var(--fill-0, #2DBCE2)" id="Vector_1505" opacity="0.6" />
          <path d={svgPaths.p14950700} fill="var(--fill-0, #2DBCE2)" id="Vector_1506" />
          <path d={svgPaths.p3a9f4700} fill="var(--fill-0, #2DBCE2)" id="Vector_1507" opacity="0.3" />
          <path d={svgPaths.p1cd53d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1508" opacity="0.3" />
          <path d={svgPaths.p8f0b2b2} fill="var(--fill-0, #2DBCE2)" id="Vector_1509" />
          <path d={svgPaths.p18ac2200} fill="var(--fill-0, #2DBCE2)" id="Vector_1510" opacity="0.3" />
          <path d={svgPaths.p17282180} fill="var(--fill-0, #2DBCE2)" id="Vector_1511" opacity="0.6" />
          <path d={svgPaths.p20becb80} fill="var(--fill-0, #2DBCE2)" id="Vector_1512" opacity="0.3" />
          <path d={svgPaths.p17116050} fill="var(--fill-0, #2DBCE2)" id="Vector_1513" opacity="0.6" />
          <path d={svgPaths.p37201900} fill="var(--fill-0, #2DBCE2)" id="Vector_1514" opacity="0.6" />
          <path d={svgPaths.pce8c200} fill="var(--fill-0, #2DBCE2)" id="Vector_1515" opacity="0.3" />
          <path d={svgPaths.p3de5be00} fill="var(--fill-0, #2DBCE2)" id="Vector_1516" opacity="0.3" />
          <path d={svgPaths.p9391500} fill="var(--fill-0, #2DBCE2)" id="Vector_1517" opacity="0.6" />
          <path d={svgPaths.p2f6eb380} fill="var(--fill-0, #2DBCE2)" id="Vector_1518" opacity="0.6" />
          <path d={svgPaths.p1c6a8d80} fill="var(--fill-0, #2DBCE2)" id="Vector_1519" />
          <path d={svgPaths.p2c6d5440} fill="var(--fill-0, #2DBCE2)" id="Vector_1520" opacity="0.6" />
          <path d={svgPaths.p39f7f100} fill="var(--fill-0, #2DBCE2)" id="Vector_1521" opacity="0.3" />
          <path d={svgPaths.p3f1db900} fill="var(--fill-0, #2DBCE2)" id="Vector_1522" />
          <path d={svgPaths.p3489a780} fill="var(--fill-0, #2DBCE2)" id="Vector_1523" opacity="0.3" />
          <path d={svgPaths.pd362d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1524" />
          <path d={svgPaths.p3e5c7100} fill="var(--fill-0, #2DBCE2)" id="Vector_1525" />
          <path d={svgPaths.p3d6ba940} fill="var(--fill-0, #2DBCE2)" id="Vector_1526" />
          <path d={svgPaths.p11a06880} fill="var(--fill-0, #2DBCE2)" id="Vector_1527" />
          <path d={svgPaths.p307cdf00} fill="var(--fill-0, #2DBCE2)" id="Vector_1528" opacity="0.3" />
          <path d={svgPaths.p31e01f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1529" />
          <path d={svgPaths.p3f2f0980} fill="var(--fill-0, #2DBCE2)" id="Vector_1530" />
          <path d={svgPaths.pfaa6c0} fill="var(--fill-0, #2DBCE2)" id="Vector_1531" />
          <path d={svgPaths.p16f01d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1532" opacity="0.6" />
          <path d={svgPaths.p21b2d500} fill="var(--fill-0, #2DBCE2)" id="Vector_1533" opacity="0.6" />
          <path d={svgPaths.p24318500} fill="var(--fill-0, #2DBCE2)" id="Vector_1534" opacity="0.3" />
          <path d={svgPaths.p30b07880} fill="var(--fill-0, #2DBCE2)" id="Vector_1535" opacity="0.3" />
          <path d={svgPaths.p241e9f00} fill="var(--fill-0, #2DBCE2)" id="Vector_1536" />
          <path d={svgPaths.p175f9d00} fill="var(--fill-0, #2DBCE2)" id="Vector_1537" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[0_0_0.15%_0]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function BSvg() {
  return (
    <div className="h-[39.8px] overflow-clip relative shrink-0 w-[40px]" data-name="b.svg">
      <ClipPathGroup4 />
      <div className="absolute inset-[32.75%_36.51%_32.16%_37.44%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4181 13.9636">
          <path d={svgPaths.p2842d8f0} fill="var(--fill-0, #E6C700)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function BSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[0.1px] relative shrink-0 size-[40px]" data-name="b.svg fill">
      <BSvg />
    </div>
  );
}

function ExternalRiskRatingB() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[190.39999389648438px] overflow-clip relative shrink-0 size-[40px]" data-name="External risk rating: B">
      <BSvgFill />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <ExternalRiskRatingB />
      <Svg6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Container30 />
        <Link4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#00091d] content-stretch flex flex-col items-start left-[-0.2px] min-w-[224px] p-px rounded-[16px] top-[-16.2px] w-[224.4px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container29 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[89.6px] min-w-[224px] relative shrink-0 w-[224px]" data-name="Margin">
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Margin1 />
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">0xe938...fB5F</p>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_5320)" id="SVG">
          <path d={svgPaths.pce65a00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p31b8ff80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_3_5320">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative">
        <Svg7 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex items-center px-[4.8px] py-px relative rounded-[6px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(234,179,8,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Link5 />
      <Button1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0" data-name="Container">
      <Border1 />
    </div>
  );
}

function Debank() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Debank">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDebank} />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-8px] top-0" data-name="Link">
      <Debank />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="Link:margin">
      <Link6 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container34 />
      <LinkMargin />
    </div>
  );
}

function ReservoirSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[77px] left-1/2 top-1/2 w-[590px]" data-name="reservoir.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 77">
        <g clipPath="url(#clip0_3_1870)" id="reservoir.svg">
          <path clipRule="evenodd" d={svgPaths.p1ce25000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1870">
            <rect fill="white" height="77" width="590" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReservoirSvgFill1() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[96px]" data-name="reservoir.svg fill">
      <ReservoirSvg1 />
    </div>
  );
}

function ReservoirWsrUsdLoopingAtomistLogo() {
  return (
    <div className="content-stretch flex flex-col h-full items-start max-h-[32px] max-w-[96px] overflow-clip relative shrink-0" data-name="Reservoir wsrUSD looping Atomist logo">
      <ReservoirSvgFill1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-[96px]" data-name="Container">
      <ReservoirWsrUsdLoopingAtomistLogo />
    </div>
  );
}

function RUsd2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="rUSD">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRUsd} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">rUSD</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <RUsd2 />
      <Container37 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_19.3%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2808 19.9998">
        <g id="Group">
          <path d={svgPaths.p39696d80} fill="var(--fill-0, #343434)" id="Vector" />
          <path d={svgPaths.p7706a00} fill="var(--fill-0, #8C8C8C)" id="Vector_2" />
          <path d={svgPaths.p3b08b400} fill="var(--fill-0, #3C3C3B)" id="Vector_3" />
          <path d={svgPaths.p2de61b00} fill="var(--fill-0, #8C8C8C)" id="Vector_4" />
          <path d={svgPaths.pc25a00} fill="var(--fill-0, #141414)" id="Vector_5" />
          <path d={svgPaths.p171a9500} fill="var(--fill-0, #393939)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <Svg8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Ethereum</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container39 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <div className="bg-[#2a313c] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container35 />
      <div className="bg-[#2a313c] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container36 />
      <div className="bg-[#2a313c] h-[16px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container38 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative w-full">
        <Container26 />
        <Container32 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start justify-center left-[-0.2px] p-px right-[717.8px] rounded-[16px] top-[-0.2px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container25 />
    </div>
  );
}

function Radio() {
  return (
    <div className="bg-[rgba(132,41,255,0.2)] relative rounded-[9999px] shrink-0" data-name="Radio">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">1D</p>
        </div>
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Radio">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#818490] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Spot</p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="bg-[#151a20] content-stretch flex items-center justify-between p-px relative rounded-[9999px] shrink-0" data-name="Group">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Radio />
      <Radio1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[7.8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">APY</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3.8px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_1750)" id="SVG">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 7.5L7.5 12.5" id="Vector_2" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 7.5H7.50833" id="Vector_3" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 12.5H12.5083" id="Vector_4" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_1750">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">15.30%</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_1769)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_1769">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Svg10 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container47 />
      <Link7 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">4x</p>
      </div>
    </div>
  );
}

function ReservoirSvg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="reservoir.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_5307)" id="reservoir.svg">
          <path d={svgPaths.p1d8a1800} fill="var(--fill-0, #DCC5F7)" id="Vector" />
          <path d={svgPaths.p2b578500} fill="var(--fill-0, #6800D1)" id="Vector_2" />
          <path d={svgPaths.p2e514e00} fill="var(--fill-0, #9370DB)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_3_5307">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ReservoirSvgFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="reservoir.svg fill">
      <ReservoirSvg2 />
    </div>
  );
}

function ReservoirPoints1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[16px]" data-name="Reservoir Points">
      <ReservoirSvgFill2 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <Margin3 />
      <ReservoirPoints1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link8 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">5x</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative">
        <Container50 />
      </div>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_17.604px]" style={{ maskImage: `url('${imgGroup5040}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.998 17.604">
        <g id="Group 5038">
          <path d={svgPaths.p9186380} fill="url(#paint0_linear_3_1811)" id="Path 7237" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1811" x1="7.99902" x2="7.99902" y1="2.92226" y2="18.8891">
            <stop stopColor="#6C00FF" />
            <stop offset="1" stopColor="#FF008B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group69 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-0">
      <ClipPathGroup5 />
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-0">
      <Group68 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[7.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[13.444px_14.793px]" style={{ maskImage: `url('${imgGroup5041}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4442 14.7927">
        <g id="Group 5038">
          <path d={svgPaths.p217fd200} fill="url(#paint0_linear_3_1814)" id="Path 7237" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1814" x1="6.72211" x2="6.72211" y1="8.04723" y2="20.3547">
            <stop stopColor="#6C00FF" />
            <stop offset="1" stopColor="#FF008B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]" data-name="Clip path group">
      <Group71 />
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]">
      <ClipPathGroup6 />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute inset-[24.27%_22.28%_25.15%_22.07%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[8.906px_8.906px]" style={{ maskImage: `url('${imgGroup5037}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.90411 8.90411">
        <g id="Group 5036">
          <path d={svgPaths.p5c81c80} fill="var(--fill-0, white)" id="Path 7235" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-[24.27%_22.26%_25.14%_22.07%]" data-name="Clip path group">
      <Group73 />
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[24.27%_22.26%_25.14%_22.07%]">
      <ClipPathGroup7 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[7.99%_7.99%_7.98%_7.99%]">
      <Group70 />
      <Group72 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-0">
      <Group67 />
      <Group75 />
    </div>
  );
}

function PointsIconSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.604px] left-1/2 overflow-clip top-1/2 w-[16px]" data-name="points-icon.svg">
      <Group77 />
    </div>
  );
}

function PointsIconSvgFill1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="points-icon.svg fill">
      <PointsIconSvg1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Image">
      <PointsIconSvgFill1 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <Image1 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(235,0,255,0.2)] content-stretch flex items-center px-[10.8px] py-[2.8px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(235,0,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Button">
      <OverlayBorder1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[7.99px] items-center left-[16px] top-[-4px]" data-name="Container">
      <Container49 />
      <Button2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative self-stretch shrink-0 w-[134.66px]" data-name="Margin">
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-start relative shrink-0" data-name="Container">
      <Container45 />
      <Margin2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[24px] pt-[15.8px] px-[24px] relative w-full">
        <Container41 />
        <Container43 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-[717.8px] p-px right-[358.8px] rounded-[16px] top-[-0.2px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container40 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">7D APY</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_1750)" id="SVG">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 7.5L7.5 12.5" id="Vector_2" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 7.5H7.50833" id="Vector_3" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 12.5H12.5083" id="Vector_4" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_1750">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">14.28%</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-[1076.8px] pb-[6.4px] pt-px px-px right-[-0.2px] rounded-[16px] top-[-0.2px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container51 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">Total Value Managed</p>
      </div>
    </div>
  );
}

function UsdcIcon20() {
  return (
    <div className="relative shrink-0 size-[20px] rounded-[9999px] overflow-clip">
      <img alt="USDC" className="absolute left-0 max-w-none size-full top-0" src={imgUsdc} />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">38,012,752.69</p>
      </div>
    </div>
  );
}

function RUsd3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="rUSD">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRUsd} />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-name="Container">
      <Container59 />
      <RUsd3 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <UsdcIcon20 />
      <Container58 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-[717.8px] p-px right-[358.8px] rounded-[16px] top-[135px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container55 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">Total Value Locked</p>
      </div>
    </div>
  );
}

function UsdcIcon20b() {
  return (
    <div className="relative shrink-0 size-[20px] rounded-[9999px] overflow-clip">
      <img alt="USDC" className="absolute left-0 max-w-none size-full top-0" src={imgUsdc} />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">3,642,425.66</p>
      </div>
    </div>
  );
}

function RUsd4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="rUSD">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRUsd} />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container64 />
      <RUsd4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <UsdcIcon20b />
      <Container63 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-[1076.8px] p-px right-[-0.2px] rounded-[16px] top-[135px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container60 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[240.8px] left-0 right-0 top-[449.6px]" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
    </div>
  );
}

function SvgDialog() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG dialog">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG dialog">
          <path d="M11.25 11.25L15.75 15.75" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.25 6.75L15.75 2.25" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 12.15V15.75H12.15" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 5.85V2.25H12.15" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 12.15V15.75H5.85" id="Vector_5" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 15.75L6.75 11.25" id="Vector_6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 5.85V2.25H5.85" id="Vector_7" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 6.75L2.25 2.25" id="Vector_8" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] tracking-[-0.45px] whitespace-nowrap">
          <p className="leading-[18px]">Performance Report</p>
        </div>
        <SvgDialog />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[10.81%_12.35%_21.33%_13.33%]" data-name="Group">
      <div className="absolute inset-[-0.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301 204.571">
          <g id="Group">
            <path d="M0 204.071H301" id="Vector" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 163.357H301" id="Vector_2" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 122.643H301" id="Vector_3" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 81.9286H301" id="Vector_4" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 41.2143H301" id="Vector_5" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 0.5H301" id="Vector_6" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[2.67%_14.03%_21.33%_16.51%]" data-name="Group">
      <div className="absolute inset-[0_-0.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 282.324 228">
          <g id="Group">
            <path d="M0.5 0V228" id="Vector" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M70.831 0V228" id="Vector_2" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M141.162 0V228" id="Vector_3" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M211.493 0V228" id="Vector_4" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M281.824 0V228" id="Vector_5" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[2.67%_12.35%_21.33%_13.33%]" data-name="Group">
      <Group7 />
      <Group8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[79.58%_-13.33%_-79.58%_13.33%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_93.36%_93.33%_-0.28%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">08.02</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <div className="absolute inset-[78.67%_83.49%_18.67%_16.51%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[79.58%_-13.33%_-79.58%_13.33%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_76%_93.33%_17.09%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">15.02</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <div className="absolute inset-[78.67%_66.12%_18.67%_33.88%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[79.58%_-13.33%_-79.58%_13.33%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_58.63%_93.33%_34.45%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">22.02</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <div className="absolute inset-[78.67%_48.76%_18.67%_51.24%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[79.58%_-13.33%_-79.58%_13.33%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_41.27%_93.33%_51.82%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">01.03</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <div className="absolute inset-[78.67%_31.39%_18.67%_68.61%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[79.58%_-13.33%_-79.58%_13.33%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_23.9%_93.33%_69.18%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">08.03</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <div className="absolute inset-[78.67%_14.03%_18.67%_85.97%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[78.67%_-13.33%_-79.58%_13.33%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <div className="absolute inset-[78.67%_12.22%_21.33%_13.46%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301 1">
            <path d="M0 0.5H301" id="Vector" stroke="var(--stroke-0, #364867)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[72.33%_101.98%_23.33%_-9.88%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">0.00%</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[78.67%_86.67%_21.33%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[58.76%_101.98%_36.9%_-9.88%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">5.00%</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[65.1%_86.67%_34.9%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[45.19%_101.98%_50.48%_-11.36%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">10.00%</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[51.52%_86.67%_48.48%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[31.62%_101.98%_64.05%_-11.36%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">15.00%</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[37.95%_86.67%_62.05%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[18.05%_101.98%_77.62%_-11.36%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">20.00%</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[24.38%_86.67%_75.62%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute inset-[3.58%_-12.65%_-3.58%_12.65%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[4.48%_101.98%_91.19%_-11.36%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">25.00%</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[3.58%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <div className="absolute inset-[10.81%_86.67%_89.19%_11.36%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[2.83%_-12.65%_-3.58%_11.36%]" data-name="Group">
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <div className="absolute inset-[2.83%_86.67%_21.17%_13.33%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 228">
            <path d="M0.5 228V0" id="Vector" stroke="var(--stroke-0, #364867)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[2.67%_-13.33%_-79.58%_11.36%]" data-name="Group">
      <Group6 />
      <div className="absolute inset-[22.56%_12.35%_34.61%_13.33%]" data-name="Vector">
        <div className="absolute inset-[-0.52%_-0.17%_-0.6%_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 129.933">
            <path d={svgPaths.p231c0840} id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Group9 />
      <Group15 />
      <div className="absolute inset-[2.67%_12.35%_21.33%_13.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[90%_12.35%_0_12.35%]" data-name="Group">
      <div className="absolute inset-[-1.67%_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306 31">
          <g id="Group">
            <path d={svgPaths.pd414700} id="Vector" stroke="var(--stroke-0, #8429FF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[92.67%_11.48%_2.33%_86.54%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p3225e280} fill="#E4EDFF" />
              <path d={svgPaths.p1f414880} stroke="var(--stroke-0, #999999)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[92.67%_11.48%_2.33%_86.54%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[92.67%_11.48%_2.33%_86.54%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p3225e280} fill="#E4EDFF" />
              <path d={svgPaths.p1f414880} stroke="var(--stroke-0, #999999)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <Group29 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[90%_11.48%_0_11.23%]" data-name="Group">
      <div className="absolute inset-[90%_12.35%_0_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Group24 />
      <Group25 />
      <Group28 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[90%_11.48%_0_11.23%]" data-name="Group">
      <div className="absolute inset-[90.6%_12.35%_2.22%_12.35%]" data-name="Vector">
        <div className="absolute inset-[-2.36%_-0.16%_-2.42%_-0.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306 22.5464">
            <path d={svgPaths.p2031b300} id="Vector" stroke="var(--stroke-0, #8429FF)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Group23 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[300px] overflow-clip relative shrink-0 w-[405px]" data-name="SVG">
      <Group5 />
      <Group22 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14.4px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 16">
        <g id="SVG">
          <path d="M12 4.4L5.4 11L2.4 8" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[0.8px] right-[0.8px] top-[0.8px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#8429ff] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[#8429ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container70 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Label:margin">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">
        <p className="leading-[14px]">Strategy 1D APY</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Checkbox />
      <LabelMargin />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Label:margin">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] whitespace-nowrap">
        <p className="leading-[14px]">Share price</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <LabelMargin1 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_23.99px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container71 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg14 />
      <Container68 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <Heading2 />
        <Container67 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-[#151a20] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-px relative rounded-[16px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container66 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] tracking-[-0.45px] w-full">
        <p className="leading-[18px]">Current Allocation</p>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[10.83%_26.79%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.969 188">
        <g id="Group">
          <path d={svgPaths.p29f0080} fill="var(--fill-0, #2C90E2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[50.01%_26.79%_49.97%_64.81%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9944 0.0357437">
        <g id="Group">
          <path d={svgPaths.p1ab23d00} fill="var(--fill-0, #6E85F4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[49.98%] left-[64.81%] right-[26.79%] top-1/2" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9944 0.0556259">
        <g id="Group">
          <path d={svgPaths.p2a584c00} fill="var(--fill-0, #4ADEDE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[10.83%_26.79%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
    </div>
  );
}

function Application() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Application">
      <Group31 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[272px] items-start justify-center max-h-[272px] min-h-[272px] pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Application />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">wsrUSD/USDC</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Morpho</p>
      </div>
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link9 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#2c90e2] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container75 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">rUSD</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#6e85f4] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">USDC</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#4adede] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container80 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_16px] h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container77 />
      <Container79 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Heading3 />
        <Margin6 />
        <Margin7 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-[#151a20] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px p-px relative rounded-[16px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container72 />
    </div>
  );
}

function SvgDialog1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG dialog">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG dialog">
          <path d="M11.25 11.25L15.75 15.75" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M11.25 6.75L15.75 2.25" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 12.15V15.75H12.15" id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.75 5.85V2.25H12.15" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 12.15V15.75H5.85" id="Vector_5" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 15.75L6.75 11.25" id="Vector_6" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 5.85V2.25H5.85" id="Vector_7" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 6.75L2.25 2.25" id="Vector_8" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] tracking-[-0.45px] whitespace-nowrap">
          <p className="leading-[18px]">Allocation Over Time</p>
        </div>
        <SvgDialog1 />
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[2.67%_2.47%_21.33%_12.84%]" data-name="Group">
      <div className="absolute inset-[-0.22%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 229">
          <g id="Group">
            <path d="M0 228.5H343" id="Vector" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 171.5H343" id="Vector_2" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 114.5H343" id="Vector_3" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 57.5H343" id="Vector_4" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M0 0.5H343" id="Vector_5" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[2.67%_4.38%_21.33%_16.46%]" data-name="Group">
      <div className="absolute inset-[0_-0.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 321.579 228">
          <g id="Group">
            <path d="M0.5 0V228" id="Vector" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M80.6446 0V228" id="Vector_2" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M160.789 0V228" id="Vector_3" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M240.934 0V228" id="Vector_4" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
            <path d="M321.079 0V228" id="Vector_5" stroke="var(--stroke-0, #21273E)" strokeDasharray="5 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[2.67%_2.47%_21.33%_12.84%]" data-name="Group">
      <Group37 />
      <Group38 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute inset-[79.58%_-12.84%_-79.58%_12.84%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_92.92%_93.33%_0.17%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">08.02</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <div className="absolute inset-[78.67%_83.54%_18.67%_16.46%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute inset-[79.58%_-12.84%_-79.58%_12.84%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_73.13%_93.33%_19.95%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">15.02</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <div className="absolute inset-[78.67%_63.75%_18.67%_36.25%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute inset-[79.58%_-12.84%_-79.58%_12.84%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_53.34%_93.33%_39.74%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">22.02</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <div className="absolute inset-[78.67%_43.96%_18.67%_56.04%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute inset-[79.58%_-12.84%_-79.58%_12.84%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_33.55%_93.33%_59.53%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">01.03</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <div className="absolute inset-[78.67%_24.17%_18.67%_75.83%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute inset-[79.58%_-12.84%_-79.58%_12.84%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[2.33%_13.77%_93.33%_79.32%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">08.03</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <div className="absolute inset-[78.67%_4.38%_18.67%_95.62%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[78.67%_-12.84%_-79.58%_12.84%]" data-name="Group">
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <div className="absolute inset-[78.67%_2.35%_21.33%_12.96%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <path d="M0 0.5H343" id="Vector" stroke="var(--stroke-0, #364867)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute inset-[3.58%_-12.16%_-3.58%_12.16%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[72.33%_101.98%_23.33%_-5.19%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">$0</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[3.58%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <div className="absolute inset-[78.67%_87.16%_21.33%_10.86%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute inset-[3.58%_-12.16%_-3.58%_12.16%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[53.33%_101.98%_42.33%_-12.59%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">$10.00M</p>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[3.58%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <div className="absolute inset-[59.67%_87.16%_40.33%_10.86%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute inset-[3.58%_-12.16%_-3.58%_12.16%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[34.33%_101.98%_61.33%_-11.11%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">$20.0M</p>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[3.58%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <div className="absolute inset-[40.67%_87.16%_59.33%_10.86%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute inset-[3.58%_-12.16%_-3.58%_12.16%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[15.33%_101.98%_80.33%_-11.11%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">$30.0M</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[3.58%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <div className="absolute inset-[21.67%_87.16%_78.33%_10.86%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute inset-[3.58%_-12.16%_-3.58%_12.16%] overflow-clip" data-name="Frame">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[-3.67%_101.98%_99.33%_-11.11%] leading-[normal] not-italic text-[11px] text-[rgba(255,255,255,0.5)] text-right whitespace-nowrap">$40.0M</p>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[2.67%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <div className="absolute inset-[2.67%_87.16%_97.33%_10.86%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
            <path d="M8.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #364867)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Frame20 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[2.67%_-12.16%_-3.58%_10.86%]" data-name="Group">
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
      <Group50 />
      <div className="absolute inset-[2.83%_87.16%_21.17%_12.84%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 228">
            <path d="M0.5 228V0" id="Vector" stroke="var(--stroke-0, #364867)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[2.67%_-12.84%_-79.58%_10.86%]" data-name="Group">
      <Group36 />
      <div className="absolute inset-[6.48%_2.47%_21.33%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 216.554">
          <path d={svgPaths.p2dec0b80} fill="url(#paint0_linear_3_6945)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_6945" x1="0" x2="0" y1="0" y2="216.554">
              <stop stopColor="#2C90E2" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[6.48%_2.47%_21.78%_12.84%]" data-name="Vector">
        <div className="absolute inset-[36.74%_14.39%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293.626 136.14">
            <path d={svgPaths.p22e7ee00} fill="url(#paint0_linear_3_5252)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5252" x1="0" x2="0" y1="-79.0758" y2="136.14">
                <stop stopColor="#B45AFA" />
                <stop offset="1" stopColor="#B45AFA" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.48%_2.47%_26.82%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.48%_2.47%_26.82%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.48%_2.47%_26.82%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342.761 200.113">
          <path d={svgPaths.p5c8b380} fill="url(#paint0_linear_3_6914)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_6914" x1="-0.238526" x2="-0.238526" y1="0" y2="200.113">
              <stop stopColor="#6E85F4" />
              <stop offset="1" stopColor="#6E85F4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[6.47%_2.47%_26.82%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 200.134">
          <path d={svgPaths.p1f72f880} fill="url(#paint0_linear_3_5271)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5271" x1="0" x2="0" y1="0" y2="200.134">
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group39 />
      <Group45 />
      <div className="absolute inset-[2.67%_2.47%_21.33%_12.84%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[90%_2.47%_0_12.35%]" data-name="Group">
      <div className="absolute inset-[-1.67%_-0.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346 31">
          <g id="Group">
            <path d={svgPaths.p1fd3c080} id="Vector" stroke="var(--stroke-0, #8429FF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[92.67%_1.6%_2.33%_96.42%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p3225e280} fill="#E4EDFF" />
              <path d={svgPaths.p1f414880} stroke="var(--stroke-0, #999999)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[92.67%_1.6%_2.33%_96.42%]" data-name="Group">
      <Group56 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[92.67%_1.6%_2.33%_96.42%]" data-name="Group">
      <Group55 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <div className="absolute inset-[-3.33%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <g id="Group">
            <g id="Vector">
              <path d={svgPaths.p3225e280} fill="#E4EDFF" />
              <path d={svgPaths.p1f414880} stroke="var(--stroke-0, #999999)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <Group59 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[92.67%_86.79%_2.33%_11.23%]" data-name="Group">
      <Group58 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[90%_1.6%_0_11.23%]" data-name="Group">
      <div className="absolute inset-[90%_2.47%_0_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <Group53 />
      <Group54 />
      <Group57 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[90%_1.6%_0_11.23%]" data-name="Group">
      <div className="absolute inset-[90.5%_2.47%_0_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 28.494">
          <path d={svgPaths.p233d0700} fill="url(#paint0_linear_3_5281)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5281" x1="0" x2="0" y1="0" y2="28.494">
              <stop stopColor="#2C90E2" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[90.5%_2.47%_0.06%_12.35%]" data-name="Vector">
        <div className="absolute inset-[36.74%_14.39%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295.338 17.9132">
            <path d={svgPaths.p12db8780} fill="url(#paint0_linear_3_5242)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5242" x1="0" x2="0" y1="-10.4047" y2="17.9132">
                <stop stopColor="#B45AFA" />
                <stop offset="1" stopColor="#B45AFA" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[90.5%_2.47%_0.72%_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.5%_2.47%_0.72%_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[90.5%_2.47%_0.72%_12.35%]" data-name="Vector">
        <div className="absolute inset-[0.13%_2.43%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336.364 26.2966">
            <path d={svgPaths.p3aee5570} fill="url(#paint0_linear_3_5238)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5238" x1="-0.239917" x2="-0.239917" y1="-0.0340635" y2="26.2966">
                <stop stopColor="#6E85F4" />
                <stop offset="1" stopColor="#6E85F4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[90.5%_2.47%_0.72%_12.35%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 26.3334">
          <path d={svgPaths.p3d4bc900} fill="url(#paint0_linear_3_5246)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_5246" x1="0" x2="0" y1="0" y2="26.3334">
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group52 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[300px] overflow-clip relative shrink-0 w-[405px]" data-name="SVG">
      <Group35 />
      <Group51 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">wsrUSD/USDC</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Morpho</p>
      </div>
      <Container86 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link10 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex gap-[4px] items-center left-0 top-0" data-name="Container">
      <div className="bg-[#2c90e2] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container85 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">wsrUSD/USDC</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex gap-[4.01px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Morpho</p>
      </div>
      <Container89 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link11 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex gap-[4px] items-center left-[160.78px] top-0" data-name="Container">
      <div className="bg-[#b45afa] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container88 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">srUSD/USDC</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Morpho</p>
      </div>
      <Container92 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[4px] items-center left-0 top-[32px]" data-name="Container">
      <div className="bg-[#9370db] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container91 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[128px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">srUSD/rUSD</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex gap-[4.01px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Morpho</p>
      </div>
      <Container95 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link13 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[4px] items-center left-[150.94px] top-[32px]" data-name="Container">
      <div className="bg-[#73a0ff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container94 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">rUSD</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[4px] items-center left-[297.11px] top-[32px]" data-name="Container">
      <div className="bg-[#6e85f4] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">USDC</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[4px] items-center left-[353.22px] top-[32px]" data-name="Container">
      <div className="bg-[#ffd700] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container99 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container87 />
      <Container90 />
      <Container93 />
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg16 />
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <Heading4 />
        <Container82 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-[#151a20] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-px relative rounded-[16px] self-stretch" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container81 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[23.6px] h-[464px] items-start justify-center left-0 right-0 top-[714.2px]" data-name="Container">
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
    </div>
  );
}

export default function Group78() {
  return (
    <div className="relative size-full">
      <NavBreadcrumbOrderedList />
      <Container1 />
      <HorizontalBorder />
      <Container24 />
      <Container65 />
    </div>
  );
}