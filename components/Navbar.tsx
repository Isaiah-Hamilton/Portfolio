import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { navData } from '../lib/data'
import { GithubIcon } from './Icons/Index'
import { motion } from 'framer-motion'

type Props = {
  darkMode: boolean
  updateTheme: Function
}

const Navbar = (props: Props) => {
  const { darkMode, updateTheme } = props

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link href="/">
              <a className="text-2xl font-semibold transition-colors duration-200 transform flex space-x-2">
                <Image
                  src={darkMode ? '/logo-light.svg' : '/logo-dark.svg'}
                  alt="Logo"
                  width={20}
                  height={20}
                />
                <div className="text-base text-[#24282D] dark:text-white">
                  {navData.title.first}
                  <span className="ml-1">{navData.title.last}</span>
                </div>
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
    </motion.div>
  )
}

export default Navbar
