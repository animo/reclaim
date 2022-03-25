import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const UPas: OrganizationCredential = {
  id: uuid(),
  name: 'U-pas', //'U-pas',
  icon: '/public/organization/gemeente-utrecht/gemeente-utrecht.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 4,
  tags: ['Gemeente Utrecht', 'Diploma'],
}

export const Uitreksel: OrganizationCredential = {
  id: uuid(),
  name: 'Uittreksel bevolkingsregister', //'U-pas',
  icon: '/public/organization/gemeente-utrecht/gemeente-utrecht.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 4,
  tags: ['Gemeente Utrecht', 'huis'],
}

export const GemeenteUtrecht: Organization = {
  id: '3',
  image: '/public/organization/gemeente-utrecht/gemeente-utrecht.png',
  brandColor: '#C4C4C4',
  name: 'Gemeente Utrecht',
  slug: 'gemeente-utrecht',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [UPas, Uitreksel],
}
