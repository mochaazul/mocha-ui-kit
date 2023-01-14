import Icon from 'components/Icon';
import React, { PropsWithChildren } from 'react';
import { StyledButton } from './style';

export type ButtonProps = {
  htmlType?: "button" | "submit"
  disabled?: boolean
  icon?: React.ReactNode
  loading?: boolean,
  borderRadius?: number,
} & PropsWithChildren

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  htmlType = "button",
  disabled = false,
  loading  = false,
  borderRadius = 8
},ref)=>{
  return (
    <StyledButton 
      type={htmlType} 
      disabled={disabled} 
      loading={loading} 
      ref={ref}
      borderRadius={borderRadius}
    >
      <Icon icon='pencil' />
      {children}
    </StyledButton>
  )
})

Button.displayName = "Button"

export default React.memo(Button);
