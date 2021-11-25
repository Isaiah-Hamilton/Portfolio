import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white m-20 my-3 dark:bg-gray-800">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-xl font-bold text-gray-800 dark:text-white lg:text-xl dark:hover:text-gray-300">
                Isaiah Hamilton
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center hidden md:block md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href=""
            >
              Home
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#about"
            >
              About
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#work"
            >
              Work
            </a>
            <a
              className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
              href="#contact"
            >
              Contact
            </a>
          </div>
          {/* uncomment when dark mode is ready */}
          {/*<div className="flex justify-center md:block">
            <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
  </div>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
