import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TInputCommonProps} from '../../types/input';
import useColors from '../../contexts/ColorContext/useColors';
import useInputFieldColor from '../../hooks/useInputFieldColor';
import FullWidthContainer from '../FullWidthContainer';
import InputError from '../InputError';
import SVGs from '../../assets';

type TInputField = TInputCommonProps & {};

const InputFieldPassword = (props: TInputField) => {
  const colors = useColors();
  const inputFieldColors = useInputFieldColor();
  const backgroundColor = props.bgColor || inputFieldColors.backgroundColor;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const borderColor = props.error ? colors.red : backgroundColor;

  const color = props.textColor || inputFieldColors.textColor;

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
              color,
            },
          ]}
          placeholderTextColor={
            props.placeholderTextColor || inputFieldColors.placeholderColor
          }
          secureTextEntry={!showPassword}
          {...props}
        />
        <TouchableOpacity activeOpacity={0.8} onPress={handleTogglePassword}>
          {showPassword ? SVGs.Eye(24, 24, color) : SVGs.EyeOff(24, 24, color)}
        </TouchableOpacity>
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

export default InputFieldPassword;
