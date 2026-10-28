/**
 * ============================================================================
 * 🏢 KALEEGZIABHER FEKEDE // ARCHITECTURAL DESIGNER & CREATIVE DIRECTOR
 * 🌟 KB CREATIVE — Spatial Architecture, 3D CGI Visualization & Brand Systems
 * Contact: kaleabjr22@gmail.com • +251 941263180
 * ============================================================================
 */

// Reset scroll to top on reload, unless anchor hash is provided
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});

function safeRun(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[KB CREATIVE] Error initializing ${name}:`, err);
  }
}

function handleHashScroll(hash) {
  const target = document.querySelector(hash);
  if (target) {
    const headerOffset = 70;
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }
}

function initHashNavigationHandler() {
  if (window.location.hash) {
    setTimeout(() => {
      handleHashScroll(window.location.hash);
    }, 120);
  }
}

// Fast, perfect jump to contact section on button click
function initContactNavHandler() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href$="#contact"], a[href="#contact"]');
    if (!link) return;
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      // Instantly reveal all elements in the contact section
      contactSec.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-revealed');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
      const headerOffset = 68;
      const targetY = contactSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  });
}

/* ==========================================================================
   1. Projects Database (7 Curated Works in Residential, Interior, Commercial,
      Construction, and Brand & Identity)
   ========================================================================== */
const KB_PROJECTS = [
  // MOD-01: G+2 FAMILY RESIDENCE
  {
    "id": "kara-g2-family-residence",
    "service": "G+2+Terrace Residential Architecture & Daylight Simulation",
    "role": "Lead Architectural Designer & 3D Visualizer (KB CREATIVE)",
    "software": [
      "Autodesk Revit",
      "D5 Render",
      "AutoCAD",
      "Adobe Photoshop"
    ],
    "title": "G+2 Family Residence",
    "practice": "architecture",
    "subCategory": "residential",
    "practiceLabel": "Residential Architecture & CGI",
    "year": "2026",
    "gridRef": "MOD-01",
    "sizeContext": "Kara, Addis Ababa | 250 m² Plot • G+2+Terrace • 10 Multi-View Perspectives & Floor Plans",
    "location": "Kara, Addis Ababa | 250 m² Plot",
    "client": "Private Family Residence Commission",
    "scale": "G+2 + Rooftop Terrace (250 m² Plot, 480 m² Gross Built Area)",
    "medium": "Reinforced Concrete Frame, Ribbed Architectural Fins, Low-E High-Span Glazing & D5 Atmospheric Simulation",
    "summary": "A contemporary G+2 family residence designed to provide a balanced relationship between family living, privacy, natural light, ventilation, outdoor space and efficient circulation.",
    "description": "A contemporary G+2 family residence designed to provide a balanced relationship between family living, privacy, natural light, ventilation, outdoor space and efficient circulation. The proposal organizes the house into a clear hierarchy of public, semi-private, private and service spaces, while responding to the site's orientation, slope and urban context. Spanning across 10 comprehensive perspectives and architectural drawings: from sunlit living lounges with traditional Ethiopian coffee ceremony corners to a sacred private prayer sanctuary (Tselot Bet), open island kitchen, master bedroom retreat, executive study office, landscaped rooftop terrace, and technical multi-level floor plans.",
    "challenge": "Organizing a multi-generational family home into an intuitive hierarchy of public reception, private sleeping sanctuaries, and dedicated spiritual prayer spaces on a dense 250 m² Kara plot with optimal daylight and cross-ventilation.",
    "solution": "Designed a vertical zoning sequence with compact structural footprint, cantilevered balconies for solar shading, acoustic isolation for the private prayer and study quarters, and generous floor-to-ceiling glazing opening to landscaped outdoor terraces.",
    "deliverables": [
      "Complete Architectural Planning & Spatial Hierarchy (Public, Semi-Private, Private & Service Zones)",
      "Technical Multi-Level Architectural Floor Plans & Site Circulation Layout (1:1 Proportional Plan)",
      "9 Photorealistic CGI Perspectives (Daylight, Twilight, Living, Kitchen, Bath, Prayer Room, Master Suite, Office & Foyer)",
      "Traditional Ethiopian Spiritual Prayer Room (Tselot Bet) with Illuminated Cross Ceiling & Begena Display",
      "Master Bedroom Retreat with Integrated Fluted Wood Study & Minimalist Headboard",
      "Executive Home Office Studio & Architectural Library with Mesh Detailing",
      "Entrance Foyer with Custom Integrated Millwork Bench & Dressing Storage",
      "BIM Documentation & Construction Detailing in Autodesk Revit & D5 Render"
    ],
    "slides": [
      {
        "url": "assets/kara-residence-slide-01-day.jpg",
        "caption": "Slide 01 // Daylight Exterior Facade, Perimeter Architecture & Landscaping (Full Scale 1:1)"
      },
      {
        "url": "assets/kara-residence-slide-02-twilight.jpg",
        "caption": "Slide 02 // Twilight Elevation & Architectural Illumination Study"
      },
      {
        "url": "assets/kara-residence-slide-03-living.jpg",
        "caption": "Slide 03 // Sunlit Family Living Lounge & Traditional Ethiopian Coffee Ceremony Space"
      },
      {
        "url": "assets/kara-residence-slide-04-kitchen.jpg",
        "caption": "Slide 04 // Open-Plan Island Kitchen & Dining Wing with Slatted Timber Screening"
      },
      {
        "url": "assets/kara-residence-slide-05-bath.jpg",
        "caption": "Slide 05 // Master Ensuite Terrazzo Bath & Floating Stone Vanity Detail"
      },
      {
        "url": "assets/kara-residence-slide-06-prayer.jpg",
        "caption": "Slide 06 // Traditional Spiritual Sanctuary & Private Prayer Room (Tselot Bet)"
      },
      {
        "url": "assets/kara-residence-slide-07-bedroom.jpg",
        "caption": "Slide 07 // Master Bedroom Suite with Integrated Study Nook & Ambient Lighting"
      },
      {
        "url": "assets/kara-residence-slide-08-office.jpg",
        "caption": "Slide 08 // Executive Home Office & Architectural Study Studio"
      },
      {
        "url": "assets/kara-residence-slide-09-foyer.jpg",
        "caption": "Slide 09 // Entrance Foyer, Mudroom Bench & Custom Millwork Storage"
      },
      {
        "url": "assets/kara-residence-slide-10-floor-plan.jpg",
        "caption": "Slide 10 // Architectural Floor Plans, Spatial Zoning & Circulation Hierarchy (Technical Drawing 1:1)"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M6 34h28M10 34V16l10-8 10 8v18M14 22h12v12H14z\" stroke=\"#FFD042\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M14 14h12\" stroke=\"#FFD042\" stroke-linecap=\"round\"/>\n    </svg>"
  },

  // MOD-02: ACUTE ENGINEERING — OFFICE RENOVATION
  {
    "id": "acute-engineering-office-renovation",
    "service": "Interior Architecture & Workplace Renovation",
    "role": "Lead Interior Architect & Spatial Designer (KB CREATIVE)",
    "software": [
      "AutoCAD",
      "Rhino 3D",
      "D5 Render",
      "Adobe Photoshop"
    ],
    "title": "Acute Engineering — Office Renovation",
    "practice": "architecture",
    "subCategory": "interior",
    "practiceLabel": "Interior Architecture & Workplace Renovation",
    "year": "2026",
    "gridRef": "MOD-02",
    "sizeContext": "22.6 m² (4.2m × 5.4m) • Steel & Timber Screen • Dual Spatial Zones • Bole Michael",
    "location": "Bole Michael, Addis Ababa, Ethiopia",
    "client": "Acute Engineering",
    "scale": "22.6 m² (4.2m × 5.4m) Executive Office & Consultation Suite",
    "medium": "Steel & Slatted Oak Joinery, Bookmatched Calacatta Marble, Floating Halo LED Rings, Acoustic Carpet",
    "summary": "Transforming a compact 22.6 m² footprint into a dual-zone executive suite through a tectonic steel and timber screen that choreographs arrival, transition, and destination.",
    "description": "A high-precision interior renovation for Acute Engineering located in Bole Michael, Addis Ababa. Within an uncompromising 22.6 m² envelope (4.2m × 5.4m), the open floor was masterfully bifurcated into two distinct programmatic realms: an informal client arrival & meeting lounge, and a commanding formal executive command workstation. A custom-fabricated steel and slatted oak screen serves as the primary dividing element—filtering light, organizing sightlines, and orchestrating a clear sequence of arrival, transition, and destination within a single unified room. The executive desk is backed by a bookmatched Calacatta marble feature slab mounting the 3D illuminated Acute Engineering corporate emblem, framed by bespoke floor-to-ceiling joinery and architectural halo ring lighting.",
    "challenge": "Integrating an executive workstation, formal client consultation zone, and high-density storage within an uncompromising 22.6 m² footprint without visual congestion or spatial claustrophobia.",
    "solution": "Designed an open-framework steel and timber screen that functions simultaneously as a room divider, display vitrine, and acoustic buffer—preserving continuous sightlines and perimeter natural daylight while establishing absolute privacy for executive management.",
    "deliverables": [
      "Spatial Layout & Circulation Zoning Plan (Scale 1:50)",
      "Steel & Slatted Timber Partition Screen Construction Detail",
      "Bookmatched Marble Feature Wall & 3D Logo Integration Spec",
      "Full-Height Storage Joinery & Hidden Wardrobe Millwork",
      "3D Isometric Cutaway & Photorealistic Perspective Visualization Suite"
    ],
    "slides": [
      {
        "url": "assets/office-slide-01-elevation.jpg",
        "caption": "Slide 01 // Executive Workspace & Branded Calacatta Marble Feature Wall (Photorealistic CGI)"
      },
      {
        "url": "assets/office-slide-03-wide.jpg",
        "caption": "Slide 02 // Executive Command Suite, Halo Ring Chandeliers & Fluted Millwork"
      },
      {
        "url": "assets/office-slide-02-isometric.jpg",
        "caption": "Slide 03 // 3D Isometric Cutaway — Dual-Zone Spatial Organization (22.6 m²)"
      },
      {
        "url": "assets/office-slide-04-divider.jpg",
        "caption": "Slide 04 // Steel & Timber Partition Screen — Sequence of Arrival & Transition"
      },
      {
        "url": "assets/office-slide-05-workstation.jpg",
        "caption": "Slide 05 // Workstation Perspective, CAD Drafting Interface & Curated Art"
      },
      {
        "url": "assets/acute-logo.svg",
        "caption": "Slide 06 // Acute Engineering Primary Vector Logo & Corporate Identity Mark (Full Scale)",
        "fit": "contain",
        "bg": "#FFFFFF"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <rect x=\"6\" y=\"8\" width=\"28\" height=\"24\" rx=\"2\" stroke=\"#FFD042\" />\n      <line x1=\"22\" y1=\"8\" x2=\"22\" y2=\"32\" stroke=\"#FFFFFF\" stroke-dasharray=\"2 2\"/>\n      <path d=\"M11 26 L16 14 L21 26\" stroke=\"#1456CC\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M13 22 L19 22\" stroke=\"#E6222E\" stroke-width=\"2\"/>\n      <rect x=\"25\" y=\"14\" width=\"6\" height=\"12\" fill=\"#FFD042\" stroke=\"none\" rx=\"1\"/>\n    </svg>"
  },

  // MOD-03: MIXED-USE TOWER & MENA MALL
  {
    "id": "mixed-use-tower-gubre",
    "service": "Mixed-Use Architecture & Commercial Planning",
    "role": "Lead Architectural Designer & 3D CGI Artist (KB CREATIVE)",
    "software": [
      "AutoCAD",
      "Rhino 3D",
      "D5 Render",
      "Adobe Photoshop"
    ],
    "title": "Mixed-Use Tower & MENA MALL",
    "practice": "architecture",
    "subCategory": "mixeduse",
    "practiceLabel": "Mixed-Use & Commercial Architecture",
    "year": "2025",
    "gridRef": "MOD-03",
    "sizeContext": "16 Levels (2B+G+14) • Retail Concourse • Corporate Offices • Highland Panorama",
    "location": "Gubre Town, Ethiopia",
    "client": "Commercial & Urban Development Consortium",
    "scale": "16-Level Urban Landmark (2 Basements + Ground + 14 Upper Floors)",
    "medium": "Rhino 3D, D5 Render, AutoCAD Working Drawings, Double Glazing & Louvered Metal Screen",
    "summary": "Sixteen-level vertical landmark uniting retail concourses, corporate workspaces, and panoramic residences in Gubre Town.",
    "description": "A modern architectural landmark in Gubre Town, designed to seamlessly integrate vibrant commercial zones with premium urban living. The project balances high-traffic retail and corporate environments with secure, private residential spaces. The component breakdown encompasses 2 Basements (secure parking, storage, and MEP services), Ground Floor high-ceiling retail storefronts with distinct residential and commercial lobbies, 14 Upper Floors (lower levels dedicated to flexible open-plan corporate offices, upper levels dedicated to premium apartments designed for natural light and panoramic highland views), and a multi-functional rooftop lounge with a green community sky terrace.",
    "challenge": "Balancing heavy pedestrian commercial traffic at the podium level with strict privacy, acoustic buffering, and dedicated security access for the upper residential floors.",
    "solution": "Segmented the vertical circulation cores into isolated access banks, creating independent entrance lobbies while deploying a 5-stage form consolidation that optimizes structural footprint, daylight orientation, and passive solar shading.",
    "deliverables": [
      "5-Stage Form Development & Building Mass Consolidation Study",
      "2 Basements Parking, Storage & MEP Service Infrastructure Layouts",
      "Ground Floor Retail Storefronts, MENA MALL Concourse & Twin Lobbies",
      "Flexible Open-Plan Corporate Office Floorplates (Lower Levels)",
      "High-Rise Premium Residential Unit Plans & Panoramic Penthouse Layouts",
      "Nocturnal Lighting, Aerial Skyline & Pedestrian Plaza Visualization Suite"
    ],
    "slides": [
      {
        "url": "assets/mixed-use-slide-01-daylight.jpg",
        "caption": "Slide 01 // Aerial Golden Hour Perspective, Streetscape & MENA MALL Concourse"
      },
      {
        "url": "assets/mixed-use-slide-02-night.jpg",
        "caption": "Slide 02 // Nocturnal Illumination & Evening Architectural Perspective"
      },
      {
        "url": "assets/mixed-use-slide-03-axonometric.jpg",
        "caption": "Slide 03 // 5-Stage Form Development & MENA MALL Axonometric Massing"
      },
      {
        "url": "assets/mixed-use-slide-04-atrium.jpg",
        "caption": "Slide 04 // Multi-Level Skylit Retail Concourse & Atrium"
      },
      {
        "url": "assets/mixed-use-slide-05-office.jpg",
        "caption": "Slide 05 // Corporate Office Floorplate & Acoustic Timber Workplace"
      },
      {
        "url": "assets/mixed-use-slide-06-lounge.jpg",
        "caption": "Slide 06 // High-Rise Panoramic Residential Lounge Suite"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <rect x=\"12\" y=\"6\" width=\"16\" height=\"30\" stroke=\"#FFD042\" />\n      <line x1=\"16\" y1=\"12\" x2=\"24\" y2=\"12\" stroke=\"#FFFFFF\" />\n      <line x1=\"16\" y1=\"18\" x2=\"24\" y2=\"18\" stroke=\"#FFFFFF\" />\n      <line x1=\"16\" y1=\"24\" x2=\"24\" y2=\"24\" stroke=\"#FFFFFF\" />\n      <line x1=\"16\" y1=\"30\" x2=\"24\" y2=\"30\" stroke=\"#FFFFFF\" />\n    </svg>"
  },

  // MOD-04: CLIMATE-RESPONSIVE PRIVATE RESIDENCE
  {
    "id": "climate-responsive-residence-diredawa",
    "service": "Bioclimatic Residential Architecture",
    "role": "Lead Architectural Designer & Passive Solar Strategist (KB CREATIVE)",
    "software": [
      "AutoCAD",
      "Rhino 3D",
      "D5 Render",
      "Adobe Photoshop",
      "Climate Consultant"
    ],
    "title": "Climate-Responsive Private Residence",
    "practice": "architecture",
    "subCategory": "residential",
    "practiceLabel": "Residential & Bioclimatic Architecture",
    "year": "2025",
    "gridRef": "MOD-04",
    "sizeContext": "G+2 Bioclimatic Villa • Central Cooling Atrium • 45° Solar Fins • Dire Dawa",
    "location": "Dire Dawa, Ethiopia",
    "client": "Private Family Residence Commission",
    "scale": "G+2 Residence with Integrated Thermal Atrium & Shaded Terraces",
    "medium": "45° Aluminum Vertical Fins, Living Green Wall Irrigation, Textured Concrete, Passive Courtyard Atrium",
    "summary": "Bioclimatic residential villa engineered with 45° passive solar louvers and a central microclimate cooling atrium.",
    "description": "A contemporary G+2 private residence engineered specifically for Dire Dawa's intense thermal environment. The design prioritizes passive cooling strategies, utilizing an integrated central courtyard and a dynamic louvered facade system to drastically reduce solar heat gain while maximizing natural cross-ventilation. The Ground Floor organizes public living, dining, and an open kitchen wrapping around the landscaped courtyard, guest suite, and parking. The First Floor hosts family bedrooms, study room, prayer room, and shaded balconies. The Second Floor accommodates the master suite, private gym, home office, and entertainment terrace.",
    "challenge": "Mitigating high ambient temperatures and harsh solar radiation characteristic of Dire Dawa without relying exclusively on energy-intensive mechanical air conditioning.",
    "solution": "Introduced a central courtyard that acts as a thermal chimney, drawing cool air through perimeter landscaped buffers while blocking 80% of direct solar heat via 45° angled aluminum vertical fins paired with an irrigated living wall.",
    "deliverables": [
      "Bioclimatic 4-Step Form Development & Solar Permeability Study",
      "Ground, First & Second Floor Architectural Plans (Scale 1:100)",
      "East, North, South & West Elevation Drawings with Louver Layouts",
      "Vertical Fins Detail Specifications (45° Angle, 5.0 Offset, Aluminum)",
      "Internal Courtyard 3D Architectural Section & Green Wall Irrigation Plan",
      "Daylight Exterior Streetscape & Interior Courtyard Living Renderings"
    ],
    "slides": [
      {
        "url": "assets/residence-slide-01-street.jpg",
        "caption": "Slide 01 // Daylight Street Elevation & Dynamic Louvers"
      },
      {
        "url": "assets/residence-slide-02-corner.jpg",
        "caption": "Slide 02 // Corner Perspective & Shaded Veranda"
      },
      {
        "url": "assets/residence-slide-03-courtyard.jpg",
        "caption": "Slide 03 // 3D Section — Central Bioclimatic Atrium"
      },
      {
        "url": "assets/residence-slide-04-interior.jpg",
        "caption": "Slide 04 // Living Lounge & Daylit Courtyard Connection"
      },
      {
        "url": "assets/residence-slide-05-axon.jpg",
        "caption": "Slide 05 // Passive Solar Form Development & Shading"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M8 32V14l12-8 12 8v18H8z\" stroke=\"#FFD042\" />\n      <rect x=\"15\" y=\"18\" width=\"10\" height=\"14\" stroke=\"#FFFFFF\" />\n    </svg>"
  },

  // MOD-05: VERTICAL SPORTS & WELLNESS CENTER (Temporarily Hidden per User Request)
  {
    "id": "vertical-sports-wellness-center",
    "hidden": true,
    "service": "Sports Architecture & Structural Steel Truss Design",
    "role": "Lead Architectural Designer & 3D Visualizer (KB CREATIVE)",
    "software": [
      "AutoCAD",
      "Rhino 3D",
      "D5 Render",
      "Adobe Photoshop"
    ],
    "title": "Vertical Sports & Wellness Center",
    "practice": "architecture",
    "subCategory": "sports",
    "practiceLabel": "Sports & Public Architecture",
    "year": "2025",
    "gridRef": "MOD-05",
    "sizeContext": "G+2 Athletic Complex • 18m Clear-Span Truss • Multi-Tiered Courts",
    "location": "Urban Center, Ethiopia",
    "client": "Municipal Sports & Community Recreation",
    "scale": "G+2 Vertical Facility with Rooftop Sports Terrace",
    "medium": "Reinforced Concrete Frame, High-Performance Acoustic Glazing, Steel Trusses, Perforated Solar Shading",
    "summary": "Compact urban sports complex stacking Olympic gymnastics, indoor athletic courts, and daylight wellness lounges.",
    "description": "The objective of this project was to design a modern, vertical sports and wellness center within a compact urban footprint. Moving away from sprawling horizontal sports complexes, this G+2 facility stacks diverse athletic programs to optimize land use while maintaining seamless spatial transitions, high acoustic separation, and clear user circulation. The complex integrates an expansive ground entrance plaza, shaded drop-off zones, professional indoor gymnasium, cardiovascular and weight suites, athlete recovery zones, and a top-floor wellness cafeteria with floor-to-ceiling glass framing panoramic landscape views.",
    "challenge": "Isolating high-impact vibrations and acoustic reverberation generated by multi-level gymnasium sports from quiet administrative and wellness dining spaces.",
    "solution": "Adopted a vertical structural zoning strategy with decoupled concrete slab dampeners and heavy acoustic perimeter partitions between athletic courts and social wellness facilities.",
    "deliverables": [
      "Ground, First & Second Floor Architectural Spatial Plans",
      "Longitudinal & Transverse Double-Height Cross Sections",
      "Pedestrian Plaza, Bus Terminal & Vehicle Drop-Off Access Masterplan",
      "Acoustic Barrier & Structural Frame Coordination Documentation",
      "Exterior Daylight, Aerial Rooftop & Interior Cafeteria Render Suite"
    ],
    "slides": [
      {
        "url": "assets/sport-slide-01-plaza.jpg",
        "caption": "Slide 01 // Kinetic Facade & Elevated Glazed Concourse"
      },
      {
        "url": "assets/sport-slide-02-aerial.jpg",
        "caption": "Slide 02 // Aerial Perspective & Aerodynamic Roof Plane"
      },
      {
        "url": "assets/sport-slide-03-facade.jpg",
        "caption": "Slide 03 // Gymnastics Arena & 18m Clear-Span Truss"
      },
      {
        "url": "assets/sport-slide-04-street.jpg",
        "caption": "Slide 04 // Streetscape Perspective & Transit Promenade"
      },
      {
        "url": "assets/sport-slide-05-interior.jpg",
        "caption": "Slide 05 // Wellness Lounge & Panoramic Glazing"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <circle cx=\"20\" cy=\"20\" r=\"14\" stroke=\"#FFD042\" />\n      <path d=\"M10 20h20M20 10v20\" stroke=\"#FFFFFF\" />\n    </svg>"
  },

  // MOD-06: SUSTAINABLE BAMBOO & FERROCEMENT HOUSING (Temporarily Hidden per User Request)
  {
    "id": "bamboo-ferrocement-sustainable-housing",
    "hidden": true,
    "service": "Sustainable Eco-Housing & Appropriate Technology",
    "role": "Lead Architectural Designer & Material Researcher (KB CREATIVE)",
    "software": [
      "AutoCAD",
      "SketchUp",
      "D5 Render",
      "Adobe Photoshop"
    ],
    "title": "Sustainable Bamboo & Ferrocement Housing",
    "practice": "architecture",
    "subCategory": "sustainable",
    "practiceLabel": "Sustainable Architecture & Eco-Housing",
    "year": "2024",
    "gridRef": "MOD-06",
    "sizeContext": "Eco-Dwelling • Bundled Bamboo Space Frame • 25mm Thin-Shell Vaults",
    "location": "Highland Eco-Settlement, Ethiopia",
    "client": "Sustainable Habitat & Appropriate Technology Research",
    "scale": "Two-Level Eco-Residential Dwelling on Sloped Hillside",
    "medium": "Bamboo Culms (Dendrocalamus asper), 25mm Ferro-Cement Panels, Timber Decking, Clay Roof Tiles",
    "summary": "Low-carbon housing prototype uniting treated highland bamboo space frames with 25mm ferrocement thin shells.",
    "description": "An innovative exploration of appropriate building technology combining native bundled bamboo culms with thin-shell ferro-cement panels. The primary skeleton utilizes a triangulated bamboo space frame with bundled culms (typically Dendrocalamus asper or Bambusa balcooa) for structural columns that distribute gravity loads. The secondary shell applies thin-shell ferro-cement panels (25mm–30mm thickness) strategically integrated into the \"shear bays\" of the bamboo frame. Bamboo handles the tensile stresses of wind and seismic loads, while ferro-cement provides the compressive strength, thermal mass, and fire resistance that bamboo lacks. Molded curved ferro-cement walls absorb heat during the day, while high-porosity lightweight bamboo louvers facilitate continuous cross-ventilation.",
    "challenge": "Harmonizing the flexible tensile properties of natural organic bamboo with the rigid compressive strength of cementitious plaster without joint cracking.",
    "solution": "Engineered pin-jointed steel gusset brackets and wire mesh lap-joints that permit thermal expansion while transferring shear loads seamlessly between bamboo bundles and ferro-cement diaphragm walls.",
    "deliverables": [
      "Ground, First Floor & Roof Structural Framing Plans",
      "Site Contour & Hillside Stilt Foundation Plan",
      "Front, Rear, Left & Right Architectural Elevations",
      "Bamboo Culm Joinery & Ferro-Cement Shear Bay Details",
      "Full Exterior Hillside Perspective & Material Texture Renderings"
    ],
    "slides": [
      {
        "url": "assets/bamboo-slide-01-hillside.jpg",
        "caption": "Slide 01 // Hillside Elevation & Stilt Foundation"
      },
      {
        "url": "assets/bamboo-slide-02-landscape.jpg",
        "caption": "Slide 02 // Landscape Perspective & Shaded Porch"
      },
      {
        "url": "assets/bamboo-slide-03-detail.jpg",
        "caption": "Slide 03 // Triangulated Bamboo Space Frame Joinery"
      },
      {
        "url": "assets/bamboo-slide-04-veranda.jpg",
        "caption": "Slide 04 // Shaded Veranda & Forest Approach Nested in Canopy"
      },
      {
        "url": "assets/bamboo-slide-05-elevation.jpg",
        "caption": "Slide 05 // Distant Terrain Perspective & Eco-Footprint"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 34V14l8-8 8 8v20\" stroke=\"#FFD042\" />\n      <line x1=\"8\" y1=\"34\" x2=\"32\" y2=\"34\" stroke=\"#FFFFFF\" />\n      <line x1=\"16\" y1=\"22\" x2=\"24\" y2=\"22\" stroke=\"#FFD042\" />\n    </svg>"
  },

  // MOD-07: ROMAN CATERING
  {
    "id": "roman-catering-brand-identity",
    "service": "Hospitality Brand Identity & Eco Packaging System",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Blender"
    ],
    "title": "Roman Catering",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Hospitality Branding & Packaging",
    "year": "2026",
    "gridRef": "MOD-07",
    "sizeContext": "Waiter + Mesob + R Monogram • Molded Fiber Packaging • Event Catering",
    "location": "Addis Ababa, Ethiopia (KB CREATIVE Commission)",
    "client": "Roman Catering & Hospitality Services",
    "scale": "Full Brand Architecture, Sustainable Food Packaging & Collateral Suite",
    "medium": "Synthesized Monogram, Amber Ochre (#F3A22D) & Deep Burgundy (#801414), Molded Fiber Boxes, Kraft Bags",
    "summary": "A premier hospitality and catering brand identity uniting Ethiopian communal dining culture with contemporary banquet elegance.",
    "description": "Roman Catering is a premier culinary and event catering service in Addis Ababa. The brand identity is grounded in an iconic geometric monogram constructed on a circular golden-ratio grid, synthesizing three core symbols: a banquet waiter in motion, the traditional Ethiopian dining basket (Mesob), and the capital letter 'R'. The visual system spans across sustainable molded fiber meal containers, custom branded sleeves and circular seal stickers, paper handle carry-out bags, repeating geometric tessellation patterns, executive hospitality presentation platters, and authentic cultural dining presentations.",
    "challenge": "Synthesizing the cultural heritage of authentic Ethiopian communal dining (represented by the Mesob) with modern corporate catering efficiency and formal banquet hospitality into a single memorable, scalable mark.",
    "solution": "Engineered a calibrated geometric glyph pairing warm amber ochre with deep burgundy red, complemented by an interlocking diamond-chevron brand pattern and sustainable packaging architecture that commands prestige across weddings, corporate summits, and premium meal deliveries.",
    "deliverables": [
      "Primary Scalable Monogram Lockup & Golden-Ratio Geometric Grid Construction",
      "Conceptual Synthesis Matrix (Waiter Silhouette + Traditional Ethiopian Mesob + Letter 'R')",
      "Sustainable Eco Packaging Suite (Molded Fiber Meal Boxes, Custom Sleeves & Circular Seals)",
      "Repeating Interlocking Brand Tessellation Pattern in Dual Brand Colorways",
      "Executive Banquet Presentation Collateral & Polished Wooden Serving Tray Mockup",
      "Authentic Ethiopian Culinary Feast & Traditional Mesob Banquet Presentation",
      "Kraft Paper Rope-Handle Event Carry-Out Bags & Corporate Delivery Branding"
    ],
    "slides": [
      {
        "url": "assets/roman-slide-01-logo.png",
        "caption": "Slide 01 // Primary Brand Monogram & Wordmark Lockup (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/roman-slide-02-concept.png",
        "caption": "Slide 02 // Geometric Grid Construction & Concept Equation (Waiter + Mesob + R = Monogram)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/roman-slide-03-packaging.jpg",
        "caption": "Slide 03 // Eco-Friendly Molded Fiber Meal Boxes, Branded Sleeves & Paper Carry-Out Bag"
      },
      {
        "url": "assets/roman-slide-04-pattern.jpg",
        "caption": "Slide 04 // Repeating Interlocking Brand Pattern & Dual Colorway (Amber/Burgundy & Monochrome)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/roman-slide-05-hospitality.jpg",
        "caption": "Slide 05 // Executive Hospitality Serving Platter & Floating White Identity Lockup"
      },
      {
        "url": "assets/roman-slide-06-banquet.jpg",
        "caption": "Slide 06 // Authentic Ethiopian Culinary Feast & Traditional Mesob Banquet Presentation"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 28V14a8 8 0 0 1 16 0v2a8 8 0 0 1-8 8\" stroke=\"#F3A22D\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"20\" cy=\"17\" r=\"3\" fill=\"#801414\" stroke=\"none\"/>\n      <path d=\"M13 28L20 20L27 28\" stroke=\"#801414\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>"
  },

  // MOD-08: WORKER LINK — PLATFORM IDENTITY & UI
  {
    "id": "worker-link-brand-identity",
    "service": "Brand Identity & Mobile UI Systems",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Blender"
    ],
    "title": "Worker Link — Platform Identity & UI",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Mobile UI",
    "year": "2026",
    "gridRef": "MOD-08",
    "sizeContext": "Full Scale Interlocked Mark • Mobile UI • 3D Signage • Badges",
    "location": "Addis Ababa, Ethiopia",
    "client": "Worker Link Platform (@worker_link / workerlink.com)",
    "scale": "Comprehensive Digital Product Brand System & UI Architecture",
    "medium": "Geometric Monoline Vector, Teal (#105B72) & Soft Mint (#40989F) Palette, Mobile UI, 3D Signage",
    "summary": "Trust-anchored visual identity and mobile UI connecting families directly with verified domestic professionals.",
    "description": "Worker Link is an innovative digital platform built in Addis Ababa to connect families directly, safely, and transparently with verified professional housekeepers—eliminating predatory brokers. The visual identity embodies this core mission: removing the middleman so two people are directly joined. The logo forms an interlocking link between two human silhouettes that together create a subtle heart shape, communicating direct connection, safety, warmth, and reliable neighbourly care. Scaled seamlessly across mobile app profile interfaces, real-time push notification widgets, illuminated 3D hanging signage, and digital product touchpoints.",
    "challenge": "Designing a mark that conveys professional security, technical reliability, and digital modernity while exuding approachable domestic warmth and mutual human trust without feeling clinical.",
    "solution": "Engineered an interlocking dual-figure geometry mapped to a strict 45° diagonal construction grid with equal-radius circular terminations, harmonizing deep corporate teal (#105B72) with warm approachable mint (#40989F) to symbolize the two connected parties in balanced equilibrium.",
    "deliverables": [
      "Primary Scalable Vector Interlocked Heart Logomark & Wordmark",
      "Geometric Construction Grid & 45° Vector Angle Blueprint Documentation",
      "Repetitive Dynamic Brand Pattern for Digital & Physical Collateral",
      "Mobile Application Profile UI Design & Verified Badge System",
      "Push Notification Center UI & App Launcher Iconography",
      "3D Illuminated Hanging Physical Signage & Mobile Handset Mockups"
    ],
    "slides": [
      {
        "url": "assets/workerlink-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary Interlocked Vector Logomark (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/workerlink-slide-02-concept.jpg",
        "caption": "Slide 02 // Geometric Grid Construction & Brand Pattern"
      },
      {
        "url": "assets/workerlink-slide-03-ui.jpg",
        "caption": "Slide 03 // Mobile App Profile UI & Push Notifications"
      },
      {
        "url": "assets/workerlink-slide-04-signage.jpg",
        "caption": "Slide 04 // 3D App Icon & Illuminated Hanging Signage"
      },
      {
        "url": "assets/workerlink-slide-05-device.jpg",
        "caption": "Slide 05 // Illuminated 3D Brand Badge in Dark Context"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M14 16 L22 24 A4 4 0 0 1 16 30 L10 24 A4 4 0 0 1 16 18 L20 22\" stroke=\"#40989F\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <path d=\"M26 16 L18 24 A4 4 0 0 0 24 30 L30 24 A4 4 0 0 0 24 18 L20 22\" stroke=\"#105B72\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#40989F\"/>\n      <circle cx=\"28\" cy=\"12\" r=\"2.5\" fill=\"#105B72\"/>\n    </svg>"
  },

  // MOD-09: JORDANO JEMOLE CONSTRUCTION P.L.C
  {
    "id": "jordano-jemole-construction-identity",
    "service": "Corporate Brand Identity & Site Safety Graphics",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign"
    ],
    "title": "Jordano Jemole Construction P.L.C",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Corporate System",
    "year": "2026",
    "gridRef": "MOD-09",
    "sizeContext": "Full Scale Monolith Mark • Geometric Frame • High-Vis Gear • Hardhat",
    "location": "Ethiopia (KB CREATIVE Commission)",
    "client": "Jordano Jemole Construction P.L.C",
    "scale": "Corporate Visual Identity Architecture & Civil Construction System",
    "medium": "Monoline Tectonic Geometry, Construction Amber (#F5A623) & Slate Charcoal (#3A3D40), Apparel & Field Gear",
    "summary": "Tectonic brand identity engineering a monolithic column monogram that commands instant authority on heavy civil construction sites.",
    "description": "Jordano Jemole Construction P.L.C is a premier civil engineering and building construction firm. The corporate visual identity anchors the brand's market reputation for structural integrity, technical precision, and enduring durability. The primary emblem features a soaring, multi-tiered monolithic tower monogram framed within a bold industrial boundary, symbolizing vertical ascension, structural foundation, and engineering strength. The comprehensive system scales flawlessly from high-visibility safety workwear and site safety hardhats to corporate stationery, contracts, and executive apparel.",
    "challenge": "Designing a heavy-duty identity rugged enough to withstand intense field execution on active construction sites while maintaining polished, sophisticated authority across high-stakes corporate investor meetings and formal architectural dossiers.",
    "solution": "Constructed an architectural monolithic column monogram mapped to equal-angle upward chevrons with high-visibility safety amber (#F5A623) enclosed by an industrial slate grey boundary (#3A3D40), achieving instant 50-meter visibility across high-traffic site conditions and razor-sharp clarity on luxury corporate collateral.",
    "deliverables": [
      "Primary Scalable Vector Monolithic Logomark & Wordmark (Full Scale)",
      "Field Safety Hardhat Industrial Graphic Specifications",
      "High-Visibility Site Safety Vest Reflective Patch Embroidery",
      "Corporate Executive Stationery Suite (Letterhead, Business Cards, Envelope)",
      "Staff & Project Manager Embroidered Navy Polo Shirt Suite",
      "Brand Standards Manual, Construction Grid & Color Hierarchy"
    ],
    "slides": [
      {
        "url": "assets/jordano-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary Monolithic Vector Logomark & Boundary (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/jordano-slide-02-vest.jpg",
        "caption": "Slide 02 // High-Vis Site Safety Vest with Embroidered Emblem"
      },
      {
        "url": "assets/jordano-slide-03-hardhat.jpg",
        "caption": "Slide 03 // Safety Hardhat on Active Concrete Construction Site"
      },
      {
        "url": "assets/jordano-slide-04-stationery.jpg",
        "caption": "Slide 04 // Executive Corporate Stationery & Duplex Cards"
      },
      {
        "url": "assets/jordano-slide-05-polo.jpg",
        "caption": "Slide 05 // Site Management Navy Piqué Polo with Gold Emblem"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <rect x=\"8\" y=\"4\" width=\"24\" height=\"32\" stroke=\"#555555\" stroke-width=\"2\" rx=\"1\"/>\n      <path d=\"M16 26 C16 29 24 29 24 26 V12 L20 8 L16 12 Z\" fill=\"#F5A623\" stroke=\"#F5A623\"/>\n      <path d=\"M12 24 C12 30 28 30 28 24\" stroke=\"#F5A623\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    </svg>"
  },

  // MOD-10: TILET FASHION (ጥለት ፋሽን)
  {
    "id": "tilet-fashion-brand-identity",
    "service": "Haute Couture Brand Identity & Retail Packaging",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign"
    ],
    "title": "Tilet Fashion (ጥለት ፋሽን)",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Fashion Design",
    "year": "2025",
    "gridRef": "MOD-10",
    "sizeContext": "Full Scale Royal Emblem • Ge'ez Typography • Bole Century Mall Storefront",
    "location": "Bole Century Mall, Addis Ababa, Ethiopia",
    "client": "Tilet Fashion (ጥለት ፋሽን) Haute Couture",
    "scale": "Flagship Luxury Boutique Identity & Packaging Suite",
    "medium": "Custom Ge'ez Wordmark, Obsidian (#0A0A0A) & Crimson Red (#D32F2F) Palette, Storefront Glazing, Duplex Cards",
    "summary": "Haute couture brand identity transforming traditional Ethiopian collar embroidery into an imperial geometric emblem.",
    "description": "Tilet Fashion (ጥለት ፋሽን) is an upscale contemporary couture fashion house at Bole Century Mall, specializing in luxury handcrafted Habesha Kemis and tailored woven wear. The visual identity transforms the iconic Ethiopian \"Tilet\" collar embroidery into an imperial geometric emblem, paired with bespoke geometric Ge'ez typography. The identity was applied across the flagship boutique window storefront, luxury matte black retail bags with crimson rope handles, executive duplex business cards, and debossed 3D wall signage.",
    "challenge": "Reimagining the sacred, deeply rooted traditional Ethiopian handwoven Tilet embroidery patterns into a clean, modern luxury emblem that commands prestige on high-end boutique storefronts while remaining instantly recognizable to traditional fashion patrons.",
    "solution": "Designed an imperial diamond collar emblem pairing a dynamic curved collar arc with a diamond jewel base in high-contrast crimson red on pitch black, supported by custom-drawn architectural Amharic letterforms for \"ጥለት ፋሽን\".",
    "deliverables": [
      "Primary Scalable Royal Emblem & Ge'ez Calligraphic Mark",
      "Flagship Boutique Storefront Glazing & Architectural Facade Display",
      "Luxury Matte Black Retail Shopping Bags with Crimson Rope Handles",
      "Executive Duplex Business Cards (Black & White Variants)",
      "Debossed 3D Architectural Wall Signage Box",
      "Boutique Packaging Specifications & Brand Standards"
    ],
    "slides": [
      {
        "url": "assets/tilet-slide-01-logo.jpg",
        "caption": "Slide 01 // Royal Diamond Collar Emblem & Ge'ez Mark (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#000000"
      },
      {
        "url": "assets/tilet-slide-02-storefront.jpg",
        "caption": "Slide 02 // Flagship Storefront Window & Mannequin Display"
      },
      {
        "url": "assets/tilet-slide-03-packaging.jpg",
        "caption": "Slide 03 // Luxury Matte Black Retail Bag with Crimson Handles"
      },
      {
        "url": "assets/tilet-slide-04-cards.jpg",
        "caption": "Slide 04 // Executive Duplex Business Cards in Black & White"
      },
      {
        "url": "assets/tilet-slide-05-signage.jpg",
        "caption": "Slide 05 // Debossed 3D Architectural Wall Signage Box"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 10 C16 14 24 14 28 10 C26 18 14 18 12 10z\" fill=\"#D32F2F\" stroke=\"#D32F2F\"/>\n      <polygon points=\"20,18 28,26 20,34 12,26\" fill=\"#D32F2F\" stroke=\"#D32F2F\"/>\n    </svg>"
  },

  // MOD-11: BEGO MEAZA MEDIA
  {
    "id": "bego-meaza-media-identity",
    "service": "Broadcast Media Identity & Digital Systems",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Blender"
    ],
    "title": "Bego Meaza Media",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Logo Design",
    "year": "2024",
    "gridRef": "MOD-11",
    "sizeContext": "Full Brand Architecture • Monogram Mark • Environmental Signage • App Icon",
    "location": "Ethiopia (KB CREATIVE Commission)",
    "client": "Bego Meaza Media",
    "scale": "Complete Visual Brand Architecture & Multi-Platform Identity",
    "medium": "Geometric Logomark, Black × Red × White Palette, Signage Mockups, UI Application",
    "summary": "Dynamic broadcast media identity fusing an energetic monogram with forward-motion play symbolism.",
    "description": "Bego Meaza Media required a bold, high-memorability corporate identity to anchor their media brand across digital and physical touchpoints. The logomark fuses a stylized letter \"B\" with an integrated play button symbol — a seamless visual metaphor for media flow and forward progress. Delivered across business cards, environmental 3D signage, mobile app icon, and brand construction grid.",
    "challenge": "Creating a single logomark that communicates both media entertainment and professional credibility across scales — from a 16px app icon to a large-format 3D wall installation.",
    "solution": "Designed a monoline geometric \"B + Play\" symbol using a strict geometric grid with equal stroke weights, ensuring perfect legibility at all sizes and contrast on both light and dark surfaces.",
    "deliverables": [
      "Primary Logomark & Symbol System",
      "3D Environmental Wall Signage Mockup",
      "Business Card Light & Dark Variants",
      "Mobile App Icon Design",
      "Brand Color Palette (Black · Red · White)",
      "Geometric Construction Grid Documentation"
    ],
    "slides": [
      {
        "url": "assets/bego-meaza-slide-03.jpg",
        "caption": "Slide 01 // Primary \"B + Play\" Monogram Vector on White (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/bego-meaza-slide-01.jpg",
        "caption": "Slide 02 // 3D Concept Model & Dynamic Media Motion"
      },
      {
        "url": "assets/bego-meaza-slide-02.jpg",
        "caption": "Slide 03 // Business Card Light & Dark Executive Variants"
      },
      {
        "url": "assets/bego-meaza-slide-04.jpg",
        "caption": "Slide 04 // Environmental Signage, App Icon & Color Palette"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 8 C12 8 12 20 12 26 C12 31 16 34 20 34 C24 34 28 31 28 26 L28 20\" stroke=\"#FFD042\" stroke-linecap=\"round\"/>\n      <polygon points=\"18,13 30,20 18,27\" stroke=\"#FFFFFF\" fill=\"none\"/>\n    </svg>"
  },

  // MOD-12: MESOB MEALS
  {
    "id": "mesob-meals-brand-identity",
    "service": "Culinary Brand Identity & Packaging Ecosystem",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign"
    ],
    "title": "Mesob Meals",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Packaging Design",
    "year": "2025",
    "gridRef": "MOD-12",
    "sizeContext": "Full Scale Cultural Mark • Eco Packaging • Courier Fleet Gear • Apparel",
    "location": "Ethiopia (KB CREATIVE Commission)",
    "client": "Mesob Meals Food Delivery Service",
    "scale": "Comprehensive Hospitality & Delivery Visual Ecosystem",
    "medium": "Cultural Heritage Monogram, Emerald (#083B32) & Warm Ochre (#F4A71D) Palette, Food Packaging, Uniform Embroidery",
    "summary": "Modernist culinary brand identity distilling the iconic woven mesob into a clean cultural monogram.",
    "description": "Mesob Meals is an Ethiopian food delivery platform celebrating authentic culinary heritage with modern logistical speed. The identity centers on a minimalist geometric silhouette of the traditional handwoven \"Mesob\" (symbolizing community, hospitality, and communal dining) crowned with a modern warm ochre lid and a clean arching base. The brand ecosystem spans compostable meal container bands, kraft paper takeout bags, embroidered kitchen aprons, and weather-resistant insulated courier transit boxes.",
    "challenge": "Reinventing an ancient, highly ornate traditional cultural artifact (the Mesob basket) into a clean, modern, scalable vector mark that prints crisply on small meal container labels while looking commanding on courier delivery gear across busy city streets.",
    "solution": "Distilled the complex wickerwork of the traditional mesob into bold, pure geometric planes — pairing deep Ethiopian forest emerald green (#083B32) with warm sunlit ochre (#F4A71D) and pure white accents for maximum street-level visibility and appetizing warmth.",
    "deliverables": [
      "Primary Scalable Vector Logo Mark & Cultural Monogram",
      "Food Container Labeling & Tamper-Evident Safety Bands",
      "Eco-Friendly Kraft Takeout Bag Graphics",
      "High-Visibility Insulated Courier Transit Bags",
      "Chef & Kitchen Staff Embroidered Uniform Apparel",
      "Brand Color Palette & Cultural Typography Guidelines"
    ],
    "slides": [
      {
        "url": "assets/mesob-slide-01-logo.jpg",
        "caption": "Slide 01 // Cultural Mesob Monogram Vector on Emerald (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#083B32"
      },
      {
        "url": "assets/mesob-slide-02-packaging.jpg",
        "caption": "Slide 02 // Eco-Friendly Food Packaging & Kraft Takeout Bags"
      },
      {
        "url": "assets/mesob-slide-03-delivery.jpg",
        "caption": "Slide 03 // Courier Delivery Fleet Uniform & Handheld Transit Box"
      },
      {
        "url": "assets/mesob-slide-04-bag.jpg",
        "caption": "Slide 04 // Insulated Thermal Courier Transit Backpack"
      },
      {
        "url": "assets/mesob-slide-05-apron.jpg",
        "caption": "Slide 05 // Executive Chef & Kitchen Apron with Gold Embroidery"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M10 28h20c0 4-4 6-10 6s-10-2-10-6z\" fill=\"#083B32\" stroke=\"#FFD042\" />\n      <path d=\"M12 28 C12 18 16 14 20 14 C24 14 28 18 28 28\" stroke=\"#FFFFFF\" />\n      <rect x=\"17\" y=\"8\" width=\"6\" height=\"6\" rx=\"1\" stroke=\"#FFD042\" fill=\"#FFD042\" />\n    </svg>"
  },

  // MOD-13: DANU STORE
  {
    "id": "danu-store-brand-identity",
    "service": "Retail Brand Identity & Environmental Storefront",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Blender",
      "Adobe InDesign"
    ],
    "title": "Danu Store",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Brand Identity & Retail Design",
    "year": "2025",
    "gridRef": "MOD-13",
    "sizeContext": "Full Scale Cart Monogram • Bole Road Storefront • Merchandise Suite",
    "location": "Bole Road, Addis Ababa, Ethiopia",
    "client": "Danu Store Retail & E-Commerce",
    "scale": "Flagship Retail Brand Architecture & Environmental Identity",
    "medium": "Shopping Cart Monogram, Obsidian (#000000) & Electric Yellow (#FFD042) Palette, Storefront Signage, Merchandise",
    "summary": "Contemporary retail brand identity marrying an iconic shopping cart monogram with luxury store architecture.",
    "description": "Danu Store is a contemporary retail and lifestyle brand on Bole Road, Addis Ababa. The visual identity transforms the lowercase letter \"d\" into a fluid shopping cart monogram with two distinct wheel anchor points, signifying momentum, convenience, and curated commerce. The identity was executed across the architectural flagship storefront with 3D illuminated exterior signage, staff barista/clerk aprons and embroidered polos, heavyweight canvas eco-totes, luxury matte black retail rope bags, and gold-foiled executive business cards.",
    "challenge": "Engineering a minimalist monogram that functions simultaneously as a legible lowercase \"d\" and a shopping cart, commanding high street visibility on illuminated night facades while maintaining prestige on luxury retail print collateral.",
    "solution": "Designed a high-contrast monoline geometry in electric yellow against obsidian black, featuring calibrated circular wheel proportions and an upward sweeping stem that provides instant recall across digital app icons and physical boutique architecture.",
    "deliverables": [
      "Primary Scalable Vector Logo Mark & Shopping Cart Monogram",
      "Flagship Architectural Storefront Facade & 3D Illuminated Signage",
      "Staff Uniform Apparel Suite (Embroidered Aprons, Polos, Caps)",
      "Heavyweight Canvas Eco-Tote Bag with Golden Monogram",
      "Luxury Matte Black Retail Rope-Handle Shopping Bags",
      "Executive Gold Foil Business Cards (Plot 101, Bole Road)"
    ],
    "slides": [
      {
        "url": "assets/danu-slide-01-logo.jpg",
        "caption": "Slide 01 // Shopping Cart Monogram Vector on Black (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#000000"
      },
      {
        "url": "assets/danu-slide-02-storefront.jpg",
        "caption": "Slide 02 // Flagship Bole Road Facade with 3D Illuminated Signage"
      },
      {
        "url": "assets/danu-slide-03-merchandise.jpg",
        "caption": "Slide 03 // Staff Merchandise Flatlay — Polos, Aprons & Caps"
      },
      {
        "url": "assets/danu-slide-04-totebag.jpg",
        "caption": "Slide 04 // Heavyweight Canvas Eco-Tote with Golden Monogram"
      },
      {
        "url": "assets/danu-slide-05-collateral.jpg",
        "caption": "Slide 05 // Luxury Matte Black Retail Bag & Gold-Foil Cards"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M16 24a5 5 0 1 1 0-10 5 5 0 0 1 5 5v12\" stroke=\"#FFD042\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"15\" cy=\"30\" r=\"2.5\" fill=\"#FFD042\"/>\n      <circle cx=\"23\" cy=\"30\" r=\"2.5\" fill=\"#FFD042\"/>\n    </svg>"
  },

  // MOD-14: ALMAZ JEWELLERY
  {
    "id": "almaz-jewellery-brand-identity",
    "service": "Haute Joaillerie & Luxury Brand Identity",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Blender"
    ],
    "title": "Almaz Jewellery",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Luxury Brand Identity & Packaging",
    "year": "2026",
    "gridRef": "MOD-14",
    "sizeContext": "Full Scale Solitaire Mark • Velvet Pouch • Boutiques • 24K Duplex Cards",
    "location": "Addis Ababa, Ethiopia (KB CREATIVE Commission)",
    "client": "Almaz Jewellery (አልማዝ ጌጣጌጥ) Haute Joaillerie",
    "scale": "Flagship Luxury Maison Brand Architecture & Packaging Ecosystem",
    "medium": "Solitaire Ring Monogram, Champagne Bronze (#E89258), Pure White (#FFFFFF) & Obsidian (#000000), Velvet & Gold Foil",
    "summary": "Minimalist haute joaillerie identity synthesizing a brilliant-cut diamond crown with an arching letter \"A\" ring band.",
    "description": "Almaz (አልማዝ — the Ge'ez word for diamond) bridges timeless Ethiopian heritage with modern luxury joaillerie. The mark fuses a precision brilliant-cut diamond solitaire with the upward arch of a bespoke letter 'A', forming an iconic ring silhouette that reads with instant clarity across scales. Executed across flagship boutique glazing, matte presentation ring cases, debossed velvet pouches, and duplex cards with subtle Ethiopian cross watermarks.",
    "challenge": "Distilling the ancient reverence of Ethiopian jewelry into a modern, monoline luxury emblem that commands prestige on high-end boutique storefronts while remaining crisp on 10mm ring tags.",
    "solution": "Engineered a geometric dual-arch construction: an outer circular band crowned by a faceted diamond solitaire, cradling a sculpted letter 'A'. Anchored by a warm champagne bronze (#E89258) and pitch obsidian (#000000) palette that exudes quiet luxury.",
    "deliverables": [
      "Primary Scalable Solitaire Diamond & \"A\" Ring Vector Logomark (Full Scale 1:1)",
      "Flagship Boutique Storefront Glazing & Illuminated Window Display Graphics",
      "Luxury Matte Black Presentation Jewelry Box & Diamond Ring Setting Display",
      "Debossed Obsidian Velvet Drawstring Jewelry Pouches with Embroidered Emblem",
      "Executive Duplex Business Cards with Embossed Ethiopian Cross Watermarks",
      "Comprehensive Haute Joaillerie Identity Guidelines & Typography Specs"
    ],
    "slides": [
      {
        "url": "assets/almaz-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary Solitaire Diamond \"A\" Vector Logomark (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#000000"
      },
      {
        "url": "assets/almaz-slide-02-storefront.jpg",
        "caption": "Slide 02 // Flagship Luxury Boutique Glazed Facade & Showcase Display"
      },
      {
        "url": "assets/almaz-slide-03-box.jpg",
        "caption": "Slide 03 // Matte Black Presentation Box, Solitaire Ring & Gold Card"
      },
      {
        "url": "assets/almaz-slide-04-pouch.jpg",
        "caption": "Slide 04 // Debossed Velvet Drawstring Pouch & Brilliant Cut Diamonds"
      },
      {
        "url": "assets/almaz-slide-05-cards.jpg",
        "caption": "Slide 05 // Duplex Luxury Business Cards with Ethiopian Cross Watermarks"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <polygon points=\"20,5 26,11 14,11\" stroke=\"#E89258\" fill=\"#E89258\"/>\n      <circle cx=\"20\" cy=\"23\" r=\"10\" stroke=\"#E89258\" stroke-width=\"2.5\"/>\n      <path d=\"M16 28 L20 17 L24 28\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <line x1=\"17.5\" y1=\"23\" x2=\"22.5\" y2=\"23\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    </svg>"
  },

  // MOD-15: DOT CREATIVE
  {
    "id": "dot-creative-agency-identity",
    "service": "Creative Agency & Brand Design Studio",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Blender"
    ],
    "title": "DOT CREATIVE",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Agency Identity & Visual Systems",
    "year": "2026",
    "gridRef": "MOD-15",
    "sizeContext": "Full Scale Monogram • Geometric Blueprint • Studio Apparel • Duplex Cards",
    "location": "Addis Ababa, Ethiopia (KB CREATIVE Commission)",
    "client": "DOT CREATIVE Design Agency",
    "scale": "Complete Visual Identity Architecture & Studio Collateral",
    "medium": "Geometric Monogram, Electric Cobalt (#3D48E0) & Platinum (#C4C7C9), Apparel & Acrylic Signage",
    "summary": "Geometric visual identity synthesizing an architectural monogram \"D\" with an offset square dot anchor.",
    "description": "DOT CREATIVE is an avant-garde design studio dedicated to high-impact visual systems. The identity explores the core unit of digital and spatial design—the dot. Reimagined as an offset geometric square anchor that balances a chamfered monogram \"D\", the mark conveys architectural stability and dynamic forward vector motion. Deployed across blueprint drafting grids, oversized studio signage, staff apparel, and gradient duplex collateral.",
    "challenge": "Crafting an agency mark bold enough to stand out in a saturated creative market while maintaining modular geometric clarity that works on architectural blueprints and high-contrast digital interfaces.",
    "solution": "Constructed a 45° chamfered letter \"D\" paired with a floating square dot terminal, balanced by an electric cobalt (#3D48E0) and slate gradient palette with custom bespoke mechanical typography.",
    "deliverables": [
      "Primary Scalable Vector \"D + Dot\" Logomark & Wordmark (Full Scale 1:1)",
      "Geometric Grid Blueprint Construction & Angle Analysis",
      "Agency Floor-Standing Illuminated Acrylic Lightbox Signage",
      "Studio Team Heavyweight Cotton Embroidered Apparel",
      "Gradient Duplex Executive Business Cards with Soft-Touch Laminate",
      "Comprehensive Brand Guidelines & Digital Touchpoint System"
    ],
    "slides": [
      {
        "url": "assets/dot-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary \"D + Dot\" Vector Monogram on White (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#FFFFFF"
      },
      {
        "url": "assets/dot-slide-02-grid.jpg",
        "caption": "Slide 02 // Geometric Blueprint Grid & 45° Construction Architecture"
      },
      {
        "url": "assets/dot-slide-03-signage.jpg",
        "caption": "Slide 03 // Studio Lightbox Signage & Team Embroidered Apparel Suite"
      },
      {
        "url": "assets/dot-slide-04-card.jpg",
        "caption": "Slide 04 // Gradient Duplex Business Card & Soft-Touch Matte Finish"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <rect x=\"8\" y=\"8\" width=\"6\" height=\"6\" fill=\"#A0A0A0\" stroke=\"none\"/>\n      <path d=\"M16 8h10l8 8v10l-8 8H16V8z\" fill=\"#3D48E0\" stroke=\"none\"/>\n      <rect x=\"18\" y=\"14\" width=\"8\" height=\"12\" fill=\"#041B2B\" rx=\"1\"/>\n    </svg>"
  },

  // MOD-16: DAMA MARKETING
  {
    "id": "dama-marketing-brand-identity",
    "service": "Corporate Marketing & Strategic Brand Architecture",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma"
    ],
    "title": "Dama Marketing",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Corporate Marketing & Brand Systems",
    "year": "2026",
    "gridRef": "MOD-16",
    "sizeContext": "Full Scale \"D\" Monogram • Executive Duplex Cards • Web Platform • Brand Collateral",
    "location": "Addis Ababa, Ethiopia (KB CREATIVE Commission)",
    "client": "Dama Marketing Corporate Agency",
    "scale": "Complete Corporate Identity System, Digital Web Interface & Executive Collateral",
    "medium": "Geometric Serif Monogram \"D\", Deep Pine (#122720) & Imperial Gold (#B6903F), Duplex Matte Cards, Ceramic & Environmental Merch",
    "summary": "Geometric corporate identity uniting a sharp cantilevered square pixel with a sculpted golden \"D\" monogram.",
    "description": "Dama Marketing is a performance-driven corporate agency built on strategic precision and measurable market impact. The brand mark deconstructs the initial \"D\" into two interconnected kinetic modules: an elevated geometric square pixel that commands the upper-left horizon and a sculpted golden stem that grounds the composition. The identity balances executive authority with modern tech agility across dark forest green duplex collateral, responsive web UI, and executive lifestyle merchandise.",
    "challenge": "Devising an emblem that expresses strategic stability while breaking the conventional mold of corporate marketing firms through bold geometric negative space and prestigious chromatic contrast.",
    "solution": "Constructed an asymmetric dual-geometry monogram: an offset golden square anchor intersecting the uppercase \"D\" silhouette, unified by an aristocratic deep pine green (#122720) and rich imperial gold (#B6903F) palette with crisp modern typography.",
    "deliverables": [
      "Primary Scalable Vector \"D\" Pixel Monogram & Wordmark (Full Scale 1:1)",
      "Executive Matte Pine Business Cards with Imperial Gold Foil Stamping",
      "Corporate Responsive Web Landing Page & Digital Brand Design System",
      "Executive Ceramic Desk Merchandise & Gold Writing Instruments",
      "Architectural All-Weather Client Umbrellas with Gold Metallic Branding",
      "Comprehensive Corporate Brand Standards & Typography Guide"
    ],
    "slides": [
      {
        "url": "assets/dama-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary \"D\" Monogram on Deep Pine (#122720) (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#122720"
      },
      {
        "url": "assets/dama-slide-02-cards.jpg",
        "caption": "Slide 02 // Executive Matte Green Business Cards with Gold Stamping"
      },
      {
        "url": "assets/dama-slide-03-web.jpg",
        "caption": "Slide 03 // Responsive Corporate Web Platform & Digital Brand Suite"
      },
      {
        "url": "assets/dama-slide-04-mug.jpg",
        "caption": "Slide 04 // Studio Executive Ceramic Mug & Gold Precision Pen"
      },
      {
        "url": "assets/dama-slide-05-umbrella.jpg",
        "caption": "Slide 05 // Architectural All-Weather Umbrella with Gold Branding"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <rect x=\"7\" y=\"10\" width=\"7\" height=\"7\" fill=\"#B6903F\" stroke=\"none\"/>\n      <path d=\"M14 10h10a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9H14V10z\" fill=\"#B6903F\" stroke=\"none\"/>\n      <rect x=\"18\" y=\"15\" width=\"5\" height=\"8\" fill=\"#122720\" rx=\"1\"/>\n    </svg>"
  },

  // MOD-17: TINU GIFTS
  {
    "id": "tinu-gifts-brand-identity",
    "service": "Artisanal Packaging Architecture & Brand Identity System",
    "role": "Lead Brand Identity Designer & Creative Director (KB CREATIVE)",
    "software": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Blender"
    ],
    "title": "TINU GIFTS",
    "practice": "graphic",
    "subCategory": "identity",
    "practiceLabel": "Luxury Packaging & Brand Identity",
    "year": "2026",
    "gridRef": "MOD-17",
    "sizeContext": "Full Scale Monogram • Braided Rope Bags • Cotton Tags • Duplex Cards",
    "location": "Addis Ababa, Ethiopia (KB CREATIVE Commission)",
    "client": "TINU GIFTS Boutique Maison",
    "scale": "Boutique Packaging Suite, Retail Signage & Complete Visual Identity Architecture",
    "medium": "Architectural Gift Box Monogram, Warm Oat (#E9DCCC) & Deep Mocha (#6F6154), Bronze Foil Stamping, Textured Kraft & Cotton Stock",
    "summary": "Warm luxury packaging identity synthesizing an architectural gift box with twin geometric ribbon wings and bespoke serif typography.",
    "description": "TINU GIFTS is a boutique gifting maison celebrated for thoughtful, high-end presentation and artisanal craft. The visual identity translates the tactile intimacy of unboxing into an architectural emblem: an upright gift box framed by angled ribbon terminals that subtly form the letters \"T\" and \"G\". Set in a soothing warm oat cream (#E9DCCC) and roasted mocha (#6F6154) palette, the identity extends across textured linen-finish rope bags, embossed cotton gift tags with natural jute ties, rounded duplex cards, and illuminated boutique blade signage.",
    "challenge": "Crafting a gift brand identity that feels exquisitely personal and artisanal while retaining sharp geometric structure suitable for luxury retail storefronts, bronze foil stamping, and micro-embossed packaging tags.",
    "solution": "Engineered a balanced tripartite glyph: a central vertical pillar flanked by outward-angled ribbon wings, creating a sculptural gift silhouette that scales with pristine legibility from a 15mm brass-eyelet gift tag to oversized retail signage.",
    "deliverables": [
      "Primary Scalable Vector \"T + G\" Gift Box Monogram & Wordmark (Full Scale 1:1)",
      "Textured Linen-Finish Paper Gift Bags with Braided Cord Handles & Copper Foil",
      "Heavyweight Cotton Textured Gift Tags with Brass Eyelets & Jute Twine",
      "Rounded-Corner Duplex Mocha & Oat Business Cards with Debossed Emblems",
      "Boutique Storefront Projecting Blade Lightbox Signage & Architectural Plaque",
      "Complete Boutique Brand Standards & Luxury Packaging Guidelines"
    ],
    "slides": [
      {
        "url": "assets/tinu-slide-01-logo.jpg",
        "caption": "Slide 01 // Primary \"T + G\" Gift Box Vector Monogram on Warm Oat (#E9DCCC) (Full Scale 1:1)",
        "fit": "contain",
        "bg": "#E9DCCC"
      },
      {
        "url": "assets/tinu-slide-02-bag.jpg",
        "caption": "Slide 02 // Textured Paper Gift Bag with Braided Cord Handles & Copper Foil Stamping"
      },
      {
        "url": "assets/tinu-slide-03-tag.jpg",
        "caption": "Slide 03 // Heavyweight Cotton Textured Gift Tag with Brass Eyelet & Jute Twine"
      },
      {
        "url": "assets/tinu-slide-04-cards.jpg",
        "caption": "Slide 04 // Rounded-Corner Duplex Mocha & Oat Business Cards with Debossed Mark"
      },
      {
        "url": "assets/tinu-slide-05-storefront.jpg",
        "caption": "Slide 05 // Boutique Storefront Projecting Blade Lightbox Signage & Exterior Plaque"
      }
    ],
    "iconSvg": "<svg viewBox=\"0 0 40 40\" width=\"28\" height=\"28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M8 12 L14 10 V32 H8 Z\" fill=\"#6F6154\" stroke=\"none\"/>\n      <path d=\"M17 10 H23 V32 H17 Z\" fill=\"#6F6154\" stroke=\"none\"/>\n      <path d=\"M26 10 L32 12 V32 H26 Z\" fill=\"#6F6154\" stroke=\"none\"/>\n      <rect x=\"8\" y=\"28\" width=\"24\" height=\"4\" fill=\"#6F6154\" stroke=\"none\"/>\n    </svg>"
  }
];

// Make projects globally available for scrubbing engine
window.KB_PROJECTS = KB_PROJECTS;

// Active slide tracking index for each project card
const projectSlideIndexes = {};


/* ==========================================================================
   AUTHENTIC AMHARIC LOCALIZATION DATA FOR ALL 17 CURATED WORKS
   ========================================================================== */
const KB_PROJECT_AM = {
  "kara-g2-family-residence": {
    title: "የG+2 ቤተሰብ መኖሪያ ቤት",
    service: "የG+2+ቴራስ መኖሪያ ቤት አርክቴክቸር እና የተፈጥሮ ብርሃን ሲሙሌሽን",
    location: "ካራ፣ አዲስ አበባ | 250 ካሬ ሜትር ይዞታ",
    client: "የግል ቤተሰብ መኖሪያ ኮሚሽን",
    sizeContext: "ካራ፣ አዲስ አበባ | 250 ካሬ ሜትር ይዞታ • G+2+ቴራስ • 10 የተለያዩ እይታዎች እና የወለል ፕላኖች",
    role: "ዋና አርክቴክቸራል ዲዛይነር እና 3D ቪዥዋላይዘር (ቃልእግዚአብሔር ፈቀደ • KB CREATIVE)",
    summary: "የቤተሰብ አኗኗርን፣ ግላዊነትን፣ የተፈጥሮ ብርሃንን፣ ንጹህ አየርን እና የተመቻቸ እንቅስቃሴን ሚዛናዊ በሆነ መንገድ ያቀናጀ ዘመናዊ የG+2 መኖሪያ ህንፃ።",
    description: "የቤተሰብ አኗኗርን፣ ግላዊነትን፣ የተፈጥሮ ብርሃንን፣ አየር ማናፈሻን፣ የውጪ መዝናኛ ቦታን እና የተሳለጠ እንቅስቃሴን ሚዛናዊ በሆነ መንገድ ያቀናጀ ዘመናዊ የG+2 ቤተሰብ መኖሪያ። ንድፉ ቤቱን የህዝብ፣ ከፊል-የግል፣ የግል እና የአገልግሎት መስጫ ክፍሎች በማለት ግልጽ በሆነ ደረጃ ያደራጃል፤ የቦታውን አቅጣጫ፣ የመሬቱን አቀማመጥ እና የከተማውን ከባቢ ያገናዝባል። ስራው በ10 አጠቃላይ እይታዎች እና ንድፎች የቀረበ ሲሆን፤ ከባህላዊ የቡና ማፍያ ጥግ ካላቸው የሳሎን ክፍሎች ጀምሮ እስከ ተቀደሰ የግል የጸሎት ቤት (ጸሎት ቤት)፣ ክፍት የኩሽና ደሴት፣ የዋና መኝታ ቤት እረፍት ክፍል፣ የስራ ቢሮ፣ በአረንጓዴ ያጌጠ የጣሪያ ቴራስ እና ዝርዝር የወለል ፕላኖችን ያካትታል።",
    challenge: "በተጨናነቀ የ250 ካሬ ሜትር ይዞታ ላይ የቤተሰብ መቀበያ፣ የግል መኝታዎች እና ልዩ የጸሎት ቤትን በደረጃ በማዋቀር የተሟላ የተፈጥሮ ብርሃንና ንጹህ አየር እንዲያገኙ ማድረግ።",
    solution: "አነስተኛ የመሬት ስፋት የሚጠቀም አቀባዊ መዋቅር በመንደፍ፣ የፀሐይ ብርሃንን የሚከላከሉ ሰፋፊ በረንዳዎችን በማካተት እና ለጸሎትና ጥናት ክፍሎች ፀጥታ የሰፈነበት የተለየ የቦታ ክፍፍል ተዘጋጅቷል።",
    deliverables: [
      "የተሟላ የአርክቴክቸር ፕላን እና የቦታ ክፍፍል (የህዝብ፣ ከፊል-የግል፣ የግል እና የአገልግሎት ዞኖች)",
      "ዝርዝር የአርክቴክቸር የወለል ፕላኖች እና የሳይት እንቅስቃሴ ካርታ",
      "9 ከፍተኛ ጥራት ያላቸው የ3D እይታዎች (የቀን፣ የምሽት፣ የሳሎን፣ የኩሽና፣ የመታጠቢያ፣ የጸሎት ቤት፣ የመኝታ፣ የቢሮ እና የመግቢያ)",
      "ልዩ ባህላዊ የጸሎት ቤት (የበገና ማስቀመጫ እና የበራ መስቀል ጣሪያ ያለው)",
      "ዋና መኝታ ቤት ከጥናት ጠረጴዛ እና ከልዩ የእንጨት ማስጌጫ ጋር",
      "የቤት ውስጥ የስራ ቢሮ እና የአርክቴክቸር ቤተ-መጽሐፍት",
      "የመግቢያ ኮሪደር ከተሰራ የልብስ እና የጫማ ማስቀመጫ ጋር",
      "የBIM የግንባታ ሰነዶች በAutodesk Revit እና D5 Render"
    ]
  },
  "acute-engineering-office-renovation": {
    title: "አኪዩት ኢንጂነሪንግ — የቢሮ እድሳት",
    service: "የውስጥ አርክቴክቸር እና የስራ ቦታ እድሳት",
    location: "ቦሌ ሚካኤል፣ አዲስ አበባ፣ ኢትዮጵያ",
    client: "አኪዩት ኢንጂነሪንግ",
    sizeContext: "22.6 ካሬ ሜትር (4.2m × 5.4m) • የብረት እና የእንጨት መከፋፈያ • ሁለት ዞኖች • ቦሌ ሚካኤል",
    role: "ዋና የውስጥ አርክቴክት እና የቦታ ዲዛይነር (ቃልእግዚአብሔር ፈቀደ • KB CREATIVE)",
    summary: "የ22.6 ካሬ ሜትር ጠባብ ቦታን ልዩ በሆነ የብረት እና የእንጨት መከፋፈያ አማካኝነት ወደ ሁለት ተግባራዊ ዞኖች (የስራ እና የደንበኛ መቀበያ) የለወጠ የውስጥ እድሳት።",
    description: "በቦሌ ሚካኤል አዲስ አበባ ለሚገኘው አኪዩት ኢንጂነሪንግ የተሰራ ከፍተኛ ጥራት ያለው የውስጥ እድሳት። በ22.6 ካሬ ሜትር (4.2m × 5.4m) ጠባብ ቦታ ውስጥ ክፍት ወለሉ በብልሃት ለሁለት ተከፍሏል፦ መደበኛ ያልሆነ የደንበኛ መቀበያ እና የውይይት ሳሎን፣ እንዲሁም የአመራር ስራ ጠረጴዛ። በብጁ የተሰራ የብረት እና የኦክ እንጨት መከፋፈያ ብርሃንን ሳያግድ የክፍሉን እንቅስቃሴ በማደራጀት እንደ ዋና መለያ ያገለግላል። የአመራር ጠረጴዛው ጀርባ የበራ የአኪዩት ኢንጂነሪንግ የ3D ሎጎ የተገጠመለት የካላካታ እብነ-በረድ ግድግዳ እና የተንጠለጠሉ ክብ የLED መብራቶች አሉት።",
    challenge: "በ22.6 ካሬ ሜትር ጠባብ ክፍል ውስጥ የስራ ጠረጴዛን፣ የደንበኞች መወያያ ቦታን እና እቃ ማስቀመጫዎችን ያለመጨናነቅና ክፍት ስሜትን ጠብቆ ማደራጀት።",
    solution: "ብርሃንን ሳያግድ ቦታን የሚከፋፍል፣ ለዕቃዎች ማስቀመጫነት የሚያገለግል እና የድምፅ ቅነሳ የሚያደርግ ውብ የብረትና የኦክ እንጨት መከፋፈያ ስክሪን ተነድፏል።",
    deliverables: [
      "የውስጥ ቦታ ክፍፍል እና የስራ እንቅስቃሴ ፕላን (22.6 ካሬ ሜትር)",
      "ብጁ የብረት እና የእንጨት መከፋፈያ ዝርዝር ዲዛይን",
      "የካላካታ እብነ-በረድ ግድግዳ እና የበራ የኮርፖሬት ሎጎ አሰራር",
      "የተንጠለጠሉ ክብ የLED መብራቶች እና የጣሪያ ዲዛይን",
      "የስራ ጠረጴዛ እና የወለል ምንጣፍ ዝርዝር ሰነዶች"
    ]
  },
  "mixed-use-tower-gubre": {
    title: "ሁለገብ ታወር እና ሜና ሞል",
    service: "የንግድ እና ሁለገብ ህንፃ አርክቴክቸር",
    location: "ጉብሬ ከተማ፣ ጉራጌ ዞን፣ ኢትዮጵያ",
    client: "የንግድ እና የመኖሪያ ህብረት ስራ ማህበር",
    sizeContext: "1,450 ካሬ ሜትር ይዞታ • G+6 ሁለገብ ህንፃ • የሜና ሞል አትሪየም",
    role: "አርክቴክቸራል ዲዛይነር (ቃልእግዚአብሔር ፈቀደ • KB CREATIVE)",
    summary: "ለጉብሬ ከተማ የንግድ ማዕከልነትን እና ዘመናዊ አኗኗርን የሚያስተዋውቅ፣ የገበያ ማዕከልና መኖሪያ ቤቶችን ያካተተ ሁለገብ ህንፃ።",
    description: "በጉብሬ ከተማ እምብርት የሚገኝ የንግድ እና የመኖሪያ ህንፃ ፕሮጀክት። ህንፃው በመሬት እና በመጀመሪያ ፎቆች ላይ ሰፊ የሜና ሞል የገበያ ማዕከል፣ በመካከለኛ ፎቆች ላይ ዘመናዊ የቢሮ ክፍሎች፣ እንዲሁም በከፍተኛ ፎቆች ላይ የተፈጥሮ ብርሃን የሚያገኙ የግል መኖሪያ ቤቶችን ያካትታል።",
    challenge: "የህዝብ ገበያ አዳራሾችን፣ የቢሮዎችን እንቅስቃሴ እና የመኖሪያ ቤቶችን ግላዊነት በአንድ ህንፃ ውስጥ ያለመተፋፈግ ማቀናጀት።",
    solution: "በመሬት ላይ ሰፊ አትሪየም ያለው የገበያ ማዕከል (ሜና ሞል) በማድረግ፣ በላይኞቹ ፎቆች ላይ ደግሞ የተፈጥሮ ብርሃን የሚያገኙ መኖሪያዎችን መፍጠር።",
    deliverables: [
      "የህንፃው አጠቃላይ አርክቴክቸራል ንድፍ እና ሞዴሊንግ",
      "የሜና ሞል የንግድ አትሪየም እና የውስጥ ክፍሎች ንድፍ",
      "የውጪ ገጽታ እና የፀሐይ ብርሃን መከላከያ ፊኖች ዝርዝር",
      "ከፍተኛ ጥራት ያላቸው የቀንና የምሽት የ3D ምስሎች"
    ]
  },
  "climate-responsive-residence-diredawa": {
    title: "የአየር ንብረትን ያማከለ የግል መኖሪያ ቤት",
    service: "ባዮክላይማቲክ የመኖሪያ ቤት አርክቴክቸር",
    location: "ድሬዳዋ፣ ኢትዮጵያ",
    client: "የግል ኮሚሽን",
    sizeContext: "380 ካሬ ሜትር • ፓሲቭ ቅዝቃዜ • ጥልቅ ጥላ • ድሬዳዋ",
    role: "አርክቴክቸራል ዲዛይነር (ቃልእግዚአብሔር ፈቀደ)",
    summary: "የድሬዳዋን ከፍተኛ ሙቀት ከግምት በማስገባት የተነደፈ፣ ተፈጥሯዊ የአየር ዝውውርንና የጥላ አወቃቀርን የተጠቀመ ዘመናዊ መኖሪያ ቤት።",
    description: "ለድሬዳዋ ከፊል-በረሃማ አየር ንብረት የተነደፈ ዘመናዊ ቪላ። የቤቱ አቀማመጥ ኃይለኛውን የቀትር ፀሐይ በመከላከል ቀዝቃዛውን የንጋት ብርሃን እና ተፈጥሯዊ አየር ወደ ውስጥ እንዲገባ ያደርጋል።",
    challenge: "በከፍተኛ ሙቀት ውስጥ አነስተኛ የኤሌክትሪክ ሃይል በመጠቀም የቤቱን ውስጣዊ ቅዝቃዜ መጠበቅ።",
    solution: "ጥልቅ ጥላ የሚሰጡ ጣሪያዎች፣ መስቀለኛ የተፈጥሮ ንፋስ ማስገቢያ መስኮቶች እና የሙቀት መከላከያ ቁሳቁሶችን መጠቀም።",
    deliverables: [
      "የአየር ንብረት ጥናት እና የፀሐይ አቅጣጫ ትንተና",
      "የመኖሪያ ህንፃው አጠቃላይ የአርክቴክቸር ፕላን",
      "የተፈጥሮ አየር ዝውውር እና የጥላ ዲያግራሞች",
      "የውስጥ እና የውጭ 3D እይታዎች"
    ]
  },
  "vertical-sports-wellness-center": {
    title: "አቀባዊ የስፖርት እና ጤና ማዕከል",
    service: "የህዝብ መዝናኛ እና የስፖርት ማዕከል አርክቴክቸር",
    location: "ወልቂጤ፣ ኢትዮጵያ",
    client: "የማዘጋጃ ቤት የህዝብ ፕሮጀክት ጥናት",
    sizeContext: "2,800 ካሬ ሜትር • ባለብዙ ሜዳ አቀባዊ መዋቅር • ወልቂጤ",
    role: "አርክቴክቸራል ዲዛይነር (ቃልእግዚአብሔር ፈቀደ)",
    summary: "በከተማ ውስጥ በርካታ የስፖርት ማዘውተሪያዎችን፣ ጂምናዚየሞችን እና የመዝናኛ ስፍራዎችን በአቀባዊ ያዋቀረ የህዝብ ማዕከል።",
    description: "የወልቂጤ ከተማን ወጣቶች እና ስፖርተኞች የሚያገለግል ሁለገብ የስፖርት ኮምፕሌክስ። የቅርጫት ኳስ፣ የቮሊቦል እና የጂም ክፍሎችን በአንድ ማዕከል ያገናኛል።",
    challenge: "ትላልቅ ስፋት የሚጠይቁ የስፖርት ሜዳዎችን በቁመት በማስተናገድ ምቹ የስራ እንቅስቃሴ መፍጠር።",
    solution: "ረጅም ርቀት የሚዘረጉ ጠንካራ የብረት መዋቅሮችን በመጠቀም ሰፋፊ ክፍት አዳራሾችን እና የተሳለጠ የእንቅስቃሴ ኮሪደሮችን ማደራጀት።",
    deliverables: [
      "የቦታ አደረጃጀት እና የስፖርት ሜዳዎች ፕላን",
      "የመዋቅር ዝርዝር እና የደህንነት መውጫዎች ንድፍ",
      "የ3D ህንፃ እይታዎች እና የወለል ፕላኖች"
    ]
  },
  "bamboo-ferrocement-sustainable-housing": {
    title: "ዘላቂ የቀርከሃ እና ፌሮሲሚንቶ መኖሪያ",
    service: "ኢኮ-ተስማሚ እና አነስተኛ ወጪ የሚጠይቅ ህንፃ",
    location: "ጉራጌ ዞን፣ ኢትዮጵያ",
    client: "ዘላቂ የመኖሪያ ምርምር ተነሳሽነት",
    sizeContext: "120 ካሬ ሜትር • የአካባቢ ቀርከሃ • ዝቅተኛ ወጪ • ጉራጌ ዞን",
    role: "ተመራማሪ እና አርክቴክቸራል ዲዛይነር (ቃልእግዚአብሔር ፈቀደ)",
    summary: "የአካባቢ የተፈጥሮ ጥሬ ዕቃዎችን (ቀርከሃና ቀላል ሲሚንቶ) በመጠቀም የተሰራ ዘላቂ፣ ውብ እና ተመጣጣኝ ዋጋ ያለው የመኖሪያ ፕሮጀክት።",
    description: "ለአካባቢ ተስማሚ እና ኢኮኖሚያዊ የሆነ የመኖሪያ ቤት ሞዴል። የአካባቢውን ባህላዊ የግንባታ እውቀት ከዘመናዊ የምህንድስና ጥበብ ጋር ያዋህዳል።",
    challenge: "ተመጣጣኝ ዋጋ ባላቸው የአካባቢ ቁሳቁሶች ጠንካራና ዘመናዊ መልክ ያለው አስተማማኝ ቤት መገንባት።",
    solution: "ቀርከሃን በመዋቅር ማጠናከሪያነት በመጠቀም እና በቀጭን የፌሮሲሚንቶ ንብርብር ጥንካሬንና የአየር ንብረት መቋቋምን ማረጋገጥ።",
    deliverables: [
      "የቁሳቁስ ጥናት እና የመዋቅር ጥንካሬ ሙከራ ሰነዶች",
      "የመገጣጠሚያ ዝርዝር ንድፎች (Joinery Details)",
      "የተሟሉ የግንባታ ፕላኖች እና 3D ማሳያዎች"
    ]
  },
  "worker-link-brand-identity": {
    title: "ወርከር ሊንክ — የዲጂታል ፕላትፎርም መለያ እና UI",
    service: "የብራንድ መለያ እና የUI/UX ዲዛይን",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ወርከር ሊንክ ቴክኖሎጂስ",
    sizeContext: "ዲጂታል መድረክ • የሞባይል UI/UX • የብራንድ መመሪያ ስርዓት",
    role: "የብራንድ እና የUI ዲዛይነር (KB CREATIVE)",
    summary: "የሙያተኞችን እና ቀጣሪዎችን ግንኙነት የሚያሳልጥ የዲጂታል መድረክ ብራንድ መለያ፣ ሎጎ እና የተጠቃሚ ገጽታ (UI)።",
    description: "ለወርከር ሊንክ የተሰራ የተሟላ የብራንድ ማንነት። የሞባይል አፕሊኬሽን ዲዛይን፣ የድረ-ገጽ በይነገጽ እና የዲጂታል ግብይት ሰነዶችን ያጠቃልላል።",
    challenge: "አስተማማኝ፣ ሙያዊ እና በቀላሉ የሚታወስ የቴክኖሎጂ ብራንድ መለያ መፍጠር።",
    solution: "ግንኙነትን እና እድገትን የሚያሳዩ ጂኦሜትሪክ ቅርጾችን በመጠቀም ዘመናዊ የሞባይል አፕሊኬሽን ገጽታ ማዘጋጀት።",
    deliverables: [
      "የሎጎ ዲዛይን እና የብራንድ መመሪያ",
      "የሞባይል አፕሊኬሽን UI/UX ገጾች",
      "የአዶዎች እና የቀለም ምርጫዎች ስርዓት"
    ]
  },
  "jordano-jemole-construction-identity": {
    title: "ጆርዳኖ ጀሞሌ ኮንስትራክሽን ኃ/የተ/የግ/ማ",
    service: "የኮርፖሬት ብራንድ መለያ እና ማስታወቂያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ጆርዳኖ ጀሞሌ ኮንስትራክሽን ኃ/የተ/የግ/ማ",
    sizeContext: "የኮርፖሬት መለያ • የግንባታ ስራ ተቋራጭ • ሙሉ የብራንድ ማንነት",
    role: "የብራንድ መለያ ዲዛይነር (KB CREATIVE)",
    summary: "ለግንባታ ስራ ተቋራጭ ድርጅት ጥንካሬን እና ሙያዊ አስተማማኝነትን የሚያንፀባርቅ የኮርፖሬት መለያ ስርዓት።",
    description: "ለጆርዳኖ ጀሞሌ ኮንስትራክሽን የተዘጋጀ ሙሉ የብራንድ ማንነት። የስራ ቦታ ማስታወቂያዎች፣ ሰነዶች እና የተሽከርካሪ ብራንዲንግን ያጠቃልላል።",
    challenge: "በግንባታ ኢንዱስትሪ ውስጥ ጎልቶ የሚታይና የኩባንያውን ምህንድስና ጥራት የሚገልጽ ሎጎ ማበጀት።",
    solution: "መዋቅራዊ ቅርጾችን ከግንባታ መሳሪያዎች ውበት ጋር በማዋሃድ ጠንካራ የኮርፖሬት መለያ ተነድፏል።",
    deliverables: [
      "የኮርፖሬት ሎጎ እና የቀለም ስርዓት",
      "የቢሮ ደብዳቤዎች እና ቢዝነስ ካርዶች",
      "የስራ ቦታ ባነሮች እና የደህንነት አልባሳት መለያ"
    ]
  },
  "tilet-fashion-brand-identity": {
    title: "ጥለት ፋሽን (ጥለት ፋሽን)",
    service: "የባህል ፋሽን አልባሳት ብራንድ መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ጥለት ፋሽን ዲዛይን",
    sizeContext: "የቅንጦት ባህላዊ ፋሽን • የማሸጊያ ንድፍ • የልብስ መለያ ታጎች",
    role: "የብራንድ መለያ ዲዛይነር (KB CREATIVE)",
    summary: "የኢትዮጵያን ባህላዊ ጥልፍ ጥበብ ከዘመናዊ ፋሽን ጋር የሚያዋህድ የልብስ ስፌት ብራንድ መለያ እና ማሸጊያ።",
    description: "ለጥለት ፋሽን የተዘጋጀ ልዩ የብራንድ መለያ። የልብስ መለያ ታጎች፣ የስጦታ ቦርሳዎች እና የማህበራዊ ሚዲያ ገጾችን ያካተተ ነው።",
    challenge: "ባህላዊ የጥለት ቅጦችን ወደ ዘመናዊ አነስተኛ (minimalist) የብራንድ ቅርጽ መቀየር።",
    solution: "የጥበብ መስመሮችን እና የጂኦሜትሪክ ጥልፍ ስልቶችን በማጣመር ውብና ማራኪ የፋሽን ሎጎ ተዘጋጅቷል።",
    deliverables: [
      "የጥለት ሎጎማርክ እና ፊደላት",
      "የልብስ መለያ ታጎች እና ማሸጊያ ቦርሳዎች",
      "የማህበራዊ ሚዲያ ማስተዋወቂያ ዲዛይን"
    ]
  },
  "bego-meaza-media-identity": {
    title: "በጎ መዓዛ ሚዲያ",
    service: "የመገናኛ ብዙኃን እና የይዘት ማዕከል ብራንድ",
    location: "ኢትዮጵያ",
    client: "በጎ መዓዛ ሚዲያ ኔትወርክ",
    sizeContext: "ዲጂታል ሚዲያ • የቴሌቪዥን ግራፊክስ • የማህበራዊ ገጾች መለያ",
    role: "የፈጠራ ዲዛይነር (KB CREATIVE)",
    summary: "መልካም ዜናዎችን፣ ባህልን እና ማህበራዊ እሴቶችን ለህዝብ የሚያደርስ የመገናኛ ብዙኃን ብራንድ መለያ።",
    description: "ለበጎ መዓዛ ሚዲያ የተሰራ የተሟላ ዲጂታል ብራንድ። የቪዲዮ መግቢያ አኒሜሽን፣ የዜና ባነሮች እና የኦንላይን መለያዎችን ያካትታል።",
    challenge: "ተዓማኒነትን፣ ሰላምን እና ተስፋን በአንድ እይታ የሚገልጽ የሚዲያ ሎጎ መቅረጽ።",
    solution: "የብርሃን ጨረር እና ክፍት መጽሐፍን የሚያስታውስ ለስላሳና ማራኪ የእይታ መለያ ተፈጥሯል።",
    deliverables: [
      "የሚዲያ ሎጎማርክ",
      "የስክሪን ግራፊክስ እና የታችኛው ባነር (Lower Thirds)",
      "የማህበራዊ ገጾች መለያ ዲዛይን"
    ]
  },
  "mesob-meals-brand-identity": {
    title: "መሶብ ሚልስ",
    service: "የምግብ መስተንግዶ እና የምግብ ቤት ብራንድ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "መሶብ ሚልስ ፈጣን ምግብ",
    sizeContext: "የፈጣን ምግብ መስተንግዶ • የማሸጊያ ሳጥኖች • የሜኑ ዲዛይን",
    role: "የብራንድ መለያ ዲዛይነር (KB CREATIVE)",
    summary: "የኢትዮጵያን ባህላዊ የመሶብ መስተንግዶ ለዘመናዊ ፈጣን ምግብ አቅርቦት የሚያስተዋውቅ የምግብ ቤት መለያ።",
    description: "ለመሶብ ሚልስ የተሰራ የተሟላ የምግብ ቤት ብራንድ። የሜኑ ካርዶች፣ የማሸጊያ ሳጥኖች እና የሰራተኞች ዩኒፎርም መለያዎችን ያጠቃልላል።",
    challenge: "የመሶብን ባህላዊ ቅርጽ ወደ ፈጣንና ማራኪ ዘመናዊ የምግብ መለያ መቀየር።",
    solution: "የሞቀ የምግብ ፍላጎት ቀለማት እና ግልጽ የመሶብ ቅርጽ ያለው ተወዳጅ ሎጎ ተዘጋጅቷል።",
    deliverables: [
      "የምግብ ቤት ሎጎ እና የቀለም መመሪያ",
      "የምግብ ማሸጊያ ሳጥኖች እና መጠቅለያዎች",
      "የሜኑ ካርድ እና የውስጥ ግድግዳ ግራፊክስ"
    ]
  },
  "danu-store-brand-identity": {
    title: "ዳኑ ስቶር",
    service: "የችርቻሮ እና የፋሽን መደብር መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ዳኑ ስቶር ኃ/የተ/የግ/ማ",
    sizeContext: "የችርቻሮ መደብር • የመደብር ሰሌዳ • የሸቀጦች ማሸጊያ",
    role: "የብራንድ ዲዛይነር (KB CREATIVE)",
    summary: "ለዘመናዊ የችርቻሮ መደብር ንቁ፣ ወጣት ተኮር እና ተደራሽ የሆነ የንግድ መለያ ስርዓት።",
    description: "ለዳኑ ስቶር የተሰራ የንግድ መለያ። የመደብር ቦርድ፣ የዋጋ መለጠፊያዎች እና የግብይት ቦርሳዎችን ያካተተ ነው።",
    challenge: "በመደብር ውስጥ እና በኦንላይን ሽያጭ በቀላሉ የሚለይ ተለዋዋጭ ሎጎ መፍጠር።",
    solution: "ቀላል ጂኦሜትሪክ ፊደላትን ከደማቅ ቀለማት ጋር በማጣመር ሁለገብ የመደብር መለያ ተዘጋጅቷል።",
    deliverables: [
      "የመደብር ሎጎ እና ፊደላት",
      "የግብይት ቦርሳዎች እና የመለያ ታጎች",
      "የመደብር ፊት ለፊት ሰሌዳ ንድፍ"
    ]
  },
  "almaz-jewellery-brand-identity": {
    title: "አልማዝ ጌጣጌጥ",
    service: "የቅንጦት ጌጣጌጥ እና ጌጣጌጥ መደብር መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "አልማዝ ጌጣጌጥ እና አልማዝ አውደ ጥናት",
    sizeContext: "የቅንጦት ጌጣጌጥ • የወርቅ ሳጥኖች • የደህንነት ሰርተፊኬት",
    role: "የብራንድ ዲዛይነር (KB CREATIVE)",
    summary: "የወርቅ እና አልማዝ ጌጣጌጦችን ክብር እና ውበት የሚያንፀባርቅ የከፍተኛ ደረጃ መለያ።",
    description: "ለአልማዝ ጌጣጌጥ የተሰራ የተሟላ የብራንድ ስርዓት። የጌጣጌጥ ሳጥኖች፣ የዋስትና ሰርተፊኬቶች እና ልዩ የስጦታ መጠቅለያዎችን ያካትታል።",
    challenge: "የረቀቀ ውበትን፣ ጥንቃቄን እና የቅንጦት ስሜትን በአነስተኛ መስመሮች መግለጽ።",
    solution: "የአልማዝ ፍንጣቂ መስመሮችን ከወርቃማ ቀለሞች ጋር በማቀናጀት የቅንጦት ሎጎ ተነድፏል።",
    deliverables: [
      "የቅንጦት ሎጎማርክ እና ሞኖግራም",
      "የጌጣጌጥ ሳጥኖች እና የሰርተፊኬት ዲዛይን",
      "የመደብር ውስጣዊ መለያ ምልክቶች"
    ]
  },
  "dot-creative-agency-identity": {
    title: "ዶት ክሪኤቲቭ",
    service: "የፈጠራ ስቱዲዮ እና የዲዛይን ኤጀንሲ መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ዶት ክሪኤቲቭ ስቱዲዮ",
    sizeContext: "የፈጠራ ስቱዲዮ • የኮርፖሬት መለያ • የፖርትፎሊዮ ሰነዶች",
    role: "የፈጠራ ምሪት እና ዲዛይን (KB CREATIVE)",
    summary: "አነስተኛ ቅርፅ ያለው፣ የሃሳብ መነሻ ነጥብን የሚያሳይ ለዲጂታል ፈጠራ ስቱዲዮ የተሰራ መለያ።",
    description: "ለዶት ክሪኤቲቭ የተሰራ ሙሉ የብራንድ መለያ። ፖርትፎሊዮ ሰነዶች፣ ድረ-ገጽ እና የዲጂታል ካርዶችን ያጠቃልላል።",
    challenge: "ከፍተኛ የፈጠራ ነፃነትን እና ትክክለኛነትን የሚያሳይ ዘመናዊ አርማ ማበጀት።",
    solution: "ነጥብን እንደ ሃሳብ ጅማሮ በመውሰድ በጂኦሜትሪክ ቅንጅት የተሰራ አርማ ተዘጋጅቷል።",
    deliverables: [
      "የስቱዲዮ ሎጎ እና የቀለም ፓሌት",
      "የቢዝነስ ካርዶች እና የፕሮፖዛል ሰነዶች",
      "የድረ-ገጽ እና የማህበራዊ ገጾች ገጽታ"
    ]
  },
  "dama-marketing-brand-identity": {
    title: "ዳማ ማርኬቲንግ",
    service: "የዲጂታል ግብይት እና የስትራቴጂ ኤጀንሲ መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ዳማ ማርኬቲንግ እና ኮሙዩኒኬሽን",
    sizeContext: "የግብይት ኤጀንሲ • የስትራቴጂ ሪፖርቶች • የዲጂታል ማስታወቂያዎች",
    role: "የብራንድ መለያ ዲዛይነር (KB CREATIVE)",
    summary: "የንግድ ድርጅቶችን እድገትና የገበያ ተደራሽነት የሚያሳልጥ የማርኬቲንግ ኤጀንሲ መለያ።",
    description: "ለዳማ ማርኬቲንግ የተዘጋጀ የንግድ መለያ። የግብይት ሰነዶች፣ የሪፖርት አቀራረቦች እና ዲጂታል አርማዎችን ያካትታል።",
    challenge: "የስትራቴጂክ አስተሳሰብንና የንግድ እንቅስቃሴን በአንድ እይታ መግለጽ።",
    solution: "የዳማ ሰሌዳ ስትራቴጂን ከእድገት ቀስቶች ጋር በማጣመር የተሰራ ንቁ የኮርፖሬት አርማ።",
    deliverables: [
      "የኤጀንሲ ሎጎ እና መለያ",
      "የአቀራረብ ስላይዶች (Pitch Deck) ቴምፕሌት",
      "የዲጂታል ማስታወቂያ ግራፊክስ"
    ]
  },
  "tinu-gifts-brand-identity": {
    title: "ቲኑ ጊፍትስ",
    service: "የስጦታ እና የዕደ-ጥበብ መደብር መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    client: "ቲኑ ጊፍትስ እና ቡቲክ",
    sizeContext: "የስጦታ መደብር • ልዩ ማሸጊያዎች • የሪቫን ታጎች",
    role: "የብራንድ ዲዛይነር (KB CREATIVE)",
    summary: "ለወዳጅ ዘመድ የሚሰጡ ልዩ ስጦታዎችን እና የእጅ ስራዎችን የሚያቀርብ መደብር ማራኪ መለያ።",
    description: "ለቲኑ ጊፍትስ የተሰራ የተሟላ የስጦታ መደብር ብራንድ። የስጦታ ካርዶች፣ የማሸጊያ ሪቫኖች እና ፌስቲቫል ባነሮችን ያጠቃልላል።",
    challenge: "የፍቅርን፣ የደስታን እና የስጦታን ሞቅታ የሚያስተላልፍ ተግባቢ ሎጎ መፍጠር።",
    solution: "የሪቫን መጠቅለያ እና የልብ ቅርጽን በፈጠራ በማዋሃድ የተዘጋጀ ማራኪ አርማ።",
    deliverables: [
      "የስጦታ መደብር ሎጎ",
      "የስጦታ ካርዶች እና መጠቅለያ ሪቫኖች",
      "የማሸጊያ ቦርሳዎች ዲዛይን"
    ]
  },
  "roman-catering-brand-identity": {
    title: "ሮማን ኬተሪንግ",
    service: "የኬተሪንግ እና የሆስፒታሊቲ ብራንድ መለያ",
    location: "አዲስ አበባ፣ ኢትዮጵያ (የKB CREATIVE ስራ)",
    client: "ሮማን ኬተሪንግ እና የዝግጅት አዘጋጅ አገልግሎት",
    sizeContext: "የአስተናጋጅ + የመሶብ + የR ሞኖግራም • ዘመናዊ የምግብ ማሸጊያዎች • የዝግጅት አቅርቦት",
    role: "የብራንድ ዲዛይነር እና የፈጠራ ዳይሬክተር (KB CREATIVE)",
    summary: "የኢትዮጵያን ባህላዊ መስተንግዶ እና ዘመናዊ የኬተሪንግ አገልግሎትን ያጣመረ የላቀ የብራንድ መለያ ስርዓት።",
    description: "ለሮማን ኬተሪንግ የተሰራ የተሟላ የብራንድ መለያ ስርዓት። ሎጎው ሶስት ዋና ዋና ፅንሰ ሀሳቦችን በጂኦሜትሪክ ጥበብ ያዋህዳል፡- አስተናጋጅ በስራ ላይ፣ ባህላዊው የኢትዮጵያ መሶብ እና የእንግሊዝኛው ፊደል 'R'። ስራው ለአካባቢ ተስማሚ የሆኑ የምግብ ማሸጊያዎችን፣ የዝግጅት ማቅረቢያ ሳጥኖችን፣ የማሸጊያ ሪባኖችን እና የሰራተኞች መለያዎችን ያካትታል።",
    challenge: "የባህላዊ መሶብን ሞቃት ገጽታ ከዘመናዊ የሆቴልና የዝግጅት ኬተሪንግ ደረጃ ጋር በማጣመር ቀላልና ተወዳጅ ሎጎ መፍጠር።",
    solution: "ሞቃት አምበር እና ሬድ በርገንዲ ቀለማትን በመጠቀም፣ በጂኦሜትሪክ ግሪድ የተሰላ እና በማንኛውም ማሸጊያ ላይ በቀላሉ የሚታይ ሁለገብ ሎጎ ተዘጋጅቷል።",
    deliverables: [
      "ዋናው የሮማን ኬተሪንግ ሎጎ እና የጂኦሜትሪክ ግሪድ ንድፍ",
      "የፅንሰ ሀሳብ ማብራሪያ (አስተናጋጅ + መሶብ + ፊደል R)",
      "ለአካባቢ ተስማሚ የሆኑ የምግብ ማሸጊያ ሳጥኖች እና ቦርሳዎች",
      "ተደጋጋሚ የብራንድ ፓተርን እና የቀለም ጥምረቶች",
      "የሆስፒታሊቲ ማቅረቢያ ትሪ እና የክብር መለያዎች"
    ]
  }
};

function getLocalizedProject(project, lang) {
  if (lang === 'am' && KB_PROJECT_AM[project.id]) {
    const am = KB_PROJECT_AM[project.id];
    return {
      ...project,
      title: am.title || project.title,
      service: am.service || project.service,
      location: am.location || project.location,
      client: am.client || project.client,
      summary: am.summary || project.summary,
      sizeContext: am.sizeContext || project.sizeContext,
      role: am.role || project.role,
      challenge: am.challenge || project.challenge,
      solution: am.solution || project.solution,
      description: am.description || project.description,
      deliverables: am.deliverables || project.deliverables
    };
  }
  return project;
}

/* ==========================================================================
   2. Theme Switcher Engine (Merged On/Off Toggle Button with Sun/Moon Icons)
   ========================================================================== */
function initThemeEngine() {
  const themeToggles = document.querySelectorAll('.theme-circle-btn, .theme-toggle-switch, #theme-toggle-btn, #mobile-theme-toggle-btn');
  const storedTheme = localStorage.getItem('kb_theme') || 'light';
  
  // Enforce light or dark only
  const activeTheme = (storedTheme === 'dark') ? 'dark' : 'light';
  applyTheme(activeTheme);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('kb_theme', newTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = (theme === 'dark');
    themeToggles.forEach(b => {
      b.setAttribute('aria-checked', isDark ? 'true' : 'false');
      const isAm = (window.getCurrentLang && window.getCurrentLang() === 'am');
      b.setAttribute('title', isDark 
        ? (isAm ? 'ወደ ብርሃን ገጽታ ቀይር (Light Mode)' : 'Switch to Light Mode')
        : (isAm ? 'ወደ ጨለማ ገጽታ ቀይር (Dark Mode)' : 'Switch to Dark Mode')
      );
    });
  }
}

/* ==========================================================================
   3. Multilingual Amharic (አማ) & English (EN) Language Engine
   ========================================================================== */
const KB_I18N = {
  en: {
    // Header & Navigation
    phone_label: "PHONE:",
    status_strip_location: "✦ ATELIER // WOLKITE & ADDIS ABABA, ETHIOPIA [8.04°N, 37.85°E]",
    status_strip_standing: "STUDIO: SPATIAL ARCHITECTURE & BRAND IDENTITY",
    status_strip_contact: `TEL: <a href="tel:+251941263180" style="color: inherit; text-decoration: none; font-weight: 700;">+251 941263180</a> • 2026 COMMISSIONS OPEN`,
    brand_sub: "SPATIAL ARCHITECTURE & BRAND IDENTITY",
    nav_about: "About",
    nav_works: "Projects",
    nav_skills: "Core Skills",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    cta_initiate: "Initiate Collaboration",
    menu_label: "MENU",
    menu_header: "KB CREATIVE // MENU",
    
    // Mobile Drawer
    mob_sub_about: "Studio Direction & Spatial Pedagogy",
    mob_sub_works: "15 Curated Projects • Spatial & Brand",
    mob_sub_skills: "8 Software Tools • Multilingual Fluency",
    mob_sub_faq: "Process & Clarifications Page",
    mob_sub_contact: "Direct Telegram, Phone & Proposal",
    mob_cv_btn: "Download CV / Portfolio PDF [7.4 MB]",
    mob_telegram_cta: "Initiate Collaboration (Telegram) ↗",
    mob_footnote: "KB CREATIVE • SPATIAL ARCHITECTURE & BRAND IDENTITY",
    
    // Hero Section
    hero_tag: `<span>● SPATIAL ARCHITECTURE</span><span>•</span><span>3D CGI VISUALIZATION</span><span>•</span><span>KB CREATIVE</span>`,
    hero_title: `Hi, I'm <span class="highlight-yellow">Kaleegziabher Fekede</span> <span class="block outline-text">(KB CREATIVE).</span>`,
    hero_bio: `<strong>Architectural Designer</strong> and Creative Director of <strong>KB CREATIVE</strong>. Practicing at the intersection of spatial architecture, technical 3D visualization, and monolithic corporate brand identity systems across Ethiopia and remote worldwide.`,
    avail_tag: "CURRENT AVAILABILITY // 2026 COMMISSIONS",
    avail_body: `Accepting select client commissions for <strong>Spatial Architecture</strong> (residential & interior renovations), <strong>Cinematic 3D Visualization</strong> (photorealistic rendering & daylight simulation), and <strong>Brand Identity Systems</strong> (monograms, logomarks & brand guidelines).`,
    hero_cv: "Download CV / Portfolio PDF",
    hero_explore: "Explore 15 Curated Projects",
    
    // Hero Stats
    stat_student: "Spatial & Brand Design",
    stat_studies: "Curated Case Studies",

    // Practice Filter Pills
    filter_all: "All Projects (15)",
    filter_arch: "Spatial Architecture (04)",
    filter_vis: "3D Visualization (04)",
    filter_brand: "Brand Identity (11)",
    sub_all: "All Typologies",
    sub_interior: "Interior & Renovation",
    sub_mixeduse: "Mixed-Use",
    sub_residential: "Residential",
    sub_sports: "Sports & Wellness",
    sub_sustainable: "Sustainable / Eco",
    sub_identity: "Brand & UI",
    
    // Projects Section
    chap_01: "CHAPTER 01 // ARCHITECTURAL & BRAND CHRONICLE",
    archive_title: "PORTFOLIO ARCHIVE",
    editorial_title: "Curated Architectural & Graphic Projects",
    editorial_desc: "15 curated projects spanning Spatial Architecture, Photorealistic 3D CGI, and Corporate Brand Identity Systems.",
    view_case_study: "View Case Study",

    // Skills Section
    skills_title: "Technical & Disciplinary Toolkit",
    skills_desc: "A rigorous cross-disciplinary synthesis of spatial precision, monolithic visual brand architecture, high-fidelity 3D visualization, and multilingual execution.",
    academic_tag: "ACADEMIC PROFILE & STUDIO PEDAGOGY",
    academic_title: "Architecture & Environmental Design Candidate — Wolkite University",
    academic_desc: "Synthesizing university studio research in bioclimatic spatial design, structural detailing, and BIM documentation with active commercial design commissions under <strong>KB CREATIVE</strong>.",
    academic_badge: "CLASS OF 2026 // B.SC. CANDIDATE",
    discipline_arch_tag: "01 // SPATIAL ARCHITECTURE",
    discipline_arch_title: "Architecture",
    discipline_brand_tag: "02 // BRAND & VISUAL IDENTITY",
    discipline_brand_title: "Brand Systems",
    discipline_strat_tag: "03 // STRATEGY & DIRECTION",
    discipline_strat_title: "Creative Direction",
    skills_software_tag: "TECHNICAL COMPUTING // 8 INDUSTRY TOOLS",
    skills_software_title: "Software Skills",
    skills_lang_tag: "FLUENCY & REGIONAL CONTEXT",
    skills_lang_title: "Languages",
    lang_amharic: "Amharic (Native Proficiency)",
    lang_english: "English (Professional Working)",
    collab_note_title: "LEADERSHIP & COLLABORATION",
    collab_note_text: "Multilingual fluency facilitating seamless technical coordination with construction teams on site, academic peers at Wolkite University, and commercial corporate clients across Ethiopia and worldwide.",

    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_desc: "Essential clarifications on architectural commissions, cinematic 3D CGI visualization workflows, technical deliverables, and bespoke brand identity design with KB CREATIVE.",
    faq_q1: "What architectural and design services does KB CREATIVE provide?",
    faq_a1: "We specialize in three integrated disciplines: (1) <strong>Spatial Architecture</strong> for residential villas (such as the Kara G+2 Residence), interior workplace renovations (Acute Engineering), and commercial mixed-use concourses (MENA MALL); (2) <strong>Cinematic 3D CGI Visualization</strong> featuring photorealistic atmospheric daylight simulations, materiality texturing, and BIM documentation in Autodesk Revit &amp; D5 Render; and (3) <strong>Corporate Brand Identity Systems</strong> covering logomarks, typography, and packaging architecture.",
    faq_q2: "How does the project design workflow proceed from concept to final delivery?",
    faq_a2: "Every project follows an architectural 4-stage methodology: (1) <strong>Brief &amp; Site Analysis</strong>: clarifying programmatic requirements, plot dimensions, slope, and solar angles; (2) <strong>Spatial Massing &amp; Circulation Zoning</strong>: structural grid layout and functional space hierarchy; (3) <strong>Photorealistic 3D Simulation</strong>: exploring lighting conditions, materials, and camera perspectives for client alignment; and (4) <strong>Technical Working Drawings</strong>: dimensioned architectural plans, sections, joinery specifications, and high-resolution marketing visuals.",
    faq_q3: "What files or information are needed to start a 3D visualization project?",
    faq_a3: "To initiate a 3D visualization commission, you can provide CAD files (.dwg), 3D models (Revit, Rhino, SketchUp, or Blender), architectural PDF drawings, or even hand-sketched floor plans with dimensions. Providing reference imagery, landscape context, or preferred material palettes accelerates the lighting and texturing phase.",
    faq_q4: "Do you accept remote and international commissions outside Ethiopia?",
    faq_a4: "Yes. While based between Wolkite University and Addis Ababa, Ethiopia, KB CREATIVE actively collaborates with international developers, architects, and private clients worldwide. Digital collaboration is conducted seamlessly via Telegram (<a href=\"https://t.me/Kalegzi_7\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-yellow); text-decoration:none; font-weight:700;\">@Kalegzi_7</a>), email, Google Meet, and secure cloud storage.",
    faq_q5: "What is the typical turnaround timeline for deliverables?",
    faq_a5: "Turnaround timelines are calibrated to scope: high-fidelity 3D renderings (3–5 perspectives) are typically delivered within <strong>3 to 7 business days</strong>. Comprehensive residential concepts, interior spatial renovation designs, or corporate brand identity suites range between <strong>1 to 3 weeks</strong> with structured milestone check-ins.",
    faq_q6: "Can I commission a unified Spatial Architecture and Brand Identity package?",
    faq_a6: "Yes. A core strength of KB CREATIVE is the cross-disciplinary union of spatial architecture and corporate visual identity. For commercial developments, retail malls (e.g., MENA MALL), and corporate offices (Acute Engineering), we design the architectural spaces alongside the 3D illuminated exterior storefront signage, interior wayfinding graphics, and company branding collateral.",

    // Contact Section
    chap_04: "DIALOGUE & COMMISSION INQUIRY",
    contact_super: "Direct Collaboration",
    contact_hero_title: `Let's Build Something <span style="color: var(--brand-yellow);">Remarkable</span> Together.`,
    contact_status: "CURRENT STATUS: AVAILABLE FOR ARCHITECTURE, 3D VISUALIZATION & BRAND COMMISSIONS",
    contact_intro: `Principal designer and architectural director at <strong>KB CREATIVE</strong>. Available for spatial architectural concepts, residential and interior renovations, photorealistic 3D visualization, or bespoke brand identity systems across Ethiopia and remote worldwide.`,
    contact_cv_title: "Download CV / Portfolio PDF",
    contact_cv_meta: "2026 Comprehensive Archive • Architecture & Brand Systems [7.4 MB]",
    inquiry_name_label: "Your Full Name",
    inquiry_email_label: "Email Address",
    inquiry_service_label: "Project Scope Required",
    inquiry_brief_label: "Project Brief & Site Details",
    inquiry_submit: "Transmit Proposal To KB CREATIVE →",
    empty_void_tag: "00 // VOID SPECIFICATION",
    empty_void_title: "No projects match the selected filter combination",
    empty_void_desc: "Clear your sub-category selection or switch practice typologies to explore all 15 curated projects.",
    empty_reset_btn: "Reset Filters (Show All 15 Projects) →",
    mob_lang_label: "LANG:",
    mob_theme_label: "THEME:",
    footer_rights: "ALL RIGHTS RESERVED © 2026",
    skill_arch_1: "Spatial Design",
    skill_arch_2: "Bioclimatic Planning",
    skill_arch_3: "Working Drawings",
    skill_arch_4: "Space Optimization",
    skill_arch_5: "Interior Architecture",
    skill_arch_6: "Residential Estates",
    skill_arch_7: "Atmospheric Visualization",
    skill_brand_1: "Brand Architecture",
    skill_brand_2: "Logomark Engineering",
    skill_brand_3: "Digital UI / UX",
    skill_brand_4: "Packaging Suites",
    skill_brand_5: "Storefront Environments",
    skill_brand_6: "Executive Collateral",
    skill_brand_7: "Design Guidelines",
    skill_lead_1: "Creative Direction",
    skill_lead_2: "Project Strategy",
    skill_lead_3: "Spatial Curation",
    skill_lead_4: "Client Consultation",
    skill_lead_5: "Studio Leadership",
    skill_lead_6: "Academic Mentorship",
    skill_lead_7: "Brand Management"
  },
  am: {
    // Header & Navigation
    phone_label: "ስልክ:",
    status_strip_location: "✦ ስቱዲዮ // ወልቂጤ እና አዲስ አበባ፣ ኢትዮጵያ [8.04°N, 37.85°E]",
    status_strip_standing: "ስቱዲዮ: የቦታ አርክቴክቸር እና የብራንድ ማንነት",
    status_strip_contact: `ስልክ: <a href="tel:+251941263180" style="color: inherit; text-decoration: none; font-weight: 700;">+251 941263180</a> • ለ2026 ክፍት`,
    brand_sub: "የቦታ አርክቴክቸር እና የብራንድ ማንነት",
    nav_about: "ስለ እኔ",
    nav_works: "ፕሮጀክቶች",
    nav_skills: "ዋና ክህሎቶች",
    nav_faq: "ተዘውታሪ ጥያቄዎች",
    nav_contact: "አግኙን",
    cta_initiate: "አብረን እንስራ",
    menu_label: "ማውጫ",
    menu_header: "KB CREATIVE // ማውጫ",
    
    // Mobile Drawer
    mob_sub_about: "የስራ ፍልስፍና እና የስቱዲዮ መረጃ",
    mob_sub_works: "15 የተመረጡ ፕሮጀክቶች • ህንፃ እና ብራንድ ዲዛይን",
    mob_sub_skills: "8 የሶፍትዌር መተግበሪያዎች • ቋንቋዎች",
    mob_sub_faq: "የአሰራር ሂደት እና ማብራሪያዎች ገጽ",
    mob_sub_contact: "ቴሌግራም፣ ስልክ እና የፕሮፖዛል ጥያቄ",
    mob_cv_btn: "ሲቪ / ፖርትፎሊዮ ያውርዱ [7.4 MB]",
    mob_telegram_cta: "በቴሌግራም ያግኙኝ ↗",
    mob_footnote: "ኬቢ ክሪኤቲቭ • አርክቴክቸር እና የብራንድ ማንነት",
    
    // Hero Section
    hero_tag: `<span>● የቦታ አርክቴክቸር</span><span>•</span><span>3D ቪዥዋላይዜሽን</span><span>•</span><span>ኬቢ ክሪኤቲቭ</span>`,
    hero_title: `ሰላም፣ እኔ <span class="highlight-yellow">ቃልእግዚአብሔር ፈቀደ</span> <span class="block outline-text">(KB CREATIVE) ነኝ።</span>`,
    hero_bio: `የ<strong>አርክቴክቸር ዲዛይነር</strong> እና የ<strong>KB CREATIVE</strong> መስራችና የፈጠራ ዳይሬክተር። በህንፃ እና የቦታ ንድፍ፣ 3D ቪዥዋላይዜሽን እና የብራንድ መለያ ዲዛይን ላይ እሰራለሁ።`,
    avail_tag: "የስራ ዝግጁነት // የ2026 ስራዎች",
    avail_body: `ለ<strong>አርክቴክቸር ህንፃ ንድፍ</strong> (መኖሪያ እና የውስጥ እድሳት)፣ ለ<strong>3D ቪዥዋላይዜሽን</strong> (የብርሃን እና የቁስ ሲሙሌሽን)፣ እና ለ<strong>ብራንድ መለያ ዲዛይን</strong> አዳዲስ ፕሮጀክቶችን እቀበላለሁ።`,
    hero_cv: "ሲቪ / ፖርትፎሊዮ ያውርዱ",
    hero_explore: "15 የተመረጡ ፕሮጀክቶችን ይመልከቱ",
    
    // Hero Stats
    stat_student: "የቦታ እና ብራንድ ዲዛይን",
    stat_studies: "የተመረጡ ስራዎች",

    // Practice Filter Pills
    filter_all: "ሁሉም ፕሮጀክቶች (15)",
    filter_arch: "አርክቴክቸር (04)",
    filter_vis: "3D ቪዥዋላይዜሽን (04)",
    filter_brand: "የብራንድ መለያ (11)",
    sub_all: "ሁሉም አይነቶች",
    sub_interior: "የውስጥ ዲዛይን እና እድሳት",
    sub_mixeduse: "የተደባለቀ አገልግሎት",
    sub_residential: "መኖሪያ ቤት",
    sub_sports: "ስፖርት እና ጤና ማዕከል",
    sub_sustainable: "ኢኮ-ተስማሚ ንድፍ",
    sub_identity: "ብራንድ እና መለያ",
    
    // Projects Section
    chap_01: "ክፍል 01 // የአርክቴክቸር እና የብራንድ ስራዎች",
    archive_title: "የስራዎች ማህደር",
    editorial_title: "የተመረጡ የአርክቴክቸር እና ግራፊክ ዲዛይን ፕሮጀክቶች",
    editorial_desc: "የቦታ አርክቴክቸርን፣ የቀንና የምሽት 3D ቪዥዋላይዜሽንን እና ሞኖሊቲክ የኮርፖሬት ብራንድ መለያዎችን ያካተቱ 15 የተመረጡ ፕሮጀክቶች።",
    view_case_study: "ዝርዝር ይመልከቱ",

    // Skills Section
    skills_title: "የቴክኒክ እና የሙያ ብቃት ማትሪክስ",
    skills_desc: "የቦታ ጥንቃቄ፣ የብራንድ ዲዛይን፣ ከፍተኛ ጥራት ያለው 3D ቪዥዋላይዜሽን እና የባለብዙ ቋንቋ ቅንጅት።",
    academic_tag: "የትምህርት መረጃ እና የስቱዲዮ ልምምድ",
    academic_title: "የአርክቴክቸር እና የአካባቢ ንድፍ እጩ — ወልቂጤ ዩኒቨርሲቲ",
    academic_desc: "በባዮክላይማቲክ የቦታ ንድፍ፣ በመዋቅር ዝርዝር እና በBIM ሰነዶች ላይ ያተኮረ ዩኒቨርሲቲ ምርምርን ከ<strong>KB CREATIVE</strong> ተግባራዊ ስራዎች ጋር ማስተሳሰር።",
    academic_badge: "የ2026 ተመራቂ // የአርክቴክቸር እጩ",
    discipline_arch_tag: "01 // ህንፃ እና የቦታ ንድፍ",
    discipline_arch_title: "አርክቴክቸር",
    discipline_brand_tag: "02 // የብራንድ መለያ ዲዛይን",
    discipline_brand_title: "የብራንድ ስርዓቶች",
    discipline_strat_tag: "03 // ስትራቴጂ እና ምሪት",
    discipline_strat_title: "የፈጠራ ምሪት",
    skills_software_tag: "የኮምፒውተር ሶፍትዌር // 8 የኢንዱስትሪ መተግበሪያዎች",
    skills_software_title: "የሶፍትዌር ክህሎቶች",
    skills_lang_tag: "የቋንቋ ችሎታ እና ክልላዊ ግንኙነት",
    skills_lang_title: "ቋንቋዎች",
    lang_amharic: "አማርኛ (የአፍ መፍቻ ቋንቋ)",
    lang_english: "እንግሊዝኛ (የስራ ቋንቋ)",
    collab_note_title: "አመራር እና ትብብር",
    collab_note_text: "ከግንባታ ቡድኖች፣ ከወልቂጤ ዩኒቨርሲቲ የአካዳሚክ ባልደረቦች እና አለምአቀፍ ደንበኞች ጋር ያለምንም እንቅፋት በብቃት ለመስራት የሚያስችል የቋንቋ ክህሎት።",

    // FAQ Section
    faq_title: "ተዘውታሪ ጥያቄዎች እና መልሶች",
    faq_desc: "ስለ ህንፃ ንድፍ፣ 3D ቪዥዋላይዜሽን፣ የቴክኒክ ሰነዶች እና የብራንድ መለያ ስራዎች ከKB CREATIVE ጋር ለመስራት የሚያስፈልጉ ጠቃሚ መረጃዎች።",
    faq_q1: "KB CREATIVE ምን አይነት የአርክቴክቸር እና የዲዛይን አገልግሎቶችን ይሰጣል?",
    faq_a1: "በሶስት ዋና ዋና ዘርፎች እንሰራለን፦ (1) <strong>የቦታ እና የህንፃ ንድፍ</strong> ለመኖሪያ ቤቶች (እንደ ካራ G+2 መኖሪያ)፣ ለውስጥ እድሳት (አኪዩት ኢንጂነሪንግ) እና ለንግድ ማዕከላት (ሜና ሞል)፤ (2) <strong>3D CGI ቪዥዋላይዜሽን</strong> የብርሃን እና የቁሳቁስ እውነተኛ እይታዎችን እና የBIM ሰነዶችን በAutodesk Revit እና D5 Render ማዘጋጀት፤ እና (3) <strong>የብራንድ መለያ ዲዛይን</strong> ሎጎዎችን፣ ፊደላትን እና የማሸጊያ ንድፎችን ያጠቃልላል።",
    faq_q2: "የፕሮጀክት ዲዛይን እና የማጠናቀቂያ ሂደት እንዴት ይካሄዳል?",
    faq_a2: "ስራችን በ4 ደረጃዎች ይከናወናል፦ (1) <strong>የቦታ እና የፍላጎት ጥናት</strong>፦ የቦታውን ስፋት፣ አቅጣጫ እና የፀሐይ ብርሃን ሁኔታ መመርመር፤ (2) <strong>የቦታ ክፍፍል እና ቅርፅ ማውጣት</strong>፦ የተግባር አደረጃጀትን ማስተካከል፤ (3) <strong>እውነተኛ 3D ቪዥዋላይዜሽን</strong>፦ የብርሃን እና የቀለማት ሁኔታን በምስል ማሳየት፤ እና (4) <strong>የግንባታ ዝርዝር ሰነዶች</strong>፦ ትክክለኛ መለኪያ ያላቸው ፕላኖች፣ ሴክሽኖች እና ዝርዝር መመሪያዎችን ማዘጋጀት።",
    faq_q3: "የ3D ቪዥዋላይዜሽን ስራ ለመጀመር ምን አይነት ፋይሎች ያስፈልጋሉ?",
    faq_a3: "የCAD ፋይሎች (.dwg)፣ የ3D ሞዴሎች (Revit፣ Rhino፣ SketchUp)፣ የPDF ፕላኖች ወይም በእጅ የተሳሉ መለኪያ ያላቸው ስኬቾችን መስጠት ይችላሉ። የቦታውን ፎቶዎች እና የሚፈልጓቸውን የቀለም ምርጫዎች ማካተት ስራውን ያፋጥነዋል።",
    faq_q4: "ከኢትዮጵያ ውጭ ያሉ አለምአቀፍ ስራዎችን በኦንላይን ይቀበላሉ?",
    faq_a4: "አዎ። በወልቂጤ ዩኒቨርሲቲ እና በአዲስ አበባ የምንገኝ ቢሆንም፣ በቴሌግራም (<a href=\"https://t.me/Kalegzi_7\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-yellow); text-decoration:none; font-weight:700;\">@Kalegzi_7</a>)፣ በኢሜይል እና በኦንላይን ስብሰባዎች ከአለም ዙሪያ ካሉ ደንበኞች ጋር በተሳካ ሁኔታ እንሰራለን።",
    faq_q5: "አንድን ፕሮጀክት ለማጠናቀቅ ምን ያህል ጊዜ ይወስዳል?",
    faq_a5: "እንደ ስራው ስፋት ይወሰናል፦ ከፍተኛ ጥራት ያላቸው የ3D ምስሎች (ከ3-5 እይታዎች) በ<strong>ከ3 እስከ 7 የስራ ቀናት</strong> ውስጥ ይደርሳሉ። አጠቃላይ የመኖሪያ ህንፃ ዲዛይኖች እና የብራንድ መለያ ስራዎች ከ<strong>1 እስከ 3 ሳምንታት</strong> ሊወስዱ ይችላሉ።",
    faq_q6: "የህንፃ ንድፍ እና የብራንድ መለያ ስራን በአንድ ላይ ማዘዝ ይቻላል?",
    faq_a6: "አዎ። የKB CREATIVE አንዱ ልዩ ጥንካሬ የህንፃ ንድፍን ከንግድ ምልክት ጋር አጣምሮ መስራት ነው። ለንግድ ማዕከላት (ለምሳሌ ሜና ሞል) እና ለቢሮዎች የህንፃውን ንድፍ ከውጭ እና ከውስጥ የማስታወቂያ ቦርዶች እና የኮርፖሬት መለያዎች ጋር አቀናጅተን እንሰራለን።",

    // Contact Section
    chap_04: "ውይይት እና የስራ ጥያቄ",
    contact_super: "አብረን እንስራ // ያግኙን",
    contact_hero_title: `አብረን <span style="color: var(--brand-yellow);">ድንቅ ነገር</span> እንገንባ።`,
    contact_status: "የስራ ዝግጁነት: ለአርክቴክቸር፣ 3D ቪዥዋላይዜሽን እና ብራንድ ዲዛይን ስራዎች ክፍት ነኝ",
    contact_intro: `በ<strong>KB CREATIVE</strong> ዋና ዲዛይነር እና የፈጠራ ዳይሬክተር። ለህንፃ ንድፍ፣ ለመኖሪያ እና የውስጥ እድሳት፣ ለ3D ቪዥዋላይዜሽን ወይም ለብራንድ መለያ ስራዎች ዝግጁ ነኝ።`,
    contact_cv_title: "ሲቪ / ፖርትፎሊዮ ያውርዱ",
    contact_cv_meta: "የ2026 አጠቃላይ ማህደር • ህንፃ እና ብራንድ ሲስተሞች [7.4 MB]",
    inquiry_name_label: "ሙሉ ስምዎት",
    inquiry_email_label: "ኢሜይል አድራሻ",
    inquiry_service_label: "የፕሮጀክቱ አይነት",
    inquiry_brief_label: "የፕሮጀክቱ ዝርዝር እና የቦታ መረጃ",
    inquiry_submit: "ፕሮፖዛሉን ለKB CREATIVE ይላኩ →",
    empty_void_tag: "00 // ምንም ውጤት አልተገኘም",
    empty_void_title: "ከተመረጠው መስፈርት ጋር የሚዛመድ ስራ የለም",
    empty_void_desc: "ሁሉንም 15 ስራዎች ለማየት ማጣሪያውን ያጽዱ።",
    empty_reset_btn: "ማጣሪያውን አጽዳ (ሁሉንም 15 ስራዎች አሳይ) →",
    mob_lang_label: "ቋንቋ:",
    mob_theme_label: "ገጽታ:",
    footer_rights: "መብቱ በህግ የተጠበቀ ነው © 2026",
    skill_arch_1: "የቦታ ንድፍ",
    skill_arch_2: "የአየር ንብረት ተስማሚ ፕላን",
    skill_arch_3: "የግንባታ ዝርዝር ሰነዶች",
    skill_arch_4: "የቦታ አጠቃቀም ማሻሻል",
    skill_arch_5: "የውስጥ አርክቴክቸር",
    skill_arch_6: "የመኖሪያ መንደሮች ንድፍ",
    skill_arch_7: "እውነተኛ የከባቢ አየር ምስል",
    skill_brand_1: "የብራንድ አወቃቀር",
    skill_brand_2: "የሎጎ ምህንድስና",
    skill_brand_3: "የዲጂታል UI / UX",
    skill_brand_4: "የማሸጊያ ንድፎች",
    skill_brand_5: "የመደብር ፊት ለፊት እይታ",
    skill_brand_6: "የኮርፖሬት መረጃ ሰነዶች",
    skill_brand_7: "የብራንድ መመሪያ ደንቦች",
    skill_lead_1: "የፈጠራ ምሪት",
    skill_lead_2: "የፕሮጀክት ስትራቴጂ",
    skill_lead_3: "የቦታ ቅንጅት",
    skill_lead_4: "የደንበኛ ምክክር",
    skill_lead_5: "የስቱዲዮ አመራር",
    skill_lead_6: "የትምህርት ድጋፍ",
    skill_lead_7: "የብራንድ አስተዳደር"
  }
};

