import './badge.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Badge, dot } from './badge';

export type { BadgeProps } from './badge';

export default attachPropertiesToComponent(Badge, { dot });
