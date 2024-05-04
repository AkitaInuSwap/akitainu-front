import { COINS } from '@/config/coins'
import { Token } from '@/core/domain/entities/Token'
import { ICmcClient } from '@/core/infrastructure/external/CmcClient'

export interface ITokenRepository {
  getTokens(): Promise<Token[]>
}

export class TokenRepository implements ITokenRepository {
  constructor(private cmcClient: ICmcClient) {}

  async getTokens(): Promise<Token[]> {
    let token: Token[] = []

    for (const coin of COINS) {
      const tokenEntity = this.toEntity({
        name: coin.name,
        symbol: coin.symbol,
        issuer: '',
        icon: coin.icon,
        decimal: 0,
        rate: 0,
      })
      token.push(tokenEntity)
    }

    return token
  }

  private toEntity({
    name,
    symbol,
    issuer,
    icon,
    decimal,
    rate,
  }: {
    name: string
    symbol: string
    issuer: string
    icon: string
    decimal: number
    rate: number
  }): Token {
    return new Token({
      name,
      symbol,
      issuer,
      icon,
      decimal,
      rate,
    })
  }
}
