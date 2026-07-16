import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { openWhatsApp } from '../../lib/whatsapp';

export const FinalCTA: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 300 C300 200, 700 450, 1100 250 C1300 150, 1500 200, 1600 250" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <path d="M-100 250 C400 150, 800 350, 1200 150" stroke="#FF850A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <Container className="text-center max-w-4xl space-y-8 relative z-10 animate-[fadeIn_0.5s_ease-out]">
        <div className="space-y-4">
          <span className="text-xs md:text-sm font-extrabold tracking-widest text-accent-500 uppercase">
            FALE COM A POUPCONSIG
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Não sabe qual opção escolher? Comece pela conversa.
          </h2>
          <p className="text-base sm:text-lg text-primary-100 max-w-xl mx-auto leading-relaxed">
            Conte para Camila o que você procura e conheça as possibilidades disponíveis para o seu atendimento.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
          <Button variant="accent" size="lg" onClick={() => openWhatsApp('GENERAL')} className="text-base font-bold">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-lg" />
            Falar com Camila no WhatsApp
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleScrollToTop}
            className="text-base font-bold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white"
          >
            <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
            Encontrar uma opção para mim
          </Button>
        </div>

        <p className="text-xs text-primary-100/50 pt-4 font-semibold tracking-wider uppercase">
          Atendimento personalizado pela Poupconsig
        </p>
      </Container>
    </section>
  );
};

export default FinalCTA;
