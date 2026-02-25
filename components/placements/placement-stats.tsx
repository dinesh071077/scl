import { TrendingUp, Award, Building2, IndianRupee } from "lucide-react"

const stats = [
  { icon: TrendingUp, value: "95%", label: "Placement Rate", sub: "Within 3 months of course completion" },
  { icon: IndianRupee, value: "6.5 LPA", label: "Average Package", sub: "Highest package: 24 LPA" },
  { icon: Building2, value: "500+", label: "Hiring Partners", sub: "MNCs, startups, and product companies" },
  { icon: Award, value: "5,000+", label: "Students Placed", sub: "Across all IT domains" },
]

export function PlacementStats() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-mono text-3xl font-bold text-foreground">{stat.value}</span>
              <p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
