import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { USER_ROLES } from '../common/constants';

class Header extends Component {
  handleLogoutClick = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  _getHomePath = () => {
    const { auth: { user } = {} } = this.props;
    let path = '/';

    if (user.role === USER_ROLES.ADMIN || user.role === USER_ROLES.AGENT) {
      path = '/admin';
    } else if (user.role === USER_ROLES.CUSTOMER) {
      path = '/customer';
    }

    return path;
  };

  render() {
    const { auth: { isAuthenticated } = {}, history } = this.props;
    const isHaveAccess = isAuthenticated;

    return (
      <header className='py-4 px-4 sm:px-8 w-full bg-white shadow-md'>
        <nav className='nav'>
          <div className='flex justify-between'>
            <div className='nav__brand font-bold text-2xl'>
              <Link to={this._getHomePath}>KreditPay</Link>
            </div>
            {isHaveAccess && (
              <button
                type='button'
                className='px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 outline-none'
                onClick={this.handleLogoutClick}
              >
                LogOut
              </button>
            )}
            {!isHaveAccess && (
              <div className='space-x-4 sm:space-x-8'>
                <button
                  type='button'
                  className='text-blue-500 hover:underline'
                  onClick={() => history.push('/signIn')}
                >
                  Login
                </button>
                <button
                  type='button'
                  className='px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 outline-none'
                  onClick={() => history.push('/signUp')}
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({}).isRequired
  // logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(withRouter(Header));
