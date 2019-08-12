const validate = (props: any) => {
  const { address, city, postcode, country } = props;

  let errors: any = {};

  if (!address) {
    errors.address = 'address is a required field!';
  }
  if (!city) {
    errors.city = 'city is a required field!';
  }
  if (!postcode) {
    errors.postcode = 'postcode is a required field!';
  }
  if (!country) {
    errors.country = 'country is required!';
  } else {
    const countryRegex = /^CH|DE|AT|NL$/;
    if (!countryRegex.test(String(country))) {
      errors.country = 'country is invalid!';
    }
  }

  return errors;
};

export default validate;
