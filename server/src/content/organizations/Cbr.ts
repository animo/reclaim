import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const License: OrganizationCredential = {
  id: uuid(),
  name: 'Diploma', //`Drivers' license`,
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 10,
  tags: ['Gemeente Utrecht', 'Diploma'],
}

export const Cbr: Organization = {
  id: '4',
  image: '/public/organization/duo/logo.png',
  brandColor: '#154272',
  name: 'CBR',
  type: 'CBR',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [License],
}
