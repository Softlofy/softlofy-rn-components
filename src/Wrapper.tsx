import React, {useEffect} from 'react';
import ColorArea from './contexts/ColorContext';
import LoadingArea from './contexts/LoadingContext';
import SnackBarArea from './contexts/SnackBarContext';
import CommonConstantsArea from './contexts/CommonConstantsContext';
import {Appearance} from 'react-native';

type TProps = {
  children: React.ReactNode;
  colorScheme?: 'light' | 'dark';
};

const Wrapper = (props: TProps) => {
  useEffect(() => {
    if (props.colorScheme) {
      Appearance.setColorScheme(props.colorScheme);
    }
  }, [props.colorScheme]);
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
