import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const License: OrganizationCredential = {
  id: uuid(),
  name: 'Uittreksel handelsregister',
  icon: '/public/organization/kvk/kvk-logo.svg',
  attributes: ['KVK nummer', 'Vestigingsnummer', 'Bedrijfsnaam', 'Rechtsvorm', 'Start datum', 'Activiteiten'],
  acceptedByNumOrganizations: 22,
  tags: ['bedrijf', 'Diploma'],
}

export const KVK: Organization = {
  id: '4',
  image: '/public/organization/kvk/kvk-logo.svg',
  brandColor: '#E5BFD4',
  name: 'KVK',
  slug: 'kvk',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [License],
}
