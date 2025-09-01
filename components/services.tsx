"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Check, ArrowRight } from "lucide-react"

export function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const packages = [
    {
      name: "Basic",
      price: "ab 500€",
      description: "Perfekt für kleine Unternehmen und Einzelunternehmer",
      features: [
        "Onepager Design",
        "Vollresponsiv",
        "Kontaktformular",
        "Basis SEO",
        "Mobile optimiert",
        "SSL Zertifikat"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "ab 900€", 
      description: "Für wachsende Unternehmen mit erweiterten Anforderungen",
      features: [
        "Mehrere Seiten",
        "Headless CMS",
        "Performance Optimierung",
        "Erweiterte SEO",
        "Analytics Setup",
        "Content Management",
        "Blog Funktion"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "ab 2000€",
      description: "Maßgeschneiderte Lösungen für komplexe Anforderungen",
      features: [
        "Individuelle Funktionen",
        "E-Commerce/Shop",
        "Booking System",
        "Mehrsprachigkeit", 
        "API Integration",
        "Custom Dashboard",
        "Wartung & Support"
      ],
      popular: false
    }
  ]

  return (
    <Section 
      id="leistungen"
      title="Leistungen"
      subtitle="Transparente Pakete für jeden Bedarf"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <Card 
            key={pkg.name}
            className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              pkg.popular ? 'border-primary shadow-md scale-105' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Beliebt
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
              <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
              <CardDescription className="text-sm">{pkg.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {pkg.features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="w-full"
                variant={pkg.popular ? "default" : "outline"}
              >
                Projekt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  )
}
