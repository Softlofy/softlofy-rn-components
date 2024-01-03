import {Appearance} from 'react-native';

const useThemeColor = () => {
  const colorSchema = Appearance.getColorScheme();
  return colorSchema === 'dark' ? '#242424' : '#F1F1F1';
};

export default useThemeColor;
