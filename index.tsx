import Wrapper from './src/Wrapper';
import useAccentColor from './src/hooks/useAccentColor';
import useThemeColor from './src/hooks/useThemeColor';
import useColors from './src/contexts/ColorContext/useColors';
import useLoading from './src/contexts/LoadingContext/useLoading';
import useSnackBar from './src/contexts/SnackBarContext/useSnackBar';
import Button from './src/components/Button';
import PhoneInput from './src/components/PhoneInput';
import CustomStatusBar from './src/components/CustomStatusBar';
import FlexContainer from './src/components/FlexContainer';
import FullWidthContainer from './src/components/FullWidthContainer';
import InputError from './src/components/InputError';
import InputField from './src/components/InputField';
import NonScrollableScreenContainer from './src/components/NonScrollableScreenContainer';
import ScreenTitle from './src/components/ScreenTitle';
import ScrollableScreenContainer from './src/components/ScrollableScreenContainer';
import Spacer from './src/components/Spacer';
import Tag from './src/components/Tag';
import Typography from './src/components/Typography';
import getFlag from './src/assets/flags';

export {useAccentColor, useThemeColor, useColors, useLoading, useSnackBar};
export {
  Button,
  PhoneInput,
  CustomStatusBar,
  FlexContainer,
  FullWidthContainer,
  InputError,
  InputField,
  NonScrollableScreenContainer,
  ScreenTitle,
  ScrollableScreenContainer,
  Spacer,
  Tag,
  Typography,
};
export {getFlag};
export {Wrapper};
