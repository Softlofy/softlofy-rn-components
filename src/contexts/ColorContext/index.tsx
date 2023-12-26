import React, {createContext} from 'react';
import COLORS from '../../constants/COLORS';
import {TColors} from '../../types/theme';
import {ChildrenProps} from '../../types/childrenProps';

export const ColorContext = createContext<TColors>(COLORS);

const ColorArea = (props: ChildrenProps) => {
  return (
    <ColorContext.Provider value={COLORS}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorArea;
