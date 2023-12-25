import TrackParallax from './TrackParallax'
import { Experience } from '@/lib/data'
import { ExperienceTypes } from '@/lib/types'
import { Section } from '@/components'
import { motion } from 'framer-motion'

const WorkExperience = () => (
  <Section id='experience' className='relative z-10 overflow-clip'>
    <h2 className='text-[38px] sm:text-[46px] md:text-[54px] lg:text-[72px] text-left lg:text-center tracking-tight font-semibold mb-16'>Work Experience</h2>
    <div className='lg:grid lg:grid-cols-10 lg:gap-8'>
      <div className='hidden lg:block lg:col-span-4 xl:col-span-4 space-y-24'>
        {Experience.map((item: ExperienceTypes) => (
          <motion.div
            key={item.date}
            className='md:text-right text-sm md:text-lg md:font-medium h-[160px]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'all' }}
            transition={{
              duration: 1,
              ease: [0.86, 0, 0.07, 1]
            }}
          >
            {item.date}
          </motion.div>
        ))}
      </div>
      <div className='hidden lg:block'>
        <TrackParallax />
      </div>
      <div className='lg:col-span-5 space-y-24'>
        {Experience.map((item: ExperienceTypes) => (
          <motion.div
            key={item.company}
            className='space-y-4 md:max-w-lg md:h-[160px]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'all' }}
            transition={{
              duration: 1,
              ease: [0.86, 0, 0.07, 1]
            }}
          >
            <div>
              <h4 className='text-xl font-medium'>{item.role}</h4>
              <div className='flex items-center text-sm'>
                <span className=''>{item.company}</span>
                <span className='block md:hidden'>&nbsp;|&nbsp;</span>
                <span className='block md:hidden'>{item.date}</span>
              </div>
            </div>
            <p className='text-sm'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

export default WorkExperience
