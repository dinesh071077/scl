import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata = {
  title: "Career & Contact - SCL Academy",
  description:
    "Browse job openings from our hiring partners or contact SCL Academy for course inquiries and placement support.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
