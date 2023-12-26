import {View, Button} from 'react-native';
import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import useLoading from '../contexts/LoadingContext/useLoading';

const TestComponent = () => {
  const theme = useColors();
  const {setIsLoading, isLoading} = useLoading();

  return (
    <View>
      <Button title={theme.red} onPress={() => setIsLoading(!isLoading)} />
    </View>
  );
};

export default TestComponent;
