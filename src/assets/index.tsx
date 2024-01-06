import React from 'react';
import BackAndroid from './icons/arrow-left-android.svg';
import BackIos from './icons/arrow-left-ios.svg';
import Check from './icons/check.svg';
import EyeOff from './icons/eye-off.svg';
import Eye from './icons/eye.svg';
import Info from './icons/info.svg';
import Warning from './icons/warning.svg';

const SVGs = {
  BackAndroid: (height?: number, width?: number, color?: string) => (
    <BackAndroid height={height} width={width} color={color} />
  ),
  BackIos: (height?: number, width?: number, color?: string) => (
    <BackIos height={height} width={width} color={color} />
  ),
  Check: (height?: number, width?: number, color?: string) => (
    <Check height={height} width={width} color={color} />
  ),
  EyeOff: (height?: number, width?: number, color?: string) => (
    <EyeOff height={height} width={width} color={color} />
  ),
  Eye: (height?: number, width?: number, color?: string) => (
    <Eye height={height} width={width} color={color} />
  ),
  Info: (height?: number, width?: number, color?: string) => (
    <Info height={height} width={width} color={color} />
  ),
  Warning: (height?: number, width?: number, color?: string) => (
    <Warning height={height} width={width} color={color} />
  ),
};

export default SVGs;
