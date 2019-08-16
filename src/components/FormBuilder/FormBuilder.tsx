import React, { FormEventHandler, useEffect, useState, useContext } from 'react';
import FormField from '../FormField/FormField';
import { FormContextScope } from '../FormContext/FormContext';
import {
  FieldOptionsValueType,
  FormFieldPropsType,
  FormBuilderType,
  FormDataType,
  FormErrorsType
} from '@reform';

const FormBuilder: FormBuilderType<any> = (
  { id, fields, fieldOptions = {}, values, validate, handleSubmit, submitSection }) => {
  /**
   * Generates form object by getting key/values from:
   * "defaultValue" fields, "values" prop, "currentValues" current form values (overwrites all others)
   * @param currentValues
   */
  const setFormObject = (currentValues: any = {}) => {
    const defaults = fields.reduce((acc, field) => {
      let fieldOptForField = fieldOptions[field];
      if (fieldOptForField && fieldOptForField.type && fieldOptForField.type === 'checkbox') {
        return { ...acc, [field]: fieldOptForField.checked as FieldOptionsValueType<any> };
      }
      const { defaultValue = null } = fieldOptForField as FieldOptionsValueType<any>;
      return { ...acc, [field]: defaultValue };
    }, {});
    return Object.assign(defaults, values, currentValues);
  };

  const [formData, setFormData] = useState(setFormObject());
  const [formErrors, setFormErrors]: [FormErrorsType, any ] = useState({});
  const [formOptions, setFormOptions] = useState({
    isValidating: false,
    isSubmitting: false
  });
  // Activates multiple form submission by using FormContext component
  const formContext: any = useContext(FormContextScope);

  /**
   * This block runs when formErrors scope variable changes.
   * If there is no error, validation/submission are in effect and if form has not submitted
   * then it calls handleSubmit method of FormBuilder and marks form as submitted.
   */
  useEffect(() => {
    const { isValidating, isSubmitting } = formOptions;
    if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting) {
      handleSubmit && handleSubmit(formData);
    }
  }, [formErrors]);

  useEffect(() => {
    const { isSubmitting } = formContext;
    if (isSubmitting && !formOptions.isSubmitting) {
      activateFormSubmission();
    }
  }, [formContext]);

  /**
   * Calls validate function with form data if it's defined.
   * Updates the form Errors with latest errors.
   * @param newFormData
   */

  const setErrors = (errors: FormErrorsType | Promise<FormErrorsType>) => {
    if (Object.keys(errors).length > 0) {
      if (errors !== formErrors) {
        setFormErrors(errors);
      }
      return;
    }
    if (formErrors !== {}) {
      setFormErrors({});
    }
  };

  const validateFormData = (newFormData: FormDataType) => {
    if (validate && typeof validate === 'function') {
      const errors = validate(newFormData);
      errors && ((Promise.resolve(errors) === errors) ? errors.then(setErrors) : setErrors(errors));
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
          if (formOptions.isValidating) {
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
    const commonComponentOptions: FormFieldPropsType<string>  = {
      name: field,
      options,
      setValue: setFormDataValue(field),
      error
    };
    let componentOptions: FormFieldPropsType<string>;

    if (options.type === 'checkbox') {
      componentOptions = { ...commonComponentOptions, checked: formData[field] };
    }
    else {
      componentOptions = { ...commonComponentOptions, value: formData[field] };
    }

    return (
      <React.Fragment key={ field }>
        { component ? component(componentOptions) : <FormField { ...componentOptions } /> }
      </React.Fragment>
    );
  };

  const activateFormSubmission = () => {
    setFormOptions({ isValidating: true, isSubmitting: true });
    validateFormData(formData);
  };

  const onSubmit: FormEventHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    activateFormSubmission();
  };

  return (
    <form onSubmit={ onSubmit } noValidate={ true }>
      { fields.map(field => fieldOptions[field] && getFieldComponent(field)) }
      { submitSection && submitSection({}) }
    </form>
  );
};

export default FormBuilder;
