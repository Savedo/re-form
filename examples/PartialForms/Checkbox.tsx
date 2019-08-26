import React, { ChangeEventHandler } from 'react';
import { FormFieldPropsType } from '@reform';

const Checkbox = ({
  options: { className, label, disabled, checkboxText },
  name,
  error,
  setValue,
  checked
}: FormFieldPropsType<string>) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = event => setValue(!checked);
  return (
    <>
      <label>{ label }</label>
      <div>
        <div className={ className }>
          <label>
            <input { ...{ name, disabled, checked, onChange, id: 'termsAndCondition', type: 'checkbox' } } />
            { ' ' + checkboxText }
          </label>
        </div>
        { error && <div className="error">{ error }</div> }
      </div>
    </>
  );
};

export default Checkbox;
