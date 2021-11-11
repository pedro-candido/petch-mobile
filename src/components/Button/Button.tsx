import React from 'react';
import { ButtonProps } from '../../types/interfaces';
import { StyledButton, StyledGoogleButton, StyledText } from './style';

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton activeOpacity={0.8} onPress={() => console.log('Hello World')}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

const GoogleButton = ({ children }: ButtonProps) => {
  return (
    <StyledGoogleButton>
      <StyledText>{children}</StyledText>
    </StyledGoogleButton>
  );
};

export { Button, GoogleButton };
