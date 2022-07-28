import './checkbox.less';

import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Checkbox } from './checkbox';
import { Group } from './group';

export type { CheckboxProps, CheckboxValue } from './checkbox';
export type { CheckboxGroupProps } from './group';

export default attachPropertiesToComponent(Checkbox, { Group });
