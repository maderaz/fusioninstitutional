import svgPaths from "./svg-zwhbtgrkdu";

function Heading() {
  return (
    <div className="content-stretch flex items-center pb-[1.2px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Credit Markets</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center left-0 text-[#94a3b8] text-[14px] top-[12.8px] w-[131.432px]">
        <p className="leading-[20px]">{`Effective Leverage `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[24px] justify-center left-[131.13px] text-[#f8fafc] text-[16px] top-[12px] w-[43.753px]">
        <p className="leading-[24px]">9.88x</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 min-w-[174.5500030517578px] top-[calc(50%-0.6px)] w-[174.55px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Assets</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[16px] relative self-stretch shrink-0 w-[128px]" data-name="Container">
      <Container5 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$62.0M</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Assets APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[144px] pr-[17.6px] relative self-stretch shrink-0 w-[144px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-r-[1.6px] inset-0 pointer-events-none" />
      <Container6 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">2.41%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Liabilities</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[160px] pr-[16px] relative self-stretch shrink-0 w-[160px]" data-name="Container">
      <Container8 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$55.7M</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Liabilities APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[17.6px] relative self-stretch shrink-0 w-[128px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <Container9 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.90%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Net APY</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[112px] pr-[16px] relative self-stretch shrink-0 w-[112px]" data-name="Container">
      <Container11 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">6.90%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[44px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <VerticalBorder />
      <Container7 />
      <VerticalBorder1 />
      <Container10 />
      <div className="min-w-[128px] self-stretch shrink-0 w-[128px]" data-name="Rectangle" />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[612px] top-1/2" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[52px] left-0 right-0 top-0" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SparkSvg() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="spark.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g clipPath="url(#clip0_52_885)" id="spark.svg">
          <path d={svgPaths.p22b77400} fill="url(#paint0_linear_52_885)" id="Spark-Logomark-RGB" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_52_885" x1="29.0155" x2="5.80271" y1="9.55096" y2="27.3555">
            <stop stopColor="#FA43BD" />
            <stop offset="1" stopColor="#FFA930" />
          </linearGradient>
          <clipPath id="clip0_52_885">
            <rect fill="white" height="36" width="36" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SparkSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[36px]" data-name="spark.svg fill">
      <SparkSvg />
    </div>
  );
}

function SparkLend() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[36px]" data-name="Spark Lend">
      <SparkSvgFill />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Spark Lend</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[74.94%] left-[46.64%] right-1/2 top-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.537436 4.00904">
        <g id="Group">
          <path d={svgPaths.p2a003580} fill="var(--fill-0, #1E293B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2f967b00} fill="var(--fill-0, #8429FF)" id="Vector" />
        </g>
      </svg>
      <Group1 />
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

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">98.93%</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Svg />
        </div>
      </div>
      <SparkLend />
      <Container14 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Assets</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[16px] relative self-stretch shrink-0 w-[128px]" data-name="Container">
      <Container22 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$61.3M</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Assets APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[144px] pr-[17.6px] relative self-stretch shrink-0 w-[144px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-r-[1.6px] inset-0 pointer-events-none" />
      <Container23 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">2.41%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Liabilities</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[160px] pr-[16px] relative self-stretch shrink-0 w-[160px]" data-name="Container">
      <Container25 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$55.1M</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Liabilities APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[17.6px] relative self-stretch shrink-0 w-[128px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <Container26 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.90%</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Net APY</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[112px] pr-[16px] relative self-stretch shrink-0 w-[112px]" data-name="Container">
      <Container28 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">6.94%</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[44px] items-start relative shrink-0" data-name="Container">
      <Container21 />
      <VerticalBorder2 />
      <Container24 />
      <VerticalBorder3 />
      <Container27 />
      <div className="min-w-[128px] self-stretch shrink-0 w-[128px]" data-name="Rectangle" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Container20 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex items-start justify-between pl-[24px] py-[24px] relative size-full">
        <Container13 />
        <Container19 />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[240px] relative shrink-0 w-[240px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">
          <p className="leading-[20px]">Market</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Supplied</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[112px] relative shrink-0 w-[240.8px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Supply APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Collateral</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[144px] relative shrink-0 w-[144px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Collateral APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[rgba(254,0,68,0.1)] min-w-[160px] relative shrink-0 w-[160px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Borrowed</p>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[rgba(254,0,68,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Borrow APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[112px] relative shrink-0 w-[112px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Net APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">
          <p className="leading-[20px]">Allocation</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1.6px] pb-[1.6px] relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#00091d] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Spark Lend wstETH</p>
      </div>
      <Svg2 />
    </div>
  );
}

function Data() {
  return (
    <div className="bg-[#151a20] relative shrink-0 w-[240px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[14.8px] pt-[14.4px] px-[16px] relative w-full">
        <Link />
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$61.3M</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[368.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$61.3M</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[144px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[86.15px] pr-[16.8px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">2.41%</p>
        </div>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[70.15px] pr-[16.8px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">0.00%</p>
        </div>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[112px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">2.41%</p>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[74.94%] left-[46.64%] right-1/2 top-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.537436 4.00904">
        <g id="Group">
          <path d={svgPaths.p2a003580} fill="var(--fill-0, #1E293B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2f967b00} fill="var(--fill-0, #8429FF)" id="Vector" />
        </g>
      </svg>
      <Group3 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">98.93%</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[112px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16px] relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#00091d] mb-[-1.6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#2b2f34] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[1.6px] pr-[16px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <div className="h-[49.6px] relative shrink-0 w-[160px]" data-name="Data">
            <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-l-[1.6px] inset-0 pointer-events-none" />
          </div>
          <Data4 />
          <Data5 />
          <Data6 />
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Spark Lend WETH</p>
      </div>
      <Svg4 />
    </div>
  );
}

function Data7() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-0 pb-[14px] pt-[14.4px] px-[16px] right-[1168.8px] top-0" data-name="Data">
      <Link1 />
    </div>
  );
}

function Data8() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[368px] pb-[12px] pl-[16px] pr-[160px] pt-[12.8px] right-[656px] top-0" data-name="Data">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.43%</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[880.8px] pb-[12px] pl-[17.6px] pr-[16px] pt-[12.8px] right-[368px] top-0" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-l-[1.6px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$55.1M</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1040.8px] pb-[12px] pl-[70.15px] pr-[16.8px] pt-[12.8px] right-[240px] top-0" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.90%</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1168.8px] pb-[12px] pt-[12.8px] px-[16px] right-[128px] top-0" data-name="Data">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">-1.90%</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[#00091d] h-[48.8px] mb-[-1.6px] relative shrink-0 w-full" data-name="Row">
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1.6px] pb-[1.6px] relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pb-[1.6px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Button />
        <Table />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-0 p-[1.6px] right-0 rounded-[16px] top-[76px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container12 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AaveSvg() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="euler.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#1C4DC4" />
        <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="18">e</text>
      </svg>
    </div>
  );
}

function AaveSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[36px]" data-name="euler.svg fill">
      <AaveSvg />
    </div>
  );
}

function AaveV3Prime() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[36px]" data-name="Aave v3 Prime">
      <AaveSvgFill />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Euler</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[74.95%] left-1/2 right-[46.83%] top-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.50734 4.00805">
        <g id="Group">
          <path d={svgPaths.pb2d80c0} fill="var(--fill-0, #8429FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group5 />
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p25e94500} fill="var(--fill-0, #1E293B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">1.01%</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Svg5 />
        </div>
      </div>
      <AaveV3Prime />
      <Container33 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Assets</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[16px] relative self-stretch shrink-0 w-[128px]" data-name="Container">
      <Container41 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$632K</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Assets APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[144px] pr-[17.6px] relative self-stretch shrink-0 w-[144px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-r-[1.6px] inset-0 pointer-events-none" />
      <Container42 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">2.45%</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Total Liabilities</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[160px] pr-[16px] relative self-stretch shrink-0 w-[160px]" data-name="Container">
      <Container44 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$568K</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Liabilities APY</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder5() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[128px] pr-[17.6px] relative self-stretch shrink-0 w-[128px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <Container45 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">2.18%</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Net APY</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[112px] pr-[16px] relative self-stretch shrink-0 w-[112px]" data-name="Container">
      <Container47 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">4.92%</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[44px] items-start relative shrink-0" data-name="Container">
      <Container40 />
      <VerticalBorder4 />
      <Container43 />
      <VerticalBorder5 />
      <Container46 />
      <div className="min-w-[128px] self-stretch shrink-0 w-[128px]" data-name="Rectangle" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Container39 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex items-start justify-between pl-[24px] py-[24px] relative size-full">
        <Container32 />
        <Container38 />
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[240px] relative shrink-0 w-[240px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">
          <p className="leading-[20px]">Market</p>
        </div>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Supplied</p>
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[112px] relative shrink-0 w-[240.8px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Supply APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Collateral</p>
        </div>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-[rgba(0,255,147,0.1)] min-w-[144px] relative shrink-0 w-[144px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Collateral APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-[rgba(254,0,68,0.1)] min-w-[160px] relative shrink-0 w-[160px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Borrowed</p>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-[rgba(254,0,68,0.1)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Borrow APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[112px] relative shrink-0 w-[112px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] text-right whitespace-nowrap">
          <p className="leading-[20px]">Net APY</p>
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-[rgba(43,47,52,0.5)] min-w-[128px] relative shrink-0 w-[128px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pb-[10.8px] pt-[9.2px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">
          <p className="leading-[20px]">Allocation</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1.6px] pb-[1.6px] relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#00091d] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Euler wstETH</p>
      </div>
      <Svg7 />
    </div>
  );
}

function Data12() {
  return (
    <div className="bg-[#151a20] relative shrink-0 w-[240px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[14.8px] pt-[14.4px] px-[16px] relative w-full">
        <Link2 />
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$632K</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[240.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">0.04%</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">$632K</p>
        </div>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[144px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[86.15px] pr-[16.8px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">2.41%</p>
        </div>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[70.15px] pr-[16.8px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">0.17%</p>
        </div>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[112px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12.8px] relative w-full">
        <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
          <p className="leading-[24px]">2.45%</p>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-[74.95%] left-1/2 right-[46.83%] top-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.50734 4.00805">
        <g id="Group">
          <path d={svgPaths.pb2d80c0} fill="var(--fill-0, #8429FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group7 />
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p25e94500} fill="var(--fill-0, #1E293B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.01%</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[112px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16px] relative w-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[#00091d] mb-[-1.6px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#2b2f34] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[1.6px] pr-[16px] relative w-full">
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
          <Data16 />
          <div className="h-[49.6px] relative shrink-0 w-[160px]" data-name="Data">
            <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-l-[1.6px] inset-0 pointer-events-none" />
          </div>
          <Data17 />
          <Data18 />
          <Data19 />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Euler WETH</p>
      </div>
      <Svg9 />
    </div>
  );
}

function Data20() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-0 pb-[14px] pt-[14.4px] px-[16px] right-[1168.8px] top-0" data-name="Data">
      <Link3 />
    </div>
  );
}

function Data21() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[368px] pb-[12px] pl-[16px] pr-[160px] pt-[12.8px] right-[656px] top-0" data-name="Data">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">1.53%</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[880.8px] pb-[12px] pl-[17.6px] pr-[16px] pt-[12.8px] right-[368px] top-0" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-dashed border-l-[1.6px] inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">$568K</p>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1040.8px] pb-[12px] pl-[70.15px] pr-[16.8px] pt-[12.8px] right-[240px] top-0" data-name="Data">
      <div aria-hidden="true" className="absolute border-[#2a313c] border-r-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">2.18%</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1168.8px] pb-[12px] pt-[12.8px] px-[16px] right-[128px] top-0" data-name="Data">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">-2.18%</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[#00091d] h-[48.8px] mb-[-1.6px] relative shrink-0 w-full" data-name="Row">
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1.6px] pb-[1.6px] relative shrink-0 w-full" data-name="Body">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pb-[1.6px] relative shrink-0 w-full" data-name="Table">
      <HeaderRow1 />
      <Body1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Button1 />
        <Table1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#151a20] content-stretch flex flex-col items-start left-0 p-[1.6px] right-0 rounded-[16px] top-[337.6px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#2a313c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container31 />
    </div>
  );
}

export default function Group8() {
  return (
    <div className="relative size-full">
      <Container />
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}