import {Appearance} from 'react-native';
import useColors from '../contexts/ColorContext/useColors';

const useThemeColor = () => {
  const colorSchema = Appearance.getColorScheme();
  const colors = useColors();
  return colorSchema === 'dark' ? colors.black : colors.white;
};

export default useThemeColor;
