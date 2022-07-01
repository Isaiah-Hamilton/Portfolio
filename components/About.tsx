import Image from 'next/image'
import Button from './Button'
import config from '../lib/config'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid justify-items-center grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="relative w-full max-w-sm h-64 overflow-hidden rounded-lg sm:h-80 sm:max-w-md lg:h-full lg:max-w-none lg:order-last">
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
                src={config.about.image}
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
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">About Me</h2>
              <ReactMarkdown className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl">
                {config.about.description}
              </ReactMarkdown>
              {config.about.cta.map((cta: { url: string; text: string }, i: number) => (
                <Button key={i} link={cta.url} externalLink>
                  {cta.text}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
