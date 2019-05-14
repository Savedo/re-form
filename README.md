re-form
=======

React form library.

![re-form](http://g.recordit.co/rA3YW8gMsf.gif)

Installation
=======

re-form requires

* react/react-dom 16.8.3 or later to build your form.

`$ npm install --save @savedo/re-form`

or

`$ yarn add @savedo/re-form`

Usage
=====

Basic usage: Creating a react form component with three input fields (name, age, email) validation and values assignment.

Create your form component:

```jsx
import React from 'react';
import { FormBuilder } from '@savedo/re-form';

const MyForm = ({ handleSubmit }) => {
  const fields = [
    'name',
    'age',
    'email'
  ];

  const fieldOptions = {
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

  const validate = (formData) => {
    const errors = {};
    const { name, age } = formData;

    if (!name) {
      errors.name = 'Name is required!';
    }
    if (!age) {
      errors.age = 'Age is required!';
    } else if (Number(age) < 18) {
      errors.age = 'You should be 18 years old or older!';
    }

    return errors;
  };

  return (
    <div>
      <FormBuilder { ...{ fields, fieldOptions, handleSubmit, validate } } />
    </div>
  );
};

export default MyForm;

```

And use form component elsewhere:

```jsx
import React from 'react';
import MyForm from './MyForm';

const App = () => {
  const handleSubmit = (formData) => {
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
submitSection | React.FC | React component to provide submit button or submit event

#### fieldOptions

Property | Type | Default | Optional | Description
--- | --- | --- | --- | ---
label | string | field key name | true | label for the form field
element | input, select, textarea | input[type=text] | true | HTML tag for the form field
type | input types (eg. text, number, email etc) | text | true | type attribute for HTMLInputElement
component | FunctionalComponent | N/A | true | Pass your FunctionalComponent with props (FormFieldPropsType). `element` and `type` becomes redundant when `component` is used.
keyValues |  { [key: string]: any } | N/A | true | Only viable when element is `select`. This object provides the list of `<option value="key">value</option>`
className | string | N/A | true | CSS class(es) for the element

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
