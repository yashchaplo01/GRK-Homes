import React from 'react';
import { Home, RefreshCw, Layers, Sparkles, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Home,
    title: 'Custom Architectural Homes',
    subtitle: 'Bespoke New Builds',
    description: 'Designed in close collaboration with your architect to harmonize with your block’s topography, natural light, and council planning constraints.',
    inclusions: [
      'Tailored foundation & structural steel engineering',
      'High-performance glazed facades & acoustic design',
      'Fixed-price Master Builders contract delivery'
    ]
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Knockdown Rebuilds',
    subtitle: 'Keep Your Location',
    description: 'Replace an aging house with a high-performance modern residence without moving away from your school zones, neighbours, or lifestyle.',
    inclusions: [
      'Site demolition & hazardous material clearance',
      'CDC / council compliance management',
      'Turnkey handover with full landscaping coordination'
    ]
  },
  {
    number: '03',
    icon: Layers,
    title: 'Luxury Dual Occupancy',
    subtitle: 'Duplex & Secondary Living',
    description: 'Maximize land equity and multi-generational potential with side-by-side or detached luxury duplex residences featuring separate titles.',
    inclusions: [
      'FSR & council yield optimization',
      'Acoustic Hebel party wall systems',
      'Independent utility connections & private entries'
    ]
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Acreage & Major Transformations',
    subtitle: 'Grand Scale Residential',
    description: 'Substantial pavilions, acreage estates in The Hills & outer Sydney, and major architectural extensions that elevate long-term property value.',
    inclusions: [
      'Expansive indoor-outdoor alfresco pavilions',
      'Bushfire (BAL) & flood mitigation compliance',
      'Comprehensive fixed-price finishes schedule'
    ]
  }
];

export default function SiteServices() {
  return (
    <section className="clean-services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="badge-luxury">
            <Sparkles size={13} className="gold-icon" />
            <span>SPECIALIST CAPABILITIES</span>
          </div>
          <h2 className="services-title">
            Built Around Your Brief, Not a Generic Template.
          </h2>
          <p className="services-description">
            From preliminary site feasibility to the final inspection handover, we build high-end residential homes with transparent costings and daily builder oversight.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div key={svc.number} className="service-card">
                <div className="service-card-top">
                  <span className="service-index">{svc.number}</span>
                  <div className="service-icon-wrap">
                    <IconComponent size={20} />
                  </div>
                </div>

                <p className="service-card-subtitle">{svc.subtitle}</p>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.description}</p>

                <ul className="service-inclusions">
                  {svc.inclusions.map((item, idx) => (
                    <li key={idx}>
                      <Check size={14} className="check-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <a href="#contact" className="service-action-link">
                    <span>Discuss your site</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
