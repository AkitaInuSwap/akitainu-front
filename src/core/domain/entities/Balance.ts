import { Token } from './Token'

export class Balance {
  constructor(
    private _value: number,
    private _token: Token
  ) {}
}
