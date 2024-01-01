import {Appearance} from 'react-native';
import useColors from '../contexts/ColorContext/useColors';

const useAccentColor = () => {
  const colorSchema = Appearance.getColorScheme();
  const colors = useColors();
  return colorSchema === 'dark' ? colors.white : colors.black;
};

export default useAccentColor;
