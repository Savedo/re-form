import React, { ChangeEventHandler } from 'react';
import { FormFieldPropsType } from '@reform';

const BulmaSelect = ({ options: {
  keyValues, className, label, disabled }, value, name, error, setValue
}: FormFieldPropsType<string>) => {

  const onChange: ChangeEventHandler<HTMLSelectElement> = event => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <label className="label">{ label }</label>
      <div className="field">
        <div className="control is-expanded">
          <div className={ className }>
            <select onChange={ onChange } defaultValue={ value } id={ name } disabled={ disabled }>
              <option value="">Please select an option...</option>
              { keyValues && Object.keys(keyValues).map((option: any, index: any) => (
                <option key={ index } value={ option }>
                  { option }
                </option>
              )) }
            </select>
          </div>
          { error && <p className="help is-danger">{ error }</p> }
        </div>
      </div>
    </>
  );
};

export default BulmaSelect;
