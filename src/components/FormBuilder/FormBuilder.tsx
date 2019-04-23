import React, { useState } from 'react';
import { FormBuilderType, FormDataType } from '@reform';
import FormField from '../FormField/FormField';

const FormBuilder: FormBuilderType = (props) => {
  const { context } = props;
  const {
    fields,
    fieldOptions,
    getDefaultValues,
    validation,
    validate,
    handleSubmit
  } = context;

  // creates an object with the default values for hook
  const defaultFormData: FormDataType = getDefaultValues();

  // create hooks
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors]: [{ [key: string]: string }, (errors: any) => any] = useState({});

  // method to run setFormData hook from onChange event of the generated element
  const setFormDataValue =
    (field: string) =>
      async (value: any) => {
        const newFormData = { ...formData, [field]: value };
        setFormData(newFormData);
        context.formData = Object.assign({}, newFormData);
        if (validation.isActive) {
          const errors = await validate(newFormData);
          setFormErrors(errors);
          context.formErrors = Object.assign({}, errors);
          if (!errors) {
            handleSubmit(newFormData);
          }
        }
      };

  // returns if there is a fieldOptions.component otherwise fieldOptions.element or input[type=text]
  const getFieldComponent = (field: string) => {
    const options = fieldOptions[field];
    const { component, label } = options;
    const error = formErrors && formErrors[field];
    const formFieldOptions = {
      name: field,
      label,
      options,
      defaultValue: formData[field],
      setValue: setFormDataValue(field),
      error
    };

    return (
      <React.Fragment key={ field }>
        { component ? component(formFieldOptions) : <FormField { ...formFieldOptions } /> }
      </React.Fragment>
    );
  };

  return (
    <>
      { fields.map(field => getFieldComponent(field)) }
    </>
  );
};

export default FormBuilder;
