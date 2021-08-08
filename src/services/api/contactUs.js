import ApiCore from './utilities/core';

const contactUs = new ApiCore({
  getAll: false,
  getSingle: false,
  post: true,
  put: false,
  patch: false,
  delete: false,
  resource: 'v1/forms/public/contact'
});

export { contactUs };
