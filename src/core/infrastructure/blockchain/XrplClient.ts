import axios from 'axios'
import type { AxiosInstance } from 'axios';

export interface IXrplClient {}

export class XrplClient implements IXrplClient {
  private apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://s.altnet.rippletest.net:51234',
    })
  }
}
