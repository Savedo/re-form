import React, { useEffect, useState } from 'react';
import { FormContext } from '@reform';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import OtherDetailsForm from './OtherDetailsForm/OtherDetailsForm';
import './styles.css';

const MultipleForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
  const [customer, setCustomer] = useState({});
  const [formState, setFormState] = useState({
    isValidating: false,
    isSubmitting: false
  });

  const handleSubmit = (data: any) => {
    setCustomer({ ...customer, ...data });
  };

  const onSubmit = () => {
    setFormState({
      isValidating: true,
      isSubmitting: true
    });
  };

  console.log(customer);

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <FormContext formState={ formState }>
          <PersonalDetailsForm handleSubmit={ handleSubmit } />
          <ContactDetailsForm handleSubmit={ handleSubmit } />
          <OtherDetailsForm handleSubmit={ handleSubmit } />
          <button type="button" onClick={ onSubmit } className={ submitClass }>Submit</button>
        </FormContext>
      </div>
    </div>
  );
};

export default MultipleForms;
