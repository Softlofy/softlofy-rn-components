import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

type TFullWidthContainer = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const FullWidthContainer = (props: TFullWidthContainer) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default FullWidthContainer;
