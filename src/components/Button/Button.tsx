import React from 'react';
import { ButtonProps } from '../../types/interfaces';
import { StyledButton } from './style';

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton activeOpacity={0.1} onPress={() => console.log('Hello World')}>
      {children}
    </StyledButton>
  );
};

export { Button };
