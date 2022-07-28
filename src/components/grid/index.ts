import './grid.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Grid, GridItem } from './grid';

export type { GridProps, GridItemProps } from './grid';

export default attachPropertiesToComponent(Grid, {
  Item: GridItem,
});
