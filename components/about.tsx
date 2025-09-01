import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Code2, Rocket, Target } from "lucide-react"

export function About() {
  const techStack = [
    "Next.js", "React", "Tailwind CSS", "Shadcn/UI", 
    "Vercel", "Hetzner", "Sanity", "Prismic"
  ]

  return (
    <Section 
      id="ueber-mich"
      title="Über mich"
      subtitle="Moderner Code, schnelle Lieferung"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Als spezialisierter Entwickler für moderne Webanwendungen fokussiere ich mich auf 
            <span className="text-primary font-medium"> Next.js</span> und performante Lösungen. 
            Mein Ziel ist es, kleine Unternehmen und Startups mit 
            <span className="text-primary font-medium"> sauberem Code</span> und 
            <span className="text-primary font-medium"> schneller Lieferung</span> zum digitalen Erfolg zu führen.
          </p>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Code2 className="h-4 w-4 text-primary" />
              <span>Sauberer Code</span>
            </div>
            <div className="flex items-center space-x-2">
              <Rocket className="h-4 w-4 text-primary" />
              <span>Schnelle Lieferung</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-primary" />
              <span>Zielorientiert</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Code2 className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Fokus auf Qualität</h4>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Jedes Projekt wird mit Liebe zum Detail und modernsten Standards entwickelt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

// Create Badge component since it's missing
