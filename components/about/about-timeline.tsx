const milestones = [
  { year: "2015", title: "Founded", description: "SCL Academy started with 2 classrooms and 50 students in a small office space." },
  { year: "2017", title: "First 1,000 Students", description: "Expanded to a full campus with 10+ courses and partnerships with major tech companies." },
  { year: "2019", title: "Placement Excellence", description: "Achieved 90% placement rate and became a preferred training partner for 200+ companies." },
  { year: "2021", title: "Online Expansion", description: "Launched hybrid learning platform, making courses accessible to students across the country." },
  { year: "2023", title: "AI & Cloud Labs", description: "Opened state-of-the-art AI and Cloud computing labs with industry-grade infrastructure." },
  { year: "2025", title: "5,000+ Alumni", description: "Crossed 5,000 successful placements with a 95% placement rate and 500+ hiring partners." },
]

export function AboutTimeline() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Our Journey
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Decade of Excellence
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`rounded-xl border border-border bg-card p-6 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <span className="font-mono text-2xl font-bold text-primary">{m.year}</span>
                    <h3 className="mt-1 font-mono text-lg font-bold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
                <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background md:block" />
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
