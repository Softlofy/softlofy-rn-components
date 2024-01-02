import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import FullWidthContainer from '../FullWidthContainer';
import Typography from '../Typography';
import useColors from '../../contexts/ColorContext/useColors';
import FlexContainer from '../FlexContainer';
import FlagButton from './FlagButton';
import InputFieldPhoneNumber from './InputFieldPhoneNumber';
import {TCountry} from '../../types/country';
import countriesJson from '../../assets/CountryCodes.json';

type TPhoneInput = {
  bgColor?: string;
  textColor?: string;
  error?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  cursorColor?: string;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
};

const PhoneInput = (props: TPhoneInput) => {
  const colors = useColors();

  const [selectedCountry, setSelectedCountry] = useState<TCountry>(
    countriesJson[0]
  );

  return (
    <FullWidthContainer>
      <FlexContainer justifyContent="flex-start" gap={10}>
        <FlagButton
          countryCode={selectedCountry.code}
          dialCode={selectedCountry.dial_code}
          bgColor={props.bgColor}
          textColor={props.textColor}
        />
        <InputFieldPhoneNumber
          onChangeText={props.onChangeText}
          value={props.value}
          bgColor={props.bgColor}
          textColor={props.textColor}
          cursorColor={props.cursorColor}
          onFocus={props.onFocus}
          placeholder={props.placeholder || 'Write Phone Number'}
          error={props.error}
        />
      </FlexContainer>
      <View style={styles.errorContainer}>
        <Typography fontSize={12} color={colors.red}>
          {props.error}
        </Typography>
      </View>
    </FullWidthContainer>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    paddingLeft: 10,
  },
});

export default PhoneInput;
