export enum HTTPErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  GATEWAY_TIMEOUT = 504,
  SYSTEM_ERROR = 503,
}

enum BusinessErrorCode {
  SUCCEED = 0,
  NORMAL_ERROR = 1,
}

export type ErrorCode = BusinessErrorCode | HTTPErrorCode;

export type IErrorCodeDict = { [attr1 in ErrorCode]: string };

export const ErrorCodeDict: Partial<IErrorCodeDict> = {
  [HTTPErrorCode.BAD_REQUEST]: '参数错误，请检查请求参数',
  [HTTPErrorCode.UNAUTHORIZED]: '您无权限，请登录后再使用',
  [HTTPErrorCode.FORBIDDEN]: '您被禁止访问，请联系管理员',
  [HTTPErrorCode.NOT_FOUND]: '资源未找到，请联系管理员',
  [HTTPErrorCode.METHOD_NOT_ALLOWED]: '请求方法错误，请检查请求参数',
  [HTTPErrorCode.INTERNAL_SERVER_ERROR]: '服务器错误',
  [HTTPErrorCode.BAD_GATEWAY]: '网关错误',
  [HTTPErrorCode.GATEWAY_TIMEOUT]: '网关超时',
  [HTTPErrorCode.SYSTEM_ERROR]: '服务器不可访问',
  [BusinessErrorCode.NORMAL_ERROR]: '通用错误',
};

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

// export default codeMessage;
