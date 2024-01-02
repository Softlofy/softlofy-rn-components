import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import useColors from '../../contexts/ColorContext/useColors';

type TInputFieldPhoneNumber = {
  bgColor?: string;
  textColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  cursorColor?: string;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  error?: string;
};

const InputFieldPhoneNumber = (props: TInputFieldPhoneNumber) => {
  const colors = useColors();
  const backgroundColor = props.bgColor || colors.light_gray;

  const borderColor = props.error ? colors.red : backgroundColor;

  return (
    <TextInput
      style={[
        styles.input,
        {backgroundColor, borderColor, color: props.textColor || colors.black},
      ]}
      cursorColor={props.cursorColor || colors.sky}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor || colors.gray}
      onFocus={props.onFocus}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    color: 'black',
    borderWidth: 1,
  },
});

export default InputFieldPhoneNumber;
