import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles, Layers, Maximize2, ArrowRight } from 'lucide-react';

export default function CinematicShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="cinematic-section" id="cinematic-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="cinematic-header">
          <div className="badge-luxury">
            <Sparkles size={13} className="gold-icon" />
            <span>CRAFTSMANSHIP IN MOTION</span>
          </div>
          <h2 className="cinematic-title">
            Architectural Vision, Built to Scale.
          </h2>
          <p className="cinematic-desc">
            Take a closer look at the precision engineering, generous spatial volumes, and refined natural materials that define every GRK residence across Sydney.
          </p>
        </div>

        {/* Video Theatre Frame */}
        <div className="theatre-container">
          <div className="theatre-screen">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={`${import.meta.env.BASE_URL}images/hero_modern_home.jpg`}
              className="theatre-video"
            >
              <source src={`${import.meta.env.BASE_URL}videos/grk_video_2.mp4`} type="video/mp4" />
            </video>

            {/* Video Controls Overlay */}
            <div className="theatre-overlay-controls">
              <div className="theatre-badge">
                <span className="live-pulse-dot" />
                <span>RESIDENCE 02 · ARCHITECTURAL FILM</span>
              </div>
              <div className="theatre-btn-group">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="theatre-control-btn"
                  aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  title={isPlaying ? 'Pause film' : 'Play film'}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="theatre-control-btn"
                  aria-label={isMuted ? 'Unmute film' : 'Mute film'}
                  title={isMuted ? 'Unmute film' : 'Mute film'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Three Key Architectural Pillars */}
          <div className="theatre-pillars">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h3>Engineered Cantilevers</h3>
              <p>Heavy-gauge structural steel allowing column-free lower living zones and panoramic floor-to-ceiling glass expanses.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h3>Bespoke Joinery &amp; Stone</h3>
              <p>Hand-selected Sydney sandstone, warm cedar battens, and tailored acoustic wall assemblies built to exceed NCC standards.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h3>Fixed-Price Assurance</h3>
              <p>Transparent schedule of finishes, fixed build timeline, and direct daily oversight by GRK Homes.</p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="theatre-cta-wrap">
            <a href="#contact" className="btn btn-luxury-solid">
              <span>Book a Private Site &amp; Feasibility Inspection</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
