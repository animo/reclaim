import { createSlice } from '@reduxjs/toolkit'

import { fetchAllOrganizations } from './organizationThunks'

export interface Organization {
  id: string
  image: string
  name: string
  slug: string
  description: string
  brandColor: string
  availableCredentials: OrganizationCredential[]
}

export interface OrganizationCredential {
  id: string
  icon: string
  name: string
  attributes: readonly string[]
  credentialDefinitionId: string
}

interface OrganizationState {
  organizations: Organization[]
  isLoading: boolean
}

const initialState: OrganizationState = {
  organizations: [],
  isLoading: false,
}

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrganizations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllOrganizations.fulfilled, (state, action) => {
        state.isLoading = false
        state.organizations = action.payload
      })
  },
})

export default organizationSlice.reducer
