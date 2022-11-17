import './dialog.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { show } from './show';
import { alert } from './alert';
import { confirm } from './confirm';
import { clear } from './clear';
import { Dialog } from './dialog';

export type { DialogProps } from './dialog';
export type { Action } from './dialog-action-button';
export type { DialogShowProps, DialogShowHandler } from './show';
export type { DialogAlertProps } from './alert';
export type { DialogConfirmProps } from './confirm';

export default attachPropertiesToComponent(Dialog, {
  show,
  alert,
  confirm,
  clear,
});
