import ApiCore from './utilities/core';

const authLogin = new ApiCore({
  getAll: false,
  getSingle: false,
  post: true,
  put: false,
  patch: false,
  delete: false,
  resource: 'v1/login'
});

const authSignUp = new ApiCore({
  getAll: false,
  getSingle: false,
  post: true,
  put: false,
  patch: false,
  delete: false,
  resource: 'v1/signup'
});

export { authLogin, authSignUp };
