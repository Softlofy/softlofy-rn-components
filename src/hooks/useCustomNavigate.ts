import {useNavigation} from '@react-navigation/native';

const useCustomNavigate = () => {
  const navigation = useNavigation();

  const navigate = (screenName: string, data?: Record<string, unknown>) => {
    navigation.navigate(screenName, data);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return {navigate, goBack};
};

export default useCustomNavigate;
