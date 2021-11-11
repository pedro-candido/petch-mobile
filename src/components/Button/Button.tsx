import React from 'react';
import { Text } from 'react-native';
import { ButtonProps } from '../../types/interfaces';
import { StyledButton, StyledText } from './style';

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <StyledButton activeOpacity={0.8} onPress={() => console.log('Hello World')}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

export { Button };
