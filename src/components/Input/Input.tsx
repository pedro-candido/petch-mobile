import React from 'react';
import { InputProps } from '../../utils/interfaces';
import { NativeEventEmitter, View } from 'react-native';

import { IconContainer, InputContainer, StyledIcon, StyledInput } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '@petch/reducers/login/login.reducer';
import { selectPassword } from '@petch/pages/Login/LoginSelectors';

const Input = ({ value, type, ...rest }: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <StyledInput value={value} keyboardType="email-address" {...rest} />
    </InputContainer>
  );
};

const PasswordInput = ({ ...rest }: InputProps): JSX.Element => {
  const dispatch = useDispatch();
  const password = useSelector(selectPassword);
  const handleChange = ({ native }: NativeEventEmitter<Change>) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <InputContainer>
      <StyledInput
        onChangeText={(event) => handleChange(event)}
        value={password}
        secureTextEntry={true}
        placeholder={'Senha'}
        {...rest}
      />
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
