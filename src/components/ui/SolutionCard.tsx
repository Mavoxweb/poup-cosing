import React from 'react';
import type { Solution } from '../../constants/solutions';
import Button from './Button';

interface SolutionCardProps {
  solution: Solution;
  onAction: (solution: Solution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onAction }) => {
  return (
    <article className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-neutral-border rounded-premium shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:border-primary-700">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-primary-950 group-hover:text-primary-900 transition-colors duration-300">
            {solution.title}
          </h3>
          {solution.badge && (
            <span className="inline-block px-3 py-1 text-xs font-bold text-accent-700 bg-accent-100 rounded-full border border-accent-100">
              {solution.badge}
            </span>
          )}
        </div>
        
        <p className="text-base font-bold text-primary-800 mb-3 leading-snug">
          {solution.headline}
        </p>
        
        <p className="text-sm md:text-base text-neutral-secondary leading-relaxed mb-6">
          {solution.description}
        </p>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {solution.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs font-semibold text-primary-900 bg-surface-blue px-3 py-1.5 rounded-premium-sm border border-primary-50"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="secondary" 
          fullWidth 
          onClick={() => onAction(solution)}
          className="group-hover:bg-primary-900 group-hover:text-white group-hover:border-primary-900 transition-all duration-300 text-sm"
        >
          {solution.ctaText}
        </Button>
      </div>
    </article>
  );
};
export default SolutionCard;
