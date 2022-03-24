import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import { createInvitation, fetchConnection } from './connectionThunks'

export interface ConnectionState {
  id?: string
  state?: string
  invitationUrl?: string
  isLoading: boolean
}

const initialState: ConnectionState = {
  id: undefined,
  state: undefined,
  invitationUrl: undefined,
  isLoading: false,
}

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnectionId(state, action: PayloadAction<string>) {
      state.id = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInvitation.pending, (state) => {
        state.isLoading = true
        state.invitationUrl = undefined
        state.id = undefined
        state.state = undefined
      })
      .addCase(createInvitation.fulfilled, (state, action) => {
        state.isLoading = false
        state.id = action.payload.connection.id
        state.state = action.payload.connection.state
        state.invitationUrl = action.payload.invitationUrl
      })
      .addCase(fetchConnection.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchConnection.fulfilled, (state, action) => {
        state.isLoading = false
        state.state = action.payload.state
      })
  },
})

export const { setConnectionId } = connectionSlice.actions

export default connectionSlice.reducer
