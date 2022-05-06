import Link from 'next/link'
import { heroData } from '../lib/data'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="flex items-center">
          <div className="space-y-">
            <div className="text-xl sm:text-4xl md:text-5xl md:leading-[1.2] font-bold">
              <div className="flex space-x-2">
                <span>Hi, my name is</span>
                <motion.div whileTap={{ scale: 0.9 }} className="w-fit cursor-pointer">
                  <span className="hero-title-color text-indigo-500 dark:text-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-500 transition ease-in duration-200">
                    {heroData.name || 'name'}
                  </span>
                </motion.div>
              </div>
              I&apos;m a {heroData.title || 'Unknown Developer'}.
            </div>
            <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
              <Link href={heroData.link}>
                <a className="inline-flex items-center px-6 sm:px-8 py-1.5 sm:py-3 mt-4 text-xs sm:text-base text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded-md transition ease-in duration-200">
                  {heroData.cta || 'know more'}
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
