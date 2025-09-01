import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Timo Haseloff
              </h3>
              <p className="text-sm text-muted-foreground">
                Web und Software Development
              </p>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Moderne Webseiten und Apps für kleine Unternehmen und Startups. 
              Spezialisiert auf Next.js, React und performante Lösungen.
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <div className="flex flex-col sm:flex-row md:justify-end space-y-2 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/impressum"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Datenschutz
              </Link>
              <a 
                href="mailto:timo@haseloff.dev"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Timo Haseloff. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
