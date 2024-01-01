import React from 'react';
import useColors from '../contexts/ColorContext/useColors';
import Tag from './Tag';
import FlexContainer from './FlexContainer';
import ScrollableScreenContainer from './ScrollableScreenContainer';

const TestComponent = () => {
  const theme = useColors();

  return (
    <ScrollableScreenContainer
      screenTitleProps={{title: 'test', showBackButton: true}}
      paddingHorizontal={10}>
      <FlexContainer>
        <Tag tag="test" backgroundColor={theme.amber} />
      </FlexContainer>
    </ScrollableScreenContainer>
  );
};

export default TestComponent;
