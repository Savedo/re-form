import React, { ChangeEventHandler } from 'react';
import { FormFieldPropsType } from '../../../index';

const BulmaCheckbox = ({
  options: { className, label, disabled, checkboxText },
  name,
  error,
  setValue,
  checked
}: FormFieldPropsType<string>) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = event => setValue(!checked);

  return (
    <>
      <label className="label">{ label }</label>
      <div className="field">
        <div className="control is-expanded">
          <div className={ className }>
            <div>
              <label className="checkbox">
                <input type="checkbox" id="termsAndCondition" { ...{ name, disabled, checked, onChange } } />
                { ' ' + checkboxText }
              </label>
            </div>
          </div>
          { error && <p className="help is-danger">{ error }</p> }
        </div>
      </div>
    </>
  );
};

export default BulmaCheckbox;
