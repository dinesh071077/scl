"use client"

import { Mail, Phone, MapPin, Clock, Send, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const WHATSAPP_NUMBER = "919319552561"
const WHATSAPP_URL = "https://wa.me/919319552561?text="
const EMAIL_ADDRESS = "evolvesolutionspvtltd@gmail.com"

const jobOpenings = [
  {
    title: "Full Stack Developer",
    location: "Chennai",
    type: "Full-time",
    experience: "0-2 years",
  },
  {
    title: "React Native Developer",
    location: "Chennai",
    type: "Full-time",
    experience: "0-2 years",
  },
  {
    title: "Python Developer",
    location: "Chennai",
    type: "Full-time",
    experience: "0-2 years",
  },
  {
    title: "Java Python Full Stack Intern",
    location: "Chennai",
    type: "Internship",
    experience: "Freshers",
  },
]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSending(true)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Build WhatsApp message
    const whatsappMessage = [
      `*New Contact Form Submission*`,
      ``,
      `*Name:* ${firstName} ${lastName}`,
      `*Email:* ${email}`,
      phone ? `*Phone:* ${phone}` : "",
      `*Subject:* ${subject}`,
      ``,
      `*Message:*`,
      message,
    ]
      .filter(Boolean)
      .join("\n")

    // Build email body
    const emailSubject = `SCL Academy - ${subject}`
    const emailBody = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Subject: ${subject}`,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n")

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )

    // Send email via mailto
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    const emailAnchor = document.createElement("a")
    emailAnchor.href = mailtoLink
    emailAnchor.click()

    setIsSending(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-background/60">
            Career & Contact
          </span>
          <h1 className="text-balance font-mono text-4xl font-bold tracking-tight md:text-5xl">
            Start Your IT Career Today
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
            Browse open positions from our hiring partners or get in touch with us to learn more about our courses and placement support.
          </p>
        </div>
      </section>

      {/* Career Openings */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
              Open Positions
            </span>
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Current Job Openings
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Exclusive opportunities for SCL Academy graduates through our hiring partners.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {job.type}
                  </span>
                </div>
                <h3 className="mb-1 font-mono text-base font-bold text-foreground">{job.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {job.experience}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <a
                    href={`${WHATSAPP_URL}${encodeURIComponent(`Hi SCL Academy, I am interested in the ${job.title} position in ${job.location}. Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary py-20" id="contact-form">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block font-mono text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </span>
            <h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Have questions about our courses or placement support? We are here to help.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 font-mono text-lg font-bold text-foreground">Send a Message</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Send className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-mono text-lg font-bold text-foreground">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Course inquiry, Placement support..." required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals and how we can help..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSending}>
                    <Send className="mr-2 h-4 w-4" /> {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 font-mono text-lg font-bold text-foreground">Contact Information</h3>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Workafella, Infantry Road, Co-working Space, Bangalore 560001</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+919319552561" className="block text-sm text-muted-foreground transition-colors hover:text-primary">+91 93195 52561</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:evolvesolutionspvtltd@gmail.com" className="block text-sm text-muted-foreground transition-colors hover:text-primary">evolvesolutionspvtltd@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Working Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9796!2d77.5990!3d12.9757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167f0c22e285%3A0xb2f8a8e0e92d9cf8!2sInfantry%20Rd%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCL Academy - Workafella, Infantry Road, Bangalore"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
