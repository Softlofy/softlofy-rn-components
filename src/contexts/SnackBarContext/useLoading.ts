import {useContext} from 'react';
import {SnackBarContext} from '.';

const useSnackBar = () => {
  const init = useContext(SnackBarContext);
  return init;
};

export default useSnackBar;
