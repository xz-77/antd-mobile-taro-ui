import './action-sheet.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { ActionSheet, showActionSheet } from './action-sheet';

export type { Action, ActionSheetProps, ActionSheetShowHandler } from './action-sheet';

export default attachPropertiesToComponent(ActionSheet, {
  show: showActionSheet,
});
