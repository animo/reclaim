import { combineReducers } from 'redux'

import connectionSlice from './connection/connectionSlice'
import credentialsSlice from './credentials/credentialsSlice'
import preferencesSlice from './preferences/preferencesSlice'
import proofSlice from './proof/proofSlice'
import userSlice from './user/userSlice'

const rootReducer = combineReducers({
  connection: connectionSlice,
  credentials: credentialsSlice,
  preferences: preferencesSlice,
  proof: proofSlice,
  user: userSlice,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pReducer = (state: any, action: any) => {
  if (action.type === 'dashboard/RESET') {
    return rootReducer(undefined, action)
  }

  return rootReducer(state, action)
}

export default pReducer
