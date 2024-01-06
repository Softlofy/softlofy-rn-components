import {KeyboardTypeOptions} from 'react-native';

export type TInputCommonProps = {
  bgColor?: string;
  textColor?: string;
  error?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  cursorColor?: string;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  leftIcon?: React.ReactNode;
};
