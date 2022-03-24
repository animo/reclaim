import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  isSignedIn: boolean
  email?: string
}

const initialState: UserState = {
  isSignedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ email: string }>) => {
      state.isSignedIn = true
    },
    signOut: (state) => {
      state.isSignedIn = false
    },
  },
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
