import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Logo from '../../assets/logo';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Header, InputWrapper, Subtitle, Wrapper } from './style';
import { Divider, Input, PasswordInput } from '../../components';
import { Button } from '../../components';

const Login = (): JSX.Element => {
  return (
    <LinearGradient colors={['#FF7854', '#FD267D']}>
      <Container>
        <Header>
          <Logo />
          <Subtitle>Dê match no seu novo amigo de quatro patas</Subtitle>
        </Header>
        <Wrapper>
          <InputWrapper>
            <Input>E-mail</Input>
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
