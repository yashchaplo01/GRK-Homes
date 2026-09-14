import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const leftLinks = [
  { label: 'Portfolio', href: '#projects' },
  { label: 'Showcase', href: '#cinematic-showcase' },
  { label: 'Approach', href: '#about' },
];

const rightLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`clean-navbar-light ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container clean-nav-container">
        {/* Mobile Hamburger Toggle (Left on mobile) */}
        <button 
          className="mobile-hamburger-btn" 
          type="button" 
          onClick={() => setOpen(!open)} 
          aria-expanded={open} 
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Left Navigation Links */}
        <nav className="nav-side nav-left" aria-label="Primary navigation left">
          <ul className="nav-link-list">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-light-anchor">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="nav-center-brand">
          <a className="clean-logo-link" href="#top" aria-label="GRK Homes - Return to top">
            <img src={`${import.meta.env.BASE_URL}images/grk_logo.png`} alt="GRK Homes" className="logo-center-img" />
          </a>
        </div>

        {/* Right Navigation Links & CTA */}
        <nav className="nav-side nav-right" aria-label="Primary navigation right">
          <ul className="nav-link-list">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-light-anchor">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-nav-light-cta">
            <span>Enquire</span>
            <ArrowRight size={14} />
          </a>
        </nav>

        {/* Mobile Right Quick Action */}
        <div className="mobile-right-action">
          <a href="#contact" className="btn-nav-mobile-cta">
            <span>Enquire</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-drawer-body">
          {allLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="mobile-drawer-link">
              {link.label}
            </a>
          ))}
          <div className="mobile-drawer-cta-wrap">
            <a href="#contact" className="btn btn-luxury-primary full-width" onClick={closeMenu}>
              <span>Start a Project Consultation</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
