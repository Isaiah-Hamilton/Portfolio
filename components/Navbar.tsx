import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import data from '../data/data.json'
import GithubIcon from './Icons/GithubIcon'

type Props = {
  darkMode: boolean
  updateTheme: Function
}

const Navbar = (props: Props) => {
  const { darkMode, updateTheme } = props

  return (
    <div className="container mx-auto md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-2xl font-semibold transition-colors duration-200 transform">
              Isaiah
              <span className="ml-1 font-normal">Hamilton</span>
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

      <div className="items-center md:flex">
        <div className="flex flex-col md:flex-row md:mx-6">
          <Link href="/">
            <a className="my-1 text-sm font-medium transition-colors duration-200 transform dark:text-gray-200 md:mx-4 md:my-0 hover:text-brand-400 dark:hover:text-brand-500 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="#portfolio">
            <a className="my-1 text-sm font-medium transition-colors duration-200 transform dark:text-gray-200 md:mx-4 md:my-0 hover:text-brand-400 dark:hover:text-brand-500 cursor-pointer">
              Portfolio
            </a>
          </Link>
          <Link href="#contact">
            <a className="my-1 text-sm font-medium transition-colors duration-200 transform dark:text-gray-200 md:mx-4 md:my-0 hover:text-brand-400 dark:hover:text-brand-500 cursor-pointer">
              Contact
            </a>
          </Link>
          <Link href={data.url.github.repos.portfolio}>
            <a
              target="_blank"
              className="my-1 text-sm font-medium transition-colors duration-200 transform dark:text-gray-200 md:mx-4 md:my-0 hover:text-brand-400 dark:hover:text-brand-500 cursor-pointer"
            >
              <GithubIcon />
            </a>
          </Link>
        </div>

        <div className="flex justify-center md:block">
          <ThemeToggle darkMode={darkMode} updateTheme={updateTheme} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
