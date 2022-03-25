import type { User } from '../types'

import { Diploma1, Diploma2, Schuld } from '../organizations/Duo'
import { Collegekaart } from '../organizations/Hu'
import { Jaaroverzicht } from '../organizations/Ing'
import { License } from '../organizations/KVK'

export const Henk: User = {
  id: '1',
  username: 'henk',
  name: 'Henk de Vries',
  image: 'https://avatars2.githubusercontent.com/u/1234?s=460&v=4',
  connectedServices: [],
  availableCredentials: [
    {
      credentialId: Diploma2.id, // set all credentialID
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
    {
      credentialId: Diploma1.id, // set all credentialID
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
    {
      credentialId: Schuld.id, // set all credentialID
      attributes: [
        {
          name: 'Saldo',
          value: '41.827,94',
        },
        {
          name: 'Afgelost',
          value: '1192,20',
        },
      ],
    },
    {
      credentialId: Jaaroverzicht.id, // set all credentialID
      attributes: [
        {
          name: 'Saldo Januari',
          value: '141.827,94',
        },
        {
          name: 'Saldo December',
          value: '24920,20',
        },
        {
          name: 'Rente betaald',
          value: '1492,20',
        },
      ],
    },
    {
      credentialId: License.id, // set all credentialID
      attributes: [
        {
          name: 'KVK nummer',
          value: '12356789APL',
        },
        {
          name: 'Bedrijfsnaam',
          value: 'Big Business BV',
        },
        {
          name: 'Rechtsvorm',
          value: 'BV',
        },
        {
          name: 'Start datum',
          value: '01-01-2009',
        },
        {
          name: 'Activiteiten',
          value: 'Ontwikkelen en uitgeven van software',
        },
        {
          name: 'Vestigingsnummer',
          value: 'ABC7180A',
        },
      ],
    },
    {
      credentialId: Collegekaart.id, // set all credentialID
      attributes: [
        {
          name: 'Studentnummer',
          value: '17216812',
        },
        {
          name: 'Naam',
          value: 'Student X',
        },
      ],
    },
  ],
}
