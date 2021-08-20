import Dashboard from '@kreditpay/components/Dashboard';
import CustomerLandingPage from '@kreditpay/components/CustomerLandingPage';
import SignIn from '@kreditpay/components/SignIn';
import SignUp from '@kreditpay/components/SignUp';
import UserAdd from '@kreditpay/components/User/UserAdd';
import UserPage from '@kreditpay/components/User/UserPage';
import NotFound from '@kreditpay/components/NotFound';
import AppLandingPage from '@kreditpay/components/AppLandingPage';
import ContactUs from '@kreditpay/components/ContactUs';

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
  customer: {
    index: {
      exact: true,
      redirect: true,
      path: '/customer',
      to: '/customer/dashboard'
    },
    dashboard: {
      exact: true,
      path: '/customer/dashboard',
      component: CustomerLandingPage
    }
  },
  agent: {
    index: {
      exact: true,
      redirect: true,
      path: '/agent',
      to: '/admin/dashboard'
    }
  },
  app: {
    index: {
      exact: true,
      redirect: true,
      path: '/app',
      to: '/app/dashboard'
    }
  }
};

export default {
  admin: {
    path: '/admin',
    component: Dashboard,
    guardFuntion: routerGuard.mustBeAuthorized,
    redirectPath: '/'
  },
  agent: {
    path: '/agent',
    component: Dashboard,
    guardFuntion: routerGuard.mustBeAuthorized,
    redirectPath: '/'
  },
  customer: {
    path: '/customer',
    component: Dashboard,
    guardFuntion: routerGuard.mustBeAuthorized,
    redirectPath: '/'
  },
  landingPage: {
    exact: true,
    path: '/',
    component: AppLandingPage,
    guardFuntion: routerGuard.mustBeUnAuthorized,
    redirectPath: '/app'
  },
  app: {
    exact: true,
    path: '/app',
    component: Dashboard,
    guardFuntion: routerGuard.mustBeAuthorized,
    redirectPath: '/'
  },
  contactUs: {
    exact: true,
    path: '/contactUs',
    component: ContactUs,
    guardFuntion: routerGuard.mustBeUnAuthorized
  },
  signIn: {
    exact: true,
    path: '/signIn',
    component: SignIn,
    guardFuntion: routerGuard.mustBeUnAuthorized,
    redirectPath: '/'
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
