'use client';

import Link from 'next/link';
import { CurvedHero } from './curved-hero';
import { ArchitecturalPhilosophy } from './architectural-philosophy';
import { AsymmetricCatalog } from './asymmetric-catalog';
import { PeekMaskViewer } from './peek-mask-viewer';
import { RealEstateAudit } from './real-estate-audit';
import { MinimalContact } from './minimal-contact';
import './real-estate.css';

export function RealEstateShowcase() {
  return (
    <div className="real-estate-page selection:bg-[#8b5cf6] selection:text-white">
      {/* 01 // Interactive Hero with Fluid Curved Framing & Circular Rotating Badge */}
      <CurvedHero />

      {/* 02 // Clean Spatial Contrast Section */}
      <ArchitecturalPhilosophy />

      {/* 03 // Asymmetric Catalog Layout with Horizontal Navigation */}
      <AsymmetricCatalog />

      {/* 04 // Interactive Floating Circular Peek Mask Viewer */}
      <PeekMaskViewer />

      {/* 05 // Comprehensive Real Estate UI/UX & Creative Audit Section */}
      <RealEstateAudit />

      {/* 06 // Integrated Direct Consultation Section */}
      <MinimalContact />
    </div>
  );
}
