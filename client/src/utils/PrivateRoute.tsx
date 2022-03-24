import type { ReactChild, ReactFragment, ReactPortal } from 'react'

import { Navigate } from 'react-router-dom'

import { useIsSignedIn } from '../slices/user/userSelectors'

export const PrivateRoute = (props: { children: ReactChild | ReactFragment | ReactPortal }) => {
  const isSignedIn = useIsSignedIn()

  return isSignedIn ? <>{props.children}</> : <Navigate to="/" />
}
