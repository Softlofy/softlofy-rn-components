import {useContext} from 'react';
import {LoadingContext} from '.';

const useLoading = () => {
  const init = useContext(LoadingContext);
  return init;
};

export default useLoading;
