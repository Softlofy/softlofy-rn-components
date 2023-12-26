import React from 'react';
import ColorArea from './contexts/ColorContext';
import LoadingArea from './contexts/LoadingContext';

type TProps = {
  children: React.ReactNode;
};

const Wrapper = (props: TProps) => {
  return (
    <ColorArea>
      <LoadingArea>{props.children}</LoadingArea>
    </ColorArea>
  );
};

export default Wrapper;
