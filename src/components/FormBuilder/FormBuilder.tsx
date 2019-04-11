import React, { useState } from 'react';
import { FormBuilderType } from '@reform';
import FormField from '../FormField/FormField';

const FormBuilder: FormBuilderType = (props) => {
  const { fieldOptions, fields, onDataChange } = props;

  // creates an object with the default values for hook
  const defaultFormData: { [key: string]: any } = Object
    .keys(fieldOptions)
    .reduce((acc, key) => ({
      ...acc,
      ...{
        [key]: fieldOptions[key].defaultValue,
      },
    }), {});

  // creates a hook
  const [formData, setFormData] = useState(defaultFormData);

  // method to run setFormData hook from onChange event of the generated element
  const setFormDataValue = (field: string) =>
    (value: any) => {
      const newFormData = { ...formData, [field]: value };
      onDataChange(newFormData);
      return setFormData(newFormData);
    };

  return (
    <>
      {
        fields && fields.map(field =>
          <FormField
            key={ field }
            name={ field }
            label={ fieldOptions && fieldOptions[field] && fieldOptions[field].label }
            options={ fieldOptions && fieldOptions[field] }
            value={ formData[field] }
            setValue={ setFormDataValue(field) }
          />,
        )
      }
    </>
  );
};

export default FormBuilder;
