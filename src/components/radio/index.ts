import './radio.less';

import { Group } from './group';
import { Radio } from './radio';

export type { RadioProps, RadioValue } from './radio';
export type { RadioGroupProps } from './group';

export default Object.assign(Radio, {
  Group,
});
