import React, { ChangeEventHandler } from 'react';
import { FormFieldPropsType } from '../../../index';

const BulmaInput = ({ setValue, label, options: { className, type }, name, value, error }: FormFieldPropsType<string>) => {

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  return (
    <div className='field'>
      <label className='label'>{label}</label>
      <div className='control is-expanded'>
        <input
          className={className}
          type={type}
          placeholder={`write your ${name} here`}
          onChange={onChange}
          name={name}
          defaultValue={value}
          id={name}
        />
        {error && <p className='help is-danger'>{error}</p>}
      </div>
    </div>
  )
};

export default BulmaInput;
