import type { AxiosResponse } from 'axios';
import { ErrorCode, ErrorCodeDict } from './codeMessage';
import { createError } from './createError';

export const interceptor: (res: AxiosResponse<any>) => Promise<any> = res => {
  if (res.status === 200 || res.status === 304) {
    if (res.data?.code === 0) {
      return Promise.resolve(res.data);
    }

    return Promise.reject(createError(res.data?.message, res.data?.code));
  }

  return Promise.reject(
    createError(res.data?.message || ErrorCodeDict[res.status as ErrorCode] || '接口请求故障，请联系管理员', res.status)
  );
};
