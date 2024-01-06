import React, {useState} from 'react';
import FullWidthContainer from '../FullWidthContainer';
import FlexContainer from '../FlexContainer';
import FlagButton from './FlagButton';
import InputFieldPhoneNumber from './InputFieldPhoneNumber';
import {TCountry} from '../../types/country';
import countries from '../../assets/CountryCodes.json';
import CountryListModal from './CountryListModal';
import {TInputCommonProps} from '../../types/input';
import InputError from '../InputError';

type TPhoneInput = TInputCommonProps & {
  dialCode?: string;
  setDialCode: (dialCode: string) => void;
};

const PhoneInput = (props: TPhoneInput) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const defaultSelectedCountry = props.dialCode
    ? countries.find(item => item.dial_code === props.dialCode) || countries[0]
    : countries[0];

  const [selectedCountry, setSelectedCountry] = useState<TCountry>(
    defaultSelectedCountry
  );

  const handleSetSelectedCountry = (country: TCountry) => {
    setSelectedCountry(country);
    props.setDialCode(country.dial_code);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <FullWidthContainer>
      <CountryListModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setSelectedCountry={handleSetSelectedCountry}
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
      <InputError error={props.error} />
    </FullWidthContainer>
  );
};

export default PhoneInput;
