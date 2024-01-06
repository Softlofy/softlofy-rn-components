import React from 'react';
import {TInputCommonProps} from '../../types/input';
import InputFieldNormal from './InputFieldNormal';
import Typography from '../Typography';
import InputFieldPassword from './InputFieldPassword';

type TInputField = TInputCommonProps & {
  variant?: 'normal' | 'password';
};

const InputField = (props: TInputField) => {
  const {variant} = props;
  switch (variant) {
    case 'normal':
      return <InputFieldNormal {...props} />;
    case 'password':
      return <InputFieldPassword {...props} />;

    default:
      return <Typography>404</Typography>;
  }
};

export default InputField;
