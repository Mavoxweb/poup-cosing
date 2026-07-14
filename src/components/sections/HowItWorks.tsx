import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Step {
  number: string;
  title: string;
  description: string;
}

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Escolha o perfil",
      description: "Use o site para identificar a modalidade que deseja conhecer."
    },
    {
      number: "02",
      title: "Fale com a Camila",
      description: "Seu atendimento continua pelo WhatsApp, com contexto sobre o que você procura."
    },
    {
      number: "03",
      title: "Conheça as condições",
      description: "As possibilidades aplicáveis ao atendimento são apresentadas para sua análise."
    },
    {
      number: "04",
      title: "Decida com calma",
      description: "Tire suas dúvidas, entenda as informações da proposta e avalie as condições."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-surface border-y border-neutral-border">
      <Container>
        <SectionHeading
          eyebrow="SIMPLES E TRANSPARENTE"
          title="Você conta o que procura. A gente ajuda a entender as possibilidades."
        />

        <div className="relative mt-8 md:mt-16">
          {/* Horizontal Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-neutral-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-6 bg-white border border-neutral-border rounded-premium shadow-premium group hover:border-primary-700 transition-all duration-300"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-surface-blue border border-primary-50 text-primary-900 flex items-center justify-center text-xl font-extrabold mb-6 group-hover:bg-primary-900 group-hover:text-white group-hover:border-primary-900 transition-all duration-300">
                  {step.number}
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-primary-950 mb-3 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-sm md:text-base text-neutral-secondary leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
