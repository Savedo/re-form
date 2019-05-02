import React, { FormEventHandler, useEffect, useState } from 'react';
import { FieldOptionsValueType, FormBuilderType, FormDataType } from '@reform';
import FormField from '../FormField/FormField';

const FormBuilder: FormBuilderType<any> = ({ fields, fieldOptions = {}, values, validate, handleSubmit }) => {

  const [formData, setFormData] = useState(values || {});
  const [formErrors, setFormErrors]: [ { [key: string]: string }, any ] = useState({});
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting) {
      handleSubmit && handleSubmit(formData);
    }
    if (isSubmitting) {
      setIsSubmitting(false);
    }
  }, [formErrors]);

  const validateFormData = (newFormData: FormDataType) => {
    if (validate && typeof validate === 'function') {
      const errors = validate(newFormData);
      if (errors && Object.keys(errors).length > 0) {
        if (errors !== formErrors) {
          setFormErrors(errors);
        }
        return;
      }
      if (formErrors !== {}) {
        setFormErrors({});
      }
    }
  };

  const setFormDataValue =
    (field: string) =>
      (value: any) => {
        const newFormData = { ...formData, [field]: value };
        if (newFormData !== formData) {
          setFormData(newFormData);
          if (isValidating) {
            validateFormData(newFormData);
          }
        }
      };

  const getFieldComponent = (field: string) => {
    const options: FieldOptionsValueType<string> = fieldOptions[field] as FieldOptionsValueType<string>;
    const { component, label } = options;
    const error = formErrors && formErrors[field] as string;
    const componentOptions = {
      name: field,
      label,
      options,
      value: formData[field],
      setValue: setFormDataValue(field),
      error
    };

    return (
      <React.Fragment key={ field }>
        { component ? component(componentOptions) : <FormField { ...componentOptions } /> }
      </React.Fragment>
    );
  };

  const onSubmit: FormEventHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmitting(true);
    setIsValidating(true);
    validateFormData(formData);
  };

  return (
    <form onSubmit={ onSubmit } noValidate={ true }>
      { fields.map(field => fieldOptions[field] && getFieldComponent(field)) }
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormBuilder;
