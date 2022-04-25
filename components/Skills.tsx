import CheckIcon from './Icons/CheckIcon'
import data from '../data/data.json'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-10">Skills</h1>
      <div className="grid justify-items-center">
        <div className="flex space-x-10">
          {data.skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-white dark:bg-gray-600 py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3"
              >
                <h1 className="text-lg font-medium text-center pb-4">{skill.title}</h1>
                <div className="grid grid-cols-2 gap-8 justify-items-start">
                  {skill.items.map((item, i) => {
                    return (
                      <div key={i} className="flex items-center space-x-1">
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
