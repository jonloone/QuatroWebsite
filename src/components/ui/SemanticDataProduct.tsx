/**
 * SemanticDataProduct — Semantic Data Product Anatomy Diagram
 *
 * Fully light section on dark page.
 * Sharp geometric shapes, no glow, no blur.
 * All text WCAG AA against #f5f5f4 (4.5:1 normal, 3:1 large/UI).
 *
 * WCAG reference (computed against #f5f5f4):
 *   #292524 → 12.5:1  (body text, labels)
 *   #44403c → 8.2:1   (secondary text)
 *   #57534e → 6.0:1   (zone labels, small UI text)
 *   #0f766e → 5.0:1   (teal accent — Business Purpose)
 *   #b45309 → 4.6:1   (amber/gold accent — Semantic Data Product)
 */
import { useState, useEffect } from "react";

/* ── Font variables ── */
const MONO = "var(--font-mono, 'JetBrains Mono Variable', monospace)";
const DISPLAY = "var(--font-display, 'Roobert', system-ui, sans-serif)";
const SANS = "var(--font-sans, 'Reckless', ui-serif, Georgia, serif)";

/* ── Color palette ── */
const SECTION_BG = "#f5f5f4";
const SECTION_BORDER = "#e7e5e4";
const BODY_TEXT = "#292524";
const SECONDARY_TEXT = "#44403c";
const ZONE_LABEL = "#57534e";

const TEAL = "#0f766e";     // Business Purpose accent
const TEAL_BG = "#f0fdfa";
const TEAL_BORDER = "#99f6e4";

const SLATE = "#57534e";    // Available Data accent
const SLATE_BG = "#fafaf9";
const SLATE_BORDER = "#e7e5e4";

const AMBER = "#b45309";    // Semantic Data Product accent
const AMBER_BG = "#fffbeb";
const AMBER_BORDER = "#fde68a";

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
   REQUIREMENTS & PROPERTIES DATA
   ═══════════════════════════════════════════ */
const REQUIREMENTS = [
  "Popular Metrics",
  "Measures & Dimensions",
  "Relationships & Formulas",
  "Semantics",
  "Quality SLOs",
  "Policy SLOs",
];

const PROPERTIES = [
  "Purpose-driven",
  "Discoverable",
  "Addressable",
  "Understandable",
  "Valuable on its own",
];

const SOURCES = ["SCADA", "ERP", "IoT", "GIS"];

/* ═══════════════════════════════════════════
   CHECK ICON
   ═══════════════════════════════════════════ */
function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,8 6,12 14,3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   DESKTOP SVG LAYOUT
   ═══════════════════════════════════════════ */
