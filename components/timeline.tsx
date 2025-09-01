import { Section } from "@/components/section"
import { MessageSquare, Handshake, FileText, Rocket, CheckCircle } from "lucide-react"

export function Timeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Anfrage",
      description: "Sie kontaktieren mich über das Formular oder per E-Mail mit Ihren Anforderungen."
    },
    {
      icon: Handshake,
      title: "Unverbindliches Gespräch",
      description: "Wir besprechen Ihr Projekt ausführlich und klären alle offenen Fragen."
    },
    {
      icon: FileText,
      title: "Angebot",
      description: "Sie erhalten ein detailliertes Angebot mit Zeitplan und transparenten Kosten."
    },
    {
      icon: Rocket,
      title: "Umsetzung",
      description: "Entwicklung Ihrer Website mit regelmäßigen Updates zum Fortschritt."
    },
    {
      icon: CheckCircle,
      title: "Launch und Übergabe",
      description: "Finale Tests, Launch der Website und Einführung in die Verwaltung."
    }
  ]

  return (
    <Section 
      id="ablauf"
      title="Ablauf"
      subtitle="Von der Idee zur fertigen Website in 5 einfachen Schritten"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-1/2 left-full ml-4 hidden md:block">
                    <div className="w-4 h-0.5 bg-border" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-8">
                  <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
