import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {TInputCommonProps} from '../types/input';
import useColors from '../contexts/ColorContext/useColors';
import useInputFieldColor from '../hooks/useInputFieldColor';

type TInputField = TInputCommonProps & {};

const InputField = (props: TInputField) => {
  const colors = useColors();
  const inputFieldColors = useInputFieldColor();
  const backgroundColor = props.bgColor || inputFieldColors.backgroundColor;

  const borderColor = props.error ? colors.red : backgroundColor;

  return (
    <TextInput
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
          color: props.textColor || inputFieldColors.textColor,
        },
      ]}
      placeholderTextColor={
        props.placeholderTextColor || inputFieldColors.placeholderColor
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,

    borderWidth: 1,
  },
});

export default InputField;