function DesktopSVG(): React.ReactElement {
  const W = 900, H = 420;

  // Top row: Business Purpose (left) + Available Data (right)
  const topY = 40;
  const boxW = 160, boxH = 80;
  const leftBoxX = 60, rightBoxX = W - leftBoxX - boxW;

  // Center: Semantic Data Product
  const centerX = W / 2, centerY = H / 2;
  const centerSize = 80;

  // Left column: Requirements
  const reqX = 40;
  const reqY = 200;
  const reqItemH = 24;

  // Right column: Properties
  const propX = W - 250;
  const propY = 180;

  // Bottom row: Source data
  const sourceY = H - 50;
  const sourceItemW = 70, sourceItemH = 36;
  const sourceStartX = (W - SOURCES.length * sourceItemW - (SOURCES.length - 1) * 12) / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}
      role="img"
      aria-label="Semantic Data Product Anatomy"
    >
      {/* ── Top Row: Sources ── */}

      {/* Business Purpose */}
      <rect
        x={leftBoxX}
        y={topY}
        width={boxW}
        height={boxH}
        rx="6"
        fill={TEAL_BG}
        stroke={TEAL_BORDER}
        strokeWidth="1.5"
      />
      <text
        x={leftBoxX + boxW / 2}
        y={topY + 24}
        textAnchor="middle"
        style={{
          fontFamily: DISPLAY,
          fontSize: 15,
          fontWeight: 600,
          fill: BODY_TEXT,
        }}
      >
        Business Purpose
      </text>
      <text
        x={leftBoxX + boxW / 2}
        y={topY + 50}
        textAnchor="middle"
        style={{
          fontFamily: MONO,
          fontSize: 11,
          fill: SECONDARY_TEXT,
        }}
      >
        (e.g., Pipeline Integrity)
      </text>

      {/* Available Data */}
      <rect
        x={rightBoxX}
        y={topY}
        width={boxW}
        height={boxH}
        rx="6"
        fill={SLATE_BG}
        stroke={SLATE_BORDER}
        strokeWidth="1.5"
      />
      <text
        x={rightBoxX + boxW / 2}
        y={topY + 24}
        textAnchor="middle"
        style={{
          fontFamily: DISPLAY,
          fontSize: 15,
          fontWeight: 600,
          fill: BODY_TEXT,
        }}
      >
        Available Data
      </text>
      <text
        x={rightBoxX + boxW / 2}
        y={topY + 50}
        textAnchor="middle"
        style={{
          fontFamily: MONO,
          fontSize: 11,
          fill: SECONDARY_TEXT,
        }}
      >
        (owned by the org)
      </text>

      {/* ── Dashed lines from top boxes to center ── */}
      <line
        x1={leftBoxX + boxW / 2}
        y1={topY + boxH}
        x2={centerX - 30}
        y2={centerY - centerSize / 2}
        stroke={SECTION_BORDER}
        strokeWidth="1"
        strokeDasharray="5,3"
      />
      <line
        x1={rightBoxX + boxW / 2}
        y1={topY + boxH}
        x2={centerX + 30}
        y2={centerY - centerSize / 2}
        stroke={SECTION_BORDER}
        strokeWidth="1"
        strokeDasharray="5,3"
      />

      {/* ── Center: Semantic Data Product (hexagon-ish diamond) ── */}
      <path
        d={`
          M ${centerX} ${centerY - centerSize / 2}
          L ${centerX + centerSize / 2} ${centerY - centerSize / 4}
          L ${centerX + centerSize / 2} ${centerY + centerSize / 4}
          L ${centerX} ${centerY + centerSize / 2}
          L ${centerX - centerSize / 2} ${centerY + centerSize / 4}
          L ${centerX - centerSize / 2} ${centerY - centerSize / 4}
          Z
        `}
        fill={AMBER_BG}
        stroke={AMBER_BORDER}
        strokeWidth="2"
      />
      <text
        x={centerX}
        y={centerY - 8}
        textAnchor="middle"
        style={{
          fontFamily: DISPLAY,
          fontSize: 16,
          fontWeight: 700,
          fill: BODY_TEXT,
        }}
      >
        Semantic Data
      </text>
      <text
        x={centerX}
        y={centerY + 14}
        textAnchor="middle"
        style={{
          fontFamily: DISPLAY,
          fontSize: 16,
          fontWeight: 700,
          fill: BODY_TEXT,
        }}
      >
        Product
      </text>

      {/* ── Left column: REQUIREMENTS ── */}
      <text
        x={reqX}
        y={reqY - 20}
        style={{
          fontFamily: MONO,
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fill: ZONE_LABEL,
          fontWeight: 600,
        }}
      >
        REQUIREMENTS
      </text>

      {REQUIREMENTS.map((req, i) => {
        const y = reqY + i * reqItemH;
        return (
          <g key={`req-${i}`}>
            <circle cx={reqX + 8} cy={y + 6} r="4" fill={TEAL} />
            <circle cx={reqX + 8} cy={y + 6} r="2.5" fill="white" />
            <text
              x={reqX + 24}
              y={y + 10}
              style={{
                fontFamily: MONO,
                fontSize: 11,
                fill: BODY_TEXT,
              }}
            >
              {req}
            </text>
          </g>
        );
      })}

      {/* Dashed line from requirements to center */}
      <line
        x1={reqX + 40}
        y1={reqY + REQUIREMENTS.length * reqItemH / 2}
        x2={centerX - centerSize / 2 - 8}
        y2={centerY}
        stroke={SECTION_BORDER}
        strokeWidth="1"
        strokeDasharray="5,3"
      />

      {/* ── Right column: PROPERTIES ── */}
      <text
        x={propX}
        y={propY - 20}
        style={{
          fontFamily: MONO,
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fill: ZONE_LABEL,
          fontWeight: 600,
        }}
      >
        PROPERTIES
      </text>

      {PROPERTIES.map((prop, i) => {
        const y = propY + i * 32;
        const pillW = Math.max(prop.length * 6 + 16, 60);
        return (
          <g key={`prop-${i}`}>
            <rect
              x={propX}
              y={y}
              width={pillW}
              height={24}
              rx="12"
              fill={TEAL_BG}
              stroke={TEAL_BORDER}
              strokeWidth="1"
            />
            <text
              x={propX + pillW / 2}
              y={y + 14}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: MONO,
                fontSize: 10,
                fill: TEAL,
                fontWeight: 600,
              }}
            >
              {prop}
            </text>
          </g>
        );
      })}

      {/* Dashed line from properties to center */}
      <line
        x1={propX - 8}
        y1={propY + PROPERTIES.length * 32 / 2}
        x2={centerX + centerSize / 2 + 8}
        y2={centerY}
        stroke={SECTION_BORDER}
        strokeWidth="1"
        strokeDasharray="5,3"
      />

      {/* ── Bottom row: Source data + mapping label ── */}
      <text
        x={W / 2}
        y={sourceY - 28}
        textAnchor="middle"
        style={{
          fontFamily: MONO,
          fontSize: 10,
          fill: SECONDARY_TEXT,
          fontStyle: "italic",
        }}
      >
        Mapping Semantic Model
      </text>

      {/* Dashed line from center to sources */}
      <line
        x1={centerX}
        y1={centerY + centerSize / 2 + 8}
        x2={centerX}
        y2={sourceY - 36}
        stroke={SECTION_BORDER}
        strokeWidth="1"
        strokeDasharray="5,3"
      />

      {SOURCES.map((src, i) => {
        const x = sourceStartX + i * (sourceItemW + 12);
        return (
          <g key={`src-${i}`}>
            <rect
              x={x}
              y={sourceY}
              width={sourceItemW}
              height={sourceItemH}
              rx="4"
              fill={SLATE_BG}
              stroke={SLATE_BORDER}
              strokeWidth="1"
            />
            <text
              x={x + sourceItemW / 2}
              y={sourceY + sourceItemH / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: MONO,
                fontSize: 12,
                fontWeight: 600,
                fill: SLATE,
              }}
            >
              {src}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MOBILE: Vertical card stack
   ═══════════════════════════════════════════ */
function MobileLayout(): React.ReactElement {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 4px" }}>
      {/* ── Row 1: Business Purpose + Available Data ── */}
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            maxWidth: 340,
            margin: "0 auto",
          }}
        >
          {/* Business Purpose card */}
          <div
            style={{
              padding: "14px 12px",
              borderRadius: 8,
              background: TEAL_BG,
              border: `1.5px solid ${TEAL_BORDER}`,
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 13,
                fontWeight: 600,
                color: BODY_TEXT,
                marginBottom: 6,
              }}
            >
              Business Purpose
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: SECONDARY_TEXT,
              }}
            >
              (e.g., Pipeline Integrity)
            </div>
          </div>

          {/* Available Data card */}
          <div
            style={{
              padding: "14px 12px",
              borderRadius: 8,
              background: SLATE_BG,
              border: `1.5px solid ${SLATE_BORDER}`,
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 13,
                fontWeight: 600,
                color: BODY_TEXT,
                marginBottom: 6,
              }}
            >
              Available Data
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: SECONDARY_TEXT,
              }}
            >
              (owned by the org)
            </div>
          </div>
        </div>
      </div>

      {/* ── Arrow: Contextual Bridge ── */}
      <div style={{ textAlign: "center" }}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" style={{ display: "inline-block" }}>
          <line x1="12" y1="0" x2="12" y2="22" stroke={SECTION_BORDER} strokeWidth="1.2" strokeDasharray="4,3" />
          <polygon points="8,20 12,27 16,20" fill={ZONE_LABEL} />
        </svg>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: ZONE_LABEL,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginTop: 4,
            fontWeight: 600,
          }}
        >
          Contextual Bridge
        </div>
      </div>

      {/* ── Row 2: Semantic Data Product card with properties inside ── */}
      <div
        style={{
          padding: "16px 14px",
          borderRadius: 8,
          background: AMBER_BG,
          border: `1.5px solid ${AMBER_BORDER}`,
          maxWidth: 340,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: DISPLAY,
            fontSize: 15,
            fontWeight: 700,
            color: BODY_TEXT,
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Semantic Data Product
        </div>

        <div style={{ fontFamily: MONO, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: ZONE_LABEL, fontWeight: 600, marginBottom: 8 }}>
          Properties
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {PROPERTIES.map((prop, i) => (
            <div key={`mp-${i}`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 11, color: TEAL }}>
              <CheckIcon />
              <span>{prop}</span>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: MONO, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: ZONE_LABEL, fontWeight: 600, marginTop: 12, marginBottom: 8 }}>
          Requirements
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {REQUIREMENTS.map((req, i) => (
            <div key={`mr-${i}`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 11, color: TEAL }}>
              <CheckIcon />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Arrow: Maps to ── */}
      <div style={{ textAlign: "center" }}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" style={{ display: "inline-block" }}>
          <line x1="12" y1="0" x2="12" y2="22" stroke={SECTION_BORDER} strokeWidth="1.2" strokeDasharray="4,3" />
          <polygon points="8,20 12,27 16,20" fill={ZONE_LABEL} />
        </svg>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10,
            color: ZONE_LABEL,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginTop: 4,
            fontWeight: 600,
          }}
        >
          Maps to
        </div>
      </div>

      {/* ── Row 3: Source data pills ── */}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: 340,
          margin: "0 auto",
        }}
      >
        {SOURCES.map((src, i) => (
          <div
            key={`ms-${i}`}
            style={{
              padding: "10px 16px",
              borderRadius: 6,
              background: SLATE_BG,
              border: `1px solid ${SLATE_BORDER}`,
              fontFamily: MONO,
              fontSize: 12,
              fontWeight: 600,
              color: SLATE,
            }}
          >
            {src}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function SemanticDataProduct(): React.ReactElement {
  const isMobile = useIsMobile();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {isMobile ? <MobileLayout /> : <DesktopSVG />}
    </div>
  );
}
