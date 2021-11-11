import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  margin: 24px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  margin: 10% 0;
`;

export const Subtitle = styled.Text`
  margin-top: 5%;
  color: ${({ theme }) => theme.colors.subtitleText};
  font-size: 18px;
`;

export const Wrapper = styled.View`
  display: flex;
`;

export const InputWrapper = styled.View`
  margin: 10% 0;
`;
