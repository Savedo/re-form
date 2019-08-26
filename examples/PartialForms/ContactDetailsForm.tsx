import React from 'react';
import { FormPartial, FormPartialPropsType } from '@reform';
import Checkbox from './Checkbox';

type ContactDetailsFieldsType = 'address' | 'city' | 'postCode' | 'country' | 'termsAndConditions';

const ContactDetailsForm = ({ getValue, setValue, validationErrors }: FormPartialPropsType<any>) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const fields: ContactDetailsFieldsType[] = ['address', 'city', 'postCode', 'country', 'termsAndConditions'];

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
    },
    termsAndConditions: {
      label: 'T&C:',
      type: 'checkbox',
      component: Checkbox,
      checkboxText: 'I agree to the terms and conditions'
    }
  };

  const props: FormPartialPropsType<any> = {
    fields,
    fieldOptions,
    getValue,
    setValue,
    validationErrors
  };

  return (<FormPartial { ...props } />);
};

export default ContactDetailsForm;
