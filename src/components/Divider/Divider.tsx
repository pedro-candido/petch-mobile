import React from 'react';
import fontsFamily from '@petch/styles/fontFamily';
import fontSize from '@petch/styles/sizes';
import { colors } from '@petch/theme';
import { DividerProps } from 'react-native-elements';
import { Text } from '..';
import { DividerContainer, DividerText, Line } from './style';

const Divider = ({ children }: DividerProps): JSX.Element => {
  return (
    <DividerContainer>
      <Line />
      <Text
        color={colors.textColor}
        fontFamily={fontsFamily.baloo2.medium500}
        fontSize={fontSize.md16}
        text={'ou'}
      />
      <Line />
    </DividerContainer>
  );
};

export default Divider;
