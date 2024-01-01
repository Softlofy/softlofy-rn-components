import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SVGs from '../assets';
import Typography from './Typography';
import useAccentColor from '../hooks/useAccentColor';

type TBackButton = {
  onPress?: () => void;
};

const BackButton = (props: TBackButton) => {
  const accentColor = useAccentColor();
  const os = Platform.OS;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.8}>
      {os === 'android' ? (
        SVGs.BackAndroid(32, 32, accentColor)
      ) : (
        <>
          {SVGs.BackIos(32, 32, accentColor)}
          <Typography>Back</Typography>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default BackButton;
