import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const reasons = [
  "Expert trainers with 10+ years of industry experience",
  "Hands-on projects and real-world case studies",
  "100% placement assistance with top companies",
  "Flexible batch timings - weekday and weekend",
  "Modern lab infrastructure and learning tools",
  "Industry-recognized certifications included",
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
              Why SCL Academy
            </span>
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Your Success Is Our Mission
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We go beyond traditional teaching with a curriculum designed by hiring managers, mentored by practitioners, and driven by placement outcomes.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" className="gap-2">
                <Link href="/about">
                  Know More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-primary/5 p-6 text-center">
                  <span className="font-mono text-3xl font-bold text-primary">10+</span>
                  <p className="mt-1 text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="rounded-xl bg-primary/5 p-6 text-center">
                  <span className="font-mono text-3xl font-bold text-primary">50+</span>
                  <p className="mt-1 text-xs text-muted-foreground">Expert Trainers</p>
                </div>
                <div className="rounded-xl bg-primary/5 p-6 text-center">
                  <span className="font-mono text-3xl font-bold text-primary">95%</span>
                  <p className="mt-1 text-xs text-muted-foreground">Placement Rate</p>
                </div>
                <div className="rounded-xl bg-primary/5 p-6 text-center">
                  <span className="font-mono text-3xl font-bold text-primary">4.8</span>
                  <p className="mt-1 text-xs text-muted-foreground">Student Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
