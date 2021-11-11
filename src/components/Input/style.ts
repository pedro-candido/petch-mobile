import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background: #fff;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
  padding: 16px 14px;
  height: 48px;
  border-radius: 6px;
  font-size: 18px;
`;

export const InputContainer = styled.View`
  justify-content: center;
  margin: 1%;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  color: #0c0c0c;
  right: 10;
`;
