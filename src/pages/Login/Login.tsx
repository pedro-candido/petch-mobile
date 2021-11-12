import React, { useState } from 'react';
import Logo from '../../assets/logo';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Container,
  CreateAccount,
  ForgotPassword,
  ForgotPasswordText,
  Header,
  InputWrapper,
  Subtitle,
  Wrapper,
} from './style';
import { Divider, Input, PasswordInput } from '../../components';
import { Button } from '../../components';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { GoogleButton } from '../../components/Button';

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
          <Button buttonText="Entrar" />
        </Wrapper>
        <Divider>ou</Divider>
        <GoogleButton buttonText="Entre com o Google" />
        <ForgotPassword>
          <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPassword>
        <CreateAccount.Container>
          <CreateAccount.Text>
            Não tem conta? <CreateAccount.Text>Cadastre-se</CreateAccount.Text>
          </CreateAccount.Text>
        </CreateAccount.Container>
      </Container>
    </LinearGradient>
  );
};

export default Login;
