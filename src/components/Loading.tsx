import {ActivityIndicator} from 'react-native';
import React from 'react';
import ModalContainer from './ModalContainer';

type TLoading = {
  spinnerColor?: string;
};

const Loading = (props: TLoading) => {
  return (
    <ModalContainer>
      <ActivityIndicator color={props.spinnerColor} size="large" />
    </ModalContainer>
  );
};

export default Loading;
