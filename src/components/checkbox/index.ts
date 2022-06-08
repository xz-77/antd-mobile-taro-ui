import './checkbox.less';

import { Group } from './group';
import { Checkbox } from './checkbox';
import { attachPropertiesToComponent } from '@/utils/attach-properties-to-component';

export type { CheckboxValue, CheckboxProps } from './checkbox';
export type { CheckboxGroupProps } from './group';

export default attachPropertiesToComponent(Checkbox, { Group });
