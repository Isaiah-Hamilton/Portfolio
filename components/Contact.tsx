import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { api } from '../lib/api'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const sendEmail = (event: FormEvent) => {
    event.preventDefault()

    const formData = {
      name,
      email,
      subject,
      message,
    }

    api
      .post('/mail', formData)
      .then((response) => {
        console.log(response)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className="contact section" id="contact">
      <div className="grid justify-items-start mb-16">
        <motion.div
          className="w-fit mx-auto"
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
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-center m-auto mb-10">
            Let&apos;s collaborate
          </h1>
          <form
            id="contact-form"
            className="max-w-2xl mx-auto flex flex-col rounded-2xl shadow-lg dark:shadow-none dark:bg-[#1b1b1d] p-8 py-12 space-y-8"
            onSubmit={sendEmail}
          >
            <div className="flex space-x-8">
              <input
                className="rounded-xl border border-gray-200 p-4 py-2 w-full dark:border-[#212125] dark:bg-[#1f1f22]"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="rounded-xl border border-gray-200 p-4 py-2 w-full dark:border-[#212125] dark:bg-[#1f1f22]"
                placeholder="Example@email.com"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <input
              className="rounded-xl border border-gray-200 p-4 py-2 w-full dark:border-[#212125] dark:bg-[#1f1f22]"
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <textarea
              className="rounded-xl border border-gray-200 p-4 py-2 w-full dark:border-[#212125] dark:bg-[#1f1f22]"
              placeholder="Message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
              <button
                className={`inline-flex items-center mt-4 text-sm sm:text-base text-white ${
                  sent ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                } rounded-md px-6 sm:px-8 py-2 sm:py-3 transition ease-in duration-150`}
                onClick={() => setSent(true)}
                disabled={sent}
                type="submit"
              >
                {sent ? 'Sent' : 'Send Message'}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
