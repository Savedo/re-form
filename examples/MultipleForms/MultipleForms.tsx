import React, { useEffect, useState } from 'react';
import { FormContext } from '@reform';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import OtherDetailsForm from './OtherDetailsForm/OtherDetailsForm';
import './styles.css';

const MultipleForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

  const [formState, setFormState] = useState({
    isValidating: false,
    isSubmitting: false
  });
  const [personalDetails, setPersonalDetails] = useState();
  const [contactDetails, setContactDetails] = useState();
  const [otherDetails, setOtherDetails] = useState();

  const values = {
    name: 'John Smith',
    age: '33',
    email: 'john@gmail.com',
    idCard: 'Passport',
    idNumber: 'U1234567890',
    address: 'Alexanderplatz',
    city: 'Berlin',
    postCode: '13086',
    countryCode: 'DE'
  };

  const onSubmit = () => {
    setFormState({
      isValidating: true,
      isSubmitting: true
    });
  };

  useEffect(() => {
    if (personalDetails && contactDetails && otherDetails) {
      console.log('customer:', {
        ...personalDetails,
        ...contactDetails,
        ...otherDetails
      });
    }
  }, [personalDetails, contactDetails, otherDetails]);

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <FormContext { ...{ formState } }>
          <PersonalDetailsForm { ...{ values, handleSubmit: setPersonalDetails } } />
          <ContactDetailsForm { ...{ values, handleSubmit: setContactDetails } } />
          <OtherDetailsForm { ...{ values, handleSubmit: setOtherDetails } } />
          <button type="button" onClick={ onSubmit } className={ submitClass }>Submit</button>
        </FormContext>
      </div>
    </div>
  );
};

export default MultipleForms;
