import React, { FormEvent, useState } from 'react';
import { FormContext } from '@reform';
import PersonalDetailsForm from './PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import './styles.css';

const PartialForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

  const [formValues, setFormValues] = useState({});

  const onSubmit = (event: FormEvent) =>{
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <form onSubmit={ onSubmit } noValidate={ true }>
          <FormContext formState={ formValues }>
            <PersonalDetailsForm />
            <ContactDetailsForm />
          </FormContext>
          <button type="submit" className={ submitClass }>Submit</button>
        </form>
      </div>
      { JSON.stringify(formValues) }
    </div>
  );
};

export default PartialForms;
