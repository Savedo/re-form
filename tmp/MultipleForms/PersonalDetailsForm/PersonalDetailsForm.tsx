import React from 'react';
import { FormBuilderPropsType, FormBuilder } from '@reform';

type PersonalDetailsFieldsType = 'name' | 'age' | 'email';

const PersonalDetailsForm = () => {
  const fields: PersonalDetailsFieldsType[] = [
    'name',
    'age',
    'email'
  ];

  const fieldOptions = {
    name: {
      label: 'Name:',
      defaultValue: 'default name',
      disabled: true
    },
    age: {
      label: 'Age:',
      type: 'number',
    },
    email: {
      label: 'E-mail:',
      placeholder: 'name@example.com'
    }
  };
  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const props: FormBuilderPropsType<PersonalDetailsFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit
  };

  return (
    <div>
      <FormBuilder { ...props } />
    </div>
  );
};

export default PersonalDetailsForm;
