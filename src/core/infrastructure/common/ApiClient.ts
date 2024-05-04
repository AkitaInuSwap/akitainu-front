import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IApiClient {
  get(url: string, params?: Record<string, any>): Promise<AxiosResponse>
}

export class ApiClient implements IApiClient {
  private apiClient: AxiosInstance

  constructor(baseURL: string, headers?: Record<string, string>) {
    const config: AxiosRequestConfig = {
      baseURL: baseURL,
    }

    if (headers) {
      config.headers = headers
    }

    this.apiClient = axios.create(config)
  }

  public async get(
    url: string,
    params?: Record<string, any>
  ): Promise<AxiosResponse> {
    try {
      const response = await this.apiClient.get(url, { params })
      return response
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
}
