import React from 'react';
import { FormBuilder, FormBuilderPropsType } from '@reform';
import validate from './validate';

type OtherDetailsFieldsType = 'idCard' | 'idNumber';

const OtherDetailsForm = ({ handleSubmit }: { handleSubmit?: (data: any) => any }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
  const fields: OtherDetailsFieldsType[] = [
    'idCard',
    'idNumber'
  ];

  const fieldOptions = {
    idCard: {
      label: 'ID Card Type:',
      defaultValue: 'passport',
      className: inputClass
    },
    idNumber: {
      label: 'ID Number:',
      type: 'number',
      defaultValue: '12345',
      className: inputClass
    }
  };

  const props: FormBuilderPropsType<OtherDetailsFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    validate
  };

  return (
    <div>
      <FormBuilder { ...props } />
    </div>
  );
};

export default OtherDetailsForm;
