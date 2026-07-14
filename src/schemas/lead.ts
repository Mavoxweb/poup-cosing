import { z } from "zod";

export const cityLeadSchema = z.object({
  city: z
    .string()
    .trim()
    .min(2, "Por favor, informe uma cidade válida com pelo menos 2 caracteres.")
    .max(50, "O nome da cidade ultrapassa o limite permitido.")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Por favor, insira apenas letras e espaços para o nome da cidade."
    )
});

export type CityLead = z.infer<typeof cityLeadSchema>;
export type CityFormInput = z.infer<typeof cityLeadSchema>;
