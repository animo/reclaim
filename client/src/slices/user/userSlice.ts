import type { Attribute } from '../types'

import { createSlice } from '@reduxjs/toolkit'

import { claimCredential } from '../credentials/credentialsThunks'

import { register, signIn } from './userThunks'

export interface User {
  id: string
  image: string
  username: string
  name: string
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
    signOut(state) {
      state.isSignedIn = false
      state.user = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isSignedIn = true
      state.user = action.payload
    })

    builder.addCase(register.pending, (state, action) => {
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

export const { signOut } = userSlice.actions

export default userSlice.reducer
