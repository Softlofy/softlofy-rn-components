import {View} from 'react-native';
import React from 'react';
import useSnackBar from './contexts/SnackBarContext/useSnackBar';
import Button from './components/Button';
import {useLoading} from '..';

const RemoveAbleComponent = () => {
  const {showSnackBar} = useSnackBar();
  return (
    <View>
      <Button variant="fillRounded" title="Remove" onPress={() => {}} />
    </View>
  );
};

export default RemoveAbleComponent;
