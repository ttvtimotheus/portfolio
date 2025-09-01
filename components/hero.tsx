"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 animate-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 p-3 rounded-full bg-primary/10 animate-grid-move">
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute top-40 right-20 p-3 rounded-full bg-primary/10 animate-grid-move delay-1000">
        <Zap className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 p-3 rounded-full bg-primary/10 animate-grid-move delay-2000">
        <ArrowRight className="h-6 w-6 text-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Timo Haseloff</span>
              <span className="block text-primary mt-2">Web und Software</span>
              <span className="block">Development</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moderne Webseiten und Apps für kleine Unternehmen und Startups
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('kontakt')}
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Projekt anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Portfolio ansehen
            </Button>
          </div>

          {/* Device Mockup */}
          <div className="relative mt-16 max-w-2xl mx-auto">
            <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-muted h-8 flex items-center px-4 space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-xs text-muted-foreground">
                  timo-haseloff.de
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-24 bg-card border rounded-lg" />
                    <div className="h-24 bg-card border rounded-lg" />
                  </div>
                  <div className="flex space-x-2 mt-6">
                    <div className="h-8 bg-primary/30 rounded w-24" />
                    <div className="h-8 bg-muted rounded w-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
