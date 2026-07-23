export type CreditContext =
  | "GENERAL"
  | "INSS"
  | "CLT"
  | "FGTS"
  | "CONTA_LUZ"
  | "SERVIDOR"
  | "BOLSA_FAMILIA";

export interface Solution {
  id: string;
  type: CreditContext;
  title: string;
  badge?: string;
  headline: string;
  description: string;
  tags: string[];
  ctaText: string;
  whatsAppContext: CreditContext;
}

export const SOLUTIONS: Solution[] = [
  {
    id: "sol-inss",
    type: "INSS",
    title: "Crédito Consignado INSS",
    headline: "Condições pensadas para aposentados e pensionistas.",
    description: "Verifique as possibilidades de crédito consignado disponíveis para seu benefício e tire suas dúvidas antes de decidir.",
    tags: ["INSS", "Desconto no benefício"],
    ctaText: "Quero verificar meu consignado",
    whatsAppContext: "INSS"
  },
  {
    id: "sol-clt",
    type: "CLT",
    title: "Crédito do Trabalhador",
    badge: "Consignado CLT",
    headline: "Crédito para quem trabalha com carteira assinada.",
    description: "Consulte as possibilidades de consignado com parcelas descontadas diretamente do salário, conforme elegibilidade e análise.",
    tags: ["Carteira assinada", "Consignado CLT"],
    ctaText: "Sou CLT e quero saber mais",
    whatsAppContext: "CLT"
  },
  {
    id: "sol-fgts",
    type: "FGTS",
    title: "Antecipação do FGTS",
    headline: "Consulte possibilidades utilizando saldo elegível do FGTS.",
    description: "Verifique as condições disponíveis para antecipação do Saque-Aniversário utilizando saldo elegível do FGTS.",
    tags: ["FGTS", "Saque-Aniversário"],
    ctaText: "Consultar antecipação FGTS",
    whatsAppContext: "FGTS"
  },
  {
    id: "sol-conta-luz",
    type: "CONTA_LUZ",
    title: "Crédito na Conta de Luz",
    headline: "Uma alternativa com pagamento junto à conta de energia.",
    description: "Consulte a disponibilidade da modalidade para sua região e conheça as condições aplicáveis ao seu perfil.",
    tags: ["Conta de energia", "Sujeito à disponibilidade"],
    ctaText: "Verificar disponibilidade",
    whatsAppContext: "CONTA_LUZ"
  },
  {
    id: "sol-servidor",
    type: "SERVIDOR",
    title: "Consignado para Servidor Público",
    headline: "Possibilidades para servidores elegíveis.",
    description: "Fale com uma consultora para verificar convênios e possibilidades disponíveis para o seu vínculo.",
    tags: ["Servidor público", "Consignado"],
    ctaText: "Verificar meu vínculo",
    whatsAppContext: "SERVIDOR"
  },
  {
    id: "sol-bolsa-familia",
    type: "BOLSA_FAMILIA",
    title: "Empréstimo Bolsa Família",
    headline: "Possibilidades de crédito para beneficiários.",
    description: "Consulte as condições e opções disponíveis de empréstimo voltado para beneficiários do programa Bolsa Família.",
    tags: ["Bolsa Família", "Consulte condições"],
    ctaText: "Verificar Bolsa Família",
    whatsAppContext: "BOLSA_FAMILIA"
  }
];

export interface ProfileOption {
  type: CreditContext | "NAO_SEI";
  label: string;
  solutionName: string;
  description: string;
}

export const PROFILE_OPTIONS: ProfileOption[] = [
  {
    type: "INSS",
    label: "Sou aposentado ou pensionista do INSS",
    solutionName: "Crédito Consignado INSS",
    description: "Para aposentados e pensionistas do INSS, existem modalidades de crédito consignado com parcelas descontadas diretamente do benefício, sujeitas à margem disponível e à análise da instituição parceira."
  },
  {
    type: "SERVIDOR",
    label: "Sou servidor público",
    solutionName: "Crédito Consignado para Servidor Público",
    description: "Servidores públicos contam com convênios que permitem desconto das parcelas diretamente em folha de pagamento, conforme margem consignável e diretrizes de cada órgão."
  },
  {
    type: "CLT",
    label: "Trabalho com carteira assinada",
    solutionName: "Crédito do Trabalhador / Consignado CLT",
    description: "Para trabalhadores sob regime CLT, existem linhas de crédito com desconto em folha, dependendo dos convênios da empresa contratante e da análise de crédito."
  },
  {
    type: "FGTS",
    label: "Tenho saldo no FGTS",
    solutionName: "Antecipação do Saque-Aniversário FGTS",
    description: "Esta modalidade permite que trabalhadores com saldo no FGTS antecipem parcelas do seu Saque-Aniversário anual, sem parcelas mensais descontadas da conta bancária, pois a liquidação ocorre diretamente na conta do FGTS."
  },
  {
    type: "BOLSA_FAMILIA",
    label: "Sou beneficiário do Bolsa Família",
    solutionName: "Empréstimo Bolsa Família",
    description: "Para beneficiários do programa Bolsa Família, avaliamos opções de microcrédito e outras linhas disponíveis conforme a legislação vigente e regras das instituições financeiras parceiras."
  },
  {
    type: "CONTA_LUZ",
    label: "Quero verificar crédito pela conta de luz",
    solutionName: "Crédito com pagamento na conta de luz",
    description: "Uma opção alternativa de crédito onde a cobrança das parcelas é integrada à sua fatura de energia elétrica residencial, dependendo da concessionária e da viabilidade regional."
  },
  {
    type: "NAO_SEI",
    label: "Ainda não sei qual opção escolher",
    solutionName: "Atendimento personalizado com Camila Rodrigues",
    description: "Se você tem dúvidas de qual modalidade de crédito se adapta melhor à sua situação financeira, Camila Rodrigues está à disposição para avaliar suas necessidades e apresentar caminhos claros."
  }
];
