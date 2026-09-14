import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, FileCheck, Hammer, Key } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: MapPin,
    title: 'Site & Feasibility',
    subtitle: 'Practical discovery',
    description: 'We evaluate your site slope, orientation, soil, access, and council planning controls (CDC vs DA) to establish build viability early.'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Design & Approvals',
    subtitle: 'Architectural resolution',
    description: 'Collaborate with your architect or design team to refine constructability, material selections, and complete statutory authority sign-offs.'
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Fixed-Price Contract',
    subtitle: 'Complete clarity',
    description: 'A comprehensive Master Builders contract detailing all finishes, timelines, milestones, and inclusions with zero hidden builder surprises.'
  },
  {
    step: '04',
    icon: Hammer,
    title: 'Precision Build',
    subtitle: 'Daily builder presence',
    description: 'Construction led directly on site by Revanth Kallu. Regular site walk-throughs, milestone progress updates, and strict quality benchmarks.'
  },
  {
    step: '05',
    icon: Key,
    title: 'Handover & Beyond',
    subtitle: 'Enduring peace of mind',
    description: 'Comprehensive defect-free inspection, complete compliance documentation, keys in hand, and our 10-year structural warranty backing.'
  }
];

export default function SiteProcess() {
  return (
    <section className="clean-process-section" id="process">
      <div className="container">
        <div className="process-header">
          <div className="badge-luxury">
            <Sparkles size={13} className="gold-icon" />
            <span>HOW WE DELIVER</span>
          </div>
          <h2 className="process-title">
            A Clear, Predictable Path to Your New Home.
          </h2>
          <p className="process-description">
            No sales scripts or confusing jargon. Just honest, practical construction management from your first coffee with Revanth to the day you unlock the front door.
          </p>
        </div>

        {/* Process Steps Flow */}
        <div className="process-timeline-grid">
          {processSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.step} className="process-card">
                <div className="process-card-header">
                  <span className="process-step-pill">Phase {step.step}</span>
                  <div className="process-icon-box">
                    <IconComponent size={18} />
                  </div>
                </div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-subtitle">{step.subtitle}</p>
                <p className="process-card-desc">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Action Callout */}
        <div className="process-callout-card">
          <div className="callout-text">
            <h3>Have a site in mind, or drawings already in progress?</h3>
            <p>Schedule a no-obligation preliminary review to understand your site's true buildability and cost parameters.</p>
          </div>
          <div className="callout-action">
            <a href="#contact" className="btn btn-luxury-primary">
              <span>Start Your Project Review</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
