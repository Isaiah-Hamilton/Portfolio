import CheckIcon from './Icons/CheckIcon'

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h1 className="title-font sm:text-4xl text-3xl font-bold text-center mb-2">Skills</h1>

      <div className="grid justify-items-center mt-4">
        <div className="flex space-x-8">
          <div className="bg-white dark:bg-gray-600 py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3">
            <h1 className="text-lg font-medium text-center pb-2">Frontend</h1>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Tailwind</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Tailwind</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-600 py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-3">
            <h1 className="text-lg font-medium text-center pb-2">Backend</h1>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Tailwind</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Tailwind</span>
              </div>
              <div className="flex space-x-1 my-2">
                <CheckIcon />
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
