import {SafeAreaView, StyleSheet, View, StatusBarStyle} from 'react-native';
import React from 'react';
import useThemeColor from '../hooks/useThemeColor';
import CustomStatusBar from './CustomStatusBar';
import ScreenTitle, {TScreenTitle} from './ScreenTitle';

type TNonScrollableScreenContainer = {
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor?: string;
  statusBarBg?: string;
  barStyle?: StatusBarStyle | null | undefined;
  screenTitleProps?: TScreenTitle;
};

export default function NonScrollableScreenContainer(
  props: TNonScrollableScreenContainer
) {
  const themeColor = useThemeColor();
  const paddingHorizontal =
    props.paddingHorizontal !== undefined ? props.paddingHorizontal : 16;

  const titlePaddingHorizontal = !paddingHorizontal ? 5 : 0;

  const extraStyle = {
    backgroundColor: props.backgroundColor || themeColor,
    paddingHorizontal: paddingHorizontal,
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={[styles.screenContainer, extraStyle]}>
        <CustomStatusBar
          backgroundColor={props.backgroundColor}
          barStyle={props.barStyle}
        />
        {props.screenTitleProps && (
          <ScreenTitle
            paddingHorizontal={titlePaddingHorizontal}
            {...props.screenTitleProps}
          />
        )}
        {props.children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
