import React from 'react';
import Checkbox from './Checkbox';
import { FormPartialPropsType, FormPartial } from '@reform';

type ContactDetailsFieldsType =
  | 'address'
  | 'city'
  | 'postCode'
  | 'country'
  | 'placeOfBirth'
  | 'placeOfOrigin'
  | 'termsAndConditions';

const countryOptions = {
  DE: 'Germany',
  CH: 'Switzerland',
  IE: 'Ireland',
  FR: 'France'
};

const ContactDetailsForm = ({ getValue, setValue, validationErrors }: FormPartialPropsType<any>) => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full \
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const fields: ContactDetailsFieldsType[] = [
    'address',
    'country',
    'city',
    'placeOfBirth',
    'placeOfOrigin',
    'postCode',
    'termsAndConditions'
  ];

  const selectedCountry = getValue('country');

  const fieldOptions = {
    address: {
      label: 'Address:',
      className: inputClass
    },
    country: {
      label: 'Country:',
      className: inputClass,
      element: 'select',
      keyValues: countryOptions
    },
    city: {
      label: 'City:',
      className: inputClass
    },
    postCode: {
      label: 'Zip Code:',
      className: inputClass
    },
    placeOfOrigin: {
      label: 'Place Of Origin:',
      className: inputClass,
      hidden: (selectedCountry !== 'CH')
    },
    placeOfBirth: {
      label: 'Place Of Birth:',
      className: inputClass,
      hidden: (selectedCountry === 'CH')
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
