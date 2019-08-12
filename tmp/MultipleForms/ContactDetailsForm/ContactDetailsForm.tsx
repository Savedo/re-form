import React from 'react';
import { FormBuilderPropsType, FormBuilder } from '@reform';

type ContactDetailsFieldsType = 'address' | 'city' | 'postcode' | 'country';

const ContactDetailsForm = () => {
  const fields: ContactDetailsFieldsType[] = [
    'address',
    'city',
    'postcode',
    'country'
  ];

  const fieldOptions = {
    address: {
    },
    city: {
    },
    postcode: {
    },
    country: {
    }
  };
  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const props: FormBuilderPropsType<ContactDetailsFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit
  };

  return (
    <div>
      <FormBuilder { ...props } />
    </div>
  );
};

export default ContactDetailsForm;
