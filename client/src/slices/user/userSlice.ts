import type { Attribute } from '../types'

import { createSlice } from '@reduxjs/toolkit'

import { claimCredential } from '../credentials/credentialsThunks'

import { registerIssueCredential, signIn } from './userThunks'

export interface User {
  id: string
  image: string
  username: string
  name: string
  connectedServices: string[]
  availableCredentials: UserCredential[]
}

export interface UserCredential {
  credentialId: string
  attributes: Attribute[]
}

interface UserState {
  isSignedIn: boolean
  user?: User
  claimedCredentials: string[]
}

const initialState: UserState = {
  isSignedIn: false,
  claimedCredentials: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignIn(state) {
      state.isSignedIn = true
    },
    signOut(state) {
      state.isSignedIn = false
      state.user = undefined
    },
    addOrganization(state, action) {
      // eslint-disable-next-line no-console
      console.log(action)
      state.user?.connectedServices.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerIssueCredential.fulfilled, (state, action) => {
      state.isSignedIn = true
      state.user = action.payload
    })

    builder.addCase(registerIssueCredential.pending, (state, action) => {
      state.isSignedIn = false
      state.user = action.payload
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isSignedIn = true
      state.user = action.payload
    })

    builder.addCase(claimCredential.pending, (state, action) => {
      state.claimedCredentials.push(action.meta.arg)
    })
  },
})

export const { signOut, setSignIn, addOrganization } = userSlice.actions

export default userSlice.reducer
