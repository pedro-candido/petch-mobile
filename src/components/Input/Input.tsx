import React from 'react';
import { InputProps } from '../../types/interfaces';

import { InputContainer, StyledIcon, StyledInput } from './style';

const Input = ({ children, type }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput placeholder={children} keyboardType={type} />
    </InputContainer>
  );
};

const PasswordInput = (): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput placeholder={'Senha'} secureTextEntry={true} />
      <StyledIcon name="eye" type="feather" size={14} />
    </InputContainer>
  );
};

const SearchInput = ({ children }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput placeholder={children} />
      <StyledIcon name="search" type="feather" size={14} />
    </InputContainer>
  );
};

export { Input, PasswordInput, SearchInput };
