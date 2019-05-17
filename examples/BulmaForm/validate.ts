const validate = (props: any) => {
  const { name, city, email } = props;
  let errors: any = {};

  if (!name) {
    errors.name = 'Name is a required field!';
  }
  if (!city) {
    errors.city = 'City is a required field!';
  }
  if (!email) {
    errors.email = 'Email is required!';
  }

  return errors;
};

export default validate;
