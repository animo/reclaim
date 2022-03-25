import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const UPas: OrganizationCredential = {
  id: uuid(),
  name: 'Diploma', //'U-pas',
  icon: '/public/organization/gemeente-utrecht/gemeente-utrecht.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 4,
  tags: ['Gemeente Utrecht', 'Diploma'],
}

export const GemeenteUtrecht: Organization = {
  id: '3',
  image: '/public/organization/gemeente-utrecht/gemeente-utrecht.png',
  brandColor: '#CE070D',
  name: 'Gemeente Utrecht',
  type: 'Gemeente Utrecht',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [UPas],
}
