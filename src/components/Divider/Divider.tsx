import React from 'react';
import { DividerProps } from 'react-native-elements';
import { DividerContainer, DividerText, Line } from './style';

const Divider = ({ children }: DividerProps): JSX.Element => {
  return (
    <DividerContainer>
      <Line />
      <DividerText>{children}</DividerText>
      <Line />
    </DividerContainer>
  );
};

export default Divider;
