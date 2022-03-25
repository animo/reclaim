import type { User } from '../types'

import { Diploma2 } from '../organizations/Duo'

export const Henk: User = {
  id: '1',
  username: 'henk',
  name: 'Henk de Vries',
  image: 'https://avatars2.githubusercontent.com/u/1234?s=460&v=4',
  connectedServices: [],
  availableCredentials: [
    {
      credentialId: Diploma2.id,
      attributes: [
        {
          name: 'Name',
          value: 'Henk',
        },
        {
          name: 'Date of Birth',
          value: '1990-01-01',
        },
      ],
    },
  ],
}
