import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faLayerGroup, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Container from '../ui/Container';

export const TrustStrip: React.FC = () => {
  const items = [
    { icon: faUser, text: 'Atendimento humano' },
    { icon: faEye, text: 'Informações claras' },
    { icon: faLayerGroup, text: 'Possibilidades para diferentes perfis' },
    { icon: faCommentDots, text: 'Contato direto pelo WhatsApp' },
  ];

  return (
    <section className="bg-surface border-y border-neutral-border py-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 px-4 justify-start sm:justify-center lg:justify-start">
              <div className="p-2 bg-white rounded-lg border border-neutral-border shadow-sm">
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-primary-700" />
              </div>
              <span className="text-sm md:text-base font-bold text-primary-950 tracking-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
