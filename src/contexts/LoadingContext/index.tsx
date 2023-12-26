import React, {createContext, useState} from 'react';
import {ChildrenProps} from '../../types/childrenProps';
import {LoadingInitialValues} from './loading';
import Loading from '../../components/Loading';
import useColors from '../ColorContext/useColors';

const initialValues = {
  isLoading: false,
  setIsLoading: () => {},
};

export const LoadingContext =
  createContext<LoadingInitialValues>(initialValues);

export default function LoadingArea(props: ChildrenProps) {
  const colors = useColors();
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerColorState, setSpinnerColorState] = useState(colors.cyan);

  const values = {
    isLoading,
    setIsLoading: (value: boolean, spinnerColor?: string) => {
      setIsLoading(value);
      setSpinnerColorState(spinnerColor || colors.cyan);
    },
  };

  return (
    <LoadingContext.Provider value={values}>
      {props.children}
      {isLoading && <Loading spinnerColor={spinnerColorState} />}
    </LoadingContext.Provider>
  );
}
