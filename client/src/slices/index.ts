import { combineReducers } from 'redux'

import connectionSlice from './connection/connectionSlice'
import credentialsSlice from './credentials/credentialsSlice'
import organizationSlice from './organization/organizationSlice'
import preferencesSlice from './preferences/preferencesSlice'
import proofSlice from './proof/proofSlice'
import userSlice, { signOut } from './user/userSlice'

const rootReducer = combineReducers({
  connection: connectionSlice,
  credentials: credentialsSlice,
  preferences: preferencesSlice,
  proof: proofSlice,
  user: userSlice,
  organization: organizationSlice,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pReducer = (state: any, action: any) => {
  if (action.type === 'dashboard/RESET') {
    /* eslint-disable */
    console.log('resetting')
    return rootReducer(undefined, action)
  }

  if (action.type === signOut.type) {
    /* eslint-disable */
    console.log('resetting because logout')
    return rootReducer(undefined, action)
  }

  return rootReducer(state, action)
}

export default pReducer
