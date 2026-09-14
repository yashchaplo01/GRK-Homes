import React from 'react';
import { Mail, Phone, Sparkles, CheckCircle2, Shield, Users, Clock } from 'lucide-react';

export default function SiteAbout() {
  return (
    <section className="clean-about-section" id="about">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Main Story Column */}
          <div className="about-main-col">
            <div className="badge-luxury">
              <Sparkles size={13} className="gold-icon" />
              <span>THE GRK PHILOSOPHY</span>
            </div>
            <h2 className="about-title">
              A Direct, Hands-On Builder Relationship.
            </h2>
            <p className="about-lead">
              Building a bespoke architectural home involves hundreds of critical decisions. The process is smoother, faster, and far more rewarding when the licensed builder directly manages your site, understands the engineering brief, and personally takes accountability for every detail.
            </p>
            <p className="about-text">
              At GRK Homes, we deliberately limit our concurrent project intake across Sydney and The Hills Shire. This ensures Director <strong>Revanth Kallu</strong> remains personally present on site, collaborating closely with your architects, engineers, and trades.
            </p>

            <div className="about-commitments">
              <div className="commitment-item">
                <div className="commitment-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4>Transparent Fixed-Price Delivery</h4>
                  <p>Detailed schedules of finishes, zero hidden provisional sums, and open communication before any commitment.</p>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commitment-icon">
                  <Shield size={18} />
                </div>
                <div>
                  <h4>Site-Led Engineering Expertise</h4>
                  <p>In-depth feasibility on slope, rock excavation, CDC/DA approvals, stormwater, and coastal resilience.</p>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commitment-icon">
                  <Users size={18} />
                </div>
                <div>
                  <h4>Direct Builder Access Always</h4>
                  <p>Direct mobile access to Revanth Kallu throughout your build. No disconnected account managers or runarounds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director Profile Card */}
          <aside className="about-director-card">
            <div className="director-badge">
              <span>LEADERSHIP</span>
            </div>
            <h3 className="director-name">Revanth Kallu</h3>
            <p className="director-title">Director &amp; Licensed Builder · GRK Homes</p>

            <div className="director-quote-box">
              <p className="quote-mark">“</p>
              <blockquote>
                A sensible, upfront conversation about site feasibility and construction reality saves immense uncertainty and cost down the road.
              </blockquote>
            </div>

            <div className="director-contact-list">
              <a href="tel:+61430948518" className="director-link">
                <Phone size={16} />
                <span>+61 430 948 518</span>
              </a>
              <a href="mailto:revanth.kallu@grkhomes.com.au" className="director-link">
                <Mail size={16} />
                <span>revanth.kallu@grkhomes.com.au</span>
              </a>
            </div>

            <div className="director-card-footer">
              <a href="#contact" className="btn btn-luxury-primary full-width">
                <span>Request a Feasibility Call</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
