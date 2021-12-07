import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonProps } from '../../utils/interfaces';
import {
  GoogleButtonContainer,
  IconContainer,
  StyledButton,
  StyledGoogleButton,
  StyledIcon,
  StyledText,
} from './style';

const Button = ({ buttonText }: ButtonProps): JSX.Element => {
  return (
    <StyledButton activeOpacity={0.8} onPress={() => console.log('Hello World')}>
      <StyledText>{buttonText}</StyledText>
    </StyledButton>
  );
};

const GoogleButton = ({ buttonText }: ButtonProps) => {
  return (
    <GoogleButtonContainer activeOpacity={0.75}>
      <IconContainer>
        <StyledIcon color={'#fff'} name="google" type="font-awesome" size={20} />
      </IconContainer>
      <StyledText>{buttonText}</StyledText>
    </GoogleButtonContainer>
  );
};

export { Button, GoogleButton };
