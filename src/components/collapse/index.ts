import './collapse.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Collapse, CollapsePanel } from './collapse';

export type { CollapseProps, CollapsePanelProps } from './collapse';

export default attachPropertiesToComponent(Collapse, {
  Panel: CollapsePanel,
});
