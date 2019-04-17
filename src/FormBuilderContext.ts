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

  constructor(
    { fields, fieldOptions, validation = {} }: FormBuilderContextConstructorType) {
    this.fields = fields || [];
    this.fieldOptions = fieldOptions || {};
    this.validation = {
      ...{
        isActive: true,
        isValidForm: false,
        yupSchema: null,
        yupOptions: {
          abortEarly: false
        }
      },
      ...validation
    };

    this.formData = null;
    this.formErrors = null;
  }

  // first init only
  getDefaultValues = () => {
    return Object
      .keys(this.fieldOptions)
      .reduce(
        (acc, key) => ({
          ...acc,
          ...{ [key]: this.fieldOptions[key].defaultValue }
        }), {});
  }

  // returns validation field of all fields and binds yup engine
  getValidationSchema = () => {
    if (this.validation.yupSchema) {
      return this.validation.yupSchema;
    }
    this.validation.yupSchema = yup.object().shape(
      Object
        .keys(this.fieldOptions)
        .reduce((acc, key) => ({
          ...acc,
          ...{ [key]: this.fieldOptions[key].validation }
        }), {})
    );
    return this.validation.yupSchema;
  }

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
      this.validation.isValidForm = true;
      return null;
    } catch (errors) {
      this.validation.isValidForm = false;
      return this.extractErrors(errors);
    }
  }
}

export default FormBuilderContext;
