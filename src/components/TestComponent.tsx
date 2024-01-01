import {View} from 'react-native';
import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import useSnackBar from '../contexts/SnackBarContext/useLoading';

import Button from './Button';
import Spacer from './Spacer';

const TestComponent = () => {
  const theme = useColors();
  const {showSnackBar} = useSnackBar();

  return (
    <View>
      <Spacer height={100} />
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
