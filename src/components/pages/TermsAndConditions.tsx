import React, { useEffect } from 'react';
import Container from '../ui/Container';
import { BUSINESS } from '../../constants/business';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFileContract } from '@fortawesome/free-solid-svg-icons';

export const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Termos e Condições | ${BUSINESS.name}`;
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
            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
          </div>
          <span className="block text-xs font-extrabold tracking-widest text-accent-700 uppercase">
            Diretrizes de Uso
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-950 tracking-tight">
            Termos e Condições de Uso
          </h1>
          <p className="text-sm text-neutral-secondary">
            Última atualização: Julho de 2026.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-secondary leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e navegar pelo site da <strong>{BUSINESS.name}</strong>, você concorda em cumprir e aceitar os presentes Termos e Condições de Uso. Se você não concorda com qualquer parte destas diretrizes, orientamos que interrompa a navegação imediatamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">2. Escopo dos Serviços</h2>
            <p>
              A <strong>Poupconsig Promotora</strong> atua exclusivamente sob o modelo de <strong>correspondente bancário</strong>, em plena conformidade com a Resolução nº 4.935 do Banco Central do Brasil.
            </p>
            <p className="bg-primary-50/50 border-l-4 border-primary-800 p-4 rounded-r-premium-sm text-sm text-primary-950 font-medium">
              ⚠️ <strong>Declaração Importante:</strong> A Poupconsig não é uma instituição financeira. Nós prestamos serviços de intermediação e assessoria de crédito, conectando você às instituições financeiras parceiras e autorizadas a emitir o crédito.
            </p>
            <p>
              Toda simulação, análise ou atendimento prestado através deste site possui caráter <strong>informativo e de suporte</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">3. Gratuidade do Atendimento</h2>
            <p>
              A assessoria e o suporte prestados pela Poupconsig ao cliente final são <strong>100% gratuitos</strong>. Nós nunca cobramos qualquer tipo de taxa adiantada, depósito de segurança ou tarifa de serviço para a aprovação, liberação ou simulação do seu empréstimo consignado ou antecipação.
            </p>
            <p className="text-sm text-neutral-secondary font-semibold">
              🚨 Caso receba qualquer solicitação de pagamento ou cobrança de taxa de serviço em nome da Poupconsig, recuse imediatamente e entre em contato conosco.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">4. Condições e Análise de Crédito</h2>
            <p>
              As simulações de taxa de juros, prazo de pagamento, valores de parcelas e Custo Efetivo Total (CET) exibidas ou fornecidas pela consultoria são variáveis e sujeitas à análise cadastral, margem disponível e políticas internas de crédito de cada instituição financeira parceira.
            </p>
            <p>
              A Poupconsig não garante a aprovação de propostas de crédito, uma vez que a palavra final cabe integralmente à instituição financeira que concederá o empréstimo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">5. Responsabilidades do Usuário</h2>
            <p>
              O usuário se compromete a fornecer dados corretos, verídicos e atualizados nas simulações e conversas com a consultora. É expressamente vedada a inserção de informações falsas ou o uso de dados de terceiros sem a devida autorização/procuração legal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">6. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de alterar ou atualizar estes Termos e Condições de Uso sempre que necessário. As modificações passarão a valer imediatamente a partir de sua publicação neste site.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
