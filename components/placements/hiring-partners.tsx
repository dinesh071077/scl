import { Building2 } from "lucide-react"

const partners = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "IBM",
  "Cognizant",
  "HCL Tech",
  "Deloitte",
  "Capgemini",
  "Oracle",
  "Adobe",
  "Flipkart",
  "Paytm",
]

export function HiringPartners() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Our Partners
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Top Hiring Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            We have partnerships with 500+ companies across India and globally. Here are some of our top recruiters.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-5 transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <Building2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
