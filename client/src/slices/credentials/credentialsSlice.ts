import type { CredentialRecord } from '@aries-framework/core'

import { createSlice } from '@reduxjs/toolkit'

import { claimCredential } from './credentialsThunks'

interface CredentialState {
  credentials: CredentialRecord[]
  issuedCredentials: CredentialRecord[]
  isLoading: boolean
}

const initialState: CredentialState = {
  credentials: [],
  issuedCredentials: [],
  isLoading: true,
}

const credentialSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    clearCredentials: (state) => {
      state.credentials.map(
        (x) => (x.state === 'credential-issued' || x.state === 'done') && state.issuedCredentials.push(x)
      )
      state.credentials = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(claimCredential.rejected, (state, action) => {
        // eslint-disable-next-line no-console
        console.log(action.error)
      })
      .addCase(claimCredential.pending, (state) => {
        state.isLoading = true
      })
      .addCase(claimCredential.fulfilled, (state, action) => {
        state.isLoading = false
        state.credentials.push(action.payload)
      })
  },
})

export const { clearCredentials } = credentialSlice.actions

export default credentialSlice.reducer
