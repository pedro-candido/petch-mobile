import React, { useState } from 'react';
import Logo from '../../assets/logo';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Header, InputWrapper, Subtitle, Wrapper } from './style';
import { Divider, Input, PasswordInput } from '../../components';
import { Button } from '../../components';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };

  return (
    <LinearGradient colors={['#FF7854', '#FD267D']}>
      <Container>
        <Header>
          <Logo />
          <Subtitle>Dê match no seu novo amigo de quatro patas</Subtitle>
        </Header>
        <Wrapper>
          <InputWrapper>
            <Input
              type="email-address"
              value={email}
              placeholder="E-mail"
              onChangeText={(text) => setEmail(text)}
            />
            <PasswordInput />
          </InputWrapper>
          <Button>Entrar</Button>
        </Wrapper>
        <Divider>ou</Divider>
      </Container>
    </LinearGradient>
  );
};

export default Login;
