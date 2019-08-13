import React from 'react';
import { FormBuilder, FormBuilderPropsType } from '@reform';
import validate from './validate';

type ContactDetailsFieldsType = 'address' | 'city' | 'postcode' | 'countryCode';

const ContactDetailsForm = ({ handleSubmit }: { handleSubmit?: (data: any) => any }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;
  const fields: ContactDetailsFieldsType[] = [
    'address',
    'city',
    'postcode',
    'countryCode'
  ];

  const fieldOptions = {
    address: {
      label: 'Address:',
      className: inputClass
    },
    city: {
      label: 'City:',
      className: inputClass
    },
    postcode: {
      label: 'PostCode:',
      className: inputClass
    },
    countryCode: {
      label: 'ISO Country Code:',
      className: inputClass
    }
  };

  const props: FormBuilderPropsType<ContactDetailsFieldsType> = {
    id: 'contactDetails',
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
