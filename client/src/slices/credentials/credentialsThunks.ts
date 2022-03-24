import type { RootState } from '../../store/configureStore'
import type { OrganizationCredential } from '../organization/organizationSlice'
import type { UserCredential } from '../user/userSlice'

import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/CredentialApi'

export const claimCredential = createAsyncThunk('credentials/claim', async (credentialId: string, { getState }) => {
  const state: RootState = getState() as RootState

  let organizationCredential: OrganizationCredential | undefined = undefined
  let userCredential: UserCredential | undefined = undefined

  if (!state.user.user) {
    throw new Error('User not signed in')
  }

  for (const organization of state.organization.organizations) {
    for (const availableCredential of organization.availableCredentials) {
      if (availableCredential.id === credentialId) {
        organizationCredential = availableCredential
        break
      }
    }
  }

  if (!organizationCredential) {
    throw new Error('Credential not found')
  }

  for (const availableCredential of state.user.user.availableCredentials) {
    if (availableCredential.credentialId === organizationCredential.id) {
      userCredential = availableCredential
    }
  }

  if (!userCredential) {
    throw new Error('User does not support credential')
  }

  if (!state.connection.id) {
    throw new Error('Connection not found')
  }

  // Issue Credential
  const response = await Api.issueCredential(state.connection.id, {
    credentialDefinitionId: organizationCredential.credentialDefinitionId,
    attributes: userCredential.attributes,
  })

  return response.data
})

export const fetchCredentialById = createAsyncThunk('credentials/fetchById', async (id: string) => {
  const response = await Api.getCredentialById(id)
  return response.data
})

export const deleteCredentialById = createAsyncThunk('credentials/deleteById', async (id: string) => {
  await Api.deleteCredentialById(id)
  return id
})
