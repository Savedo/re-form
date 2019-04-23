import * as yup from 'yup';
import {
  FieldOptionsValueType,
  FormDataType,
  FormErrorsType,
  FormBuilderContextType,
  FormBuilderContextValidationType,
  FormBuilderContextConstructorType
} from '@reform';

class FormBuilderContext implements FormBuilderContextType {
  fields: string[];
  fieldOptions: { [key: string]: FieldOptionsValueType };
  validation: FormBuilderContextValidationType;
  formData: FormDataType | null;
  formErrors: FormErrorsType | null;
  handleSubmit: (formData: any) => void;

  constructor(
    { fields, fieldOptions, validation = {}, handleSubmit }: FormBuilderContextConstructorType) {
    this.fields = fields || [];
    this.fieldOptions = fieldOptions || {};
    this.validation = {
      ...{
        isActive: true,
        yupSchema: null,
        yupOptions: {
          abortEarly: false
        }
      },
      ...validation
    };
    this.handleSubmit = handleSubmit || (() => console.warn('form submission not handled!'));
    this.formData = null;
    this.formErrors = null;
  }

  // returns defaultValue fields for the first init only
  getDefaultValues = () => {
    return Object
      .keys(this.fieldOptions)
      .reduce(
        (acc, key) => ({
          ...acc,
          ...{ [key]: this.fieldOptions[key].defaultValue }
        }), {});
  }

  // returns validation field of all fields (if they exists) and binds yup validator
  getValidationSchema = () => {
    if (this.validation.yupSchema) {
      return this.validation.yupSchema;
    }
    const yupSchema = Object
      .keys(this.fieldOptions)
      .reduce((acc, key) => {
        if (this.fieldOptions[key].validation) {
          return {
            ...acc,
            ...{ [key]: this.fieldOptions[key].validation }
          };
        }
        return acc;
      }, {});

    this.validation.yupSchema = yup.object().shape(yupSchema);
    return this.validation.yupSchema;
  }

  // extracts error key/values from yup validation errors
  extractErrors = (errors: yup.ValidationError) => {
    if (errors && errors.inner) {
      return errors.inner
        .reduce(
          (acc, { path, message }) => ({
            ...acc,
            ...{ [path]: message }
          }), {});
    }
    return {};
  }

  validate = async (data: FormDataType) => {
    const schema = this.getValidationSchema();

    try {
      await schema.validate(data, this.validation.yupOptions);
      return null;
    } catch (errors) {
      return this.extractErrors(errors);
    }
  }
}

export default FormBuilderContext;
