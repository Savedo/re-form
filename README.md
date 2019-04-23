re-form
=======

React form builder library.

Installation
=======

re-form requires React 16.8.3 or later.

`$ npm install --save savedo/re-form`

or

`$ yarn add savedo/re-form`

Usage
=====

Example case: Creating a react form component with three input fields (name, age, email) with their own validation.


```jsx
import React from 'react';
import { FormBuilder, FormBuilderContext } from 're-form';
import * as yup from 'yup';

const MyForm = ({ handleSubmit }) => {
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

export default MyForm;
```

Usage:

```jsx
import React from 'react';
import MyForm from './MyForm';

const App = () => {
  const handleSubmit = (formData) => {
    // do whatever you want with the validated form data
    console.log(formData)
  };
  
  return (
    <MyForm handleSubmit={ handleSubmit } />
  );
};

export default App;
```
