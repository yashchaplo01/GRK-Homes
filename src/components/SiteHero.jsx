import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

const heroVideos = [
  `${import.meta.env.BASE_URL}videos/grk_video_1.mp4`,
  `${import.meta.env.BASE_URL}videos/grk_video_2.mp4`
];

export default function SiteHero() {
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  return (
    <section className="clean-hero" id="top">
      {/* Background Cinematic Video Carousel - Sequential Autoplay */}
      <div className="clean-hero-video-wrap">
        <video
          key={videoIndex}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          poster={`${import.meta.env.BASE_URL}images/hero_modern_home.jpg`}
          className="clean-hero-video"
        >
          <source src={heroVideos[videoIndex]} type="video/mp4" />
        </video>
        <div className="clean-hero-overlay" />
        <div className="clean-hero-vignette" />
      </div>

      {/* Clean Hero Main Content */}
      <div className="container clean-hero-content">
        <div className="clean-hero-badge">
          <Sparkles size={13} className="gold-accent-icon" />
          <span>GRK HOMES · SYDNEY ARCHITECTURAL BUILDERS</span>
        </div>

        <h1 className="clean-hero-headline">
          Bespoke Homes Crafted With Architectural Precision.
        </h1>

        <p className="clean-hero-description">
          A personal, builder-led approach by <strong>GRK Homes</strong>. 
          Fixed-price contract certainty, refined contemporary craftsmanship, and seamless project management across Sydney and The Hills Shire.
        </p>

        <div className="clean-hero-actions">
          <a href="#projects" className="btn btn-luxury-primary">
            <span>Explore Portfolio</span>
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-luxury-glass">
            <span>Site Consultation</span>
          </a>
        </div>
      </div>

      {/* Clean Bottom Trust Pillars */}
      <div className="clean-hero-trust-bar">
        <div className="container clean-trust-grid">
          <div className="trust-item">
            <ShieldCheck size={16} className="trust-icon" />
            <span>Fixed-Price Master Contract</span>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={16} className="trust-icon" />
            <span>Direct Director Accountability</span>
          </div>
          <div className="trust-item">
            <Award size={16} className="trust-icon" />
            <span>10-Year Structural Guarantee</span>
          </div>
          <div className="trust-item">
            <span className="location-indicator" />
            <span>The Hills Shire · Box Hill · Greater Sydney</span>
          </div>
        </div>
      </div>
    </section>
  );
}
