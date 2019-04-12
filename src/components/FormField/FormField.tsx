import React, { ChangeEventHandler } from 'react';
import { FormFieldType } from '@reform';

const FormField: FormFieldType = ({ options = {}, value, name, setValue }) => {
  const { element, type, label } = options;

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setValue(event.currentTarget.value);
  };

  switch (element) {
    default: {
      return (
        <div>
          <label>{ label || name }<input { ...{ type, name, value, onChange } } /></label>
        </div>
      );
    }
  }
};

export default FormField;
