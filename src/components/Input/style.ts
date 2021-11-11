import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background: #fff;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`;

export const InputContainer = styled.View`
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  color: '';
  right: 10;
`;
