import type { Organization } from './types'

import { Cbr } from './organizations/Cbr'
import { Duo } from './organizations/Duo'
import { GemeenteUtrecht } from './organizations/GemeenteUtrecht'
import { Hu } from './organizations/Hu'
import { KVK } from './organizations/KVK'
import { Overheid } from './organizations/Overheid'
import { Svb } from './organizations/Svb'

const organizations: Organization[] = [Duo, Hu, Svb, Cbr, GemeenteUtrecht, Overheid, KVK]

export default organizations
