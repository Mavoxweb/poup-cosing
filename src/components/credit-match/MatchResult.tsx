import React from 'react';
import type { ProfileOption } from '../../constants/solutions';
import Button from '../ui/Button';
import { openWhatsApp } from '../../lib/whatsapp';

interface MatchResultProps {
  option: ProfileOption;
  onReset: () => void;
  onOpenCityModal: () => void;
}

export const MatchResult: React.FC<MatchResultProps> = ({ option, onReset, onOpenCityModal }) => {
  const isContaLuz = option.type === 'CONTA_LUZ';

  const handleAction = () => {
    if (isContaLuz) {
      onOpenCityModal();
    } else {
      openWhatsApp(option.type === 'NAO_SEI' ? 'GENERAL' : option.type);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between animate-[fadeIn_0.3s_ease-out]">
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-accent-700 tracking-wider uppercase">
            Uma possibilidade para conhecer
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-primary-950 mt-1">
            {option.solutionName}
          </h3>
        </div>

        <p className="text-sm md:text-base text-neutral-secondary leading-relaxed bg-surface-blue p-4 rounded-premium-sm border border-primary-50">
          {option.description}
        </p>

        <div className="border-t border-neutral-border pt-4">
          <p className="text-xs text-neutral-secondary">
            * Toda contratação de crédito está sujeita à análise de cadastro, margem consignável e demais políticas vigentes das instituições financeiras parceiras no momento da solicitação.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <Button 
          variant="accent" 
          fullWidth 
          onClick={handleAction}
          className="text-base py-3.5"
        >
          {isContaLuz ? "Verificar disponibilidade na minha cidade" : "Quero falar sobre esta opção"}
        </Button>

        <button
          onClick={onReset}
          className="w-full text-center text-sm font-bold text-primary-800 hover:text-primary-950 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-primary-700 rounded p-1 transition-all duration-300"
          type="button"
        >
          Escolher outro perfil
        </button>
      </div>
    </div>
  );
};

export default MatchResult;
