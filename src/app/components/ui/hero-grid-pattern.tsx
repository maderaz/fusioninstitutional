import { useMemo } from "react";

/* ── Cell size for the grid ── */
const CELL = 70; // px

/* ── Deterministic accent placements ── */
type AccentType = "dot" | "plus" | "dashed" | "glow";

interface Accent {
  row: number;
  col: number;
  type: AccentType;
  /** optional per-element opacity override */
  opacity?: number;
  /** index of elements that "breathe" (slow pulse) */
  breathe?: boolean;
}

const ACCENTS: Accent[] = [
  // Dots — lime
  { row: 2, col: 5, type: "dot", opacity: 0.25 },
  { row: 7, col: 2, type: "dot", opacity: 0.18, breathe: true },
  { row: 4, col: 11, type: "dot", opacity: 0.22 },
  { row: 9, col: 8, type: "dot", opacity: 0.15 },
  { row: 1, col: 15, type: "dot", opacity: 0.28 },
  { row: 6, col: 18, type: "dot", opacity: 0.2 },
  { row: 11, col: 4, type: "dot", opacity: 0.16, breathe: true },
  { row: 3, col: 22, type: "dot", opacity: 0.24 },

  // Plus / Cross — white
  { row: 1, col: 8, type: "plus", opacity: 0.07 },
  { row: 5, col: 3, type: "plus", opacity: 0.09 },
  { row: 8, col: 14, type: "plus", opacity: 0.06 },
  { row: 3, col: 19, type: "plus", opacity: 0.08 },
  { row: 10, col: 10, type: "plus", opacity: 0.07 },
  { row: 6, col: 24, type: "plus", opacity: 0.06 },
  { row: 12, col: 16, type: "plus", opacity: 0.08 },

  // Dashed borders
  { row: 4, col: 7, type: "dashed" },
  { row: 2, col: 13, type: "dashed" },
  { row: 8, col: 20, type: "dashed" },
  { row: 6, col: 1, type: "dashed" },
  { row: 10, col: 22, type: "dashed" },

  // Glow squares — lime fill
  { row: 3, col: 3, type: "glow" },
  { row: 7, col: 12, type: "glow", breathe: true },
  { row: 5, col: 16, type: "glow" },
  { row: 9, col: 6, type: "glow" },
  { row: 1, col: 20, type: "glow" },
  { row: 11, col: 14, type: "glow" },
];

/* ── Individual accent renderers ── */
function DotAccent({ opacity = 0.2 }: { opacity?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ backgroundColor: `rgba(199, 254, 2, ${opacity})` }}
    />
  );
}

function PlusAccent({ opacity = 0.07 }: { opacity?: number }) {
  const color = `rgba(255, 255, 255, ${opacity})`;
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Horizontal bar */}
      <div
        className="absolute left-1/2 top-1/2 h-[1px] w-[14px] -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: color }}
      />
      {/* Vertical bar */}
      <div
        className="absolute left-1/2 top-1/2 h-[14px] w-[1px] -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function DashedAccent() {
  return (
    <div
      className="absolute inset-[8px] rounded-[1px]"
      style={{ border: "1px dashed rgba(255, 255, 255, 0.05)" }}
    />
  );
}

function GlowAccent() {
  return (
    <div
      className="absolute inset-[6px] rounded-[2px]"
      style={{ backgroundColor: "rgba(199, 254, 2, 0.03)" }}
    />
  );
}

/* ── Main component ── */
export function HeroGridPattern() {
  const accentElements = useMemo(
    () =>
      ACCENTS.map((a, i) => {
        const x = a.col * CELL;
        const y = a.row * CELL;

        let child: React.ReactNode;
        switch (a.type) {
          case "dot":
            child = <DotAccent opacity={a.opacity} />;
            break;
          case "plus":
            child = <PlusAccent opacity={a.opacity} />;
            break;
          case "dashed":
            child = <DashedAccent />;
            break;
          case "glow":
            child = <GlowAccent />;
            break;
        }

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: y,
              width: CELL,
              height: CELL,
              animation: a.breathe
                ? `heroGridBreathe ${6 + (i % 3) * 2}s ease-in-out infinite`
                : undefined,
            }}
          >
            {child}
          </div>
        );
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Inline keyframes for breathing animation */}
      <style>{`
        @keyframes heroGridBreathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Grid lines via CSS background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            `repeating-linear-gradient(0deg, transparent, transparent ${CELL - 1}px, rgba(255,255,255,0.04) ${CELL - 1}px, rgba(255,255,255,0.04) ${CELL}px)`,
            `repeating-linear-gradient(90deg, transparent, transparent ${CELL - 1}px, rgba(255,255,255,0.04) ${CELL - 1}px, rgba(255,255,255,0.04) ${CELL}px)`,
          ].join(", "),
        }}
      />

      {/* Accent elements */}
      <div className="absolute inset-0">{accentElements}</div>

      {/* ── Fade / mask layers ── */}

      {/* Bottom fade — strong, pattern disappears at ~70% height */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(to top, #060606 0%, #060606 10%, transparent 100%)",
        }}
      />

      {/* Side vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #060606 0%, transparent 15%, transparent 85%, #060606 100%)",
        }}
      />

      {/* Top fade — subtle, under navbar */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: "linear-gradient(to bottom, #060606, transparent)",
        }}
      />
    </div>
  );
}
