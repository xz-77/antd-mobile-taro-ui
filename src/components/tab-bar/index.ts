import './tab-bar.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { TabBar, TabBarItem } from './tab-bar';

export type { TabBarProps, TabBarItemProps } from './tab-bar';

export default attachPropertiesToComponent(TabBar, {
  Item: TabBarItem,
});
