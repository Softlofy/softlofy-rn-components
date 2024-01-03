import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {TInputCommonProps} from '../types/input';
import useColors from '../contexts/ColorContext/useColors';
import useInputFieldColor from '../hooks/useInputFieldColor';
import FullWidthContainer from './FullWidthContainer';
import InputError from './InputError';

type TInputField = TInputCommonProps & {};

const InputField = (props: TInputField) => {
  const colors = useColors();
  const inputFieldColors = useInputFieldColor();
  const backgroundColor = props.bgColor || inputFieldColors.backgroundColor;

  const borderColor = props.error ? colors.red : backgroundColor;

  return (
    <FullWidthContainer>
      <TextInput
        style={[
          styles.input,
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
      <InputError error={props.error} />
    </FullWidthContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
});

export default InputField;
