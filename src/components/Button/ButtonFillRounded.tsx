import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {TCommonButton, TPartialButton} from './Button';
import Typography from '../Typography';
import useColors from '../../contexts/ColorContext/useColors';

type TButtonFullWidthFill = TCommonButton & TPartialButton;

export default function ButtonFillRounded(props: TButtonFullWidthFill) {
  const colors = useColors();
  const backgroundColor = {
    backgroundColor: props.disabled ? colors.gray : props.backgroundColor,
  };

  return (
    <TouchableOpacity
      style={[
        style.container,
        backgroundColor,
        {width: props.width || '100%', flex: props.flex},
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled}>
      <Typography color={props.disabled ? colors.black : props.textColor}>
        {props.title}
      </Typography>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
});
