import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import config from '../lib/config'
import { motion } from 'framer-motion'
import React from 'react'

const Portfolio = () => {
  return (
    <section className="projects section" id="projects">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-16">Projects</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {config.projects.map((project: any, i: any) => {
            return (
              <div key={i}>
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25 * i,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  <div className="max-w-md hover:-translate-y-4 transition ease-in-out duration-300">
                    <Link href={project.url}>
                      <a target="_blank" className="block">
                        <div className="relative w-full h-56">
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="rounded-xl"
                            width="100%"
                            height="100%"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                        <div className="p-4">
                          <h5 className="text-xl font-bold">{project.title}</h5>
                          <ReactMarkdown className="mt-2 text-gray-500">
                            {project.description}
                          </ReactMarkdown>
                        </div>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Portfolio
