import React, { FormEventHandler, useEffect, useState } from 'react';
import { FieldOptionsValueType, FormBuilderType, FormDataType } from '@reform';
import FormField from '../FormField/FormField';

const FormBuilder: FormBuilderType<any> = (
  { fields, fieldOptions = {}, values, validate, handleSubmit, submitSection }) => {

  const setFormObject = (currentValues: any = {}) => {
    const nullStartingValues = fields.reduce((acc, field) => ({ ...acc, [field]: null }), {});
    const defaultValues: any = {};

    Object.keys(fieldOptions).map((key, index) => {
      const current = fieldOptions[key];

      if (current && current.defaultValue) {
        return defaultValues[key] = current.defaultValue;
      }
      return;
    });

    return Object.assign(nullStartingValues, defaultValues, values, currentValues);
  };

  const [formData, setFormData] = useState(setFormObject());
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

  /**
   * calls validate function with form data if it's defined.
   * Updates the  form Errors with lates errors.
   * @param newFormData the latest update form data
   */
  const validateFormData = (newFormData: FormDataType) => {
    if (validate && typeof validate === 'function') {
      const errors = validate(newFormData);
      if (errors && Object.keys(errors).length > 0) {
        if (errors !== formErrors) {
          setFormErrors(errors);
        }
        return;
      }
    }
    if (formErrors !== {}) {
      setFormErrors({});
    }
  };

  /**
   * Updates form state if any field value has changed. It forwards form data to validation method,
   * if the validation is in affect.
   * @param field
   */
  const setFormDataValue =
    (field: string) =>
      (value: any) => {
        const newFormData = setFormObject({ ...formData, [field]: value });
        if (newFormData !== formData) {
          setFormData(newFormData);
          if (isValidating) {
            validateFormData(newFormData);
          }
        }
      };

  /**
   * Renders form field component
   * @param field Name of the Field
   * @return A Form Element, Instance of FormField
   */
  const getFieldComponent = (field: string) => {
    const options: FieldOptionsValueType<string> = fieldOptions[field] as FieldOptionsValueType<string>;
    const error = formErrors && formErrors[field] as string;
    const { component } = options;
    const componentOptions = {
      name: field,
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
      { (submitSection && submitSection({})) || <button type="submit" className="submit">Submit</button> }
    </form>
  );
};

export default FormBuilder;
