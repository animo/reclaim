import type { RootState } from '../../store/configureStore'
import type { Entity } from '../types'

import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/ConnectionApi'

export const fetchConnection = createAsyncThunk('connection/fetchById', async (_, { getState }) => {
  const state: RootState = getState() as RootState

  const response = await Api.getConnectionById(state.connection.id!)
  return response.data
})

export const createInvitation = createAsyncThunk('connection/createInvitation', async (entity?: Entity) => {
  const response = await Api.createInvitation(entity?.name, entity?.imageUrl, entity?.alias)
  return response.data
})
