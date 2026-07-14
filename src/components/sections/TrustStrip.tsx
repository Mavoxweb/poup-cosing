import React from 'react';
import { User, Eye, Sparkles, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <User className="w-5 h-5 text-primary-700 shrink-0" />,
      text: "Atendimento humano"
    },
    {
      icon: <Eye className="w-5 h-5 text-primary-700 shrink-0" />,
      text: "Informações claras"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary-700 shrink-0" />,
      text: "Possibilidades para diferentes perfis"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-primary-700 shrink-0" />,
      text: "Contato direto pelo WhatsApp"
    }
  ];

  return (
    <section className="bg-surface border-y border-neutral-border py-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3.5 px-4 justify-start sm:justify-center lg:justify-start"
            >
              <div className="p-2 bg-white rounded-lg border border-neutral-border shadow-sm">
                {item.icon}
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
