"use server"

import { Resend } from "resend"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)
    
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      return {
        success: false,
        error: "E-Mail Konfiguration fehlt. Bitte kontaktieren Sie mich direkt per E-Mail.",
        fallbackEmail: "timo@haseloff.dev"
      }
    }

    // Send email
    const { error } = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      subject: `Neue Projektanfrage von ${validatedData.name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 24px;">Neue Projektanfrage</h2>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #334155;">Kontaktdaten</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 8px 0;"><strong>E-Mail:</strong> ${validatedData.email}</p>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 8px;">
            <h3 style="margin: 0 0 16px 0; color: #334155;">Nachricht</h3>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              Diese E-Mail wurde über das Kontaktformular auf timo-haseloff.de gesendet.
            </p>
          </div>
        </div>
      `,
      reply_to: validatedData.email,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.",
        fallbackEmail: "timo@haseloff.dev"
      }
    }

    return { success: true }

  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
        fallbackEmail: "timo@haseloff.dev"
      }
    }
    
    return {
      success: false,
      error: "Ein unerwarteter Fehler ist aufgetreten.",
      fallbackEmail: "timo@haseloff.dev"
    }
  }
}
