import type { AxiosResponse } from 'axios'

import { apiCall } from './BaseUrl'

export const getAll = (): Promise<AxiosResponse> => {
  return apiCall.get('/organizations')
}
