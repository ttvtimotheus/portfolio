"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Timo Haseloff</span>
                <span className="block text-muted-foreground text-4xl lg:text-5xl mt-2">
                  Web & Software Development
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Moderne Webseiten und Apps für kleine Unternehmen und Startups. 
                Schnell, sauber, zuverlässig.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('kontakt')}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-colors"
              >
                Projekt starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="text-lg px-8 py-6 border-border hover:bg-accent text-foreground transition-colors"
              >
                Portfolio ansehen
              </Button>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="relative max-w-lg mx-auto">
            <div className="bg-card rounded-xl shadow-xl border border-border overflow-hidden">
              {/* Browser Header */}
              <div className="bg-muted/50 h-8 flex items-center px-4 space-x-2 border-b border-border">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-background rounded px-2 py-0.5 text-xs text-muted-foreground max-w-xs mx-auto">
                    beispiel-projekt.de
                  </div>
                </div>
              </div>
              
              {/* Website Content */}
              <div className="bg-gradient-to-br from-background to-accent/20 p-6 h-80">
                <div className="space-y-4">
                  {/* Navigation */}
                  <div className="flex justify-between items-center pb-2">
                    <div className="h-6 bg-primary rounded w-20 flex items-center justify-center">
                      <div className="text-xs text-white font-medium">Logo</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="h-4 bg-muted/60 rounded w-12" />
                      <div className="h-4 bg-muted/60 rounded w-12" />
                      <div className="h-4 bg-muted/60 rounded w-12" />
                    </div>
                  </div>
                  
                  {/* Hero Title */}
                  <div className="space-y-2 py-4">
                    <div className="h-6 bg-foreground/20 rounded w-full" />
                    <div className="h-6 bg-foreground/20 rounded w-4/5" />
                    <div className="h-3 bg-muted-foreground/30 rounded w-3/5 mt-3" />
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-2">
                    <div className="h-10 bg-primary rounded-lg w-32 flex items-center justify-center">
                      <div className="text-xs text-white font-medium">Jetzt starten</div>
                    </div>
                  </div>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-card/80 border border-border/50 rounded-lg p-3 space-y-2">
                      <div className="h-4 bg-primary/20 rounded w-2/3" />
                      <div className="h-2 bg-muted/60 rounded w-full" />
                      <div className="h-2 bg-muted/60 rounded w-4/5" />
                    </div>
                    <div className="bg-card/80 border border-border/50 rounded-lg p-3 space-y-2">
                      <div className="h-4 bg-primary/20 rounded w-2/3" />
                      <div className="h-2 bg-muted/60 rounded w-full" />
                      <div className="h-2 bg-muted/60 rounded w-4/5" />
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex gap-2 pt-2">
                    <div className="px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium">Next.js</div>
                    <div className="px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium">React</div>
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
