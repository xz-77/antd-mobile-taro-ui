export const REGEXP = {
  phone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, // 手机号 13、14、15、16、17、18、19开头即可
  'name-ch': /^(?:[\u4e00-\u9fa5·]{2,16})$/, // 英文名称
  'name-en': /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, // 中文名称
  'id-card':
    /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/, // 身份证号，支持15/18位
  'bank-card': /^[1-9]\d{9,29}$/, // 银行卡
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // 邮箱
  url: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/, // 网址
  // password:
  //   /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/, // 密码
  mail: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/, // 邮政
  'chinese-character':
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/, // 汉字
  passport:
    /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/, // 护照
  number: /^-?\d+(,\d{3})*(\.\d{1,2})?$/, // 数字/货币金额 支持小数、负数、正数
  'positive-integer': /^\+?[1-9]\d*$/, // 正整数
};

export const extendName = <T extends { [K in keyof T]: RegExp }>(
  value: T
): typeof REGEXP & T => {
  return Object.assign(REGEXP, value);
};

export type MatchRegExpName = keyof typeof REGEXP;

type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never;
};

export const matchRegExp = <T extends { [K in keyof T]: RegExp }>(
  name: keyof Merge<T, typeof REGEXP>,
  value: any
): boolean => {
  return REGEXP?.[name].test(value);
};

const a = {
  password:
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/,
};

extendName(a);

matchRegExp<typeof a>('password', 123);