window.toggleFaq = function(button) {
  const item = button.closest('.faq-accordion-item');
  if (!item) return;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  document.querySelectorAll('.faq-accordion-item.active').forEach(openItem => {
    if (openItem !== item) {
      openItem.classList.remove('active');
      openItem.querySelector('.faq-trigger-btn')?.setAttribute('aria-expanded', 'false');
    }
  });

  if (isExpanded) {
    item.classList.remove('active');
    button.setAttribute('aria-expanded', 'false');
  } else {
    item.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
  }
};

window.getCurrentLang = function() {
  return localStorage.getItem('kb_lang') || 'en';
};

function initLanguageEngine() {
  const langToggles = document.querySelectorAll('.lang-circle-btn, .lang-toggle-btn, #lang-toggle-btn, #mobile-lang-toggle-btn');
  const storedLang = localStorage.getItem('kb_lang') || 'en';
  const initialLang = (storedLang === 'am') ? 'am' : 'en';

  applyLanguage(initialLang);

  langToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = window.getCurrentLang();
      const nextLang = (current === 'am') ? 'en' : 'am';
      applyLanguage(nextLang);
    });
  });

  function applyLanguage(lang) {
    const currentLang = (lang === 'am') ? 'am' : 'en';
    document.documentElement.lang = currentLang;
    localStorage.setItem('kb_lang', currentLang);

    // Update all language toggle buttons
    langToggles.forEach(btn => {
      const textEl = btn.querySelector('.lang-circle-text');
      if (textEl) {
        textEl.textContent = (currentLang === 'am') ? 'አማ' : 'EN';
      }
      const enOpt = btn.querySelector('.lang-en');
      const amOpt = btn.querySelector('.lang-am');
      if (enOpt) enOpt.classList.toggle('active', currentLang === 'en');
      if (amOpt) amOpt.classList.toggle('active', currentLang === 'am');
      btn.setAttribute('title', currentLang === 'am' ? 'Switch to English (EN)' : 'ወደ አማርኛ ቀይር (አማ)');
    });

    // Also sync theme button titles
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('title', isDark 
        ? (currentLang === 'am' ? 'ወደ ብርሃን ገጽታ ቀይር (Light Mode)' : 'Switch to Light Mode')
        : (currentLang === 'am' ? 'ወደ ጨለማ ገጽታ ቀይር (Dark Mode)' : 'Switch to Dark Mode')
      );
    }

    const dict = KB_I18N[currentLang];
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update Kinetic Ticker Ribbon
    const tickerTrack = document.querySelector('.kinetic-ticker-track');
    if (tickerTrack) {
      if (currentLang === 'am') {
        tickerTrack.innerHTML = `
          <span>✦ የቦታ አርክቴክቸር እና ሲኒማቲክ 3D ሲሙሌሽን • ኬቢ ክሪኤቲቭ</span>
          <span class="ticker-dot">•</span>
          <span>የKB CREATIVE መስራች</span>
          <span class="ticker-dot">•</span>
          <span>የብራንድ መለያ ዲዛይን</span>
          <span class="ticker-dot">•</span>
          <span>D5 ሬንደር፣ ራይኖ እና ሪቪት ቪዥዋላይዜሽን</span>
          <span class="ticker-dot">•</span>
          <span>ኢትዮጵያ እና በኦንላይን በመላው አለም</span>
          <span class="ticker-dot">•</span>
          <span>✦ የቦታ አርክቴክቸር እና ሲኒማቲክ 3D ሲሙሌሽን • ኬቢ ክሪኤቲቭ</span>
          <span class="ticker-dot">•</span>
          <span>የKB CREATIVE መስራች</span>
          <span class="ticker-dot">•</span>
          <span>የብራንድ መለያ ዲዛይን</span>
          <span class="ticker-dot">•</span>
          <span>D5 ሬንደር፣ ራይኖ እና ሪቪት ቪዥዋላይዜሽን</span>
          <span class="ticker-dot">•</span>
          <span>ኢትዮጵያ እና በኦንላይን በመላው አለም</span>
          <span class="ticker-dot">•</span>
        `;
      } else {
        tickerTrack.innerHTML = `
          <span>✦ ARCHITECTURAL DESIGN &amp; HIGH-FIDELITY CGI • KB CREATIVE ATELIER</span>
          <span class="ticker-dot">•</span>
          <span>KB CREATIVE FOUNDER</span>
          <span class="ticker-dot">•</span>
          <span>MONOLITHIC BRAND IDENTITY SYSTEMS</span>
          <span class="ticker-dot">•</span>
          <span>D5 RENDER, RHINO &amp; REVIT VISUALIZATION</span>
          <span class="ticker-dot">•</span>
          <span>ETHIOPIA &amp; REMOTE WORLDWIDE</span>
          <span class="ticker-dot">•</span>
          <span>✦ ARCHITECTURAL DESIGN &amp; HIGH-FIDELITY CGI • KB CREATIVE ATELIER</span>
          <span class="ticker-dot">•</span>
          <span>KB CREATIVE FOUNDER</span>
          <span class="ticker-dot">•</span>
          <span>MONOLITHIC BRAND IDENTITY SYSTEMS</span>
          <span class="ticker-dot">•</span>
          <span>D5 RENDER, RHINO &amp; REVIT VISUALIZATION</span>
          <span class="ticker-dot">•</span>
          <span>ETHIOPIA &amp; REMOTE WORLDWIDE</span>
          <span class="ticker-dot">•</span>
        `;
      }
    }

    // Update Contact Form Inputs & Options
    const nameInput = document.getElementById('inquiry-name');
    const briefInput = document.getElementById('inquiry-brief');
    const serviceSelect = document.getElementById('inquiry-service');
    if (nameInput) {
      nameInput.placeholder = (currentLang === 'am') ? 'ለምሳሌ፡ ሳሙኤል ዮሐንስ' : 'e.g. Samuel Yohannes';
    }
    if (briefInput) {
      briefInput.placeholder = (currentLang === 'am') ? 'የፕሮጀክትዎን ቦታ፣ ስፋት፣ የሚፈልጉትን ጊዜ እና የዲዛይን ምርጫ ይግለጹ...' : 'Detail your project site, dimensions, timeline, and aesthetic goals...';
    }
    if (serviceSelect && serviceSelect.options.length >= 4) {
      serviceSelect.options[0].text = (currentLang === 'am') ? 'የቦታ አርክቴክቸር እና የመኖሪያ ህንፃ ንድፍ' : 'Spatial Architecture & Residential Design';
      serviceSelect.options[1].text = (currentLang === 'am') ? 'የብራንድ መለያ ስርዓት (KB CREATIVE)' : 'Brand Identity & System (KB CREATIVE)';
      serviceSelect.options[2].text = (currentLang === 'am') ? '3D ቪዥዋላይዜሽን እና ሬንደሪንግ (D5/Lumion)' : '3D Visualization & Cinematic Renders (D5/Lumion)';
      serviceSelect.options[3].text = (currentLang === 'am') ? 'የተቀናጀ የአርክቴክቸር እና የብራንድ ፓኬጅ' : 'Comprehensive Architecture + Brand Package';
    }

    // Immediately re-render all project cards with full language localization
    if (typeof window.renderProjects === 'function') {
      window.renderProjects();
    }

    // If case study modal is currently open, seamlessly re-render in the active language
    const modalOverlay = document.getElementById('case-study-modal');
    if (modalOverlay && modalOverlay.classList.contains('active') && window.currentActiveProjectId) {
      window.openCaseStudy(window.currentActiveProjectId);
    }
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

  // Direct clean filter transition
  function transitionFilter(updateFn) {
    if (typeof updateFn === 'function') updateFn();
    render();
  }

  practicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      practicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activePractice = pill.getAttribute('data-practice') || 'all';
      render();
    });
  });

  subPills.forEach(sp => {
    sp.addEventListener('click', () => {
      subPills.forEach(s => s.classList.remove('active'));
      sp.classList.add('active');
      activeSubCategory = sp.getAttribute('data-sub') || 'all';
      render();
    });
  });

  window.resetAllFilters = function() {
    activePractice = 'all';
    activeSubCategory = 'all';
    practicePills.forEach((p, idx) => p.classList.toggle('active', idx === 0));
    subPills.forEach((s, idx) => s.classList.toggle('active', idx === 0));
    render();
  };

  function render() {
    window.renderProjects = render;
    const baseProjects = KB_PROJECTS.filter(p => !p.hidden);
    let filtered = baseProjects;
    const isAm = (window.getCurrentLang && window.getCurrentLang() === 'am');
    const dict = KB_I18N[isAm ? 'am' : 'en'] || KB_I18N.en;

    if (activePractice === 'visualization') {
      // 3D Visualization corresponds to the active spatial CGI architectural works
      filtered = filtered.filter(p => p.practice === 'architecture');
    } else if (activePractice !== 'all') {
      filtered = filtered.filter(p => p.practice === activePractice);
    }

    if (activeSubCategory !== 'all') {
      filtered = filtered.filter(p => p.subCategory === activeSubCategory);
    }

    if (projectCountEl) {
      projectCountEl.textContent = isAm
        ? `ማውጫ // ከ${baseProjects.length} ፕሮጀክቶች ውስጥ ${filtered.length}ቱ እየታዩ ነው`
        : `INDEX // Showing ${filtered.length} of ${baseProjects.length} Projects`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-filter-state">
          <div class="empty-status-tag font-mono">${dict.empty_void_tag || '00 // VOID SPECIFICATION'}</div>
          <h3 class="empty-title">${dict.empty_void_title || 'No projects match the selected filter combination'}</h3>
          <p class="empty-desc">${dict.empty_void_desc || 'Clear your sub-category selection or switch practice typologies to explore all 15 curated projects.'}</p>
          <button type="button" class="btn-brand-yellow empty-reset-btn" onclick="window.resetAllFilters()">
            <span>${dict.empty_reset_btn || 'Reset Filters (Show All 15 Projects) →'}</span>
          </button>
        </div>
      `;
      return;
    }

    let htmlOutput = '';
    let lastPractice = null;

    filtered.forEach((item, cardIndex) => {
      const isFirstItem = (cardIndex === 0);
      const isSwitchToGraphic = (lastPractice === 'architecture' && item.practice === 'graphic');

      if (isFirstItem || isSwitchToGraphic) {
        lastPractice = item.practice;
        const isArch = (item.practice === 'architecture');

        const headingText = isArch
          ? (isAm ? 'የቦታ አርክቴክቸር እና ሲኒማቲክ 3D ሲሙሌሽን' : 'Spatial Architecture &amp; Cinematic 3D Visualization')
          : (isAm ? 'የግራፊክ ዲዛይን እና የኮርፖሬት ብራንድ ማንነት' : 'Graphic Design &amp; Corporate Brand Identity Systems');

        const descText = isArch
          ? (isAm ? 'የመኖሪያ ቪላዎች፣ የቢሮ እድሳቶች፣ ሁለገብ የገበያ ማዕከላት እና የማህበረሰብ አርክቴክቸር በAutodesk Revit፣ Rhino 3D እና D5 Render የተሰሩ ስራዎች።' : 'Residential villas, interior workplace renovations, commercial mixed-use retail concourses, and civic architecture modeled in Revit, Rhino &amp; D5 Render.')
          : (isAm ? 'ሞኖሊቲክ የሎጎ ንድፍ፣ የጽሁፍ ቅርጽ ደረጃዎች፣ የድርጅት መለያ መመሪያዎች፣ የማሸጊያ አሰራር እና የመለያ ሰሌዳዎች።' : 'Monolithic logomarks, typography standards, corporate brand guidelines, packaging architecture, and environmental signage suites.');

        htmlOutput += `
        <!-- DISCIPLINE TITLE SECTION: ${isArch ? 'ARCHITECTURAL WORKS' : 'GRAPHIC WORKS'} -->
        <div class="discipline-section-divider grid-col-full ${isArch ? 'divider-arch' : 'divider-graphic'}" id="${isArch ? 'arch-works-section' : 'graphic-works-section'}">
          <div class="discipline-divider-content">
            <div class="discipline-title-row">
              <h3 class="discipline-title-heading">${headingText}</h3>
              <span class="discipline-title-hairline" aria-hidden="true"></span>
            </div>
            <p class="discipline-desc-lead">${descText}</p>
          </div>
        </div>
        `;
      }

      const currentIdx = projectSlideIndexes[item.id] || 0;
      const currentSlide = item.slides[currentIdx] || item.slides[0];
      const totalSlides = item.slides.length;
      const localizedItem = getLocalizedProject(item, isAm ? 'am' : 'en');
      const primaryTool = (item.software && item.software.length) ? item.software.slice(0, 2).join(' + ') : 'Revit + D5';
      const itemIdx = baseProjects.indexOf(item);
      const displayGridRef = itemIdx !== -1 ? 'MOD-' + String(itemIdx + 1).padStart(2, '0') : (item.gridRef || 'MOD');

      htmlOutput += `
      <!-- SIMPLIFIED PROJECT CARD: [${displayGridRef}] -->
      <article class="big-project-card simplified-project-card" data-id="${item.id}" id="card-${item.id}" onmouseenter="startCardAutoSlide('${item.id}')" onmouseleave="stopCardAutoSlide('${item.id}')">
        <!-- 3D Specular Glare Overlay -->
        <div class="card-glare-overlay"></div>

        <!-- Media Carousel with Exposed Multi-Slide Controls -->
        <div class="carousel-media-wrap" onclick="openCaseStudy('${item.id}')" title="Click to open case study">
          <img src="${currentSlide.url}" alt="${localizedItem.title}" class="carousel-slide-img" id="img-${item.id}" loading="lazy" decoding="async" style="${currentSlide.fit === 'contain' ? `object-fit: contain; background: ${currentSlide.bg || '#041B2B'};`: ''}">

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
            <span class="card-service-tag font-mono">${localizedItem.service || localizedItem.practiceLabel}</span>
            <span class="card-perspectives-pill font-mono">${totalSlides} ${isAm ? 'እይታዎች' : 'Perspectives'}</span>
          </div>

          <h3 class="simplified-card-title" onclick="openCaseStudy('${item.id}')">${localizedItem.title}</h3>

          <div class="simplified-card-meta font-mono">
            <span class="card-meta-location">${localizedItem.location}</span>
            <span class="text-gold">•</span>
            <span class="card-meta-year text-gold">${item.year}</span>
          </div>

          <p class="simplified-card-summary">${localizedItem.summary}</p>

          <div class="simplified-card-action">
            <button type="button" class="btn-card-view-case-study" onclick="openCaseStudy('${item.id}', this)" aria-label="View Case Study for ${localizedItem.title}">
              <span>${isAm ? 'ዝርዝር ይመልከቱ' : 'View Case Study'}</span>
              <span class="case-study-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </article>
      `;
    });

    container.innerHTML = htmlOutput;

    // Rebind moveable tilt animations to newly rendered cards
    initMoveableCardTilt();
  }
}

// Auto-slide hover timers
const cardSlideIntervals = {};
const cardResetTimeouts = {};

window.startCardAutoSlide = function(projectId) {
  // Never run auto-slide hover timers on mobile/touch screens
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
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

window.goToSlide = function(e, projectId, index, isScrubbing = false) {
  if (e && e.stopPropagation) e.stopPropagation();
  const project = KB_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  if (cardSlideIntervals[projectId]) {
    startCardAutoSlide(projectId);
  }

  projectSlideIndexes[projectId] = index;
  updateCardSlide(project, index, isScrubbing);
};

function updateCardSlide(project, index, isScrubbing = false) {
  const imgEl = document.getElementById(`img-${project.id}`);
  const cardEl = document.getElementById(`card-${project.id}`);
  const counterEl = document.getElementById(`counter-${project.id}`);
  const captionEl = document.getElementById(`caption-${project.id}`);

  if (!imgEl || !cardEl) return;

  const slide = project.slides[index];

  if (isScrubbing) {
    // Instantaneous responsive update during horizontal mouse scrubbing (BIG.dk feel)
    imgEl.src = slide.url;
    if (slide.fit === 'contain') {
      imgEl.style.objectFit = 'contain';
      imgEl.style.background = slide.bg || '#041B2B';
    } else {
      imgEl.style.objectFit = 'cover';
      imgEl.style.background = '';
    }
    imgEl.style.opacity = '1';
    imgEl.style.transform = 'translateY(0) scale(1)';
  } else {
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
  }

  // Update Slide Counter (e.g. 02 / 05) with fade-up micro-tick
  if (counterEl) {
    const total = project.slides.length;
    if (isScrubbing) {
      counterEl.textContent = `0${index + 1} / 0${total}`;
      counterEl.style.opacity = '1';
      counterEl.style.transform = 'translateY(0)';
    } else {
      counterEl.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
      counterEl.style.opacity = '0.2';
      counterEl.style.transform = 'translateY(4px)';
      setTimeout(() => {
        counterEl.textContent = `0${index + 1} / 0${total}`;
        counterEl.style.opacity = '1';
        counterEl.style.transform = 'translateY(0)';
      }, 90);
    }
  }

  // Update Slide Caption inside hover overlay with synchronized scrub hint
  if (captionEl) {
    const total = project.slides.length;
    if (isScrubbing) {
      captionEl.innerHTML = `<span class="scrub-hint">↔ SCRUB [0${index + 1}/0${total}]:</span> ${slide.caption}`;
      captionEl.style.opacity = '1';
      captionEl.style.transform = 'translateY(0)';
    } else {
      captionEl.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
      captionEl.style.opacity = '0.1';
      captionEl.style.transform = 'translateY(8px)';

      setTimeout(() => {
        captionEl.innerHTML = `<span class="scrub-hint">↔ SCRUB [0${index + 1}/0${total}]:</span> ${slide.caption}`;
        captionEl.style.transition = 'opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)';
        captionEl.style.opacity = '1';
        captionEl.style.transform = 'translateY(0)';
      }, 110);
    }
  }

  // Update dots smoothly
  const dots = cardEl.querySelectorAll('.slide-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

/* ==========================================================================
   4. Natural Editorial Card Hover Engine (Native 60fps GPU Transitions)
   ========================================================================== */
function initMoveableCardTilt() {
  // Artificial 3D perspective distortion disabled in favor of clean architectural elevation
}

/* ==========================================================================
   5. Devani-Style Core Skills Interactive Animations & Count-Up Engine
   ========================================================================== */
function initSkillsAnimation() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const skillBars = document.querySelectorAll('.skill-progress-fill');
  let animated = false;

  const isMobile = window.innerWidth <= 768 || window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Guarantee that all bars and percentage numbers display their correct values
  skillBars.forEach(bar => {
    const targetPercent = parseInt(bar.getAttribute('data-percent'), 10) || 0;
    bar.style.width = `${targetPercent}%`;
    const countEl = bar.closest('.skill-progress-row')?.querySelector('.skill-percent-number');
    if (countEl) countEl.textContent = `${targetPercent}%`;
  });

  if (isMobile || isReduced) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateAllBars();
      }
    });
  }, { threshold: 0.05, rootMargin: '50px 0px 50px 0px' });

  observer.observe(skillsSection);

  function animateAllBars() {
    skillBars.forEach(bar => {
      const targetPercent = parseInt(bar.getAttribute('data-percent'), 10) || 0;
      const countEl = bar.closest('.skill-progress-row')?.querySelector('.skill-percent-number');

      bar.style.width = `${targetPercent}%`;

      if (countEl) {
        let current = 0;
        const stepTime = Math.max(10, Math.floor(900 / targetPercent));
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
function closeCaseStudy() {
  const overlay = document.getElementById('case-study-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
window.closeCaseStudy = closeCaseStudy;

function initCaseModal() {
  const overlay = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('case-modal-close');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudy);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCaseStudy();
  });

  window.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeCaseStudy();
      } else if (e.key === 'ArrowRight') {
        window.modalNextSlide();
      } else if (e.key === 'ArrowLeft') {
        window.modalPrevSlide();
      }
    }
  });
}

window.openCaseStudy = function(projectId, triggerEl) {
  const rawProject = KB_PROJECTS.find(p => p.id === projectId);
  if (!rawProject) return;

  window.currentActiveProjectId = projectId;
  const isAm = (window.getCurrentLang && window.getCurrentLang() === 'am');
  const project = getLocalizedProject(rawProject, isAm ? 'am' : 'en');
  window._currentModalProject = project;
  window._currentModalSlideIndex = 0;

  // Preload all slides in project for smooth, instant lag-free switching
  if (project.slides && project.slides.length) {
    project.slides.forEach(s => {
      const pImg = new Image();
      pImg.src = s.url;
    });
  }

  if (triggerEl && triggerEl.classList) {
    triggerEl.classList.add('btn-loading');
    setTimeout(() => {
      if (triggerEl.classList) triggerEl.classList.remove('btn-loading');
    }, 450);
  }

  const overlay = document.getElementById('case-study-modal');
  const body = document.getElementById('case-modal-body');

  const baseProjects = KB_PROJECTS.filter(p => !p.hidden);
  const activeIdx = baseProjects.findIndex(p => p.id === project.id);
  const displayGridRef = activeIdx !== -1 ? 'MOD-' + String(activeIdx + 1).padStart(2, '0') : (project.gridRef || 'MOD');

  document.getElementById('modal-project-title').textContent = project.title;
  document.getElementById('modal-practice-tag').textContent = isAm
    ? `${project.service || project.practiceLabel} // ስቱዲዮ KB CREATIVE`
    : `${project.service || project.practiceLabel} // STUDIO KB CREATIVE`;

  const softwareList = Array.isArray(project.software) ? project.software : [project.medium];
  const isArch = project.practice === 'architecture';
  const afterSlide = project.slides[0];
  const beforeSlide = project.slides[1] || project.slides[0];

  const beforeAfterMarkup = isArch ? `
    <!-- 03.5 // INTERACTIVE BEFORE/AFTER SPLIT SLIDER FOR ARCHITECTURE -->
    <div class="modal-before-after-module">
      <div class="modal-block-tag font-mono">${isAm ? '✦ የሁለት ምዕራፍ የአርክቴክቸር ጥናት // ተንቀሳቃሽ ማወዳደሪያ' : '✦ DUAL-PHASE ARCHITECTURAL STUDY // DRAGGABLE SPLIT SLIDER'}</div>
      <div class="modal-ba-header">
        <div class="font-mono text-gold" style="font-size: 0.8rem; font-weight: 700;">
          ${isAm ? 'አወዳድር: የቅርፅ እና የመዋቅር ጥናት (በግራ) ↔ የመጨረሻው የD5 እውነተኛ ምስል (በቀኝ)' : 'COMPARE: TECTONIC / MASSING STUDY (LEFT) ↔ FINAL D5 PHOTOREALISTIC RENDER (RIGHT)'}
        </div>
        <div class="font-mono" style="font-size: 0.72rem; color: var(--text-secondary);">
          ${isAm ? 'ለማየት መሃሉን ይጎትቱ ወይም ይጫኑ' : 'DRAG KNOB OR CLICK ANYWHERE TO REVEAL'}
        </div>
      </div>
      <div class="ba-slider-container" id="modal-ba-slider" style="--slider-pct: 50%;">
        <div class="ba-badge ba-badge-left font-mono">${isAm ? '01 // የቅርፅ ጥናት' : '01 // MASSING / WIREFRAME'}</div>
        <div class="ba-badge ba-badge-right font-mono">${isAm ? '02 // እውነተኛ የD5 ሬንደር' : '02 // FINAL D5 RENDER'}</div>
        <img src="${afterSlide.url}" alt="${project.title} - Final Photorealistic Render" class="ba-img-after">
        <img src="${beforeSlide.url}" alt="${project.title} - Tectonic Massing Study" class="ba-img-before">
        <div class="ba-slider-handle">
          <div class="ba-handle-line"></div>
          <div class="ba-handle-knob font-mono" aria-label="Drag to compare before and after">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  ` : '';

  body.innerHTML = `
    <!-- Case Study Header Meta -->
    <div class="modal-header-meta font-mono">
      <div class="meta-item">
        <span class="meta-label">${isAm ? 'ቦታ:' : 'LOCATION:'}</span>
        <span class="meta-value">${project.location}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">${isAm ? 'ዓመት:' : 'YEAR:'}</span>
        <span class="meta-value text-gold">${project.year}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">${isAm ? 'አገልግሎት:' : 'SERVICE:'}</span>
        <span class="meta-value">${project.service || project.practiceLabel}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">${isAm ? 'ደንበኛ / ኮሚሽን:' : 'CLIENT / COMMISSION:'}</span>
        <span class="meta-value">${project.client}</span>
      </div>
    </div>

    <!-- 01 // YOUR ROLE & ATTRIBUTION -->
    <div class="modal-role-banner">
      <div class="modal-block-tag font-mono">${isAm ? '01 // የእርስዎ ሚና እና የስራ ድርሻ' : '01 // YOUR ROLE &amp; ATTRIBUTION'}</div>
      <div class="modal-role-content">
        <div class="role-icon-badge" aria-hidden="true">★</div>
        <div>
          <div class="modal-role-title">${project.role}</div>
          <div class="modal-role-subtitle font-mono">${isAm ? 'ስቱዲዮ KB CREATIVE // የቦታ አርክቴክቸር እና የብራንድ ዲዛይን' : 'Studio KB CREATIVE // Spatial Architecture & Visual Identity'}</div>
        </div>
      </div>
    </div>

    <!-- 02 // SOFTWARE & DIGITAL TOOLS USED -->
    <div class="modal-software-section">
      <div class="modal-block-tag font-mono">${isAm ? '02 // የተጠቀሙባቸው ሶፍትዌሮች እና ዲጂታል መሳሪያዎች' : '02 // SOFTWARE &amp; DIGITAL TOOLS USED'}</div>
      <div class="modal-software-pills">
        ${softwareList.map(sw => `<span class="software-pill font-mono">${sw}</span>`).join('')}
      </div>
    </div>

    <!-- 03 // FINAL IMAGES & ARCHITECTURAL DRAWINGS (Full Proportional Gallery) -->
    <div class="modal-gallery-section" style="margin-bottom: 2rem;">
      <div class="modal-block-tag font-mono">${isAm ? `03 // የመጨረሻ ምስሎች እና የአርክቴክቸር ንድፎች (${project.slides.length} የተለያዩ እይታዎች)` : `03 // FINAL IMAGES &amp; ARCHITECTURAL DRAWINGS (${project.slides.length} MULTI-VIEW PERSPECTIVES)`}</div>
      <div class="modal-hero-viewport" id="modal-hero-viewport" style="background: ${project.slides[0].bg || '#02121D'};">
        <img src="${project.slides[0].url}" alt="${project.title}" id="modal-active-img" style="object-fit: contain;">
        ${project.slides.length > 1 ? `
          <button type="button" class="modal-nav-arrow modal-nav-prev" onclick="modalPrevSlide(event)" aria-label="${isAm ? 'ቀዳሚ ምስል' : 'Previous slide'}" title="${isAm ? 'ቀዳሚ' : 'Previous'}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button type="button" class="modal-nav-arrow modal-nav-next" onclick="modalNextSlide(event)" aria-label="${isAm ? 'ቀጣይ ምስል' : 'Next slide'}" title="${isAm ? 'ቀጣይ' : 'Next'}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        ` : ''}
      </div>

      <!-- Multi-Perspective Thumbnail Strip -->
      <div class="modal-thumbnail-strip">
        ${project.slides.map((s, idx) => `
          <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="selectModalSlide('${s.url}', '${s.caption.replace(/'/g, "\\'")}', this, '${s.fit || ''}', '${s.bg || ''}', ${idx})" title="${s.caption}">
            <img src="${s.url}" alt="${s.caption}" style="${s.fit === 'contain' ? `object-fit: contain; background: ${s.bg || '#02121D'};`: ''}">
            <span class="modal-thumb-number font-mono">0${idx + 1}</span>
          </button>
        `).join('')}
      </div>
    </div>

    ${beforeAfterMarkup}

    <!-- 04 & 05 // CHALLENGE & SOLUTION SPLIT CARDS -->
    <div class="modal-challenge-solution-grid">
      <!-- 04 // CHALLENGE -->
      <div class="modal-challenge-card">
        <div class="cs-card-header font-mono">
          <span class="cs-badge cs-challenge-badge">${isAm ? '04 // ተግዳሮት' : '04 // CHALLENGE'}</span>
          <span class="cs-header-title">${isAm ? 'የተፈታው የዲዛይን ችግር' : 'The Design Problem'}</span>
        </div>
        <p class="cs-body-text">${project.challenge}</p>
      </div>

      <!-- 05 // SOLUTION -->
      <div class="modal-solution-card">
        <div class="cs-card-header font-mono">
          <span class="cs-badge cs-solution-badge">${isAm ? '05 // መፍትሔ' : '05 // SOLUTION'}</span>
          <span class="cs-header-title">${isAm ? 'የተተገበረው ስነ-ህንፃዊ መፍትሔ' : 'Engineered Execution'}</span>
        </div>
        <p class="cs-body-text">${project.solution}</p>
      </div>
    </div>

    <!-- Project Overview Description & Key Deliverables -->
    <div class="modal-details-grid">
      <div class="modal-overview-col">
        <div class="modal-block-tag font-mono">${isAm ? 'የፕሮጀክት አጠቃላይ እይታ እና ዳራ' : 'PROJECT OVERVIEW &amp; CONTEXT'}</div>
        <p class="modal-narrative-p">${project.description}</p>
      </div>
      <div class="modal-deliverables-col">
        <div class="modal-spec-card">
          <div class="modal-block-tag font-mono">${isAm ? 'ዋና ዋና ውጤቶች እና ዝርዝር ፕላኖች' : 'KEY DELIVERABLES &amp; DRAWINGS'}</div>
          <ul class="modal-deliverables-list">
            ${project.deliverables.map(d => `
              <li class="modal-deliverable-item font-mono">
                <span class="text-gold">✓</span> <span>${d}</span>
              </li>
            `).join('')}
          </ul>

          <div class="modal-cta-wrap">
            <a href="https://t.me/Kalegzi_7" target="_blank" rel="noopener" class="btn-brand-yellow modal-cta-btn">
              <span>${isAm ? 'የስራ ስምምነት ይጀምሩ (KB CREATIVE)' : 'Initiate Collaboration (KB CREATIVE)'}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  const heroViewport = document.getElementById('modal-hero-viewport');
  if (heroViewport && project.slides.length > 1) {
    let touchStartX = 0;
    let touchStartY = 0;
    heroViewport.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });
    heroViewport.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        const diffY = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            window.modalNextSlide();
          } else {
            window.modalPrevSlide();
          }
        }
      }
    }, { passive: true });
  }

  if (isArch) {
    const sliderEl = document.getElementById('modal-ba-slider');
    if (sliderEl) {
      initBeforeAfterSlider(sliderEl);
    }
  }
};

