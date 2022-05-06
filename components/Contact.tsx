import { motion } from 'framer-motion'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { data, contactData } from '../lib/data'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="grid justify-items-start mb-16">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
        >
          <h1 className="title-font sm:text-4xl text-3xl font-bold text-center m-auto mb-10">
            Contact
          </h1>
          <ReactMarkdown className="sm:w-[75%] md:w-[60%] lg:w-[45%] text-sm md:text-base text-center m-auto mb-10">
            {contactData.description}
          </ReactMarkdown>
          <motion.div whileTap={{ scale: 0.9 }} className="w-fit mx-auto">
            <Link href={contactData.link || `mailto:${data.email}`}>
              <a className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 mt-4 text-sm sm:text-base text-white bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 rounded-md transition ease-in duration-200">
                {contactData.cta}
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
