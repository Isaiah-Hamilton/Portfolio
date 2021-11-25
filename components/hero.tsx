import Image from "next/image";
import { SiGithub } from "react-icons/si";
import HeroImg from "../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section className="m-auto lg:mx-20 lg:my-32">
      <div className="max-w-7xl">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {" "}
              Full Stack Developer{" "}
            </h1>
            <p className="mb-4 text-base leading-relaxed text-left text-gray-500">
              {" "}
              Hello my name is Isaiah, and I&apos;m a full stack developer based
              in Atlanta. I&apos;m currently looking for internships.{" "}
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <a href="#contact">
                  <button
                    className="
                    items-center
                    block px-10
                    py-4 text-base
                    font-medium
                    text-center
                    text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-blue-400
                    rounded-xl
                    hover:bg-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                  >
                    {" "}
                    Contact Me{" "}
                  </button>
                </a>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button
                  className="
                  items-center
                  block
                  px-10
                  py-3.5
                  text-base
                  font-medium
                  text-center
                  text-blue-400
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-2 border-white
                  shadow-md
                  rounded-xl
                  hover:text-blue-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-500
                "
                >
                  {" "}
                  Resume{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0">
            <div>
              <div className="flex justify-center w-full max-w-lg">
                <div className="border-8 border-blue-400 h-96 w-96 rounded-full bg-blue-400">
                  <Image
                    className="rounded-full border-solid border-4 border-blue-400 h-96 w-96"
                    src={HeroImg}
                    alt="Isiah Hamilton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
