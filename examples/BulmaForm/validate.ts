const validate = (props: any) => {
  const { name, fruits, email } = props;
  let errors: any = {};

  if (!name) {
    errors.name = 'Name is a required field!';
  }
  if (!fruits) {
    errors.fruits = 'Fruits is a required field!';
  }
  if (!email) {
    errors.email = 'Email is required!';
  }

  return errors;
};

export default validate;
