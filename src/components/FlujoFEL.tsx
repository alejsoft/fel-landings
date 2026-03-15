"use client";

import { motion } from "framer-motion";
import { Building2, BadgeCheck } from "lucide-react";

const ICON_R = 22;

function Node({
  icon: Icon,
  label,
  color = "text-foreground",
  delay,
  x,
  y,
  labelSide = "bottom",
}: {
  icon: React.ElementType;
  label: string;
  color?: string;
  delay: number;
  x: number;
  y: number;
  labelSide?: "bottom" | "left" | "right";
}) {
  const isHorizontal = labelSide === "left" || labelSide === "right";

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`flex items-center ${isHorizontal ? "flex-row gap-2" : "flex-col gap-1"} ${labelSide === "left" ? "flex-row-reverse" : ""}`}
        style={{ transform: isHorizontal ? "translate(-50%, 0)" : "translateX(-50%)" }}
      >
        <div className={`w-11 h-11 rounded-full border border-gray-400 dark:border-border-subtle bg-surface flex items-center justify-center shrink-0 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`font-mono text-[0.6rem] tracking-wide whitespace-nowrap ${color}`}>
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function AvatarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={{ color: "var(--color-foreground)" }}>
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6" fill="currentColor" />
    </svg>
  );
}

function SatNode({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <span className="font-mono text-sm font-bold text-sap-blue tracking-wide whitespace-nowrap block" style={{ transform: "translateX(-50%)" }}>
        SAT GT
      </span>
    </motion.div>
  );
}

/* Línea que aparece dibujándose */
function AnimatedLine({ d, delay, duration = 0.6, width = 1.5, opacity = 1 }: { d: string; delay: number; duration?: number; width?: number; opacity?: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      opacity={opacity}
      className="text-gray-300 dark:text-gray-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration, ease: "easeInOut" }}
    />
  );
}

/* Línea con flujo animado (dashes moviéndose) — se muestra después de que AnimatedLine termina */
function FlowingLine({ d, delay }: { d: string; delay: number }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 10"
      className="text-gray-800 dark:text-gray-200"
      opacity="0"
    >
      <animate attributeName="opacity" from="0" to="0.8" begin={`${delay}s`} dur="0.3s" fill="freeze" />
      <animate attributeName="stroke-dashoffset" from="0" to="-56" dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
    </path>
  );
}

/* Partículas que viajan por las líneas neurales */
function NeuralParticle({ path, delay, duration, size = 2.5, opacity = 0.9 }: { path: string; delay: number; duration: number; size?: number; opacity?: number }) {
  return (
    <circle r={size} opacity="0" style={{ fill: "var(--color-foreground)" }}>
      <animate attributeName="opacity" values={`0;${opacity};${opacity};0`} dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
      <animateMotion path={path} dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

function HaabNode({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-1" style={{ transform: "translateX(-50%)" }}>
        <motion.div
          className="w-9 h-9 rounded-full overflow-hidden shrink-0"
          animate={{
            boxShadow: ["0 0 0px rgba(34,197,94,0.2)", "0 0 20px rgba(34,197,94,0.6)", "0 0 0px rgba(34,197,94,0.2)"],
            opacity: [1, 0.7, 1],
          }}
          transition={{ delay: delay + 0.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/icon-192.webp" alt="HaaB" className="w-full h-full object-cover dark:hidden" />
          <img src="/icon-192-dark.webp" alt="HaaB" className="w-full h-full object-cover hidden dark:block" />
        </motion.div>
        <span className="font-mono text-[0.6rem] tracking-wide text-green-600 dark:text-green-400 font-semibold">
          HaaB
        </span>
      </div>
    </motion.div>
  );
}

function ErpDot({ color, label, delay, x, y }: { color: string; label: string; delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "backOut" }}
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center ${label === "+" ? "border-2 border-gray-400 dark:border-gray-500 bg-transparent" : "border border-border-subtle"}`}
        style={{ backgroundColor: label === "+" ? "transparent" : color, transform: "translateX(-50%)" }}
      >
        <span className={`font-mono text-[0.45rem] font-bold ${label === "+" ? "text-gray-400 dark:text-gray-500" : "text-white"}`}>{label}</span>
      </div>
    </motion.div>
  );
}

