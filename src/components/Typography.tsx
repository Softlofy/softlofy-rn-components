import {Text, TextStyle} from 'react-native';
import React from 'react';
import {TTextAlign} from '../types/textAlign';
import {TFontWeight} from '../types/fontWeight';
import useAccentColor from '../hooks/useAccentColor';

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
  const accentColor = useAccentColor();

  const style: TextStyle = {
    fontSize: props.fontSize || 14,
    textAlign: props.textAlign || 'left',
    color: props.color || accentColor,
    fontWeight: props.fontWeight || 'normal',
    margin: 0,
    flex: props.flex || 0,
    opacity: props.opacity || 1,
  };
  return <Text style={style}>{props.children}</Text>;
}
