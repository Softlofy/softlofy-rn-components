import React from 'react';
import ColorArea from './contexts/ColorContext';
import LoadingArea from './contexts/LoadingContext';
import SnackBarArea from './contexts/SnackBarContext';

type TProps = {
  children: React.ReactNode;
};

const Wrapper = (props: TProps) => {
  return (
    <ColorArea>
      <SnackBarArea>
        <LoadingArea>{props.children}</LoadingArea>
      </SnackBarArea>
    </ColorArea>
  );
};

export default Wrapper;
