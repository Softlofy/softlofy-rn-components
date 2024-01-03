import React from 'react';
import FlexContainer from './FlexContainer';
import NonScrollableScreenContainer from './NonScrollableScreenContainer';
import PhoneInput from './PhoneInput';
import InputField from './InputField';

const TestComponent = () => {
  return (
    <NonScrollableScreenContainer
      screenTitleProps={{title: 'Test', showBackButton: true}}>
      <FlexContainer>
        <PhoneInput error="Error message here" />
        <InputField error="Error" placeholder="Placeholder" />
      </FlexContainer>
    </NonScrollableScreenContainer>
  );
};

export default TestComponent;
