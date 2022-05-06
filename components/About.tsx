import Image from 'next/image'
import Link from 'next/link'
import { aboutData } from '../lib/data'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeIn', delay: 0.25, duration: 1.25 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="relative w-full h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 1,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              <Image
                src={'https://www.hyperui.dev/photos/man-1.jpeg' || aboutData.image}
                alt="profile picture"
                className="absolute inset-0 object-cover rounded-xl"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
          >
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
              <ReactMarkdown className="mt-4 text-sm sm:text-base text-gray-500">
                {aboutData.description}
              </ReactMarkdown>
              <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
                <Link href={aboutData.link}>
                  <a className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 mt-4 text-sm sm:text-base text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded-md transition ease-in duration-200">
                    {aboutData.cta}
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
