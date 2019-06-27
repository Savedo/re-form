/**
 * This file contains Form Validation using validate.js (https://validatejs.org) for validating
 * our Simple Form. 
 * 
 * You can validate your form using any validation library and write your own implementation 
 * in this file.
 */


import { NAME, AGE, EMAIL } from "./constants";

/**
 * @param object containing formFields.
 * @returns Form Errors agains each key in an object.
 */
const validate = (props: any) => {
  const constraint = {
    [NAME]: {
      presence: true
    },
    [AGE]: {
      presence: true,
      numericality: { greaterThanOrEqualTo: 18, message:'should be greater than or equal to 18' }
    },
    [EMAIL]: {
      presence: true,
      email: true
    }
  }
  const windowObj:any = window
  const validationObj = windowObj.validate( props, constraint, {})
  return toFormErrors(validationObj)

};

// To do: Move this function to some high level directory.
/**
 * @param 'Validation Object from validate function of validate.js'
 * @returns 'Errors object having fields which are not validated'
 */
const toFormErrors = (validationObj: any) => {
  let errors: any = {};
  if (validationObj) {
    Object.keys(validationObj).map((key) => {
      errors[key] = validationObj[key]
    })
  }
  return errors
}

export default validate;
