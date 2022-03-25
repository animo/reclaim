import type { Organization } from './types'

import { Cbr } from './organizations/Cbr'
import { Duo } from './organizations/Duo'
import { GemeenteUtrecht } from './organizations/GemeenteUtrecht'
import { Hu } from './organizations/Hu'
import { Ing } from './organizations/Ing'
import { KVK } from './organizations/KVK'
import { Overheid } from './organizations/Overheid'

const organizations: Organization[] = [Duo, Hu, Ing, GemeenteUtrecht, Cbr, Overheid, KVK]

export default organizations
