export interface Organization {
  id: string
  image: string
  name: string
  type: string
  description: string
  brandColor: string
  availableCredentials: OrganizationCredential[]
}

export interface OrganizationCredential {
  id: string
  icon: string
  name: string
  attributes: readonly string[]
  credentialDefinitionId?: string
}

export interface User {
  id: string
  image: string
  username: string
  name: string
  availableCredentials: UserCredential[]
}

export interface UserCredential {
  credentialId: string
  attributes: Record<string, string>
}
