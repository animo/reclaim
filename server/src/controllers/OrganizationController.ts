import { Get, JsonController } from 'routing-controllers'
import { Inject, Service } from 'typedi'

import organizations from '../content/Organizations'

import { CredDefService } from './CredDefService'

@JsonController('/organizations')
@Service()
export class OrganizationController {
  @Inject()
  private service: CredDefService

  public constructor(service: CredDefService) {
    this.service = service
  }

  @Get('')
  public async getAllOrganizations() {
    return organizations.map((o) => ({
      ...o,
      availableCredentials: o.availableCredentials.map((c) => ({
        ...c,
        credentialDefinitionId: this.service.getCredentialDefinitionIdByTag(c.name),
      })),
    }))
  }
}
