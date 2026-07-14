import React, { useState, useRef } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import CreditSolutions from './components/sections/CreditSolutions';
import HowItWorks from './components/sections/HowItWorks';
import Consultant from './components/sections/Consultant';
import Institutions from './components/sections/Institutions';
import Benefits from './components/sections/Benefits';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import { GlobalWhatsAppSticky } from './components/ui/WhatsAppButton';

export const App: React.FC = () => {
  const cityModalTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  const handleOpenCityModal = () => {
    setIsCityModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* WCAG Skip Link */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {/* Hero Section (includes Credit Matcher) */}
        <Hero onOpenCityModal={handleOpenCityModal} />

        {/* Brand Pillars Strip */}
        <TrustStrip />

        {/* Credit Modalities Grid (includes utility bill city modal) */}
        <CreditSolutions 
          cityModalTriggerRef={cityModalTriggerRef}
          isCityModalOpen={isCityModalOpen}
          setIsCityModalOpen={setIsCityModalOpen}
        />

        {/* Timeline representation */}
        <HowItWorks />

        {/* Biography & Customer Support Introduction */}
        <Consultant />

        {/* Bank Partner monochrome grids */}
        <Institutions />

        {/* Four Core Brand Pillars */}
        <Benefits />

        {/* Accessible Accordions for FAQ */}
        <FAQ />

        {/* Ending Dark CTA Banner */}
        <FinalCTA />
      </main>

      {/* Footer & Disclosures */}
      <Footer />

      {/* Floating (desktop) / Sticky (mobile) WhatsApp button manager */}
      <GlobalWhatsAppSticky />
    </div>
  );
};

export default App;
