import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { navData } from '../lib/data'
import MenuIcon from './Icons/MenuIcon'
import GithubIcon from './Icons/GithubIcon'
import { motion } from 'framer-motion'

type Props = {
  darkMode: boolean
  updateTheme: Function
}

const Navbar = (props: Props) => {
  const { darkMode, updateTheme } = props

  return (
    <div className="mx-auto md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link href="/">
            <a className="text-2xl font-semibold transition-colors duration-200 transform">
              {navData.title.first}
              <span className="ml-1 font-normal">{navData.title.last}</span>
            </a>
          </Link>
        </motion.div>

        <div className="flex md:hidden">
          <div className="flex justify-center md:block">
            <ThemeToggle darkMode={darkMode} updateTheme={updateTheme} />
          </div>
        </div>
      </div>

      <div className="items-center hidden md:flex">
        <div className="flex flex-col md:flex-row md:mx-6">
          {navData.items.map((item: any, i: number) => {
            return (
              <motion.div whileTap={{ scale: 0.9 }} key={i}>
                <Link href={item.url}>
                  <a className="my-1 text-sm font-medium transition-colors duration-200 transform hover:text-indigo-600 dark:hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer">
                    {item.title}
                  </a>
                </Link>
              </motion.div>
            )
          })}
          {navData.source === '' ? (
            <div></div>
          ) : (
            <Link href={navData.source}>
              <a
                target="_blank"
                rel="noopener"
                className="my-1 text-sm font-medium transition-colors duration-200 transform md:mx-4 md:my-0 cursor-pointer"
              >
                <motion.div whileTap={{ scale: 0.85 }}>
                  <GithubIcon />
                </motion.div>
                <span className="sr-only">Github link</span>
              </a>
            </Link>
          )}
        </div>

        <div className="flex justify-center md:block">
          <ThemeToggle darkMode={darkMode} updateTheme={updateTheme} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
