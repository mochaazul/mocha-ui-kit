import Icon from 'components/Icon';
import Spinner from 'components/Spinner';
import React, { PropsWithChildren } from 'react';
import { StyledButton } from './style';

export type ButtonProps = {
  htmlType?: 'button' | 'submit'
  disabled?: boolean
  icon?: React.ReactNode
	iconSuffix?: React.ReactNode
  loading?: boolean,
  borderRadius?: number,
	fullWidth?: boolean,
} & PropsWithChildren & React.HtmlHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
	children,
	htmlType = 'button',
	disabled = false,
	loading  = false,
	borderRadius = 10,
	icon,
	iconSuffix,
	fullWidth = false,
	...props
}, ref) => {

	const btnShouldDisable = () => {
		return loading || disabled;
	};

	return (
		<StyledButton
			type={ htmlType }
			disabled={ btnShouldDisable() }
			loading={ loading }
			ref={ ref }
			borderRadius={ borderRadius }
			fullWidth={ fullWidth }
			{ ...props }
		>
			{
				icon &&
				<span className='btn-icon-prefix' >
					{ /* Check if Loading and there is icon, we replace the icon with loading spinnner */ }
					{	loading ? <Spinner /> : icon }
				</span>
			}

			{ /* Show loading spinner when there is no icon and loading = true */ }
			{ !icon && loading && <Spinner style={ { marginRight: '8px' } }/>	}

			{ children }

			{
				iconSuffix &&
				<span className='btn-icon-suffix' >
					{	iconSuffix }
				</span>
			}
		</StyledButton>
	);
});

Button.displayName = 'Button';

export default React.memo(Button);
