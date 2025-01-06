import { IconName, IconSize } from '@/core/icon/constants.js';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** icon 이름 */
  icon: IconName;
  size?: IconSize;
}

/**
 * core Icon UI
 *
 * svgr/webpack을 사용한 svg 컴포넌트
 */
export const Icon = ({ icon, size = IconSize.md, ...rest }: IconProps) => {
  const SVGIcon = IconName[icon] as React.FC<React.SVGProps<SVGSVGElement>>;

  return <SVGIcon width={size} height={size} {...rest} />;
};
