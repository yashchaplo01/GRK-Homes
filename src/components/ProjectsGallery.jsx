import React, { useState } from 'react';
import { Bed, Bath, Car, Maximize2, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'the-horizon',
      title: 'The Horizon Pavilion',
      category: 'custom',
      image: `${import.meta.env.BASE_URL}images/hero_modern_home.jpg`,
      specs: { beds: 5, baths: 5, cars: 3, area: '540 m²' },
      contract: 'Fixed-Price Master Builders Contract',
      buildDuration: '11 Months',
      description: 'A bespoke two-storey architectural residence featuring an engineered 4.5-metre cantilever, natural sandstone feature masonry, seamless indoor-outdoor alfresco living, and high-performance double glazing.',
      keyHighlights: [
        'Commercial grade Low-E double glazing',
        'Structural steel cantilevered upper pavilion',
        'Zero-threshold outdoor entertaining terrace',
        'Turnkey contract with full CDC & council approvals'
      ]
    },
    {
      id: 'coastal-cliff',
      title: 'The Coastal Vista Residence',
      category: 'coastal',
      image: `${import.meta.env.BASE_URL}images/project_coastal_pavilion.jpg`,
      specs: { beds: 4, baths: 4, cars: 2, area: '460 m²' },
      contract: 'Turnkey Contract with Complete Inclusions',
      buildDuration: '10 Months',
      description: 'Engineered specifically for coastal weather conditions with marine-grade stainless fixings, natural bleached sandstone feature pillars, and timber batten louvers for passive solar shading.',
      keyHighlights: [
        'Natural cedar batten screening and soffits',
        'Integrated wet-edge lap pool and honed bluestone surround',
        'High ceilings (3.2m ground, 2.8m first floor)',
        'Comprehensive fixed-price schedule of finishes'
      ]
    },
    {
      id: 'lumina-duplex',
      title: 'The Lumina Dual Residence',
      category: 'duplex',
      image: `${import.meta.env.BASE_URL}images/project_urban_duplex.jpg`,
      specs: { beds: '4 + 4', baths: '3 + 3', cars: '2 + 2', area: '640 m² Total' },
      contract: 'Dual Occupancy Turnkey Master Contract',
      buildDuration: '12 Months',
      description: 'A contemporary side-by-side architectural duplex development designed to maximize land value, FSR yield, and multi-generational living with superior acoustic party walls.',
      keyHighlights: [
        'Acoustic Hebel party wall system exceeding NCC requirements',
        'Torrens title subdivision coordination',
        'Separate independent utility connections and private entrances',
        'Low-maintenance architectural metal cladding'
      ]
    }
  ];

  const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="clean-portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="badge-luxury">
            <Sparkles size={13} className="gold-icon" />
            <span>SELECTED PORTFOLIO</span>
          </div>
          <h2 className="portfolio-title">
            Built With Pride Across Sydney.
          </h2>
          <p className="portfolio-description">
            Every home we deliver embodies structural integrity, refined craftsmanship, and clear fixed-contract delivery.
          </p>

          {/* Filter Pills */}
          <div className="portfolio-filter-tabs">
            {[
              { id: 'all', label: 'All Residences' },
              { id: 'custom', label: 'Custom Luxury' },
              { id: 'coastal', label: 'Coastal Architecture' },
              { id: 'duplex', label: 'Dual Occupancy' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`filter-tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="portfolio-tag-badge">
                  <span>{project.contract}</span>
                </div>
              </div>

              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>

                {/* Specs Row */}
                <div className="portfolio-specs-row">
                  <div className="spec-badge" title="Bedrooms">
                    <Bed size={14} />
                    <span>{project.specs.beds} Beds</span>
                  </div>
                  <div className="spec-badge" title="Bathrooms">
                    <Bath size={14} />
                    <span>{project.specs.baths} Baths</span>
                  </div>
                  <div className="spec-badge" title="Garages">
                    <Car size={14} />
                    <span>{project.specs.cars} Cars</span>
                  </div>
                  <div className="spec-badge" title="Total Floor Area">
                    <Maximize2 size={14} />
                    <span>{project.specs.area}</span>
                  </div>
                </div>

                <div className="portfolio-card-footer">
                  <span className="view-details-link">
                    <span>View Specifications &amp; Plan</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="modal-overlay" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-project-title"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn" 
                type="button" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>

              <div className="modal-media-wrap">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                <div className="modal-tag">
                  <span>{selectedProject.contract}</span>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-meta-line">
                  <span>Timeline: {selectedProject.buildDuration}</span>
                  <span className="dot-sep">·</span>
                  <span>Master Builders Standard</span>
                </div>

                <h3 id="modal-project-title" className="modal-title">{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-specs-bar">
                  <div className="modal-spec-item">
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-val">{selectedProject.specs.beds}</span>
                  </div>
                  <div className="modal-spec-item">
                    <span className="spec-label">Bathrooms</span>
                    <span className="spec-val">{selectedProject.specs.baths}</span>
                  </div>
                  <div className="modal-spec-item">
                    <span className="spec-label">Car Accom.</span>
                    <span className="spec-val">{selectedProject.specs.cars}</span>
                  </div>
                  <div className="modal-spec-item">
                    <span className="spec-label">Internal Area</span>
                    <span className="spec-val">{selectedProject.specs.area}</span>
                  </div>
                </div>

                <div className="modal-highlights">
                  <h4>Architectural Inclusions &amp; Engineering</h4>
                  <ul>
                    {selectedProject.keyHighlights.map((hl, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="hl-check" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a href="#contact" className="btn btn-luxury-primary" onClick={() => setSelectedProject(null)}>
                    <span>Enquire About a Similar Build</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
