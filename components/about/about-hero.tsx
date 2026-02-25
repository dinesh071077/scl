import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-team.jpg"
          alt="SCL Academy team collaborating"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-background/60">
          About Us
        </span>
        <h1 className="text-balance font-mono text-4xl font-bold tracking-tight md:text-5xl">
          Building Careers Since 2015
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
          SCL Academy was founded with a single mission: to bridge the gap between academic knowledge and industry requirements in the IT sector.
        </p>
      </div>
    </section>
  )
}
