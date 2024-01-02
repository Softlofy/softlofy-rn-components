import React from 'react';
import FlexContainer from './FlexContainer';
import NonScrollableScreenContainer from './NonScrollableScreenContainer';
import PhoneInput from './PhoneInput';

const TestComponent = () => {
  return (
    <NonScrollableScreenContainer
      screenTitleProps={{title: 'Test', showBackButton: true}}>
      <FlexContainer>
        <PhoneInput error="Error message here" />
      </FlexContainer>
    </NonScrollableScreenContainer>
  );
};

export default TestComponent;
