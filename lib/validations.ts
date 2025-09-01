import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name muss mindestens 2 Zeichen lang sein" })
    .max(50, { message: "Name darf maximal 50 Zeichen lang sein" }),
  email: z
    .string()
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein" }),
  message: z
    .string()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Sie müssen der Datenschutzerklärung zustimmen"
    })
})

export type ContactFormData = z.infer<typeof contactFormSchema>
