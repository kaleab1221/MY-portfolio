/**
 * ============================================================================
 * ✦ SPLINE 3D INTERACTIVE ENGINE & AMBIENT CANVAS
 * Collab with Spline.design Aesthetics for Kaleegziabher Fekede (KB CREATIVE)
 * ============================================================================
 * Features:
 * - 60 FPS Native WebGL / 2.5D Canvas Architectural Tectonic Model (Zero CDN lag, 100% offline)
 * - Free 360° Mouse/Touch Orbit & Zoom with velocity damping physics
 * - Real-time dynamic cursor lighting & specular glass refractions
 * - Interactive Modes: Shaded Gold/Obsidian, Wireframe Blueprint, and Exploded Assembly
 * - Floating 3D Spatial Context Hotspots (Podium, Cantilever, Solar Louvers)
 * - Spline Ambient Background Matrix with cursor gravitational wave particles
 * - Seamless support for official <spline-viewer> embed with custom URL loader
 * ============================================================================
 */

(function () {
  'use strict';

  // State Management
  const SplineState = {
    mode: 'shaded', // 'shaded' | 'wireframe' | 'exploded'
    explodeProgress: 0, // 0 to 1
    targetExplode: 0,
    activeTab: 'model', // 'model' | 'identity'
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    rotation: { x: 0.38, y: -0.65 }, // Initial architectural isometric angle
    targetRotation: { x: 0.38, y: -0.65 },
    rotationVelocity: { x: 0, y: 0 },
    zoom: 1.0,
    targetZoom: 1.0,
    cursorLight: { x: 0.5, y: -0.8, z: 0.7 },
    autoRotate: true,
    customSplineUrl: null,
    hotspots: [
      { id: 'podium', label: '01 // ENTRANCE PODIUM', desc: 'Granite plinth & double-height glass concourse', pos3D: { x: -60, y: -50, z: 60 } },
      { id: 'cantilever', label: '02 // CANTILEVER BALCONY', desc: 'Pre-stressed concrete sky terrace with panoramic vista', pos3D: { x: 70, y: 20, z: 50 } },
      { id: 'louvers', label: '03 // SOLAR SCREEN', desc: 'Climate-responsive vertical timber & steel louvers', pos3D: { x: 0, y: 90, z: -40 } }
    ],
    hoveredHotspot: null
  };

  /* ==========================================================================
     1. GEOMETRY GENERATOR: Architectural Cantilevered Pavilion
     ========================================================================== */
  function createArchitecturalGeometry() {
    const layers = [];

    // Helper to generate a cuboid (box) with given dimensions and center
    function makeBox(cx, cy, cz, w, h, d, layerIndex, materialType) {
      const hw = w / 2, hh = h / 2, hd = d / 2;
      const vertices = [
        { x: cx - hw, y: cy - hh, z: cz - hd }, // 0
        { x: cx + hw, y: cy - hh, z: cz - hd }, // 1
        { x: cx + hw, y: cy + hh, z: cz - hd }, // 2
        { x: cx - hw, y: cy + hh, z: cz - hd }, // 3
        { x: cx - hw, y: cy - hh, z: cz + hd }, // 4
        { x: cx + hw, y: cy - hh, z: cz + hd }, // 5
        { x: cx + hw, y: cy + hh, z: cz + hd }, // 6
        { x: cx - hw, y: cy + hh, z: cz + hd }  // 7
      ];

      // Faces defined by vertex indices (counter-clockwise winding)
      const faces = [
        { indices: [0, 1, 2, 3], norm: { x: 0, y: 0, z: -1 }, type: materialType, layer: layerIndex }, // Back
        { indices: [5, 4, 7, 6], norm: { x: 0, y: 0, z: 1 }, type: materialType, layer: layerIndex },  // Front
        { indices: [4, 0, 3, 7], norm: { x: -1, y: 0, z: 0 }, type: materialType, layer: layerIndex }, // Left
        { indices: [1, 5, 6, 2], norm: { x: 1, y: 0, z: 0 }, type: materialType, layer: layerIndex },  // Right
        { indices: [3, 2, 6, 7], norm: { x: 0, y: 1, z: 0 }, type: materialType, layer: layerIndex },  // Top
        { indices: [4, 5, 1, 0], norm: { x: 0, y: -1, z: 0 }, type: materialType, layer: layerIndex }  // Bottom
      ];

      return { vertices, faces };
    }

    // Merge multiple boxes into a unified layer
    function mergeBoxes(boxList, layerIndex) {
      let allVerts = [];
      let allFaces = [];
      let vertOffset = 0;

      boxList.forEach(b => {
        allVerts = allVerts.concat(b.vertices);
        b.faces.forEach(f => {
          allFaces.push({
            indices: f.indices.map(idx => idx + vertOffset),
            norm: f.norm,
            type: f.type,
            layer: layerIndex
          });
        });
        vertOffset += b.vertices.length;
      });

      return { vertices: allVerts, faces: allFaces, layerIndex };
    }

    // LAYER 0: Ground Foundation & Podium Plinth (Basalt & Gold Rim)
    const l0Boxes = [
      makeBox(0, -60, 0, 190, 12, 190, 0, 'concrete_dark'),
      makeBox(0, -52, 0, 170, 4, 170, 0, 'gold_trim'),
      makeBox(40, -48, 50, 60, 4, 40, 0, 'water_feature'), // Reflective pool
      makeBox(-50, -50, 40, 30, 8, 50, 0, 'concrete_accent')
    ];
    layers.push(mergeBoxes(l0Boxes, 0));

    // LAYER 1: Ground Atrium & Glazed Concourse (Double-height glass + structural columns)
    const l1Boxes = [
      // Central shear core
      makeBox(0, -25, 0, 50, 46, 50, 1, 'core_monolith'),
      // Structural perimeter columns (Gold steel)
      makeBox(-65, -25, -65, 8, 46, 8, 1, 'gold_column'),
      makeBox(65, -25, -65, 8, 46, 8, 1, 'gold_column'),
      makeBox(-65, -25, 65, 8, 46, 8, 1, 'gold_column'),
      makeBox(65, -25, 65, 8, 46, 8, 1, 'gold_column'),
      // Glazed facade enclosure
      makeBox(0, -25, 0, 140, 44, 140, 1, 'glass_facade')
    ];
    layers.push(mergeBoxes(l1Boxes, 1));

    // LAYER 2: Cantilevered Mid-Deck & Meeting Mezzanine (Acute zoning screen)
    const l2Boxes = [
      // Floor slab with deep cantilever to the right
      makeBox(20, 0, 0, 180, 10, 140, 2, 'concrete_slab'),
      makeBox(20, 7, 0, 176, 4, 136, 2, 'timber_deck'),
      // Glass perimeter balustrade
      makeBox(20, 12, 68, 176, 10, 2, 2, 'glass_balustrade'),
      makeBox(108, 12, 0, 2, 10, 136, 2, 'glass_balustrade'),
      // Interior partition screen
      makeBox(-10, 16, 10, 4, 22, 60, 2, 'gold_screen')
    ];
    layers.push(mergeBoxes(l2Boxes, 2));

    // LAYER 3: Upper Sky Studio & Solar Louver Brise-Soleil
    const l3Boxes = [
      // Upper floor slab
      makeBox(-10, 34, 0, 150, 10, 150, 3, 'concrete_slab'),
      // Core continuation
      makeBox(0, 50, 0, 50, 26, 50, 3, 'core_monolith'),
      // Vertical solar louvers (brise-soleil blades)
      makeBox(-78, 50, -40, 3, 26, 12, 3, 'gold_louver'),
      makeBox(-78, 50, -15, 3, 26, 12, 3, 'gold_louver'),
      makeBox(-78, 50, 10, 3, 26, 12, 3, 'gold_louver'),
      makeBox(-78, 50, 35, 3, 26, 12, 3, 'gold_louver'),
      // Studio glass perimeter
      makeBox(-10, 50, 0, 130, 24, 130, 3, 'glass_facade')
    ];
    layers.push(mergeBoxes(l3Boxes, 3));

    // LAYER 4: Sculptural Roof Canopy, Pergola & KB Faceted Diamond
    const l4Boxes = [
      // Floating roof canopy with central skylight void
      makeBox(-10, 68, 0, 170, 6, 170, 4, 'canopy_slab'),
      makeBox(-10, 72, -30, 150, 2, 8, 4, 'pergola_beam'),
      makeBox(-10, 72, 0, 150, 2, 8, 4, 'pergola_beam'),
      makeBox(-10, 72, 30, 150, 2, 8, 4, 'pergola_beam'),
      // Central floating KB Emblem Prism (octahedral sculpture)
      makeBox(0, 100, 0, 24, 24, 24, 4, 'gold_prism')
    ];
    layers.push(mergeBoxes(l4Boxes, 4));

    return layers;
  }

  /* ==========================================================================
     2. SPLINE 3D CANVAS RENDERER ENGINE
     ========================================================================== */
  class SplineHeroViewer {
    constructor(canvasId, containerId) {
      this.canvas = document.getElementById(canvasId);
      this.container = document.getElementById(containerId);
      if (!this.canvas || !this.container) return;

      this.ctx = this.canvas.getContext('2d');
      this.layers = createArchitecturalGeometry();
      this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      this.animId = null;
      this.isVisible = true;

      this.initEvents();
      this.resize();
      this.render();
    }

    resize() {
      if (!this.canvas || !this.container) return;
      const rect = this.container.getBoundingClientRect();
      const w = rect.width || 480;
      const h = rect.height || 480;

      this.width = w;
      this.height = h;
      this.canvas.width = w * this.pixelRatio;
      this.canvas.height = h * this.pixelRatio;
      this.canvas.style.width = w + 'px';
      this.canvas.style.height = h + 'px';
      this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    initEvents() {
      window.addEventListener('resize', () => this.resize());

      // Mouse drag to orbit
      this.canvas.addEventListener('mousedown', (e) => {
        SplineState.isDragging = true;
        SplineState.autoRotate = false;
        SplineState.prevMousePos = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mousemove', (e) => {
        // Track cursor light vector regardless of drag
        const rect = this.canvas.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        SplineState.cursorLight.x = nx * 2.2;
        SplineState.cursorLight.y = -ny * 2.2;

        if (SplineState.isDragging) {
          const dx = e.clientX - SplineState.prevMousePos.x;
          const dy = e.clientY - SplineState.prevMousePos.y;

          SplineState.rotationVelocity.y = dx * 0.008;
          SplineState.rotationVelocity.x = -dy * 0.008;

          SplineState.targetRotation.y += SplineState.rotationVelocity.y;
          SplineState.targetRotation.x += SplineState.rotationVelocity.x;

          // Clamp vertical pitch to prevent flipping
          SplineState.targetRotation.x = Math.max(-0.6, Math.min(1.2, SplineState.targetRotation.x));

          SplineState.prevMousePos = { x: e.clientX, y: e.clientY };
        } else {
          // Subtle parallax hover when not dragging
          SplineState.targetRotation.y += (nx * 0.2 - (SplineState.targetRotation.y - SplineState.rotation.y)) * 0.02;
        }
      });

      window.addEventListener('mouseup', () => {
        SplineState.isDragging = false;
      });

      // Mouse wheel zoom
      this.canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomDelta = e.deltaY * -0.0012;
        SplineState.targetZoom = Math.max(0.65, Math.min(1.9, SplineState.targetZoom + zoomDelta));
      }, { passive: false });

      // Touch events for mobile
      let touchStartDist = 0;
      this.canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          SplineState.isDragging = true;
          SplineState.autoRotate = false;
          SplineState.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          touchStartDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
        }
      }, { passive: true });

      this.canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && SplineState.isDragging) {
          const dx = e.touches[0].clientX - SplineState.prevMousePos.x;
          const dy = e.touches[0].clientY - SplineState.prevMousePos.y;

          SplineState.targetRotation.y += dx * 0.01;
          SplineState.targetRotation.x += -dy * 0.01;
          SplineState.targetRotation.x = Math.max(-0.6, Math.min(1.2, SplineState.targetRotation.x));

          SplineState.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const factor = (dist - touchStartDist) * 0.005;
          SplineState.targetZoom = Math.max(0.65, Math.min(1.9, SplineState.targetZoom + factor));
          touchStartDist = dist;
        }
      }, { passive: true });

      this.canvas.addEventListener('touchend', () => {
        SplineState.isDragging = false;
      });

      // Visibility optimization
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });
      observer.observe(this.canvas);
    }

    render() {
      this.animId = requestAnimationFrame(() => this.render());
      if (!this.isVisible || SplineState.activeTab !== 'model') return;

      const ctx = this.ctx;
      const width = this.width;
      const height = this.height;

      // Smooth physics damping
      if (SplineState.autoRotate && !SplineState.isDragging) {
        SplineState.targetRotation.y += 0.004;
      }
      SplineState.rotation.x += (SplineState.targetRotation.x - SplineState.rotation.x) * 0.08;
      SplineState.rotation.y += (SplineState.targetRotation.y - SplineState.rotation.y) * 0.08;
      SplineState.zoom += (SplineState.targetZoom - SplineState.zoom) * 0.08;
      SplineState.explodeProgress += (SplineState.targetExplode - SplineState.explodeProgress) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // Camera constants
      const focalLength = 520 * SplineState.zoom;
      const cameraDistance = 640;
      const cx = width / 2;
      const cy = height / 2 + 15;

      const cosX = Math.cos(SplineState.rotation.x);
      const sinX = Math.sin(SplineState.rotation.x);
      const cosY = Math.cos(SplineState.rotation.y);
      const sinY = Math.sin(SplineState.rotation.y);

      // Explode vertical shift factor
      const explodeSpread = 42 * SplineState.explodeProgress;

      // Project vertices and prepare faces for depth sorting
      const renderFaces = [];
      const isWireframe = SplineState.mode === 'wireframe';

      this.layers.forEach((layer) => {
        const layerIdx = layer.layerIndex;
        const explodeYOffset = (layerIdx - 1.8) * explodeSpread;

        // Transform vertices
        const projectedVerts = layer.vertices.map(v => {
          // Apply exploded offset in architectural local Y
          const vy = v.y + explodeYOffset;

          // Yaw rotation (Y-axis)
          const rx1 = v.x * cosY + v.z * sinY;
          const rz1 = -v.x * sinY + v.z * cosY;
          const ry1 = vy;

          // Pitch rotation (X-axis)
          const rx2 = rx1;
          const ry2 = ry1 * cosX - rz1 * sinX;
          const rz2 = ry1 * sinX + rz1 * cosX;

          // Perspective projection
          const depth = rz2 + cameraDistance;
          const scale = focalLength / Math.max(depth, 50);

          return {
            x2d: cx + rx2 * scale,
            y2d: cy - ry2 * scale,
            z: rz2,
            scale: scale
          };
        });

        // Transform faces
        layer.faces.forEach(f => {
          const v0 = projectedVerts[f.indices[0]];
          const v1 = projectedVerts[f.indices[1]];
          const v2 = projectedVerts[f.indices[2]];
          const v3 = projectedVerts[f.indices[3]];

          // Normal rotation
          const rnx1 = f.norm.x * cosY + f.norm.z * sinY;
          const rnz1 = -f.norm.x * sinY + f.norm.z * cosY;
          const rny1 = f.norm.y;

          const rnx2 = rnx1;
          const rny2 = rny1 * cosX - rnz1 * sinX;
          const rnz2 = rny1 * sinX + rnz1 * cosX;

          // Backface culling in shaded mode (keep double-sided for glass and wireframe)
          if (!isWireframe && f.type !== 'glass_facade' && f.type !== 'glass_balustrade' && rnz2 < -0.15) {
            return;
          }

          const avgZ = (v0.z + v1.z + v2.z + v3.z) / 4;

          renderFaces.push({
            poly: [v0, v1, v2, v3],
            norm: { x: rnx2, y: rny2, z: rnz2 },
            type: f.type,
            avgZ: avgZ,
            layer: layerIdx
          });
        });
      });

      // Painter's Algorithm: Sort faces from furthest to nearest
      renderFaces.sort((a, b) => a.avgZ - b.avgZ);

      // Light direction vector with cursor influence
      const lightVec = {
        x: SplineState.cursorLight.x + 0.35,
        y: SplineState.cursorLight.y - 0.75,
        z: 0.8
      };
      const lightLen = Math.hypot(lightVec.x, lightVec.y, lightVec.z) || 1;
      const lx = lightVec.x / lightLen;
      const ly = lightVec.y / lightLen;
      const lz = lightVec.z / lightLen;

      // Render architectural ground projection shadow
      this.renderGroundShadow(ctx, cx, cy + 90 * SplineState.zoom, 140 * SplineState.zoom);

      // Render Exploded Guide Lines (shows vertical alignment of floors)
      if (SplineState.explodeProgress > 0.05) {
        this.renderExplodedGuides(ctx, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance, explodeSpread);
      }

      // Draw all polygons
      renderFaces.forEach(face => {
        const poly = face.poly;
        const norm = face.norm;

        // Diffuse lighting intensity
        const dot = norm.x * lx + norm.y * ly + norm.z * lz;
        const diffuse = Math.max(0.12, dot);

        ctx.beginPath();
        ctx.moveTo(poly[0].x2d, poly[0].y2d);
        ctx.lineTo(poly[1].x2d, poly[1].y2d);
        ctx.lineTo(poly[2].x2d, poly[2].y2d);
        ctx.lineTo(poly[3].x2d, poly[3].y2d);
        ctx.closePath();

        if (isWireframe) {
          // Architectural CAD Blueprint linework
          ctx.strokeStyle = face.type.includes('gold') ? 'rgba(255, 208, 66, 0.85)' : 'rgba(56, 189, 248, 0.55)';
          ctx.lineWidth = 1;
          ctx.fillStyle = 'rgba(2, 43, 69, 0.25)';
          ctx.fill();
          ctx.stroke();

          // Render glowing coordinate vertices
          poly.forEach(pt => {
            ctx.fillStyle = face.type.includes('gold') ? '#FFD042' : '#38BDF8';
            ctx.fillRect(pt.x2d - 1.5, pt.y2d - 1.5, 3, 3);
          });
        } else {
          // Shaded Spline PBR-Style Architectural Materials
          const style = this.getMaterialStyle(face.type, diffuse, norm);
          ctx.fillStyle = style.fill;
          ctx.fill();

          if (style.stroke) {
            ctx.strokeStyle = style.stroke;
            ctx.lineWidth = style.strokeWidth || 0.75;
            ctx.stroke();
          }
        }
      });

      // Render Floating 3D Hotspots
      this.renderHotspots(ctx, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance, explodeSpread);
    }

    getMaterialStyle(type, diffuse, norm) {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      switch (type) {
        case 'concrete_dark':
          const cLum = Math.floor(18 + diffuse * 35);
          return {
            fill: `rgb(${cLum}, ${cLum + 10}, ${cLum + 20})`,
            stroke: 'rgba(255, 208, 66, 0.35)',
            strokeWidth: 1.2
          };
        case 'concrete_slab':
          const sLum = Math.floor(22 + diffuse * 48);
          return {
            fill: `rgb(${sLum}, ${sLum + 12}, ${sLum + 28})`,
            stroke: 'rgba(255, 255, 255, 0.15)',
            strokeWidth: 0.8
          };
        case 'concrete_accent':
          return {
            fill: `rgba(4, 71, 113, ${0.4 + diffuse * 0.4})`,
            stroke: 'rgba(255, 208, 66, 0.4)'
          };
        case 'gold_trim':
        case 'gold_column':
        case 'gold_louver':
        case 'gold_screen':
        case 'gold_prism':
          // Spline Signature Iridescent Warm Gold
          const r = Math.min(255, Math.floor(210 + diffuse * 45));
          const g = Math.min(255, Math.floor(170 + diffuse * 50));
          const b = Math.min(255, Math.floor(40 + diffuse * 30));
          return {
            fill: `rgb(${r}, ${g}, ${b})`,
            stroke: 'rgba(255, 255, 255, 0.65)',
            strokeWidth: 1
          };
        case 'core_monolith':
          return {
            fill: `rgb(10, 24, 38)`,
            stroke: 'rgba(255, 208, 66, 0.25)',
            strokeWidth: 0.8
          };
        case 'timber_deck':
          return {
            fill: `rgba(180, 130, 80, ${0.5 + diffuse * 0.4})`,
            stroke: 'rgba(255, 208, 66, 0.3)'
          };
        case 'water_feature':
          return {
            fill: `rgba(56, 189, 248, 0.65)`,
            stroke: 'rgba(255, 255, 255, 0.5)'
          };
        case 'glass_facade':
          return {
            fill: `rgba(56, 189, 248, ${0.18 + diffuse * 0.22})`,
            stroke: 'rgba(255, 255, 255, 0.45)',
            strokeWidth: 0.8
          };
        case 'glass_balustrade':
          return {
            fill: `rgba(255, 255, 255, ${0.12 + diffuse * 0.18})`,
            stroke: 'rgba(255, 208, 66, 0.5)',
            strokeWidth: 0.9
          };
        case 'canopy_slab':
          return {
            fill: `rgba(3, 30, 48, ${0.85 + diffuse * 0.15})`,
            stroke: 'rgba(255, 208, 66, 0.5)',
            strokeWidth: 1.2
          };
        case 'pergola_beam':
          return {
            fill: `rgb(240, 195, 60)`,
            stroke: 'rgba(0,0,0,0.4)',
            strokeWidth: 0.5
          };
        default:
          return { fill: `rgba(120, 120, 120, ${diffuse})` };
      }
    }

    renderGroundShadow(ctx, cx, cy, radius) {
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      grad.addColorStop(0.6, 'rgba(4, 71, 113, 0.15)');
      grad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.beginPath();
      ctx.scale(1, 0.38); // Flatten to isometric ground plane
      ctx.arc(cx, cy / 0.38, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    renderExplodedGuides(ctx, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance, explodeSpread) {
      const guidePoints = [
        { x: -65, z: -65 },
        { x: 65, z: -65 },
        { x: -65, z: 65 },
        { x: 65, z: 65 }
      ];

      ctx.save();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = `rgba(255, 208, 66, ${0.25 * SplineState.explodeProgress})`;
      ctx.lineWidth = 1;

      guidePoints.forEach(pt => {
        const bottomY = -60 + (0 - 1.8) * explodeSpread;
        const topY = 70 + (4 - 1.8) * explodeSpread;

        const pBot = this.projectPoint(pt.x, bottomY, pt.z, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance);
        const pTop = this.projectPoint(pt.x, topY, pt.z, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance);

        ctx.beginPath();
        ctx.moveTo(pBot.x, pBot.y);
        ctx.lineTo(pTop.x, pTop.y);
        ctx.stroke();
      });

      ctx.restore();
    }

    projectPoint(px, py, pz, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance) {
      const rx1 = px * cosY + pz * sinY;
      const rz1 = -px * sinY + pz * cosY;
      const ry1 = py;

      const rx2 = rx1;
      const ry2 = ry1 * cosX - rz1 * sinX;
      const rz2 = ry1 * sinX + rz1 * cosX;

      const scale = focalLength / Math.max(rz2 + cameraDistance, 50);
      return {
        x: cx + rx2 * scale,
        y: cy - ry2 * scale,
        scale: scale,
        z: rz2
      };
    }

    renderHotspots(ctx, cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance, explodeSpread) {
      if (SplineState.mode === 'wireframe') return;

      SplineState.hotspots.forEach(spot => {
        const layerIdx = spot.id === 'podium' ? 0 : spot.id === 'cantilever' ? 2 : 3;
        const explodeYOffset = (layerIdx - 1.8) * explodeSpread;
        const pt = this.projectPoint(
          spot.pos3D.x,
          spot.pos3D.y + explodeYOffset,
          spot.pos3D.z,
          cx, cy, cosX, sinX, cosY, sinY, focalLength, cameraDistance
        );

        // Store 2D coordinate on hotspot for hover detection
        spot.screenX = pt.x;
        spot.screenY = pt.y;

        // Draw pulsing outer ring
        const pulse = (Math.sin(Date.now() * 0.005) + 1) * 0.5;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 7 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 208, 66, ${0.4 - pulse * 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw solid center dot
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD042';
        ctx.fill();
        ctx.strokeStyle = '#02121D';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw Hotspot Label Tag
        ctx.font = '700 9px monospace';
        const labelWidth = ctx.measureText(spot.label).width;
        const tagX = pt.x + 12;
        const tagY = pt.y - 10;

        ctx.fillStyle = 'rgba(2, 27, 43, 0.88)';
        ctx.strokeStyle = 'rgba(255, 208, 66, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(tagX, tagY, labelWidth + 12, 18, 3);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFD042';
        ctx.fillText(spot.label, tagX + 6, tagY + 12);
      });
    }
  }

  /* ==========================================================================
     3. SPLINE AMBIENT BACKGROUND MATRIX (Kinetic Particle Grid)
     ========================================================================== */
  class SplineAmbientCanvas {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.particleCount = 42;
      this.mouse = { x: -1000, y: -1000, radius: 160 };
      this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      this.animId = null;

      this.initParticles();
      this.resize();
      this.initEvents();
      this.render();
    }

    resize() {
      if (!this.canvas) return;
      const parent = this.canvas.parentElement;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;

      this.width = w;
      this.height = h;
      this.canvas.width = w * this.pixelRatio;
      this.canvas.height = h * this.pixelRatio;
      this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    initParticles() {
      this.particles = [];
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * (window.innerWidth || 1200),
          y: Math.random() * 650,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 2.5 + 1,
          color: Math.random() > 0.4 ? 'rgba(255, 208, 66, ' : 'rgba(56, 189, 248, ',
          alpha: Math.random() * 0.4 + 0.15
        });
      }
    }

    initEvents() {
      window.addEventListener('resize', () => {
        this.resize();
        this.initParticles();
      });

      const hero = this.canvas.closest('.hero-minimal-section');
      if (hero) {
        hero.addEventListener('mousemove', (e) => {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
        });

        hero.addEventListener('mouseleave', () => {
          this.mouse.x = -1000;
          this.mouse.y = -1000;
        });
      }
    }

    render() {
      this.animId = requestAnimationFrame(() => this.render());
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      ctx.clearRect(0, 0, w, h);

      // Draw subtle perspective grid lines
      ctx.strokeStyle = 'rgba(255, 208, 66, 0.04)';
      ctx.lineWidth = 1;
      const step = 64;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update & render particles
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Gravitational pull towards mouse
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 0.08;
          p.x += dx * force;
          p.y += dy * force;
        }

        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle laser lines
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.strokeStyle = `rgba(255, 208, 66, ${0.12 * (1 - dist2 / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }
  }

  /* ==========================================================================
     4. UI CONTROLS & SPLINE EMBED CONTROLLER
     ========================================================================== */
  function initSplineUIControls() {
    // Mode Buttons (Shaded / Wireframe / Exploded)
    const modeButtons = document.querySelectorAll('.spline-mode-btn');
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.dataset.mode;
        SplineState.mode = mode;

        if (mode === 'exploded') {
          SplineState.targetExplode = 1.0;
        } else {
          SplineState.targetExplode = 0.0;
        }

        if (typeof window.showToast === 'function') {
          const modeLabels = {
            shaded: '3D Tectonic Shaded Mode Active',
            wireframe: 'Architectural CAD Wireframe Blueprint Active',
            exploded: 'Exploded Vertical Assembly View Active'
          };
          window.showToast('Spline 3D Viewport', modeLabels[mode] || mode, '✦');
        }
      });
    });

    // Tab Switcher (3D MODEL vs STUDIO ID)
    const tabButtons = document.querySelectorAll('.spline-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        SplineState.activeTab = tab;

        const viewModel = document.getElementById('spline-view-model');
        const viewId = document.getElementById('spline-view-identity');

        if (tab === 'model') {
          if (viewModel) viewModel.style.display = 'block';
          if (viewId) viewId.style.display = 'none';
        } else {
          if (viewModel) viewModel.style.display = 'none';
          if (viewId) viewId.style.display = 'flex';
        }
      });
    });

    // Reset Camera Button
    const resetBtn = document.getElementById('spline-btn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        SplineState.targetRotation = { x: 0.38, y: -0.65 };
        SplineState.targetZoom = 1.0;
        SplineState.autoRotate = true;
        if (typeof window.showToast === 'function') {
          window.showToast('Camera Reset', '3D Viewport restored to default isometric orientation.', '↺');
        }
      });
    }

    // Custom Spline.design Scene URL Loader Modal / Prompt
    const customUrlBtn = document.getElementById('spline-btn-custom-url');
    if (customUrlBtn) {
      customUrlBtn.addEventListener('click', () => {
        openSplineUrlModal();
      });
    }
  }

  function openSplineUrlModal() {
    const existing = document.getElementById('spline-url-modal');
    if (existing) {
      existing.classList.add('active');
      return;
    }

    const modal = document.createElement('div');
    modal.id = 'spline-url-modal';
    modal.className = 'case-study-overlay active';
    modal.innerHTML = `
      <div class="case-study-modal-box" style="max-width: 580px; padding: 2rem;">
        <button class="modal-close-trigger" onclick="document.getElementById('spline-url-modal').classList.remove('active')">✕</button>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #FFD042; font-size: 1.5rem;">✦</span>
          <h3 class="font-display text-gold" style="font-size: 1.25rem; font-weight: 800; text-transform: uppercase;">Spline.design Collaboration</h3>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          Load an interactive 3D scene directly exported from <strong>https://spline.design/</strong> into your portfolio hero, or continue utilizing the built-in offline 60fps Tectonic 3D Canvas.
        </p>

        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; font-family: var(--font-mono); font-size: 0.75rem; color: #FFD042; margin-bottom: 0.5rem; text-transform: uppercase;">
            Spline Public Scene URL (.splinecode)
          </label>
          <input type="url" id="custom-spline-input" placeholder="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" 
            style="width: 100%; padding: 0.8rem 1rem; background: var(--bg-surface-2); border: 1px solid var(--border-color); color: #fff; font-family: var(--font-mono); font-size: 0.85rem; border-radius: var(--radius-xs);">
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" id="btn-apply-spline-url" class="btn-brand-yellow" style="padding: 0.75rem 1.5rem; font-size: 0.82rem;">
            Load Spline Scene ↗
          </button>
          <button type="button" id="btn-restore-native-spline" class="btn-brand-outline" style="padding: 0.75rem 1.5rem; font-size: 0.82rem;">
            Reset to Native 3D Model
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btn-apply-spline-url').addEventListener('click', () => {
      const url = document.getElementById('custom-spline-input').value.trim();
      if (!url) {
        alert('Please enter a valid Spline public scene URL (.splinecode)');
        return;
      }
      loadSplineWebComponent(url);
      modal.classList.remove('active');
    });

    document.getElementById('btn-restore-native-spline').addEventListener('click', () => {
      restoreNativeViewer();
      modal.classList.remove('active');
    });
  }

  function loadSplineWebComponent(url) {
    const container = document.getElementById('spline-viewer-container');
    const nativeCanvas = document.getElementById('spline-hero-canvas');
    if (!container || !nativeCanvas) return;

    // Load official Spline viewer script if not already present
    if (!document.getElementById('spline-viewer-script')) {
      const script = document.createElement('script');
      script.id = 'spline-viewer-script';
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js';
      document.head.appendChild(script);
    }

    container.innerHTML = `<spline-viewer url="${url}" style="width: 100%; height: 100%; border-radius: inherit;"></spline-viewer>`;
    container.style.display = 'block';
    nativeCanvas.style.display = 'none';

    if (typeof window.showToast === 'function') {
      window.showToast('Spline Scene Embedded', 'Official Spline.design Web Component loaded.', '✦');
    }
  }

  function restoreNativeViewer() {
    const container = document.getElementById('spline-viewer-container');
    const nativeCanvas = document.getElementById('spline-hero-canvas');
    if (container) {
      container.style.display = 'none';
      container.innerHTML = '';
    }
    if (nativeCanvas) {
      nativeCanvas.style.display = 'block';
    }
    if (typeof window.showToast === 'function') {
      window.showToast('Native Engine Restored', 'Offline 60fps Tectonic Canvas active.', '✓');
    }
  }

  // Self Initialization on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    new SplineHeroViewer('spline-hero-canvas', 'spline-hero-viewport');
    new SplineAmbientCanvas('spline-bg-canvas');
    initSplineUIControls();
  }
})();
