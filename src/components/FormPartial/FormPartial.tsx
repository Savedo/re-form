import React from 'react';
import { FieldOptionsValueType, FormPartialType } from '@reform';
import FormField from '../FormField/FormField';

const FormPartial: FormPartialType<any> = (
  { fields = [], fieldOptions = {}, getValue, setValue, validationErrors }) => {
  const getFieldComponent = (field: string) => {
    const options = fieldOptions[field] as FieldOptionsValueType<string>;
    const error = validationErrors && validationErrors[field];
    const { component } = options;

    const commonComponentOptions = {
      name: field,
      options,
      setValue: setValue(field),
      error
    };

    let componentOptions;
    if (options.type === 'checkbox'){
      componentOptions = { ...commonComponentOptions, checked: !!getValue(field) };
    }
    else {
      componentOptions = { ...commonComponentOptions, value: getValue(field) };
    }
    return (
      <React.Fragment key={ field }>
        { component ? component(componentOptions) : <FormField { ...componentOptions } /> }
      </React.Fragment>
    );
  };

  return fields.map(field => {
    const options = fieldOptions[field]
    return options && !options.hidden && getFieldComponent(field);
  });
};

export default FormPartial;
