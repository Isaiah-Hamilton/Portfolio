import Link from 'next/link'
import data from '../data/data.json'
import portfolio from '../data/portfolio.json'
import ReactMarkdown from 'react-markdown'

type Props = {
  image: string
  title: string
  description: string
  link: string
  language: string
}

export const Card = (props: Props) => {
  const { image, title, description, link, language } = props

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-6">
      <div className="flex-shrink-0">
        <Link href={link}>
          <a>
            <img className="object-cover w-full h-48" src={image} alt="" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-600">
        <div className="flex-1">
          <div className="block mt-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="mt-3 text-base">
              <ReactMarkdown>{description}</ReactMarkdown>
            </p>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex space-x-1 text-xs">
            <span>{language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="portfolio mt-6" id="portfolio">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-2">Portfolio</h1>
      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            {portfolio.map((portfolio: any) => {
              return (
                <Card
                  key={portfolio.id}
                  image={portfolio.image}
                  title={portfolio.title}
                  description={portfolio.description}
                  language={portfolio.language}
                  link={portfolio.link}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
