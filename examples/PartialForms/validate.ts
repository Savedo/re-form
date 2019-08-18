import validator from 'validator';

const validate = (props: any) => {
  const fields = [
    'name',
    'age',
    'email',
    'address',
    'city',
    'postCode',
    'country'
  ];

  return fields.reduce((errors, field) => {
    if (!props[field] || validator.isEmpty(props[field])) {
      return {
        ...errors,
        [field]: `${field} field is required!`
      };
    }
    if (field === 'email' && !validator.isEmail(props[field])) {
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
