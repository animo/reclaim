import type { Organization, OrganizationCredential } from '../types'

export const Diploma: OrganizationCredential = {
  id: 'duo-werkgeversverklaring',
  name: 'Werkgeversverklaring',
  icon: '/public/organization/duo/logo.png',
  attributes: ['Name', 'Date of birth'],
  acceptedByNumOrganizations: 10,
  tags: ['huis', 'Gemeente Utrecht', 'Huis', 'huren'],
}

export const Overheid: Organization = {
  id: '8',
  image: '/public/organization/duo/logo.png',
  brandColor: '#C4C4C4',
  name: 'Nederlandse Overheid',
  slug: 'nederlandse-overheid',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  availableCredentials: [Diploma],
}
