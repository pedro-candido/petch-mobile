import React from 'react';
import { InputProps } from '../../types/interfaces';
import { View } from 'react-native';

import { IconContainer, InputContainer, StyledIcon, StyledInput } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Input = ({ value, type, ...rest }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput value={value} keyboardType="email-address" {...rest} />
    </InputContainer>
  );
};

const PasswordInput = (): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput secureTextEntry={true} placeholder={'Senha'} />
      <IconContainer>
        <TouchableOpacity activeOpacity={0.7}>
          <StyledIcon color={'#b3b3b3'} name="eye" type="feather" size={20} />
        </TouchableOpacity>
      </IconContainer>
    </InputContainer>
  );
};

const SearchInput = ({ ...rest }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput {...rest} />
      <IconContainer>
        <TouchableOpacity>
          <StyledIcon color={'#b3b3b3'} name="search" type="feather" size={14} />
        </TouchableOpacity>
      </IconContainer>
    </InputContainer>
  );
};

export { Input, PasswordInput, SearchInput };
