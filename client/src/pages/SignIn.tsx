import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { buttonHover, fadeDelay } from '../FramerAnimations'
import { useIsSignedIn } from '../slices/user/userSelectors'
import { signIn } from '../slices/user/userSlice'

export const SignIn = () => {
  const isSignedIn = useIsSignedIn()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard')
    }
  }, [isSignedIn])

  const onPressSignIn = () => {
    dispatch(signIn({ email: 'henk@animo.id' }))
  }

  const onPressRegister = () => {
    alert('Register')
  }

  return (
    <div>
      <h1> Sign in</h1>
      <motion.button
        variants={fadeDelay}
        whileHover={buttonHover}
        className="bg-animo-black dark:bg-animo-white text-animo-white dark:text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
        onClick={onPressSignIn}
      >
        Sign In
      </motion.button>
      <motion.button
        variants={fadeDelay}
        whileHover={buttonHover}
        className="bg-animo-black dark:bg-animo-white text-animo-white dark:text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
        onClick={onPressRegister}
      >
        Register
      </motion.button>
    </div>
  )
}
