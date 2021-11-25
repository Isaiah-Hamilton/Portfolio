import type { NextPage } from "next";
import SEO from "../components/SEO";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="App">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
