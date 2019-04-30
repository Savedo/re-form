import { FunctionComponent, ReactElement } from 'react';

export interface FieldOptionsValueType<T extends string> {
  name: T;
  label?: string;
  type?: string;
  element?: string;
  component?: (props: FormFieldPropsType<T>) => ReactElement;
  keyValues?: { [key: string]: any };
}
export interface FormDataType {
  [key: string]: any;
}
export interface FormErrorsType {
  [key: string]: string;
}

// <FormBuilder />
export interface FormBuilderPropsType<T extends string> {
  fields: T[];
  fieldOptions?: { [K in T]?: FieldOptionsValueType<T> };
  values?: { [K in T]?: any };
  validate?: (values: any) => null | { [K in T]?: string };
  handleSubmit?: (formData: any) => void;
}
export interface FormBuilderType<T extends string> {
  (props: FormBuilderPropsType<T>): ReactElement;
}
export const FormBuilder: FunctionComponent<FormBuilderType<string>>;

// <FormField />
export interface FormFieldPropsType<T extends string> extends JSX.IntrinsicAttributes {
  options: FieldOptionsValueType<T>;
  setValue: ((value: any) => void);
  value: string | string[] | undefined;
  name: string;
  label: string | undefined;
  error: string;
}
export interface FormFieldType<T extends string> {
  (props: FormFieldPropsType<T>): ReactElement;
}
export const FormField: FunctionComponent<FormFieldPropsType<string>>;
