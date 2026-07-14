import React, { useState } from 'react';
import ProfileSelector from './ProfileSelector';
import MatchResult from './MatchResult';
import type { ProfileOption } from '../../constants/solutions';
import Button from '../ui/Button';

interface CreditMatchProps {
  onOpenCityModal: () => void;
}

export const CreditMatch: React.FC<CreditMatchProps> = ({ onOpenCityModal }) => {
  const [step, setStep] = useState<'select' | 'result'>('select');
  const [selectedOption, setSelectedOption] = useState<ProfileOption | null>(null);

  const handleSelect = (option: ProfileOption) => {
    setSelectedOption(option);
  };

  const handleProceed = () => {
    if (selectedOption) {
      setStep('result');
    }
  };

  const handleReset = () => {
    setStep('select');
    setSelectedOption(null);
  };

  return (
    <div className="w-full bg-white border border-neutral-border rounded-premium-lg shadow-premium p-6 sm:p-8 flex flex-col justify-between min-h-[520px]">
      {step === 'select' ? (
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-primary-950">
                Como podemos ajudar você hoje?
              </h3>
              <p className="text-sm md:text-base text-neutral-secondary mt-1">
                Selecione a opção que mais combina com o seu momento.
              </p>
            </div>
            
            <div className="pt-2">
              <ProfileSelector 
                selectedType={selectedOption?.type || null} 
                onSelect={handleSelect} 
              />
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-neutral-border">
            <Button
              variant="primary"
              fullWidth
              disabled={!selectedOption}
              onClick={handleProceed}
              className="text-base py-3.5"
            >
              Ver possibilidades
            </Button>
          </div>
        </div>
      ) : (
        selectedOption && (
          <MatchResult 
            option={selectedOption} 
            onReset={handleReset} 
            onOpenCityModal={onOpenCityModal}
          />
        )
      )}
    </div>
  );
};

export default CreditMatch;