function FloatingParticles({ cx, startY, endY, delay }: { cx: number; startY: number; endY: number; delay: number }) {
  const midY = (startY + endY) / 2;
  const rangeY = (endY - startY) / 2 - 4;

  const particles = [
    { x: cx - 10, y: midY - 8,  dx: 6,   dy: -10, dur: 2.8, begin: 0 },
    { x: cx + 6,  y: midY + 5,  dx: -5,  dy: 8,   dur: 3.2, begin: 0.4 },
    { x: cx - 3,  y: midY - 2,  dx: 8,   dy: -6,  dur: 2.5, begin: 0.8 },
    { x: cx + 10, y: midY - 6,  dx: -7,  dy: 10,  dur: 3.0, begin: 0.2 },
    { x: cx,      y: midY + 8,  dx: 4,   dy: -12, dur: 2.6, begin: 1.0 },
    { x: cx - 7,  y: midY + 3,  dx: 10,  dy: 5,   dur: 3.4, begin: 0.6 },
    { x: cx + 4,  y: midY,      dx: -8,  dy: -7,  dur: 2.9, begin: 1.2 },
    { x: cx - 12, y: midY - 4,  dx: 5,   dy: 9,   dur: 3.1, begin: 0.3 },
    { x: cx + 8,  y: midY + 10, dx: -6,  dy: -8,  dur: 2.7, begin: 0.7 },
    { x: cx - 14, y: midY + 6,  dx: 9,   dy: -5,  dur: 3.3, begin: 0.1 },
    { x: cx + 12, y: midY + 2,  dx: -4,  dy: 7,   dur: 2.4, begin: 0.9 },
    { x: cx + 2,  y: midY - 10, dx: -6,  dy: 11,  dur: 3.0, begin: 0.5 },
    { x: cx - 5,  y: midY + 12, dx: 7,   dy: -9,  dur: 2.8, begin: 1.1 },
  ];

  return (
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" begin={`${delay}s`} dur="0.5s" fill="freeze" />
      {particles.map((p, i) => (
        <circle key={i} r={i % 3 === 0 ? 2 : 1.5} style={{ fill: "var(--color-foreground)" }}>
          <animate attributeName="cx" values={`${p.x};${p.x + p.dx};${p.x - p.dx * 0.5};${p.x}`} dur={`${p.dur}s`} begin={`${delay + p.begin}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${p.y};${p.y + p.dy};${p.y - p.dy * 0.5};${p.y}`} dur={`${p.dur}s`} begin={`${delay + p.begin}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.9;0.5;0.3" dur={`${p.dur}s`} begin={`${delay + p.begin}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>
  );
}

export default function FlujoFEL() {
  const W = 360;
  const H = 490;
  const cx = W / 2;

  const spread = 90;
  const erpSpread = 44;

  const pos = {
    proveedor: { x: cx, y: 0 },
    portal:    { x: cx - spread, y: 110 },
    certif:    { x: cx + spread, y: 110 },
    sat:       { x: cx, y: 220 },
    haab:      { x: cx, y: 285 },
  };

  const erpY = 405;
  const erpDots = [
    { x: cx - erpSpread * 2, color: "#0060df", label: "SAP" },
    { x: cx - erpSpread,     color: "#0B53CE", label: "GP" },
    { x: cx,                 color: "#714B67", label: "Odoo" },
    { x: cx + erpSpread,     color: "#C50010", label: "EX" },
    { x: cx + erpSpread * 2, color: "#9ca3af", label: "+" },
  ];

  // Line anchors
  const provBottom = { x: cx, y: pos.proveedor.y + ICON_R * 2 + 2 };
  const portalTop = { x: pos.portal.x, y: pos.portal.y + 2 };
  const portalBottom = { x: pos.portal.x, y: pos.portal.y + ICON_R * 2 + 2 };
  const certifTop = { x: pos.certif.x, y: pos.certif.y + 2 };
  const certifBottom = { x: pos.certif.x, y: pos.certif.y + ICON_R * 2 + 2 };
  const satTop = { x: cx, y: pos.sat.y };
  const satBottom = { x: cx, y: pos.sat.y + 20 };
  const haabTop = { x: cx, y: pos.haab.y + 2 };
  const haabBottom = { x: cx, y: pos.haab.y + 36 + 14 + 4 };

  // Curves
  const midY1 = (provBottom.y + portalTop.y) / 2;
  const midY2 = (portalBottom.y + satTop.y) / 2;
  const midY3 = (haabBottom.y + erpY) / 2;

  // Conexiones tipo red neuronal Proveedor → Portal SAT / Certificador
  const neuralLines = [
    { off: 0,   w: 2.5, opacity: 1 },    // central gruesa
    { off: -4,  w: 1.5, opacity: 0.7 },
    { off: 4,   w: 1.5, opacity: 0.7 },
    { off: -10, w: 1,   opacity: 0.4 },
    { off: 10,  w: 1,   opacity: 0.4 },
    { off: -18, w: 0.5, opacity: 0.25 },
    { off: 18,  w: 0.5, opacity: 0.25 },
  ];
  const neuralPathsPortal = neuralLines.map(l => ({
    d: `M ${cx + l.off * 0.2} ${provBottom.y} L ${portalTop.x + l.off * 2.5} ${portalTop.y}`,
    w: l.w, opacity: l.opacity,
  }));
  const neuralPathsCertif = neuralLines.map(l => ({
    d: `M ${cx - l.off * 0.2} ${provBottom.y} L ${certifTop.x - l.off * 2.5} ${certifTop.y}`,
    w: l.w, opacity: l.opacity,
  }));
  const pathPortalToSat = `M ${portalBottom.x} ${portalBottom.y} C ${portalBottom.x} ${midY2} ${cx} ${midY2} ${cx} ${satTop.y}`;
  const pathCertifToSat = `M ${certifBottom.x} ${certifBottom.y} C ${certifBottom.x} ${midY2} ${cx} ${midY2} ${cx} ${satTop.y}`;
  const pathSatToHaab = `M ${satBottom.x} ${satBottom.y} L ${haabTop.x} ${haabTop.y}`;

  const erpPaths = erpDots.map(dot =>
    `M ${cx} ${haabBottom.y} C ${cx} ${midY3} ${dot.x} ${midY3} ${dot.x} ${erpY}`
  );

  // All paths for flowing animation
  const allPaths = [
    neuralPathsPortal[0].d,  // central
    neuralPathsPortal[1].d,
    neuralPathsPortal[2].d,
    neuralPathsCertif[0].d,  // central
    neuralPathsCertif[1].d,
    neuralPathsCertif[2].d,
    pathPortalToSat,
    pathCertifToSat,
    ...erpPaths,
  ];

  // Flow animation starts after all draw animations complete (~5s)
  const flowStart = 5;

  return (
    <div className="relative overflow-visible" style={{ width: W, height: H }}>
      <svg
        className="absolute inset-0 pointer-events-none overflow-visible"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* 1. Líneas base que se dibujan */}
        {/* Neural connections Proveedor → Portal SAT */}
        {neuralPathsPortal.map((p, i) => (
          <AnimatedLine key={`np-${i}`} d={p.d} delay={0.3 + i * 0.06} duration={0.7} width={p.w} opacity={p.opacity} />
        ))}
        {/* Neural connections Proveedor → Certificador */}
        {neuralPathsCertif.map((p, i) => (
          <AnimatedLine key={`nc-${i}`} d={p.d} delay={0.3 + i * 0.06} duration={0.7} width={p.w} opacity={p.opacity} />
        ))}
        <AnimatedLine d={pathPortalToSat} delay={2.0} duration={0.7} />
        <AnimatedLine d={pathCertifToSat} delay={2.0} duration={0.7} />
        {/* Línea SAT→HaaB removida, reemplazada por rain dots */}
        {erpPaths.map((d, i) => (
          <AnimatedLine key={`erp-line-${i}`} d={d} delay={4.2 + i * 0.08} duration={0.5} />
        ))}

        {/* Partículas viajando por líneas neurales */}
        {neuralPathsPortal.map((p, i) => (
          <NeuralParticle
            key={`pp-${i}`}
            path={p.d}
            delay={flowStart + i * 0.3}
            duration={1.8 + i * 0.2}
            size={Math.max(1.5, 3 - i * 0.3)}
            opacity={p.opacity}
          />
        ))}
        {neuralPathsCertif.map((p, i) => (
          <NeuralParticle
            key={`pc-${i}`}
            path={p.d}
            delay={flowStart + i * 0.3}
            duration={1.8 + i * 0.2}
            size={Math.max(1.5, 3 - i * 0.3)}
            opacity={p.opacity}
          />
        ))}

        {/* Partículas flotantes entre SAT GT y HaaB */}
        <FloatingParticles cx={cx} startY={pos.sat.y + 18} endY={pos.haab.y - 2} delay={3.6} />

        {/* 2. Flujo animado (dashes moviéndose) sobre todas las líneas */}
        {allPaths.map((d, i) => (
          <FlowingLine key={`flow-${i}`} d={d} delay={flowStart + i * 0.1} />
        ))}
      </svg>

      {/* Nodos */}
      {/* Proveedor con avatar custom */}
      <motion.div
        className="absolute"
        style={{ left: pos.proveedor.x, top: pos.proveedor.y - 25 }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-1" style={{ transform: "translateX(-50%)" }}>
          <div className="w-11 h-11 rounded-full border border-gray-400 dark:border-border-subtle bg-surface flex items-center justify-center overflow-hidden text-black dark:text-gray-300">
            <AvatarIcon className="w-7 h-7" />
          </div>
          <span className="font-mono text-[0.6rem] tracking-wide whitespace-nowrap">
            Proveedor
          </span>
        </div>
      </motion.div>
      <Node icon={Building2} label="Portal SAT" delay={1.2} x={pos.portal.x} y={pos.portal.y} color="text-sap-blue" labelSide="left" />
      <Node icon={BadgeCheck} label="Certificador" delay={1.2} x={pos.certif.x} y={pos.certif.y} labelSide="right" />
      <SatNode delay={2.7} x={pos.sat.x} y={pos.sat.y} />
      <HaabNode delay={3.6} x={pos.haab.x} y={pos.haab.y} />

      {/* ERP dots */}
      {erpDots.map((dot, i) => (
        <ErpDot
          key={i}
          color={dot.color}
          label={dot.label}
          delay={4.2 + 0.3 + i * 0.1}
          x={dot.x}
          y={erpY}
        />
      ))}
    </div>
  );
}
