import type { RootState } from '../../store/configureStore'

import { useSelector } from 'react-redux'

export const useOrganizations = () => useSelector((state: RootState) => state.organization)
export const useOrganizationById = (id: string) =>
  useSelector((state: RootState) => state.organization.organizations.find((o) => o.id === id))
