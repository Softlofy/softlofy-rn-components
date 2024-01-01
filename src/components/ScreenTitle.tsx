import React from 'react';
import {StyleSheet, View} from 'react-native';

import Spacer from './Spacer';
import Typography from './Typography';
import useCustomNavigate from '../hooks/useCustomNavigate';
import BackButton from './BackButton';

export type TScreenTitle = {
  showBackButton?: boolean;
  customBackIcon?: React.ReactNode;
  backScreen?: string;
  title?: string;
  showTickMark?: boolean;
  handleTick?: () => void;
  paddingHorizontal?: number;
  rightComponent?: React.ReactNode;
};

export default function ScreenTitle(props: TScreenTitle) {
  const {navigate, goBack} = useCustomNavigate();

  const handleNavigate = () => {
    if (props.backScreen) {
      navigate(props.backScreen);
    } else {
      goBack();
    }
  };

  return (
    <View
      style={[
        styles.titleContainer,
        {paddingHorizontal: props.paddingHorizontal},
      ]}>
      {props.showBackButton ? (
        <BackButton onPress={handleNavigate} />
      ) : (
        <Spacer height={32} width={32} />
      )}
      <Typography fontWeight="600" textAlign="center">
        {props.title}
      </Typography>
      <View style={styles.rightComponentContainer}>{props.rightComponent}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  rightComponentContainer: {
    width: 70,
  },
});
