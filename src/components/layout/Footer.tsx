import React from 'react';
import Container from '../ui/Container';
import { BUSINESS } from '../../constants/business';
import logoPoupConsig from '../../assets/logo-poup-consig.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (window.location.hash.startsWith('#/')) {
      window.location.hash = `#${id}`;
      setTimeout(() => {
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
      }, 50);
      return;
    }

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
      <Container className="animate-[fadeIn_0.5s_ease-out]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-primary-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.hash.startsWith('#/')) {
                    window.location.hash = '';
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-block group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-100 rounded"
                aria-label="Poupconsig Promotora - Home"
              >
                <img
                  src={logoPoupConsig}
                  alt="Poupconsig Promotora"
                  className="h-9 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                  draggable={false}
                />
              </a>
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
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-primary-100/80 font-semibold">
              <a href="#/politica-de-privacidade" className="hover:text-white hover:underline transition-colors">
                Política de Privacidade
              </a>
              <span className="text-primary-900">•</span>
              <a href="#/politica-de-cookies" className="hover:text-white hover:underline transition-colors">
                Cookies
              </a>
              <span className="text-primary-900">•</span>
              <a href="#/termos-e-condicoes" className="hover:text-white hover:underline transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="pt-8 text-xs text-primary-100/60 leading-relaxed space-y-4">
          <p>
            <strong>Nota de transparência:</strong> A Poupconsig Promotora, sob responsabilidade de {BUSINESS.consultant}, atua como correspondente bancário. Não somos uma instituição financeira e não realizamos operações de crédito diretamente. Como correspondentes bancários, seguimos estritamente as diretrizes da Resolução nº 4.935 do Banco Central do Brasil.
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
              Orgulhosamente criado por{' '}
              <a
                href="https://mintral.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white font-semibold underline decoration-accent-500/40 hover:decoration-accent-500 transition-all duration-200"
              >
                mintral
              </a>.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
