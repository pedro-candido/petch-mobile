import { Text, StyleSheet } from 'react-native';
import { AlignTypes } from '@petch/constants/Enums';

interface IDefaultTextProps {
  text: string | number;
  color: string;
  fontFamily: string;
  fontSize: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  textDecorationLine?: boolean;
}

const DefaultText = ({
  text,
  color,
  fontFamily,
  fontSize,
  textAlign,
  textDecorationLine = false,
  ...rest
}: IDefaultTextProps) => {
  const styleManager = StyleSheet.create({
    textProps: {
      color,
      fontFamily,
      fontSize,
      textAlign,
      textDecorationLine: textDecorationLine ? 'underline' : 'none',
    },
  });
  return (
    <Text style={styleManager.textProps} {...rest}>
      {text}
    </Text>
  );
};

export default DefaultText;
