import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'

import { buttonHover, fadeDelay } from '../FramerAnimations'
import { QRCode } from '../components/QRCode'
import { useConnection } from '../slices/connection/connectionSelectors'
import { useProof } from '../slices/proof/proofSelectors'
import { useIsSignedIn } from '../slices/user/userSelectors'
import { register, signIn } from '../slices/user/userThunks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const QR = require('qrcode.react')

export const SignIn = () => {
  const isSignedIn = useIsSignedIn()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const connection = useConnection()
  const proof = useProof()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard')
    }
  }, [isSignedIn])

  const onPressSignIn = () => {
    dispatch(signIn('henk'))
  }

  const onPressRegister = () => {
    dispatch(register('henk'))
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
      {connection.invitationUrl && connection.state !== 'active' && (
        <QRCode invitationUrl={connection.invitationUrl} connectionState={connection.state} />
      )}
    </div>
  )
}
