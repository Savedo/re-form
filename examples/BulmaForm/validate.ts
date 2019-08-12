const validate = (props: any) => {
  const errorMessages: any = {
    name: 'Name is a required field!',
    city: 'City is a required field!',
    email: 'Email is required!',
    termsAndConditions: 'Acceptance of Terms & Condition is required'
  };

  const errors = Object.keys(errorMessages).reduce((memo: object, key: string) => {
    if (!!props[key]) {
      return memo;
    }
    return {
      ...memo,
      ...{ [key]: errorMessages[key] }
    };
  }, {});

  return errors;
};

export default validate;
