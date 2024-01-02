import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useCommonConstants from '../../contexts/CommonConstantsContext/useCommonConstants';
import getFlag, {TGetFlagParameters} from '../../assets/flags';
import Typography from '../Typography';
import useColors from '../../contexts/ColorContext/useColors';

type TFlagButton = {
  countryCode: string;
  dialCode: string;
  bgColor?: string;
  textColor?: string;
  onPress?: () => void;
};

const FlagButton = (props: TFlagButton) => {
  const commonConstants = useCommonConstants();
  const colors = useColors();
  const backgroundColor = props.bgColor || colors.light_gray;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={commonConstants.ACTIVE_OPACITY}
      style={[style.container, {backgroundColor}]}>
      {getFlag(props.countryCode as TGetFlagParameters)}
      <Typography color={props.textColor || colors.black}>
        {props.dialCode}
      </Typography>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
});

export default FlagButton;
