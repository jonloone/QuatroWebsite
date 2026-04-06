/**
 * OperationalModelFlow — v10
 *
 * Fully light section on dark page.
 * Sharp geometric shapes per system category. No glow. No hint labels.
 * All text WCAG AA against #f5f5f4 (4.5:1 normal, 3:1 large/UI).
 *
 * WCAG reference (computed against #f5f5f4):
 *   #292524 → 12.5:1  (body text, labels)
 *   #44403c → 8.2:1   (secondary text)
 *   #57534e → 6.0:1   (zone labels, small UI text)
 *   #78716c → 4.0:1   (large text / UI elements only — 3:1 threshold)
 *   #2563eb → 4.6:1   (Network accent)
 *   #7c3aed → 5.5:1   (Assets accent)
 *   #0f766e → 5.0:1   (Operations accent)
 *   #b45309 → 4.6:1   (Customer accent)
 *   #b91c1c → 5.9:1   (Field accent)
 *   #0e7490 → 4.9:1   (Spatial accent)
 *   #c2410c → 4.9:1   (Finance accent)
 */
import { useState, useCallback, useEffect } from "react";

/* ── Types ── */
type OutputType = "Agent" | "Workflow" | "Automation" | "API";

interface SystemCategory {
  label: string;
  source: string;
  cx: number;
  cy: number;
}

interface ModelEdge {
  from: number;
  to: number;
  verb: string;
  cross?: boolean;
}

interface OutputBranch {
  type: OutputType;
  label: string;
  primary?: boolean;
}

interface Scenario {
  question: string;
  shortLabel: string;
  systems: SystemCategory[];
  edges: ModelEdge[];
  outputs: OutputBranch[];
}

interface GhostNode { cx: number; cy: number; }
interface GhostEdge { from: number; to: number; }

/* ── Light section palette ── */
const SECTION_BG = "#f5f5f4";
const SECTION_BORDER = "#e7e5e4";

/* System colors — all ≥ 4.5:1 against #f5f5f4 */
const SYS_COLORS: Record<string, string> = {
  Network: "#2563eb", Assets: "#7c3aed", Operations: "#0f766e",
  Customer: "#b45309", Field: "#b91c1c", Spatial: "#0e7490",
  Finance: "#c2410c",
};
const SYS_BG: Record<string, string> = {
  Network: "#eff6ff", Assets: "#f5f3ff", Operations: "#f0fdfa",
  Customer: "#fffbeb", Field: "#fef2f2", Spatial: "#ecfeff",
  Finance: "#fff7ed",
};
const SYS_BORDER: Record<string, string> = {
  Network: "#bfdbfe", Assets: "#ddd6fe", Operations: "#99f6e4",
  Customer: "#fde68a", Field: "#fecaca", Spatial: "#a5f3fc",
  Finance: "#fed7aa",
};

