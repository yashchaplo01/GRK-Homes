import React from 'react';
import SiteNavbar from './components/SiteNavbar';
import SiteHero from './components/SiteHero';
import ProjectsGallery from './components/ProjectsGallery';
import CinematicShowcase from './components/CinematicShowcase';
import SiteAbout from './components/SiteAbout';
import SiteServices from './components/SiteServices';
import SiteProcess from './components/SiteProcess';
import SiteContact from './components/SiteContact';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="site-wrapper">
      <SiteNavbar />
      <main id="main-content">
        <SiteHero />
        <ProjectsGallery />
        <CinematicShowcase />
        <SiteAbout />
        <SiteServices />
        <SiteProcess />
        <SiteContact />
      </main>
      <SiteFooter />
    </div>
  );
}
