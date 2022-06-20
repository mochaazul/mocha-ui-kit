import React from "react";
import styled from 'styled-components';

// Custom Text Component Interface
// if you need to add new props please change the corresponding interface
// This is for HEADING ELEMENT
export interface TextHeadingInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

export interface TextParagraphInterface extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
}

const fontFamily = 'Poppins';

export const StyledH1 = styled.h1`
  font-size: 3.5rem;
  font-style: unset;
`;

export const StyledH2 = styled.h2`
  font-family: ${ fontFamily };
  font-size: 2.5rem;
  font-style: unset;
`;
export const StyledH3 = styled.h3`
  font-family: ${ fontFamily };
  font-size: 2rem;
  font-style: unset;
`;
export const StyledH4 = styled.h4`
  font-family: ${ fontFamily };
  font-size: 1.7rem;
  font-style: unset;
`;
export const StyledH5 = styled.h5`
  font-family: ${ fontFamily };
  font-size: 1.2rem;
  font-style: unset;
`;
export const StyledH6 = styled.h6`
  font-family: ${ fontFamily };
  font-size: 1rem;
  font-style: unset;
`;

export const StyledP = styled.p`
  font-family: ${ fontFamily };
  font-size: 1.2rem;
  font-style: unset;
`;
