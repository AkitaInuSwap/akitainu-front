export class Token {
  constructor(
    private _name: string,
    private _symbol: string,
    private _issuer: string,
    private _icon: string,
    private _decimal: number,
    private _rate: number
  ) {}
}
