import React from 'react';
import Container from '../ui/Container';

export const Institutions: React.FC = () => {
  return (
    <section className="py-16 bg-surface border-y border-neutral-border">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs md:text-sm font-bold tracking-widest text-accent-700 uppercase mb-3 block">
            INSTITUIÇÕES
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 tracking-tight leading-tight">
            Instituições com as quais trabalhamos
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-secondary leading-relaxed max-w-2xl mx-auto">
            A disponibilidade de produtos, condições e taxas pode variar conforme o perfil do cliente, convênios ativos e a análise de crédito realizada pela instituição financeira parceira responsável pela operação.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 pt-4 items-center justify-items-center">
          
          {/* Banco Inter */}
          <div 
            className="flex flex-col items-center justify-center h-20 w-full max-w-[180px] bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm hover:border-[#FF7A00]/40 group transition-all duration-300"
            role="img"
            aria-label="Logotipo do Banco Inter, instituição parceira da Poupe Consig"
          >
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-auto text-[#7e8590] group-hover:text-[#FF7A00] transition-colors duration-300"
            >
              <rect x="2" y="5" width="20" height="30" rx="4" fill="currentColor" opacity="0.15" />
              <path d="M12 12V28M8 16H16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              {/* Simplified Inter Text representation */}
              <text x="32" y="26" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="20" fill="currentColor">inter</text>
            </svg>
          </div>

          {/* Banco Daycoval */}
          <div 
            className="flex flex-col items-center justify-center h-20 w-full max-w-[180px] bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm hover:border-[#003B71]/40 group transition-all duration-300"
            role="img"
            aria-label="Logotipo do Banco Daycoval, instituição parceira da Poupe Consig"
          >
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-auto text-[#7e8590] group-hover:text-[#003B71] transition-colors duration-300"
            >
              {/* Daycoval stylized double circle logo */}
              <circle cx="16" cy="20" r="10" stroke="currentColor" strokeWidth="3.5" />
              <path d="M16 10C21.5 10 26 14.5 26 20C26 25.5 21.5 30 16 30" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <text x="36" y="26" fontFamily="sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.5" fill="currentColor">DAYCOVAL</text>
            </svg>
          </div>

          {/* Banco Safra */}
          <div 
            className="flex flex-col items-center justify-center h-20 w-full max-w-[180px] bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm hover:border-[#1E3050]/40 group transition-all duration-300"
            role="img"
            aria-label="Logotipo do Banco Safra, instituição parceira da Poupe Consig"
          >
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-auto text-[#7e8590] group-hover:text-[#1E3050] transition-colors duration-300"
            >
              {/* Safra Shield representing bank history */}
              <path d="M10 12H22V28H10V12Z" stroke="currentColor" strokeWidth="2.5" />
              <path d="M10 17H22M16 12V28" stroke="currentColor" strokeWidth="1.5" />
              <text x="32" y="26" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18" fill="currentColor">Safra</text>
            </svg>
          </div>

          {/* CAIXA */}
          <div 
            className="flex flex-col items-center justify-center h-20 w-full max-w-[180px] bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm hover:border-[#005CA5]/40 group transition-all duration-300"
            role="img"
            aria-label="Logotipo da Caixa Econômica Federal, instituição parceira da Poupe Consig"
          >
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-auto text-[#7e8590] group-hover:text-[#005CA5] transition-colors duration-300"
            >
              {/* Caixa lettermark with orange dot */}
              <text x="5" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="22" fontStyle="italic" fill="currentColor">CAIXA</text>
              <rect x="80" y="8" width="16" height="16" fill="currentColor" opacity="0.2" />
              <rect x="83" y="11" width="10" height="10" fill="#FF850A" className="group-hover:fill-[#FF850A] transition-colors duration-300" />
            </svg>
          </div>

          {/* Facta */}
          <div 
            className="flex flex-col items-center justify-center h-20 w-full max-w-[180px] bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm hover:border-[#B20E10]/40 group transition-all duration-300"
            role="img"
            aria-label="Logotipo da Facta Financeira, instituição parceira da Poupe Consig"
          >
            <svg 
              viewBox="0 0 120 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-auto text-[#7e8590] group-hover:text-[#B20E10] transition-colors duration-300"
            >
              {/* Facta stylized cursive wordmark */}
              <path d="M12 12C12 12 18 8 22 15C26 22 20 28 12 28C6 28 4 22 4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <text x="32" y="27" fontFamily="sans-serif" fontWeight="800" fontSize="22" fill="currentColor">Facta</text>
            </svg>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Institutions;
