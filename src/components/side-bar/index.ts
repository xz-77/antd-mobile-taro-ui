import './side-bar.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { SideBar, SideBarItem } from './side-bar';

export type { SideBarProps, SideBarItemProps } from './side-bar';

export default attachPropertiesToComponent(SideBar, {
  Item: SideBarItem,
});
