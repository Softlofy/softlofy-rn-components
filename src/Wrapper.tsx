import React from 'react';
import ColorArea from './contexts/ColorContext';
import LoadingArea from './contexts/LoadingContext';
import SnackBarArea from './contexts/SnackBarContext';
import {NavigationContainer} from '@react-navigation/native';

type TProps = {
  children: React.ReactNode;
};

const Wrapper = (props: TProps) => {
  return (
    <NavigationContainer>
      <ColorArea>
        <SnackBarArea>
          <LoadingArea>{props.children}</LoadingArea>
        </SnackBarArea>
      </ColorArea>
    </NavigationContainer>
  );
};

export default Wrapper;
