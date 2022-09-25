import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from './Icons'

interface Props {
  darkMode: boolean
  updateTheme: Function
}

function DarkModeToggle(props: Props) {
  const { darkMode, updateTheme } = props

  const toggleDarkMode = () => {
    localStorage.setItem('theme', (!darkMode).toString())
    updateTheme(!darkMode)
  }

  return (
    <motion.div whileTap={{ scale: 0.8 }} className="flex items-center">
      <button type="button" aria-pressed="false" onClick={() => toggleDarkMode()}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
        <span className="sr-only">Theme Toggle</span>
      </button>
    </motion.div>
  )
}

export default DarkModeToggle
