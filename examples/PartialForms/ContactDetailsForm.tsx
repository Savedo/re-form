import React from 'react';
import { FormPartial } from '@reform';

const ContactDetailsForm = ({ getValue, setValue, validationErrors }) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const fields: string[] = [ 'address', 'city', 'postCode', 'country' ];

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
      label: 'Zip Code:',
      className: inputClass
    },
    country: {
      label: 'Country:',
      className: inputClass
    }
  };

  const props: any = {
    fields,
    fieldOptions,
    getValue,
    setValue,
    validationErrors
  };

  return (<FormPartial { ...props } />);
};

export default ContactDetailsForm;
