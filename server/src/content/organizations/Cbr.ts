import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const DriversLicense: OrganizationCredential = {
  id: uuid(),
  name: 'Rijbewijs', //`Drivers' license`,
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 10,
  tags: ['Gemeente Utrecht', 'Diploma'],
}

export const Cbr: Organization = {
  id: '4',
  image: '/public/organization/cbr/logo.png',
  brandColor: '#0588F0',
  name: 'CBR',
  slug: 'cbr',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [DriversLicense],
}
