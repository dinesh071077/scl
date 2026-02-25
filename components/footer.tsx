import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-mono text-xl font-bold tracking-tight">
                SCL Academy
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Empowering students with industry-relevant IT skills and ensuring successful career placements since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/about", label: "About Us" },
                { href: "/placements", label: "Placements" },
                { href: "/contact", label: "Career & Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider">
              Popular Courses
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Full Stack Development",
                "Data Science & AI",
                "Cloud Computing",
                "Cybersecurity",
                "DevOps Engineering",
              ].map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Workafella, Infantry Road, Co-working Space, Bangalore 560001</span>
              </li>
              <li>
                <a href="tel:+919319552561" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+91 93195 52561</span>
                </a>
              </li>
              <li>
                <a href="mailto:evolvesolutionspvtltd@gmail.com" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>evolvesolutionspvtltd@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/50">
            {'© 2026 SCL Academy. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
