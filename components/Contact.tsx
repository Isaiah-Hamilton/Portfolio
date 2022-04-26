import Link from 'next/link'
import data from '../data/data.json'

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <div className="grid justify-items-start mb-16">
        <h1 className="title-font sm:text-4xl text-3xl font-bold text-center m-auto mb-10">
          Contact
        </h1>
        <p className="sm:w-[75%] md:w-[60%] lg:w-[45%] text-sm md:text-base text-center m-auto mb-10">
          I&apos;m currently not looking for any Software Engineering opportunities at the moment.
          Though, if you know of any positions available, if you have any questions, or if you want
          to get in touch, please email me down below.
        </p>
        <Link href={`mailto:${data.email}`}>
          <a className="inline-flex py-2 px-6 m-auto focus:outline-none rounded-full text-base transition duration-500 ease-in-out shadow-xl border-2 border-brand-500 dark:bg-[#333333] hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white">
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Contact
