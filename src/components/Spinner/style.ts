import Styled from 'styled-components';

export const StyledSpinner = Styled.span`
  width: 12px;
  height: 12px;
  border: 2px solid ${props => props.color};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  } 
`;