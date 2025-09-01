"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Section } from "@/components/section"
import { Mail, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { sendContactEmail } from "@/app/actions"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
    fallbackEmail?: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      consent: false
    }
  })

  const consentValue = watch("consent")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await sendContactEmail(data)
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen zurück."
        })
        reset()
      } else {
        setSubmitResult({
          success: false,
          message: result.error || "Ein Fehler ist aufgetreten.",
          fallbackEmail: result.fallbackEmail
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        fallbackEmail: "timo@haseloff.dev"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section 
      id="kontakt"
      title="Projekt starten"
      subtitle="Lassen Sie uns gemeinsam Ihre Idee verwirklichen"
    >
      <div className="max-w-4xl mx-auto">
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Schnelle Umsetzung</h3>
            <p className="text-sm text-gray-600">Projektstart innerhalb von 48h</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Faire Preise</h3>
            <p className="text-sm text-gray-600">Transparente Kostenstruktur</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Persönlicher Support</h3>
            <p className="text-sm text-gray-600">Direkter Kontakt ohne Umwege</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg bg-white border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-gray-900">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>Projekt starten</span>
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Kostenlose Beratung und unverbindliches Angebot
              </p>
            </CardHeader>

          <CardContent className="space-y-6">
            {submitResult && (
              <div className={`p-4 rounded-lg flex items-start space-x-3 ${
                submitResult.success 
                  ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                  : 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800'
              }`}>
                {submitResult.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                )}
                <div className="space-y-2">
                  <p className={`text-sm font-medium ${
                    submitResult.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    {submitResult.message}
                  </p>
                  {submitResult.fallbackEmail && (
                    <p className="text-xs text-red-700 dark:text-red-300">
                      Alternativ können Sie mich direkt erreichen:{" "}
                      <a 
                        href={`mailto:${submitResult.fallbackEmail}`}
                        className="underline hover:no-underline inline-flex items-center gap-1"
                      >
                        {submitResult.fallbackEmail}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Ihr vollständiger Name"
                    className={errors.name ? "border-red-500" : ""}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-600 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="ihre.email@beispiel.de"
                    className={errors.email ? "border-red-500" : ""}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Beschreiben Sie Ihr Projekt und Ihre Anforderungen..."
                  className={`min-h-[120px] resize-none ${errors.message ? "border-red-500" : ""}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Switch
                    id="consent"
                    checked={consentValue}
                    onCheckedChange={(checked) => setValue("consent", checked)}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                    className={errors.consent ? "border-red-500" : ""}
                  />
                  <div className="space-y-1 flex-1">
                    <Label 
                      htmlFor="consent" 
                      className="text-sm cursor-pointer leading-relaxed"
                    >
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a 
                        href="/datenschutz" 
                        className="text-primary underline hover:no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zu. *
                    </Label>
                    {errors.consent && (
                      <p id="consent-error" className="text-sm text-red-600 dark:text-red-400">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Projekt starten
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Oder kontaktieren Sie mich direkt:{" "}
                <a 
                  href="mailto:timo@haseloff.dev"
                  className="text-primary underline hover:no-underline"
                >
                  timo@haseloff.dev
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </Section>
  )
}
