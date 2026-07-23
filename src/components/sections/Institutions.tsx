import React from 'react';
import Container from '../ui/Container';

// Import official bank logos
import logoInter from '../../assets/banco/Logo_do_banco_Inter_(2023).svg';
import logoItau from '../../assets/banco/Itaú_Unibanco_logo_2023.svg.webp';
import logoBradesco from '../../assets/banco/Banco_Bradesco_logo_(horizontal).png';
import logoC6 from '../../assets/banco/c6-bank-logo-png_seeklogo-463244.png';
import logoBmg from '../../assets/banco/Logo_do_Banco_Bmg.svg.webp';
import logoPan from '../../assets/banco/Logotipo_do_Banco_Pan.svg';
import logoBanrisul from '../../assets/banco/Banrisul_logotipo_2022.svg.webp';

interface BankLogo {
  name: string;
  label: string;
  logo: string;
  hoverColor: string;
}

export const Institutions: React.FC = () => {
  const banks: BankLogo[] = [
    {
      name: 'Banco Inter',
      label: 'Logotipo do Banco Inter, instituição parceira da Poupconsig',
      logo: logoInter,
      hoverColor: 'hover:border-[#FF7A00]/40',
    },
    {
      name: 'Itaú',
      label: 'Logotipo do Banco Itaú, instituição parceira da Poupconsig',
      logo: logoItau,
      hoverColor: 'hover:border-[#EC7000]/40',
    },
    {
      name: 'Banco Bradesco',
      label: 'Logotipo do Banco Bradesco, instituição parceira da Poupconsig',
      logo: logoBradesco,
      hoverColor: 'hover:border-[#CC092F]/40',
    },
    {
      name: 'C6 Bank',
      label: 'Logotipo do C6 Bank, instituição parceira da Poupconsig',
      logo: logoC6,
      hoverColor: 'hover:border-black/40',
    },
    {
      name: 'Banco Bmg',
      label: 'Logotipo do Banco Bmg, instituição parceira da Poupconsig',
      logo: logoBmg,
      hoverColor: 'hover:border-[#FF5000]/40',
    },
    {
      name: 'Banco Pan',
      label: 'Logotipo do Banco Pan, instituição parceira da Poupconsig',
      logo: logoPan,
      hoverColor: 'hover:border-[#00A9E0]/40',
    },
    {
      name: 'Banrisul',
      label: 'Logotipo do Banrisul, instituição parceira da Poupconsig',
      logo: logoBanrisul,
      hoverColor: 'hover:border-[#005CA9]/40',
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 pt-4 items-center justify-items-center">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className={`
                flex items-center justify-center h-20 w-full max-w-[180px]
                bg-white border border-neutral-border rounded-premium-sm p-4 shadow-sm
                ${bank.hoverColor}
                transition-all duration-300 group cursor-default
              `}
              role="img"
              aria-label={bank.label}
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="max-h-8 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-65 group-hover:opacity-100 transition-all duration-300"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Institutions;
