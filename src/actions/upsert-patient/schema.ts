import { z } from "zod";

import { patientSexEnum } from "@/db/schema";

export const upsertPatientSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, {
    message: "Nome é obrigatório",
  }),
  email: z.string().email({
    message: "E-mail inválido",
  }),
  phoneNumber: z.string().trim().min(11, {
    message: "Telefone inválido",
  }),
  sex: z.enum(patientSexEnum.enumValues),
});

export type UpsertPatientSchema = z.infer<typeof upsertPatientSchema>;
