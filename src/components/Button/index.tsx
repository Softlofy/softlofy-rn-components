import React from 'react';
import {View} from 'react-native';
import {TCommonButton, TPartialButton} from './Button';
import ButtonFillRounded from './ButtonFillRounded';
import ButtonTransparent from './ButtonTransparent';
import ButtonOutlineRounded from './ButtonOutlineRounded';

type TButton = TCommonButton &
  TPartialButton & {
    variant: 'fillRounded' | 'transparent' | 'outline';
  };

export default function Button(props: TButton) {
  switch (props.variant) {
    case 'fillRounded':
      return <ButtonFillRounded {...props} />;
    case 'transparent':
      return <ButtonTransparent {...props} />;
    case 'outline':
      return <ButtonOutlineRounded {...props} />;

    default:
      return <View />;
  }
}
