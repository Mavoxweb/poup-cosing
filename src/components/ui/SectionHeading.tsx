import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ""
}) => {
  return (
    <div className={`w-full max-w-3xl mb-10 md:mb-14 ${align === 'left' ? 'text-left' : 'text-center mx-auto'} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-accent-700 uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-950 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg text-neutral-secondary leading-relaxed max-w-2xl ${align === 'left' ? '' : 'mx-auto'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
