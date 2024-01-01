import {Appearance, StatusBar, StatusBarStyle} from 'react-native';
import React from 'react';
import useThemeColor from '../hooks/useThemeColor';

type TCustomStatusBar = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle | null | undefined;
};

const CustomStatusBar = (props: TCustomStatusBar) => {
  const themeColor = useThemeColor();
  const barStyle =
    Appearance.getColorScheme() === 'dark' ? 'light-content' : 'dark-content';
  return (
    <StatusBar
      barStyle={props.barStyle || barStyle}
      backgroundColor={props.backgroundColor || themeColor}
    />
  );
};

export default CustomStatusBar;
