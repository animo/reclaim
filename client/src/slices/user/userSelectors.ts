import type { RootState } from '../../store/configureStore'

import { useSelector } from 'react-redux'

export const useUser = () => useSelector((state: RootState) => state.user)

export const useIsSignedIn = () => useSelector((state: RootState) => state.user.isSignedIn)

export const useAllCredentials = () =>
  useSelector((state: RootState) => state.organization.organizations.flatMap((o) => o.availableCredentials))

export const useClaimableCredentials = () =>
  useSelector((state: RootState) => {
    const allCredentials = useAllCredentials()
    const userCredentials = state.user.user?.availableCredentials ?? []

    const userCredentialIds = userCredentials.map((c) => c.credentialId)

    const claimableCredentials = allCredentials.filter((c) => userCredentialIds.includes(c.id))

    return claimableCredentials
  })
