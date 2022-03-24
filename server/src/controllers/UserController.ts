import { Agent, ConnectionRecord, ConnectionRepository, ConnectionState } from '@aries-framework/core'
import { Get, JsonController, NotFoundError, Param } from 'routing-controllers'
import { Service, Inject } from 'typedi'

import users from '../content/Users'

@JsonController('/users')
@Service()
export class UserController {
  @Inject()
  private agent: Agent

  public constructor(agent: Agent) {
    this.agent = agent
  }

  /**
   * Retrieve character by id
   */
  @Get('/:username')
  public async getUserByUsername(@Param('username') username: string) {
    const user = users.find((x) => x.username === username)

    if (!user) {
      throw new NotFoundError(`character with username "${username}" not found.`)
    }

    return user
  }

  /**
   * Retrieve character by id
   */
  @Get('/:username/connection')
  public async getConnectionByUsername(@Param('username') username: string) {
    const connections = await this.agent.connections.getAll()
    const foundConnections = connections.filter((c) => c.alias === username && c.isReady)

    if (foundConnections.length === 0) {
      throw new NotFoundError(`Connection for username ${username} not found.`)
    }

    return foundConnections[foundConnections.length - 1].toJSON()
  }
}
