import { Footer as footer } from '@/lib/data'
import { FooterTypes } from '@/lib/types'
import { Section } from '@/components'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => (
  <div className='bg-[#dfddd9]'>
    <Section className='bg-[#dfddd9] pb-4'>
      <motion.div
        className='h-[1px] bg-[#101418] rounded-full'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: '100%' }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.86, 0, 0.07, 1]
        }}
      />
      <div className='flex items-center justify-between mt-4'>
        <motion.div
          className='text-xs'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.86, 0, 0.07, 1]
          }}
        >
          &copy; <Link href="https://github.com/isaiah-hamilton" target='_blank'>Isaiah Hamilton</Link></motion.div>
        <div className='space-x-4'>
          {footer.map((item: FooterTypes) => (
            <motion.div
              key={item.text}
              className='inline-block text-xs'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.86, 0, 0.07, 1]
              }}
            >
              <Link href={item.url} target='_blank'>{item.text}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  </div>
)

export default Footer