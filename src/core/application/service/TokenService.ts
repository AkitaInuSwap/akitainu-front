import { TokenRepository } from '@/core/repositories/TokenRepository'
import { Token } from '@/core/domain/entities/Token'

interface ITokenService {
  getAllTokens(): Promise<Token[]>
}

export class TokenService {
  constructor(private tokenRepository: TokenRepository) {}

  public async getAllTokens() {
    return await this.tokenRepository.getTokens()
  }
}