const OUTPUT_COLORS: Record<OutputType, { accent: string; bg: string; border: string }> = {
  Agent:      { accent: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  Workflow:   { accent: "#0f766e", bg: "#f0fdfa", border: "#99f6e4" },
  Automation: { accent: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  API:        { accent: "#c2410c", bg: "#fff7ed", border: "#fed7aa" },
};

/* ── Ghost layer ── */
const GHOST_NODES: GhostNode[] = [
  { cx: 3, cy: 70 }, { cx: 18, cy: 8 }, { cx: 50, cy: 85 },
  { cx: 72, cy: 5 }, { cx: 95, cy: 35 }, { cx: 45, cy: 10 },
  { cx: 85, cy: 88 }, { cx: 15, cy: 50 }, { cx: 68, cy: 78 },
  { cx: 28, cy: 90 }, { cx: 92, cy: 12 }, { cx: 5, cy: 18 },
];
const GHOST_EDGES: GhostEdge[] = [
  { from: 0, to: 7 }, { from: 1, to: 5 }, { from: 2, to: 8 },
  { from: 3, to: 10 }, { from: 4, to: 10 }, { from: 5, to: 3 },
  { from: 6, to: 8 }, { from: 7, to: 1 }, { from: 9, to: 0 },
  { from: 11, to: 1 }, { from: 9, to: 2 }, { from: 6, to: 4 },
  { from: 11, to: 7 }, { from: 3, to: 4 },
];

/* ── Sharp shapes per system type ── */
const SHAPE_PATHS: Record<string, (cx: number, cy: number, r: number) => string> = {
  Network: (cx, cy, r) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M${pts.join("L")}Z`;
  },
  Assets: (cx, cy, r) => `M${cx},${cy - r} L${cx + r},${cy} L${cx},${cy + r} L${cx - r},${cy}Z`,
  Operations: (cx, cy, r) => {
    const s = r * 0.92, c = r * 0.38;
    return `M${cx - c},${cy - s} L${cx + c},${cy - s} L${cx + s},${cy - c} L${cx + s},${cy + c} L${cx + c},${cy + s} L${cx - c},${cy + s} L${cx - s},${cy + c} L${cx - s},${cy - c}Z`;
  },
  Customer: (cx, cy, r) => `M${cx},${cy - r} L${cx + r * 0.87},${cy + r * 0.5} L${cx - r * 0.87},${cy + r * 0.5}Z`,
  Field: (cx, cy, r) => {
    const pts = Array.from({ length: 5 }, (_, i) => {
      const a = (Math.PI * 2 / 5) * i - Math.PI / 2;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M${pts.join("L")}Z`;
  },
  Spatial: (cx, cy, r) => `M${cx - r},${cy} A${r},${r} 0 1,1 ${cx + r},${cy} A${r},${r} 0 1,1 ${cx - r},${cy}Z`,
  Finance: (cx, cy, r) => {
    const h = r * 0.82;
    return `M${cx - h},${cy - h} L${cx + h},${cy - h} L${cx + h},${cy + h} L${cx - h},${cy + h}Z`;
  },
};
const getShapePath = (source: string, cx: number, cy: number, r: number) =>
  (SHAPE_PATHS[source] || SHAPE_PATHS.Spatial)(cx, cy, r);

/* ── Icons 22×22 ── */
const ICON_SIZE = 22;
const OUTPUT_ICONS: Record<OutputType, React.ReactElement> = {
  Agent: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="7.5" r="3.8" />
      <path d="M8.8,5.8 Q11,3.2 13.2,5.8" strokeWidth="1.1" />
      <path d="M5,19 C5,15 7.5,13 11,13 C14.5,13 17,15 17,19" />
      <path d="M4,2 L2.5,6 L5.5,5.3 L4,9.5" strokeWidth="1.4" />
    </svg>
  ),
  Workflow: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="3.5" cy="11" r="2.4" /><circle cx="11" cy="11" r="2.4" /><circle cx="18.5" cy="11" r="2.4" />
      <line x1="5.9" y1="11" x2="8.6" y2="11" /><line x1="13.4" y1="11" x2="16.1" y2="11" />
      <polyline points="14.8,8.5 16.1,11 14.8,13.5" strokeWidth="1.2" />
    </svg>
  ),
  Automation: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><circle cx="11" cy="11" r="2.5" />
      <line x1="11" y1="2.5" x2="11" y2="4.5" /><line x1="11" y1="17.5" x2="11" y2="19.5" />
      <line x1="2.5" y1="11" x2="4.5" y2="11" /><line x1="17.5" y1="11" x2="19.5" y2="11" />
      <line x1="5" y1="5" x2="6.5" y2="6.5" /><line x1="15.5" y1="15.5" x2="17" y2="17" />
      <line x1="15.5" y1="6.5" x2="17" y2="5" /><line x1="5" y1="17" x2="6.5" y2="15.5" />
    </svg>
  ),
  API: (
    <svg viewBox="0 0 22 22" width={ICON_SIZE} height={ICON_SIZE} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="16" rx="1.5" />
      <line x1="12" y1="7" x2="20" y2="7" /><line x1="12" y1="11" x2="18" y2="11" /><line x1="12" y1="15" x2="20" y2="15" />
      <circle cx="17.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

/* ═══════════════════════════════════════════
   SCENARIOS
   ═══════════════════════════════════════════ */
const SCENARIOS: Scenario[] = [
  {
    question: "Which assets are 90 days from failure — and what's the revenue at risk?",
    shortLabel: "Asset Intelligence",
    systems: [
      { label: "Assets",     source: "Assets",     cx: 10, cy: 28 },
      { label: "Operations", source: "Operations", cx: 35, cy: 70 },
      { label: "Finance",    source: "Finance",    cx: 60, cy: 25 },
      { label: "Customer",   source: "Customer",   cx: 85, cy: 68 },
    ],
    edges: [
      { from: 0, to: 1, verb: "degrades" },
      { from: 1, to: 2, verb: "costs" },
      { from: 2, to: 3, verb: "impacts" },
      { from: 0, to: 2, verb: "carries revenue", cross: true },
    ],
    outputs: [
      { type: "Agent",      label: "12 assets flagged at risk", primary: true },
      { type: "Workflow",    label: "Maintenance scheduled" },
      { type: "Automation",  label: "Parts pre-ordered" },
      { type: "API",         label: "ERP cost forecast updated" },
    ],
  },
  {
    question: "Which facilities will miss compliance before the next audit?",
    shortLabel: "Compliance & Risk",
    systems: [
      { label: "Operations", source: "Operations", cx: 10, cy: 68 },
      { label: "Field",      source: "Field",      cx: 35, cy: 25 },
      { label: "Network",    source: "Network",    cx: 60, cy: 68 },
      { label: "Finance",    source: "Finance",    cx: 85, cy: 25 },
    ],
    edges: [
      { from: 0, to: 1, verb: "monitors" },
      { from: 1, to: 2, verb: "reports to" },
      { from: 2, to: 3, verb: "exposes" },
      { from: 0, to: 3, verb: "accrues penalty", cross: true },
    ],
    outputs: [
      { type: "Workflow",    label: "3 facilities escalated",  primary: true },
      { type: "Agent",       label: "Compliance gap scored" },
      { type: "Automation",  label: "Audit packet generated" },
      { type: "API",         label: "Regulatory feed updated" },
    ],
  },
  {
    question: "Where will today's anomaly become tomorrow's outage?",
    shortLabel: "Cascade Prediction",
    systems: [
      { label: "Network",    source: "Network",    cx: 10, cy: 28 },
      { label: "Spatial",    source: "Spatial",     cx: 35, cy: 70 },
      { label: "Assets",     source: "Assets",     cx: 60, cy: 25 },
      { label: "Operations", source: "Operations", cx: 85, cy: 68 },
    ],
    edges: [
      { from: 0, to: 1, verb: "propagates" },
      { from: 1, to: 2, verb: "stresses" },
      { from: 2, to: 3, verb: "disrupts" },
      { from: 0, to: 3, verb: "cascades into", cross: true },
    ],
    outputs: [
      { type: "Automation",  label: "Cascade path blocked",   primary: true },
      { type: "Agent",       label: "Dependency graph scored" },
      { type: "Workflow",    label: "Crew pre-positioned" },
      { type: "API",         label: "Status dashboard live" },
    ],
  },
];

const FADE_MS = 350;
const MONO = "var(--font-mono, 'JetBrains Mono Variable', monospace)";
const DISPLAY = "var(--font-display, 'Roobert', system-ui, sans-serif)";
const SANS = "var(--font-sans, 'Reckless', ui-serif, Georgia, serif)";

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
const W = 1060, H = 300;
const MODEL_X0 = 60, MODEL_X1 = 560;
const MODEL_W = MODEL_X1 - MODEL_X0;
const MODEL_Y0 = 44, MODEL_H = 200;
const BRANCH_X0 = 650, BRANCH_X1 = 1040;

const mapX = (pct: number) => MODEL_X0 + (pct / 100) * MODEL_W;
const mapY = (pct: number) => MODEL_Y0 + (pct / 100) * MODEL_H;

const pillW = (verb: string) => Math.max(verb.length * 6.5 + 16, 48);
const PILL_H = 20, PILL_R = 10;
const NODE_R = 22;

function DesktopSVG({ sc, visible }: { sc: Scenario; visible: boolean }) {
  const edgeColor = (e: ModelEdge) => SYS_COLORS[sc.systems[e.from].source] || "#0d9488";

  const branchPad = 38;
  const branchSpacing = (H - branchPad * 2) / (sc.outputs.length - 1);
  const branchYs = sc.outputs.map((_, i) => branchPad + i * branchSpacing);

  return (
    <svg viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}
      role="img" aria-label="Operational intelligence flow">

      {/* Ghost layer */}
      <g>
        {GHOST_EDGES.map((e, i) => {
          const n1 = GHOST_NODES[e.from], n2 = GHOST_NODES[e.to];
          return <line key={`ge-${i}`} x1={mapX(n1.cx)} y1={mapY(n1.cy)} x2={mapX(n2.cx)} y2={mapY(n2.cy)}
            stroke="#e7e5e4" strokeWidth="0.5" />;
        })}
        {GHOST_NODES.map((n, i) => (
          <rect key={`gn-${i}`} x={mapX(n.cx) - 2} y={mapY(n.cy) - 2} width="4" height="4"
            fill="#e7e5e4" rx="0.5" transform={`rotate(45,${mapX(n.cx)},${mapY(n.cy)})`} />
        ))}
      </g>

      {/* Spine */}
      <line x1={MODEL_X0} y1={H / 2} x2={BRANCH_X0 - 24} y2={H / 2}
        stroke="#d6d3d1" strokeWidth="1" strokeDasharray="6,4" />

      {/* Zone labels — #57534e = 6.0:1 on #f5f5f4 */}
      <text x={(MODEL_X0 + MODEL_X1) / 2} y={18} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, textTransform: "uppercase" as any, letterSpacing: "0.12em", fill: "#57534e" }}>
        Connect
      </text>
      <text x={(MODEL_X1 + BRANCH_X0) / 2} y={18} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, textTransform: "uppercase" as any, letterSpacing: "0.12em", fill: "#57534e" }}>
        Model
      </text>
      <text x={(BRANCH_X0 + BRANCH_X1) / 2} y={18} textAnchor="middle"
        style={{ fontFamily: MONO, fontSize: 10, textTransform: "uppercase" as any, letterSpacing: "0.12em", fill: "#57534e" }}>
        Deliver
      </text>

      {/* Scenario content */}
      <g opacity={visible ? 1 : 0} style={{ transition: `opacity ${FADE_MS}ms ease` }}>

        {/* Cross-edges */}
        {sc.edges.filter(e => e.cross).map((e, i) => {
          const n1 = sc.systems[e.from], n2 = sc.systems[e.to];
          const x1 = mapX(n1.cx), y1 = mapY(n1.cy), x2 = mapX(n2.cx), y2 = mapY(n2.cy);
          const cpY = (y1 + y2) / 2 + (y1 < y2 ? -38 : 38);
          const mx = (x1 + x2) / 2, pw = pillW(e.verb);
          return (
            <g key={`cx-${i}`}>
              <path d={`M${x1},${y1} Q${mx},${cpY} ${x2},${y2}`}
                fill="none" stroke="#d6d3d1" strokeWidth="0.8" strokeDasharray="3,4" />
              <rect x={mx - pw / 2} y={cpY + (y1 < y2 ? -20 : 4)} width={pw} height={PILL_H} rx={PILL_R}
                fill="white" stroke="#e7e5e4" strokeWidth="0.8" />
              <text x={mx} y={cpY + (y1 < y2 ? -8 : 16)} textAnchor="middle" dominantBaseline="middle"
                style={{ fontFamily: MONO, fontSize: 9, fill: "#57534e" }}>{e.verb}</text>
            </g>
          );
        })}

        {/* Primary edges */}
        {sc.edges.filter(e => !e.cross).map((e, i) => {
          const n1 = sc.systems[e.from], n2 = sc.systems[e.to];
          const x1 = mapX(n1.cx), y1 = mapY(n1.cy), x2 = mapX(n2.cx), y2 = mapY(n2.cy);
          const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, pw = pillW(e.verb);
          const c = edgeColor(e);
          return (
            <g key={`pe-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.2" strokeOpacity="0.25" />
              <rect x={mx - pw / 2} y={my - PILL_H / 2 - 8} width={pw} height={PILL_H} rx={PILL_R}
                fill={SYS_BG[sc.systems[e.from].source] || "#f0fdfa"}
                stroke={SYS_BORDER[sc.systems[e.from].source] || "#99f6e4"} strokeWidth="0.8" />
              <text x={mx} y={my - 8} textAnchor="middle" dominantBaseline="middle"
                style={{ fontFamily: MONO, fontSize: 9, fill: c, fontWeight: 500 }}>{e.verb}</text>
            </g>
          );
        })}

        {/* System category nodes */}
        {sc.systems.map((s, i) => {
          const px = mapX(s.cx), py = mapY(s.cy);
          const c = SYS_COLORS[s.source] || "#0d9488";
          const bg = SYS_BG[s.source] || "#f0fdfa";
          const bd = SYS_BORDER[s.source] || "#99f6e4";
          return (
            <g key={`s-${i}`}>
              <path d={getShapePath(s.source, px, py, NODE_R)} fill={bg} stroke={bd} strokeWidth="1.5" />
              <path d={getShapePath(s.source, px, py, 5)} fill={c} stroke="none" />
              {/* Label — #292524 = 12.5:1 */}
              <text x={px} y={py + 34} textAnchor="middle"
                style={{ fontFamily: DISPLAY, fontSize: 13, fontWeight: 600, fill: "#292524" }}>
                {s.label}
              </text>
            </g>
          );
        })}

        {/* Fork + branches */}
        {(() => {
          const forkX = MODEL_X1 + 16;
          const badgeX = BRANCH_X0 + 14;
          const labelX = badgeX + 102;
          return (
            <g>
              <line x1={MODEL_X1 + 4} y1={H / 2} x2={forkX} y2={H / 2}
                stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,3" />
              <rect x={forkX - 3} y={H / 2 - 3} width="6" height="6" rx="1"
                fill="#e7e5e4" stroke="#d6d3d1" strokeWidth="0.7"
                transform={`rotate(45,${forkX},${H / 2})`} />

              {sc.outputs.map((out, idx) => {
                const by = branchYs[idx];
                const isPrimary = !!out.primary;
                const tc = OUTPUT_COLORS[out.type];
                return (
                  <g key={`out-${idx}`}>
                    <path d={`M${forkX},${H / 2} C${forkX + 40},${H / 2} ${badgeX - 55},${by} ${badgeX - 16},${by}`}
                      fill="none" stroke={tc.accent} strokeWidth={isPrimary ? "1.4" : "0.9"}
                      strokeOpacity={isPrimary ? 0.5 : 0.2} />
                    <polygon points={`${badgeX - 16},${by - 3} ${badgeX - 9},${by} ${badgeX - 16},${by + 3}`}
                      fill={tc.accent} fillOpacity={isPrimary ? 0.6 : 0.3} />
                    <rect x={badgeX - 4} y={by - 16} width="96" height="32" rx="6"
                      fill={tc.bg} stroke={tc.border} strokeWidth={isPrimary ? "1.2" : "0.8"} />
                    <foreignObject x={badgeX + 2} y={by - 11} width="22" height="22">
                      <div style={{ color: tc.accent, display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22 }}>
                        {OUTPUT_ICONS[out.type]}
                      </div>
                    </foreignObject>
                    <text x={badgeX + 58} y={by + 1} textAnchor="middle" dominantBaseline="middle"
                      style={{ fontFamily: MONO, fontSize: 9.5, fill: tc.accent, letterSpacing: "0.05em", textTransform: "uppercase" as any, fontWeight: 600 }}>
                      {out.type}
                    </text>
                    {/* Output labels — primary uses accent (≥4.5:1), secondary #44403c (8.2:1) */}
                    <text x={labelX} y={by + 1} textAnchor="start" dominantBaseline="middle"
                      style={{
                        fontFamily: MONO, fontSize: isPrimary ? 12 : 11,
                        fill: isPrimary ? tc.accent : "#44403c",
                        fontWeight: isPrimary ? 600 : 400,
                      }}>
                      {out.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })()}
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MOBILE — Vertical card stack (light)
   ═══════════════════════════════════════════ */
function MobileLayout({ sc }: { sc: Scenario }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 4px" }}>

      {/* Systems */}
      <div>
        <div style={{ fontFamily: MONO, fontSize: 10, color: "#57534e", textTransform: "uppercase" as const, letterSpacing: "0.12em", textAlign: "center", marginBottom: 12 }}>
          Connect
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 340, margin: "0 auto" }}>
          {sc.systems.map((s, i) => {
            const c = SYS_COLORS[s.source] || "#0d9488";
            const bg = SYS_BG[s.source] || "#f0fdfa";
            const bd = SYS_BORDER[s.source] || "#99f6e4";
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 8, background: bg, border: `1.5px solid ${bd}` }}>
                <div style={{ width: 12, height: 12, background: c, flexShrink: 0,
                  borderRadius: s.source === "Spatial" ? "50%" : s.source === "Assets" ? 0 : 2,
                  transform: s.source === "Assets" ? "rotate(45deg)" : undefined,
                }} />
                <span style={{ fontFamily: DISPLAY, fontSize: 14, fontWeight: 600, color: "#292524" }}>{s.label}</span>
              </div>
            );
          })}
        </div>
        {/* Edge verbs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, marginTop: 14 }}>
          {sc.edges.map((e, i) => {
            const c = SYS_COLORS[sc.systems[e.from].source] || "#0d9488";
            const bg = SYS_BG[sc.systems[e.from].source] || "#f0fdfa";
            const bd = SYS_BORDER[sc.systems[e.from].source] || "#99f6e4";
            return (
              <span key={i} style={{ fontFamily: MONO, fontSize: 11, color: c, padding: "4px 12px", borderRadius: 20, background: bg, border: `1px solid ${bd}`, opacity: e.cross ? 0.6 : 1, fontWeight: 500 }}>
                {e.verb}
              </span>
            );
          })}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ textAlign: "center" }}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" style={{ display: "inline-block" }}>
          <line x1="12" y1="0" x2="12" y2="22" stroke="#d6d3d1" strokeWidth="1.2" strokeDasharray="4,3" />
          <polygon points="8,20 12,27 16,20" fill="#a8a29e" />
        </svg>
        <div style={{ fontFamily: MONO, fontSize: 10, color: "#57534e", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginTop: 4 }}>Model</div>
      </div>

      {/* Outputs */}
      <div>
        <div style={{ fontFamily: MONO, fontSize: 10, color: "#57534e", textTransform: "uppercase" as const, letterSpacing: "0.12em", textAlign: "center", marginBottom: 12 }}>
          Deliver
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sc.outputs.map((out, idx) => {
            const tc = OUTPUT_COLORS[out.type];
            const isPrimary = !!out.primary;
            return (
              <div key={idx} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: isPrimary ? "14px 16px" : "12px 16px", borderRadius: 8,
                background: tc.bg, border: `1px solid ${tc.border}`, borderWidth: isPrimary ? 1.5 : 1,
              }}>
                <div style={{ color: tc.accent, flexShrink: 0, display: "flex", alignItems: "center" }}>
                  <svg viewBox="0 0 22 22" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: tc.accent }}>
                    {(OUTPUT_ICONS[out.type] as React.ReactElement<{ children?: React.ReactNode }>).props.children}
                  </svg>
                </div>
                <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, color: tc.accent, textTransform: "uppercase" as const, letterSpacing: "0.05em", flexShrink: 0, minWidth: 80 }}>
                  {out.type}
                </span>
                <span style={{ fontFamily: MONO, fontSize: isPrimary ? 14 : 13, fontWeight: isPrimary ? 600 : 400, color: isPrimary ? tc.accent : "#44403c" }}>
                  {out.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   rb2b visitor-aware scenario mapping
   ═══════════════════════════════════════════ */
declare global {
  interface Window {
    reb2b?: { loaded: boolean; identify?: (cb: (data: Record<string, unknown>) => void) => void };
  }
}

const INDUSTRY_SCENARIO_MAP: Record<string, number> = {
  satellite: 0, satcom: 0, telecom: 0, manufacturing: 0, energy: 0, oil: 0, gas: 0,
  mining: 0, aerospace: 0, defense: 0,
  water: 1, environment: 1, financial: 1, banking: 1, insurance: 1, broadcast: 1,
  media: 1, regulated: 1, pharmaceutical: 1, healthcare: 1,
  transport: 2, logistics: 2, city: 2, municipal: 2, infrastructure: 2, rail: 2, port: 2,
};

function matchScenario(industry?: string, title?: string): number | null {
  const text = `${industry || ""} ${title || ""}`.toLowerCase();
  for (const [keyword, idx] of Object.entries(INDUSTRY_SCENARIO_MAP)) {
    if (text.includes(keyword)) return idx;
  }
  return null;
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
interface FlowProps {
  defaultScenario?: number;
}

export default function OperationalModelFlow({ defaultScenario }: FlowProps = {}) {
  const [active, setActive] = useState(defaultScenario ?? 0);
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (defaultScenario != null) return;
    const tryIdentify = () => {
      if (window.reb2b?.identify) {
        window.reb2b.identify((data: Record<string, unknown>) => {
          const idx = matchScenario(
            data.company_industry as string | undefined,
            data.title as string | undefined,
          );
          if (idx != null) {
            setVisible(false);
            setTimeout(() => { setActive(idx); setVisible(true); }, FADE_MS);
          }
        });
      }
    };
    const t = setTimeout(tryIdentify, 2000);
    return () => clearTimeout(t);
  }, [defaultScenario]);

  const goTo = useCallback((i: number) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => { setActive(i); setVisible(true); }, FADE_MS);
  }, [active]);

  const sc = SCENARIOS[active];

  return (
    <div style={{
      width: "100%",
      position: "relative",
    }}>

      {/* ── Scenario tabs ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {SCENARIOS.map((s, i) => {
          const isActive = i === active;
          return (
            <button key={i} onClick={() => goTo(i)}
              style={{
                fontFamily: MONO, fontSize: isMobile ? 12 : 11, letterSpacing: "0.04em",
                padding: isMobile ? "8px 18px" : "7px 16px", borderRadius: 20,
                border: isActive ? "1.5px solid #0f766e" : "1px solid #d6d3d1",
                background: isActive ? "#f0fdfa" : "white",
                color: isActive ? "#0f766e" : "#57534e",
                cursor: "pointer", transition: "all 0.25s ease",
                fontWeight: isActive ? 600 : 400,
              }}
              aria-label={`Scenario: ${s.question}`}
            >
              {s.shortLabel}
            </button>
          );
        })}
      </div>

      {/* ── Editorial question headline ── */}
      <div style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${FADE_MS}ms ease`,
        textAlign: "center",
        padding: isMobile ? "8px 8px 16px" : "4px 0 24px",
      }}>
        {/* #292524 = 12.5:1 on #f5f5f4 */}
        <p style={{
          fontFamily: SANS,
          fontSize: isMobile ? 24 : 30,
          fontWeight: 300,
          color: "#292524",
          lineHeight: 1.3,
          margin: 0,
          maxWidth: 640,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          {sc.question}
        </p>
      </div>

      {/* ── Layout ── */}
      <div style={{ opacity: visible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}>
        {isMobile
          ? <MobileLayout sc={sc} />
          : <DesktopSVG sc={sc} visible={true} />
        }
      </div>
    </div>
  );
}
