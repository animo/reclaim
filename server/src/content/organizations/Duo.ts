import type { Organization, OrganizationCredential } from '../types'

export const Diploma: OrganizationCredential = {
  id: 'duo-diploma',
  name: 'Diploma',
  icon: '/public/duo/credential-diploma.svg',
  attributes: ['Name', 'Date of Birth'],
  acceptedByNumOrganizations: 10,
}

export const Duo: Organization = {
  id: '2',
  image: '/public/duo/duo.svg',
  brandColor: '#163a66',
  name: 'Dienst Uitvoering Onderwijs',
  type: 'DUO',
  description: 'Duo is... ',
  availableCredentials: [Diploma],
}
