export interface Institution {
  id: string;
  name: string;
  altText: string;
}

export const INSTITUTIONS: Institution[] = [
  {
    id: "inter",
    name: "Banco Inter",
    altText: "Logotipo do Banco Inter, instituição parceira da Poupconsig"
  },
  {
    id: "daycoval",
    name: "Banco Daycoval",
    altText: "Logotipo do Banco Daycoval, instituição parceira da Poupconsig"
  },
  {
    id: "brb",
    name: "BRB - Banco de Brasília",
    altText: "Logotipo do BRB Banco de Brasília, instituição parceira da Poupconsig"
  },
  {
    id: "safra",
    name: "Banco Safra",
    altText: "Logotipo do Banco Safra, instituição parceira da Poupconsig"
  },
  {
    id: "caixa",
    name: "CAIXA Econômica Federal",
    altText: "Logotipo da Caixa Econômica Federal, instituição parceira da Poupconsig"
  },
  {
    id: "facta",
    name: "Facta Financeira",
    altText: "Logotipo da Facta Financeira, instituição parceira da Poupconsig"
  }
];
