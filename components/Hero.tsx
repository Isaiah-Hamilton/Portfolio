import { Section } from '@/components'
import { motion } from 'framer-motion'
import { HeroText } from '@/lib/data'

const Hero = () => {
  let delay = 0.5
  return (
    <div className='h-screen flex items-center'>
      <Section className='!py-0 !px-0 sm:!px-6 md:!px-10 lg:!px-20 hidden sm:block'>
        {HeroText.map((item: string[], i: number) => (
          <div key={i} className='flex items-center w-fit'>
            {item.map((word: string, j: number) => {
              delay += 0.1
              delay = Math.round(delay * 10) / 10
              return (
                <motion.div
                  key={word}
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4 + (i * 0.2),
                    times: [0, 0.2, 0.5, 0.8, 1],
                    duration: 1.4,
                    ease: 'easeInOut'
                  }}
                >
                  <motion.h1
                    className='text-[38px] sm:text-[46px] md:text-[54px] lg:text-[72px] xl:text-[88px] md:leading-[1.25em] lg:leading-[6.85rem] tracking-tight font-semibold'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: delay,
                      duration: 0.6,
                      ease: 'easeInOut'
                    }}
                  >
                    {word}{j !== item.length - 1 && <>&nbsp;</>}
                  </motion.h1>
                </motion.div>
              )
            })}
          </div>
        ))}
      </Section>
      <Section className='!py-0 !px-0 block sm:hidden'>
        <motion.div
          className='w-fit mx-auto'
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.86, 0, 0.07, 1]
          }}
        >
          <h1 className='text-center text-[32px] md:text-[88px] md:leading-[6.85rem] tracking-tight font-semibold'>
            Crafting amazing digital experiences that people love
          </h1>
        </motion.div>
      </Section>
    </div >
  )
}

export default Hero