import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Logo from '../../assets/logo';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Header, Subtitle, Wrapper } from './style';
import { Input, PasswordInput } from '../../components';
import { Button } from '../../components/Button';

const Login = (): JSX.Element => {
  return (
    <LinearGradient colors={['#FF7854', '#FD267D']}>
      <Container>
        <Header>
          <Logo />
          <Subtitle>Dê match no seu novo amigo de quatro patas</Subtitle>
        </Header>
        <Wrapper>
          <Input>E-mail</Input>
          <PasswordInput />
          <Button>Entrar</Button>
        </Wrapper>
      </Container>
    </LinearGradient>
  );
};

export default Login;
