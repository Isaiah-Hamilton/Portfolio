import Link from 'next/link'
import config from '../lib/config'
import { HeartIcon } from './Icons'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between py-4 sm:flex-row -mx-16 px-16 space-y-3 sm:space-y-0">
      <div className="flex -mx-2 text-xs md:text-sm lg:text-base">
        {config.footer.map((footer: any, i: number) => {
          return (
            <Link href={footer.url} key={i}>
              <a
                target="_blank"
                className="mx-2 text-[#666666] dark:text-gray-300 hover:text-blue-500"
              >
                {footer.text}
              </a>
            </Link>
          )
        })}
      </div>

      <div className="flex items-center space-x-1 text-xs md:text-sm lg:text-base">
        <span>Code with</span>
        <HeartIcon width={'24'} height={'24'} />
        <span>by</span>
        <Link href={config.github}>
          <a target="_blank">{config.name}</a>
        </Link>
      </div>

      <p className="text-[#666666] dark:text-gray-300 text-xs md:text-sm lg:text-base">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}

export default Footer
