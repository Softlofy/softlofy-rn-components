import React from 'react';
import Check from './icons/check.svg';
import Info from './icons/info.svg';
import Warning from './icons/warning.svg';

const SVGs = {
  Check: (height?: number, width?: number, color?: string) => (
    <Check height={height} width={width} color={color} />
  ),
  Info: (height?: number, width?: number, color?: string) => (
    <Info height={height} width={width} color={color} />
  ),
  Warning: (height?: number, width?: number, color?: string) => (
    <Warning height={height} width={width} color={color} />
  ),
};

export default SVGs;
