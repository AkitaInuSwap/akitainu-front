import { Token } from './Token'

export class Balance {
  constructor(
    private _value: number,
    private _token: Token
  ) {}

  get value(): number {
    return this._value
  }

  get token(): Token {
    return this._token
  }
}
