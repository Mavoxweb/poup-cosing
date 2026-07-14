import React, { useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import SolutionCard from '../ui/SolutionCard';
import Button from '../ui/Button';
import { SOLUTIONS } from '../../constants/solutions';
import { openWhatsApp } from '../../lib/whatsapp';
import { cityLeadSchema } from '../../schemas/lead';
import type { CityFormInput } from '../../schemas/lead';

interface CreditSolutionsProps {
  cityModalTriggerRef: React.MutableRefObject<HTMLButtonElement | null>;
  isCityModalOpen: boolean;
  setIsCityModalOpen: (isOpen: boolean) => void;
}

export const CreditSolutions: React.FC<CreditSolutionsProps> = ({
  cityModalTriggerRef,
  isCityModalOpen,
  setIsCityModalOpen
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CityFormInput>({
    resolver: zodResolver(cityLeadSchema),
    defaultValues: {
      city: ""
    }
  });

  const handleCloseModal = useCallback(() => {
    setIsCityModalOpen(false);
    reset();
    // Return focus to the trigger element for screen readers
    setTimeout(() => {
      if (cityModalTriggerRef.current) {
        cityModalTriggerRef.current.focus();
      }
    }, 50);
  }, [setIsCityModalOpen, reset, cityModalTriggerRef]);

  // Handle opening/closing modal accessibility
  useEffect(() => {
    if (isCityModalOpen) {
      // Focus on the input once modal opens
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
        
        // Focus Trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isCityModalOpen, handleCloseModal]);

  const handleOpenModal = (triggerEl: HTMLButtonElement) => {
    cityModalTriggerRef.current = triggerEl;
    setIsCityModalOpen(true);
  };

  const onSubmit = (data: CityFormInput) => {
    openWhatsApp('CONTA_LUZ', { city: data.city });
    handleCloseModal();
  };

  const { ref: registeredInputRef, ...restRegister } = register("city");

  return (
    <section id="solucoes" className="py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="SOLUÇÕES DE CRÉDITO"
          title="Uma necessidade diferente pode pedir uma solução diferente."
          description="Conheça as modalidades atendidas pela Poupe Consig e fale com uma consultora para verificar as possibilidades aplicáveis ao seu perfil."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onAction={(sol) => {
                // Find active element to pass for focus restoration
                const activeEl = document.activeElement as HTMLButtonElement;
                if (sol.type === 'CONTA_LUZ') {
                  handleOpenModal(activeEl);
                } else {
                  openWhatsApp(sol.whatsAppContext);
                }
              }}
            />
          ))}
        </div>
      </Container>

      {/* Accessible City Input Modal for Electric Bill Solution */}
      {isCityModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-950/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          ref={modalRef}
        >
          <div className="relative w-full max-w-md bg-white border border-neutral-border rounded-premium shadow-premium-hover p-6 sm:p-8 animate-[slideUp_0.3s_ease-out]">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-neutral-secondary hover:text-primary-950 focus-visible:ring-2 focus-visible:ring-primary-700 rounded-premium-sm transition-all"
              aria-label="Fechar janela"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent-100 rounded-lg text-accent-700">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 id="modal-title" className="text-xl font-extrabold text-primary-950">
                Verificar disponibilidade
              </h3>
            </div>

            <p className="text-sm text-neutral-secondary leading-relaxed mb-6">
              A modalidade de crédito na conta de luz está sujeita a convênios locais com as concessionárias de energia. Por favor, nos diga em qual cidade você reside para prosseguir.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="city-input" 
                  className="block text-sm font-bold text-primary-950"
                >
                  Em qual cidade você mora?
                </label>
                <input
                  id="city-input"
                  type="text"
                  placeholder="Ex: São Gonçalo"
                  className={`w-full px-4 py-3 bg-surface border rounded-premium-sm text-primary-950 placeholder-neutral-secondary focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:border-transparent outline-none transition-all ${
                    errors.city ? 'border-red-500 focus-visible:ring-red-500' : 'border-neutral-border'
                  }`}
                  {...restRegister}
                  ref={(e) => {
                    registeredInputRef(e);
                    inputRef.current = e;
                  }}
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "city-error" : undefined}
                />
                {errors.city && (
                  <span id="city-error" className="text-xs font-bold text-red-600 block mt-1">
                    {errors.city.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  variant="secondary"
                  onClick={handleCloseModal}
                  type="button"
                  fullWidth
                  className="sm:w-1/3 order-2 sm:order-1"
                >
                  Cancelar
                </Button>
                <Button
                  variant="accent"
                  type="submit"
                  fullWidth
                  className="sm:w-2/3 order-1 sm:order-2"
                >
                  Confirmar e chamar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CreditSolutions;
