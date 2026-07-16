import React, { useEffect } from 'react';
import Container from '../ui/Container';
import { BUSINESS } from '../../constants/business';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCookieBite } from '@fortawesome/free-solid-svg-icons';

export const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Política de Cookies | ${BUSINESS.name}`;
  }, []);

  return (
    <div className="bg-neutral-bg min-h-screen py-16 md:py-24">
      <Container className="max-w-4xl">
        {/* Back Link */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-800 hover:text-primary-950 transition-colors mb-8 group focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2 rounded px-2 py-1"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para o início
        </a>

        {/* Legal Page Header */}
        <div className="space-y-4 border-b border-neutral-border pb-8 mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full text-primary-800">
            <FontAwesomeIcon icon={faCookieBite} className="w-8 h-8" />
          </div>
          <span className="block text-xs font-extrabold tracking-widest text-accent-700 uppercase">
            Uso de Tecnologias
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-950 tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-sm text-neutral-secondary">
            Última atualização: Julho de 2026.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-secondary leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto enviados e armazenados no seu computador ou dispositivo móvel através do seu navegador quando você visita um site. Eles contêm informações básicas sobre a sua navegação e preferências, auxiliando a tornar a experiência mais ágil e intuitiva.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">2. Por que Utilizamos Cookies?</h2>
            <p>
              Em nosso site da <strong>{BUSINESS.name}</strong>, utilizamos cookies para melhorar o desempenho da plataforma, facilitar o uso de formulários, garantir a segurança do tráfego e analisar de forma agregada (estatística) como os visitantes interagem com o nosso conteúdo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">3. Quais Tipos de Cookies Nós Utilizamos?</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-premium-sm border border-neutral-border space-y-2">
                <h3 className="font-bold text-primary-950">a) Cookies Estritamente Necessários (Essenciais)</h3>
                <p className="text-sm">
                  Esses cookies são cruciais para que o site funcione corretamente. Eles permitem que você navegue pelas páginas e use recursos básicos (como segurança da sessão, verificação de formulários e acessibilidade). Sem eles, partes fundamentais do site não funcionariam.
                </p>
              </div>

              <div className="p-4 bg-white rounded-premium-sm border border-neutral-border space-y-2">
                <h3 className="font-bold text-primary-950">b) Cookies de Desempenho e Estatísticas (Analíticos)</h3>
                <p className="text-sm">
                  Coletam informações estatísticas anônimas sobre o comportamento dos usuários na página (por exemplo, quais seções são mais acessadas e se ocorrem erros de carregamento). Esse monitoramento nos ajuda a ajustar a interface do site para proporcionar uma experiência de uso cada vez melhor.
                </p>
              </div>

              <div className="p-4 bg-white rounded-premium-sm border border-neutral-border space-y-2">
                <h3 className="font-bold text-primary-950">c) Cookies de Funcionalidade</h3>
                <p className="text-sm">
                  Utilizados para lembrar das escolhas que você faz no site (como preferências de idioma ou decisões em formulários rápidos) a fim de evitar que você precise preencher tudo novamente em visitas futuras próximas.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">4. Como Gerenciar ou Desativar os Cookies?</h2>
            <p>
              A maioria dos navegadores modernos já é configurada para aceitar cookies automaticamente. Contudo, você pode alterar essas configurações a qualquer momento para bloquear cookies, excluir cookies já existentes ou ser avisado quando um cookie for enviado ao seu dispositivo.
            </p>
            <p>
              Para gerenciar os cookies do seu navegador, consulte a área de ajuda do aplicativo que você utiliza:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm font-medium text-primary-900">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">Gerenciar cookies no Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-sites" target="_blank" rel="noopener noreferrer" className="hover:underline">Gerenciar cookies no Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">Gerenciar cookies no Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-243d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="hover:underline">Gerenciar cookies no Microsoft Edge</a></li>
            </ul>
            <p className="text-sm text-neutral-secondary italic">
              ⚠️ <strong>Nota:</strong> Caso decida desativar ou bloquear os cookies essenciais, tenha em mente que certas partes e funcionalidades da nossa landing page podem não responder de maneira ideal.
            </p>
          </section>

          <section className="space-y-4 font-medium text-primary-950 pt-6 border-t border-neutral-border">
            <p>
              Se tiver qualquer questionamento sobre esta Política de Cookies ou sobre o funcionamento do site, fique à vontade para falar conosco pelo nosso canal oficial de atendimento.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default CookiePolicy;
