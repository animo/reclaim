import type { User } from '../types'

import { Diploma } from '../organizations/Duo'

export const Henk: User = {
  id: '1',
  username: 'henk',
  name: 'Henk de Vries',
  image: 'https://avatars2.githubusercontent.com/u/1234?s=460&v=4',
  availableCredentials: [
    {
      credentialId: Diploma.id,
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
