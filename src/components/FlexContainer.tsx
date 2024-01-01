import {DimensionValue, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

type TFlexContainer = {
  children: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flex?: number;
  flexWrap?: 'wrap' | 'nowrap';
  gap?: number;
  padding?: number;
  margin?: number;
  backgroundColor?: string;
  width?: DimensionValue | undefined;
};

const FlexContainer = (props: TFlexContainer) => {
  const styles: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    justifyContent: props.justifyContent || 'space-between',
    alignItems: props.alignItems || 'center',
    flexWrap: props.flexWrap || 'wrap',
    flex: props.flex,
    gap: props.gap,
    padding: props.padding,
    margin: props.margin,
    backgroundColor: props.backgroundColor,
    width: props.width,
  };
  return <View style={styles}>{props.children}</View>;
};

export default FlexContainer;
