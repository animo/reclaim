import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import { buttonHover, fadeDelay } from '../FramerAnimations'
import { signOut } from '../slices/user/userSlice'
export const DashBoard = () => {
  const dispatch = useDispatch()

  const onPressSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <motion.button
        variants={fadeDelay}
        whileHover={buttonHover}
        className="bg-animo-black dark:bg-animo-white text-animo-white dark:text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
        onClick={onPressSignOut}
      >
        Sign Out
      </motion.button>
    </div>
  )
}
