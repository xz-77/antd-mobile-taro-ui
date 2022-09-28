import { Store } from 'rc-field-form/es/interface';
import React from 'react';

const DEFAULT_FORM_CONTEXT: { value?: Store } = {
  value: {},
};

export const FormContext = React.createContext(DEFAULT_FORM_CONTEXT);
