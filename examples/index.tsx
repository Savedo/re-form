import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormBuilder, FormBuilderPropsType } from '..';

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
  const validate = (props: any) => {
    const { name, age, email } = props;

    let errors: any = {};

    if (!name) {
      errors.name = 'Name is a required field!';
    }
    if (!age) {
      errors.age = 'Age is a required field!';
    }
    if (Number(age) < 18) {
      errors.age = 'You should be older than 18 years old!';
    }
    if (!email) {
      errors.email = 'Email is required!';
    } else {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(String(email).toLowerCase())) {
        errors.email = 'Email is invalid!';
      }
    }

    return errors;
  };

  const props: FormBuilderPropsType<MyFormFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    validate,
    values: {
      name: 'Mr. Smith'
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
