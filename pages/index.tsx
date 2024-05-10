import { Hero, FeaturedWork, Skills, WorkExperience, Contact, Footer, Navbar } from "@/components"
import { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}

export default Index
