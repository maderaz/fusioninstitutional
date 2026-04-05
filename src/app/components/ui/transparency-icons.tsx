import React from "react";

const ICON_SIZE = 20;
const STROKE = "#8429FF";

/** BarChart3 – 3 bars gently rising and falling */
export function AnimatedBarChart() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      {/* baseline */}
      <line x1="3" y1="20" x2="21" y2="20" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      {/* bar 1 (left) */}
      <rect x="6" width="3" rx="1" fill={STROKE} opacity="0.8">
        <animate attributeName="y" values="12;9;14;12" dur="4s" repeatCount="indefinite" />
        <animate attributeName="height" values="8;11;6;8" dur="4s" repeatCount="indefinite" />
      </rect>
      {/* bar 2 (center) */}
      <rect x="11" width="3" rx="1" fill={STROKE} opacity="0.8">
        <animate attributeName="y" values="8;12;6;10;8" dur="5s" repeatCount="indefinite" />
        <animate attributeName="height" values="12;8;14;10;12" dur="5s" repeatCount="indefinite" />
      </rect>
      {/* bar 3 (right) */}
      <rect x="16" width="3" rx="1" fill={STROKE} opacity="0.8">
        <animate attributeName="y" values="10;7;13;10" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="height" values="10;13;7;10" dur="4.5s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/** PieChart – gentle, slow segment drift */
export function AnimatedPieChart() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={STROKE} strokeWidth="1.5" opacity="0.3" />
      {/* Segment 1 */}
      <path d="M12 3 A9 9 0 0 1 21 12 L12 12 Z" fill={STROKE} opacity="0.2">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;6 12 12;0 12 12" dur="14s" repeatCount="indefinite" />
      </path>
      {/* Segment 2 */}
      <path d="M12 3 A9 9 0 0 0 3 12 L12 12 Z" fill={STROKE} opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;-5 12 12;0 12 12" dur="14s" repeatCount="indefinite" />
      </path>
      {/* Divider lines */}
      <line x1="12" y1="12" x2="12" y2="3" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;3 12 12;0 12 12" dur="14s" repeatCount="indefinite" />
      </line>
      <line x1="12" y1="12" x2="21" y2="12" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;3 12 12;0 12 12" dur="14s" repeatCount="indefinite" />
      </line>
      <line x1="12" y1="12" x2="5" y2="19" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 12 12;-2 12 12;0 12 12" dur="14s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

/** Layers – three layers fan apart and compress back */
export function AnimatedLayers() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      {/* Bottom layer */}
      <path d="M2 17l10 5 10-5" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
        <animate attributeName="d" values="M2 17l10 5 10-5;M2 18l10 4 10-4;M2 17l10 5 10-5" dur="6s" repeatCount="indefinite" />
      </path>
      {/* Middle layer */}
      <path d="M2 12l10 5 10-5" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
        <animate attributeName="d" values="M2 12l10 5 10-5;M2 12l10 5 10-5;M2 12l10 5 10-5" dur="6s" repeatCount="indefinite" />
      </path>
      {/* Top layer */}
      <path d="M2 7l10 5 10-5" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={STROKE} fillOpacity="0.1">
        <animate attributeName="d" values="M2 7l10 5 10-5;M2 6l10 6 10-6;M2 7l10 5 10-5" dur="6s" repeatCount="indefinite" />
      </path>
      {/* Top layer return stroke */}
      <path d="M12 2L2 7l10 5 10-5z" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <animate attributeName="d" values="M12 2L2 7l10 5 10-5z;M12 1L2 6l10 6 10-6z;M12 2L2 7l10 5 10-5z" dur="6s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** Activity – ECG pulse line that draws/pulses continuously */
export function AnimatedActivity() {
  const path = "M2 12h4l2-6 3 12 2-8 2 4h7";
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      {/* Ghost trail */}
      <path d={path} stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
      {/* Animated draw */}
      <path
        d={path}
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="60;0;0;60"
          keyTimes="0;0.4;0.6;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.2;0.7;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </path>
      {/* Traveling dot */}
      <circle r="2" fill={STROKE} opacity="0.8">
        <animateMotion
          path="M2 12 L6 12 L8 6 L11 18 L13 10 L15 14 L22 14"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** Eye – pupil looks around, blinks */
export function AnimatedEye() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      {/* Eye outline */}
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Iris */}
      <circle cx="12" cy="12" r="3.5" stroke={STROKE} strokeWidth="1.5" fill={STROKE} fillOpacity="0.15" />
      {/* Pupil – looks around */}
      <circle r="1.8" fill={STROKE} opacity="0.85">
        <animate attributeName="cx" values="12;14;14;10;10;12;12" keyTimes="0;0.15;0.3;0.45;0.6;0.75;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="12;11;13;13;11;12;12" keyTimes="0;0.15;0.3;0.45;0.6;0.75;1" dur="4s" repeatCount="indefinite" />
      </circle>
      {/* Blink – eyelid covers */}
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7"
        stroke="none"
        fill="currentColor"
        className="text-[#161A20] dark:text-[#161A20]"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;0;1;0;0"
          keyTimes="0;0.72;0.74;0.76;0.78;1"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      {/* Upper eyelid line blink */}
      <line x1="2" y1="12" x2="22" y2="12" stroke={STROKE} strokeWidth="2" opacity="0">
        <animate
          attributeName="opacity"
          values="0;0;0;1;0;0"
          keyTimes="0;0.72;0.74;0.76;0.78;1"
          dur="4s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

/** Shield – checkmark draws in, then a scan line sweeps */
export function AnimatedShield() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      {/* Shield body */}
      <path
        d="M12 2l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={STROKE}
        fillOpacity="0.08"
      />
      {/* Checkmark – draws in */}
      <path
        d="M9 12l2 2 4-4"
        stroke={STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="12;0;0;0;12"
          keyTimes="0;0.25;0.6;0.8;1"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </path>
      {/* Scan line sweeping down */}
      <line x1="6" x2="18" stroke={STROKE} strokeWidth="1" opacity="0.4" strokeLinecap="round">
        <animate attributeName="y1" values="4;20;4" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="y2" values="4;20;4" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0.5;0" keyTimes="0;0.1;0.8;1" dur="3.5s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}