import React from 'react';
import { FormFieldPropsType } from '../../../index';

const BulmaCheckbox = ({
  options: { className, label, disabled, checkboxText },
  name,
  error,
  setValue,
  checked
}: FormFieldPropsType<string>) => {

  const onChange = (event: React.MouseEvent<HTMLElement>) => setValue(!checked);

  return (
    <>
      <label className="label">{ label }</label>
      <div className="field">
        <div className="control is-expanded">
          <div className={ className }>
            <div onClick={ onChange }>
              <label className="checkbox">
                <input type="checkbox" id="termsAndCondition" { ...{ name, disabled, checked } } />
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
