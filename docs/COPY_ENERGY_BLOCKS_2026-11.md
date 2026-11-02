# Copy deck — Firm power: energy blocks (capability page + industry cards)

Paste from here; do not free-write. Spec: `docs/REALIGNMENT_2026-11-02_ENERGY_BLOCKS.md`. Voice gate applies.
Eyebrow/H1 carry "Quatro Energy" only if DEC-3 picks Option A; the bracketed alternates below are the Option B text.

---

## §1 Capability page — English (`src/content/capabilities/energy-blocks.md`)

```yaml
title: Firm power in 90 to 120 days
order: 7
layer: quatro
substrate: quatro
proof: null
hero:
  eyebrow: "Quatro Energy"          # Option B: "Quatro's layer"
  title: "Firm, sovereign power, delivered in 4 MW blocks and on site within a quarter."
  sub: "A grid-forming, lithium-free storage block arrives as one 40-foot container, connects at 480 V and 60 Hz, and operates every day: it smooths load, shaves the evening peak and restarts the site if the grid is lost. Your control room dispatches it."
whatYouGet:
- "4 MW / 4 MWh per block, stackable two-high, so ten blocks firm a substation on five container footprints."
- "Grid-forming and black-start capable: a block can island a hospital, a water plant or an industrial site and restart it without the national grid."
- "Lithium-free sodium-ion cells, passively cooled from –40 to +70 °C, suited to coast, lowland and highland sites without battery HVAC."
- "One 1,000 Vdc rail that water, compute and, later, on-site generation attach to without re-engineering what is already energized."
- "Every block reports through Modbus and IEC 61850 into the operational model your team already runs, beside substations, plants and pipelines."
- "Delivered, installed and tested on site in 90 to 120 days from deposit, with operations and maintenance included for the life of the system."
statusLabels:
- "Storage block and water block: available now."
- "Compute block: built to order."
- "Fuel-free generation block: in development, not yet available for order."
showsUp:
- industry: Energy and the grid
  href: /industries/energy
  text: "Ten blocks at a congested substation provide 40 MW and 40 MWh while a new line is planned; one hundred blocks hold a 400 MWh dry-season reserve dispatched from one control room."
- industry: Mining and remote industry
  href: /industries/mining
  text: "Stacked two-high, eight blocks supply 32 MW to a camp or processing plant at altitude, paired with solar on the same rail to cut diesel hours."
- industry: Security and critical infrastructure
  href: /industries/security
  text: "Blocks at switching centers, hilltop towers and forward sites keep essential services on air through grid events, and a storage block with a water block restores two services after a flood or earthquake."
substrateLine: "The blocks are supplied by a U.S. manufacturing partner and integrated, installed and operated with Quatro. Specifications are the supplier's, indicative, and confirmed at quotation."
proofCard:
  title: "Production hardware"
  text: "Storage blocks are in production and a grid-tied site has been energized in the United States (supplier-stated). A Quatro-delivered site will appear here when it is commissioned."
  asset: null
handoff:
  text: "A block is one more asset in the operational picture. The same model that schedules it also correlates its alarms with the grid it serves."
  links:
  - label: The operational model
    href: /capabilities/operational-intelligence
  - label: Managed service and sovereign hosting
    href: /capabilities/managed-service
engagement: "An engagement begins with the constraint: a substation, a plant, a province. Quatro sizes the blocks, confirms the interconnection and the pad, and fixes megawatts, sites and date in one contract. Your EPC connects and energizes, or that scope is taken on. Your team owns the asset and dispatches it from day one."
cta:
  label: Talk to our team
  href: /contact/demo
```

## §2 Capability page — Spanish (`src/content/capabilities-es/energy-blocks.md`)

