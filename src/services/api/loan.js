import ApiCore from './utilities/core';

const resource = 'v1/loans';

const apiLoans = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: true,
  patch: false,
  delete: true,
  resource
});

export { apiLoans };
