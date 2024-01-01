import {View} from 'react-native';
import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import useSnackBar from '../contexts/SnackBarContext/useLoading';

import Button from './Button';

const TestComponent = () => {
  const theme = useColors();
  const {showSnackBar} = useSnackBar();

  return (
    <View>
      <Button
        title="test"
        variant="outline"
        themeColor="red"
        onPress={() => showSnackBar('test', 'error')}
      />
    </View>
  );
};

export default TestComponent;
