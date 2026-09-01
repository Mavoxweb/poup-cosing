import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { openWhatsApp } from '../../lib/whatsapp';
import camilaPhoto from '../../assets/camila-enviada.jpeg';

export const Consultant: React.FC = () => {
  return (
    <section id="atendimento" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative accent curve */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary-900">
          <path d="M10 50 C20 20, 80 20, 90 50 C80 80, 20 80, 10 50 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[400px] group">

              {/* Decorative ring behind photo */}
              <div className="absolute -inset-3 rounded-premium-lg bg-gradient-to-br from-primary-700/20 via-transparent to-accent-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary-100 rounded-premium-lg -z-10" />

              {/* Photo */}
              <div className="relative w-full aspect-[3/4] rounded-premium-lg overflow-hidden shadow-premium-hover border border-neutral-border/40">
                <img
                  src={camilaPhoto}
                  alt="Camila Rodrigues — Consultora da Poupe Consig Promotora em São Gonçalo, RJ"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  draggable={false}
                />
                {/* Subtle gradient at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-950/30 to-transparent pointer-events-none" />

                {/* WhatsApp badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-premium-sm px-4 py-3 shadow-premium border border-neutral-border/50">
                  <div className="p-1.5 bg-[#25D366] rounded-full shrink-0">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-white w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-primary-950 leading-none truncate">Camila Rodrigues</p>
                    <p className="text-[11px] text-neutral-secondary font-medium mt-0.5">Consultora · Poupconsig</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#25D366]">Online</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-xs md:text-sm font-extrabold tracking-widest text-accent-700 uppercase">
                SEU ATENDIMENTO TEM NOME
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-950 leading-tight">
                Olá, sou Camila Rodrigues.
              </h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-neutral-secondary leading-relaxed">
              <p>
                Atuo há mais de <strong>15 anos</strong> no mercado de empréstimo consignado, oferecendo um atendimento pautado pela transparência, ética e compromisso com cada cliente. Ao longo da minha trajetória, ajudei centenas de pessoas a encontrar a solução de crédito mais adequada às suas necessidades, sempre com atenção, respeito e orientação personalizada.
              </p>

              {/* Febraban Certification Card */}
              <div className="p-5 bg-surface-blue border border-primary-100 rounded-premium-sm flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-2.5 bg-white border border-primary-200 rounded-premium-sm text-primary-700 shrink-0">
                  <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-primary-950 uppercase tracking-wider">
                    Certificação Oficial FEBRABAN
                  </h4>
                  <p className="text-sm font-bold text-primary-900">
                    FBB110 · Correspondente Consignado + LGPD
                  </p>
                  <p className="text-xs text-neutral-secondary leading-relaxed mt-1">
                    Garante conhecimentos técnicos em crédito consignado, matemática financeira, ética profissional e nas diretrizes da Lei Geral de Proteção de Dados (LGPD), assegurando um atendimento seguro e em conformidade com a Resolução CMN nº 4.935.
                  </p>
                </div>
              </div>

              <p>
                Tenho como compromisso oferecer um atendimento humanizado, esclarecendo todas as dúvidas e acompanhando cada etapa do processo para que você tenha tranquilidade na hora de contratar seu crédito.
              </p>

              <p className="font-semibold text-primary-950">
                Será um prazer atender você e ajudar a encontrar a melhor solução para a sua necessidade.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="accent" size="lg" onClick={() => openWhatsApp('GENERAL')} className="text-base">
                <FontAwesomeIcon icon={faCommentDots} className="mr-2" />
                Chamar a Camila no WhatsApp
              </Button>
              <span className="text-xs text-neutral-secondary font-medium sm:max-w-[200px] text-center sm:text-left leading-snug">
                * Você fala diretamente pelo WhatsApp de forma gratuita.
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Consultant;
