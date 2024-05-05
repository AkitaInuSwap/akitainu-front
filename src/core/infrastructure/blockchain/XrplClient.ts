import { XRPL } from '@/config/networks'
import axios from 'axios'
import type { AxiosInstance } from 'axios'

export interface IXrplClient {
  fectchAccountChannels: () => Promise<any>
}

export class XrplClient implements IXrplClient {
  private apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: XRPL.TESTNET.RPC,
    })
  }

  async fectchAccountChannels() {
    return await this.apiClient.get('/', {
      params: {
        method: 'account_channels',
        params: [
          {
            account: 'rHmAm7PdTN5akpAqbqzAzjz5Zyau4n5ozN',
            ledger_index: 'validated',
          },
        ],
      },
    })
  }
}
