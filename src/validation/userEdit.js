import isEmpty from 'is-empty';
import { formValidator } from '../utils/form';
import { filterObj } from '../utils/helper';

function validateUserEditFormFields(data) {
  let errors = {};

  errors.first_name = formValidator.required()(data.first_name);
  errors.last_name = formValidator.required()(data.last_name);
  errors.email =
    formValidator.required()(data.email) || formValidator.isEmail()(data.email);

  // return object containing non-empty fields
  errors = filterObj(errors, (key) => !isEmpty(errors[key]));

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export { validateUserEditFormFields };
