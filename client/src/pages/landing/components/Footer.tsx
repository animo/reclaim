import React from 'react'

import logoDark from '../../../assets/dark/logo-dark.png'
import logoLight from '../../../assets/light/logo-light.png'
import { useDarkMode } from '../../../hooks/useDarkMode'

export const Footer: React.FC = () => {
  const darkMode = useDarkMode()

  return (
    <div className="flex dark:text-white justify-center content-center select-none my-8 pb-4 sm:my-4">
      <p className="self-center mr-2 text-sm">POWERED BY</p>
      <a href="https://animo.id" target="_blank">
        <img className="m-2 h-3" src={darkMode ? logoDark : logoLight} alt="Logo" />
      </a>
    </div>
  )
}
