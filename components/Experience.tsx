import { motion } from 'framer-motion'
import Link from 'next/link'
import config from '../lib/config'

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-10 sm:mx-auto sm:w-fit md:flex md:space-x-10 lg:space-x-48 xl:space-x-96">
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
            <div className="space-y-4 w-[300px] sm:w-[360px] lg:w-[430px]">
              <h1 className="text-5xl sm:text-6xl font-bold w-fit">
                Years of <br /> Experience
              </h1>
              <p className="">
                {`I have ${config.experience.totalYears}+ years of
                experience, with ${config.experience.totalProjects} complete projects and have been
                with ${config.experience.totalCompanies} companies.`}
              </p>
            </div>
          </motion.div>
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
            <div className="space-y-8">
              {config.experience.experience.map((experience: any, i: number) => {
                return (
                  <motion.div whileTap={{ scale: 0.95 }} className="w-fit" key={i}>
                    <Link href={experience.url}>
                      <a target="_blank" className="group">
                        <div className="flex items-center space-x-6">
                          <div className="rounded-full bg-[#121212] dark:bg-white p-4 w-[60px] h-[60px]">
                            <img
                              className="group-hover:scale-110 transition ease-in duration-150"
                              src={experience.image}
                              width={30}
                              height={30}
                              alt={experience.company}
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold group-hover:text-blue-500 transition ease-in duration-150">
                              Frontend Developer
                            </h4>
                            <p className="text-gray-400 text-xs font-normal">
                              {experience.company} · {experience.date}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
