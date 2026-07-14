import React from 'react';
import { Shield, HelpCircle, Eye, UserCheck } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Benefits: React.FC = () => {
  const pillars: Benefit[] = [
    {
      icon: <Eye className="w-6 h-6 text-[#FF850A]" />,
      title: "Transparência em cada etapa",
      description: "Informações apresentadas de forma clara e detalhada para você entender os custos e prazos antes de tomar qualquer decisão."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#FF850A]" />,
      title: "Atendimento personalizado",
      description: "Cada simulação começa compreendendo o seu perfil de crédito e as suas necessidades específicas para identificar caminhos condizentes."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#FF850A]" />,
      title: "Compromisso com você",
      description: "Uma consultoria direta com a Camila Rodrigues, garantindo acompanhamento do início ao fim do processo de consulta."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FF850A]" />,
      title: "Segurança e confiança",
      description: "Orientação cuidadosa para você conhecer todas as condições e termos apresentados pela instituição credora."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="POR QUE POUPE CONSIG"
          title="Crédito envolve decisão. Informação clara faz diferença."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="flex gap-5 p-6 bg-surface border border-neutral-border rounded-premium shadow-premium hover:border-primary-700 transition-all duration-300 group"
            >
              <div className="p-3.5 bg-white rounded-premium-sm border border-neutral-border text-primary-850 h-fit shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                {pillar.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-extrabold text-primary-950">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
