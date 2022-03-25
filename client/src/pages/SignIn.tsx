import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useConnection } from '../slices/connection/connectionSelectors'
import { useProof } from '../slices/proof/proofSelectors'
import { useIsSignedIn } from '../slices/user/userSelectors'

export const SignIn = () => {
  const isSignedIn = useIsSignedIn()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const connection = useConnection()
  const proof = useProof()

  // useEffect(() => {
  //   if (isSignedIn) {
  //     navigate('/dashboard')
  //   }
  // }, [isSignedIn])

  // const onPressSignIn = () => {
  //   dispatch(signIn('henk'))
  // }

  // const onPressRegister = () => {
  //   dispatch(register('henk'))
  // }

  return <div></div>
}

//<h1> Sign in</h1>
//<motion.button
//  variants={fadeDelay}
//  whileHover={buttonHover}
//  className="bg-animo-black dark:bg-animo-white text-animo-white dark:text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
//  onClick={onPressSignIn}
//>
//  Sign In
//</motion.button>
//<motion.button
//  variants={fadeDelay}
//  whileHover={buttonHover}
//  className="bg-animo-black dark:bg-animo-white text-animo-white dark:text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
//  onClick={onPressRegister}
//>
//  Register
//</motion.button>
//{connection.invitationUrl && connection.state !== 'active' && (
//  <QRCode invitationUrl={connection.invitationUrl} connectionState={connection.state} />
//)}
