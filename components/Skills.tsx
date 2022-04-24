import CheckIcon from './Icons/CheckIcon'
import data from '../data/data.json'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="grid justify-items-center mt-4">
        <div className="flex space-x-8">
          {data.skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-600 py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3"
              >
                <h1 className="text-lg font-medium text-center pb-2">{skill.title}</h1>
                <div className="grid grid-cols-2 gap-6">
                  {skill.items.map((item, i) => {
                    return (
                      <div key={i} className="flex items-center">
                        <CheckIcon />
                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
