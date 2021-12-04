import Image from "next/image";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import AboutImg from "../assets/AboutImg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto lg:mx-20 lg:py-32 bg-white dark:bg-gray-800"
    >
      <div className="container">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              About Me
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              I&apos;m a 15 year old full stack developer based in Atlanta. I
              have strong passion a for coding and building things that impact
              people&apos;s day to day lives and to make them better. I am
              interested in Typescript, Next.js, Deno, Supabase, and building
              consumer apps + developer tools. In my free time, you can see
              skating, gaming, exploring, and talking to new people.
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <a className="mx-2" href="https://www.linkedin.com/in/isaiah-hamilton-093361209/" aria-label="Linkedin">
                <IoLogoLinkedin color="#1F2937" size={30} />
              </a>

              <a className="mx-2" href="https://github.com/Isaiah-Hamilton" aria-label="GitHub">
                <IoLogoGithub color="#1F2937" size={30} />
              </a>

              <a className="mx-2" href="https://twitter.com/Isaiah7Hamilton" aria-label="Twitter">
                <IoLogoTwitter color="#1F2937" size={30} />
              </a>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-full h-64 rounded-xl shadow"
                  src={AboutImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
