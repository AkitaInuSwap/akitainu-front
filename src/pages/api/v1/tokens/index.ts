import { Token } from '@/core/domain/entities/Token'
import { CmcClient } from '@/core/infrastructure/external/CmcClient'
import { TokenService } from '@/core/application/service/TokenService'
import { TokenRepository } from '@/core/repositories/TokenRepository'
// Types
import type { NextApiRequest, NextApiResponse } from 'next'

type ApiResponse = {
  data?: Token[]
  error: { message: string }
}

const cmcClient = new CmcClient()
const tokenRepository = new TokenRepository(cmcClient)
const tokenService = new TokenService(tokenRepository)

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const tokens = await tokenService.getAllTokens()
    res.status(200).json({ data: tokens, error: { message: '' } })
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ error: { message: error.message } })
    } else {
      return res
        .status(500)
        .json({ error: { message: 'An error occurred' } })
    }
  }
}
