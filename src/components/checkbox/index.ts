import './checkbox.less'

import { Group } from './group'
import { Checkbox } from './checkbox'

export type { CheckboxValue, CheckboxProps } from './checkbox'
export type { CheckboxGroupProps } from './group'

export default Object.assign(Checkbox, {
  Group,
})
