import React, { useEffect, useState } from 'react';
import { FormContext } from '@reform';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import './styles.css';

const MultipleForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
  const [customer, setCustomer] = useState({});
  const [formContext, setFormContext] = useState({
    isSubmitting: false,
    hasPersonalDetailsDone: false,
    hasContactDetailsDone: false
  });
  const handleFormSubmit = (formData: any) => console.log(formData);

  useEffect(() => {
    if (formContext.hasPersonalDetailsDone && formContext.hasContactDetailsDone) {
      handleFormSubmit(customer);
    }
  }, []);

  const setSubmitting = () => {
    setFormContext({
      ...formContext,
      ...{ isSubmitting: true }
    });
  };

  const getPersonalDetails = (personalDetailsData: any) => {
    setCustomer({ ...customer, ...personalDetailsData });
    setFormContext({ ...formContext, hasPersonalDetailsDone: true });
  };

  const getContactDetails = (contactDetailsData: any) => {
    setCustomer({ ...customer, ...contactDetailsData });
    setFormContext({ ...formContext, hasContactDetailsDone: true });
  };

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <FormContext formContext={ formContext }>
          <PersonalDetailsForm handleSubmit={ getPersonalDetails } />
          <ContactDetailsForm handleSubmit={ getContactDetails } />
        </FormContext>
        <button onClick={ setSubmitting } className={ submitClass }>Submit</button>
      </div>
    </div>
  );
};

export default MultipleForms;
