import React from 'react'

import logoDark from '../assets/dark/logo-dark.png'
import logoLight from '../assets/light/logo-light.png'
import { useDarkMode } from '../hooks/useDarkMode'

export const Logo: React.FC = () => {
  const darkMode = useDarkMode()

  return (
    <div className="flex-1-1 m-auto">
      <a href="/">
        <img className="h-6 sxl:h-8" src={darkMode ? logoDark : logoLight} alt="Logo" />
      </a>
    </div>
  )
}
