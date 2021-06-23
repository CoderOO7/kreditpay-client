import ApiCore from './utilities/core';

const resource = 'v1/users';

const apiUsers = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: true,
  patch: true,
  delete: true,
  resource
});

apiUsers.massUpdate = () => {
  // Add custom api call logic here
};

export { apiUsers };
