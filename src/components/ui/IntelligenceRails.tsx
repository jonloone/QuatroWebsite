/**
 * IntelligenceRails — Redesigned: Outcome → Model → Systems
 *
 * Right-to-left read direction:
 *   Column 1 (right): What Your Team Gets — outcome-led cards
 *   Column 2 (center): The Operational Model — concentric ring diagram
 *   Column 3 (left): Your Systems — buyer's existing stack
 *   Structural feedback loop underneath
 *
 * Desktop: Full SVG with connected nodes and model diagram
 * Mobile: Vertical card stack (outcome-first)
 *
 * Design system: Light palette, sharp shapes, WCAG AA contrast.
 */
import { useState, useEffect, type ReactElement } from "react";

/* ── Font variables ── */
const MONO = "var(--font-mono, 'JetBrains Mono Variable', monospace)";
const DISPLAY = "var(--font-display, 'Roobert', system-ui, sans-serif)";
const SANS = "var(--font-sans, 'Reckless', ui-serif, Georgia, serif)";

/* ── Light section palette ── */
const SECTION_BG = "#f5f5f4";
const SECTION_BORDER = "#e7e5e4";
const BODY_TEXT = "#292524";
const SECONDARY_TEXT = "#44403c";
const ZONE_LABEL = "#57534e";

/* ── Column accent colors ── */
const OUTCOME_ACCENT = "#c2410c"; // warm terracotta
const MODEL_ACCENT = "#0f4c3a"; // brand forest
const MODEL_ACCENT_MED = "#1a6b52"; // lighter forest for rings
const SYSTEMS_ACCENT = "#64748b"; // cool slate

/* ── Outcome cards: outcome-led with mechanism subtitle ── */
const OUTCOMES = [
  {
    outcome: "Visibility across every system",
    mechanism: "via unified workflows",
    accent: "#0f766e",
    bg: "#f0fdfa",
    border: "#99f6e4",
    icon: "workflow",
  },
  {
    outcome: "Answers that cross silos",
    mechanism: "via AI agents",
    accent: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
    icon: "agent",
  },
  {
    outcome: "Actions that run governed",
    mechanism: "via automations with audit trail",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    icon: "automation",
  },
  {
    outcome: "Intelligence in your tools",
    mechanism: "via APIs feeding back into what you use",
    accent: "#c2410c",
    bg: "#fff7ed",
    border: "#fed7aa",
    icon: "api",
  },
];

/* ── Systems (buyer's existing stack) ── */
const SYSTEMS = [
  "ERP & Finance",
  "SCADA & IoT",
  "CRM & Ticketing",
  "Databases & Warehouses",
  "Custom & Legacy APIs",
];

