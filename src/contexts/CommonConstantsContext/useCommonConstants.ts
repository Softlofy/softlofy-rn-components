import {useContext} from 'react';
import {CommonConstantsContext} from './index';

const useCommonConstants = () => {
  const init = useContext(CommonConstantsContext);
  return init;
};

export default useCommonConstants;
