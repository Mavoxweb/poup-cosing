import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark, faPlus, faMinus, faEye, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { openWhatsApp } from '../../lib/whatsapp';

// Import all testimonial images
import dep1 from '../../assets/depoimentos (1).jpeg';
import dep2 from '../../assets/depoimentos (2).jpeg';
import dep3 from '../../assets/depoimentos (3).jpeg';
import dep4 from '../../assets/depoimentos (4).jpeg';
import dep5 from '../../assets/depoimentos (5).jpeg';
import dep6 from '../../assets/depoimentos (6).jpeg';
import dep7 from '../../assets/depoimentos (7).jpeg';
import dep8 from '../../assets/depoimentos (8).jpeg';
import dep9 from '../../assets/depoimentos (9).jpeg';
import dep10 from '../../assets/depoimentos (10).jpeg';
import dep11 from '../../assets/depoimentos (11).jpeg';
import dep12 from '../../assets/depoimentos (12).jpeg';
import dep13 from '../../assets/depoimentos (13).jpeg';

const testimonialsImages = [
  dep1, dep2, dep3, dep4, dep5, dep6, dep7, dep8, dep9, dep10, dep11, dep12, dep13
];

export const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handlePrev = () => {
    setLightboxIndex((prev) => 
      prev !== null ? (prev === 0 ? testimonialsImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) => 
      prev !== null ? (prev === testimonialsImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  // Touch Swipe for Mobile Lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Initially show 6 testimonials, reveal all on click
  const visibleImages = showAll ? testimonialsImages : testimonialsImages.slice(0, 6);

  return (
    <section id="depoimentos" className="py-20 bg-surface-blue/50 border-y border-neutral-border">
      <Container>
        <SectionHeading
          eyebrow="QUEM JÁ SIMULOU, APROVA"
          title="Histórias reais de quem conquistou o crédito ideal"
          description="Conversas reais e autorizadas de clientes que realizaram suas simulações de crédito consignado e antecipação de FGTS com a consultora Camila Rodrigues."
        />

        {/* Responsive Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pt-4">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white border border-neutral-border rounded-premium overflow-hidden shadow-premium hover:shadow-premium-hover hover:border-primary-700/50 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
              role="button"
              aria-label={`Ver depoimento ampliado número ${index + 1}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-neutral-100">
                <img
                  src={image}
                  alt={`Captura de tela de depoimento de cliente do WhatsApp número ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  draggable={false}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-primary-700 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Footer with Credibility Info */}
              <div className="p-4 bg-white border-t border-neutral-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 text-[#25D366]" />
                  </div>
                  <span className="text-xs font-extrabold text-primary-950">Cliente Poupconsig</span>
                </div>
                <span className="text-[10px] text-neutral-secondary font-semibold">Conversa autorizada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action / Show More buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            onClick={() => setShowAll(!showAll)}
            className="text-base font-bold flex items-center gap-2"
          >
            <FontAwesomeIcon icon={showAll ? faMinus : faPlus} className="w-4 h-4" />
            {showAll ? 'Ver menos depoimentos' : 'Ver mais depoimentos'}
          </Button>

          <Button
            variant="accent"
            onClick={() => openWhatsApp('GENERAL')}
            className="text-base font-bold flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4" />
            Fazer minha simulação grátis
          </Button>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary-950/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de depoimento ampliado"
        >
          {/* Header */}
          <div className="flex items-center justify-between w-full text-white pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-sm md:text-base">Depoimento Autorizado</span>
                <span className="text-xs text-white/60 block -mt-0.5">Cliente Poupconsig</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold opacity-75">
                {lightboxIndex + 1} de {testimonialsImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-500"
                aria-label="Fechar visualizador"
              >
                <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation & Image Area */}
          <div className="relative flex-grow flex items-center justify-center my-4 md:my-6 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 z-10 p-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label="Depoimento anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Container with maximum height constraints to avoid overflow */}
            <div className="max-w-full max-h-[70vh] md:max-h-[75vh] flex items-center justify-center relative px-8">
              <img
                src={testimonialsImages[lightboxIndex]}
                alt={`Depoimento de cliente ampliado número ${lightboxIndex + 1}`}
                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-premium border border-white/10 shadow-2xl animate-fade-in pointer-events-none"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 z-10 p-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-label="Próximo depoimento"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Lightbox Footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-4 border-t border-white/10 text-white">
            <span className="text-xs text-white/50 text-center sm:text-left">
              * Arraste para o lado ou utilize as setas do teclado para navegar.
            </span>
            <Button
              variant="accent"
              size="sm"
              onClick={() => {
                setLightboxIndex(null);
                openWhatsApp('GENERAL');
              }}
              className="w-full sm:w-auto text-sm font-bold flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4" />
              Simular meu crédito igual a este cliente
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
