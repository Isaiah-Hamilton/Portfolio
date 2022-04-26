import Link from 'next/link'
import Image from 'next/image'
import data from '../data/data.json'
import { useEffect, useState } from 'react'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme')
    if (isDarkMode) {
      setDarkMode(isDarkMode === 'true')
    }
  }, [])

  return (
    <div className="portfolio section" id="portfolio">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-10">Portfolio</h1>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid md:flex justify-center max-w-lg space-y-10 md:space-x-10 md:space-y-0 mx-auto lg:max-w-none">
            {data.portfolio.map((portfolio, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden max-w-sm rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3"
                >
                  <div className="flex-shrink-0">
                    <Link href={portfolio.link}>
                      <a target="_blank">
                        <Image
                          layout="responsive"
                          width="384"
                          height="212"
                          src={`/${portfolio.imageName}-${
                            darkMode === false ? 'dark' : 'light'
                          }.png`}
                          alt={`${portfolio.title} Image`}
                        />
                        <span className="sr-only">{portfolio.title} link</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-600">
                    <div className="flex-1">
                      <div className="block mt-2">
                        <h1 className="text-xl font-semibold">{portfolio.title}</h1>
                        <p className="mt-3 text-base">{portfolio.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex space-x-1 text-xs">
                        <span>{portfolio.language}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
