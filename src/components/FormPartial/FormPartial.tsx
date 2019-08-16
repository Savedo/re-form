import React, { useState } from 'react';
import { FieldOptionsValueType } from '@reform';
import FormField from '../FormField/FormField';

const FormPartial: any = ({ id, fields, fieldOptions = {} }) => {
  const [formValues, setFormValues] = useState({});

  const setFormDataValue = (field: string) => (value: any) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const getFieldComponent = (field: string) => {
    const options: FieldOptionsValueType<string> = fieldOptions[field] as FieldOptionsValueType<string>;
    const error = null;
    const { component } = options;
    const componentOptions = {
      name: field,
      options,
      value: formValues[field],
      setValue: setFormDataValue(field),
      error
    };

    return (
      <React.Fragment key={ field }>
        { component ? component(componentOptions) : <FormField { ...componentOptions } /> }
      </React.Fragment>
    );
  };

  return fields.map(field => fieldOptions[field] && getFieldComponent(field));
};

export default FormPartial;
