import React from 'react';
import { FormPartial } from '@reform';

const PersonalDetailsForm = ({ getValue, setValue, validationErrors }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const fields: string[] = [ 'name', 'age', 'email' ];

  const fieldOptions = {
    name: {
      label: 'Name:',
      className: inputClass
    },
    age: {
      label: 'Age:',
      type: 'number',
      className: inputClass
    },
    email: {
      label: 'E-mail:',
      placeholder: 'name@example.com',
      className: inputClass
    }
  };

  const props: any = {
    fields,
    fieldOptions,
    getValue,
    setValue,
    validationErrors
  };

  return (<FormPartial { ...props } />);
};

export default PersonalDetailsForm;
