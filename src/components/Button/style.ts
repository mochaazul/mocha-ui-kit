import { colors } from 'constant';
import designVar from 'constant/designVars';
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${props => props.borderRadius}px;
  border: none;
  
  // Full width props
  ${props => props.fullWidth && 'width: 100%;'}

  color:  ${props => props.disabled ? `${designVar.grey.g02}` : `${designVar.text.primary}`};

  box-shadow: ${designVar.elevation.level3};

  background-color: ${props => props.disabled ? `${designVar.grey.g01};` : `${designVar.primary};`}

  padding: 8px 24px;
  outline: none;
  cursor: pointer;

  .btn-icon-prefix{
    margin-right: 8px;
  }

  .btn-icon-suffix{
    margin-left: 8px;
  } 
  :active{
    box-shadow: ${designVar.elevation.level1};
    transition: 150ms all;
  }
  :hover{
    transition: 150ms all;
    background-color:  ${props => !props.disabled && `${designVar.primaryLighter}`} ;
    
  }
  transition: 150ms all;

`;
