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
  color: #fff;
  display: flex;
  font-weight: 600;
  font-size: 18px;
`;

export const StyledGoogleButton = styled.Button`
  background-color: #fd267d;
`;
