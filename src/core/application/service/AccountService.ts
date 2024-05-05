import { Account } from '@/core/domain/entities/Account'

interface IAccountService {
  getAccount(): Promise<Account>
}

export class AccountService implements IAccountService {
  constructor() {}

  public async getAccount() {
    return new Account({ balances: [] })
  }
}
