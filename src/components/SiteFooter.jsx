import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="clean-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="clean-footer-top">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#top" className="footer-logo-link">
              <img src="/images/grk_logo.png" alt="GRK Homes" className="footer-logo-img" />
            </a>
            <p className="footer-bio">
              Sydney’s dedicated contract builder for bespoke architectural residences, knockdown rebuilds, and high-yield dual occupancies. Led directly on site by Director Revanth Kallu.
            </p>
            <div className="footer-licence-badge">
              <ShieldCheck size={16} />
              <span>Licensed &amp; Insured Residential Master Builder · NSW</span>
            </div>
          </div>

          {/* Nav Col */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-link-list">
              <li><a href="#projects">Selected Portfolio</a></li>
              <li><a href="#cinematic-showcase">Architectural Showcase</a></li>
              <li><a href="#about">The GRK Approach</a></li>
              <li><a href="#services">Specialist Services</a></li>
              <li><a href="#process">Build Methodology</a></li>
              <li><a href="#contact">Site Consultation</a></li>
            </ul>
          </div>

          {/* Suburbs Col */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Key Build Areas</h3>
            <ul className="footer-link-list">
              <li><span>Box Hill &amp; Gables</span></li>
              <li><span>The Hills Shire &amp; Castle Hill</span></li>
              <li><span>Upper North Shore</span></li>
              <li><span>Northern Beaches &amp; Pittwater</span></li>
              <li><span>Eastern Suburbs &amp; Coastal</span></li>
              <li><span>Greater Sydney NSW</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Direct Builder Contact</h3>
            <div className="footer-contact-details">
              <p className="footer-director-label">Revanth Kallu · Director</p>
              <a href="tel:+61430948518" className="footer-contact-item">
                <Phone size={14} />
                <span>+61 430 948 518</span>
              </a>
              <a href="mailto:revanth.kallu@grkhomes.com.au" className="footer-contact-item">
                <Mail size={14} />
                <span>revanth.kallu@grkhomes.com.au</span>
              </a>
              <a 
                href="https://www.instagram.com/grkhomes/" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-contact-item instagram-item"
              >
                <Instagram size={14} />
                <span>@grkhomes on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="clean-footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} GRK Homes Pty Ltd. All rights reserved. Master Builders Contract Standards.
          </p>

          <button 
            type="button" 
            className="btn-back-to-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
