re-form
=======

React form builder library.

Installation
=======

re-form requires

* react/react-dom 16.8.3 or later to build your form.

`$ npm install --save @savedo/re-form`

or

`$ yarn add @savedo/re-form`

Usage
=====

Basic usage: Creating a react form component with three input fields (name, age, email) without any validation and no default form values.


```jsx
import React from 'react';
import { FormBuilder } from 're-form';

const MyForm = ({ handleSubmit }) => {
  const fields = [
    'name',
    'age',
    'email'
  ];
  
  const fieldOptions: {
    name: {
      label: 'Name:'
    },
    age: {
      label: 'Age:',
      type: 'number'
    },
    email: {
      label: 'E-mail:'
    }
  };

  return (
    <div>
      <FormBuilder { ...{ fields, fieldOptions, handleSubmit } } />
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

Configuration
=============

`FormBuilder` component uses one prop called `context`. It should be an instance of `FormBuilderContext` class.

#### FormBuilderContext Class

Property | Type | Description
--- | --- | ---
fields | string[] | Defines unique field keys and orders fields to be shown.
fieldOptions | object | Field configuration object having fields (above string[]) as keys (See table below for individual field's properties)
values | object | Default values for the fields
handleSubmit | function | Form submit behaviour
validate | method | Validation method for the form data

#### fieldOptions

Property | Type | Default | Optional | Description
--- | --- | --- | --- | ---
label | string | field key name | true | label for the form field
element | input, select, textarea | input[type=text] | true | HTML tag for the form field
type | input types (eg. text, number, email etc) | text | true | type attribute for HTMLInputElement
component | FunctionalComponent | N/A | true | Pass your FunctionalComponent with props (FormFieldPropsType). `element` and `type` becomes redundant when `component` is used.
keyValues |  { [key: string]: any } | N/A | true | Only viable when element is `select`. This object provides the list of `<option value="key">value</option>`


Development
=============

In order to start dev server, type

```
yarn develop
```

it opens your browser with url `http://localhost:9100/`

License
=============

MIT
