import {Appearance} from 'react-native';
import useColors from '../contexts/ColorContext/useColors';

const useInputFieldColor = () => {
  const colorSchema = Appearance.getColorScheme();
  const colors = useColors();
  const forDark = {
    backgroundColor: colors.gray,
    textColor: colors.white,
    placeholderColor: colors.light_gray,
  };
  const forLight = {
    backgroundColor: colors.light_gray,
    textColor: colors.black,
    placeholderColor: colors.gray,
  };
  return colorSchema === 'dark' ? forDark : forLight;
};

export default useInputFieldColor;
