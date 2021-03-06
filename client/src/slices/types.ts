import type { ProofAttribute, ProofPredicateInfo } from '@aries-framework/core'

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
  attributes: string[]
  acceptedByNumOrganizations: number
  tags: string[]
  credentialDefinitionId?: string
}

export interface Connection {
  id: string
  state: string
  invitationUrl: string
}

export interface ProofRequestData {
  connectionId: string
  attributes?: ProofAttribute[]
  predicates?: ProofPredicateInfo[]
  requestOptions?: RequestOptions
}

export interface Character {
  id: string
  image: string
  name: string
  type: string
  backstory: string
  starterCredentials: CredentialData[]
}

export interface UseCase {
  slug: string
  card: UseCaseCard
  stepper: StepperItem[]
  sections: Section[]
}

export interface UseCaseCard {
  title: string
  image: string
  description: string
}

export interface Section {
  id: string
  entity: Entity
  colors: Colors
  requestedCredentials?: RequestedCredential[]
  issueCredentials?: CredentialData[]
  steps: Step[]
}

export interface RequestedCredential {
  id: string
  name: string
  icon: string
  properties?: string[]
  predicates?: { name: string; value: string | number; type: string }
  credentialDefinitionId?: string
}

export interface CredentialData {
  credentialDefinitionId: string
  attributes?: Attribute[]
}

export interface Attribute {
  name: string
  value: string
}

export interface StepperItem {
  id: string
  name: string
  description: string
  steps: number
  section: number
}

export interface Step {
  id: string
  type: StepType
  title: string
  description?: string
  image?: string
  buttonText?: string
  requestOptions?: RequestOptions
  useProof?: boolean
  endStepper?: EndStepperItem[]
}

export interface EndStepperItem {
  id: string
  title: string
  description: string
  image: string
}

export interface Entity {
  name?: string
  icon?: string
  imageUrl?: string
  alias?: string
}

export interface Colors {
  primary: string
  secondary: string
}

export enum StepType {
  START,
  INFO,
  CONNECTION,
  PROOF,
  PROOF_OOB,
  CREDENTIAL,
  END,
}

export interface RequestOptions {
  name?: string
  comment?: string
}

export interface CharWithUseCases {
  characterId: string
  useCases: UseCase[]
}

export interface Wallet {
  id: number
  name: string
  organization: string
  recommended: boolean
  icon: string
  url: string
  apple: string
  android: string
  ledgerImage?: string
}
