import { useAppDispatch } from '../hooks/hooks'
import { useDarkMode } from '../hooks/useDarkMode'
import { setDarkMode } from '../slices/preferences/preferencesSlice'

import { DarkModeSwitch } from './DarkModeSwitcher'

export const DarkModeContainer: React.FC = () => {
  const dispatch = useAppDispatch()
  const darkMode = useDarkMode()

  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode))
  }

  return <DarkModeSwitch darkMode={darkMode} handleDarkMode={handleDarkMode} />
}
