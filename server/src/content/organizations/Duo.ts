import type { Organization } from '../types'

import { v4 as uuid } from 'uuid'

export const Diploma = {
  id: uuid(),
  name: 'Diploma',
  icon: '/public/duo/credential-diploma.svg',
  attributes: ['Name', 'Date of birth'],
} as const

export const Duo: Organization = {
  id: '2',
  image: '/public/duo/duo.svg',
  brandColor: '#163a66',
  name: 'Dienst Uitvoering Onderwijs',
  type: 'DUO',
  description: 'Duo is... ',
  availableCredentials: [Diploma],
}
