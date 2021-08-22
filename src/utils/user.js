import { USER_ROLES } from '../common/constants';
import { getAuthToken } from './auth';
import { capitalize } from './helper';

export const getUserRoleOptions = () => [
  {
    value: USER_ROLES.ADMIN,
    label: capitalize(USER_ROLES.ADMIN)
  },
  {
    value: USER_ROLES.CUSTOMER,
    label: capitalize(USER_ROLES.CUSTOMER)
  },
  {
    value: USER_ROLES.AGENT,
    label: capitalize(USER_ROLES.AGENT)
  }
];

export const getUserHomePath = (role = '') => {
  if (getAuthToken() && role) {
    switch (role) {
      case USER_ROLES.ADMIN:
        return '/admin';
      case USER_ROLES.AGENT:
        return '/agent';
      case USER_ROLES.CUSTOMER:
        return '/customer';
      default:
        break;
    }
  }
  return '/';
};
