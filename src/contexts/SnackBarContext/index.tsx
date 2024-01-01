import React from 'react';
import {ChildrenProps} from '../../types/childrenProps';
import {useWindowDimensions} from 'react-native';
import {TSnackBarVariant} from '../../hooks/useSnackBarColorAndIcon';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import SnackBar from '../../components/SnackBar';

type TSnackBarContext = {
  showSnackBar: (message: string, variant: TSnackBarVariant) => void;
};

export const SnackBarContext = React.createContext<TSnackBarContext>({
  showSnackBar: () => {},
});

const SnackBarArea = (props: ChildrenProps) => {
  let timeout: NodeJS.Timeout;
  const {height} = useWindowDimensions();
  const [snackBarVariant, setSnackBarVariant] =
    React.useState<TSnackBarVariant>('info');
  const [snackBarMessage, setSnackBarMessage] = React.useState<string>('');

  const hiddenPosition = height + 100;
  const shownPosition = height - 80;

  const top = useSharedValue(hiddenPosition);

  const hideSnackBar = () => {
    top.value = withTiming(hiddenPosition);
    clearTimeout(timeout);
  };

  const showSnackBar = () => {
    top.value = withTiming(shownPosition);
    timeout = setTimeout(() => {
      hideSnackBar();
    }, 3000);
  };

  const dispatch = {
    showSnackBar: (message: string, variant: TSnackBarVariant) => {
      setSnackBarVariant(variant);
      setSnackBarMessage(message);
      showSnackBar();
    },
  };
  return (
    <SnackBarContext.Provider value={dispatch}>
      {props.children}
      <SnackBar message={snackBarMessage} variant={snackBarVariant} top={top} />
    </SnackBarContext.Provider>
  );
};

export default SnackBarArea;
