import { colors } from 'constant';
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props)=> props.borderRadius}px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;

`

