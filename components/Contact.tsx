import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { Data, contactData } from '../lib/data'
import Button from './Button'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="grid justify-items-start mb-16">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
        >
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-center m-auto mb-10">
            Contact
          </h1>
          <ReactMarkdown className="sm:w-[75%] md:w-[60%] lg:w-[45%] text-sm md:text-lg text-center m-auto mb-10">
            {contactData.description}
          </ReactMarkdown>
          <div className="w-fit mx-auto">
            <Button link={`mailto:${Data.email}`} externalLink>
              {contactData.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