function initBeforeAfterSlider(container) {
  if (!container) return;
  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    container.style.setProperty('--slider-pct', `${pct.toFixed(2)}%`);
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

window.selectModalSlide = function(url, caption, btnEl, fit, bg, idx) {
  if (typeof idx === 'number') {
    window._currentModalSlideIndex = idx;
  }
  const heroImg = document.getElementById('modal-active-img');
  const captionEl = document.getElementById('modal-active-caption');
  const viewport = heroImg ? heroImg.closest('.modal-hero-viewport') : null;
  
  // Clear any existing slide transition timeout to prevent lag & stacking
  if (window._modalSlideTimer) {
    clearTimeout(window._modalSlideTimer);
    window._modalSlideTimer = null;
  }

  // Update active thumbnail border immediately for snappy feedback
  const buttons = document.querySelectorAll('.modal-thumb-btn');
  buttons.forEach((b, i) => {
    if (i === idx || b === btnEl) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (heroImg) {
    heroImg.src = url;
    if (viewport) {
      viewport.style.background = bg || '#02121D';
    }
    heroImg.style.objectFit = 'contain';
    heroImg.style.opacity = '1';
  }

  if (captionEl) {
    captionEl.textContent = caption;
  }
};

window.modalNextSlide = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!window._currentModalProject || !window._currentModalProject.slides || window._currentModalProject.slides.length <= 1) return;
  const slides = window._currentModalProject.slides;
  const nextIdx = ((window._currentModalSlideIndex || 0) + 1) % slides.length;
  window.goToModalSlide(nextIdx);
};

window.modalPrevSlide = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!window._currentModalProject || !window._currentModalProject.slides || window._currentModalProject.slides.length <= 1) return;
  const slides = window._currentModalProject.slides;
  const prevIdx = ((window._currentModalSlideIndex || 0) - 1 + slides.length) % slides.length;
  window.goToModalSlide(prevIdx);
};

