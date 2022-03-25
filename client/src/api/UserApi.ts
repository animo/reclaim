import type { AxiosResponse } from 'axios'

import { apiCall } from './BaseUrl'

export const getUserByUsername = (userName: string): Promise<AxiosResponse> => {
  return apiCall.get(`/users/${userName}`)
}

export const getConnectionByUsername = (userName: string): Promise<AxiosResponse> => {
  return apiCall.get(`/users/${userName}/connection`)
}
