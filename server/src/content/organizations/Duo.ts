import type { Organization, OrganizationCredential } from '../types'

export const Diploma1: OrganizationCredential = {
  id: 'duo-diploma1',
  name: 'HBO Bachelor HBO-ICT',
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 25,
  tags: ['School', 'Diploma'],
}

export const Diploma2: OrganizationCredential = {
  id: 'duo-diploma2',
  name: 'VWO Diploma',
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 12,
  tags: ['School', 'Diploma'],
}

export const Schuld: OrganizationCredential = {
  id: 'duo-diploma3',
  name: 'Studieschuld overzicht',
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 5,
  tags: ['Huis', 'School'],
}

export const Duo: Organization = {
  id: '2',
  image: '/public/organization/duo/logo.png',
  brandColor: '#163a66',
  name: 'Dienst Uitvoerend Onderwijs',
  slug: 'dienst-uitvoerend-onderwijs',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [Diploma1, Diploma2],
}
