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

You would like to create a react form component with the three input fields (name, age, email) having their own validations. There you go:

```jsx
import React from 'react';
import { FormBuilder, FormBuilderContext } from 're-form';
import * as yup from 'yup';

const MyForm = () => {
  const formBuilderConfig = new FormBuilderContext({
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
    handleSubmit: (formData) => {
      // when validation passed do whatever you want with the form data
      console.log(formData);
    }
  });

  return (
    <div>
      <FormBuilder context={ formBuilderConfig } />
    </div>
  );
};

export default MyForm;
```

and use your component

```jsx
<MyForm />
```
