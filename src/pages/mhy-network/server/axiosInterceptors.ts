import axios from 'axios-adapter-miniprogram';
import { interceptor } from './interceptor';
import { increaseRequest, reduceRequest } from './loading';
import { interceptorError } from './interceptorError';

axios.interceptors.request.use(
  config => {
    increaseRequest();
    return config;
  },
  error => error
);
axios.interceptors.response.use(
  res => {
    reduceRequest();
    return interceptor(res);
  },
  error => {
    reduceRequest();
    return interceptorError(error);
  }
);

export default axios;
