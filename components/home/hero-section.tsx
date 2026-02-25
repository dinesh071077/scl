import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-classroom.jpg"
          alt="Students learning in a modern IT classroom"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-36">
        <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-background/80 backdrop-blur-sm">
          Trusted by 5,000+ Students
        </span>
        <h1 className="max-w-4xl text-balance font-mono text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Launch Your IT Career with Confidence
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/70 md:text-xl">
          Industry-aligned IT courses, hands-on projects, and guaranteed placement assistance to transform your future in technology.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="gap-2">
            <Link href="/courses">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
            <Link href="/contact">Get Free Counselling</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
