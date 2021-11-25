import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white sm:flex-row">
      <a
        href="#"
        className="text-xl font-bold text-gray-800 dark:text-white dark:hover:text-gray-300"
      >
        Isaiah Hamilton
      </a>
      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        &copy; {new Date().getFullYear()} Isaiah Hamilton. All Rights Reserved.
      </p>

      <div className="flex -mx-2">
        <a
          href="https://twitter.com/Isaiah7Hamilton"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Reddit"
        >
          <IoLogoTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/isaiah-hamilton-093361209/"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Facebook"
        >
          <IoLogoLinkedin />
        </a>

        <a
          href="https://github.com/Isaiah-Hamilton"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Github"
        >
          <IoLogoGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
