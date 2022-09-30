import config from '../lib/config'
import { motion } from 'framer-motion'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" className="hero section">
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
            <div className="text-2xl sm:text-4xl md:text-5xl md:leading-[1.2] lg:text-6xl lg:leading-[1.2] font-bold">
              <div className="flex space-x-2">
                <span>Hi, my name is</span>
                <span className="text-blue-500">{config.name.split(' ').slice(0, -1).join()}</span>
              </div>
              I&apos;m a {config.role}.
            </div>
            {config.hero.cta.map((cta: { url: string; text: string }, i: number) => (
              <Button key={i} link={cta.url}>
                {cta.text}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
