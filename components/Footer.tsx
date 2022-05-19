import Link from 'next/link'
import { Data, footerData } from '../lib/data'
import HeartIcon from './Icons/HeartIcon'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between py-4 sm:flex-row -mx-16 px-16 space-y-3 sm:space-y-0">
      <div className="flex -mx-2 text-xs md:text-sm lg:text-base">
        {footerData.links.map((footer: any, i: number) => {
          return (
            <Link href={footer.url} key={i}>
              <a
                target="_blank"
                className="mx-2 text-[#666666] dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-500"
              >
                {footer.title}
              </a>
            </Link>
          )
        })}
      </div>

      <div className="flex items-center space-x-1 text-xs md:text-sm lg:text-base">
        <span>Code with</span>
        <HeartIcon />
        <span>by</span>
        <Link href={Data.github}>
          <a target="_blank">{footerData.madeBy}</a>
        </Link>
      </div>

      <p className="text-[#666666] dark:text-gray-300 text-xs md:text-sm lg:text-base">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}

export default Footer
