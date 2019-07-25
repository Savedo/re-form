import React from 'react';
import BulmaSelect from './components/BulmaSelect';
import BulmaInput from './components/BulmaInput';
import FormBuilder from '../../src/components/FormBuilder/FormBuilder';
import validate from './validate';

type FieldsType = 'name' | 'city' | 'email';

const BulmaForm = () => {
  const fields: FieldsType[] = ['name', 'city', 'email'];
  const inputClass = 'input is-primary';
  const selectClass = 'select is-primary';

  const selectOptions = {
    Berlin: 'Berlin',
    Munich: 'Munich',
    Belgrade: 'Belgrade',
    Warsaw: 'Warsaw',
    Madrid: 'Madrid'
  };

  const fieldOptions = {
    name: {
      label: 'Name:',
      type: 'text',
      className: inputClass,
      component: BulmaInput
    },
    city: {
      label: 'City:',
      keyValues: selectOptions,
      className: selectClass,
      component: BulmaSelect,
      disabled: true
    },
    email: {
      label: 'E-mail:',
      type: 'email',
      className: inputClass,
      component: BulmaInput,
      defaultValue: 'wrong email'
    }
  };

  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const submitSection = () => {
    return (
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <FormBuilder
      { ...{ fields, fieldOptions, handleSubmit, validate, submitSection } }
    />
  );
};

export default BulmaForm;
