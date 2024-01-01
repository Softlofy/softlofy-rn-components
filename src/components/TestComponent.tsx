import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import Tag from './Tag';
import FlexContainer from './FlexContainer';
import NonScrollableScreenContainer from './NonScrollableScreenContainer';
import Flags from '../assets/flags';

const TestComponent = () => {
  const theme = useColors();

  return (
    <NonScrollableScreenContainer
      screenTitleProps={{title: 'Test', showBackButton: true}}
      paddingHorizontal={0}>
      <FlexContainer>{Flags['BD']()}</FlexContainer>
    </NonScrollableScreenContainer>
  );
};

export default TestComponent;
