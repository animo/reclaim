import type { Organization } from './types'

import { Cbr } from './organizations/Cbr'
import { Duo } from './organizations/Duo'
import { GemeenteUtrecht } from './organizations/GemeenteUtrecht'
import { Ing } from './organizations/Ing'
import { Overheid } from './organizations/Overheid'

const organizations: Organization[] = [Duo, Cbr, GemeenteUtrecht, Ing, Overheid]

export default organizations
