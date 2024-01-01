import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ScreenTitle, {TScreenTitle} from './ScreenTitle';
import useThemeColor from '../hooks/useThemeColor';
import CustomStatusBar from './CustomStatusBar';

type TCommonScreenContainer = {
  children: React.ReactNode;
  statusBarBg?: string;
  barStyle?: StatusBarStyle | null | undefined;
  paddingHorizontal?: number;
  backgroundColor?: string;
  screenTitleProps?: TScreenTitle;
  refreshing?: boolean;
  refreshControlColors?: string[];
  onRefresh?: () => void;
};

export default function ScrollableScreenContainer(
  props: TCommonScreenContainer
) {
  const themeColor = useThemeColor();
  const padding = {
    paddingHorizontal:
      props.paddingHorizontal !== undefined ? props.paddingHorizontal : 16,
  };

  const titlePaddingHorizontal = padding.paddingHorizontal || 5;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {backgroundColor: props.backgroundColor || themeColor},
      ]}>
      <CustomStatusBar
        backgroundColor={props.statusBarBg || themeColor}
        barStyle={props.barStyle}
      />
      {props.screenTitleProps && (
        <ScreenTitle
          paddingHorizontal={titlePaddingHorizontal}
          {...props.screenTitleProps}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          props.refreshing !== undefined ? (
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
              colors={props.refreshControlColors}
            />
          ) : undefined
        }
        style={[styles.scrollView, padding]}
        keyboardShouldPersistTaps="handled">
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
