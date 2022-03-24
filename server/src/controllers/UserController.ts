import { Get, JsonController, NotFoundError, Param } from 'routing-controllers'
import { Service } from 'typedi'

import users from '../content/Users'

@JsonController('/users')
@Service()
export class UserController {
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
}
