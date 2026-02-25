import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlacementsHero } from "@/components/placements/placements-hero"
import { PlacementStats } from "@/components/placements/placement-stats"
import { HiringPartners } from "@/components/placements/hiring-partners"
import { PlacementProcess } from "@/components/placements/placement-process"
import { SuccessStories } from "@/components/placements/success-stories"

export default function PlacementsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlacementsHero />
        <PlacementStats />
        <PlacementProcess />
        <HiringPartners />
        <SuccessStories />
      </main>
      <Footer />
    </>
  )
}
