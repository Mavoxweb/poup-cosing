import React from 'react';
import Container from '../ui/Container';
import { BUSINESS } from '../../constants/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary-950 text-white border-t border-primary-900 pt-16 pb-28 md:pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-primary-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <svg 
                width="36" 
                height="36" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M25 50C25 38.9543 33.9543 30 45 30C52.0163 30 58.188 33.6053 61.8541 39.0909C63.146 36.3636 65.5768 30 75 30C86.0457 30 95 38.9543 95 50C95 61.0457 86.0457 70 75 70C67.9837 70 61.812 66.3947 58.1459 60.9091C56.854 63.6364 54.4232 70 45 70C33.9543 70 25 61.0457 25 50Z" 
                  stroke="currentColor" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M75 50C75 44.4772 70.5228 40 65 40C59.4772 40 55 44.4772 55 50C55 55.5228 59.4772 60 65 60C70.5228 60 75 55.5228 75 50Z" 
                  fill="#FF850A" 
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight leading-none">
                  Poupe<span className="text-accent-500">Consig</span>
                </span>
                <span className="text-[8px] font-semibold tracking-wider text-primary-700 uppercase leading-none mt-1">
                  Promotora
                </span>
              </div>
            </div>
            
            <p className="text-sm text-primary-100 max-w-sm font-medium">
              "{BUSINESS.slogan}"
            </p>
            <p className="text-xs text-primary-100/70">
              Consultoria realizada por {BUSINESS.consultant}<br />
              Atuação em {BUSINESS.region} e regiões parceiras.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-primary-100/80">
              <li>
                <a 
                  href="#solucoes" 
                  onClick={(e) => handleLinkClick(e, 'solucoes')} 
                  className="hover:text-white transition-colors duration-200"
                >
                  Soluções de Crédito
                </a>
              </li>
              <li>
                <a 
                  href="#como-funciona" 
                  onClick={(e) => handleLinkClick(e, 'como-funciona')} 
                  className="hover:text-white transition-colors duration-200"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a 
                  href="#atendimento" 
                  onClick={(e) => handleLinkClick(e, 'atendimento')} 
                  className="hover:text-white transition-colors duration-200"
                >
                  Atendimento Humano
                </a>
              </li>
              <li>
                <a 
                  href="#duvidas" 
                  onClick={(e) => handleLinkClick(e, 'duvidas')} 
                  className="hover:text-white transition-colors duration-200"
                >
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest">
              Privacidade
            </h4>
            <p className="text-xs text-primary-100/70 leading-relaxed">
              Atuamos em estrita conformidade com a LGPD (Lei Geral de Proteção de Dados) para garantir a segurança e a privacidade das suas informações.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-primary-100/80 font-semibold">
              <a href="/politica-de-privacidade" className="hover:text-white hover:underline">
                Política de Privacidade
              </a>
              <span className="text-primary-900">•</span>
              <a href="/politica-de-cookies" className="hover:text-white hover:underline">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="pt-8 text-xs text-primary-100/60 leading-relaxed space-y-4">
          <p>
            <strong>Nota de transparência:</strong> A Poupe Consig Promotora, sob responsabilidade de {BUSINESS.consultant}, atua como correspondente bancário. Não somos uma instituição financeira e não realizamos operações de crédito diretamente. Como correspondentes bancários, seguimos estritamente as diretrizes da Resolução nº 4.935 do Banco Central do Brasil.
          </p>
          <p>
            Trabalhamos em parceria com instituições financeiras autorizadas, incluindo: Banco Inter, Banco Daycoval, Banco Safra, Caixa Econômica Federal e Facta Financeira. A contratação de crédito depende de fatores como a análise de margem consignável, convênios ativos, perfil cadastral e critérios específicos da instituição parceira escolhida para a operação.
          </p>
          <p>
            A taxa de juros, o Custo Efetivo Total (CET), o prazo de pagamento e o valor das parcelas variam de acordo com a modalidade solicitada e o perfil do cliente. Todas as condições comerciais serão apresentadas de forma transparente no momento da simulação com a nossa consultoria, antes de qualquer tomada de decisão.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-900/60 text-primary-100/40">
            <span>
              &copy; {currentYear} {BUSINESS.name}. Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com foco em clareza e acessibilidade.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
