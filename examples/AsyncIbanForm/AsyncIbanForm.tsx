import React from 'react';
import { FormBuilderPropsType } from '../../index';
import FormBuilder from '../../src/components/FormBuilder/FormBuilder';
import validate from './validate';
import './styles.css';

type IbanFormFieldsType = 'iban' | 'receipient' | 'reference';

const AsyncIbanForm = () => {
  const fields: IbanFormFieldsType[] = ['iban', 'receipient', 'reference'];
  const inputClass =
    'shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
  const submitClass =
    'shadow mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

  const fieldOptions = {
    iban: {
      label: 'IBAN:',
      className: inputClass,
      placeholder: 'DEXXXXXXXXXXXXXXXXXX'
    },
    receipient: {
      label: 'Recipient:',
      className: inputClass,
      placeholder: 'Herr Singla'
    },
    reference: {
      label: 'Reference:',
      className: inputClass,
      placeholder: 'Customer Reference'
    }
  };
  const submitSection = () => {
    return (
      <button type="submit" className={ submitClass }>
        Submit
      </button>
    );
  };
  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const props: FormBuilderPropsType<IbanFormFieldsType> = {
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

export default AsyncIbanForm;
