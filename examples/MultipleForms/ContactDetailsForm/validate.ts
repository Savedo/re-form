const validate = (props: any) => {
  const { address, city, postcode, countryCode } = props;

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
  if (!countryCode) {
    errors.countryCode = 'iso country code is required!';
  } else {
    const countryRegex = /^CH|DE|AT|NL$/;
    if (!countryRegex.test(String(countryCode))) {
      errors.countryCode = 'Invalid ISO country code. Valid codes: CH, DE, AT or NL';
    }
  }

  return errors;
};

export default validate;
