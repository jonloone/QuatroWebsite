# Quatro Mermaid Theme

For any Mermaid diagram on a Quatro page, open the diagram block with one of the two theme inits below. Eco-track surfaces use the warm variant; defense and technical surfaces use the slate variant. This gives every Mermaid figure in a Quatro post the same typographic and color discipline as the rest of the site.

## Eco-Track Theme (warm palette — default for insights, energy, municipal, LATAM, broadcast)

```
%%{init: {
  'theme':'base',
  'themeVariables': {
    'primaryColor':'#F2EBDA',
    'primaryTextColor':'#16161E',
    'primaryBorderColor':'#16161E',
    'lineColor':'#8D8071',
    'secondaryColor':'#CFCBBE',
    'tertiaryColor':'#F2EBDA',
    'fontFamily':'Roobert, system-ui, sans-serif',
    'fontSize':'13px'
  }
}}%%
```

Primary `#F2EBDA` is paper. Text `#16161E` is ink. Lines `#8D8071` are taupe. Secondary fills `#CFCBBE` are bone.

## Defense / Technical Theme (slate palette — for defense, SATCOM, federal capture, dashboards, ops diagrams)

```
%%{init: {
  'theme':'base',
  'themeVariables': {
    'primaryColor':'#F9FAFB',
    'primaryTextColor':'#0a0a0a',
    'primaryBorderColor':'#0a0a0a',
    'lineColor':'#475569',
    'secondaryColor':'#E2E8F0',
    'tertiaryColor':'#FFFFFF',
    'fontFamily':'Roobert, system-ui, sans-serif',
    'fontSize':'13px'
  }
}}%%
```

This is the original v1 theme, preserved for technical and defense surfaces.

## Applying Forest-Green Emphasis

Forest green is not a theme variable. It is applied as a manual class on the one emphasized node, per Quatro's single-emphasis rule.

Example:

```mermaid
%%{init: { 'theme':'base', 'themeVariables': { ... } }}%%
flowchart LR
  A[Data Source] --> B[Processing]
  B --> C[Intelligence Product]
  C --> D[Operator Action]

  classDef emphasis fill:#0F4C3A,stroke:#0F4C3A,color:#F2EBDA;
  class C emphasis
```

Only one node ever gets the `emphasis` class per diagram. Color value `#F2EBDA` on emphasis fills replaces the previous `#ffffff` so text-on-forest reads on the warm paper register.

## Ochre on Eco-Track

For eco-track diagrams only, ochre can be used as a second fill for a secondary element. Never appears alongside forest on the same element.

```
classDef eco fill:#A88B5C,stroke:#A88B5C,color:#16161E;
```

Ochre-deep `#9C6B4A` is available for higher-emphasis moments where ochre alone reads pale.

## Indigo-Ink as Editorial Second Accent

For pull-quote rules, byline marks, and footnote markers on eco-track:

```
classDef editorial fill:#243248,stroke:#243248,color:#F2EBDA;
```

## Font Scaling Across Devices

The theme specifies `fontSize: 13px` for reliable readability. For hero-scale diagrams that need bigger labels, override per-node rather than globally to keep the rest of the series consistent.

## What This Theme Does Not Change

The base `technical-diagrams` skill's C4 grammar, DAG rules, BPMN-lite, ERD patterns, and marktecture disciplines stay intact. The theme only changes how Mermaid renders color, border, and font on Quatro surfaces. Everything else inherits from the base skill.

## Choosing the Right Theme

Quick rule of thumb: if the surrounding page background is `paper` (`#F2EBDA`), use the eco-track theme. If the background is `charcoal` (`#0a0a0a`) or `slate-50` (`#F9FAFB`), use the defense/technical theme. Never mix the two on a single page.
