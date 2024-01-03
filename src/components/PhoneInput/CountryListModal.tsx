import {
  View,
  Modal,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Keyboard,
} from 'react-native';
import React from 'react';
import useThemeColor from '../../hooks/useThemeColor';
import countries from '../../assets/CountryCodes.json';
import CountryButton from './CountryButton';
import Spacer from '../Spacer';
import debounce from 'lodash.debounce';
import Typography from '../Typography';
import {TCountry} from '../../types/country';
import InputField from '../InputField';
import Button from '../Button';
import useColors from '../../contexts/ColorContext/useColors';

type TCountryListModal = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  setSelectedCountry: (country: TCountry) => void;
};

const CountryListModal = (props: TCountryListModal) => {
  const themeColor = useThemeColor();
  const colors = useColors();
  const [filteredList, setFilteredList] = React.useState(
    countries.slice(0, 25)
  );

  const backgroundColor = themeColor;

  const handleSearch = debounce((text: string) => {
    const regex = new RegExp(text, 'i');
    const result = countries.filter(
      item =>
        regex.test(item.name) ||
        regex.test(item.code) ||
        regex.test(item.dial_code)
    );
    if (text === '') {
      setFilteredList(countries.slice(0, 25));
    } else {
      setFilteredList(result.slice(0, 10));
    }
  }, 500);

  const handlePressToSelectCountry = (code: string) => {
    props.setSelectedCountry(
      countries.find(item => item.code === code) as TCountry
    );
    props.setIsOpenModal(false);
    setFilteredList(countries.slice(0, 25));
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    props.setIsOpenModal(false);
    setFilteredList(countries.slice(0, 25));
  };

  return (
    <Modal visible={props.isOpenModal} animationType="fade" transparent>
      <SafeAreaView style={styles.flex}>
        <View style={[styles.container, {backgroundColor}]}>
          <InputField
            placeholder="Search by country name or dial code"
            onChangeText={handleSearch}
          />
          <Spacer height={10} />
          {filteredList.length > 0 ? (
            <FlatList
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              style={styles.listContainer}
              data={filteredList}
              keyExtractor={item => item.code}
              renderItem={({item}) => (
                <CountryButton
                  country={item}
                  onPress={handlePressToSelectCountry}
                />
              )}
            />
          ) : (
            <View style={styles.blankContainer}>
              <Typography>No result found</Typography>
            </View>
          )}
          <Spacer height={20} />
          <Button
            variant="fillRounded"
            title="Cancel"
            backgroundColor={colors.red}
            onPress={handleCancel}
          />
          <Spacer height={20} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  blankContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CountryListModal;
