import isEmpty from 'is-empty';
import { formValidator } from '../utils/form';
import { filterObj } from '../utils/helper';

function validateSignUpFormFields(data) {
  let errors = {};

  errors.first_name = formValidator.required()(data.first_name);
  errors.last_name = formValidator.required()(data.last_name);
  errors.email =
    formValidator.required()(data.email) || formValidator.isEmail()(data.email);
  errors.password =
    formValidator.required()(data.password) ||
    formValidator.minLength('password')(8)(data.password) ||
    formValidator.maxLength('password')(14)(data.password);

  errors.password2 =
    formValidator.required()(data.password2) ||
    formValidator.passwordMatch()(data.password, data.password2);

  // return object containing non-empty fields
  errors = filterObj(errors, (key) => !isEmpty(errors[key]));

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export { validateSignUpFormFields };
