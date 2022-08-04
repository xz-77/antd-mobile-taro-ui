import './jumbo-tabs.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { JumboTab, JumboTabs } from './jumbo-tabs';

export type { JumboTabsProps, JumboTabProps } from './jumbo-tabs';

export default attachPropertiesToComponent(JumboTabs, {
  Tab: JumboTab,
});
