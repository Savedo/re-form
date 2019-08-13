import React from 'react';
//import createFormObservable from './createFormObservable';

//const formState = createFormObservable({ isSubmitting: false });

export const FormContextScope = React.createContext({});

const FormContext = ({ children, formState }: { children: any, formState: any }) => {
  return (
    <FormContextScope.Provider value={ formState }>
      { ...children }
    </FormContextScope.Provider>
  );
};

export default FormContext;
