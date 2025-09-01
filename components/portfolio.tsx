"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { ArrowRight, ExternalLink, Globe } from "lucide-react"

export function Portfolio() {
  const featuredProjects = [
    {
      title: "Friseursalon Haarwerk",
      description: "Moderne Website mit Online-Terminbuchung und Galerie",
      tech: ["Next.js", "Booking"],
      link: "/demo/haarwerk",
      category: "Business"
    },
    {
      title: "Café Kaffeekränzchen", 
      description: "Gemütliche Website mit Speisekarte und Events",
      tech: ["React", "CMS"],
      link: "/demo/kaffeekraenzchen",
      category: "Gastronomie"
    },
    {
      title: "Fotograf Lichtblick",
      description: "Portfolio-Website mit Bildergalerie und Buchung",
      tech: ["Gallery", "Booking"],
      link: "/demo/lichtblick",
      category: "Kreativ"
    },
    {
      title: "SaaS Landing Taskly",
      description: "Landing Page mit Pricing und Feature-Übersicht",
      tech: ["SaaS", "Pricing"],
      link: "/demo/taskly",
      category: "SaaS"
    }
  ]

  return (
    <Section 
      id="portfolio"
      title="Portfolio"
      subtitle="Ausgewählte Projekte für verschiedene Branchen"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuredProjects.map((project) => (
          <Card 
            key={project.title}
            className="group relative overflow-hidden border-border shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="relative aspect-video bg-gradient-to-br from-muted/30 to-muted/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Demo Screenshot</p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {project.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-border hover:bg-accent text-foreground"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Demo ansehen
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/portfolio">
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-3 border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Alle Projekte ansehen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}
