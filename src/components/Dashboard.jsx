/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import createRouter from '../router/createRouter';
import { dashboardRoutes } from '../router/routes';

class Dashboard extends PureComponent {
  render() {
    const DashboardRoutes = createRouter(dashboardRoutes);
    return (
      <>
        <Header />
        <div className='dashboard__content'>
          <DashboardRoutes />
        </div>
      </>
    );
  }
}

export default withRouter(Dashboard);
