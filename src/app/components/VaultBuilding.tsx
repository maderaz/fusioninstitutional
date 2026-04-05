import { useEffect, useRef } from "react";

export function VaultLandscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let time = 0;

    // ── TYPES ──
    interface Star { x: number; y: number; s: number; sp: number; off: number }

    interface Vault {
      cx: number;        // center x (0-1)
      baseY: number;     // base y (0-1)
      vw: number;        // width px
      vh: number;        // height px
      blockRows: number;
      blockCols: number;
      hasDoor: boolean;
      doorScale: number;
      hasCrane: boolean;
      hasScaffolding: boolean;
      missingBlocks: number[]; // indices of missing blocks (under construction)
      seed: number;
      layer: number;
    }

    interface FloatingBlock {
      targetX: number;
      targetY: number;
      bw: number;
      bh: number;
      phase: number;
      speed: number;
      seed: number;
    }

    let stars: Star[] = [];
    let vaults: Vault[] = [];
    let floatingBlocks: FloatingBlock[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      init();
    }

    function seededRandom(seed: number) {
      let s = seed;
      return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
    }

    function init() {
      stars = [];
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * w, y: Math.random() * h * 0.5,
          s: 0.3 + Math.random() * 1.3, sp: 0.5 + Math.random() * 2,
          off: Math.random() * Math.PI * 2,
        });
      }

      vaults = [
        // ── BACK LAYER ──
        { cx: 0.06, baseY: 0.80, vw: 60, vh: 90, blockRows: 5, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [0,1], seed: 1, layer: 0 },
        { cx: 0.18, baseY: 0.79, vw: 80, vh: 140, blockRows: 7, blockCols: 4, hasDoor: true, doorScale: 0.7, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3], seed: 2, layer: 0 },
        { cx: 0.34, baseY: 0.80, vw: 55, vh: 80, blockRows: 4, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1,2], seed: 3, layer: 0 },
        { cx: 0.50, baseY: 0.78, vw: 95, vh: 170, blockRows: 8, blockCols: 5, hasDoor: true, doorScale: 0.9, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4], seed: 4, layer: 0 },
        { cx: 0.68, baseY: 0.80, vw: 65, vh: 100, blockRows: 5, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [0], seed: 5, layer: 0 },
        { cx: 0.82, baseY: 0.79, vw: 75, vh: 120, blockRows: 6, blockCols: 4, hasDoor: true, doorScale: 0.6, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1,2], seed: 6, layer: 0 },
        { cx: 0.95, baseY: 0.80, vw: 55, vh: 85, blockRows: 4, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [], seed: 7, layer: 0 },

        // ── MID LAYER ──
        { cx: 0.04, baseY: 0.88, vw: 75, vh: 110, blockRows: 5, blockCols: 4, hasDoor: true, doorScale: 0.65, hasCrane: false, hasScaffolding: false, missingBlocks: [], seed: 10, layer: 1 },
        { cx: 0.16, baseY: 0.87, vw: 100, vh: 180, blockRows: 8, blockCols: 5, hasDoor: true, doorScale: 1.0, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4,5], seed: 11, layer: 1 },
        { cx: 0.32, baseY: 0.88, vw: 65, vh: 95, blockRows: 5, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1], seed: 12, layer: 1 },
        { cx: 0.46, baseY: 0.86, vw: 110, vh: 210, blockRows: 9, blockCols: 5, hasDoor: true, doorScale: 1.1, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4,5,6,7], seed: 13, layer: 1 },
        { cx: 0.62, baseY: 0.88, vw: 70, vh: 100, blockRows: 5, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [], seed: 14, layer: 1 },
        { cx: 0.76, baseY: 0.87, vw: 95, vh: 160, blockRows: 7, blockCols: 5, hasDoor: true, doorScale: 0.85, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3], seed: 15, layer: 1 },
        { cx: 0.92, baseY: 0.88, vw: 65, vh: 90, blockRows: 4, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1,2], seed: 16, layer: 1 },

        // ── FRONT LAYER ──
        { cx: 0.0, baseY: 0.96, vw: 85, vh: 120, blockRows: 5, blockCols: 4, hasDoor: true, doorScale: 0.7, hasCrane: false, hasScaffolding: false, missingBlocks: [], seed: 20, layer: 2 },
        { cx: 0.12, baseY: 0.95, vw: 70, vh: 85, blockRows: 4, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1], seed: 21, layer: 2 },
        { cx: 0.24, baseY: 0.94, vw: 115, vh: 200, blockRows: 8, blockCols: 5, hasDoor: true, doorScale: 1.2, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4,5,6], seed: 22, layer: 2 },
        { cx: 0.40, baseY: 0.96, vw: 65, vh: 80, blockRows: 4, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [0], seed: 23, layer: 2 },
        { cx: 0.52, baseY: 0.93, vw: 130, vh: 240, blockRows: 10, blockCols: 6, hasDoor: true, doorScale: 1.3, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4,5,6,7,8,9], seed: 24, layer: 2 },
        { cx: 0.68, baseY: 0.96, vw: 75, vh: 95, blockRows: 5, blockCols: 4, hasDoor: true, doorScale: 0.6, hasCrane: false, hasScaffolding: true, missingBlocks: [0,1,2], seed: 25, layer: 2 },
        { cx: 0.80, baseY: 0.94, vw: 105, vh: 185, blockRows: 8, blockCols: 5, hasDoor: true, doorScale: 1.0, hasCrane: true, hasScaffolding: false, missingBlocks: [0,1,2,3,4], seed: 26, layer: 2 },
        { cx: 0.94, baseY: 0.96, vw: 70, vh: 100, blockRows: 5, blockCols: 3, hasDoor: false, doorScale: 0, hasCrane: false, hasScaffolding: false, missingBlocks: [], seed: 27, layer: 2 },
      ];

      // Floating blocks in the sky (being lowered to construction sites)
      floatingBlocks = [];
      for (let i = 0; i < 8; i++) {
        floatingBlocks.push({
          targetX: 0.15 + (i / 8) * 0.7 + (Math.sin(i * 3.7) * 0.05),
          targetY: 0.45 + Math.sin(i * 2.3) * 0.12,
          bw: 18 + Math.sin(i * 4.1) * 8,
          bh: 12 + Math.sin(i * 2.7) * 5,
          phase: i * 0.8,
          speed: 0.3 + Math.sin(i) * 0.15,
          seed: 100 + i,
        });
      }
    }

    // ══════ DRAW A VAULT STRUCTURE ══════
    function drawVault(v: Vault, t: number) {
      const layerAlpha = v.layer === 0 ? 0.35 : v.layer === 1 ? 0.6 : 1.0;
      const bx = v.cx * w - v.vw / 2;
      const baseY = v.baseY * h;
      const by = baseY - v.vh;
      const rng = seededRandom(v.seed);
      const blockW = v.vw / v.blockCols;
      const blockH = v.vh / v.blockRows;
      const gap = 2;

      // ── Foundation base (thick concrete slab) ──
      const foundH = 6;
      ctx!.fillStyle = `rgba(25, 24, 35, ${layerAlpha})`;
      ctx!.fillRect(bx - 4, baseY - foundH, v.vw + 8, foundH + 2);
      ctx!.strokeStyle = `rgba(139, 92, 246, ${0.1 * layerAlpha})`;
      ctx!.lineWidth = 0.6;
      ctx!.strokeRect(bx - 4, baseY - foundH, v.vw + 8, foundH + 2);

      // ── BLOCK GRID (the vault wall / building blocks) ──
      for (let r = 0; r < v.blockRows; r++) {
        for (let c = 0; c < v.blockCols; c++) {
          const blockIdx = r * v.blockCols + c;
          const isMissing = v.missingBlocks.includes(blockIdx);

          const x = bx + c * blockW + gap / 2;
          const y = by + (v.blockRows - 1 - r) * blockH + gap / 2;
          const bw = blockW - gap;
          const bh = blockH - gap;

          if (isMissing) {
            // Empty slot — dashed outline, "waiting for block"
            ctx!.setLineDash([3, 3]);
            ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.08 + Math.sin(t * 2 + blockIdx) * 0.04) * layerAlpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.strokeRect(x, y, bw, bh);
            ctx!.setLineDash([]);

            // Pulsing placeholder
            const pulseA = (0.015 + Math.sin(t * 3 + blockIdx * 0.5) * 0.01) * layerAlpha;
            ctx!.fillStyle = `rgba(139, 92, 246, ${pulseA})`;
            ctx!.fillRect(x, y, bw, bh);
            continue;
          }

          // ── Solid block ──
          const shade = rng();
          const base = 14 + shade * 8;
          const blockGrad = ctx!.createLinearGradient(x, y, x, y + bh);
          blockGrad.addColorStop(0, `rgba(${base + 4}, ${base + 2}, ${base + 14}, ${layerAlpha})`);
          blockGrad.addColorStop(1, `rgba(${base - 2}, ${base - 3}, ${base + 6}, ${layerAlpha})`);
          ctx!.fillStyle = blockGrad;
          ctx!.fillRect(x, y, bw, bh);

          // Block outline
          ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.06 + shade * 0.04) * layerAlpha})`;
          ctx!.lineWidth = 0.5;
          ctx!.strokeRect(x, y, bw, bh);

          // ── Rivets at corners ──
          const rivetR = 1.2;
          const rivetInset = 3.5;
          const rivetAlpha = 0.15 * layerAlpha;
          const rivets = [
            [x + rivetInset, y + rivetInset],
            [x + bw - rivetInset, y + rivetInset],
            [x + rivetInset, y + bh - rivetInset],
            [x + bw - rivetInset, y + bh - rivetInset],
          ];
          for (const [rx, ry] of rivets) {
            ctx!.beginPath();
            ctx!.arc(rx, ry, rivetR, 0, Math.PI * 2);
            ctx!.fillStyle = `rgba(139, 92, 246, ${rivetAlpha})`;
            ctx!.fill();
          }

          // ── Glowing energy seam between blocks ──
          if (c < v.blockCols - 1 && !v.missingBlocks.includes(blockIdx + 1)) {
            const seamX = x + bw + gap / 2;
            const seamAlpha = (0.06 + Math.sin(t * 1.5 + r * 0.7 + c * 1.1) * 0.04) * layerAlpha;
            ctx!.beginPath();
            ctx!.moveTo(seamX, y + 2);
            ctx!.lineTo(seamX, y + bh - 2);
            ctx!.strokeStyle = `rgba(139, 92, 246, ${seamAlpha})`;
            ctx!.lineWidth = gap;
            ctx!.stroke();
          }
          if (r > 0 && !v.missingBlocks.includes(blockIdx - v.blockCols)) {
            const seamY = y + bh + gap / 2;
            const seamAlpha = (0.05 + Math.sin(t * 1.2 + r * 1.3 + c * 0.6) * 0.03) * layerAlpha;
            ctx!.beginPath();
            ctx!.moveTo(x + 2, seamY);
            ctx!.lineTo(x + bw - 2, seamY);
            ctx!.strokeStyle = `rgba(139, 92, 246, ${seamAlpha})`;
            ctx!.lineWidth = gap;
            ctx!.stroke();
          }
        }
      }

      // ── VAULT DOOR ──
      if (v.hasDoor) {
        const doorRadius = Math.min(v.vw * 0.22, v.vh * 0.18) * v.doorScale;
        const doorCX = bx + v.vw / 2;
        const doorCY = baseY - doorRadius * 1.2;

        // Door recess (dark circle bg)
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius * 1.15, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 0, 0, ${0.4 * layerAlpha})`;
        ctx!.fill();

        // Thick outer ring
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.35 + Math.sin(t * 0.8 + v.seed) * 0.1) * layerAlpha})`;
        ctx!.lineWidth = 3;
        ctx!.stroke();

        // Second ring
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius * 0.78, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.18 * layerAlpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Inner ring
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius * 0.45, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.22 * layerAlpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Spokes (rotating)
        const spokeCount = 8;
        for (let i = 0; i < spokeCount; i++) {
          const angle = (Math.PI * 2 * i) / spokeCount + t * 0.12;
          ctx!.beginPath();
          ctx!.moveTo(
            doorCX + Math.cos(angle) * doorRadius * 0.12,
            doorCY + Math.sin(angle) * doorRadius * 0.12
          );
          ctx!.lineTo(
            doorCX + Math.cos(angle) * doorRadius * 0.72,
            doorCY + Math.sin(angle) * doorRadius * 0.72
          );
          ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.15 + Math.sin(t * 2.5 + i * 0.8) * 0.07) * layerAlpha})`;
          ctx!.lineWidth = 1.5;
          ctx!.stroke();

          // Spoke end bolts
          ctx!.beginPath();
          ctx!.arc(
            doorCX + Math.cos(angle) * doorRadius * 0.72,
            doorCY + Math.sin(angle) * doorRadius * 0.72,
            2, 0, Math.PI * 2
          );
          ctx!.fillStyle = `rgba(139, 92, 246, ${0.3 * layerAlpha})`;
          ctx!.fill();
        }

        // Center hub glow
        const hubGlow = ctx!.createRadialGradient(doorCX, doorCY, 0, doorCX, doorCY, doorRadius * 0.2);
        hubGlow.addColorStop(0, `rgba(139, 92, 246, ${(0.5 + Math.sin(t * 3 + v.seed) * 0.2) * layerAlpha})`);
        hubGlow.addColorStop(1, `rgba(139, 92, 246, 0)`);
        ctx!.fillStyle = hubGlow;
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius * 0.2, 0, Math.PI * 2);
        ctx!.fill();

        // Center dot
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(139, 92, 246, ${(0.8 + Math.sin(t * 4) * 0.2) * layerAlpha})`;
        ctx!.fill();

        // Door glow halo
        const haloGrad = ctx!.createRadialGradient(doorCX, doorCY, doorRadius * 0.5, doorCX, doorCY, doorRadius * 1.8);
        haloGrad.addColorStop(0, `rgba(139, 92, 246, ${0.04 * layerAlpha})`);
        haloGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx!.fillStyle = haloGrad;
        ctx!.beginPath();
        ctx!.arc(doorCX, doorCY, doorRadius * 1.8, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ── SCAFFOLDING ──
      if (v.hasScaffolding) {
        const scaffAlpha = 0.12 * layerAlpha;
        const scaffColor = `rgba(139, 92, 246, ${scaffAlpha})`;
        const scaffW = v.vw + 16;
        const sx = bx - 8;

        // Vertical poles
        for (let i = 0; i <= 4; i++) {
          const px = sx + (i / 4) * scaffW;
          ctx!.beginPath();
          ctx!.moveTo(px, by - 10);
          ctx!.lineTo(px, baseY);
          ctx!.strokeStyle = scaffColor;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        // Horizontal platforms
        for (let r = 0; r <= v.blockRows; r++) {
          const py = by + r * blockH;
          ctx!.beginPath();
          ctx!.moveTo(sx, py);
          ctx!.lineTo(sx + scaffW, py);
          ctx!.strokeStyle = scaffColor;
          ctx!.lineWidth = 0.7;
          ctx!.stroke();
        }

        // Cross braces
        for (let r = 0; r < v.blockRows; r++) {
          const py1 = by + r * blockH;
          const py2 = by + (r + 1) * blockH;
          ctx!.beginPath();
          ctx!.moveTo(sx, py1);
          ctx!.lineTo(sx + scaffW * 0.25, py2);
          ctx!.moveTo(sx + scaffW, py1);
          ctx!.lineTo(sx + scaffW * 0.75, py2);
          ctx!.strokeStyle = `rgba(139, 92, 246, ${scaffAlpha * 0.6})`;
          ctx!.lineWidth = 0.5;
          ctx!.stroke();
        }
      }

      // ── CONSTRUCTION CRANE ──
      if (v.hasCrane) {
        const craneAlpha = layerAlpha;
        const craneBase = bx + v.vw * 0.75;
        const craneTop = by - v.vh * 0.25;
        const craneArmLen = v.vw * 0.7;

        // Vertical mast
        ctx!.beginPath();
        ctx!.moveTo(craneBase, baseY);
        ctx!.lineTo(craneBase, craneTop);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.18 * craneAlpha})`;
        ctx!.lineWidth = 2;
        ctx!.stroke();

        // Mast cross members
        for (let i = 0; i < 6; i++) {
          const my = baseY - ((baseY - craneTop) / 6) * i;
          ctx!.beginPath();
          ctx!.moveTo(craneBase - 4, my);
          ctx!.lineTo(craneBase + 4, my);
          ctx!.strokeStyle = `rgba(139, 92, 246, ${0.1 * craneAlpha})`;
          ctx!.lineWidth = 0.7;
          ctx!.stroke();
        }

        // Horizontal arm
        ctx!.beginPath();
        ctx!.moveTo(craneBase - craneArmLen * 0.3, craneTop);
        ctx!.lineTo(craneBase + craneArmLen * 0.7, craneTop);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.15 * craneAlpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Counter-weight arm cables
        ctx!.beginPath();
        ctx!.moveTo(craneBase, craneTop - 8);
        ctx!.lineTo(craneBase - craneArmLen * 0.3, craneTop);
        ctx!.moveTo(craneBase, craneTop - 8);
        ctx!.lineTo(craneBase + craneArmLen * 0.7, craneTop);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.1 * craneAlpha})`;
        ctx!.lineWidth = 0.7;
        ctx!.stroke();

        // Dangling cable + block
        const cableX = craneBase + craneArmLen * 0.4 + Math.sin(t * 0.8 + v.seed) * 6;
        const cableEndY = craneTop + v.vh * 0.3 + Math.sin(t * 0.5 + v.seed * 2) * 10;

        ctx!.beginPath();
        ctx!.moveTo(craneBase + craneArmLen * 0.4, craneTop);
        ctx!.lineTo(cableX, cableEndY);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.12 * craneAlpha})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();

        // The dangling block
        const dbw = blockW * 0.8;
        const dbh = blockH * 0.8;
        drawDanglingBlock(cableX - dbw / 2, cableEndY, dbw, dbh, t, v.seed, craneAlpha);

        // Crane top beacon
        const beaconA = (0.4 + Math.sin(t * 5 + v.seed) * 0.3) * craneAlpha;
        ctx!.beginPath();
        ctx!.arc(craneBase, craneTop - 8, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(239, 68, 68, ${beaconA})`;
        ctx!.fill();
        const bGlow = ctx!.createRadialGradient(craneBase, craneTop - 8, 0, craneBase, craneTop - 8, 12);
        bGlow.addColorStop(0, `rgba(239, 68, 68, ${beaconA * 0.5})`);
        bGlow.addColorStop(1, "rgba(239, 68, 68, 0)");
        ctx!.fillStyle = bGlow;
        ctx!.beginPath();
        ctx!.arc(craneBase, craneTop - 8, 12, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ── Security scan beam (on vaults with doors) ──
      if (v.hasDoor && v.layer >= 1) {
        const scanX = bx + v.vw / 2;
        const scanPhase = (t * 0.4 + v.seed) % (Math.PI * 2);
        const scanOffset = Math.sin(scanPhase) * v.vw * 0.4;

        ctx!.beginPath();
        ctx!.moveTo(scanX + scanOffset, by);
        ctx!.lineTo(scanX + scanOffset, baseY);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.03 + Math.sin(scanPhase * 2) * 0.02) * layerAlpha})`;
        ctx!.lineWidth = v.vw * 0.6;
        ctx!.stroke();
      }
    }

    function drawDanglingBlock(x: number, y: number, bw: number, bh: number, t: number, seed: number, alpha: number) {
      // Block body with glow
      const glowR = Math.max(bw, bh) * 1.5;
      const glow = ctx!.createRadialGradient(x + bw / 2, y + bh / 2, 0, x + bw / 2, y + bh / 2, glowR);
      glow.addColorStop(0, `rgba(139, 92, 246, ${0.08 * alpha})`);
      glow.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx!.fillStyle = glow;
      ctx!.fillRect(x + bw / 2 - glowR, y + bh / 2 - glowR, glowR * 2, glowR * 2);

      // Block
      const bodyGrad = ctx!.createLinearGradient(x, y, x, y + bh);
      bodyGrad.addColorStop(0, `rgba(28, 26, 42, ${alpha})`);
      bodyGrad.addColorStop(1, `rgba(18, 16, 30, ${alpha})`);
      ctx!.fillStyle = bodyGrad;
      ctx!.fillRect(x, y, bw, bh);

      ctx!.strokeStyle = `rgba(139, 92, 246, ${(0.3 + Math.sin(t * 3 + seed) * 0.1) * alpha})`;
      ctx!.lineWidth = 1;
      ctx!.strokeRect(x, y, bw, bh);

      // Rivets
      const rr = 1;
      const ri = 3;
      const rivs = [[x + ri, y + ri], [x + bw - ri, y + ri], [x + ri, y + bh - ri], [x + bw - ri, y + bh - ri]];
      for (const [rx, ry] of rivs) {
        ctx!.beginPath();
        ctx!.arc(rx, ry, rr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(139, 92, 246, ${0.25 * alpha})`;
        ctx!.fill();
      }
    }

    // ══════ FLOATING BLOCKS (in sky, approaching) ══════
    function drawFloatingBlocks(t: number) {
      for (const fb of floatingBlocks) {
        const bobY = Math.sin(t * fb.speed + fb.phase) * 12;
        const bobX = Math.sin(t * fb.speed * 0.7 + fb.phase + 1) * 6;
        const fx = fb.targetX * w + bobX;
        const fy = fb.targetY * h + bobY;

        // Downward guide line (faint)
        ctx!.beginPath();
        ctx!.moveTo(fx + fb.bw / 2, fy + fb.bh);
        ctx!.lineTo(fx + fb.bw / 2, fy + fb.bh + 40 + Math.sin(t + fb.phase) * 10);
        ctx!.setLineDash([2, 4]);
        ctx!.strokeStyle = `rgba(139, 92, 246, ${0.06 + Math.sin(t * 2 + fb.phase) * 0.03})`;
        ctx!.lineWidth = 0.6;
        ctx!.stroke();
        ctx!.setLineDash([]);

        drawDanglingBlock(fx, fy, fb.bw, fb.bh, t, fb.seed, 0.7);
      }
    }

    function draw() {
      time += 0.008;
      ctx!.clearRect(0, 0, w, h);

      // Transparent background — energy beam shows through
      // No opaque fill so the WebGL layer beneath is visible

      // Stars
      for (const star of stars) {
        const a = 0.2 + Math.sin(time * star.sp + star.off) * 0.25;
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 190, 255, ${a})`;
        ctx!.fill();
      }

      // Atmospheric haze
      const haze = ctx!.createRadialGradient(w * 0.5, h * 0.8, 0, w * 0.5, h * 0.8, w * 0.5);
      haze.addColorStop(0, "rgba(139, 92, 246, 0.04)");
      haze.addColorStop(0.5, "rgba(139, 92, 246, 0.015)");
      haze.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx!.fillStyle = haze;
      ctx!.fillRect(0, 0, w, h);

      // Floating blocks in the sky
      drawFloatingBlocks(time);

      // Draw vaults by layer
      for (let layer = 0; layer < 3; layer++) {
        for (const v of vaults) {
          if (v.layer === layer) drawVault(v, time);
        }
      }

      // Ground
      ctx!.fillStyle = "#09090B";
      ctx!.fillRect(0, h * 0.96, w, h * 0.04);

      // Rising particles
      for (let i = 0; i < 18; i++) {
        const progress = ((time * 0.2 + i * 0.055) % 1);
        const px = w * (0.08 + (i / 18) * 0.84) + Math.sin(time * 0.8 + i * 2.7) * 8;
        const py = h * 0.95 - progress * h * 0.55;
        const alpha = Math.sin(progress * Math.PI) * 0.25;
        const size = 0.8 + Math.sin(progress * Math.PI) * 1.2;

        ctx!.beginPath();
        ctx!.arc(px, py, size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx!.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: "block" }}
    />
  );
}