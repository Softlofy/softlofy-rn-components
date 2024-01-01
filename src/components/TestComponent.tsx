import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import Tag from './Tag';
import FlexContainer from './FlexContainer';
import ScrollableScreenContainer from './ScrollableScreenContainer';
import NonScrollableScreenContainer from './NonScrollableScreenContainer';

const TestComponent = () => {
  const theme = useColors();

  return (
    <NonScrollableScreenContainer
      screenTitleProps={{title: 'Test', showBackButton: true}}
      paddingHorizontal={0}>
      <FlexContainer>
        <Tag tag="test" backgroundColor={theme.amber} />
      </FlexContainer>
    </NonScrollableScreenContainer>
  );
};

export default TestComponent;
