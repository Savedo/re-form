import React from 'react';
import { FormBuilderPropsType } from '../../index';
import FormBuilder from '../../src/components/FormBuilder/FormBuilder';
import validate from './validate';
import './styles.css';

type SimpleFormFieldsType = 'name' | 'age' | 'email';

const SimpleForm = () => {
  const fields: SimpleFormFieldsType[] = [
    'name',
    'age',
    'email'
  ];
  const inputClass = 'shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const submitClass = 'shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

  const fieldOptions = {
    name: {
      label: 'Name:',
      className: inputClass,
      defaultValue: 'default name',
      disabled: true
    },
    age: {
      label: 'Age:',
      type: 'number',
      className: inputClass
    },
    email: {
      label: 'E-mail:',
      className: inputClass
    }
  };
  const submitSection = () => {
    return (
      <button type="submit" className={ submitClass }>Submit</button>
    );
  };
  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const props: FormBuilderPropsType<SimpleFormFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    validate,
    submitSection
  };

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <FormBuilder { ...props } />
      </div>
    </div>
  );
};

export default SimpleForm;
