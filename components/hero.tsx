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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-gray-900">Timo Haseloff</span>
                <span className="block text-gray-600 text-4xl lg:text-5xl mt-2">
                  Web & Software Development
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Moderne Webseiten und Apps für kleine Unternehmen und Startups. 
                Schnell, sauber, zuverlässig.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('kontakt')}
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Projekt starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="text-lg px-8 py-6 border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Portfolio ansehen
              </Button>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="relative">
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-100 h-10 flex items-center px-4 space-x-2 border-b border-gray-200">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 max-w-xs mx-auto">
                    beispiel-projekt.de
                  </div>
                </div>
              </div>
              
              {/* Website Content */}
              <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-[300px]">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-blue-600 rounded w-32" />
                    <div className="flex space-x-2">
                      <div className="h-6 bg-gray-200 rounded w-16" />
                      <div className="h-6 bg-gray-200 rounded w-16" />
                    </div>
                  </div>
                  
                  {/* Hero Content */}
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-800 rounded w-4/5" />
                    <div className="h-4 bg-gray-400 rounded w-3/5" />
                    <div className="h-4 bg-gray-400 rounded w-2/3" />
                  </div>
                  
                  {/* Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-2/3" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-2/3" />
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex space-x-3 mt-6">
                    <div className="h-8 bg-blue-600 rounded w-24" />
                    <div className="h-8 bg-gray-200 rounded w-20" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/0 via-blue-100/50 to-blue-100/0 rounded-3xl -z-10 blur-xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
