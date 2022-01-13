import Link from 'next/link'
import React from 'react'
import data from '../data/data.json'

const Contact = () => {
  return (
    <div className="contact mb-16" id="contact">
      <div className="grid justify-items-start">
        <h1 className="title-font sm:text-4xl text-3xl font-bold text-center m-auto mb-6">
          Contact
        </h1>
        <p className="w-[45%] text-center m-auto mb-6">
          I&apos;m currently looking for internship Software Engineering opportunities! If you know
          of any positions available, if you have any questions, or if you want to get in touch,
          please email me down below.
        </p>
        <Link href={`mailto:${data.url.email}`}>
          <a className="inline-flex py-2 px-6 m-auto focus:outline-none rounded-full text-base transition duration-500 ease-in-out shadow-xl border-2 border-brand-500 dark:bg-[#333333] hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white">
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Contact