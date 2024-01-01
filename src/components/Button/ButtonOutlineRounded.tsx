import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {TCommonButton, TPartialButton} from './Button';
import Typography from '../Typography';
import useColors from '../../contexts/ColorContext/useColors';

type TButtonFullWidthOutline = TCommonButton & TPartialButton;

export default function ButtonOutlineRounded(props: TButtonFullWidthOutline) {
  const theme = useColors();
  const borderColor = {
    borderColor: props.disabled ? theme.gray : props.themeColor,
  };

  return (
    <TouchableOpacity
      style={[
        style.container,
        borderColor,
        {width: props.width || '100%', flex: props.flex},
      ]}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled}>
      <Typography color={props.disabled ? theme.gray : props.themeColor}>
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
    borderWidth: 1,
  },
});
