import ApiCore from './utilities/core';

const resource = 'v1/loans';

const apiLoan = new ApiCore({
  getAll: false,
  getSingle: false,
  post: true,
  put: false,
  patch: false,
  delete: true,
  resource
});

export { apiLoan };
