import React from 'react';
import { FormBuilder, FormBuilderPropsType } from '@reform';
import validate from './validate';

type PersonalDetailsFieldsType = 'name' | 'age' | 'email';

const PersonalDetailsForm = ({ handleSubmit }: { handleSubmit?: (data: any) => any }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
  const fields: PersonalDetailsFieldsType[] = [
    'name',
    'age',
    'email'
  ];

  const fieldOptions = {
    name: {
      label: 'Name:',
      defaultValue: 'default name',
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

  const props: FormBuilderPropsType<PersonalDetailsFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    validate
  };

  return (
    <div>
      <FormBuilder { ...props } />
    </div>
  );
};

export default PersonalDetailsForm;
