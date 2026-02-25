import { FileText, Users, Briefcase, Handshake } from "lucide-react"

const steps = [
  { step: 1, icon: FileText, title: "Resume Building", description: "Professional resume crafting with ATS optimization and portfolio review by industry experts." },
  { step: 2, icon: Users, title: "Mock Interviews", description: "Multiple rounds of mock interviews including technical, HR, and aptitude-based assessments." },
  { step: 3, icon: Briefcase, title: "Company Matching", description: "Our placement cell matches your profile with relevant openings from 500+ partner companies." },
  { step: 4, icon: Handshake, title: "Placement Drive", description: "Exclusive campus drives, off-campus referrals, and direct company interviews until you are placed." },
]

export function PlacementProcess() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Our Process
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How We Get You Placed
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-border bg-card p-6 text-center">
              <span className="absolute -top-3 left-6 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {s.step}
              </span>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-mono text-base font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