/* ── Icons 22×22 ── */
const ICON_SIZE = 22;
const OUTPUT_ICONS: Record<string, ReactElement> = {
  agent: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="7.5" r="3.8" />
      <path d="M8.8,5.8 Q11,3.2 13.2,5.8" strokeWidth="1.1" />
      <path d="M5,19 C5,15 7.5,13 11,13 C14.5,13 17,15 17,19" />
      <path d="M4,2 L2.5,6 L5.5,5.3 L4,9.5" strokeWidth="1.4" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="3.5" cy="11" r="2.4" />
      <circle cx="11" cy="11" r="2.4" />
      <circle cx="18.5" cy="11" r="2.4" />
      <line x1="5.9" y1="11" x2="8.6" y2="11" />
      <line x1="13.4" y1="11" x2="16.1" y2="11" />
      <polyline points="14.8,8.5 16.1,11 14.8,13.5" strokeWidth="1.2" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <circle cx="11" cy="11" r="2.5" />
      <line x1="11" y1="2.5" x2="11" y2="4.5" />
      <line x1="11" y1="17.5" x2="11" y2="19.5" />
      <line x1="2.5" y1="11" x2="4.5" y2="11" />
      <line x1="17.5" y1="11" x2="19.5" y2="11" />
      <line x1="5" y1="5" x2="6.5" y2="6.5" />
      <line x1="15.5" y1="15.5" x2="17" y2="17" />
      <line x1="15.5" y1="6.5" x2="17" y2="5" />
      <line x1="5" y1="17" x2="6.5" y2="15.5" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="16" rx="1.5" />
      <line x1="12" y1="7" x2="20" y2="7" />
      <line x1="12" y1="11" x2="18" y2="11" />
      <line x1="12" y1="15" x2="20" y2="15" />
      <circle cx="17.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

/* ── Responsive hook ── */
function useIsMobile(bp = 768) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp}px)`);
    setM(mq.matches);
    const h = (e: MediaQueryListEvent) => setM(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [bp]);
  return m;
}

/* ═══════════════════════════════════════════
   DESKTOP SVG
   ═══════════════════════════════════════════ */
const W = 960;
const H = 460;

// Column x-ranges (right-to-left visual weight)
const SYS_X0 = 20;
const SYS_X1 = 200;
const MODEL_X0 = 280;
const MODEL_X1 = 640;
const OUT_X0 = 720;
const OUT_X1 = 940;

// Model center
const MCX = (MODEL_X0 + MODEL_X1) / 2; // 460
const MCY = 220;

// Ring radii
const R_OUTER = 120;
const R_MID = 88;
const R_INNER = 58;
const R_CORE = 28;

function DesktopSVG(): ReactElement {
  const outcomeYs = [90, 160, 230, 300];
  const systemYs = [90, 145, 200, 255, 310];

  // Model ring node positions (8 nodes around outer ring)
  const outerNodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
    return { x: MCX + Math.cos(a) * R_OUTER, y: MCY + Math.sin(a) * R_OUTER };
  });

  // Middle ring nodes (4)
  const midNodes = Array.from({ length: 4 }, (_, i) => {
    const a = (i * Math.PI * 2) / 4 - Math.PI / 4;
    return { x: MCX + Math.cos(a) * R_MID, y: MCY + Math.sin(a) * R_MID };
  });

  // Inner ring nodes (4, offset)
  const innerNodes = Array.from({ length: 4 }, (_, i) => {
    const a = (i * Math.PI * 2) / 4 - Math.PI / 2;
    return { x: MCX + Math.cos(a) * R_INNER, y: MCY + Math.sin(a) * R_INNER };
  });

  // Model ring labels at cardinal positions
  const ringLabels = [
    { text: "What's allowed", sub: "governance", x: MCX, y: MCY - R_OUTER - 14 },
    { text: "What runs", sub: "execution", x: MCX + R_OUTER + 8, y: MCY },
    { text: "What matters", sub: "rules", x: MCX, y: MCY + R_OUTER + 22 },
    { text: "What exists", sub: "entities", x: MCX - R_OUTER - 8, y: MCY },
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block", width: "100%", height: "auto" }}
      role="img"
      aria-label="Intelligence architecture: your systems flow into one operational model, which delivers outcomes to your team"
    >
      {/* ── Zone labels ── */}
      <text x={(OUT_X0 + OUT_X1) / 2} y={38} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", fill: OUTCOME_ACCENT, fontWeight: 600 }}>
        What your team gets
      </text>
      <text x={MCX} y={38} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", fill: MODEL_ACCENT, fontWeight: 600 }}>
        The operational model
      </text>
      <text x={(SYS_X0 + SYS_X1) / 2} y={38} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", fill: SYSTEMS_ACCENT, fontWeight: 600 }}>
        Your systems
      </text>

      {/* ═══ SYSTEMS COLUMN (left) ═══ */}
      <g>
        {SYSTEMS.map((sys, idx) => {
          const y = systemYs[idx];
          return (
            <g key={`sys-${idx}`}>
              <rect x={SYS_X0} y={y - 18} width={SYS_X1 - SYS_X0} height={36} rx={6}
                fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
              <circle cx={SYS_X0 + 20} cy={y} r={4} fill={SYSTEMS_ACCENT} opacity={0.2} />
              <text x={SYS_X0 + 34} y={y + 4}
                style={{ fontFamily: DISPLAY, fontSize: 12, fontWeight: 500, fill: SECONDARY_TEXT }}>
                {sys}
              </text>
            </g>
          );
        })}
        {/* Integration note */}
        <text x={(SYS_X0 + SYS_X1) / 2} y={systemYs[4] + 34} textAnchor="middle"
          style={{ fontFamily: MONO, fontSize: 8, fill: SYSTEMS_ACCENT, fontStyle: "italic" }}>
          8,000+ integrations via xOps
        </text>
      </g>

      {/* ═══ OPERATIONAL MODEL (center) ═══ */}
      <g>
        {/* Concentric ring fills */}
        <circle cx={MCX} cy={MCY} r={R_OUTER} fill={MODEL_ACCENT} opacity={0.03} />
        <circle cx={MCX} cy={MCY} r={R_OUTER} fill="none" stroke={MODEL_ACCENT} strokeWidth={0.8} opacity={0.1} />

        <circle cx={MCX} cy={MCY} r={R_MID} fill={MODEL_ACCENT} opacity={0.04} />
        <circle cx={MCX} cy={MCY} r={R_MID} fill="none" stroke={MODEL_ACCENT} strokeWidth={0.8} opacity={0.15} />

        <circle cx={MCX} cy={MCY} r={R_INNER} fill={MODEL_ACCENT} opacity={0.05} />
        <circle cx={MCX} cy={MCY} r={R_INNER} fill="none" stroke={MODEL_ACCENT} strokeWidth={0.8} opacity={0.2} />

        <circle cx={MCX} cy={MCY} r={R_CORE} fill={MODEL_ACCENT} opacity={0.06} />
        <circle cx={MCX} cy={MCY} r={R_CORE} fill="none" stroke={MODEL_ACCENT} strokeWidth={1} opacity={0.3} />

        {/* Outer ring edges (graph feel) */}
        {outerNodes.map((n, i) => {
          const next = outerNodes[(i + 1) % 8];
          return <line key={`oe-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={MODEL_ACCENT} strokeWidth={0.5} opacity={0.1} />;
        })}
        {/* Cross-connections outer */}
        <line x1={outerNodes[0].x} y1={outerNodes[0].y} x2={outerNodes[4].x} y2={outerNodes[4].y}
          stroke={MODEL_ACCENT} strokeWidth={0.35} opacity={0.07} />
        <line x1={outerNodes[2].x} y1={outerNodes[2].y} x2={outerNodes[6].x} y2={outerNodes[6].y}
          stroke={MODEL_ACCENT} strokeWidth={0.35} opacity={0.07} />

        {/* Middle ring edges */}
        {midNodes.map((n, i) => {
          const next = midNodes[(i + 1) % 4];
          return <line key={`me-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={MODEL_ACCENT} strokeWidth={0.5} opacity={0.12} />;
        })}

        {/* Inner ring edges */}
        {innerNodes.map((n, i) => {
          const next = innerNodes[(i + 1) % 4];
          return <line key={`ie-${i}`} x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={MODEL_ACCENT} strokeWidth={0.5} opacity={0.12} />;
        })}

        {/* Cross-ring connections (outer → mid) */}
        {midNodes.map((n, i) => {
          const o1 = outerNodes[i * 2];
          const o2 = outerNodes[i * 2 + 1];
          return (
            <g key={`xr-${i}`}>
              <line x1={o1.x} y1={o1.y} x2={n.x} y2={n.y}
                stroke={MODEL_ACCENT} strokeWidth={0.4} opacity={0.08} />
              <line x1={o2.x} y1={o2.y} x2={n.x} y2={n.y}
                stroke={MODEL_ACCENT} strokeWidth={0.4} opacity={0.08} />
            </g>
          );
        })}

        {/* Cross-ring connections (mid → inner) */}
        {innerNodes.map((n, i) => {
          const m1 = midNodes[i];
          const m2 = midNodes[(i + 1) % 4];
          return (
            <g key={`xri-${i}`}>
              <line x1={m1.x} y1={m1.y} x2={n.x} y2={n.y}
                stroke={MODEL_ACCENT} strokeWidth={0.4} opacity={0.1} />
              <line x1={m2.x} y1={m2.y} x2={n.x} y2={n.y}
                stroke={MODEL_ACCENT} strokeWidth={0.4} opacity={0.1} />
            </g>
          );
        })}

        {/* Render nodes */}
        {outerNodes.map((n, i) => (
          <circle key={`on-${i}`} cx={n.x} cy={n.y} r={3.5} fill={MODEL_ACCENT} opacity={0.25} />
        ))}
        {midNodes.map((n, i) => (
          <circle key={`mn-${i}`} cx={n.x} cy={n.y} r={3} fill={MODEL_ACCENT} opacity={0.3} />
        ))}
        {innerNodes.map((n, i) => (
          <circle key={`in-${i}`} cx={n.x} cy={n.y} r={2.5} fill={MODEL_ACCENT} opacity={0.35} />
        ))}

        {/* Ring labels — small pills at cardinal positions */}
        {ringLabels.map((lbl, i) => {
          const isHoriz = i === 1 || i === 3; // right or left
          const anchor = i === 1 ? "start" : i === 3 ? "end" : "middle";
          return (
            <g key={`rl-${i}`}>
              <text x={lbl.x} y={lbl.y} textAnchor={anchor}
                style={{ fontFamily: DISPLAY, fontSize: 10.5, fontWeight: 600, fill: MODEL_ACCENT, opacity: 0.7 }}>
                {lbl.text}
              </text>
              <text x={lbl.x} y={lbl.y + 12} textAnchor={anchor}
                style={{ fontFamily: MONO, fontSize: 8, fill: SYSTEMS_ACCENT, opacity: 0.6 }}>
                {lbl.sub}
              </text>
            </g>
          );
        })}

        {/* Center label */}
        <text x={MCX} y={MCY - 3} textAnchor="middle"
          style={{ fontFamily: MONO, fontSize: 7.5, fontWeight: 700, fill: MODEL_ACCENT, opacity: 0.4, letterSpacing: "0.1em" }}>
          YOUR
        </text>
        <text x={MCX} y={MCY + 7} textAnchor="middle"
          style={{ fontFamily: MONO, fontSize: 7.5, fontWeight: 700, fill: MODEL_ACCENT, opacity: 0.4, letterSpacing: "0.1em" }}>
          OPS
        </text>

        {/* Bottom caption */}
        <text x={MCX} y={MCY + R_OUTER + 50} textAnchor="middle"
          style={{ fontFamily: DISPLAY, fontSize: 11, fontWeight: 600, fill: BODY_TEXT }}>
          One model. All your operations.
        </text>
      </g>

      {/* ═══ OUTCOMES COLUMN (right) ═══ */}
      <g>
        {OUTCOMES.map((item, idx) => {
          const y = outcomeYs[idx];
          return (
            <g key={`out-${idx}`}>
              <rect x={OUT_X0} y={y - 26} width={OUT_X1 - OUT_X0} height={52} rx={6}
                fill={item.bg} stroke={item.border} strokeWidth="1.2" />

              {/* Icon */}
              <g>
                <foreignObject x={OUT_X0 + 14} y={y - 15} width="22" height="22">
                  <div style={{ color: item.accent, display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22 }}>
                    {OUTPUT_ICONS[item.icon]}
                  </div>
                </foreignObject>
              </g>

              {/* Outcome text (primary) */}
              <text x={OUT_X0 + 48} y={y - 5}
                style={{ fontFamily: DISPLAY, fontSize: 12.5, fontWeight: 600, fill: item.accent }}>
                {item.outcome}
              </text>

              {/* Mechanism text (secondary) */}
              <text x={OUT_X0 + 48} y={y + 11}
                style={{ fontFamily: MONO, fontSize: 9, fill: SYSTEMS_ACCENT, opacity: 0.7 }}>
                {item.mechanism}
              </text>
            </g>
          );
        })}
      </g>

      {/* ═══ FLOW CONNECTORS ═══ */}
      {/* Systems → Model (dashed, cool) */}
      {[0, 2, 4].map((sIdx) => {
        const sy = systemYs[sIdx];
        return (
          <path key={`sc-${sIdx}`}
            d={`M${SYS_X1},${sy} Q${(SYS_X1 + MODEL_X0) / 2},${(sy + MCY) / 2} ${MCX - R_OUTER},${MCY + (sy < MCY ? -30 : sy > MCY ? 30 : 0)}`}
            fill="none" stroke={SYSTEMS_ACCENT} strokeWidth="0.8" strokeDasharray="4,3" opacity="0.25" />
        );
      })}

      {/* Model → Outcomes (dashed, warm) */}
      {outcomeYs.map((oy, idx) => (
        <path key={`oc-${idx}`}
          d={`M${MCX + R_OUTER},${MCY + (oy < MCY ? -30 : oy > MCY ? 30 : 0)} Q${(MODEL_X1 + OUT_X0) / 2},${oy} ${OUT_X0},${oy}`}
          fill="none" stroke={OUTCOMES[idx].accent} strokeWidth="0.8" strokeDasharray="4,3" opacity="0.25" />
      ))}

      {/* ═══ FEEDBACK LOOP ═══ */}
      <path
        d={`M${OUT_X1 - 10},${outcomeYs[3] + 30} C${OUT_X1 + 20},${H - 30} ${SYS_X0 - 20},${H - 30} ${SYS_X0 + 10},${systemYs[4] + 30}`}
        fill="none" stroke={OUTCOME_ACCENT} strokeWidth="1" strokeDasharray="6,4" opacity="0.2" />

      {/* Feedback arrow tip */}
      <polygon
        points={`${SYS_X0 + 10},${systemYs[4] + 26} ${SYS_X0 + 5},${systemYs[4] + 36} ${SYS_X0 + 15},${systemYs[4] + 36}`}
        fill={OUTCOME_ACCENT} opacity={0.25} />

      {/* Feedback label pill */}
      <rect x={MCX - 90} y={H - 50} width={180} height={28} rx={14}
        fill="#fff" stroke={OUTCOME_ACCENT} strokeWidth="0.8" opacity={0.8} />
      <text x={MCX} y={H - 32} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 9, fontWeight: 600, fill: OUTCOME_ACCENT, opacity: 0.8 }}>
        Every result compounds the model
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MOBILE — Vertical card stack (outcome-first)
   ═══════════════════════════════════════════ */
function MobileLayout(): ReactElement {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "0 16px" }}>

      {/* ── OUTCOMES FIRST (right-to-left thinking applies top-down on mobile) ── */}
      <div>
        <div style={{
          fontFamily: MONO, fontSize: 10, color: OUTCOME_ACCENT,
          textTransform: "uppercase", letterSpacing: "0.12em",
          textAlign: "center", marginBottom: 12, fontWeight: 600,
        }}>
          What your team gets
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {OUTCOMES.map((item, idx) => (
            <div key={`mo-${idx}`} style={{
              padding: "14px 16px", borderRadius: 8, background: item.bg,
              border: `1.5px solid ${item.border}`,
              display: "flex", alignItems: "flex-start", gap: 12,
            }}>
              <div style={{ color: item.accent, flexShrink: 0, display: "flex", alignItems: "center", marginTop: 2 }}>
                {OUTPUT_ICONS[item.icon]}
              </div>
              <div>
                <div style={{ fontFamily: DISPLAY, fontSize: 14, fontWeight: 600, color: item.accent }}>
                  {item.outcome}
                </div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: SYSTEMS_ACCENT, marginTop: 2, opacity: 0.8 }}>
                  {item.mechanism}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Arrow ── */}
      <div style={{ textAlign: "center" }}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
          <line x1="12" y1="22" x2="12" y2="0" stroke={SECTION_BORDER} strokeWidth="1.2" strokeDasharray="4,3" />
          <polygon points="8,2 12,-5 16,2" fill={ZONE_LABEL} transform="rotate(180 12 0)" />
        </svg>
        <div style={{
          fontFamily: MONO, fontSize: 9, color: ZONE_LABEL,
          textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2,
        }}>
          powered by
        </div>
      </div>

      {/* ── OPERATIONAL MODEL ── */}
      <div>
        <div style={{
          fontFamily: MONO, fontSize: 10, color: MODEL_ACCENT,
          textTransform: "uppercase", letterSpacing: "0.12em",
          textAlign: "center", marginBottom: 12, fontWeight: 600,
        }}>
          The operational model
        </div>
        <div style={{
          padding: "20px 16px", borderRadius: 10,
          background: "#fff", border: `1.5px solid ${SECTION_BORDER}`,
        }}>
          {/* Mini concentric ring SVG */}
          <svg viewBox="0 0 240 240" style={{ width: "100%", maxWidth: 240, height: "auto", display: "block", margin: "0 auto 16px" }}>
            {/* Rings */}
            <circle cx="120" cy="120" r="100" fill={MODEL_ACCENT} opacity={0.03} stroke={MODEL_ACCENT} strokeWidth={0.8} />
            <circle cx="120" cy="120" r="72" fill={MODEL_ACCENT} opacity={0.04} stroke={MODEL_ACCENT} strokeWidth={0.8} />
            <circle cx="120" cy="120" r="44" fill={MODEL_ACCENT} opacity={0.06} stroke={MODEL_ACCENT} strokeWidth={0.8} />
            <circle cx="120" cy="120" r="18" fill={MODEL_ACCENT} opacity={0.08} stroke={MODEL_ACCENT} strokeWidth={1} />

            {/* Nodes on outer ring */}
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
              return <circle key={i} cx={120 + Math.cos(a) * 100} cy={120 + Math.sin(a) * 100} r={3} fill={MODEL_ACCENT} opacity={0.2} />;
            })}
            {/* Edges on outer ring */}
            {Array.from({ length: 8 }, (_, i) => {
              const a1 = (i * Math.PI * 2) / 8 - Math.PI / 2;
              const a2 = ((i + 1) * Math.PI * 2) / 8 - Math.PI / 2;
              return <line key={i} x1={120 + Math.cos(a1) * 100} y1={120 + Math.sin(a1) * 100}
                x2={120 + Math.cos(a2) * 100} y2={120 + Math.sin(a2) * 100}
                stroke={MODEL_ACCENT} strokeWidth={0.5} opacity={0.1} />;
            })}

            {/* Nodes on mid ring */}
            {Array.from({ length: 4 }, (_, i) => {
              const a = (i * Math.PI * 2) / 4 - Math.PI / 4;
              return <circle key={i} cx={120 + Math.cos(a) * 72} cy={120 + Math.sin(a) * 72} r={2.5} fill={MODEL_ACCENT} opacity={0.25} />;
            })}

            {/* Nodes on inner ring */}
            {Array.from({ length: 4 }, (_, i) => {
              const a = (i * Math.PI * 2) / 4 - Math.PI / 2;
              return <circle key={i} cx={120 + Math.cos(a) * 44} cy={120 + Math.sin(a) * 44} r={2} fill={MODEL_ACCENT} opacity={0.3} />;
            })}
          </svg>

          {/* Ring labels as a 2×2 grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
            maxWidth: 280, margin: "0 auto",
          }}>
            {[
              { label: "What exists", sub: "entities" },
              { label: "What matters", sub: "rules" },
              { label: "What runs", sub: "execution" },
              { label: "What's allowed", sub: "governance" },
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: "center", padding: "6px 8px",
                borderRadius: 6, background: `${MODEL_ACCENT}08`,
                border: `1px solid ${MODEL_ACCENT}15`,
              }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 11, fontWeight: 600, color: MODEL_ACCENT, opacity: 0.75 }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: MONO, fontSize: 8, color: SYSTEMS_ACCENT, opacity: 0.6 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            fontFamily: DISPLAY, fontSize: 12, fontWeight: 600, color: BODY_TEXT,
            textAlign: "center", marginTop: 14,
          }}>
            One model. All your operations.
          </div>
        </div>
      </div>

      {/* ── Arrow ── */}
      <div style={{ textAlign: "center" }}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
          <line x1="12" y1="22" x2="12" y2="0" stroke={SECTION_BORDER} strokeWidth="1.2" strokeDasharray="4,3" />
          <polygon points="8,2 12,-5 16,2" fill={ZONE_LABEL} transform="rotate(180 12 0)" />
        </svg>
        <div style={{
          fontFamily: MONO, fontSize: 9, color: ZONE_LABEL,
          textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 2,
        }}>
          connected to
        </div>
      </div>

      {/* ── YOUR SYSTEMS ── */}
      <div>
        <div style={{
          fontFamily: MONO, fontSize: 10, color: SYSTEMS_ACCENT,
          textTransform: "uppercase", letterSpacing: "0.12em",
          textAlign: "center", marginBottom: 12, fontWeight: 600,
        }}>
          Your systems
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {SYSTEMS.map((sys, idx) => (
            <div key={`ms-${idx}`} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 14px", borderRadius: 6,
              background: "#fff", border: "1px solid #cbd5e1",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: 2,
                background: SYSTEMS_ACCENT, opacity: 0.25, flexShrink: 0,
              }} />
              <span style={{ fontFamily: DISPLAY, fontSize: 13, fontWeight: 500, color: SECONDARY_TEXT }}>
                {sys}
              </span>
            </div>
          ))}
        </div>
        <div style={{
          fontFamily: MONO, fontSize: 9, color: SYSTEMS_ACCENT,
          textAlign: "center", marginTop: 10, fontStyle: "italic",
        }}>
          8,000+ integrations via xOps
        </div>
      </div>

      {/* ── Feedback loop ── */}
      <div style={{
        textAlign: "center", paddingTop: 14,
        borderTop: `1px dashed ${SECTION_BORDER}`,
      }}>
        <span style={{
          fontFamily: MONO, fontSize: 10, fontWeight: 600,
          color: OUTCOME_ACCENT, opacity: 0.8,
        }}>
          Every result compounds the model
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function IntelligenceRails(): ReactElement {
  const isMobile = useIsMobile();
  return isMobile ? <MobileLayout /> : <DesktopSVG />;
}
