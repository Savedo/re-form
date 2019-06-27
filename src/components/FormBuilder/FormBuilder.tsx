import React, { FormEventHandler, useEffect, useState } from 'react';
import { FieldOptionsValueType, FormBuilderType, FormDataType } from '@reform';
import FormField from '../FormField/FormField';

const FormBuilder: FormBuilderType<any> = (
  { fields, fieldOptions = {}, values, validate, handleSubmit, submitSection }) => {

  const setFormObject = (currentValues: any = {}) => {
    const defaults = fields.reduce((acc, field) => ({ ...acc, [field]: null }), {});
    return Object.assign(defaults, values, currentValues);
  };

  // Array of {Key:value} for all form elements. 
  const [formData, setFormData] = useState(setFormObject()); 
  // Array of {key:'error message'} for invalid fields
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
   * Validates the form data using a validate function.
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
   * Updates the formData(state var) and also validate it. 
   * Usually called as a handler(onChange etc) for updating a form element.
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
   * Generates a Form Element 
   * @param field Name of the Field
   * @return A Form Element, Instance of FormField  
   */
  const getFieldComponent = (field: string) => {
    const options: FieldOptionsValueType<string> = fieldOptions[field] as FieldOptionsValueType<string>;
    const { component, label, className } = options;
    const error = formErrors && formErrors[field] as string;
    const componentOptions = {
      name: field,
      label,
      options,
      value: formData[field],
      setValue: setFormDataValue(field),
      error,
      className
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
