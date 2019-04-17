import { FunctionComponent, ReactElement } from 'react';
import { ObjectSchema, ValidateOptions, ValidationError } from 'yup';

// FormBuilderContext
export interface FieldOptionsValueType {
  defaultValue?: any;
  label?: string;
  type?: string;
  element?: string;
  component?: (props: any) => ReactElement;
  keyValues?: { [key: string]: any };
  validation?: any;
}
export interface FormBuilderContextValidationType {
  isActive: boolean;
  isValidForm: boolean;
  yupSchema: ObjectSchema<any> | null;
  yupOptions: ValidateOptions;
}
export interface FormBuilderContextConstructorType {
  fields: string[];
  fieldOptions: { [key: string]: FieldOptionsValueType };
  validation?: Partial<FormBuilderContextValidationType>;
}
export interface FormBuilderContextType {
  fields: string[];
  fieldOptions: { [key: string]: FieldOptionsValueType };
  validation: FormBuilderContextValidationType;
  getDefaultValues: () => FormDataType;
  getValidationSchema: () => any;
  extractErrors: (errors: ValidationError) => FormErrorsType | {} | null;
  validate: ValidateType;
  formData: FormDataType | null;
  formErrors: FormErrorsType | null;
}
export interface ValidateType {
  (data: FormDataType): Promise<FormErrorsType | {} | null>;
}
export interface FormDataType {
  [key: string]: any;
}
export interface FormErrorsType {
  [key: string]: string;
}

// <FormBuilder />
export interface FormBuilderPropsType {
  context: FormBuilderContextType;
}
export interface FormBuilderType {
  (props: FormBuilderPropsType): ReactElement;
}
export const FormBuilder: FunctionComponent<FormBuilderPropsType>;

// <FormField />
export interface FormFieldPropsType extends JSX.IntrinsicAttributes {
  options: FieldOptionsValueType;
  setValue: ((value: any) => void);
  defaultValue: any;
  name: string;
  label: string | undefined;
  error: any;
}
export interface FormFieldType {
  (props: FormFieldPropsType): ReactElement;
}
export const FormField: FunctionComponent<FormFieldPropsType>;
