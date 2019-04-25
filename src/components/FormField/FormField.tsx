import React, { ChangeEventHandler } from 'react';
import { FormFieldType } from '@reform';

const FormField: FormFieldType = (
  {
    options,
    value,
    name,
    label,
    setValue,
    error
  }
) => {
  const {
    element = 'input',
    type = 'text',
    keyValues = {}
  } = options || {};

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  const getError = (error: string) => (
    <div className="error">{ error }</div>
  );

  switch (element) {
    case 'select': {
      return (
        <div>
          <label>{ label }
            <select { ...{ onChange, defaultValue: value } }>
              {
                Object.keys(keyValues).map((key: string) =>
                  <option key={ key } value={ key }>{ keyValues[key] }</option>)
              }
            </select>
          </label>
          { error && getError(error) }
        </div>
      );
    }
    case 'textarea': {
      return (
        <div>
          <label>{ label }
            <textarea { ...{ name, defaultValue: value, onChange } } />
          </label>
          { error && getError(error) }
        </div>
      );
    }
    default: {
      return (
        <div>
          <label>{ label }<input { ...{ type, name, defaultValue: value, onChange } } /></label>
          { error && getError(error) }
        </div>
      );
    }
  }
};

export default FormField;
