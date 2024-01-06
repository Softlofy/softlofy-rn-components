import {TextInput, StyleSheet, View} from 'react-native';
import React from 'react';
import {TInputCommonProps} from '../../types/input';
import useColors from '../../contexts/ColorContext/useColors';
import useInputFieldColor from '../../hooks/useInputFieldColor';
import FullWidthContainer from '../FullWidthContainer';
import InputError from '../InputError';

type TInputField = TInputCommonProps & {};

const InputFieldNormal = (props: TInputField) => {
  const colors = useColors();
  const inputFieldColors = useInputFieldColor();
  const backgroundColor = props.bgColor || inputFieldColors.backgroundColor;

  const borderColor = props.error ? colors.red : backgroundColor;

  return (
    <FullWidthContainer>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor,
            borderColor,
          },
        ]}>
        {props.leftIcon}

        <TextInput
          style={[
            styles.input,
            {
              color: props.textColor || inputFieldColors.textColor,
            },
          ]}
          placeholderTextColor={
            props.placeholderTextColor || inputFieldColors.placeholderColor
          }
          {...props}
        />
      </View>
      <InputError error={props.error} />
    </FullWidthContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  input: {
    flex: 1,
  },
});

export default InputFieldNormal;
