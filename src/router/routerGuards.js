import { appLocalStorage } from '../utils/storage';
import { ACCESS_TOKEN } from '../common/constants';

export default {
  mustBeAuthorized: () => {
    const token = appLocalStorage.getItem(ACCESS_TOKEN);
    return !!token;
  },
  mustBeUnAuthorized: () => {
    const token = appLocalStorage.getItem(ACCESS_TOKEN);
    return !token;
  }
};
