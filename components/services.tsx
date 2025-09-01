"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Check, ArrowRight, Globe, ShoppingCart, Zap } from "lucide-react"

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
        "Kontaktformular"
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
        "Performance Optimierung"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "ab 2000€",
      description: "Maßgeschneiderte Lösungen für komplexe Anforderungen",
      features: [
        "E-Commerce/Shop",
        "API Integration",
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
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, index) => {
          const icons = [Globe, Zap, ShoppingCart]
          const Icon = icons[index]
          
          return (
            <Card 
              key={pkg.name}
              className="relative overflow-hidden border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <CardHeader className="text-center pb-2 px-8 pt-8">
                <div className="mx-auto w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{pkg.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </CardHeader>
              <CardContent className="pt-0 pb-8 px-8">
                <div className="text-center mb-8">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <p className="text-sm text-gray-500 mt-1">einmalig</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => scrollToSection('kontakt')}
                  className={`w-full py-3 transition-colors ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
