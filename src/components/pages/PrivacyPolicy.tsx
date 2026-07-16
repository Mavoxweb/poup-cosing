import React, { useEffect } from 'react';
import Container from '../ui/Container';
import { BUSINESS } from '../../constants/business';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Política de Privacidade | ${BUSINESS.name}`;
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
            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8" />
          </div>
          <span className="block text-xs font-extrabold tracking-widest text-accent-700 uppercase">
            Transparência & Conformidade
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-950 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-neutral-secondary">
            Última atualização: Julho de 2026.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-secondary leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">1. Introdução</h2>
            <p>
              A <strong>{BUSINESS.name}</strong>, sob a responsabilidade de <strong>{BUSINESS.consultant}</strong>, valoriza a sua privacidade e se compromete a proteger os seus dados pessoais. Esta Política de Privacidade explica como tratamos as informações fornecidas por você ao acessar nosso site e ao interagir com nossos serviços de consultoria de crédito consignado.
            </p>
            <p>
              Atuamos em total conformidade com a <strong>LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/18)</strong>, assegurando que o tratamento de dados seja pautado pela boa-fé, transparência e segurança.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">2. Quais Dados Nós Coletamos?</h2>
            <p>
              Coletamos apenas os dados estritamente necessários para viabilizar as simulações e a eventual contratação das soluções de crédito do seu interesse. Isso pode incluir:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Informações de Contato:</strong> Nome, número de telefone/WhatsApp e endereço de e-mail (quando fornecido).
              </li>
              <li>
                <strong>Informações de Perfil Profissional:</strong> Tipo de vínculo (Aposentado ou Pensionista INSS, Servidor Público, Trabalhador CLT/Empresa Privada).
              </li>
              <li>
                <strong>Localização:</strong> Cidade e estado (necessários, por exemplo, para verificar a viabilidade do crédito com pagamento na conta de luz).
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">3. Como e Para Que Utilizamos Seus Dados?</h2>
            <p>
              Os seus dados são utilizados unicamente para as seguintes finalidades:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Realizar simulações de taxas e prazos adequadas ao seu perfil de crédito.</li>
              <li>Entrar em contato direto com você via WhatsApp para prestar atendimento humano, esclarecer dúvidas e apresentar propostas.</li>
              <li>Encaminhar a proposta de crédito para as instituições financeiras parceiras (como Banco Inter, Daycoval, Safra, Caixa ou Facta) sob sua expressa anuência e solicitação.</li>
              <li>Cumprir obrigações legais e regulatórias do Banco Central do Brasil pertinentes à atuação de correspondentes bancários.</li>
            </ol>
            <p className="bg-primary-50/50 border-l-4 border-primary-800 p-4 rounded-r-premium-sm text-sm text-primary-950 font-medium">
              💡 <strong>Importante:</strong> Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins publicitários ou campanhas de marketing de terceiros.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">4. Compartilhamento de Dados</h2>
            <p>
              Como correspondente bancário da <strong>Poupconsig Promotora</strong>, para que possamos viabilizar a sua contratação de crédito, as informações fornecidas por você poderão ser compartilhadas com as instituições financeiras parceiras com as quais operamos. Esse compartilhamento ocorre estritamente no âmbito da análise de margem consignável e elegibilidade da operação que você mesmo solicitou.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">5. Seus Direitos como Titular</h2>
            <p>
              Sob as diretrizes da LGPD, você possui plenos direitos em relação aos seus dados pessoais, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados pessoais tratados por nós.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a eliminação dos dados tratados com o seu consentimento (exceto quando necessário para conformidade legal ou regulatória).</li>
              <li>Revogar o seu consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-primary-950">6. Segurança da Informação</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração acidental. O tráfego de dados neste site é protegido por criptografia de ponta a ponta (protocolo HTTPS/SSL).
            </p>
          </section>

          <section className="space-y-4 font-medium text-primary-950 pt-6 border-t border-neutral-border">
            <p>
              Dúvidas ou solicitações sobre seus dados? Entre em contato diretamente com a nossa encarregada de proteção de dados (DPO):
            </p>
            <p className="mt-2 text-sm bg-neutral-card p-4 rounded-premium-sm border border-neutral-border">
              <strong>Contato:</strong> {BUSINESS.consultant}<br />
              <strong>Empresa:</strong> {BUSINESS.name}<br />
              <strong>Atendimento:</strong> {BUSINESS.region}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
