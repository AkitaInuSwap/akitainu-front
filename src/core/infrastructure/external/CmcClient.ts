import axios from 'axios'
import type { AxiosInstance } from 'axios';

const CMC_CATEGORY_ID = '605bc602972c9053da7021a9'

export interface ICmcClient {}

export class CmcClient implements ICmcClient {
  private apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://pro-api.coinmarketcap.com',
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_CMC_KEY,
      }
    })
  }


  private async fetchCategory() {
    try {
      const response = await this.apiClient.get('/v1/cryptocurrency/category', {
        params: {
          id: CMC_CATEGORY_ID,
        }
      })

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
