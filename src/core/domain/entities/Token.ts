import { z } from 'zod'

export const tokenEntitySchema = z.object({
  name: z.string(),
  symbol: z.string(),
  issuer: z.string(),
  icon: z.string(),
  decimal: z.number(),
  rate: z.number().nullable(),
})

export type TokenEntity = z.infer<typeof tokenEntitySchema>

export class Token {
  public name: string
  public symbol: string
  public issuer: string
  public icon: string
  public decimal: number
  public rate?: number | null

  constructor({ name, symbol, issuer, icon, decimal, rate }: TokenEntity) {
    this.name = name
    this.symbol = symbol
    this.issuer = issuer
    this.icon = icon
    this.decimal = decimal
    this.rate = rate !== null ? rate : 0
  }
}