window.goToModalSlide = function(idx) {
  if (!window._currentModalProject || !window._currentModalProject.slides) return;
  const slides = window._currentModalProject.slides;
  if (idx < 0 || idx >= slides.length) return;
  window._currentModalSlideIndex = idx;
  const s = slides[idx];
  const buttons = document.querySelectorAll('.modal-thumb-btn');
  const btn = buttons[idx] || null;
  window.selectModalSlide(s.url, s.caption, btn, s.fit || '', s.bg || '', idx);
  if (btn && typeof btn.scrollIntoView === 'function') {
    btn.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
  }
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

/* ==========================================================================
   Application Initialization
   ========================================================================== */
function initApp() {
  safeRun('ThemeEngine', initThemeEngine);
  safeRun('LanguageEngine', initLanguageEngine);
  safeRun('ProjectsArchive', initProjectsArchive);
  safeRun('SkillsAnimation', initSkillsAnimation);
  safeRun('MoveableCardTilt', initMoveableCardTilt);
  safeRun('CaseModal', initCaseModal);
  safeRun('ContactNavHandler', initContactNavHandler);
  safeRun('HashNavigationHandler', initHashNavigationHandler);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Fallback safety to ensure all 15 project cards are active and populated
window.addEventListener('load', () => {
  const container = document.getElementById('big-projects-container');
  if (container && (!container.children || container.children.length === 0)) {
    if (typeof window.renderProjects === 'function') {
      window.renderProjects();
    }
  }
  if (window.location.hash) {
    handleHashScroll(window.location.hash);
  }
});

