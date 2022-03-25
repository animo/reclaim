import type { Organization, OrganizationCredential } from '../types'

import { v4 as uuid } from 'uuid'

export const Collegekaart: OrganizationCredential = {
  id: uuid(),
  name: 'Collegekaart', //`Drivers' license`,
  icon: '/public/organization/hu/logo.png',
  attributes: ['Naam', 'Studentnummer'],
  acceptedByNumOrganizations: 42,
  tags: ['Gemeente Utrecht', 'Diploma'],
}

export const Hu: Organization = {
  id: '12',
  image: '/public/organization/hu/logo.png',
  brandColor: '#52c1ea',
  name: 'Hogeschool Utrecht',
  slug: 'hogeschool-utrecht',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [Collegekaart],
}
