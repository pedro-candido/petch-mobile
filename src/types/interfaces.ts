import { KeyboardType } from 'react-native';

export interface InputProps {
  children: string;
  type?: KeyboardType;
}

export interface ButtonProps {
  children: string;
}

export interface DividerProps {
  children: string;
}
