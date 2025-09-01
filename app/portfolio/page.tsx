import type { Metadata } from 'next'
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Übersicht aller realisierten Projekte - von Webseiten bis zu komplexen Anwendungen.',
}

export default function PortfolioPage() {
  const allProjects = [
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
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
            <p className="text-xl text-gray-600">
              Alle realisierten Projekte - von Webseiten bis zu komplexen Anwendungen
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Card 
              key={project.title}
              className="group transition-all duration-200 hover:shadow-lg bg-white border-gray-200"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <Globe className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={project.link} className="block">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Demo ansehen
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ihr Projekt fehlt noch?
            </h2>
            <p className="text-gray-600 mb-6">
              Lassen Sie uns gemeinsam Ihre Idee in die Realität umsetzen. 
              Schnell, professionell und zu fairen Preisen.
            </p>
            <Link href="/#kontakt">
              <Button 
                size="lg"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Projekt starten
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