```yaml
title: Potencia firme en 90 a 120 días
hero:
  eyebrow: "Quatro Energy"          # Opción B: "La capa de Quatro"
  title: "Potencia firme y soberana, entregada en bloques de 4 MW y en sitio dentro de un trimestre."
  sub: "Un bloque de almacenamiento formador de red, libre de litio, llega en un contenedor de 40 pies, se conecta a 480 V y 60 Hz y opera a diario: suaviza la carga, recorta la punta nocturna y reinicia el sitio si se pierde la red. Su sala de control lo despacha."
whatYouGet:
- "4 MW / 4 MWh por bloque, apilable en dos niveles: diez bloques dan firmeza a una subestación en la huella de cinco contenedores."
- "Formador de red y con arranque en negro: un bloque puede aislar un hospital, una planta de agua o un sitio industrial y reiniciarlo sin la red nacional."
- "Celdas sodio-ion libres de litio, con enfriamiento pasivo de –40 a +70 °C, aptas para la costa, la selva y la cordillera sin climatización de baterías."
- "Un bus de 1.000 Vcc al que se conectan agua, cómputo y, más adelante, generación en sitio, sin reingeniería de lo ya energizado."
- "Cada bloque reporta por Modbus e IEC 61850 al modelo operativo que su equipo ya gestiona, junto a subestaciones, centrales y oleoductos."
- "Entregado, instalado y probado en sitio en 90 a 120 días desde el anticipo, con operación y mantenimiento incluidos durante la vida del sistema."
statusLabels:
- "Bloque de almacenamiento y bloque de agua: disponibles hoy."
- "Bloque de cómputo: bajo pedido."
- "Bloque de generación sin combustible: en desarrollo, aún no disponible para pedido."
showsUp:
- industry: Energía y red
  href: /es/industries/energy
  text: "Diez bloques en una subestación congestionada aportan 40 MW y 40 MWh mientras se planifica una nueva línea; cien bloques forman una reserva de 400 MWh para la temporada seca, despachada desde una sola sala de control."
- industry: Minería e industria remota
  href: /es/industries/mining
  text: "Apilados en dos niveles, ocho bloques entregan 32 MW a un campamento o planta en altura, junto con solar en el mismo bus para reducir horas de diésel."
- industry: Seguridad e infraestructura crítica
  href: /es/industries/security
  text: "Bloques en centrales, torres y sitios avanzados mantienen al aire los servicios esenciales durante eventos de la red; un bloque de almacenamiento con uno de agua restablece dos servicios tras una inundación o un sismo."
substrateLine: "Los bloques los suministra un socio fabricante de Estados Unidos y Quatro los integra, instala y opera. Las especificaciones son del proveedor, indicativas, y se confirman en la cotización."
proofCard:
  title: "Equipos en producción"
  text: "Los bloques de almacenamiento están en producción y un sitio conectado a la red fue energizado en Estados Unidos (declaración del proveedor). Un sitio entregado por Quatro aparecerá aquí cuando entre en servicio."
  asset: null
handoff:
  text: "Un bloque es un activo más en el cuadro operativo. El mismo modelo que lo programa correlaciona sus alarmas con la red a la que sirve."
  links:
  - label: El modelo operativo
    href: /es/capabilities/operational-intelligence
  - label: Servicio gestionado y alojamiento soberano
    href: /es/capabilities/managed-service
engagement: "Un proyecto comienza por la restricción: una subestación, una planta, una provincia. Quatro dimensiona los bloques, confirma la interconexión y la plataforma, y fija megavatios, sitios y fecha en un solo contrato. Su EPC conecta y energiza, o se asume ese alcance. Su equipo es dueño del activo y lo despacha desde el primer día."
cta:
  label: Hable con nuestro equipo
  href: /es/contact/demo
```

## §3 Industry cards (EN / ES)

**energy.md — new featured capability**
- name: "Firm capacity in 90 to 120 days" / "Capacidad firme en 90 a 120 días"
- description: "Grid-forming storage blocks, 4 MW / 4 MWh each, at the substations where the grid is constrained and for the evening peak of the dry season. Dispatched from your control room." / "Bloques de almacenamiento formadores de red, de 4 MW / 4 MWh, en las subestaciones donde la red está restringida y para la punta nocturna de la temporada seca. Despachados desde su sala de control."
- outcome: "Firm capacity within a quarter" / "Capacidad firme dentro de un trimestre"
- image: /images/cap-energy-blocks-substation.jpg · featured: true · tier: orchestrate
- Service-lines paragraph (below capabilities): "Quatro Energy services cover four lines: capacity for the grid, industrial and remote power, resilience of critical services, and sovereign compute and water. Each is delivered in the same 4 MW block." / "Los servicios Quatro Energy cubren cuatro líneas: capacidad para la red, energía industrial y remota, resiliencia de servicios críticos, y cómputo soberano y agua. Cada una se entrega en el mismo bloque de 4 MW." (Option B: drop "Quatro Energy services cover" → "Energy blocks serve four needs:")

**mining.md — new capability**
- name: "Off-grid power for camps and plants" / "Energía aislada para campamentos y plantas"
- description: "Passively cooled storage rated to 3,000 m, stacked two-high; eight blocks supply 32 MW on four container footprints, with solar on the same rail." / "Almacenamiento con enfriamiento pasivo clasificado hasta 3.000 m, apilado en dos niveles; ocho bloques entregan 32 MW en la huella de cuatro contenedores, con solar en el mismo bus."

**security.md — new capability**
- name: "Power for the services a country cannot allow to fail" / "Energía para los servicios que un país no puede permitir que fallen"
- description: "Grid-forming blocks at hospitals, telecom sites and forward bases keep essential services energized through a system event; with a water block they restore two services after a disaster." / "Bloques formadores de red en hospitales, sitios de telecomunicaciones y bases avanzadas mantienen energizados los servicios esenciales durante un evento del sistema; con un bloque de agua restablecen dos servicios tras un desastre."

**cities.md — one line under disaster response**
- "A storage block and a water block delivered together restore power and potable water to shelters and clinics within days of arrival." / "Un bloque de almacenamiento y uno de agua entregados juntos restablecen energía y agua potable en albergues y centros de salud a días de su llegada."

## §4 Voice gate self-check on this deck
A: VOICE_GATE §A grep clean on §1 to §3 (run the list from that file). B: no "not X, Y"; the four-line service list is a functional list, not a flourish; the three "showsUp" items are the template's own count. C: buyer dispatches, owns, decides; Quatro integrates and operates. D: every figure is the supplier's and labeled indicative; the only track-record line is marked supplier-stated.
