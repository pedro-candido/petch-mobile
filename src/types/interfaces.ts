import { KeyboardType, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  type?: KeyboardType;
}

export interface ButtonProps {
  children: string;
}

export interface DividerProps {
  children: string;
}
