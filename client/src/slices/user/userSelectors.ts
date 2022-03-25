import type { RootState } from '../../store/configureStore'

import { useSelector } from 'react-redux'

export const useUser = () => useSelector((state: RootState) => state.user)

export const useIsSignedIn = () => useSelector((state: RootState) => state.user.isSignedIn)

export const useAllCredentials = () =>
  useSelector((state: RootState) => state.organization.organizations.flatMap((o) => o.availableCredentials))

export const useClaimableCredentials = () =>
  useSelector((state: RootState) => {
    const orgs = state.organization.organizations
    const allCredentials = orgs.flatMap((o) => o.availableCredentials)
    const userConnected = state.user.user?.connectedServices ?? []
    const aaa = orgs.filter((o) => userConnected.includes(o.slug))
    const userCredentials = state.user.user?.availableCredentials ?? []

    const userCredentialIds = userCredentials.map((c) => c.credentialId)

    const claimableCredentials = allCredentials.filter((c) => userCredentialIds.includes(c.id))

    return claimableCredentials
  })

export const useClaimedCredentialIds = () => useSelector((state: RootState) => state.user.claimedCredentials)
