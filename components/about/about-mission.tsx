import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide world-class IT training that empowers students with practical skills, enabling them to secure rewarding careers in the technology industry.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the most trusted IT training institute in the region, known for producing industry-ready professionals who drive innovation.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Student-first approach, hands-on learning, transparency in outcomes, continuous curriculum updates, and an unwavering commitment to placement success.",
  },
]

export function AboutMission() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Drives Us
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-mono text-lg font-bold text-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
