/**
 * ============================================================================
 * 🏢 KALEEGZIABHER FEKEDE // ARCHITECTURAL DESIGNER & GRAPHIC DESIGNER
 * 🌟 KB CREATIVE — Wolkite University, 4th Year Architecture
 * Contact: kaleabjr22@gmail.com • +251 941263180
 * ============================================================================
 * 
 * 🛠️ HOW TO CUSTOMIZE PROJECTS & ADD YOUR OWN RENDERS:
 * ----------------------------------------------------------------------------
 * 1. HOW TO REPLACE IMAGES WITH YOUR OWN LOCAL FILES:
 *    - Put your JPG / PNG image in the "assets/" folder (e.g. "assets/my-render-1.jpg").
 *    - In the KB_PROJECTS array below, find your project and update the "url":
 *      { url: 'assets/my-render-1.jpg', caption: 'Slide 01 // Exterior Master Elevation' }
 * 
 * 2. HOW TO EDIT "SIZE CONTEXT" FOR ARCHITECTURE & DESIGN:
 *    - Each project has a "sizeContext" field (e.g. "1,850 m² • 4 Levels (G+3) • Footprint 32m × 24m").
 *    - This appears dynamically on hover over each project card!
 * 
 * 3. HOW TO ADD OR REMOVE PROJECT SLIDES:
 *    - Simply add or remove items in the "slides" array.
 *    - The in-card 01/05 counter and dot pagination automatically adapt!
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initProjectsArchive();
  initSkillsAnimation();
  initMoveableCardTilt();
  initCaseModal();
});

/* ==========================================================================
   1. Projects Database (7 Curated Works in Residential, Interior, Commercial,
      Construction, and Brand & Identity)
   ========================================================================== */
