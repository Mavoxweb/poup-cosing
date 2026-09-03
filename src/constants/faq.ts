export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-consignado",
    question: "O que é crédito consignado?",
    answer: "O crédito consignado é uma modalidade de empréstimo onde as parcelas são descontadas diretamente da folha de pagamento ou do benefício previdenciário do contratante. Por oferecer menor risco de inadimplência para as instituições financeiras, costuma apresentar taxas de juros mais acessíveis e prazos de pagamento estruturados."
  },
  {
    id: "faq-clt",
    question: "O que é o Crédito do Trabalhador ou Consignado CLT?",
    answer: "É uma modalidade de empréstimo consignado voltada para trabalhadores de empresas privadas contratados sob o regime da CLT. O pagamento das parcelas ocorre por meio de desconto em folha, dependendo da existência de convênio entre a empresa empregadora e a instituição financeira parceira, além da análise de elegibilidade do colaborador."
  },
  {
    id: "faq-fgts",
    question: "Como funciona a antecipação do Saque-Aniversário FGTS?",
    answer: "Trata-se de uma alternativa que permite ao trabalhador com saldo no FGTS antecipar o valor correspondente a parcelas do seu Saque-Aniversário anual. A quitação é feita uma vez por ano, diretamente com o saldo vinculado à conta do FGTS, sem impactar seu orçamento mensal ou exigir pagamentos diretos via boleto ou débito em conta."
  },
  {
    id: "faq-conta-luz",
    question: "Como funciona o crédito com pagamento na conta de luz?",
    answer: "Nesta modalidade, as parcelas do crédito são cobradas diretamente na sua conta mensal de energia elétrica. Ela representa uma alternativa simplificada de crédito, dependendo da aprovação na concessionária de energia parceira do seu município e da viabilidade da operação para o seu perfil de consumo."
  },
  {
    id: "faq-refin-veiculo",
    question: "Como funciona o refinanciamento de veículo?",
    answer: "O refinanciamento de veículo (ou empréstimo com garantia de veículo) permite obter recursos financeiros utilizando seu automóvel como garantia. Você continua utilizando seu veículo normalmente no dia a dia enquanto quita as parcelas com taxas de juros reduzidas."
  },
  {
    id: "faq-simulacao",
    question: "Posso fazer uma simulação sem compromisso?",
    answer: "Sim. Todas as simulações e atendimentos realizados pela Poupconsig são totalmente informativos e sem compromisso. Nosso objetivo é ajudar você a compreender as opções viáveis para que você tome sua decisão com total tranquilidade e clareza."
  },
  {
    id: "faq-aprovacao",
    question: "A aprovação do crédito é garantida?",
    answer: "Não. A disponibilidade do crédito, os valores e as condições dependem da modalidade, do perfil do cliente e da análise realizada pela instituição responsável pela operação."
  },
  {
    id: "faq-atendimento",
    question: "Quem realiza meu atendimento?",
    answer: "Seu atendimento é realizado de forma humanizada e direta pela consultora Camila Rodrigues. Desde a análise inicial das possibilidades até o esclarecimento de dúvidas, você fala diretamente com quem está acompanhando seu caso no WhatsApp."
  },
  {
    id: "faq-instituicoes",
    question: "Quais instituições a Poupconsig atende?",
    answer: "Nós atuamos em parceria com diversas instituições financeiras reconhecidas no mercado, incluindo Banco Inter, Banco Daycoval, Safra, Caixa Econômica Federal e Facta Financeira. A oferta e as taxas variam de acordo com o seu perfil e o convênio aplicável."
  }
];
