import isEmpty from 'is-empty';
import { formValidator } from '../utils/form';
import { filterObj } from '../utils/helper';

function validateSignInFormFields(data) {
  let errors = {};

  errors.email =
    formValidator.required()(data.email) || formValidator.isEmail()(data.email);
  errors.password = formValidator.required()(data.password);

  // return object containing non-empty fields
  errors = filterObj(errors, (key) => !isEmpty(errors[key]));

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export { validateSignInFormFields };
