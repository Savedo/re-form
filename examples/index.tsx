import React from 'react';
import ReactDOM from 'react-dom';
import { FormBuilder, FormBuilderContext } from '..';
import * as yup from 'yup';

const MyForm = ({ handleSubmit }: any) => {
  const formBuilderContext = new FormBuilderContext({
    fields: [
      'name',
      'age',
      'email'
    ],
    fieldOptions: {
      name: {
        label: 'Name:',
        validation: yup.string().required()
      },
      age: {
        label: 'Age:',
        type: 'number',
        validation: yup.number().required().positive().integer().min(18)
      },
      email: {
        label: 'E-mail:',
        validation: yup.string().required().email(),
      }
    },
    handleSubmit
  });

  return (
    <div>
      <FormBuilder context={ formBuilderContext } />
    </div>
  );
};

const App = () => {
  const handleSubmit = (formData: any) => {
    // do whatever you want with the validated form data
    console.log(formData);
  };

  return (
    <MyForm handleSubmit={ handleSubmit } />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
