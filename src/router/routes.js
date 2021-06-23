import Dashboard from '@kreditpay/components/Dashboard';
import SignIn from '@kreditpay/components/SignIn';
import SignUp from '@kreditpay/components/SignUp';
import UserAdd from '@kreditpay/components/User/UserAdd';
import UserPage from '@kreditpay/components/User/UserPage';
import NotFound from '@kreditpay/components/NotFound';
import routerGuard from './routerGuards';

export const dashboardRoutes = {
  admin: {
    index: {
      exact: true,
      redirect: true,
      path: '/admin',
      to: '/admin/dashboard'
    },
    dashboard: {
      exact: true,
      path: '/admin/dashboard',
      component: UserPage
    },
    user: {
      add: {
        exact: true,
        path: '/admin/users/add',
        component: UserAdd
      }
    }
  },
  notFound: {
    path: '*',
    component: NotFound
  }
};

export default {
  admin: {
    path: '/admin',
    component: Dashboard,
    guardFuntion: routerGuard.mustBeAuthorized,
    redirectPath: '/'
  },
  signIn: {
    exact: true,
    path: '/',
    component: SignIn,
    guardFuntion: routerGuard.mustBeUnAuthorized,
    redirectPath: '/admin'
  },
  signUp: {
    exact: true,
    path: '/signUp',
    component: SignUp,
    guardFuntion: routerGuard.mustBeUnAuthorized,
    redirectPath: '/'
  },
  notFound: {
    path: '*',
    component: NotFound
  }
};
