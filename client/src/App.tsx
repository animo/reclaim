import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { useAppDispatch } from './hooks/hooks'
import { DashBoard } from './pages/Dashboard'
import { Organization } from './pages/Organization'
import { PageNotFound } from './pages/PageNotFound'
import { Profile } from './pages/Profile'
import { SignIn } from './pages/SignIn'
import { setDarkMode } from './slices/preferences/preferencesSlice'
import { ThemeProvider } from './utils/ThemeContext'

function App() {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const localStorageTheme = localStorage.theme === 'dark'
  const windowMedia = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches

  useEffect(() => {
    if (localStorageTheme || windowMedia) {
      dispatch(setDarkMode(true))
    }
  }, [dispatch, localStorageTheme, windowMedia])

  return (
    <ThemeProvider>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/organization/:name" element={<Organization />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
