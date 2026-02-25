import Image from "next/image"

export function PlacementsHero() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/placement-success.jpg"
          alt="Successful placement of students"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-background/60">
          Placements
        </span>
        <h1 className="text-balance font-mono text-4xl font-bold tracking-tight md:text-5xl">
          Your Career Starts Here
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
          Our dedicated placement cell works tirelessly to connect trained students with top IT companies. 95% of our graduates get placed within 3 months.
        </p>
      </div>
    </section>
  )
}
