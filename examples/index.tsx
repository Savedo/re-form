import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormBuilder } from '../src';
import { FormBuilderPropsType } from '../';

type MyFormFieldsType = 'name' | 'age' | 'email';

const MyForm = ({ handleSubmit }: any) => {
  const fields: MyFormFieldsType[] = [
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

  const props: FormBuilderPropsType<MyFormFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    values: {
      name: 'John Smith'
    },
    validate: ({ name, age, email }) => {
      if (!email) {
        return { email: 'Email field is required!' };
      }
      return null;
    }
  };

  return (
    <div>
      <FormBuilder { ...props } />
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
