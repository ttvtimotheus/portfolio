"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          aria-label="Zur Startseite"
        >
          <span>Timo Haseloff</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('leistungen')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          >
            Leistungen
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('ablauf')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          >
            Ablauf
          </button>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          >
            Kontakt
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {mounted && (
              <>
                <Sun className="h-4 w-4" />
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  aria-label="Dark Mode umschalten"
                />
                <Moon className="h-4 w-4" />
              </>
            )}
          </div>
          <Button 
            onClick={() => scrollToSection('kontakt')}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Projekt anfragen
          </Button>
        </div>
      </div>
    </header>
  )
}
