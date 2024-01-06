import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Typography from '../Typography';
import FlexContainer from '../FlexContainer';
import getFlag, {TGetFlagParameters} from '../../assets/flags';

type TCountryButton = {
  country: {
    code: string;
    name: string;
    dial_code: string;
  };
  onPress: (code: string) => void;
};

const CountryButton = (props: TCountryButton) => {
  const country = props.country;

  const handlePress = () => {
    props.onPress(country.code);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FlexContainer justifyContent="flex-start" gap={10}>
        {getFlag(country.code as TGetFlagParameters)}
        <Typography>{country.dial_code}</Typography>
      </FlexContainer>
      <Typography>{country.name}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default CountryButton;
