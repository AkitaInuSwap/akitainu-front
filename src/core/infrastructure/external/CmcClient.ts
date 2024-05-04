import { ApiClient } from '@/core/infrastructure/common/ApiClient'
import type { IApiClient } from '@/core/infrastructure/common/ApiClient'

const CMC_CATEGORY_ID = '605bc602972c9053da7021a9'
const CMC_API_URL = 'https://pro-api.coinmarketcap.com'
const CMC_API_KEY = process.env.API_CMC_KEY as string

export interface ICmcClient {}

export class CmcClient implements ICmcClient {
  private cmcApiClient: IApiClient

  constructor() {
    this.cmcApiClient = new ApiClient(CMC_API_URL, {
      'X-CMC_PRO_API_KEY': CMC_API_KEY,
    })
  }

  private async fetchCategory() {
    try {
      const response = await this.cmcApiClient.get(
        '/v1/cryptocurrency/category',
        {
          params: {
            id: CMC_CATEGORY_ID,
          },
        }
      )

      if (response.status !== 200) {
        throw new Error('Failed to fetch category')
      }

      return response.data
    } catch (error: unknown) {
      console.error(error)
      throw new Error('Failed to fetch category')
    }
  }
}
