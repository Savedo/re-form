const validateIban = (iban: string) =>
  Promise.resolve(
    new RegExp(
      '[A-Z]{2}[0-9]{2}(?:[ ]?[0-9]{4}){4}(?!(?:[ ]?[0-9]){3})(?:[ ]?[0-9]{1,2})?'
    ).test(iban)
  );

const validate = async (props: any) => {
  const { iban, receipient, reference } = props;
  const validIban = await validateIban(iban);
  let errors: any = {};

  if (!iban) {
    errors.iban = 'IBAN is a required field!';
  }
  if (iban && !validIban) {
    errors.iban = 'IBAN is Invalid!';
  }
  if (!receipient) {
    errors.receipient = 'Receipient is a required field!';
  }
  if (!reference) {
    errors.reference = 'Reference is a required field!';
  }
  return errors;
};

export default validate;
