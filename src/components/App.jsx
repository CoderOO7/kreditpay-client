import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from '../store';
import ErrorBoundary from './ErrorBoundary';
import routes from '../router/routes';
import createRouter from '../router/createRouter';
import { setApiInterceptor, setAuthToken } from '../utils/auth';
import { ACCESS_TOKEN } from '../common/constants';
import { appLocalStorage } from '../utils/storage';
import history from '../utils/history';

const AppRouter = createRouter(routes);
/**
 * Reset default headers for axios api on page refresh
 */
setAuthToken(appLocalStorage.getItem(ACCESS_TOKEN));
setApiInterceptor();
class App extends PureComponent {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className='bg-gray-100 min-h-screen'>
            <ErrorBoundary>
              <Router history={history}>
                <AppRouter />
              </Router>
            </ErrorBoundary>
          </div>
        </Provider>
        <ToastContainer hideProgressBar pauseOnHover />
      </>
    );
  }
}

export default App;
