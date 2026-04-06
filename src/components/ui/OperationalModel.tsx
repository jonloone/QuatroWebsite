/**
 * OperationalModel — Stacked isometric planes
 * Three translucent planes stacked vertically:
 *   Bottom: Linked Data (white/dim)
 *   Middle: Reasoning (forest mid)
 *   Top: Action (forest bright)
 * Dots on each plane, lines between them. No text.
 */
import { useState, useMemo } from "react";

const COS30 = Math.cos(Math.PI / 6);
const SIN30 = 0.5;

const iso = (gx: number, gy: number, gz: number, s: number, cx: number, cy: number) => ({
  x: cx + (gx - gy) * COS30 * s,
  y: cy + (gx + gy) * SIN30 * s - gz * s,
});

interface Dot {
  id: string;
  gx: number;
  gy: number;
  plane: number; // 0=data, 1=reasoning, 2=action
}

interface Link {
  from: string;
  to: string;
}

const DOTS: Dot[] = [
  // Plane 0 — Linked Data (6 dots spread across the plane)
  { id: "d0", gx: -1.2, gy: -0.8, plane: 0 },
  { id: "d1", gx: 0.8, gy: -1.4, plane: 0 },
  { id: "d2", gx: 2.2, gy: -0.6, plane: 0 },
  { id: "d3", gx: -0.6, gy: 0.8, plane: 0 },
  { id: "d4", gx: 1.0, gy: 0.4, plane: 0 },
  { id: "d5", gx: 2.0, gy: 1.2, plane: 0 },
  { id: "d6", gx: -1.6, gy: 1.6, plane: 0 },
  { id: "d7", gx: 0.2, gy: 1.8, plane: 0 },

  // Plane 1 — Reasoning (4 dots)
  { id: "r0", gx: -0.4, gy: -0.2, plane: 1 },
  { id: "r1", gx: 1.4, gy: -0.6, plane: 1 },
  { id: "r2", gx: 0.4, gy: 1.0, plane: 1 },
  { id: "r3", gx: 1.8, gy: 0.6, plane: 1 },

  // Plane 2 — Action (3 dots)
  { id: "a0", gx: 0.2, gy: -0.2, plane: 2 },
  { id: "a1", gx: 1.4, gy: 0.2, plane: 2 },
  { id: "a2", gx: 0.6, gy: 0.8, plane: 2 },
];

// Intra-plane connections (within a plane)
const INTRA_LINKS: Link[] = [
  // Data plane mesh
  { from: "d0", to: "d1" }, { from: "d1", to: "d2" },
  { from: "d0", to: "d3" }, { from: "d3", to: "d4" },
  { from: "d4", to: "d2" }, { from: "d4", to: "d5" },
  { from: "d1", to: "d4" }, { from: "d3", to: "d7" },
  { from: "d6", to: "d3" }, { from: "d6", to: "d7" },
  { from: "d7", to: "d5" },
  // Reasoning plane mesh
  { from: "r0", to: "r1" }, { from: "r0", to: "r2" },
  { from: "r1", to: "r3" }, { from: "r2", to: "r3" },
  // Action plane mesh
  { from: "a0", to: "a1" }, { from: "a1", to: "a2" },
  { from: "a0", to: "a2" },
];

// Cross-plane connections (between planes)
const CROSS_LINKS: Link[] = [
  // Data → Reasoning
  { from: "d1", to: "r0" }, { from: "d2", to: "r1" },
  { from: "d4", to: "r2" }, { from: "d5", to: "r3" },
  { from: "d3", to: "r0" }, { from: "d7", to: "r2" },
  // Reasoning → Action
  { from: "r0", to: "a0" }, { from: "r1", to: "a1" },
  { from: "r2", to: "a2" }, { from: "r3", to: "a1" },
];

const PLANE_Z = [0, 2.8, 5.6];

const PLANE_STYLE = [
  { fill: "rgba(255,255,255,0.025)", stroke: "rgba(255,255,255,0.08)", dot: "rgba(255,255,255,0.35)", dotR: 3.5, line: "rgba(255,255,255,0.06)" },
  { fill: "rgba(15,76,58,0.06)", stroke: "rgba(45,153,112,0.15)", dot: "rgba(45,153,112,0.5)", dotR: 3.5, line: "rgba(45,153,112,0.1)" },
  { fill: "rgba(15,76,58,0.12)", stroke: "rgba(45,153,112,0.3)", dot: "rgba(45,153,112,0.75)", dotR: 4, line: "rgba(45,153,112,0.2)" },
];

const CROSS_STYLE = { line: "rgba(45,153,112,0.08)" };

export default function OperationalModel() {
  const [hovered, setHovered] = useState<number | null>(null);

  const s = 72;
  const cx = 280;
  const cy = 340;
  const planeR = 2.6; // plane extends from -planeR to +planeR

  const projected = useMemo(() => {
    const map: Record<string, { x: number; y: number; plane: number }> = {};
    DOTS.forEach((d) => {
      const p = iso(d.gx, d.gy, PLANE_Z[d.plane], s, cx, cy);
      map[d.id] = { ...p, plane: d.plane };
    });
    return map;
  }, []);

  const planeCorners = (z: number) => {
    const r = planeR;
    return [
      iso(-r, -r, z, s, cx, cy),  // top
      iso(r, -r, z, s, cx, cy),   // right
      iso(r, r, z, s, cx, cy),    // bottom
      iso(-r, r, z, s, cx, cy),   // left
    ];
  };

  const planeOp = (plane: number) => {
    if (hovered === null) return 1;
    return hovered === plane ? 1 : 0.15;
  };

  const crossOp = () => (hovered === null ? 1 : 0.3);

  return (
    <div style={{ width: "100%" }}>
      <svg
        viewBox="0 0 560 440"
        style={{ display: "block", width: "100%", height: "auto", maxWidth: 600, margin: "0 auto" }}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Render planes bottom to top */}
        {[0, 1, 2].map((plane) => {
          const corners = planeCorners(PLANE_Z[plane]);
          const ps = PLANE_STYLE[plane];
          const op = planeOp(plane);

          return (
            <g key={plane} opacity={op} style={{ transition: "opacity 0.35s" }}
              onMouseEnter={() => setHovered(plane)}
              onTouchStart={() => setHovered((p) => p === plane ? null : plane)}>

              {/* Plane surface */}
              <polygon
                points={corners.map((c) => `${c.x},${c.y}`).join(" ")}
                fill={ps.fill} stroke={ps.stroke} strokeWidth="0.7"
                style={{ cursor: "pointer" }}
              />

              {/* Intra-plane lines */}
              {INTRA_LINKS
                .filter((l) => projected[l.from]?.plane === plane)
                .map((l, i) => {
                  const f = projected[l.from];
                  const t = projected[l.to];
                  return (
                    <line key={i} x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                      stroke={ps.line} strokeWidth="0.7" />
                  );
                })}

              {/* Dots */}
              {DOTS.filter((d) => d.plane === plane).map((d) => {
                const p = projected[d.id];
                return (
                  <circle key={d.id} cx={p.x} cy={p.y} r={ps.dotR}
                    fill={ps.dot} />
                );
              })}
            </g>
          );
        })}

        {/* Cross-plane connections */}
        <g opacity={crossOp()} style={{ transition: "opacity 0.35s" }}>
          {CROSS_LINKS.map((l, i) => {
            const f = projected[l.from];
            const t = projected[l.to];
            return (
              <line key={i} x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                stroke={CROSS_STYLE.line} strokeWidth="0.5" strokeDasharray="3,4" />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
