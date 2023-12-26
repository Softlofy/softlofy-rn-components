import {useContext} from 'react';
import {ColorContext} from './index';

const useColors = () => {
  const init = useContext(ColorContext);
  return init;
};

export default useColors;
