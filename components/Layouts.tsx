import { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { hideHeader = false, hideFooter = false, children } = props
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
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-white dark:bg-[#131316] text-gray-600 dark:text-white h-screen px-8 pt-4">
        {!hideHeader && <Navbar darkMode={darkMode} updateTheme={updateTheme} />}
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  )
}

export default DefaultLayout
