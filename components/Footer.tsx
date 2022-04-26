import Link from 'next/link'
import data from '../data/data.json'
import HeartIcon from './Icons/HeartIcon'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between py-4 sm:flex-row dark:bg-[#252525] border-t-2 border-[#f2f2f2] dark:border-[#333333] -mx-16 px-16 space-y-3 sm:space-y-0">
      <div className="flex -mx-2 text-xs md:text-sm lg:text-base">
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

      <div className="flex items-center space-x-1 text-xs md:text-sm lg:text-base">
        <span>Code with</span>
        <HeartIcon />
        <span>by</span>
        <Link href="https://github.com/isaiah-hamilton">
          <a>Isaiah Hamilton</a>
        </Link>
      </div>

      <p className="text-[#666666] dark:text-gray-300 text-xs md:text-sm lg:text-base">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}

export default Footer
