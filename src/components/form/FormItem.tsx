import React, { useContext } from 'react';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { Rule as RcRule, RuleObject, RuleRender } from 'rc-field-form/es/interface';
import formRules from './FormRules';
import { FormContext } from './context';

type ModifyRules = {
  type?: 'phone' | 'idCard' | 'password' | 'email' | 'name' | 'url';
  message?: string;
};

export type ModifyRulesObject = Omit<RuleObject, 'type' | 'message'> & ModifyRules;

export type Rules = ModifyRulesObject | RuleRender;

export interface ItemProps extends Omit<FieldProps, 'rules'> {
  rules?: Rules[];
  label: string;
}

const FormItem: React.FC<ItemProps> = props => {
  const { label, name = '', rules = [], children, ...itemProps } = props;
  const { value } = useContext(FormContext);
  const rule = rules?.map(item => {
    if (item instanceof Function) return item;

    if (!!item.type && !!formRules[item.type]) {
      const fn = formRules[item.type];
      Object.assign(item, {
        validator: () => Promise.resolve(fn(item, value?.[name as string])),
        type: 'string',
      });
    }
    if (item.required) {
      if (!item.validator) {
        Object.assign(item, {
          message: item.message || `请输入${typeof label === 'string' ? label : name ?? ''}`,
        });
      }
    }
    return item as RcRule;
  });
  return (
    <Field rules={rule} name={name} {...itemProps}>
      {children}
    </Field>
  );
};

export default FormItem;
