import React, { useEffect, useState } from 'react';
import { FormContext, createFormObservable } from '@reform';
import PersonalDetailsForm from './PersonalDetailsForm/PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import OtherDetailsForm from './OtherDetailsForm/OtherDetailsForm';
import './styles.css';

const formObservable = createFormObservable({
  isSubmitting: false
});

const MultipleForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
  const [customer, setCustomer] = useState({});

  const handleSubmit = (data: any) => {
    setCustomer({ ...customer, ...data });
  };

  const onSubmit = () => {
    formObservable.setState({
      isSubmitting: true
    });
  };

  console.log(customer);

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <FormContext formContext={ formObservable } >
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
