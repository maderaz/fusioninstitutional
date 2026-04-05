import svgPaths from "./svg-lmujui14zm";

function Group() {
  return (
    <div className="absolute inset-[1.92%_0_50.11%_39.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.533 36.7536">
        <g id="Group">
          <path d={svgPaths.p15c88300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p38fa1500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10ec1300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p216f4700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p278c3f80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3c2fe900} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Fusion() {
  return (
    <div className="absolute contents inset-[1.92%_0_50.11%_39.01%]" data-name="Fusion">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[69.98%_27.62%_0_39.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4386 22.9993">
        <g id="Group">
          <path d={svgPaths.p4ce0480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2faa6500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p103b400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1a7f74f0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p183c7d40} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pdc83200} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ByIpor() {
  return (
    <div className="absolute contents inset-[69.98%_27.62%_0_39.01%]" data-name="by IPOR">
      <Group1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents inset-[1.92%_0_0_39.01%]" data-name="Text">
      <Fusion />
      <ByIpor />
    </div>
  );
}

export default function FusionLogo() {
  return (
    <div className="relative size-full" data-name="Fusion logo">
      <Text />
      <div className="absolute inset-[0_70.82%_4.76%_0]" data-name="Logo icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.9745 72.9745">
          <path d={svgPaths.p2331300} fill="var(--fill-0, #8429FF)" id="Logo icon" />
        </svg>
      </div>
    </div>
  );
}