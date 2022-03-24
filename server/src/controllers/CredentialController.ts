import { RecordNotFoundError } from '@aries-framework/core'
import { Get, InternalServerError, JsonController, NotFoundError, Param } from 'routing-controllers'
import { Inject, Service } from 'typedi'

import { CredDefService } from './CredDefService'

@JsonController('/custom/credentials')
@Service()
export class CredentialController {
  @Inject()
  private service: CredDefService

  public constructor(service: CredDefService) {
    this.service = service
  }

  @Get('/:connectionId')
  public async getAllCredentialsByConnectionId(@Param('connectionId') connectionId: string) {
    try {
      return this.service.getAllCredentialsByConnectionId(connectionId)
    } catch (error) {
      if (error instanceof RecordNotFoundError) {
        throw new NotFoundError(`credentials for connectionId "${connectionId}" not found.`)
      }
      throw new InternalServerError(`something went wrong: ${error}`)
    }
  }

  @Get('/credential-definition/:tag')
  public async getCredentialDefinitionForSchemaId(@Param('tag') tag: string) {
    const credDef = this.service.getCredentialDefinitionIdByTag(tag)

    if (!credDef) {
      throw new NotFoundError(`CredentialDefinition not found for tag ${tag}`)
    }

    return credDef
  }
}
