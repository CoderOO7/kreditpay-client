/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import LoadingModal from './shared/modals/LoadingModal';
import { initAppMount } from '../actions';
import createRouter from '../router/createRouter';
import { dashboardRoutes } from '../router/routes';

class Dashboard extends Component {
  componentDidMount() {
    const {
      dispatch,
      app: { isAppMounted = false }
    } = this.props;
    if (!isAppMounted) {
      dispatch(initAppMount());
    }
  }

  render() {
    const {
      app: { isAppMounted = false, errorMessage = '' }
    } = this.props;
    let content = null;
    if (isAppMounted) {
      const DashboardRoutes = createRouter(dashboardRoutes);
      content = (
        <>
          <Header />
          <div className='dashboard__content'>
            <DashboardRoutes />
          </div>
        </>
      );
    } else if (!errorMessage) {
      content = <LoadingModal />;
    } else {
      content = (
        <div className='h-screen items-center justify-center'>{errorMessage}</div>
      );
    }
    return content;
  }
}

const mapStateToProps = (state) => ({
  app: state.app
});

export default connect(mapStateToProps)(withRouter(Dashboard));
