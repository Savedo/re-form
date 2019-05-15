import React, { ChangeEventHandler } from 'react';
import { FormBuilderPropsType, FormFieldPropsType } from '../../index';
import FormBuilder from '../../src/components/FormBuilder/FormBuilder';
import validate from './validate';

type SimpleFormFieldsType = 'name' | 'fruits' | 'email';

const BulmaForm = () => {
  const fields: SimpleFormFieldsType[] = [ 'name', 'fruits', 'email' ];

  const inputClass = 'input is-primary';
  const selectClass = 'select is-primary';
  const selectOptions = {
    kiwi: 'kiwi',
    apple: 'apple',
    banana: 'banana',
    pear: 'pear',
    orange: 'orange'
  };

  const BulmaInput = (props: FormFieldPropsType<string> ) => {

    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
      event.preventDefault();
      props.setValue(event.currentTarget.value);
    };

    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{props.label}</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control is-expanded'>
              <input
                className={props.options.className}
                type={props.options.type}
                placeholder={`write your ${props.name} here`}
                onChange={onChange}
                name={props.name}
                defaultValue={props.value}
                id={props.name}
              />
              {props.error && <p className='help is-danger'>{props.error}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  };

  const BulmaSelect = (props: FormFieldPropsType<string>) => {

    const onChange: ChangeEventHandler<HTMLSelectElement> = event => {
      event.preventDefault();
      props.setValue(event.currentTarget.value);
    };

    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>{props.label}</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control is-expanded'>
              <div className={props.options.className}>
                <select onChange={onChange} defaultValue={props.value} id={props.name}>
                  <option value="">Please select an option...</option>
                  { props.options.keyValues && Object.keys(props.options.keyValues).map((option: any, index:any) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {props.error && <p className='help is-danger'>{props.error}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fieldOptions = {
    name: {
      label: 'Name:',
      type: 'text',
      className: inputClass,
      component: (props: FormFieldPropsType<any>) => <BulmaInput {...props} />
    },
    fruits: {
      label: 'Fruits:',
      keyValues: selectOptions,
      className: selectClass,
      component: (props: FormFieldPropsType<any>) => <BulmaSelect {...props} />
    },
    email: {
      label: 'E-mail:',
      type: 'email',
      className: inputClass,
      component: (props: FormFieldPropsType<any> ) => <BulmaInput {...props} />
    }
  };

  const handleSubmit = (formData: any) => {
    alert(JSON.stringify(formData));
  };

  const submitSection = () => {
    return (
      <div className='field is-horizontal'>
        <div className='field-label' />
        <div className='field-body'>
          <div className='field is-grouped is-grouped-right'>
            <div className='control'>
              <button type='submit' className='button is-link'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const props: FormBuilderPropsType<SimpleFormFieldsType> = {
    fields,
    fieldOptions,
    handleSubmit,
    validate,
    submitSection
  };

  return (
    <div className='columns is-multiline is-centered'>
      <div className='column is-12'>
        <h1 className='title has-text-centered'>re-form & Bulma.io</h1>
      </div>
      <div className='column is-one-third'>
        <div className=''>
          <FormBuilder {...props} />
        </div>
      </div>
    </div>
  );
};

export default BulmaForm;
