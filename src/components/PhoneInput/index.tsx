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
import CountryListModal from './CountryListModal';
import {TInputCommonProps} from '../../types/input';

type TPhoneInput = TInputCommonProps & {};

const PhoneInput = (props: TPhoneInput) => {
  const colors = useColors();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<TCountry>(
    countriesJson[0]
  );

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <FullWidthContainer>
      <CountryListModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setSelectedCountry={setSelectedCountry}
      />
      <FlexContainer justifyContent="flex-start" gap={10}>
        <FlagButton
          onPress={handleOpenModal}
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
