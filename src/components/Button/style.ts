import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: #ff7854;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid #fff;
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin: 2% 0;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.primary.main.contrastColor};
  display: flex;
  font-weight: 600;
  font-size: 18px;
`;

export const IconContainer = styled.View``;

export const StyledGoogleButton = styled.Button`
  background-color: #fd267d;
`;

export const GoogleButtonContainer = styled.TouchableOpacity`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  display: flex;
  flex-flow: row;
  border: 2px solid #fff;
  padding: 15px 27px;
  justify-content: space-around;
`;

export const StyledIcon = styled(Icon)``;
