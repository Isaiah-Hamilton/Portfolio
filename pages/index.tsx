import { Hero, FeaturedWork, WorkExperience, Contact, Footer, Navbar } from "@/components"
import { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}

export default Index