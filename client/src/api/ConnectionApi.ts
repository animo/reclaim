import type { AxiosResponse } from 'axios'

import { apiCall } from './BaseUrl'

export const createInvitation = (
  agentName?: string,
  agentImageUrl?: string,
  alias?: string
): Promise<AxiosResponse> => {
  return apiCall.post('/connections/create-invitation', {
    autoAcceptConnection: true,
    myLabel: agentName,
    myImageUrl: agentImageUrl,
    alias,
  })
}

export const getConnectionById = (connectionId: string): Promise<AxiosResponse> => {
  return apiCall.get(`/connections/${connectionId}`)
}
