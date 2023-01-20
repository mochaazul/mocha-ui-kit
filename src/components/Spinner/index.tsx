import designVar from 'constant/designVars';
import React from 'react';
import { StyledSpinner } from './style';

type Props = {
	color?: string
} & React.HtmlHTMLAttributes<HTMLSpanElement>

const Spinner: React.FC<Props> = ({ color = designVar.text.primary, ...props }) => {
	return (
		<StyledSpinner color={ color } { ...props } />
	);
};

export default Spinner;