import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CoursesList } from "@/components/courses/courses-list"
import { CoursesHero } from "@/components/courses/courses-hero"

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CoursesHero />
        <CoursesList />
      </main>
      <Footer />
    </>
  )
}
