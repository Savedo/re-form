import React from 'react';
import { FormBuilder, FormBuilderPropsType } from '@reform';
import validate from './validate';

type ContactDetailsFieldsType = 'address' | 'city' | 'postcode' | 'country';

const ContactDetailsForm = ({ handleSubmit }: { handleSubmit?: (data: any) => any }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
  const fields: ContactDetailsFieldsType[] = [
    'address',
    'city',
    'postcode',
    'country'
  ];

  const fieldOptions = {
    address: {
      label: 'Address',
      className: inputClass
    },
    city: {
      label: 'City',
      className: inputClass
    },
    postcode: {
      label: 'PostCode',
      className: inputClass
    },
    country: {
      label: 'Country',
      className: inputClass
    }
  };

  const props: FormBuilderPropsType<ContactDetailsFieldsType> = {
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

export default ContactDetailsForm;
