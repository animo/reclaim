import type { RootState } from '../../store/configureStore'

import { createAsyncThunk } from '@reduxjs/toolkit'

import * as CredentialApi from '../../api/CredentialApi'
import * as ProofApi from '../../api/ProofApi'
import * as Api from '../../api/UserApi'
import { setConnectionId } from '../connection/connectionSlice'
import { createInvitation, fetchConnection } from '../connection/connectionThunks'
import { fetchAllOrganizations } from '../organization/organizationThunks'
import { createProof } from '../proof/proofThunks'

export const registerCreateConnection = createAsyncThunk(
  'user/registerCreateConnection',
  async (username: string, { dispatch, getState }) => {
    dispatch(fetchAllOrganizations())
    const user = await Api.getUserByUsername(username)
    /* eslint-disable */
    console.log('calling register')

    const {
      payload: {
        connection: { id: connectionId },
      },
    } = await dispatch(
      createInvitation({
        alias: username,
      })
    )

    while (!['complete', 'responded'].includes((getState() as RootState).connection.state as unknown as string)) {
      await dispatch(fetchConnection())
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    return { user, connectionId }
  }
)

export const registerIssueCredential = createAsyncThunk(
  'user/registerIssueCredential',
  async ({ userName, connectionId }: { userName: string; connectionId: string }) => {
    const user = await Api.getUserByUsername(userName)
    console.log(user)
    const credentialDefinition = await CredentialApi.getCredentialDefinitionForTag('Reclaim Identity')

    const {
      data: { id: credentialId },
    } = await CredentialApi.issueCredential(connectionId, {
      credentialDefinitionId: credentialDefinition.data,
      attributes: [
        {
          name: 'Username',
          value: userName,
        },
      ],
    })

    let credential = await CredentialApi.getCredentialById(credentialId)
    while (credential.data.state != 'done' && credential.data.state != 'credential-issued') {
      credential = await CredentialApi.getCredentialById(credentialId)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    return user.data
  }
)

export const signIn = createAsyncThunk('user/signIn', async (username: string, { dispatch }) => {
  dispatch(fetchAllOrganizations())
  const user = await Api.getUserByUsername(username)

  const credentialDefinition = await CredentialApi.getCredentialDefinitionForTag('Reclaim Identity')
  const connection = await Api.getConnectionByUsername(username)

  dispatch(setConnectionId(connection.data.id))

  const {
    payload: { id: proofId },
  } = await dispatch(
    createProof({
      connectionId: connection.data.id,
      attributes: {
        // @ts-ignore
        Username: {
          restrictions: [
            {
              cred_def_id: credentialDefinition.data,
            },
          ],
          names: ['Username'],
        },
      },
      // @ts-ignore
      predicates: {},
      requestOptions: {
        name: 'Sign in Request',
      },
    })
  )

  let proof = await ProofApi.getProofById(proofId)
  while (proof.data.isVerified !== true) {
    proof = await ProofApi.getProofById(proofId)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return user.data
})
