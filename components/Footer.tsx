import Link from 'next/link'
import data from '../data/data.json'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between py-4 sm:flex-row dark:bg-[#252525] border-t-2 border-[#f2f2f2] dark:border-[#333333] -mx-16 px-16">
      <div className="flex -mx-2">
        <Link href={data.twitter}>
          <a className="mx-2 text-[#666666] dark:text-gray-300 hover:text-brand-400 dark:hover:text-brand-500">
            Twitter
          </a>
        </Link>
        <Link href={data.github.url}>
          <a className="mx-2 text-[#666666] dark:text-gray-300 hover:text-brand-400 dark:hover:text-brand-500">
            Github
          </a>
        </Link>
        <Link href={data.linkedin}>
          <a className="mx-2 text-[#666666] dark:text-gray-300 hover:text-brand-400 dark:hover:text-brand-500">
            Linkedin
          </a>
        </Link>
      </div>

      <p className="py-2 text-[#666666] dark:text-gray-300 sm:py-0">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}

export default Footer
