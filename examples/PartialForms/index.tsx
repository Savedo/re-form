import React, { FormEvent, useEffect, useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import validate from './validate';
import './styles.css';

const PartialForms = () => {
  const submitClass = `shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white \
    font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;

  const [formValues, setFormValues]: any = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    // demonstrates async data binding to the form fields
    const asyncData = {
      name: 'John Smith',
      email: 'john.smith@savedo.com'
    };
    setTimeout(() => setFormValues({ ...formValues, ...asyncData }), 1000);
  }, []);

  useEffect(() => {
    if (isValidating) {
      setValidationErrors(validate(formValues));
    }
  }, [formValues]);

  const onSubmit = (event: FormEvent) =>{
    event.preventDefault();
    const errors = validate(formValues);
    const isValidForm = Object.keys(errors).length === 0;

    if (isValidForm) {
      console.log(formValues);
      return;
    }
    !isValidating && setIsValidating(true);
    setValidationErrors(errors);
  };

  const getValue = (field: string) => formValues[field];
  const setValue = (field: string) => (value: any) => setFormValues({ ...formValues, [field]: value });

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <form onSubmit={ onSubmit } noValidate={ true }>
          <PersonalDetailsForm { ...{ getValue, setValue, validationErrors } } />
          <ContactDetailsForm { ...{ getValue, setValue, validationErrors } } />
          <button type="submit" className={ submitClass }>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PartialForms;
