import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2, Database, Cloud, Shield, Terminal, Brain,
  Smartphone, BarChart3, Globe, Clock, Users, BookOpen, ArrowRight
} from "lucide-react"

const allCourses = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Master front-end and back-end development with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Build and deploy production-ready applications.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    modules: 24,
    projects: 8,
    highlights: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "REST & GraphQL APIs", "CI/CD Deployment"],
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    description: "Dive deep into Python, machine learning, deep learning, NLP, and computer vision. Work with real datasets and build intelligent systems.",
    duration: "8 Months",
    level: "Intermediate",
    modules: 32,
    projects: 10,
    highlights: ["Python & R", "Machine Learning", "Deep Learning / TensorFlow", "NLP & Computer Vision", "Data Visualization"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Get multi-cloud certified with hands-on training on AWS, Azure, and Google Cloud Platform. Design, deploy, and manage enterprise cloud infrastructure.",
    duration: "5 Months",
    level: "Intermediate",
    modules: 20,
    projects: 6,
    highlights: ["AWS Solutions Architect", "Azure Fundamentals", "GCP Essentials", "Cloud Security", "Serverless Architecture"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Become a certified cybersecurity professional. Learn ethical hacking, penetration testing, SIEM, incident response, and security compliance.",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    modules: 22,
    projects: 7,
    highlights: ["Ethical Hacking", "Penetration Testing", "SIEM & SOC", "Network Security", "Compliance & Governance"],
  },
  {
    icon: Terminal,
    title: "DevOps Engineering",
    description: "Master the DevOps toolchain including Docker, Kubernetes, Jenkins, Terraform, Ansible, and monitoring tools for seamless software delivery.",
    duration: "5 Months",
    level: "Intermediate",
    modules: 18,
    projects: 6,
    highlights: ["Docker & Kubernetes", "Jenkins CI/CD", "Terraform & Ansible", "Monitoring & Logging", "GitOps Workflows"],
  },
  {
    icon: Database,
    title: "Database Administration",
    description: "Become an expert in relational and NoSQL databases. Learn design patterns, performance tuning, replication, and enterprise data management.",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    modules: 16,
    projects: 5,
    highlights: ["MySQL & PostgreSQL", "MongoDB & Redis", "Query Optimization", "Replication & Backup", "Data Modeling"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with React Native and Flutter. Learn native APIs, state management, and app store deployment.",
    duration: "5 Months",
    level: "Beginner to Intermediate",
    modules: 20,
    projects: 6,
    highlights: ["React Native", "Flutter & Dart", "State Management", "Native APIs", "App Store Publishing"],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Transform raw data into business insights. Master Excel, SQL, Tableau, Power BI, and statistical methods for data-driven decision making.",
    duration: "4 Months",
    level: "Beginner",
    modules: 16,
    projects: 5,
    highlights: ["Excel & SQL", "Tableau & Power BI", "Statistical Analysis", "Data Storytelling", "Dashboard Design"],
  },
  {
    icon: Globe,
    title: "Digital Marketing & SEO",
    description: "Learn SEO, SEM, social media marketing, content strategy, and analytics to drive growth for businesses in the digital age.",
    duration: "3 Months",
    level: "Beginner",
    modules: 14,
    projects: 4,
    highlights: ["SEO & SEM", "Social Media Marketing", "Google Ads & Analytics", "Content Strategy", "Email Marketing"],
  },
]

const WHATSAPP_BASE_URL = "https://wa.me/919319552561?text="

export function CoursesList() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {allCourses.map((course) => (
            <Card key={course.title} className="group overflow-hidden border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-6 lg:p-8">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <course.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-mono text-xl">{course.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {course.highlights.map((h) => (
                        <span key={h} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {h}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="flex flex-col gap-4 border-t border-border bg-secondary/50 p-6 lg:w-64 lg:justify-center lg:border-l lg:border-t-0">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 shrink-0" />
                      <span>{course.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 shrink-0" />
                      <span>{course.projects} Projects</span>
                    </div>
                  </div>
                  <Button asChild className="w-full gap-2">
                    <a href={`${WHATSAPP_BASE_URL}${encodeURIComponent(`Hi SCL Academy, I am interested in the ${course.title} course. Please share more details.`)}`} target="_blank" rel="noopener noreferrer">
                      Enroll <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
