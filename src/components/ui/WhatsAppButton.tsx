import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../lib/whatsapp';
import type { CreditContext } from '../../constants/solutions';

interface WhatsAppButtonProps {
  context?: CreditContext;
  text?: string;
  className?: string;
  variant?: 'primary' | 'accent' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  context = 'GENERAL',
  text,
  className = "",
  variant = 'whatsapp',
  size = 'md'
}) => {
  const defaultText = text || "Falar com Camila no WhatsApp";
  
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none rounded-premium-sm text-center gap-2 shrink-0";
  
  const variants = {
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-[0.98] shadow-premium hover:shadow-premium-hover focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
    primary: "bg-primary-900 text-white hover:bg-primary-950 active:scale-[0.98] shadow-premium hover:shadow-premium-hover focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2",
    accent: "bg-accent-600 text-white hover:bg-accent-700 active:scale-[0.98] shadow-premium hover:shadow-premium-hover focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={() => openWhatsApp(context)}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      type="button"
    >
      <MessageSquare className="w-5 h-5 shrink-0 fill-current" />
      <span>{defaultText}</span>
    </button>
  );
};

export const GlobalWhatsAppSticky: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight <= 50) {
        setVisible(false);
        return;
      }
      
      const scrollPercent = scrollPosition / docHeight;
      // Show after scrolling 20% of the page
      setVisible(scrollPercent >= 0.2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40 animate-[fadeIn_0.3s_ease-out]">
        <button
          onClick={() => openWhatsApp('GENERAL')}
          className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-premium hover:shadow-premium-hover hover:bg-[#20ba59] active:scale-95 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Chamar Camila no WhatsApp"
          type="button"
        >
          <MessageSquare className="w-5 h-5 shrink-0 fill-current animate-pulse" />
          <span>Falar com Camila</span>
        </button>
      </div>

      {/* Mobile Bottom Sticky Bar - respects safe areas and stays clear */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-border p-4 z-40 shadow-[0_-4px_24px_-4px_rgba(3,27,68,0.12)] pb-safe animate-[slideUp_0.3s_ease-out]">
        <button
          onClick={() => openWhatsApp('GENERAL')}
          className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#25D366] text-white font-bold rounded-premium-sm shadow-premium active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          type="button"
        >
          <MessageSquare className="w-5 h-5 shrink-0 fill-current" />
          <span>Falar com Camila no WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
