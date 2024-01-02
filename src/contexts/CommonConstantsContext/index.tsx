import React, {createContext} from 'react';
import {ChildrenProps} from '../../types/childrenProps';

const COMMON_CONSTANTS = {
  ACTIVE_OPACITY: 0.8,
  SCREEN_PADDING: 16,
};

export const CommonConstantsContext =
  createContext<typeof COMMON_CONSTANTS>(COMMON_CONSTANTS);

const CommonConstantsArea = (props: ChildrenProps) => {
  return (
    <CommonConstantsContext.Provider value={COMMON_CONSTANTS}>
      {props.children}
    </CommonConstantsContext.Provider>
  );
};

export default CommonConstantsArea;
