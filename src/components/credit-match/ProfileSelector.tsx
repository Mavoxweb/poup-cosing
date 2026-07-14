import React from 'react';
import { 
  UserCheck, 
  Building2, 
  Briefcase, 
  Coins, 
  Zap, 
  HelpCircle 
} from 'lucide-react';
import { PROFILE_OPTIONS } from '../../constants/solutions';
import type { ProfileOption } from '../../constants/solutions';

// Helper to match icons to profiles
const getIcon = (type: string) => {
  switch (type) {
    case 'INSS':
      return <UserCheck className="w-5 h-5 shrink-0" />;
    case 'SERVIDOR':
      return <Building2 className="w-5 h-5 shrink-0" />;
    case 'CLT':
      return <Briefcase className="w-5 h-5 shrink-0" />;
    case 'FGTS':
      return <Coins className="w-5 h-5 shrink-0" />;
    case 'CONTA_LUZ':
      return <Zap className="w-5 h-5 shrink-0" />;
    default:
      return <HelpCircle className="w-5 h-5 shrink-0" />;
  }
};

interface ProfileSelectorProps {
  selectedType: string | null;
  onSelect: (option: ProfileOption) => void;
}

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  selectedType,
  onSelect
}) => {
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
                ? "bg-primary-50 border-primary-700 text-primary-950 font-bold shadow-sm"
                : "bg-white border-neutral-border text-neutral-text hover:border-primary-700 hover:bg-surface-blue"
            }`}
            type="button"
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isSelected ? 'bg-primary-900 text-white' : 'bg-surface-blue text-primary-800'
            }`}>
              {getIcon(option.type)}
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
