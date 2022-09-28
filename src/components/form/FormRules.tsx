/* eslint-disable no-nested-ternary */

import { RuleObject, StoreValue } from 'rc-field-form/es/interface';

type ModifyRules = {
  type?: 'phone' | 'idCard' | 'password' | 'email' | 'name' | 'url';
  message?: string;
};

export type ModifyRulesObject = Omit<RuleObject, 'type' | 'message'> & ModifyRules;

const RULES = {
  idCard: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
  phone: /^1[3-9][0-9]{9}$/,
  name: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
  // eslint-disable-next-line no-useless-escape
  url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^\S*(?=\S{6,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
};

const validatorResult = (
  rule: ModifyRulesObject,
  value: StoreValue,
  type: keyof typeof RULES,
  errmessage: string,
  nonemessage: string
) => {
  return value
    ? RULES[type].test(value)
      ? Promise.resolve()
      : Promise.reject(new Error(errmessage))
    : rule.required
    ? Promise.reject(new Error(rule.message || nonemessage))
    : Promise.resolve();
};

export default {
  idCard: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(rule, value, 'idCard', '请输入正确的身份证号码', '请输入身份证号码');
  },
  phone: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(rule, value, 'phone', '请输入正确的手机号', '请输入手机号码');
  },
  name: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(rule, value, 'name', '请输入正确的姓名', '请输入姓名');
  },
  url: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(rule, value, 'url', '请输入正确的网址', '请输入网址');
  },
  email: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(rule, value, 'email', '请输入正确的邮箱', '请输入邮箱');
  },
  password: (rule: ModifyRulesObject, value: StoreValue) => {
    return validatorResult(
      rule,
      value,
      'password',
      '请设置6-20位密码,至少包括1个大写字母,1个小写字母,1个数字,1个特殊字母',
      '请输入密码'
    );
  },
};
