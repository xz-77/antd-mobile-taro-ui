import React, { useLayoutEffect, useRef } from 'react';
import RcForm, { FormProps as RcFormProps } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import isEqual from 'lodash/isEqual';
import { FormContext } from './context';

const Form: React.FC<RcFormProps> = props => {
  const { children, ...formProps } = props;
  const { initialValues, form } = props;

  const preValue = useRef<Store>();
  useLayoutEffect(() => {
    if (initialValues && !isEqual(initialValues, preValue.current) && form) {
      preValue.current = initialValues;
      form.setFieldsValue(initialValues);
    }
  }, [form, initialValues]);
  return (
    <RcForm {...formProps}>
      <FormContext.Provider value={{ value: initialValues }}>{children}</FormContext.Provider>
    </RcForm>
  );
};

export default Form;
