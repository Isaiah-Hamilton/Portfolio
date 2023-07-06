import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from "react"

const useParallax = (value: MotionValue<number>, distance: number, initialDistance: number) => {
  return useTransform(value, [0, 1], [distance, initialDistance]);
}

const TrackParallax = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end start', 'start end'] })
  // update start and end values to change the parallax effect, also update the height of the div on line 16
  const y = useParallax(scrollYProgress, 150, 20)

  return (
    <div className='lg:col-span-2 block relative h-full'>
      <div ref={ref} className='w-4 -mt-12 h-[185%] mx-auto track-color z-10' />
      <motion.img style={{ y }} className='absolute top-0 bottom-0 w-6 lg:left-[28%] xl:left-[35%]' src='https://railway.app/illustrations/trains/01-train-light.svg' alt='train' />
    </div>
  )
}

export default TrackParallax