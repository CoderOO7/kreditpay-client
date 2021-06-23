import isEmail from 'validator/lib/isEmail';
import isEmpty from 'is-empty';

import { FORM_ERROR_MESSAGES } from './constants';

export const formValidator = {
  required: () => (value = '') =>
    isEmpty(value.trim()) ? FORM_ERROR_MESSAGES.required : null,

  isEmail: () => (value = '') => (!isEmail(value) ? FORM_ERROR_MESSAGES.isEmail : null),

  minLength: (fieldName) => (length) => (value = '') =>
    value.length < length ? FORM_ERROR_MESSAGES.minLength(fieldName, length) : null,

  maxLength: (fieldName) => (length) => (value = '') =>
    value.length > length ? FORM_ERROR_MESSAGES.maxLength(fieldName, length) : null,

  equalsTo: (equalFieldName) => (valueCurrField = '', valueEqualField = '') =>
    !isEmpty(valueCurrField) || !isEmpty(valueEqualField)
      ? valueCurrField !== valueEqualField
        ? FORM_ERROR_MESSAGES.equalsTo(equalFieldName)
        : null
      : null,

  passwordMatch: () => (pswd1Value, pswd2Value) =>
    pswd1Value !== pswd2Value ? FORM_ERROR_MESSAGES.passwordMatch : null
};
