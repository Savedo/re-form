const validate = (props: any) => {
  const { idCard, idNumber } = props;

  let errors: any = {};

  if (!idCard) {
    errors.idCard = 'idCard is a required field!';
  }
  if (!idNumber) {
    errors.idNumber = 'idNumber is a required field!';
  }

  return errors;
};

export default validate;
