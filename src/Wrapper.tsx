import React from 'react';
import ColorArea from './contexts/ColorContext';
import LoadingArea from './contexts/LoadingContext';
import SnackBarArea from './contexts/SnackBarContext';
import CommonConstantsArea from './contexts/CommonConstantsContext';

type TProps = {
  children: React.ReactNode;
};

const Wrapper = (props: TProps) => {
  return (
    <ColorArea>
      <CommonConstantsArea>
        <SnackBarArea>
          <LoadingArea>{props.children}</LoadingArea>
        </SnackBarArea>
      </CommonConstantsArea>
    </ColorArea>
  );
};

export default Wrapper;
