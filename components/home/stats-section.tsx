import { Users, Award, Briefcase, BookOpen } from "lucide-react"

const stats = [
  { icon: Users, value: "5,000+", label: "Students Trained" },
  { icon: Award, value: "95%", label: "Placement Rate" },
  { icon: Briefcase, value: "500+", label: "Hiring Partners" },
  { icon: BookOpen, value: "30+", label: "IT Courses" },
]

export function StatsSection() {
  return (
    <section className="border-b border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-mono text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
