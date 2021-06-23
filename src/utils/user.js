import { USER_ROLES } from '../common/constants';
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
