import Link from 'next/link'
import experience from '../data/experience.json'
import ReactMarkdown from 'react-markdown'

type Props = {
  title: string
  description: string
  link: string
  role: string
  date: string
}

export const Card = (props: Props) => {
  const { title, description, link, role, date } = props

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3">
      <Link href={link}>
        <a target="_blank">
          <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-600">
            <div className="flex-1">
              <div className="block mt-2">
                <div>
                  <h1 className="text-xl font-semibold">{title}</h1>
                  <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">{date}</p>
                </div>
                <p className="mt-3 text-base">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex space-x-1 text-base">
                <span>{role}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-2">Experience</h1>
      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            {experience.map((experience: any) => {
              return (
                <Card
                  key={experience.id}
                  title={experience.company}
                  description={experience.description}
                  role={experience.role}
                  date={experience.date}
                  link={experience.link}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
