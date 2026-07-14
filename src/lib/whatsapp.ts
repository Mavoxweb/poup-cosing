import { BUSINESS } from "../constants/business";
import type { CreditContext } from "../constants/solutions";

export const MESSAGES: Record<CreditContext, string> = {
  GENERAL: "Olá, Camila! Acessei o site da Poupe Consig e gostaria de entender quais possibilidades de crédito podem fazer sentido para o meu perfil. Pode me orientar?",
  INSS: "Olá, Camila! Acessei o site da Poupe Consig e gostaria de saber mais sobre Crédito Consignado INSS. Pode me orientar sobre as possibilidades?",
  CLT: "Olá, Camila! Acessei o site da Poupe Consig. Trabalho com carteira assinada e gostaria de saber mais sobre o Crédito do Trabalhador / Consignado CLT. Pode me orientar?",
  FGTS: "Olá, Camila! Acessei o site da Poupe Consig e tenho interesse em verificar possibilidades de Antecipação do Saque-Aniversário FGTS. Pode me orientar?",
  CONTA_LUZ: "Olá, Camila! Acessei o site da Poupe Consig e gostaria de verificar a disponibilidade de crédito com pagamento pela conta de luz. Minha cidade é: {city}. Pode me orientar?",
  SERVIDOR: "Olá, Camila! Acessei o site da Poupe Consig e sou servidor(a) público(a). Gostaria de verificar as possibilidades de crédito consignado para o meu vínculo. Pode me orientar?"
};

export function createWhatsAppLink(context: CreditContext, data?: { city?: string }): string {
  let messageTemplate = MESSAGES[context] || MESSAGES.GENERAL;

  if (context === "CONTA_LUZ" && data?.city) {
    messageTemplate = messageTemplate.replace("{city}", data.city);
  } else if (context === "CONTA_LUZ" && !data?.city) {
    messageTemplate = messageTemplate.replace("Minha cidade é: {city}.", "Gostaria de verificar as possibilidades na minha região.");
  }

  const encodedText = encodeURIComponent(messageTemplate);
  return `https://wa.me/${BUSINESS.phoneNormalized}?text=${encodedText}`;
}

export function openWhatsApp(context: CreditContext, data?: { city?: string }): void {
  const url = createWhatsAppLink(context, data);
  window.open(url, "_blank", "noopener,noreferrer");
}
