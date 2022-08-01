import './capsule-tabs.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { CapsuleTab, CapsuleTabs } from './capsule-tabs';

export type { CapsuleTabsProps, CapsuleTabProps } from './capsule-tabs';

export default attachPropertiesToComponent(CapsuleTabs, {
  Tab: CapsuleTab,
});
