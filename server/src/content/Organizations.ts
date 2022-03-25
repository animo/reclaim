import type { Organization } from './types'

import { Cbr } from './organizations/Cbr'
import { Duo } from './organizations/Duo'
import { GemeenteUtrecht } from './organizations/GemeenteUtrecht'

const organizations: Organization[] = [Duo, Cbr, GemeenteUtrecht]

export default organizations
