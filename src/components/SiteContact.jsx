import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, Clock } from 'lucide-react';

export default function SiteContact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    project: 'Custom Architectural Home',
    budget: '$1.5M - $2.5M',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry: ${form.name} - ${form.project} (${form.suburb || 'Sydney'})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Site Suburb: ${form.suburb}\n` +
      `Project Type: ${form.project}\n` +
      `Anticipated Budget: ${form.budget}\n\n` +
      `Project Details & Brief:\n${form.message}`
    );
    window.location.href = `mailto:revanth.kallu@grkhomes.com.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="clean-contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Builder Info */}
          <div className="contact-info-col">
            <div className="badge-luxury">
              <Sparkles size={13} className="gold-icon" />
              <span>DIRECT ACCESS</span>
            </div>
            <h2 className="contact-title">
              Let’s Discuss Your Build.
            </h2>
            <p className="contact-lead">
              Have a block in Sydney or The Hills Shire? Speak directly with the licensed builders at <strong>GRK Homes</strong> for honest, practical feedback on your concept, budget, and council approvals.
            </p>

            <div className="contact-cards-stack">
              <a href="tel:+61430948518" className="direct-touch-card">
                <div className="touch-icon-box">
                  <Phone size={18} />
                </div>
                <div className="touch-content">
                  <span className="touch-label">Direct Phone</span>
                  <span className="touch-val">+61 430 948 518</span>
                </div>
              </a>

              <a href="mailto:revanth.kallu@grkhomes.com.au" className="direct-touch-card">
                <div className="touch-icon-box">
                  <Mail size={18} />
                </div>
                <div className="touch-content">
                  <span className="touch-label">Direct Email</span>
                  <span className="touch-val">revanth.kallu@grkhomes.com.au</span>
                </div>
              </a>

              <div className="direct-touch-card">
                <div className="touch-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="touch-content">
                  <span className="touch-label">Build Locations</span>
                  <span className="touch-val">The Hills Shire, Box Hill, Northern Beaches &amp; Greater Sydney</span>
                </div>
              </div>
            </div>

            <div className="service-guarantee-note">
              <p>
                <strong>Zero Obligation:</strong> We review block topography, zoning, and constructability without pushing templated sales pitches.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Project Enquiry Form */}
          <div className="contact-form-col">
            <div className="form-luxury-card">
              <div className="form-header">
                <h3>Start a Project Conversation</h3>
                <p>Fill out the details below. We typically respond within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={32} className="success-icon" />
                  <h4>Thank You, {form.name || 'Friend'}</h4>
                  <p>Your enquiry has been prepared. If your mail client didn't open automatically, you can reach GRK Homes directly at <strong>+61 430 948 518</strong>.</p>
                  <button 
                    type="button" 
                    className="btn btn-luxury-primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Information
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="clean-project-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. David Mitchell"
                        value={form.name}
                        onChange={update}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0400 000 000"
                        value={form.phone}
                        onChange={update}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="david@example.com.au"
                        value={form.email}
                        onChange={update}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="suburb">Site Suburb / Location</label>
                      <input
                        id="suburb"
                        name="suburb"
                        type="text"
                        placeholder="e.g. Box Hill, Castle Hill, Mona Vale"
                        value={form.suburb}
                        onChange={update}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="project">Project Type</label>
                      <select id="project" name="project" value={form.project} onChange={update}>
                        <option>Custom Architectural Home</option>
                        <option>Knockdown Rebuild</option>
                        <option>Luxury Dual Occupancy / Duplex</option>
                        <option>Acreage &amp; Pavilion Estate</option>
                        <option>Major Alterations &amp; Additions</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Anticipated Build Budget</label>
                      <select id="budget" name="budget" value={form.budget} onChange={update}>
                        <option>$1.2M - $1.8M</option>
                        <option>$1.8M - $2.5M</option>
                        <option>$2.5M - $3.5M</option>
                        <option>$3.5M+</option>
                        <option>To be determined with builder</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Vision &amp; Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your land, whether you have architectural plans, or what questions you have regarding council approvals..."
                      value={form.message}
                      onChange={update}
                    />
                  </div>

                  <button type="submit" className="btn btn-luxury-primary full-width">
                    <span>Send Project Enquiry</span>
                    <Send size={15} />
                  </button>

                  <p className="form-disclaimer-note">
                    Your details are confidential and used strictly to respond to your project request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
