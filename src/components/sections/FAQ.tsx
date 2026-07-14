import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { FAQ_ITEMS } from '../../constants/faq';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-20 bg-surface border-y border-neutral-border">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="DÚVIDAS FREQUENTES"
          title="Esclareça suas dúvidas sobre crédito"
          description="Acreditamos que informação clara é a base de uma decisão segura. Confira as respostas para as perguntas mais comuns."
        />

        <div className="space-y-4 mt-8">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white border border-neutral-border rounded-premium-sm shadow-sm overflow-hidden transition-all duration-300 hover:border-primary-700/50"
              >
                {/* Accordion Header */}
                <h3 className="m-0">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="flex justify-between items-center w-full p-5 text-left font-extrabold text-primary-950 text-base md:text-lg hover:text-primary-900 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-700 outline-none"
                    type="button"
                  >
                    <span>{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </h3>

                {/* Accordion Panel */}
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-neutral-border/50' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-sm md:text-base text-neutral-secondary leading-relaxed bg-surface/30">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
