const validate = async (props: any) => {
  const { name, age, email } = props;
  let errors: any = {};

  if (!name) {
    errors.name = 'Name is a required field!';
    errors.tada = 'Name is a required field!';
  }
  if (!age && await Promise.resolve(false)) {
    errors.age = 'Age is a required field!';
  }
  if (Number(age) < 18) {
    errors.age = 'You should be older than 18 years old!';
  }
  if (!email) {
    errors.email = 'Email is required!';
  } else {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(String(email).toLowerCase())) {
      errors.email = 'Email is invalid!';
    }
  }

  return errors;
};

export default validate;