const KB_PROJECTS = [
  // 01: MIXED USE TOWER & JENA MALL (REAL PROJECT — GUBRE TOWN)
  {
    id: 'mixed-use-tower-gubre',
    service: "Mixed-Use Architecture & Commercial Planning",
    role: "Lead Architectural Designer & 3D CGI Artist (Kaleegziabher Fekede • 4th Year Architecture, Wolkite University / KB CREATIVE)",
    software: ["AutoCAD","Rhino 3D","D5 Render","Adobe Photoshop"],
    title: 'Mixed-Use Tower & Jena Mall',
    practice: 'architecture',
    subCategory: 'mixeduse',
    practiceLabel: 'Mixed-Use & Commercial Architecture',
    year: '2025',
    gridRef: 'MOD-01',
    sizeContext: '16 Levels (2B+G+14) • Retail Concourse • Corporate Offices • Highland Panorama',
    location: 'Gubre Town, Ethiopia',
    client: 'Commercial & Urban Development Consortium',
    scale: '16-Level Urban Landmark (2 Basements + Ground + 14 Upper Floors)',
    medium: 'Rhino 3D, D5 Render, AutoCAD Working Drawings, Double Glazing & Louvered Metal Screen',
    summary: 'Sixteen-level vertical landmark uniting retail concourses, corporate workspaces, and panoramic residences in Gubre Town.',
    description: 'A modern architectural landmark in Gubre Town, designed to seamlessly integrate vibrant commercial zones with premium urban living. The project balances high-traffic retail and corporate environments with secure, private residential spaces. The component breakdown encompasses 2 Basements (secure parking, storage, and MEP services), Ground Floor high-ceiling retail storefronts with distinct residential and commercial lobbies, 14 Upper Floors (lower levels dedicated to flexible open-plan corporate offices, upper levels dedicated to premium apartments designed for natural light and panoramic highland views), and a multi-functional rooftop lounge with a green community sky terrace.',
    challenge: 'Balancing heavy pedestrian commercial traffic at the podium level with strict privacy, acoustic buffering, and dedicated security access for the upper residential floors.',
    solution: 'Segmented the vertical circulation cores into isolated access banks, creating independent entrance lobbies while deploying a 5-stage form consolidation that optimizes structural footprint, daylight orientation, and passive solar shading.',
    deliverables: [
      '5-Stage Form Development & Building Mass Consolidation Study',
      '2 Basements Parking, Storage & MEP Service Infrastructure Layouts',
      'Ground Floor Retail Storefronts, Jena Mall Concourse & Twin Lobbies',
      'Flexible Open-Plan Corporate Office Floorplates (Lower Levels)',
      'High-Rise Premium Residential Unit Plans & Panoramic Penthouse Layouts',
      'Nocturnal Lighting, Aerial Skyline & Pedestrian Plaza Visualization Suite'
    ],
    slides: [
      { 
        url: 'assets/mixed-use-slide-01-night.jpg', 
        caption: 'Slide 01 // Nocturnal Facade & Jena Mall Concourse' 
      },
      { 
        url: 'assets/mixed-use-slide-02-aerial.jpg', 
        caption: 'Slide 02 // Aerial Massing & Skyline Silhouette' 
      },
      { 
        url: 'assets/mixed-use-slide-03-street.jpg', 
        caption: 'Slide 03 // Pedestrian Plaza & Retail Promenade' 
      },
      { 
        url: 'assets/mixed-use-slide-04-office.jpg', 
        caption: 'Slide 04 // Corporate Office Interior & Acoustic Timber' 
      },
      { 
        url: 'assets/mixed-use-slide-05-living.jpg', 
        caption: 'Slide 05 // High-Rise Residence & Highland Panorama' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="12" y="6" width="16" height="30" stroke="#FFD042" />
      <line x1="16" y1="12" x2="24" y2="12" stroke="#FFFFFF" />
      <line x1="16" y1="18" x2="24" y2="18" stroke="#FFFFFF" />
      <line x1="16" y1="24" x2="24" y2="24" stroke="#FFFFFF" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="#FFFFFF" />
    </svg>`
  },

  // 02: CLIMATE RESPONSIVE RESIDENCE (REAL PROJECT — DIRE DAWA)
  {
    id: 'climate-responsive-residence-diredawa',
    service: "Bioclimatic Residential Architecture",
    role: "Lead Architectural Designer & Passive Solar Strategist (Kaleegziabher Fekede • 4th Year Architecture, Wolkite University / KB CREATIVE)",
    software: ["AutoCAD","Rhino 3D","D5 Render","Adobe Photoshop","Climate Consultant"],
    title: 'Climate-Responsive Private Residence',
    practice: 'architecture',
    subCategory: 'residential',
    practiceLabel: 'Residential & Bioclimatic Architecture',
    year: '2025',
    gridRef: 'MOD-02',
    sizeContext: 'G+2 Bioclimatic Villa • Central Cooling Atrium • 45° Solar Fins • Dire Dawa',
    location: 'Dire Dawa, Ethiopia',
    client: 'Private Family Residence Commission',
    scale: 'G+2 Residence with Integrated Thermal Atrium & Shaded Terraces',
    medium: '45° Aluminum Vertical Fins, Living Green Wall Irrigation, Textured Concrete, Passive Courtyard Atrium',
    summary: 'Bioclimatic residential villa engineered with 45° passive solar louvers and a central microclimate cooling atrium.',
    description: 'A contemporary G+2 private residence engineered specifically for Dire Dawa\'s intense thermal environment. The design prioritizes passive cooling strategies, utilizing an integrated central courtyard and a dynamic louvered facade system to drastically reduce solar heat gain while maximizing natural cross-ventilation. The Ground Floor organizes public living, dining, and an open kitchen wrapping around the landscaped courtyard, guest suite, and parking. The First Floor hosts family bedrooms, study room, prayer room, and shaded balconies. The Second Floor accommodates the master suite, private gym, home office, and entertainment terrace.',
    challenge: 'Mitigating high ambient temperatures and harsh solar radiation characteristic of Dire Dawa without relying exclusively on energy-intensive mechanical air conditioning.',
    solution: 'Introduced a central courtyard that acts as a thermal chimney, drawing cool air through perimeter landscaped buffers while blocking 80% of direct solar heat via 45° angled aluminum vertical fins paired with an irrigated living wall.',
    deliverables: [
      'Bioclimatic 4-Step Form Development & Solar Permeability Study',
      'Ground, First & Second Floor Architectural Plans (Scale 1:100)',
      'East, North, South & West Elevation Drawings with Louver Layouts',
      'Vertical Fins Detail Specifications (45° Angle, 5.0 Offset, Aluminum)',
      'Internal Courtyard 3D Architectural Section & Green Wall Irrigation Plan',
      'Daylight Exterior Streetscape & Interior Courtyard Living Renderings'
    ],
    slides: [
      { 
        url: 'assets/residence-slide-01-street.jpg', 
        caption: 'Slide 01 // Daylight Street Elevation & Dynamic Louvers' 
      },
      { 
        url: 'assets/residence-slide-02-corner.jpg', 
        caption: 'Slide 02 // Corner Perspective & Shaded Veranda' 
      },
      { 
        url: 'assets/residence-slide-03-courtyard.jpg', 
        caption: 'Slide 03 // 3D Section — Central Bioclimatic Atrium' 
      },
      { 
        url: 'assets/residence-slide-04-interior.jpg', 
        caption: 'Slide 04 // Living Lounge & Daylit Courtyard Connection' 
      },
      { 
        url: 'assets/residence-slide-05-axon.jpg', 
        caption: 'Slide 05 // Passive Solar Form Development & Shading' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M8 32V14l12-8 12 8v18H8z" stroke="#FFD042" />
      <rect x="15" y="18" width="10" height="14" stroke="#FFFFFF" />
    </svg>`
  },

  // 03: VERTICAL SPORTS & WELLNESS CENTER (REAL PROJECT — COMPACT URBAN COMPLEX)
  {
    id: 'vertical-sports-wellness-center',
    service: "Sports Architecture & Structural Steel Truss Design",
    role: "Lead Architectural Designer & 3D Visualizer (Kaleegziabher Fekede • 4th Year Architecture, Wolkite University / KB CREATIVE)",
    software: ["AutoCAD","Rhino 3D","D5 Render","Adobe Photoshop"],
    title: 'Vertical Sports & Wellness Center',
    practice: 'architecture',
    subCategory: 'sports',
    practiceLabel: 'Sports & Public Architecture',
    year: '2025',
    gridRef: 'MOD-03',
    sizeContext: 'G+2 Athletic Complex • 18m Clear-Span Truss • Multi-Tiered Courts',
    location: 'Urban Center, Ethiopia',
    client: 'Municipal Sports & Community Recreation',
    scale: 'G+2 Vertical Facility with Rooftop Sports Terrace',
    medium: 'Reinforced Concrete Frame, High-Performance Acoustic Glazing, Steel Trusses, Perforated Solar Shading',
    summary: 'Compact urban sports complex stacking Olympic gymnastics, indoor athletic courts, and daylight wellness lounges.',
    description: 'The objective of this project was to design a modern, vertical sports and wellness center within a compact urban footprint. Moving away from sprawling horizontal sports complexes, this G+2 facility stacks diverse athletic programs to optimize land use while maintaining seamless spatial transitions, high acoustic separation, and clear user circulation. The complex integrates an expansive ground entrance plaza, shaded drop-off zones, professional indoor gymnasium, cardiovascular and weight suites, athlete recovery zones, and a top-floor wellness cafeteria with floor-to-ceiling glass framing panoramic landscape views.',
    challenge: 'Isolating high-impact vibrations and acoustic reverberation generated by multi-level gymnasium sports from quiet administrative and wellness dining spaces.',
    solution: 'Adopted a vertical structural zoning strategy with decoupled concrete slab dampeners and heavy acoustic perimeter partitions between athletic courts and social wellness facilities.',
    deliverables: [
      'Ground, First & Second Floor Architectural Spatial Plans',
      'Longitudinal & Transverse Double-Height Cross Sections',
      'Pedestrian Plaza, Bus Terminal & Vehicle Drop-Off Access Masterplan',
      'Acoustic Barrier & Structural Frame Coordination Documentation',
      'Exterior Daylight, Aerial Rooftop & Interior Cafeteria Render Suite'
    ],
    slides: [
      { 
        url: 'assets/sport-slide-01-plaza.jpg', 
        caption: 'Slide 01 // Kinetic Facade & Elevated Glazed Concourse' 
      },
      { 
        url: 'assets/sport-slide-02-aerial.jpg', 
        caption: 'Slide 02 // Aerial Perspective & Aerodynamic Roof Plane' 
      },
      { 
        url: 'assets/sport-slide-03-facade.jpg', 
        caption: 'Slide 03 // Gymnastics Arena & 18m Clear-Span Truss' 
      },
      { 
        url: 'assets/sport-slide-04-street.jpg', 
        caption: 'Slide 04 // Streetscape Perspective & Transit Promenade' 
      },
      { 
        url: 'assets/sport-slide-05-interior.jpg', 
        caption: 'Slide 05 // Wellness Lounge & Panoramic Glazing' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="20" cy="20" r="14" stroke="#FFD042" />
      <path d="M10 20h20M20 10v20" stroke="#FFFFFF" />
    </svg>`
  },

  // 04: SUSTAINABLE BAMBOO & FERRO-CEMENT HOUSING (REAL PROJECT — APPROPRIATE TECHNOLOGY)
  {
    id: 'bamboo-ferrocement-sustainable-housing',
    service: "Sustainable Eco-Housing & Appropriate Technology",
    role: "Lead Architectural Designer & Material Researcher (Kaleegziabher Fekede • 4th Year Architecture, Wolkite University / KB CREATIVE)",
    software: ["AutoCAD","SketchUp","D5 Render","Adobe Photoshop"],
    title: 'Sustainable Bamboo & Ferrocement Housing',
    practice: 'architecture',
    subCategory: 'sustainable',
    practiceLabel: 'Sustainable Architecture & Eco-Housing',
    year: '2024',
    gridRef: 'MOD-04',
    sizeContext: 'Eco-Dwelling • Bundled Bamboo Space Frame • 25mm Thin-Shell Vaults',
    location: 'Highland Eco-Settlement, Ethiopia',
    client: 'Sustainable Habitat & Appropriate Technology Research',
    scale: 'Two-Level Eco-Residential Dwelling on Sloped Hillside',
    medium: 'Bamboo Culms (Dendrocalamus asper), 25mm Ferro-Cement Panels, Timber Decking, Clay Roof Tiles',
    summary: 'Low-carbon housing prototype uniting treated highland bamboo space frames with 25mm ferrocement thin shells.',
    description: 'An innovative exploration of appropriate building technology combining native bundled bamboo culms with thin-shell ferro-cement panels. The primary skeleton utilizes a triangulated bamboo space frame with bundled culms (typically Dendrocalamus asper or Bambusa balcooa) for structural columns that distribute gravity loads. The secondary shell applies thin-shell ferro-cement panels (25mm–30mm thickness) strategically integrated into the "shear bays" of the bamboo frame. Bamboo handles the tensile stresses of wind and seismic loads, while ferro-cement provides the compressive strength, thermal mass, and fire resistance that bamboo lacks. Molded curved ferro-cement walls absorb heat during the day, while high-porosity lightweight bamboo louvers facilitate continuous cross-ventilation.',
    challenge: 'Harmonizing the flexible tensile properties of natural organic bamboo with the rigid compressive strength of cementitious plaster without joint cracking.',
    solution: 'Engineered pin-jointed steel gusset brackets and wire mesh lap-joints that permit thermal expansion while transferring shear loads seamlessly between bamboo bundles and ferro-cement diaphragm walls.',
    deliverables: [
      'Ground, First Floor & Roof Structural Framing Plans',
      'Site Contour & Hillside Stilt Foundation Plan',
      'Front, Rear, Left & Right Architectural Elevations',
      'Bamboo Culm Joinery & Ferro-Cement Shear Bay Details',
      'Full Exterior Hillside Perspective & Material Texture Renderings'
    ],
    slides: [
      { 
        url: 'assets/bamboo-slide-01-hillside.jpg', 
        caption: 'Slide 01 // Hillside Elevation & Stilt Foundation' 
      },
      { 
        url: 'assets/bamboo-slide-02-landscape.jpg', 
        caption: 'Slide 02 // Landscape Perspective & Shaded Porch' 
      },
      { 
        url: 'assets/bamboo-slide-03-detail.jpg', 
        caption: 'Slide 03 // Triangulated Bamboo Space Frame Joinery' 
      },
      { 
        url: 'assets/bamboo-slide-04-veranda.jpg', 
        caption: 'Slide 04 // Shaded Veranda & Forest Approach Nested in Canopy' 
      },
      { 
        url: 'assets/bamboo-slide-05-elevation.jpg', 
        caption: 'Slide 05 // Distant Terrain Perspective & Eco-Footprint' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 34V14l8-8 8 8v20" stroke="#FFD042" />
      <line x1="8" y1="34" x2="32" y2="34" stroke="#FFFFFF" />
      <line x1="16" y1="22" x2="24" y2="22" stroke="#FFD042" />
    </svg>`
  },

  // 05: ACUTE ENGINEERING HEADQUARTERS — OFFICE RENOVATION (REAL PROJECT — BOLE MICHAEL)
  {
    id: 'acute-engineering-office-renovation',
    service: "Interior Architecture & Workplace Renovation",
    role: "Lead Interior Architect & Spatial Designer (Kaleegziabher Fekede • 4th Year Architecture, Wolkite University / KB CREATIVE)",
    software: ["AutoCAD","Rhino 3D","D5 Render","Adobe Photoshop"],
    title: 'Acute Engineering — Office Renovation',
    practice: 'architecture',
    subCategory: 'interior',
    practiceLabel: 'Interior Architecture & Workplace Renovation',
    year: '2026',
    gridRef: 'MOD-05',
    sizeContext: '22.6 m² (4.2m × 5.4m) • Steel & Timber Screen • Dual Spatial Zones • Bole Michael',
    location: 'Bole Michael, Addis Ababa, Ethiopia',
    client: 'Acute Engineering',
    scale: '22.6 m² (4.2m × 5.4m) Executive Office & Consultation Suite',
    medium: 'Steel & Slatted Oak Joinery, Bookmatched Calacatta Marble, Floating Halo LED Rings, Acoustic Carpet',
    summary: 'Transforming a compact 22.6 m² footprint into a dual-zone executive suite through a tectonic steel and timber screen that choreographs arrival, transition, and destination.',
    description: 'A high-precision interior renovation for Acute Engineering located in Bole Michael, Addis Ababa. Within an uncompromising 22.6 m² envelope (4.2m × 5.4m), the open floor was masterfully bifurcated into two distinct programmatic realms: an informal client arrival & meeting lounge, and a commanding formal executive command workstation. A custom-fabricated steel and slatted oak screen serves as the primary dividing element—filtering light, organizing sightlines, and orchestrating a clear sequence of arrival, transition, and destination within a single unified room. The executive desk is backed by a bookmatched Calacatta marble feature slab mounting the 3D illuminated Acute Engineering corporate emblem, framed by bespoke floor-to-ceiling joinery and architectural halo ring lighting.',
    challenge: 'Integrating an executive workstation, formal client consultation zone, and high-density storage within an uncompromising 22.6 m² footprint without visual congestion or spatial claustrophobia.',
    solution: 'Designed an open-framework steel and timber screen that functions simultaneously as a room divider, display vitrine, and acoustic buffer—preserving continuous sightlines and perimeter natural daylight while establishing absolute privacy for executive management.',
    deliverables: [
      'Spatial Layout & Circulation Zoning Plan (Scale 1:50)',
      'Steel & Slatted Timber Partition Screen Construction Detail',
      'Bookmatched Marble Feature Wall & 3D Logo Integration Spec',
      'Full-Height Storage Joinery & Hidden Wardrobe Millwork',
      '3D Isometric Cutaway & Photorealistic Perspective Visualization Suite'
    ],
    slides: [
      { 
        url: 'assets/acute-logo.svg', 
        caption: 'Slide 01 // Acute Engineering Primary Vector Logo & Corporate Identity Mark (Full Scale)', 
        fit: 'contain', 
        bg: '#FFFFFF' 
      },
      { 
        url: 'assets/office-slide-01-elevation.jpg', 
        caption: 'Slide 02 // Executive Workspace & Branded Calacatta Marble Feature Wall' 
      },
      { 
        url: 'assets/office-slide-02-isometric.jpg', 
        caption: 'Slide 03 // 3D Isometric Cutaway — Dual-Zone Spatial Organization (22.6 m²)' 
      },
      { 
        url: 'assets/office-slide-03-wide.jpg', 
        caption: 'Slide 04 // Executive Command Suite, Halo Ring Chandeliers & Fluted Millwork' 
      },
      { 
        url: 'assets/office-slide-04-divider.jpg', 
        caption: 'Slide 05 // Steel & Timber Partition Screen — Sequence of Arrival & Transition' 
      },
      { 
        url: 'assets/office-slide-05-workstation.jpg', 
        caption: 'Slide 06 // Workstation Perspective, CAD Drafting Interface & Curated Art' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="6" y="8" width="28" height="24" rx="2" stroke="#FFD042" />
      <line x1="22" y1="8" x2="22" y2="32" stroke="#FFFFFF" stroke-dasharray="2 2"/>
      <path d="M11 26 L16 14 L21 26" stroke="#1456CC" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 22 L19 22" stroke="#E6222E" stroke-width="2"/>
      <rect x="25" y="14" width="6" height="12" fill="#FFD042" stroke="none" rx="1"/>
    </svg>`
  },

  // 06: WORKER LINK — DIGITAL PLATFORM, TRUST-BASED IDENTITY & MOBILE UI (RECENT WORK — FIRST ON BRANDING)
  {
    id: 'worker-link-brand-identity',
    service: "Brand Identity & Mobile UI Systems",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Figma","Blender"],
    title: 'Worker Link — Platform Identity & UI',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Mobile UI',
    year: '2026',
    gridRef: 'MOD-06',
    sizeContext: 'Full Scale Interlocked Mark • Mobile UI • 3D Signage • Badges',
    location: 'Addis Ababa, Ethiopia',
    client: 'Worker Link Platform (@worker_link / workerlink.com)',
    scale: 'Comprehensive Digital Product Brand System & UI Architecture',
    medium: 'Geometric Monoline Vector, Teal (#105B72) & Soft Mint (#40989F) Palette, Mobile UI, 3D Signage',
    summary: 'Trust-anchored visual identity and mobile UI connecting families directly with verified domestic professionals.',
    description: 'Worker Link is an innovative digital platform built in Addis Ababa to connect families directly, safely, and transparently with verified professional housekeepers—eliminating predatory brokers. The visual identity embodies this core mission: removing the middleman so two people are directly joined. The logo forms an interlocking link between two human silhouettes that together create a subtle heart shape, communicating direct connection, safety, warmth, and reliable neighbourly care. Scaled seamlessly across mobile app profile interfaces, real-time push notification widgets, illuminated 3D hanging signage, and digital product touchpoints.',
    challenge: 'Designing a mark that conveys professional security, technical reliability, and digital modernity while exuding approachable domestic warmth and mutual human trust without feeling clinical.',
    solution: 'Engineered an interlocking dual-figure geometry mapped to a strict 45° diagonal construction grid with equal-radius circular terminations, harmonizing deep corporate teal (#105B72) with warm approachable mint (#40989F) to symbolize the two connected parties in balanced equilibrium.',
    deliverables: [
      'Primary Scalable Vector Interlocked Heart Logomark & Wordmark',
      'Geometric Construction Grid & 45° Vector Angle Blueprint Documentation',
      'Repetitive Dynamic Brand Pattern for Digital & Physical Collateral',
      'Mobile Application Profile UI Design & Verified Badge System',
      'Push Notification Center UI & App Launcher Iconography',
      '3D Illuminated Hanging Physical Signage & Mobile Handset Mockups'
    ],
    slides: [
      { 
        url: 'assets/workerlink-slide-01-logo.jpg', 
        caption: 'Slide 01 // Primary Interlocked Vector Logomark (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#FFFFFF' 
      },
      { 
        url: 'assets/workerlink-slide-02-concept.jpg', 
        caption: 'Slide 02 // Geometric Grid Construction & Brand Pattern' 
      },
      { 
        url: 'assets/workerlink-slide-03-ui.jpg', 
        caption: 'Slide 03 // Mobile App Profile UI & Push Notifications' 
      },
      { 
        url: 'assets/workerlink-slide-04-signage.jpg', 
        caption: 'Slide 04 // 3D App Icon & Illuminated Hanging Signage' 
      },
      { 
        url: 'assets/workerlink-slide-05-device.jpg', 
        caption: 'Slide 05 // Illuminated 3D Brand Badge in Dark Context' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 16 L22 24 A4 4 0 0 1 16 30 L10 24 A4 4 0 0 1 16 18 L20 22" stroke="#40989F" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M26 16 L18 24 A4 4 0 0 0 24 30 L30 24 A4 4 0 0 0 24 18 L20 22" stroke="#105B72" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2.5" fill="#40989F"/>
      <circle cx="28" cy="12" r="2.5" fill="#105B72"/>
    </svg>`
  },

  // 07: JORDANO JEMOLE CONSTRUCTION P.L.C — CORPORATE BRAND IDENTITY & SITE SYSTEM
  {
    id: 'jordano-jemole-construction-identity',
    service: "Corporate Brand Identity & Site Safety Graphics",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Adobe InDesign"],
    title: 'Jordano Jemole Construction P.L.C',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Corporate System',
    year: '2026',
    gridRef: 'MOD-07',
    sizeContext: 'Full Scale Monolith Mark • Geometric Frame • High-Vis Gear • Hardhat',
    location: 'Ethiopia (KB CREATIVE Commission)',
    client: 'Jordano Jemole Construction P.L.C',
    scale: 'Corporate Visual Identity Architecture & Civil Construction System',
    medium: 'Monoline Tectonic Geometry, Construction Amber (#F5A623) & Slate Charcoal (#3A3D40), Apparel & Field Gear',
    summary: 'Tectonic brand identity engineering a monolithic column monogram that commands instant authority on heavy civil construction sites.',
    description: 'Jordano Jemole Construction P.L.C is a premier civil engineering and building construction firm. The corporate visual identity anchors the brand\'s market reputation for structural integrity, technical precision, and enduring durability. The primary emblem features a soaring, multi-tiered monolithic tower monogram framed within a bold industrial boundary, symbolizing vertical ascension, structural foundation, and engineering strength. The comprehensive system scales flawlessly from high-visibility safety workwear and site safety hardhats to corporate stationery, contracts, and executive apparel.',
    challenge: 'Designing a heavy-duty identity rugged enough to withstand intense field execution on active construction sites while maintaining polished, sophisticated authority across high-stakes corporate investor meetings and formal architectural dossiers.',
    solution: 'Constructed an architectural monolithic column monogram mapped to equal-angle upward chevrons with high-visibility safety amber (#F5A623) enclosed by an industrial slate grey boundary (#3A3D40), achieving instant 50-meter visibility across high-traffic site conditions and razor-sharp clarity on luxury corporate collateral.',
    deliverables: [
      'Primary Scalable Vector Monolithic Logomark & Wordmark (Full Scale)',
      'Field Safety Hardhat Industrial Graphic Specifications',
      'High-Visibility Site Safety Vest Reflective Patch Embroidery',
      'Corporate Executive Stationery Suite (Letterhead, Business Cards, Envelope)',
      'Staff & Project Manager Embroidered Navy Polo Shirt Suite',
      'Brand Standards Manual, Construction Grid & Color Hierarchy'
    ],
    slides: [
      { 
        url: 'assets/jordano-slide-01-logo.jpg', 
        caption: 'Slide 01 // Primary Monolithic Vector Logomark & Boundary (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#FFFFFF' 
      },
      { 
        url: 'assets/jordano-slide-02-vest.jpg', 
        caption: 'Slide 02 // High-Vis Site Safety Vest with Embroidered Emblem' 
      },
      { 
        url: 'assets/jordano-slide-03-hardhat.jpg', 
        caption: 'Slide 03 // Safety Hardhat on Active Concrete Construction Site' 
      },
      { 
        url: 'assets/jordano-slide-04-stationery.jpg', 
        caption: 'Slide 04 // Executive Corporate Stationery & Duplex Cards' 
      },
      { 
        url: 'assets/jordano-slide-05-polo.jpg', 
        caption: 'Slide 05 // Site Management Navy Piqué Polo with Gold Emblem' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="8" y="4" width="24" height="32" stroke="#555555" stroke-width="2" rx="1"/>
      <path d="M16 26 C16 29 24 29 24 26 V12 L20 8 L16 12 Z" fill="#F5A623" stroke="#F5A623"/>
      <path d="M12 24 C12 30 28 30 28 24" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },

  // 08: TILET FASHION (ጥለት ፋሽን) — BRAND IDENTITY & FASHION BOUTIQUE (REAL PROJECT — BOLE CENTURY MALL)
  {
    id: 'tilet-fashion-brand-identity',
    service: "Haute Couture Brand Identity & Retail Packaging",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Adobe InDesign"],
    title: 'Tilet Fashion (ጥለት ፋሽን)',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Fashion Design',
    year: '2025',
    gridRef: 'MOD-08',
    sizeContext: 'Full Scale Royal Emblem • Ge\'ez Typography • Bole Century Mall Storefront',
    location: 'Bole Century Mall, Addis Ababa, Ethiopia',
    client: 'Tilet Fashion (ጥለት ፋሽን) Haute Couture',
    scale: 'Flagship Luxury Boutique Identity & Packaging Suite',
    medium: 'Custom Ge\'ez Wordmark, Obsidian (#0A0A0A) & Crimson Red (#D32F2F) Palette, Storefront Glazing, Duplex Cards',
    summary: 'Haute couture brand identity transforming traditional Ethiopian collar embroidery into an imperial geometric emblem.',
    description: 'Tilet Fashion (ጥለት ፋሽን) is an upscale contemporary couture fashion house at Bole Century Mall, specializing in luxury handcrafted Habesha Kemis and tailored woven wear. The visual identity transforms the iconic Ethiopian "Tilet" collar embroidery into an imperial geometric emblem, paired with bespoke geometric Ge\'ez typography. The identity was applied across the flagship boutique window storefront, luxury matte black retail bags with crimson rope handles, executive duplex business cards, and debossed 3D wall signage.',
    challenge: 'Reimagining the sacred, deeply rooted traditional Ethiopian handwoven Tilet embroidery patterns into a clean, modern luxury emblem that commands prestige on high-end boutique storefronts while remaining instantly recognizable to traditional fashion patrons.',
    solution: 'Designed an imperial diamond collar emblem pairing a dynamic curved collar arc with a diamond jewel base in high-contrast crimson red on pitch black, supported by custom-drawn architectural Amharic letterforms for "ጥለት ፋሽን".',
    deliverables: [
      'Primary Scalable Royal Emblem & Ge\'ez Calligraphic Mark',
      'Flagship Boutique Storefront Glazing & Architectural Facade Display',
      'Luxury Matte Black Retail Shopping Bags with Crimson Rope Handles',
      'Executive Duplex Business Cards (Black & White Variants)',
      'Debossed 3D Architectural Wall Signage Box',
      'Boutique Packaging Specifications & Brand Standards'
    ],
    slides: [
      { 
        url: 'assets/tilet-slide-01-logo.jpg', 
        caption: 'Slide 01 // Royal Diamond Collar Emblem & Ge\'ez Mark (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#000000' 
      },
      { 
        url: 'assets/tilet-slide-02-storefront.jpg', 
        caption: 'Slide 02 // Flagship Storefront Window & Mannequin Display' 
      },
      { 
        url: 'assets/tilet-slide-03-packaging.jpg', 
        caption: 'Slide 03 // Luxury Matte Black Retail Bag with Crimson Handles' 
      },
      { 
        url: 'assets/tilet-slide-04-cards.jpg', 
        caption: 'Slide 04 // Executive Duplex Business Cards in Black & White' 
      },
      { 
        url: 'assets/tilet-slide-05-signage.jpg', 
        caption: 'Slide 05 // Debossed 3D Architectural Wall Signage Box' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 10 C16 14 24 14 28 10 C26 18 14 18 12 10z" fill="#D32F2F" stroke="#D32F2F"/>
      <polygon points="20,18 28,26 20,34 12,26" fill="#D32F2F" stroke="#D32F2F"/>
    </svg>`
  },

  // 09: BEGO MEAZA MEDIA — BRAND IDENTITY & LOGO DESIGN (REAL PROJECT — KB CREATIVE COMMISSION)
  {
    id: 'bego-meaza-media-identity',
    service: "Broadcast Media Identity & Digital Systems",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Blender"],
    title: 'Bego Meaza Media',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Logo Design',
    year: '2024',
    gridRef: 'MOD-09',
    sizeContext: 'Full Brand Architecture • Monogram Mark • Environmental Signage • App Icon',
    location: 'Ethiopia (KB CREATIVE Commission)',
    client: 'Bego Meaza Media',
    scale: 'Complete Visual Brand Architecture & Multi-Platform Identity',
    medium: 'Geometric Logomark, Black × Red × White Palette, Signage Mockups, UI Application',
    summary: 'Dynamic broadcast media identity fusing an energetic monogram with forward-motion play symbolism.',
    description: 'Bego Meaza Media required a bold, high-memorability corporate identity to anchor their media brand across digital and physical touchpoints. The logomark fuses a stylized letter "B" with an integrated play button symbol — a seamless visual metaphor for media flow and forward progress. Delivered across business cards, environmental 3D signage, mobile app icon, and brand construction grid.',
    challenge: 'Creating a single logomark that communicates both media entertainment and professional credibility across scales — from a 16px app icon to a large-format 3D wall installation.',
    solution: 'Designed a monoline geometric "B + Play" symbol using a strict geometric grid with equal stroke weights, ensuring perfect legibility at all sizes and contrast on both light and dark surfaces.',
    deliverables: ['Primary Logomark & Symbol System', '3D Environmental Wall Signage Mockup', 'Business Card Light & Dark Variants', 'Mobile App Icon Design', 'Brand Color Palette (Black · Red · White)', 'Geometric Construction Grid Documentation'],
    slides: [
      { 
        url: 'assets/bego-meaza-slide-03.jpg', 
        caption: 'Slide 01 // Primary "B + Play" Monogram Vector on White (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#FFFFFF' 
      },
      { 
        url: 'assets/bego-meaza-slide-01.jpg', 
        caption: 'Slide 02 // 3D Concept Model & Dynamic Media Motion' 
      },
      { 
        url: 'assets/bego-meaza-slide-02.jpg', 
        caption: 'Slide 03 // Business Card Light & Dark Executive Variants' 
      },
      { 
        url: 'assets/bego-meaza-slide-04.jpg', 
        caption: 'Slide 04 // Environmental Signage, App Icon & Color Palette' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 8 C12 8 12 20 12 26 C12 31 16 34 20 34 C24 34 28 31 28 26 L28 20" stroke="#FFD042" stroke-linecap="round"/>
      <polygon points="18,13 30,20 18,27" stroke="#FFFFFF" fill="none"/>
    </svg>`
  },

  // 10: MESOB MEALS — BRAND IDENTITY, FOOD PACKAGING & DELIVERY SYSTEM (REAL PROJECT)
  {
    id: 'mesob-meals-brand-identity',
    service: "Culinary Brand Identity & Packaging Ecosystem",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Adobe InDesign"],
    title: 'Mesob Meals',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Packaging Design',
    year: '2025',
    gridRef: 'MOD-10',
    sizeContext: 'Full Scale Cultural Mark • Eco Packaging • Courier Fleet Gear • Apparel',
    location: 'Ethiopia (KB CREATIVE Commission)',
    client: 'Mesob Meals Food Delivery Service',
    scale: 'Comprehensive Hospitality & Delivery Visual Ecosystem',
    medium: 'Cultural Heritage Monogram, Emerald (#083B32) & Warm Ochre (#F4A71D) Palette, Food Packaging, Uniform Embroidery',
    summary: 'Modernist culinary brand identity distilling the iconic woven mesob into a clean cultural monogram.',
    description: 'Mesob Meals is an Ethiopian food delivery platform celebrating authentic culinary heritage with modern logistical speed. The identity centers on a minimalist geometric silhouette of the traditional handwoven "Mesob" (symbolizing community, hospitality, and communal dining) crowned with a modern warm ochre lid and a clean arching base. The brand ecosystem spans compostable meal container bands, kraft paper takeout bags, embroidered kitchen aprons, and weather-resistant insulated courier transit boxes.',
    challenge: 'Reinventing an ancient, highly ornate traditional cultural artifact (the Mesob basket) into a clean, modern, scalable vector mark that prints crisply on small meal container labels while looking commanding on courier delivery gear across busy city streets.',
    solution: 'Distilled the complex wickerwork of the traditional mesob into bold, pure geometric planes — pairing deep Ethiopian forest emerald green (#083B32) with warm sunlit ochre (#F4A71D) and pure white accents for maximum street-level visibility and appetizing warmth.',
    deliverables: [
      'Primary Scalable Vector Logo Mark & Cultural Monogram',
      'Food Container Labeling & Tamper-Evident Safety Bands',
      'Eco-Friendly Kraft Takeout Bag Graphics',
      'High-Visibility Insulated Courier Transit Bags',
      'Chef & Kitchen Staff Embroidered Uniform Apparel',
      'Brand Color Palette & Cultural Typography Guidelines'
    ],
    slides: [
      { 
        url: 'assets/mesob-slide-01-logo.jpg', 
        caption: 'Slide 01 // Cultural Mesob Monogram Vector on Emerald (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#083B32' 
      },
      { 
        url: 'assets/mesob-slide-02-packaging.jpg', 
        caption: 'Slide 02 // Eco-Friendly Food Packaging & Kraft Takeout Bags' 
      },
      { 
        url: 'assets/mesob-slide-03-delivery.jpg', 
        caption: 'Slide 03 // Courier Delivery Fleet Uniform & Handheld Transit Box' 
      },
      { 
        url: 'assets/mesob-slide-04-bag.jpg', 
        caption: 'Slide 04 // Insulated Thermal Courier Transit Backpack' 
      },
      { 
        url: 'assets/mesob-slide-05-apron.jpg', 
        caption: 'Slide 05 // Executive Chef & Kitchen Apron with Gold Embroidery' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 28h20c0 4-4 6-10 6s-10-2-10-6z" fill="#083B32" stroke="#FFD042" />
      <path d="M12 28 C12 18 16 14 20 14 C24 14 28 18 28 28" stroke="#FFFFFF" />
      <rect x="17" y="8" width="6" height="6" rx="1" stroke="#FFD042" fill="#FFD042" />
    </svg>`
  },

  // 11: DANU STORE — BRAND IDENTITY, RETAIL STOREFRONT & MERCHANDISE SYSTEM (REAL PROJECT — BOLE ROAD)
  {
    id: 'danu-store-brand-identity',
    service: "Retail Brand Identity & Environmental Storefront",
    role: "Lead Brand Identity Designer & Creative Director (Kaleegziabher Fekede • KB CREATIVE)",
    software: ["Adobe Illustrator","Adobe Photoshop","Blender","Adobe InDesign"],
    title: 'Danu Store',
    practice: 'graphic',
    subCategory: 'identity',
    practiceLabel: 'Brand Identity & Retail Design',
    year: '2025',
    gridRef: 'MOD-11',
    sizeContext: 'Full Scale Cart Monogram • Bole Road Storefront • Merchandise Suite',
    location: 'Bole Road, Addis Ababa, Ethiopia',
    client: 'Danu Store Retail & E-Commerce',
    scale: 'Flagship Retail Brand Architecture & Environmental Identity',
    medium: 'Shopping Cart Monogram, Obsidian (#000000) & Electric Yellow (#FFD042) Palette, Storefront Signage, Merchandise',
    summary: 'Contemporary retail brand identity marrying an iconic shopping cart monogram with luxury store architecture.',
    description: 'Danu Store is a contemporary retail and lifestyle brand on Bole Road, Addis Ababa. The visual identity transforms the lowercase letter "d" into a fluid shopping cart monogram with two distinct wheel anchor points, signifying momentum, convenience, and curated commerce. The identity was executed across the architectural flagship storefront with 3D illuminated exterior signage, staff barista/clerk aprons and embroidered polos, heavyweight canvas eco-totes, luxury matte black retail rope bags, and gold-foiled executive business cards.',
    challenge: 'Engineering a minimalist monogram that functions simultaneously as a legible lowercase "d" and a shopping cart, commanding high street visibility on illuminated night facades while maintaining prestige on luxury retail print collateral.',
    solution: 'Designed a high-contrast monoline geometry in electric yellow against obsidian black, featuring calibrated circular wheel proportions and an upward sweeping stem that provides instant recall across digital app icons and physical boutique architecture.',
    deliverables: [
      'Primary Scalable Vector Logo Mark & Shopping Cart Monogram',
      'Flagship Architectural Storefront Facade & 3D Illuminated Signage',
      'Staff Uniform Apparel Suite (Embroidered Aprons, Polos, Caps)',
      'Heavyweight Canvas Eco-Tote Bag with Golden Monogram',
      'Luxury Matte Black Retail Rope-Handle Shopping Bags',
      'Executive Gold Foil Business Cards (Plot 101, Bole Road)'
    ],
    slides: [
      { 
        url: 'assets/danu-slide-01-logo.jpg', 
        caption: 'Slide 01 // Shopping Cart Monogram Vector on Black (Full Scale 1:1)', 
        fit: 'contain', 
        bg: '#000000' 
      },
      { 
        url: 'assets/danu-slide-02-storefront.jpg', 
        caption: 'Slide 02 // Flagship Bole Road Facade with 3D Illuminated Signage' 
      },
      { 
        url: 'assets/danu-slide-03-merchandise.jpg', 
        caption: 'Slide 03 // Staff Merchandise Flatlay — Polos, Aprons & Caps' 
      },
      { 
        url: 'assets/danu-slide-04-totebag.jpg', 
        caption: 'Slide 04 // Heavyweight Canvas Eco-Tote with Golden Monogram' 
      },
      { 
        url: 'assets/danu-slide-05-collateral.jpg', 
        caption: 'Slide 05 // Luxury Matte Black Retail Bag & Gold-Foil Cards' 
      }
    ],
    iconSvg: `<svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 24a5 5 0 1 1 0-10 5 5 0 0 1 5 5v12" stroke="#FFD042" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="15" cy="30" r="2.5" fill="#FFD042"/>
      <circle cx="23" cy="30" r="2.5" fill="#FFD042"/>
    </svg>`
  }
];

// Active slide tracking index for each project card
const projectSlideIndexes = {};

/* ==========================================================================
   2. Theme Switcher Engine (STRICTLY LIGHT & DARK ONLY)
   ========================================================================== */
function initThemeEngine() {
  const themeButtons = document.querySelectorAll('.theme-opt-btn');
  const storedTheme = localStorage.getItem('kb_theme') || 'light';
  
  // Enforce light or dark only
  const activeTheme = (storedTheme === 'dark') ? 'dark' : 'light';
  applyTheme(activeTheme);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-theme-choice');
      const safeTheme = (selected === 'dark') ? 'dark' : 'light';
      applyTheme(safeTheme);
      localStorage.setItem('kb_theme', safeTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeButtons.forEach(b => {
      if (b.getAttribute('data-theme-choice') === theme) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   3. BIG.dk Project Grid with Enhanced "Size Context" Hover Effect
   ========================================================================== */
function initProjectsArchive() {
  const container = document.getElementById('big-projects-container');
  const practicePills = document.querySelectorAll('.practice-pill');
  const subPills = document.querySelectorAll('.sub-pill');
  const projectCountEl = document.getElementById('archive-count');

  if (!container) return;

  // Initialize slide tracking index to 0 for all projects
  KB_PROJECTS.forEach(p => {
    projectSlideIndexes[p.id] = 0;
  });

  let activePractice = 'all';
  let activeSubCategory = 'all';

  render();

  practicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      practicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activePractice = pill.getAttribute('data-practice');
      activeSubCategory = 'all';
      subPills.forEach(sp => sp.classList.remove('active'));
      subPills[0]?.classList.add('active');
      render();
    });
  });

  subPills.forEach(sp => {
    sp.addEventListener('click', () => {
      subPills.forEach(s => s.classList.remove('active'));
      sp.classList.add('active');
      activeSubCategory = sp.getAttribute('data-sub');
      render();
    });
  });

  function render() {
    let filtered = KB_PROJECTS;

    if (activePractice !== 'all') {
      filtered = filtered.filter(p => p.practice === activePractice);
    }

    if (activeSubCategory !== 'all') {
      filtered = filtered.filter(p => p.subCategory === activeSubCategory);
    }

    if (projectCountEl) {
      projectCountEl.textContent = `INDEX // Showing ${filtered.length} of ${KB_PROJECTS.length} Works`;
    }

    container.innerHTML = filtered.map((item, cardIndex) => {
      const currentIdx = projectSlideIndexes[item.id] || 0;
      const currentSlide = item.slides[currentIdx] || item.slides[0];
      const totalSlides = item.slides.length;

      return `
      <!-- SIMPLIFIED PROJECT CARD: [${item.gridRef}] -->
      <article class="big-project-card simplified-project-card" data-id="${item.id}" id="card-${item.id}" onmouseenter="startCardAutoSlide('${item.id}')" onmouseleave="stopCardAutoSlide('${item.id}')">
        <!-- 3D Specular Glare Overlay -->
        <div class="card-glare-overlay"></div>

        <!-- Media Carousel with Exposed Multi-Slide Controls -->
        <div class="carousel-media-wrap" onclick="openCaseStudy('${item.id}')" title="Click to open case study">
          <img src="${currentSlide.url}" alt="${item.title}" class="carousel-slide-img" id="img-${item.id}" loading="lazy" style="${currentSlide.fit === 'contain' ? `object-fit: contain; background: ${currentSlide.bg || '#041B2B'};`: ''}">
          
          <!-- Architectural Showcase Hover Overlay -->
          <div class="big-hover-scrim">
            <div class="big-hover-content">
              <span class="big-hover-discipline font-mono">${(item.service || item.practiceLabel).toUpperCase()}</span>
              <h4 class="big-hover-heading">${item.title}</h4>
              <div class="big-hover-action-wrap">
                <span class="big-hover-btn font-mono">VIEW CASE STUDY ↗</span>
                <span class="big-hover-slide-caption font-mono" id="caption-${item.id}">${currentSlide.caption}</span>
              </div>
            </div>
          </div>

          <!-- Slide Counter Badge (01 / 05) -->
          <span class="slide-counter-badge font-mono" id="counter-${item.id}">0${currentIdx + 1} / 0${totalSlides}</span>

          <!-- In-Card Slide Navigation Arrows -->
          <button type="button" class="slide-arrow-btn slide-arrow-prev" onclick="changeSlide(event, '${item.id}', -1)" aria-label="Previous view">‹</button>
          <button type="button" class="slide-arrow-btn slide-arrow-next" onclick="changeSlide(event, '${item.id}', 1)" aria-label="Next view">›</button>

          <!-- Slide Indicator Dots -->
          <div class="slide-dots-indicator" onclick="event.stopPropagation()">
            ${item.slides.map((s, idx) => `
              <span class="slide-dot ${idx === currentIdx ? 'active' : ''}" onclick="goToSlide(event, '${item.id}', ${idx})" title="View ${idx + 1}"></span>
            `).join('')}
          </div>
        </div>
        
        <!-- Simplified Card Body: Strictly Project Name, Location, Year, Service, Short Summary & View Case Study Button -->
        <div class="simplified-card-body">
          <div class="card-service-row">
            <span class="card-service-tag font-mono">${item.service || item.practiceLabel}</span>
            <span class="card-perspectives-pill font-mono">${totalSlides} Perspectives</span>
          </div>

          <h3 class="simplified-card-title" onclick="openCaseStudy('${item.id}')">${item.title}</h3>

          <div class="simplified-card-meta font-mono">
            <span class="card-meta-location">${item.location}</span>
            <span class="text-gold">•</span>
            <span class="card-meta-year text-gold">${item.year}</span>
          </div>

          <p class="simplified-card-summary">${item.summary}</p>

          <div class="simplified-card-action">
            <button type="button" class="btn-card-view-case-study" onclick="openCaseStudy('${item.id}')" aria-label="View Case Study for ${item.title}">
              <span>View Case Study</span>
              <span class="case-study-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </article>
      `;
    }).join('');

    // Rebind moveable tilt animations to newly rendered cards
    initMoveableCardTilt();
  }
}

// Auto-slide hover timers
const cardSlideIntervals = {};
const cardResetTimeouts = {};

window.startCardAutoSlide = function(projectId) {
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (!project || project.slides.length <= 1) return;

  if (cardResetTimeouts[projectId]) {
    clearTimeout(cardResetTimeouts[projectId]);
    delete cardResetTimeouts[projectId];
  }

  if (cardSlideIntervals[projectId]) {
    clearInterval(cardSlideIntervals[projectId]);
  }

  // Smoothly auto-advance slides while hovered every 1750ms
  cardSlideIntervals[projectId] = setInterval(() => {
    const total = project.slides.length;
    let current = projectSlideIndexes[projectId] || 0;
    current = (current + 1) % total;
    projectSlideIndexes[projectId] = current;
    updateCardSlide(project, current);
  }, 1750);
};

window.stopCardAutoSlide = function(projectId) {
  if (cardSlideIntervals[projectId]) {
    clearInterval(cardSlideIntervals[projectId]);
    delete cardSlideIntervals[projectId];
  }

  // Smoothly return to the primary hero perspective / logo on mouse leave
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (project) {
    cardResetTimeouts[projectId] = setTimeout(() => {
      if (!cardSlideIntervals[projectId] && (projectSlideIndexes[projectId] || 0) !== 0) {
        projectSlideIndexes[projectId] = 0;
        updateCardSlide(project, 0);
      }
    }, 400);
  }
};

// In-card Slide controls
window.changeSlide = function(e, projectId, direction) {
  e.stopPropagation();
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  // Reset auto-slide timer so user gets full duration on clicked slide
  if (cardSlideIntervals[projectId]) {
    startCardAutoSlide(projectId);
  }

  const total = project.slides.length;
  let current = projectSlideIndexes[projectId] || 0;
  current = (current + direction + total) % total;
  projectSlideIndexes[projectId] = current;

  updateCardSlide(project, current);
};

window.goToSlide = function(e, projectId, index) {
  e.stopPropagation();
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  if (cardSlideIntervals[projectId]) {
    startCardAutoSlide(projectId);
  }

  projectSlideIndexes[projectId] = index;
  updateCardSlide(project, index);
};

function updateCardSlide(project, index) {
  const imgEl = document.getElementById(`img-${project.id}`);
  const cardEl = document.getElementById(`card-${project.id}`);
  const counterEl = document.getElementById(`counter-${project.id}`);
  const captionEl = document.getElementById(`caption-${project.id}`);

  if (!imgEl || !cardEl) return;

  const slide = project.slides[index];

  // Architectural Fade-Up Project Slide Transition
  imgEl.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 1, 1), transform 0.2s cubic-bezier(0.4, 0, 1, 1)';
  imgEl.style.opacity = '0.05';
  imgEl.style.transform = 'translateY(16px) scale(0.985)';

  setTimeout(() => {
    imgEl.src = slide.url;
    if (slide.fit === 'contain') {
      imgEl.style.objectFit = 'contain';
      imgEl.style.background = slide.bg || '#041B2B';
    } else {
      imgEl.style.objectFit = 'cover';
      imgEl.style.background = '';
    }

    requestAnimationFrame(() => {
      imgEl.style.transition = 'opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1), transform 0.48s cubic-bezier(0.16, 1, 0.3, 1)';
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'translateY(0) scale(1)';
    });
  }, 120);

  // Update Slide Counter (e.g. 02 / 05) with fade-up micro-tick
  if (counterEl) {
    const total = project.slides.length;
    counterEl.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    counterEl.style.opacity = '0.2';
    counterEl.style.transform = 'translateY(4px)';
    setTimeout(() => {
      counterEl.textContent = `0${index + 1} / 0${total}`;
      counterEl.style.opacity = '1';
      counterEl.style.transform = 'translateY(0)';
    }, 90);
  }

  // Update Slide Caption inside hover overlay with synchronized fade-up
  if (captionEl) {
    captionEl.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    captionEl.style.opacity = '0.1';
    captionEl.style.transform = 'translateY(8px)';

    setTimeout(() => {
      captionEl.textContent = slide.caption;
      captionEl.style.transition = 'opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)';
      captionEl.style.opacity = '1';
      captionEl.style.transform = 'translateY(0)';
    }, 110);
  }

  // Update dots smoothly
  const dots = cardEl.querySelectorAll('.slide-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

/* ==========================================================================
   4. 3D Website Style: Moveable Card Tilt & Specular Glare Micro-Interactions
   ========================================================================== */
function initMoveableCardTilt() {
  // Mobile touch optimization: preserve 60fps scrolling on touch screens
  const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
  if (isTouch) return;

  const cards = document.querySelectorAll('.big-project-card, .hero-emblem-card, .spline-identity-panel');

  cards.forEach(card => {
    if (card._tiltAttached) return;
    card._tiltAttached = true;

    const glare = card.querySelector('.card-glare-overlay');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle architectural 3D tilt (max 3.2 degrees)
      const rotateX = ((y - centerY) / centerY) * -3.2;
      const rotateY = ((x - centerX) / centerX) * 3.2;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

      // Dynamic Specular Glare Reflection tracking cursor
      if (glare) {
        const glareX = Math.round((x / rect.width) * 100);
        const glareY = Math.round((y / rect.height) * 100);
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (glare) {
        glare.style.background = '';
      }
    });
  });
}

/* ==========================================================================
   5. Devani-Style Core Skills Interactive Animations & Count-Up Engine
   ========================================================================== */
function initSkillsAnimation() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const skillBars = document.querySelectorAll('.skill-progress-fill');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateAllBars();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);

  function animateAllBars() {
    skillBars.forEach(bar => {
      const targetPercent = parseInt(bar.getAttribute('data-percent'), 10) || 0;
      const countEl = bar.closest('.skill-progress-row')?.querySelector('.skill-percent-number');

      // Expand progress bar width
      bar.style.width = `${targetPercent}%`;

      // Animate percentage count-up
      if (countEl) {
        let current = 0;
        const stepTime = Math.max(10, Math.floor(1200 / targetPercent));
        const timer = setInterval(() => {
          current += 1;
          countEl.textContent = `${current}%`;
          if (current >= targetPercent) {
            countEl.textContent = `${targetPercent}%`;
            clearInterval(timer);
          }
        }, stepTime);
      }
    });
  }
}

/* ==========================================================================
   6. Modal Case Study Viewer with Multi-View High-Resolution Gallery
   ========================================================================== */
function initCaseModal() {
  const overlay = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('case-modal-close');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudy);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCaseStudy();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeCaseStudy();
    }
  });
}

window.openCaseStudy = function(projectId) {
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('case-study-modal');
  const body = document.getElementById('case-modal-body');

  document.getElementById('modal-project-title').textContent = project.title;
  document.getElementById('modal-practice-tag').textContent = `${project.service || project.practiceLabel} // 4TH YEAR ARCHITECTURE • WOLKITE UNIVERSITY [${project.gridRef}]`;

  const softwareList = Array.isArray(project.software) ? project.software : [project.medium];

  body.innerHTML = `
    <!-- Case Study Header Meta -->
    <div class="modal-header-meta font-mono">
      <div class="meta-item">
        <span class="meta-label">LOCATION:</span>
        <span class="meta-value">${project.location}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">YEAR:</span>
        <span class="meta-value text-gold">${project.year}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">SERVICE:</span>
        <span class="meta-value">${project.service || project.practiceLabel}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">CLIENT / COMMISSION:</span>
        <span class="meta-value">${project.client}</span>
      </div>
    </div>

    <!-- 01 // YOUR ROLE & ATTRIBUTION -->
    <div class="modal-role-banner">
      <div class="modal-block-tag font-mono">01 // YOUR ROLE &amp; ATTRIBUTION</div>
      <div class="modal-role-content">
        <div class="role-icon-badge" aria-hidden="true">★</div>
        <div>
          <div class="modal-role-title">${project.role}</div>
          <div class="modal-role-subtitle font-mono">Department of Architecture, Wolkite University • Studio KB CREATIVE</div>
        </div>
      </div>
    </div>

    <!-- 02 // SOFTWARE & DIGITAL TOOLS USED -->
    <div class="modal-software-section">
      <div class="modal-block-tag font-mono">02 // SOFTWARE &amp; DIGITAL TOOLS USED</div>
      <div class="modal-software-pills">
        ${softwareList.map(sw => `<span class="software-pill font-mono">${sw}</span>`).join('')}
      </div>
    </div>

    <!-- 03 // FINAL IMAGES & ARCHITECTURAL DRAWINGS (Full Proportional Gallery) -->
    <div class="modal-gallery-section" style="margin-bottom: 2rem;">
      <div class="modal-block-tag font-mono">03 // FINAL IMAGES &amp; ARCHITECTURAL DRAWINGS (${project.slides.length} MULTI-VIEW PERSPECTIVES)</div>
      <div class="modal-hero-viewport" style="background: ${project.slides[0].bg || '#02121D'};">
        <img src="${project.slides[0].url}" alt="${project.title}" id="modal-active-img" style="object-fit: contain;">
        <span class="modal-scale-indicator font-mono">📐 FULL SCALE • PROPORTIONAL VIEW</span>
        <div class="modal-slide-caption-bar font-mono" id="modal-active-caption">
          ${project.slides[0].caption}
        </div>
      </div>

      <!-- Multi-Perspective Thumbnail Strip -->
      <div class="modal-thumbnail-strip">
        ${project.slides.map((s, idx) => `
          <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="selectModalSlide('${s.url}', '${s.caption.replace(/'/g, "\\'")}', this, '${s.fit || ''}', '${s.bg || ''}')" title="${s.caption}">
            <img src="${s.url}" alt="${s.caption}" style="${s.fit === 'contain' ? `object-fit: contain; background: ${s.bg || '#02121D'};`: ''}">
            <span class="modal-thumb-number font-mono">0${idx + 1}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- 04 & 05 // CHALLENGE & SOLUTION SPLIT CARDS -->
    <div class="modal-challenge-solution-grid">
      <!-- 04 // CHALLENGE -->
      <div class="modal-challenge-card">
        <div class="cs-card-header font-mono">
          <span class="cs-badge cs-challenge-badge">04 // CHALLENGE</span>
          <span class="cs-header-title">The Design Problem</span>
        </div>
        <p class="cs-body-text">${project.challenge}</p>
      </div>

      <!-- 05 // SOLUTION -->
      <div class="modal-solution-card">
        <div class="cs-card-header font-mono">
          <span class="cs-badge cs-solution-badge">05 // SOLUTION</span>
          <span class="cs-header-title">Engineered Execution</span>
        </div>
        <p class="cs-body-text">${project.solution}</p>
      </div>
    </div>

    <!-- Project Overview Description & Key Deliverables -->
    <div class="modal-details-grid">
      <div class="modal-overview-col">
        <div class="modal-block-tag font-mono">PROJECT OVERVIEW &amp; CONTEXT</div>
        <p class="modal-narrative-p">${project.description}</p>
      </div>
      <div class="modal-deliverables-col">
        <div class="modal-spec-card">
          <div class="modal-block-tag font-mono">KEY DELIVERABLES &amp; DRAWINGS</div>
          <ul class="modal-deliverables-list">
            ${project.deliverables.map(d => `
              <li class="modal-deliverable-item font-mono">
                <span class="text-gold">✓</span> <span>${d}</span>
              </li>
            `).join('')}
          </ul>

          <div class="modal-cta-wrap">
            <a href="https://t.me/Kalegzi_7" target="_blank" rel="noopener" class="btn-brand-yellow modal-cta-btn">
              <span>Initiate Collaboration (KB CREATIVE)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.selectModalSlide = function(url, caption, btnEl, fit, bg) {
  const heroImg = document.getElementById('modal-active-img');
  const captionEl = document.getElementById('modal-active-caption');
  const viewport = heroImg ? heroImg.closest('.modal-hero-viewport') : null;
  
  if (heroImg) {
    heroImg.style.opacity = '0.35';
    setTimeout(() => {
      heroImg.src = url;
      if (viewport) {
        viewport.style.background = bg || '#02121D';
      }
      heroImg.style.objectFit = 'contain';
      heroImg.style.opacity = '1';
    }, 100);
  }

  if (captionEl) {
    captionEl.textContent = caption;
  }

  // Update active thumbnail border
  const buttons = document.querySelectorAll('.modal-thumb-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
};

window.closeCaseStudy = function() {
  const overlay = document.getElementById('case-study-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   7. Contemporary Pop-Up Toast Feedback Notifications System
   ========================================================================== */
window.showToast = function(title, message, iconChar = '✓') {
  const container = document.getElementById('kb-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'kb-toast';
  toast.setAttribute('role', 'alert');

  toast.innerHTML = `
    <div class="kb-toast-icon">${iconChar}</div>
    <div class="kb-toast-body">
      <div class="kb-toast-title font-mono">${title}</div>
      <div class="kb-toast-message">${message}</div>
    </div>
    <div class="kb-toast-progress"></div>
  `;

  toast.addEventListener('click', () => {
    dismissToast(toast);
  });

  container.appendChild(toast);

  // Trigger smooth 3D pop-up entrance animation
  requestAnimationFrame(() => {
    toast.classList.add('active');
  });

  // Auto-dismiss after 4 seconds
  const autoTimer = setTimeout(() => {
    dismissToast(toast);
  }, 4000);

  function dismissToast(el) {
    clearTimeout(autoTimer);
    el.classList.remove('active');
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 380);
  }
};
