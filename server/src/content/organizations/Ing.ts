import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const License: OrganizationCredential = {
  id: uuid(),
  name: 'Bankafschrift',
  icon: '/public/organization/ing/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 10,
  tags: ['Huis', 'Diploma'],
}

export const Ing: Organization = {
  id: '4',
  image: '/public/organization/ing/logo.png',
  brandColor: '#FF6101',
  name: 'ING Bank',
  slug: 'ing',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [License],
}
