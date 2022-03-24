import type { RootState } from '../../store/configureStore'

import { useSelector } from 'react-redux'

export const useUser = () => useSelector((state: RootState) => state.user)

export const useIsSignedIn = () => useSelector((state: RootState) => state.user.isSignedIn)
