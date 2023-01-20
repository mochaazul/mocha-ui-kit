import React from 'react';
import IcoMoon, { IconProps } from 'react-icomoon';
import { I_Icons } from './iconTypes';
import  iconSet from './icons.json';

type Props = {
  icon: I_Icons,
  size?: number
} & IconProps

const Icon = ({
	size = 12,
	...props
}: Props) => <IcoMoon iconSet={ iconSet } size={ size } { ...props }/>;

export default React.memo(Icon);