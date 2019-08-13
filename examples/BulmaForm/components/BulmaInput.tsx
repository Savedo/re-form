import React, { ChangeEventHandler } from 'react';
import { FormFieldPropsType } from '@reform';

const BulmaInput = ({
  setValue, options: { className, type, label, disabled, placeholder }, name, value, error
}: FormFieldPropsType<string>) => {

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  return (
    <div className="field">
      <label className="label">{ label }</label>
      <div className="control is-expanded">
        <input
          className={ className }
          type={ type }
          placeholder={ placeholder }
          onChange={ onChange }
          name={ name }
          defaultValue={ value }
          id={ name }
          disabled={ disabled }
        />
        { error && <p className="help is-danger">{ error }</p> }
      </div>
    </div>
  );
};

export default BulmaInput;
