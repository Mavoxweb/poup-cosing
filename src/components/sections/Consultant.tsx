import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { BUSINESS } from '../../constants/business';
import { openWhatsApp } from '../../lib/whatsapp';
import camilaPhoto from '../../assets/camila-teste-01.png';

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
                    <p className="text-[11px] text-neutral-secondary font-medium mt-0.5">Consultora · Poupe Consig</p>
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
                Oi, eu sou a Camila. Vamos entender o que faz sentido para você?
              </h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-neutral-secondary leading-relaxed">
              <p className="border-l-4 border-primary-700 pl-4 italic font-medium text-primary-950">
                "Na Poupe Consig, meu atendimento começa entendendo o seu perfil e o que você procura. A partir daí, verificamos as possibilidades disponíveis e esclarecemos as condições para você analisar com mais segurança."
              </p>
              <p>Sem transformar crédito em um monte de palavras difíceis. Você pergunta, eu explico.</p>
            </div>

            <div className="pt-2">
              <p className="text-lg font-extrabold text-primary-950 leading-none">{BUSINESS.consultant}</p>
              <p className="text-sm text-neutral-secondary font-semibold mt-1">Consultora | Poupe Consig</p>
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
