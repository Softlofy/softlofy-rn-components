import {View, StyleSheet} from 'react-native';
import React from 'react';
import Typography from './Typography';
import useColors from '../contexts/ColorContext/useColors';

type TInputError = {
  error: React.ReactNode;
};

const InputError = (props: TInputError) => {
  const colors = useColors();
  return (
    <View style={styles.errorContainer}>
      <Typography fontSize={12} color={colors.red}>
        {props.error}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    paddingLeft: 10,
  },
});

export default InputError;
