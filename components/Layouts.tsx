import { useState, useEffect } from 'react'
import Navbar from './Navbar'

type Props = {
  hideHeader?: boolean
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { hideHeader = false, children } = props
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme')
    if (isDarkMode) {
      setDarkMode(isDarkMode === 'true')
      document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
    }
  }, [])

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? 'dark' : ''
    setDarkMode(isDarkMode)
  }

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white h-screen pt-10 px-16">
      {!hideHeader && <Navbar darkMode={darkMode} updateTheme={updateTheme} />}
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
