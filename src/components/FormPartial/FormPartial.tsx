import React from 'react';
import { FieldOptionsValueType, FormPartialType } from '@reform';
import FormField from '../FormField/FormField';

const FormPartial: FormPartialType<any> = (
  { fields = [], fieldOptions = {}, getValue, setValue, validationErrors }) => {
  const getFieldComponent = (field: string) => {
    const options = fieldOptions[field] as FieldOptionsValueType<string>;
    const error = validationErrors && validationErrors[field];
    const { component } = options;
    const componentOptions = {
      name: field,
      options,
      value: getValue(field),
      setValue: setValue(field),
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
