import React from 'react';
import Container from '../ui/Container';

interface BankLogo {
  name: string;
  label: string;
  hoverColor: string;
  svg: React.ReactNode;
}

export const Institutions: React.FC = () => {
  const banks: BankLogo[] = [
    {
      name: 'Banco Inter',
      label: 'Logotipo do Banco Inter, instituição parceira da Poupconsig',
      hoverColor: 'hover:border-[#FF7A00]/40',
      svg: (
        /* Banco Inter — wordmark laranja */
        <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          {/* "i" dot */}
          <circle cx="8" cy="6" r="4.5" className="fill-current" />
          {/* "i" stem */}
          <rect x="5.5" y="13" width="5" height="18" rx="2.5" className="fill-current" />
          {/* "nter" wordmark */}
          <text
            x="20" y="30"
            fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
            fontWeight="800"
            fontSize="22"
            className="fill-current"
            letterSpacing="-0.5"
          >
            nter
          </text>
        </svg>
      ),
    },
    {
      name: 'Banco Daycoval',
      label: 'Logotipo do Banco Daycoval, instituição parceira da Poupconsig',
      hoverColor: 'hover:border-[#003B71]/40',
      svg: (
        /* Banco Daycoval — símbolo + wordmark */
        <svg viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          {/* D estilizado */}
          <path
            d="M4 4H14C20.627 4 26 9.373 26 16V20C26 26.627 20.627 32 14 32H4V4Z"
            className="fill-current"
          />
          <path
            d="M9 10H14C17.314 10 20 12.686 20 16V20C20 23.314 17.314 26 14 26H9V10Z"
            fill="white"
          />
          <text
            x="32" y="26"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="700"
            fontSize="14"
            className="fill-current"
            letterSpacing="0.3"
          >
            DAYCOVAL
          </text>
        </svg>
      ),
    },
    {
      name: 'Banco Safra',
      label: 'Logotipo do Banco Safra, instituição parceira da Poupconsig',
      hoverColor: 'hover:border-[#1E3050]/40',
      svg: (
        /* Banco Safra — logotipo clássico azul-marinho */
        <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          {/* Escudo simplificado */}
          <path
            d="M8 4L22 4L22 20C22 26.627 15 32 15 32C15 32 8 26.627 8 20L8 4Z"
            className="fill-current"
          />
          <path d="M12 10H18M12 15H18M12 20H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <text
            x="28" y="28"
            fontFamily="'Georgia', 'Times New Roman', serif"
            fontWeight="700"
            fontSize="20"
            className="fill-current"
            letterSpacing="-0.3"
          >
            Safra
          </text>
        </svg>
      ),
    },
    {
      name: 'Caixa Econômica Federal',
      label: 'Logotipo da Caixa Econômica Federal, instituição parceira da Poupconsig',
      hoverColor: 'hover:border-[#005CA5]/40',
      svg: (
        /* CAIXA — bloco azul com laranja */
        <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          {/* Quadrado laranja marca registrada */}
          <rect x="0" y="2" width="16" height="16" rx="1" fill="#FF850A" />
          <rect x="0" y="20" width="16" height="14" rx="1" className="fill-current" />
          {/* Texto CAIXA em negrito */}
          <text
            x="22" y="26"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="900"
            fontSize="21"
            className="fill-current"
            letterSpacing="0.5"
          >
            CAIXA
          </text>
        </svg>
      ),
    },
    {
      name: 'Facta Financeira',
      label: 'Logotipo da Facta Financeira, instituição parceira da Poupconsig',
      hoverColor: 'hover:border-[#B20E10]/40',
      svg: (
        /* Facta — símbolo triangular + wordmark */
        <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
          {/* Triângulo ascendente */}
          <path d="M12 30L3 16L12 4L21 16L12 30Z" className="fill-current" opacity="0.9" />
          <path d="M12 24L7 16L12 8L17 16L12 24Z" fill="white" opacity="0.7" />
          <text
            x="28" y="27"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="800"
            fontSize="19"
            className="fill-current"
            letterSpacing="0.2"
          >
            Facta
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-surface border-y border-neutral-border">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs md:text-sm font-bold tracking-widest text-accent-700 uppercase mb-3 block">
            INSTITUIÇÕES PARCEIRAS
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 tracking-tight leading-tight">
            Instituições com as quais trabalhamos
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-secondary leading-relaxed max-w-2xl mx-auto">
            A disponibilidade de produtos, condições e taxas pode variar conforme o perfil do cliente,
            convênios ativos e a análise de crédito realizada pela instituição financeira responsável pela operação.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-4 items-center justify-items-center">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className={`
                flex items-center justify-center h-20 w-full max-w-[180px]
                bg-white border border-neutral-border rounded-premium-sm p-5 shadow-sm
                ${bank.hoverColor}
                text-[#9ca3af] hover:text-[#374151]
                transition-all duration-300 group cursor-default
              `}
              role="img"
              aria-label={bank.label}
            >
              <div className="transition-all duration-300 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                {bank.svg}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Institutions;
