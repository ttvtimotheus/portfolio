import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function Section({ id, title, subtitle, children, className, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-24 lg:py-32",
        dark ? "bg-muted/30" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
