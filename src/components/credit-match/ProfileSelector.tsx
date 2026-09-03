import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBuilding, faBriefcase, faCoins, faBolt, faCircleQuestion, faUsers, faCar } from '@fortawesome/free-solid-svg-icons';
import { PROFILE_OPTIONS } from '../../constants/solutions';
import type { ProfileOption } from '../../constants/solutions';

const getIcon = (type: string) => {
  switch (type) {
    case 'INSS': return faUserCheck;
    case 'SERVIDOR': return faBuilding;
    case 'CLT': return faBriefcase;
    case 'FGTS': return faCoins;
    case 'CONTA_LUZ': return faBolt;
    case 'BOLSA_FAMILIA': return faUsers;
    case 'REFINANCIAMENTO_VEICULO': return faCar;
    default: return faCircleQuestion;
  }
};

interface ProfileSelectorProps {
  selectedType: string | null;
  onSelect: (option: ProfileOption) => void;
}

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({ selectedType, onSelect }) => {
  return (
    <div className="space-y-3" role="radiogroup" aria-label="Selecione o seu perfil profissional">
      {PROFILE_OPTIONS.map((option) => {
        const isSelected = selectedType === option.type;
        return (
          <button
            key={option.type}
            onClick={() => onSelect(option)}
            role="radio"
            aria-checked={isSelected}
            className={`flex items-center gap-4 w-full p-4 text-left border rounded-premium-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-1 focus-visible:outline-none ${
              isSelected
                ? 'bg-primary-50 border-primary-700 text-primary-950 font-bold shadow-sm'
                : 'bg-white border-neutral-border text-neutral-text hover:border-primary-700 hover:bg-surface-blue'
            }`}
            type="button"
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isSelected ? 'bg-primary-900 text-white' : 'bg-surface-blue text-primary-800'
            }`}>
              <FontAwesomeIcon icon={getIcon(option.type)} className="w-5 h-5" />
            </div>
            <span className="text-sm md:text-base font-semibold leading-tight">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProfileSelector;
