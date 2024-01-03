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
};
