import { FC, ReactElement } from 'react';

export interface FieldOptionsValueType<T extends string> {
  name?: T;
  label?: string;
  type?: string;
  element?: string;
  hidden?: boolean;
  component?: (props: FormFieldPropsType<T>) => ReactElement;
  keyValues?: { [key: string]: any };
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  checkboxText?: string;
  checked?: boolean;
}
export interface FormDataType {
  [key: string]: any;
}
export interface FormErrorsType {
  [key: string]: string | undefined;
}

// <FormBuilder />
export interface FormBuilderPropsType<T extends string> {
  id?: string;
  fields: T[];
  fieldOptions?: { [K in T]?: FieldOptionsValueType<T> };
  values?: { [K in T]?: any };
  validate?: (values: { [K in T]?: any }) => null | { [K in T]?: string } | Promise<{ [K in T]?: string }>;
  handleSubmit?: (formData: any) => void;
  submitSection?: FC<any> | null;
}
export interface FormBuilderType<T extends string> {
  (props: FormBuilderPropsType<T>): ReactElement;
}

// <FormField />
export interface FormFieldPropsType<T extends string> extends JSX.IntrinsicAttributes {
  options: FieldOptionsValueType<T>;
  setValue: (value: any) => void;
  value?: string | string[] | undefined;
  checked?: boolean;
  name: string;
  error?: string;
}
export interface FormFieldType<T extends string> {
  (props: FormFieldPropsType<T>): ReactElement;
}

// <FormPartial />
export interface FormPartialPropsType<T extends string> {
  fields?: T[];
  fieldOptions?: { [K in T]?: FieldOptionsValueType<T> };
  getValue: Function;
  setValue: Function;
  validationErrors?: { [K in T]?: string };
}
export interface FormPartialType<T extends string> {
  (props: FormPartialPropsType<T>): any;
}

export { default as FormField } from './src/components/FormField/FormField';
export { default as FormBuilder } from './src/components/FormBuilder/FormBuilder';
export { default as FormPartial } from './src/components/FormPartial/FormPartial';
