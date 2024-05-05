import { Account } from '@/core/domain/entities/Account'
import type { XrplClient } from '@/core/infrastructure/blockchain/XrplClient'

export interface IAccountRepository {
  getAccount(): Promise<Account>
}

export class AccountRespository implements IAccountRepository {
  constructor(private xrplClient: XrplClient) {}

  async getAccount(): Promise<Account> {
    try {
      const response = await this.xrplClient.fectchAccountChannels()
      console.log(response)

      return new Account({ balances: [] })
    } catch (error) {
      console.error(error)
      throw new Error('Failed to get account')
    }
  }
}
