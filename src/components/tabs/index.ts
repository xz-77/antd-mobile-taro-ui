import './tabs.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Tab, Tabs } from './tabs';

export type { TabsProps, TabProps } from './tabs';

export default attachPropertiesToComponent(Tabs, {
  Tab,
});
