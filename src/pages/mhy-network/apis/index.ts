import axios, { GenericData, responseWrapper, AxiosRequestConfig, host } from '../server';

export interface GetApiMhyResponse {
  avatar: string;
  name: string;
  weapon: string;
  skill: string;
  relic: string;
  entry: string;
}

/**
 * @title 获取米哈游数据
 */
export const getApiMhy = (options?: AxiosRequestConfig): Promise<GenericData<GetApiMhyResponse[]>> =>
  responseWrapper(axios.get('/api/mhy', { baseURL: host.mhy.production, ...options }));
