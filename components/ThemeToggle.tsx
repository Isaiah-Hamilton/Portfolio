interface Props {
  darkMode: boolean
  updateTheme: Function
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

function DarkModeToggle(props: Props) {
  const { darkMode, updateTheme } = props

  const toggleDarkMode = () => {
    localStorage.setItem('theme', (!darkMode).toString())
    updateTheme(!darkMode)
  }

  return (
    <div className="flex items-center">
      <SunIcon />
      <button
        type="button"
        aria-pressed="false"
        className={`
                relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer 
                transition-colors ease-in-out duration-200 focus:outline-none mx-2 ${
                  darkMode ? 'bg-gray-500' : 'bg-gray-200'
                }
              `}
        onClick={() => toggleDarkMode()}
      >
        <span className="sr-only">Toggle Theme</span>
        <span
          aria-hidden="true"
          className={`
                  ${darkMode ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full
                  bg-white dark:bg-gray-700 shadow-lg transform ring-0 transition ease-in-out duration-200
                `}
        />
      </button>
      <MoonIcon />
    </div>
  )
}

export default DarkModeToggle
