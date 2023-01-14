import React from 'react';
import IcoMoon , { IconProps } from 'react-icomoon';
import { I_Icons } from './IconDef';
import  iconSet from './iconFiles'
import test from './test.json'

// const iconKeys =  iconSet.icons.map(icon=>icon.properties.name)
// type test = typeof iconKeys[number]['properties']

type Props = {
  icon: I_Icons
} & IconProps

const Icon = (props: Props) => <IcoMoon iconSet={iconSet} {...props}/>;

export default React.memo(Icon)