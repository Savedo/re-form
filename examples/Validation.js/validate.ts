/**
 * This file contains Form Validation using validate.js (https://validatejs.org) for validating
 * our Simple Form.
 *
 * You can validate your form using any validation library and write your own implementation
 * in this file.
 */

import { validate as Validate } from 'validate.js';

/**
 * @param object containing formFields.
 * @returns Form Errors agains each key in an object.
 */
const validate = (props: any) => {
  const constraint = {
    name: {
      presence: { allowEmpty: false }
    },
    age: {
      presence: true,
      numericality: {
        greaterThanOrEqualTo: 18,
        message: 'should be greater than or equal to 18'
      }
    },
    email: {
      presence: true,
      email: true
    }
  };
  const validationObj = Validate(props, constraint, {});
  return toFormErrors(validationObj);

};

// To do: Move this function to some high level directory.
/**
 * @param 'Validation Object from validate function of validate.js'
 * @returns 'Errors object having fields which are not validated'
 */
const toFormErrors = (validationObj: any = {}) =>
  Object.keys(validationObj).reduce((acc, key) => ({ ...acc, [key]: validationObj[key] }), {});

export default validate;
