import './skeleton.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { Skeleton, SkeletonParagraph, SkeletonTitle } from './skeleton';

export type { SkeletonProps, SkeletonTitleProps } from './skeleton';

export default attachPropertiesToComponent(Skeleton, {
  Title: SkeletonTitle,
  Paragraph: SkeletonParagraph,
});
