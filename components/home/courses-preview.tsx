import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Database, Cloud, Shield, Terminal, Brain } from "lucide-react"

const courses = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Master React, Node.js, and modern web technologies to build complete applications from front to back.",
    duration: "6 Months",
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    description: "Learn Python, machine learning, deep learning, and data analytics to solve real-world problems.",
    duration: "8 Months",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Get certified in AWS, Azure, and GCP. Deploy and manage scalable cloud infrastructure.",
    duration: "5 Months",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect organizations from cyber threats with ethical hacking, penetration testing, and security ops.",
    duration: "6 Months",
  },
  {
    icon: Terminal,
    title: "DevOps Engineering",
    description: "Automate CI/CD pipelines, containerize with Docker, and orchestrate with Kubernetes.",
    duration: "5 Months",
  },
  {
    icon: Database,
    title: "Database Administration",
    description: "Master SQL, NoSQL, database design, performance tuning, and enterprise data management.",
    duration: "4 Months",
  },
]

export function CoursesPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Our Programs
          </span>
          <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Industry-Ready IT Courses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Designed by industry experts and updated regularly to match current market demands and hiring trends.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <course.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-mono text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {course.duration}
                  </span>
                  <Link href="/courses" className="text-sm font-medium text-primary hover:underline">
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/courses">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
