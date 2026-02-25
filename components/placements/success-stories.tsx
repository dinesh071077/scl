import { Quote } from "lucide-react"

const stories = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    course: "Full Stack Development",
    quote:
      "SCL Academy transformed my career. From a non-CS background, I landed my dream job at Google within 4 months of completing the course.",
    package: "18 LPA",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist at Amazon",
    course: "Data Science & AI",
    quote:
      "The hands-on projects and mentorship at SCL Academy gave me the confidence to crack interviews at top MNCs. The placement support was exceptional.",
    package: "14 LPA",
  },
  {
    name: "Anita Desai",
    role: "Cloud Architect at Microsoft",
    course: "Cloud Computing (AWS)",
    quote:
      "The industry-relevant curriculum and real-world projects made all the difference. SCL Academy's placement cell connected me with Microsoft directly.",
    package: "20 LPA",
  },
  {
    name: "Vikash Kumar",
    role: "DevOps Engineer at Flipkart",
    course: "DevOps Engineering",
    quote:
      "I switched from manual testing to DevOps engineering thanks to SCL Academy. The instructors were incredibly supportive throughout my journey.",
    package: "12 LPA",
  },
]

export function SuccessStories() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Success Stories
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Students, Their Achievements
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.name}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="mb-3 h-8 w-8 text-primary/20" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {story.quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">{story.name}</p>
                  <p className="text-xs text-muted-foreground">{story.role}</p>
                  <p className="text-xs text-primary">{story.course}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-2xl font-bold text-accent">{story.package}</span>
                  <p className="text-xs text-muted-foreground">Package</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
