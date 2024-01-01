import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {TCommonButton} from './Button';
import Typography from '../Typography';
import useColors from '../../contexts/ColorContext/useColors';

type TButtonFullWidthFill = TCommonButton & {
  textColor?: string;
};

export default function ButtonTransparent(props: TButtonFullWidthFill) {
  const colors = useColors();

  return (
    <TouchableOpacity
      style={style.container}
      onPress={props.onPress}
      activeOpacity={1}
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
    alignItems: 'center',
  },
});
