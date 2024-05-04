import { Balance } from './Balance'

export class Wallet {
  constructor(
    private _address: string,
    private _balances: Balance[]
  ) {}
}
