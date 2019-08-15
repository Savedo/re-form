import React from 'react';
import { FormBuilder, FormBuilderPropsType } from '@reform';
import validate from './validate';

type OtherDetailsFieldsType = 'idCard' | 'idNumber';

const OtherDetailsForm = ({ handleSubmit, values }: { values: any, handleSubmit?: (data: any) => any }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
  const fields: OtherDetailsFieldsType[] = [
    'idCard',
    'idNumber'
  ];

  const fieldOptions = {
    idCard: {
      label: 'ID Card Type:',
      className: inputClass
    },
    idNumber: {
      label: 'ID Number:',
      className: inputClass
    }
  };

  const props: FormBuilderPropsType<OtherDetailsFieldsType> = {
    id: 'otherDetails',
    fields,
    fieldOptions,
    handleSubmit,
    validate,
    values
  };

  return (
    <div>
      <FormBuilder { ...props } />
    </div>
  );
};

export default OtherDetailsForm;
