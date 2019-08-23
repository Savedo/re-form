import { isEmpty, isEmail } from 'validator';

const validate = (props: any) => {
  const fields = [
    'name',
    'age',
    'email',
    'address',
    'city',
    'postCode',
    'country',
    'termsAndCondition'
  ];

  return fields.reduce((errors, field) => {
    if (field === 'termsAndCondition') {
      if (!props[field]){
        return {
          ...errors,
          termsAndCondition:
            'Acceptance of Terms & Condition is required'
        };
      }
      return errors;
    }
    if (!props[field] || isEmpty(props[field])) {
      return {
        ...errors,
        [field]: `${field} field is required!`
      };
    }
    if (field === 'email' && !isEmail(props[field])) {
      return {
        ...errors,
        email: 'Email is invalid'
      };
    }
    if (field === 'age' && Number(props[field]) < 18) {
      return {
        ...errors,
        age: 'Age should be 18 or greater'
      };
    }
    return errors;
  }, {});
};

export default validate;
