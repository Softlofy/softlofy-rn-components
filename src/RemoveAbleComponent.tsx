import {View} from 'react-native';
import React from 'react';

import InputField from './components/InputField';
import PhoneInput from './components/PhoneInput';

const RemoveAbleComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <View>
      <PhoneInput setDialCode={setValue} />
    </View>
  );
};

export default RemoveAbleComponent;
