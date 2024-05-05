import { z } from 'zod'
import { tokenEntitySchema } from '@/core/domain/entities/Token'
import { Token } from '@/core/domain/entities/Token'

export const accountEntitySchema = z.object({
  balances: z.array(tokenEntitySchema),
})

export type AccountEntity = z.infer<typeof accountEntitySchema>

export class Account {
  public balances: Token[] = []

  constructor({ balances }: AccountEntity) {
    this.balances = balances.map((balance) => new Token(balance))
  }
}
