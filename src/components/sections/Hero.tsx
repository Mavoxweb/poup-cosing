import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShieldHalved, faCompass } from '@fortawesome/free-solid-svg-icons';

import Container from '../ui/Container';
import Button from '../ui/Button';
import CreditMatch from '../credit-match/CreditMatch';
import { openWhatsApp } from '../../lib/whatsapp';

interface HeroProps {
  onOpenCityModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCityModal }) => {
  const handleScrollToSolutions = () => {
    const element = document.getElementById('solucoes');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-surface-blue to-white pt-28 md:pt-40 pb-16 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left animate-[fadeIn_0.5s_ease-out]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 border border-accent-100/50 rounded-full text-accent-700">
            <span className="text-[10px] md:text-xs font-extrabold tracking-wider uppercase">
              Crédito com atendimento humano
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-950 tracking-tight leading-[1.15] max-w-2xl">
            Crédito mais simples de entender. Atendimento mais humano para decidir.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-secondary leading-relaxed max-w-xl">
            Conheça possibilidades de crédito para o seu perfil e conte com o atendimento personalizado de Camila Rodrigues.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button variant="accent" size="lg" onClick={handleScrollToSolutions} className="text-base">
              <FontAwesomeIcon icon={faCompass} className="mr-2" />
              Encontrar uma opção para mim
            </Button>
            <Button variant="secondary" size="lg" onClick={() => openWhatsApp('GENERAL')} className="text-base bg-white">
              <FontAwesomeIcon icon={faCommentDots} className="mr-2 text-primary-900" />
              Falar com Camila
            </Button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-6 border-t border-neutral-border/60 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-neutral-secondary font-medium">
            {['Atendimento personalizado', 'Simulação sem compromisso', 'Transparência em cada etapa'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShieldHalved} className="text-primary-700" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-700/10 to-accent-500/10 rounded-premium-lg blur-2xl opacity-60 -z-10"></div>
            <CreditMatch onOpenCityModal={onOpenCityModal} />
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
