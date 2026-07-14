export interface Institution {
  id: string;
  name: string;
  altText: string;
}

export const INSTITUTIONS: Institution[] = [
  {
    id: "inter",
    name: "Banco Inter",
    altText: "Logotipo do Banco Inter, instituição parceira da Poupe Consig"
  },
  {
    id: "daycoval",
    name: "Banco Daycoval",
    altText: "Logotipo do Banco Daycoval, instituição parceira da Poupe Consig"
  },
  {
    id: "safra",
    name: "Banco Safra",
    altText: "Logotipo do Banco Safra, instituição parceira da Poupe Consig"
  },
  {
    id: "caixa",
    name: "CAIXA Econômica Federal",
    altText: "Logotipo da Caixa Econômica Federal, instituição parceira da Poupe Consig"
  },
  {
    id: "facta",
    name: "Facta Financeira",
    altText: "Logotipo da Facta Financeira, instituição parceira da Poupe Consig"
  }
];
