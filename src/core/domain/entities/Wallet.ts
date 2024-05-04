import { Balance } from './Balance'

export class Wallet {
  constructor(
    private _address: string,
    private _balances: Balance[]
  ) {}

  get address(): string {
    return this._address
  }

  get balances(): Balance[] {
    return this._balances
  }
}
