import type { CredentialRecord } from '@aries-framework/core'
import type { CredDef } from 'indy-sdk'

import { Agent } from '@aries-framework/core'
import { Inject, Service } from 'typedi'

@Service()
export class CredDefService {
  @Inject()
  private agent: Agent
  private credentialDefinitions: CredDef[] = []

  public constructor(agent: Agent) {
    this.agent = agent
    this.init()
  }

  public getCredentialDefinitionIdByTag(tag: string) {
    const def = this.credentialDefinitions.find((x) => x.tag === tag)

    if (!def) {
      throw new Error(`CredentialDefinition not found for ${tag}`)
    }

    return def.id
  }

  public async getAll() {
    if (this.credentialDefinitions.length === 0) {
      await this.init()
    }
    return this.credentialDefinitions
  }

  public async getAllCredentialsByConnectionId(connectionId: string) {
    const credentials = await this.agent.credentials.getAll()
    const filtered = credentials.filter((cred: CredentialRecord) => cred.connectionId === connectionId)

    return filtered.map((c) => c.toJSON())
  }

  private async init() {
    const cd1 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:Reclaim Identity:1.0',
      supportRevocation: false,
      tag: 'Reclaim Identity',
    })

    const cd2 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Diploma',
    })

    const cd3 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Paspoort',
    })

    const cd4 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Werkgeversverklaring',
    })

    const cd5 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Bankafschrift',
    })

    const cd6 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Uittreksel bevolkingsregister',
    })

    const cd7 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'U-pas',
    })
    const cd8 = await this.createCredentialDefinition({
      schemaId: 'Ehx3RZSV38pn3MYvxtHhbQ:2:prefs:4.0',
      supportRevocation: false,
      tag: 'Rijbewijs',
    })

    this.credentialDefinitions = [cd1, cd2, cd3, cd4, cd5, cd6, cd7, cd8]
  }

  private async createCredentialDefinition(credentialDefinitionRequest: {
    schemaId: string
    supportRevocation: boolean
    tag: string
  }) {
    const schema = await this.agent.ledger.getSchema(credentialDefinitionRequest.schemaId)

    return await this.agent.ledger.registerCredentialDefinition({
      schema,
      supportRevocation: credentialDefinitionRequest.supportRevocation,
      tag: credentialDefinitionRequest.tag,
    })
  }
}
