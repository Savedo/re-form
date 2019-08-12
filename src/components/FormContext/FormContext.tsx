import React from 'react';

export const FormContextScope = React.createContext({});

const FormContext = (
  { children, formContext }: { children: any, formContext: any }
) => {
  return (
    <FormContextScope.Provider value={ formContext }>
      { ...children }
    </FormContextScope.Provider>
  );
};

export default FormContext;
