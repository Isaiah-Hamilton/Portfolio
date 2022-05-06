import Link from 'next/link'
import { experienceData } from '../lib/data'

const Experience = () => {
  return (
    <div className="experience section" id="experience">
      <h1 className="text-4xl font-semibold mb-16">Experience</h1>
      <div className="grid grid-cols-3 gap-6">
        {experienceData.experience.map((experience: any, i: number) => {
          return (
            <Link href={experience.url} key={i}>
              <a target="_blank" className="block p-8 rounded-xl bg-gray-900 max-w-md">
                <div className="flex items-center space-x-3 w-fit">
                  <img src={experience.image} width={30} height={30} />
                  <h3 className="text-lg font-bold text-white">
                    {experience.company} - {experience.role}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-gray-300">{experience.description}</p>
                <p className="mt-4 text-xs text-gray-300">{experience.date}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
