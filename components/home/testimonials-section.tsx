import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at TCS",
    initials: "PS",
    review: "SCL Academy completely transformed my career. The hands-on training and placement support helped me land my dream job within 2 weeks of completing the course.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst at Infosys",
    initials: "RV",
    review: "The Data Science course at SCL was incredibly comprehensive. The mentors were patient, knowledgeable, and truly invested in our success.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Cloud Engineer at Wipro",
    initials: "AP",
    review: "Best decision I made was joining SCL Academy. The cloud computing program gave me hands-on AWS experience that made me job-ready from day one.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Student Voices
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.review}"`}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
