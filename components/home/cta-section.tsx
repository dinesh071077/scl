import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/919319552561?text=Hi%20SCL%20Academy%2C%20I%20am%20interested%20in%20enrolling%20in%20your%20IT%20courses.%20Please%20share%20more%20details."

export function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to Transform Your Career?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Join thousands of successful graduates who started their IT careers at SCL Academy. Enroll today and take the first step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
