import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const team = [
  { name: "Ethiraj S", role: "CEO & Founder", initials: "ES", bio: "Visionary leader driving SCL Academy's mission to bridge the gap between IT education and industry placements." },
  { name: "Dinesh Kumar", role: "Software Developer - Python Full Stack", initials: "DK", bio: "Expert Python full stack developer with deep experience in building scalable web applications and training the next generation." },
  { name: "Thangabalan", role: "Java Developer", initials: "TB", bio: "Skilled Java developer specializing in enterprise-grade applications and mentoring students in core Java technologies." },
]

export function AboutTeam() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Leadership
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet Our Team
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
              <Avatar className="mb-4 h-16 w-16">
                <AvatarFallback className="bg-primary/10 text-lg font-bold text-primary">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-mono text-base font-bold text-foreground">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
