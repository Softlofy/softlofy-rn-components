import {Text, TextStyle} from 'react-native';
import React from 'react';
import {TTextAlign} from '../types/textAlign';
import {TFontWeight} from '../types/fontWeight';
import useColors from '../contexts/ColorContext/useColors';

export type TTypographyBase = {
  children: React.ReactNode;
  textAlign?: TTextAlign;
  color?: string;
  fontSize?: number;
  fontWeight?: TFontWeight;
  flex?: number;
  opacity?: number;
};

export default function Typography(props: TTypographyBase) {
  const colors = useColors();

  const style: TextStyle = {
    fontSize: props.fontSize || 14,
    textAlign: props.textAlign || 'left',
    color: props.color || colors.cyan,
    fontWeight: props.fontWeight || 'normal',
    margin: 0,
    flex: props.flex || 0,
    opacity: props.opacity || 1,
  };
  return <Text style={style}>{props.children}</Text>;
}
