import Image from "next/image";
import PortfolioImg from "../assets/PortfolioImg.png";

const Work = () => {
  return (
    <section id="work">
      <div className="relative px-4 py-12 sm:px-6 lg:pt-20 lg:pb-30 lg:px-16">
        <h1 className="text-4xl text-center font-bold text-gray-800 pb-20 dark:text-gray-100">
          Work
        </h1>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image src={PortfolioImg} alt="Portfolio Image" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-neutral-600">
                      {" "}
                      Portfolio{" "}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {" "}
                      A personal Portfolio website that I built with nextjs and
                      tailwind.{" "}
                    </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <span> Nexjs </span>
                    <span aria-hidden="true"> · </span>
                    <span> Tailwind </span>
                    <span aria-hidden="true"> · </span>
                    <span> Deno </span>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:translate-y-60">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://wickedpopups.com/images/ogTwitter.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href="https://twitter.com/g_perales" className="block mt-2">
                    <p className="text-xl font-semibold text-neutral-600"> How to use search engine optimization to drive sales </p>
                    <p className="mt-3 text-base text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium. </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/g_perales">
                      <span className="sr-only">Gabriel Perales</span>
                      <img className="w-10 h-10 rounded-full" src="https://pbs.twimg.com/profile_images/1442898475218194432/61p-BNsg_400x400.jpg" alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a href="#" className="hover:underline"> Gabriel Perales </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-300">
                      <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 4 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:translate-y-60">
              <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src="https://www.wickedtemplates.com/images/opengraph/openGraphTwitter.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-neutral-600"> Improve your customer experience </p>
                    <p className="mt-3 text-base text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic. </p>
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/wickedlabsHQ">
                      <span className="sr-only">Wicked Labs</span>
                      <img className="w-10 h-10 rounded-full" src="https://pbs.twimg.com/profile_images/1426761460357738499/LtQow-mk_400x400.jpg" alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a href="https://twitter.com/wickedlabsHQ" className="hover:underline"> Wicked Labs </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-300">
                      <time dateTime="2020-02-12"> Feb 12, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 11 min read </span>
                    </div>
                  </div>
                </div>
              </div>
  </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
