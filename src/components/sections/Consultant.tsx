import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { BUSINESS } from '../../constants/business';
import { openWhatsApp } from '../../lib/whatsapp';

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

          {/* Placeholder Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-surface-blue border border-neutral-border rounded-premium-lg shadow-premium overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
              <div className="absolute inset-4 border border-dashed border-primary-700/30 rounded-premium-sm"></div>

              <div className="w-24 h-24 rounded-full bg-primary-100/80 border border-primary-100 flex items-center justify-center text-primary-800 mb-6 relative group-hover:scale-105 transition-transform duration-300">
                <FontAwesomeIcon icon={faUserCheck} className="w-10 h-10" />
                <div className="absolute -bottom-1 -right-1 p-1 bg-[#25D366] rounded-full text-white border-2 border-white">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <span className="text-xs font-bold text-accent-700 tracking-widest uppercase">
                  Foto Oficial Faltante
                </span>
                <p className="text-sm font-bold text-primary-950 px-4">
                  [Espaço reservado para a foto real da Camila Rodrigues]
                </p>
                <p className="text-xs text-neutral-secondary px-6">
                  Insira o caminho da imagem real em src/components/sections/Consultant.tsx quando disponível.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-900/5 to-transparent"></div>
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
