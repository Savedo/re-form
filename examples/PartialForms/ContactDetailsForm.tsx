import React from 'react';
import { FormPartial, FormPartialPropsType } from '@reform';

type ContactDetailsFieldsType = 'address' | 'city' | 'postCode' | 'countryCode';

const ContactDetailsForm = () => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const fields: ContactDetailsFieldsType[] = [
    'address',
    'city',
    'postCode',
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
    postCode: {
      label: 'Post Code:',
      className: inputClass
    },
    countryCode: {
      label: 'ISO Country Code:',
      className: inputClass
    }
  };

  const props: FormPartialPropsType<ContactDetailsFieldsType> = {
    id: 'contactDetails',
    fields,
    fieldOptions
  };

  return (
    <>
      <FormPartial { ...props } />
    </>
  );
};

export default ContactDetailsForm;
