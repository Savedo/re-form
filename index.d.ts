export type FieldsType = Array<string>;

export interface FieldOptionsValueType {
  defaultValue?: any;
  label?: string;
  type?: string;
  element?: string;
  keyValues?: Array<{ [key: string]: any }>;
}

export interface FieldOptionsType {
  [key: string]: FieldOptionsValueType;
}

export interface FormBuilderPropsType {
  fieldOptions: FieldOptionsType;
  fields: FieldsType;
  onDataChange: (data: any) => any;
}

export interface FormBuilderType {
  (props: FormBuilderPropsType): JSX.Element;
}

export interface FormFieldPropsType extends JSX.IntrinsicAttributes {
  options: FieldOptionsValueType;
  setValue: ((value: any) => void);
  value: any;
  name: string;
  label: string | undefined;
}

export interface FormFieldType {
  (props: FormFieldPropsType): JSX.Element;
}
