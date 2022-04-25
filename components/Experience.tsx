import Link from 'next/link'
import data from '../data/data.json'

const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-10">Experience</h1>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex max-w-lg space-x-10 mx-auto lg:max-w-none justify-center">
            {data.experience.map((experience, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3"
                >
                  <Link href={experience.link}>
                    <a target="_blank">
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-600">
                        <div className="flex-1">
                          <div className="block mt-2">
                            <div>
                              <h1 className="text-xl font-semibold">{experience.company}</h1>
                              <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
                                {experience.date}
                              </p>
                            </div>
                            <p className="mt-3 text-base">{experience.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center mt-6">
                          <div className="flex space-x-1 text-base">
                            <span>{experience.role}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
