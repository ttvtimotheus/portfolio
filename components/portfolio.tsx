"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { ExternalLink, Globe } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "Friseursalon Haarwerk",
      description: "Moderne Website für einen lokalen Friseursalon mit Online-Terminbuchung und Galerie",
      tech: ["Next.js", "Tailwind", "Booking System"],
      link: "/demo/haarwerk",
      category: "Business Website"
    },
    {
      title: "Café Kaffeekränzchen", 
      description: "Gemütliche Website für ein lokales Café mit Speisekarte und Events",
      tech: ["React", "CMS", "Events"],
      link: "/demo/kaffeekraenzchen",
      category: "Gastronomie"
    },
    {
      title: "Elektro Strompunkt",
      description: "Professionelle Präsenz für Elektroinstallationen mit Service-Übersicht",
      tech: ["Next.js", "SEO", "Contact Forms"],
      link: "/demo/strompunkt", 
      category: "Handwerk"
    },
    {
      title: "Fotograf Lichtblick",
      description: "Portfolio-Website für einen Fotografen mit Bildergalerie und Buchungssystem",
      tech: ["Gallery", "Lightbox", "Booking"],
      link: "/demo/lichtblick",
      category: "Kreativ"
    },
    {
      title: "Immobilien UrbanHome",
      description: "Immobilien-Plattform mit Suchfunktion und Objektverwaltung",
      tech: ["Database", "Search", "CRM"],
      link: "/demo/urbanhome",
      category: "Immobilien"
    },
    {
      title: "SaaS Landing Taskly",
      description: "Moderne Landing Page für eine Produktivitäts-App mit Pricing und Features",
      tech: ["SaaS", "Pricing", "Analytics"],
      link: "/demo/taskly",
      category: "SaaS"
    }
  ]

  return (
    <Section 
      id="portfolio"
      title="Portfolio"
      subtitle="Erfolgreiche Projekte für verschiedene Branchen"
      dark
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.title}
            className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <Globe className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={project.link} className="block">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group-hover:bg-primary/10 transition-colors"
                >
                  Demo ansehen
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
