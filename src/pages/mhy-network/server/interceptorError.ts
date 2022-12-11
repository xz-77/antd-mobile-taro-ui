import { createError } from './createError';

export const interceptorError = (res: any) => {
  return Promise.reject(createError(res?.message || '接口请求故障，请联系管理员'));
};
