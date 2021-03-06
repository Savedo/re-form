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

The `FormBuilder` component has props as shown below. It has `FormBuilderPropsType<T>` type. T refers to your object type having key (Field name, <string>) / values (Field options <FieldOptionsValueType>).

#### FormBuilderPropsType

Property | Type | Description
--- | --- | ---
fields | string[] | Unique field names
fieldOptions | { key (string): options (FieldOptionsValueType) } | Field/Component options (See table below)
values | object | Init values for the fields
handleSubmit | function | Callback function to handle submit behaviour if validation successful
validate | method | Callback function for validation (form data will be passed as an argument), supports sync/async functions.
submitSection | React.FC | React component to provide submit button or submit event

#### FieldOptionsValueType

Property | Type | Default | Optional | Description
--- | --- | --- | --- | ---
name | string | field key name | true | name of the field
label | string | field key name | true | label for the form field
element | input, select, textarea | input[type=text] | true | HTML tag for the form field
type | input types (eg. text, number, email, checkbox etc) | text | true | type attribute for HTMLInputElement
component | FunctionalComponent | N/A | true | Pass your FunctionalComponent with props (FormFieldPropsType). `element` and `type` becomes redundant when `component` is used.
keyValues |  { [key: string]: any } | N/A | true | Only viable when element is `select`. This object provides the list of `<option value="key">value</option>`
className | string | N/A | true | CSS class(es) for the element
defaultValue | string | N/A | true | Default value for a field.
disabled | boolean | N/A | true | Disabled prop for inputs.
placeholder | string | N/A | true | Placeholder text for the input.
checked | boolean | N/A | true | Used for checkboxes to pass default value when type is `checkbox`.
checkboxText | string | N/A | true | Used for pass label for chebox element, normal label is being used for input lable.

#### FormFieldPropsType

Props below will be passed to your custom component.

Property | Type | Description
--- | --- | ---
options | FieldOptionsValueType | Options defined for field (See table above)
error | string | Error message to pass into component if the input is not valid
setValue | Function | N/A. For internal usage
value | any | N/A. For internal usage
checked | boolean | Passed when type is checkbox in place of Value.
name | string | N/A. For internal usage

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
