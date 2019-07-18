import { FC, FunctionComponent, ReactElement } from 'react';

export interface FieldOptionsValueType<T extends string> {
  name?: T;
  label?: string;
  type?: string;
  element?: string;
  component?: (props: FormFieldPropsType<T>) => ReactElement;
  keyValues?: { [key: string]: any };
  className?: string;
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
  validate?: (values: { [K in T]?: any}) => null | { [K in T]?: string };
  handleSubmit?: (formData: any) => void;
  submitSection?: FC<any>;
}
export interface FormBuilderType<T extends string> {
  (props: FormBuilderPropsType<T>): ReactElement;
}
export const FormBuilder: FunctionComponent<FormBuilderPropsType<any>>;

// <FormField />
export interface FormFieldPropsType<T extends string> extends JSX.IntrinsicAttributes {
  options: FieldOptionsValueType<T>;
  setValue: ((value: any) => void);
  value: string | string[] | undefined;
  name: string;
  error: string;
}
export interface FormFieldType<T extends string> {
  (props: FormFieldPropsType<T>): ReactElement;
}
export const FormField: FunctionComponent;
