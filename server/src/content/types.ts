export interface Attribute {
  name: string
  value: string
}

export interface Organization {
  id: string
  image: string
  name: string
  slug: string
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
  acceptedByNumOrganizations: number
  tags?: string[]
}

export interface User {
  id: string
  image: string
  username: string
  name: string
  connectedServices: string[]
  availableCredentials: UserCredential[]
}

export interface UserCredential {
  credentialId: string
  attributes: Attribute[]
}
